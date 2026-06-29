import { whatsapp } from "@/config/appConfig";

/**
 * Build a tracked WhatsApp URL.
 * Appends consistent UTM params so we can attribute clicks per surface.
 *
 *   waUrl("hero", "launch")     → channel URL + UTM
 *   waUrl("partner-cta", "partners", { mode: "chat", text: "..." })
 *                                → wa.me/<number>?text=... + UTM
 */
export type WaSource =
  | "hero"
  | "header"
  | "footer"
  | "float"
  | "cta-block"
  | "city-channel"
  | "deal-card"
  | "deal-details"
  | "deal-example"
  | "launch-phase"
  | "partner-cta"
  | "partner-hero"
  | "pricing"
  | "blog";

interface WaOptions {
  /** "channel" (default): join the WhatsApp Channel. "chat": open a 1:1 chat with the business number. */
  mode?: "channel" | "chat";
  /** Prefilled message body for chat mode. Ignored for channel mode. */
  text?: string;
  /** UTM campaign. Defaults to "whatsapp_cta". */
  campaign?: string;
}

const CONTACT_NUMBER_DIGITS = whatsapp.contactNumber.replace(/\D/g, "");

export function waUrl(source: WaSource, options: WaOptions = {}): string {
  const { mode = "channel", text, campaign = "whatsapp_cta" } = options;
  const base =
    mode === "chat"
      ? `https://wa.me/${CONTACT_NUMBER_DIGITS}`
      : whatsapp.channelUrl;

  const params = new URLSearchParams({
    utm_source: "mealsaver",
    utm_medium: "cta",
    utm_campaign: campaign,
    utm_content: source,
  });
  if (mode === "chat" && text) params.set("text", text);

  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}${params.toString()}`;
}
