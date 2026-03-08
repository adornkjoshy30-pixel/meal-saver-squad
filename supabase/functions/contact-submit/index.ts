import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const FUNCTION_NAME = "contact-submit";

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

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message too short").max(2000),
  company: z.string().max(0, "Bot detected").optional().or(z.literal("")),
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
    log("error", "rate_limit_check_failed", { ip, error: String(rlErr) });
  }

  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const messages = result.error.errors.map((e) => e.message);
      log("warn", "validation_failed", { ip, errors: messages });
      return new Response(
        JSON.stringify({ error: "Validation failed", details: messages }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Honeypot: silently accept if filled
    if (result.data.company) {
      log("warn", "honeypot_triggered", { ip });
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = result.data;

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: sanitize(data.name, 100),
      email: data.email.trim(),
      subject: sanitize(data.subject, 200),
      message: sanitize(data.message, 2000),
    });

    if (error) {
      log("error", "db_insert_failed", { ip, table: "contact_submissions", error: error.message });
      return new Response(
        JSON.stringify({ error: "Failed to submit message" }),
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
