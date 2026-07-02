import { describe, it, expect } from "vitest";
import { waUrl, type WaSource } from "./whatsapp";
import { whatsapp } from "@/config/appConfig";

const ALL_SOURCES: WaSource[] = [
  "hero",
  "header",
  "footer",
  "float",
  "cta-block",
  "city-channel",
  "deal-card",
  "deal-details",
  "deal-example",
  "launch-phase",
  "partner-cta",
  "partner-hero",
  "pricing",
  "blog",
];

const CONTACT_DIGITS = whatsapp.contactNumber.replace(/\D/g, "");

describe("waUrl — WhatsApp CTA URL builder", () => {
  describe.each(ALL_SOURCES)("source=%s", (source) => {
    it("channel mode → points at the WhatsApp channel with UTM", () => {
      const url = new URL(waUrl(source));
      expect(url.origin + url.pathname).toBe(
        whatsapp.channelUrl.split("?")[0]
      );
      expect(url.searchParams.get("utm_source")).toBe("mealsaver");
      expect(url.searchParams.get("utm_medium")).toBe("cta");
      expect(url.searchParams.get("utm_campaign")).toBe("whatsapp_cta");
      expect(url.searchParams.get("utm_content")).toBe(source);
      expect(url.searchParams.get("text")).toBeNull();
    });

    it("chat mode → wa.me/<number> with prefilled text + UTM", () => {
      const text = "Hi Meal Saver! I want to reserve this deal.";
      const url = new URL(waUrl(source, { mode: "chat", text }));
      expect(url.origin).toBe("https://wa.me");
      expect(url.pathname).toBe(`/${CONTACT_DIGITS}`);
      expect(url.searchParams.get("text")).toBe(text);
      expect(url.searchParams.get("utm_content")).toBe(source);
    });
  });

  it("respects a custom campaign", () => {
    const url = new URL(waUrl("hero", { campaign: "launch_week" }));
    expect(url.searchParams.get("utm_campaign")).toBe("launch_week");
  });

  it("uses a real https URL for the channel", () => {
    expect(whatsapp.channelUrl.startsWith("https://")).toBe(true);
  });

  it("contact number contains only digits + country code", () => {
    expect(CONTACT_DIGITS.length).toBeGreaterThanOrEqual(10);
    expect(/^\d+$/.test(CONTACT_DIGITS)).toBe(true);
  });
});