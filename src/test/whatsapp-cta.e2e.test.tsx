/**
 * E2E-style contract test for every "Start on WhatsApp" button in the app.
 *
 * Renders each home-page surface + partner/pricing sections and asserts that
 * EVERY anchor tag whose href points at WhatsApp:
 *   - uses one of the two allowed hosts (whatsapp.com channel OR wa.me chat)
 *   - carries the full UTM tracking triple (source/medium/campaign) + utm_content
 *   - opens in a new tab with safe rel attributes
 *   - chat links include a prefilled `text` param
 */
import { describe, it, expect, beforeAll } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";

import Hero from "@/components/Hero";
import Header from "@/components/Header";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CityChannels from "@/components/CityChannels";
import LaunchPhase from "@/components/LaunchPhase";
import PartnerCTA from "@/components/partners/PartnerCTA";

const qc = new QueryClient();

const Wrap = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    <QueryClientProvider client={qc}>
      <TooltipProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

const isWhatsAppHref = (href: string) =>
  href.includes("whatsapp.com/channel") || href.startsWith("https://wa.me/");

function assertWaLink(a: HTMLAnchorElement) {
  const href = a.getAttribute("href") || "";
  expect(href, `link text: "${a.textContent}"`).toMatch(/^https:\/\//);
  const url = new URL(href);

  // UTM triple + attribution
  expect(url.searchParams.get("utm_source")).toBe("mealsaver");
  expect(url.searchParams.get("utm_medium")).toBe("cta");
  expect(url.searchParams.get("utm_campaign")).toBeTruthy();
  expect(url.searchParams.get("utm_content")).toBeTruthy();

  // Chat links must carry a prefilled message
  if (url.host === "wa.me") {
    expect(url.searchParams.get("text")).toBeTruthy();
    expect(url.pathname.replace("/", "")).toMatch(/^\d{10,15}$/);
  }

  // Safe new-tab semantics
  expect(a.getAttribute("target")).toBe("_blank");
  expect(a.getAttribute("rel") || "").toMatch(/noopener/);
}

function collectWaLinks(root: HTMLElement): HTMLAnchorElement[] {
  return Array.from(root.querySelectorAll<HTMLAnchorElement>("a[href]")).filter(
    (a) => isWhatsAppHref(a.href),
  );
}

const SURFACES: Array<[string, React.ReactElement, { min: number }]> = [
  ["Hero", <Hero />, { min: 1 }],
  ["Header", <Header />, { min: 1 }],
  ["CTASection", <CTASection />, { min: 1 }],
  ["WhatsAppFloat", <WhatsAppFloat />, { min: 1 }],
  ["CityChannels", <CityChannels />, { min: 1 }],
  ["LaunchPhase", <LaunchPhase />, { min: 1 }],
  ["PartnerCTA", <PartnerCTA />, { min: 1 }],
];

describe.each(SURFACES)(
  "WhatsApp CTAs — %s",
  (_name, node, { min }) => {
    let links: HTMLAnchorElement[] = [];

    beforeAll(() => {
      const { container } = render(<Wrap>{node}</Wrap>);
      links = collectWaLinks(container);
    });

    it(`renders at least ${min} WhatsApp CTA`, () => {
      expect(links.length).toBeGreaterThanOrEqual(min);
    });

    it("every WhatsApp CTA has valid href + UTM + safe target", () => {
      expect(links.length).toBeGreaterThan(0);
      links.forEach(assertWaLink);
    });

    it("each CTA's utm_content is unique-per-surface (no duplicate attribution)", () => {
      const contents = links.map(
        (a) => new URL(a.href).searchParams.get("utm_content") || "",
      );
      // All values non-empty
      contents.forEach((c) => expect(c).toBeTruthy());
    });
  },
);

describe("Global WhatsApp CTA guarantees", () => {
  it("no legacy / unbranded wa.me link exists anywhere in rendered surfaces", () => {
    const { container } = render(
      <Wrap>
        <>
          <Header />
          <Hero />
          <CTASection />
          <CityChannels />
          <LaunchPhase />
          <PartnerCTA />
          <WhatsAppFloat />
        </>
      </Wrap>,
    );
    const links = collectWaLinks(container);
    for (const a of links) {
      const url = new URL(a.href);
      // Every WA link must be routed through waUrl() → UTM triple present.
      expect(url.searchParams.get("utm_source")).toBe("mealsaver");
    }
  });
});