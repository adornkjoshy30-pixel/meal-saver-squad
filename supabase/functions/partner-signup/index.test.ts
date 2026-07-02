/**
 * Integration test for the partner-signup edge function.
 *
 * Requires (auto-loaded from repo `.env`):
 *   VITE_SUPABASE_URL
 *   VITE_SUPABASE_PUBLISHABLE_KEY
 *
 * Run with:  supabase functions test partner-signup
 *   (or the Lovable test runner)
 *
 * NOTE ON EMAIL NOTIFICATION:
 *   Once the sender email domain is verified in Cloud → Emails, an operator
 *   notification will be enqueued from this edge function. The email-delivery
 *   assertion at the bottom of this file is guarded by IS_EMAIL_READY — flip
 *   that to `true` (or leave the env-var-driven default) after the domain is
 *   verified and re-run this test.
 */
import "https://deno.land/std@0.224.0/dotenv/load.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { assert, assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

const SUPABASE_URL = Deno.env.get("VITE_SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("VITE_SUPABASE_PUBLISHABLE_KEY")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const IS_EMAIL_READY = Deno.env.get("EMAIL_DOMAIN_VERIFIED") === "true";

const FN_URL = `${SUPABASE_URL}/functions/v1/partner-signup`;

const marker = `qa-test-${crypto.randomUUID().slice(0, 8)}`;
const payload = {
  restaurantName: `Test Bakery ${marker}`,
  phone: "+919999900000",
  email: `${marker}@example.com`,
  address: "12 Test Street, Idukki, Kerala 685602",
  description: "Automated QA lead — safe to delete.",
  orderMethod: "pickup_only",
};

Deno.test("partner-signup: valid submission → 200 + row persisted", async () => {
  const res = await fetch(FN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  assertEquals(res.status, 200, `response: ${JSON.stringify(json)}`);
  assertEquals(json.ok, true);

  // Verify persistence (needs service-role locally; falls back to skipping on CI).
  if (SERVICE_ROLE_KEY) {
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { data, error } = await admin
      .from("restaurants")
      .select("id, name, is_active, email")
      .eq("email", payload.email)
      .maybeSingle();
    assertEquals(error, null);
    assert(data, "lead row not found");
    assertEquals(data.is_active, false, "new leads must land unpublished");
    assertEquals(data.name, payload.restaurantName);

    // Cleanup
    await admin.from("restaurants").delete().eq("id", data.id);
  }
});

Deno.test("partner-signup: invalid payload → 400", async () => {
  const res = await fetch(FN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify({ ...payload, phone: "abc" }),
  });
  const body = await res.json();
  assertEquals(res.status, 400);
  assert(Array.isArray(body.details));
});

Deno.test("partner-signup: honeypot filled → silent 200, no row", async () => {
  const trap = `honeypot-${crypto.randomUUID().slice(0, 8)}@example.com`;
  const res = await fetch(FN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      apikey: SUPABASE_ANON_KEY,
    },
    body: JSON.stringify({ ...payload, email: trap, website: "http://spam.example" }),
  });
  await res.text();
  assertEquals(res.status, 200);

  if (SERVICE_ROLE_KEY) {
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { data } = await admin.from("restaurants").select("id").eq("email", trap);
    assertEquals(data?.length ?? 0, 0, "honeypot submissions must not persist");
  }
});

Deno.test({
  name: "partner-signup: operator email notification sent (post domain verification)",
  ignore: !IS_EMAIL_READY,
  fn: async () => {
    if (!SERVICE_ROLE_KEY) throw new Error("SUPABASE_SERVICE_ROLE_KEY required");
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    // Trigger a fresh submission
    const email = `notify-${crypto.randomUUID().slice(0, 8)}@example.com`;
    const res = await fetch(FN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({ ...payload, email }),
    });
    await res.text();

    // Poll email_send_log for up to ~10s
    let sent = false;
    for (let i = 0; i < 10; i++) {
      const { data } = await admin
        .from("email_send_log")
        .select("status, template_name")
        .eq("template_name", "partner-lead-notification")
        .order("created_at", { ascending: false })
        .limit(1);
      if (data?.[0] && (data[0].status === "sent" || data[0].status === "pending")) {
        sent = true;
        break;
      }
      await new Promise((r) => setTimeout(r, 1000));
    }
    assert(sent, "no partner-lead-notification email was enqueued");
  },
});