/**
 * Currency formatting helpers.
 * Default currency for Meal Saver is INR (₹) with Indian digit grouping (1,00,000).
 * The signature is currency-agnostic so we can swap defaults or add locales later
 * without touching every call site.
 */

export type SupportedCurrency = "INR";

const FORMATTERS: Record<SupportedCurrency, Intl.NumberFormat> = {
  INR: new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }),
};

/**
 * Format a numeric amount as a currency string.
 * @example formatPrice(1299) // "₹1,299"
 * @example formatPrice(12999) // "₹12,999"
 */
export function formatPrice(amount: number, currency: SupportedCurrency = "INR"): string {
  return FORMATTERS[currency].format(amount);
}

/** Just the symbol — handy for inline composition. */
export const currencySymbol = (currency: SupportedCurrency = "INR"): string =>
  currency === "INR" ? "₹" : currency;
