/**
 * Centralized application configuration.
 * All public constants and environment-derived values live here.
 * Import from "@/config/appConfig" — never hardcode URLs, emails, or brand strings in components.
 */

// ─── Environment variables (VITE_ prefix = browser-safe) ────────────────────

const safeEnv = (key: string, fallback = ""): string => {
  const value = import.meta.env[key];
  if (!value && import.meta.env.DEV) {
    console.warn(`[appConfig] Missing env variable: ${key}`);
  }
  return (value as string) || fallback;
};

export const env = {
  supabaseUrl: safeEnv("VITE_SUPABASE_URL"),
  supabaseAnonKey: safeEnv("VITE_SUPABASE_PUBLISHABLE_KEY"),
} as const;

// ─── Site / Brand ───────────────────────────────────────────────────────────

export const site = {
  name: "Meal Saver",
  tagline: "Enjoy More. Waste Less.",
  url: import.meta.env.VITE_SITE_URL || "https://mealsaver.in",
  location: "Kerala, India",
} as const;

// ─── Contact ────────────────────────────────────────────────────────────────

export const contact = {
  email: "hello@mealsaver.in",
  supportHours: "Monday – Friday, 9:00 AM – 6:00 PM IST",
  responseTime: "Within 24–48 hours",
} as const;

// ─── Social ─────────────────────────────────────────────────────────────────

export const social = {
  twitterHandle: "@MealSaverIndia",
  twitter: "#",
  instagram: "#",
  facebook: "#",
} as const;

// ─── WhatsApp ───────────────────────────────────────────────────────────────

export const whatsapp = {
  channelUrl: "https://whatsapp.com/channel/0029Vb7i7Pu4NVio2gT3Xd2g",
  /** Direct business WhatsApp number (digits + country code, no '+') for wa.me chat links. */
  contactNumber: "+917012214280",
} as const;

// ─── Convenience re-exports ─────────────────────────────────────────────────

const appConfig = { env, site, contact, social, whatsapp } as const;
export default appConfig;
