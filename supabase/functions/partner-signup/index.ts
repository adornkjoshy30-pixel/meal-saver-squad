import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const FUNCTION_NAME = "partner-signup";

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function log(level: "info" | "warn" | "error", event: string, meta: Record<string, unknown> = {}) {
  const entry = { ts: new Date().toISOString(), fn: FUNCTION_NAME, level, event, ...meta };
  if (level === "error") console.error(JSON.stringify(entry));
  else if (level === "warn") console.warn(JSON.stringify(entry));
  else console.log(JSON.stringify(entry));
}

const signupSchema = z.object({
  restaurantName: z
    .string()
    .trim()
    .min(2, "Restaurant name must be at least 2 characters")
    .max(100, "Restaurant name must be less than 100 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[+]?[0-9\s-]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(100)
    .optional()
    .or(z.literal("")),
  address: z
    .string()
    .trim()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be less than 200 characters"),
  description: z
    .string()
    .trim()
    .max(500, "Description must be less than 500 characters")
    .optional()
    .or(z.literal("")),
  orderMethod: z.enum(["pickup_only", "dine_in_only", "both"]),
  website: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

function sanitize(str: string, maxLength: number): string {
  return str.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().substring(0, maxLength);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const ip = getClientIp(req);

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  // Durable rate limiting via database
  try {
    const { data: isLimited } = await supabaseAdmin.rpc("check_rate_limit", {
      p_identifier: ip,
      p_function_name: FUNCTION_NAME,
      p_max_requests: 5,
      p_window_seconds: 3600,
    });

    if (isLimited) {
      log("warn", "rate_limited", { ip });
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
  } catch (rlErr) {
    // If rate limit check fails, log but don't block the request
    log("error", "rate_limit_check_failed", { ip, error: String(rlErr) });
  }

  try {
    const body = await req.json();
    const result = signupSchema.safeParse(body);

    if (!result.success) {
      const messages = result.error.errors.map((e) => e.message);
      log("warn", "validation_failed", { ip, errors: messages });
      return new Response(
        JSON.stringify({ error: "Validation failed", details: messages }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Honeypot: silently accept if filled
    if (result.data.website) {
      log("warn", "honeypot_triggered", { ip });
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = result.data;

    const { error } = await supabaseAdmin.from("restaurants").insert({
      name: sanitize(data.restaurantName, 100),
      phone: data.phone.trim(),
      email: data.email?.trim() || null,
      address: sanitize(data.address, 200),
      description: data.description ? sanitize(data.description, 500) : null,
      order_method: data.orderMethod,
      is_active: false,
    });

    if (error) {
      log("error", "db_insert_failed", { ip, table: "restaurants", error: error.message });
      return new Response(
        JSON.stringify({ error: "Failed to submit application" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    log("info", "submission_success", { ip });
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    log("error", "unexpected_error", { ip, error: String(err) });
    return new Response(
      JSON.stringify({ error: "Invalid request" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
