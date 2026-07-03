export interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    category: "Getting Started",
    q: "What is Meal Saver?",
    a: "Meal Saver is a WhatsApp-first food discovery service that connects Kerala bakeries, cake shops and supermarkets with nearby customers. Stores post surplus and short-dated items at discounted prices, and customers reserve on WhatsApp and pick up in person.",
  },
  {
    category: "Getting Started",
    q: "Do I need to download an app?",
    a: "No. Meal Saver works entirely on WhatsApp. Join the channel, tap a deal, message the store, pick up. That's it.",
  },
  {
    category: "Getting Started",
    q: "How is this different from Zomato or Swiggy?",
    a: "We're not a food delivery app. We don't handle payments and we don't cook food. We help local stores share surplus food details with nearby customers who then pay the store directly at pickup. No delivery fee, no commission, no middleman markup.",
  },
  {
    category: "Food & Safety",
    q: "Is surplus food safe to eat?",
    a: "Yes. Surplus food is fresh food that didn't sell in time — not expired food. All Meal Saver partners hold valid FSSAI licences and never list items past their use-by date.",
  },
  {
    category: "Food & Safety",
    q: "What is the difference between best-before and use-by?",
    a: "'Best before' is a quality date — food is at peak until then, but generally safe past it. 'Use by' is a safety date. Meal Saver never lists items past their use-by date.",
  },
  {
    category: "Food & Safety",
    q: "How fresh is the bakery?",
    a: "Bakery items are baked the same day and picked up before close. You get the same product that was on sale in the morning, at a discount because the store needs to clear the shelf.",
  },
  {
    category: "Pricing & Payment",
    q: "How much can I save?",
    a: "Discounts typically range from 20% to 60% off menu price. Some near-expiry supermarket items go up to 70% off.",
  },
  {
    category: "Pricing & Payment",
    q: "How do I pay?",
    a: "You pay the store directly at pickup, in cash or via UPI. Meal Saver never handles payment.",
  },
  {
    category: "Pricing & Payment",
    q: "Are there any fees or subscriptions?",
    a: "None for customers. Meal Saver is free for both customers and partner merchants during the pilot phase.",
  },
  {
    category: "Reservations & Pickup",
    q: "How do I reserve a deal?",
    a: "Tap the deal in the WhatsApp channel. A pre-filled message opens for the store — send it, and the store confirms your reservation.",
  },
  {
    category: "Reservations & Pickup",
    q: "Can I cancel a reservation?",
    a: "Yes. Just message the store you reserved with. Please cancel early so the item can be re-listed for someone else.",
  },
  {
    category: "Reservations & Pickup",
    q: "What if the deal is gone by the time I message?",
    a: "Deals move fast. If a deal is already reserved, the store will let you know and we'll list the next one shortly.",
  },
  {
    category: "For Merchants",
    q: "How do I sign up my bakery or supermarket?",
    a: "Visit the Partners page and submit the merchant signup form. Our team reviews applications manually and gets back within 2–3 business days.",
  },
  {
    category: "For Merchants",
    q: "Does it cost anything to join as a merchant?",
    a: "No. Meal Saver is free for merchants during the pilot. No commissions, no listing fees, no subscription.",
  },
  {
    category: "Coverage",
    q: "Which cities is Meal Saver live in?",
    a: "The pilot is live in Idukki district (including Kattappana). Kochi, Kottayam and other Kerala cities are next. Follow the main WhatsApp channel for launch updates.",
  },
];

export function faqsByCategory(): Record<string, FaqItem[]> {
  return faqs.reduce<Record<string, FaqItem[]>>((acc, f) => {
    (acc[f.category] = acc[f.category] || []).push(f);
    return acc;
  }, {});
}