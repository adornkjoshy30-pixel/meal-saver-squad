/**
 * Content governance module.
 * Centralizes reusable business copy so components, pages, and blog data
 * all draw from a single source of truth.
 *
 * Rules for contributors:
 *  1. Never claim pilot results, traction metrics, or user counts we don't have.
 *  2. Never claim capabilities we don't have (payment processing, order management, dashboards, apps).
 *  3. Use `operatingModel` language when describing how Meal Saver works.
 *  4. Use `allowedCTAs` labels for buttons — do not invent new CTA copy.
 *  5. Contact identity comes from appConfig.contact — never hardcode emails.
 */

// ─── Operating model: the canonical description of what Meal Saver does ─────

export const operatingModel = {
  oneLiner:
    "Meal Saver is a WhatsApp-first surplus food deal service connecting Kerala's restaurants with nearby customers.",
  howItWorks: [
    "Restaurants share surplus food details with Meal Saver via WhatsApp.",
    "Our team verifies the deal and publishes it in city-specific WhatsApp channels.",
    "Customers see the deal, reserve via WhatsApp, and pick up directly from the restaurant.",
    "Customers pay the restaurant directly — Meal Saver does not process payments.",
  ],
  roleDisclaimer:
    "Meal Saver acts only as a communication and promotion service. We do not sell food, prepare meals, deliver food, or process payments.",
  currentPhase: "Pilot launch across Kerala — onboarding early restaurant partners.",
} as const;

// ─── Allowed CTA labels — use only these on buttons ────────────────────────

export const allowedCTAs = {
  customerPrimary: "Join WhatsApp Deals",
  partnerPrimary: "Become a Restaurant Partner",
  partnerApply: "Apply as a Partner",
  contactUs: "Contact Us",
  joinChannel: "Join WhatsApp Channel",
} as const;

// ─── Prohibited claims — for reference during content reviews ──────────────

export const prohibitedClaims = [
  "We process payments",
  "Order management / inventory management / dashboard",
  "X meals saved / X kg diverted (unless sourced & dated)",
  "Specific revenue figures for partners (e.g. ₹30K/month)",
  "Conversion rate claims",
  "Free trial (we are not SaaS)",
  "Download our app",
] as const;
