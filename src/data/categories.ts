export interface CategoryPageData {
  slug: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  keywords: string;
  sections: Array<{ heading: string; body: string[] }>;
  faqs: Array<{ q: string; a: string }>;
  related: string[]; // slugs
}

export const categories: CategoryPageData[] = [
  {
    slug: "bakeries",
    h1: "Bakery Deals in Kerala — Fresh, Discounted, Every Day",
    title: "Bakery Deals in Kerala | Discounted Fresh Bakes | Meal Saver",
    description:
      "Discover fresh breads, cakes, puffs and pastries from local Kerala bakeries at end-of-day prices via WhatsApp. Zero waste, real value.",
    keywords: "bakery deals Kerala, bakery discounts, unsold bakery products, Kerala bakery offers, fresh bread deals, discounted pastries",
    intro:
      "Local bakeries in Kerala bake fresh every morning. What isn't sold by evening is often perfectly good — just past prime shelf hours. Meal Saver connects you to those bakes at a fair discount, straight to your WhatsApp.",
    sections: [
      {
        heading: "Why partner bakeries discount unsold items",
        body: [
          "Bakery products are baked in the morning for peak-of-freshness sales through the day. Anything unsold by closing time is either binned or given away. Discounting the last batch via Meal Saver lets bakers recover cost, cut waste, and delight neighbours — a genuine win for everyone.",
          "You get the same bread, cake or pastry you'd buy at 11 AM — you just pick it up closer to closing at a lower price.",
        ],
      },
      {
        heading: "What kinds of bakery products you'll find",
        body: [
          "Freshly baked breads (white, wheat, multigrain, buns), sweet and savoury puffs, cream pastries, cookies, rusks, cupcakes, doughnuts, and unsold cake slices from cake shops.",
          "Availability changes daily — that's the point. Follow the channel to see what each partner has that evening.",
        ],
      },
      {
        heading: "How to grab a bakery deal",
        body: [
          "Join the Meal Saver WhatsApp channel. When a partner bakery posts a deal, tap the message, walk over during the pickup window, and pay the bakery directly. No app install, no delivery fee, no middlemen.",
        ],
      },
    ],
    faqs: [
      { q: "Is discounted bakery food safe?", a: "Yes. All items are freshly baked the same day and are within their normal shelf life at pickup. Meal Saver partners are verified for hygiene and licensing." },
      { q: "How much can I save on bakery items?", a: "Discounts typically range from 20% to 50% off menu price, depending on the bakery and time of pickup." },
      { q: "Do I need a card or online payment?", a: "No. You pay the bakery directly in cash or UPI at pickup. Meal Saver never handles payments." },
    ],
    related: ["cake-shops", "supermarkets", "surprise-boxes", "food-waste"],
  },
  {
    slug: "cake-shops",
    h1: "Cake Shop Deals in Kerala — Fresh Cakes at Fair Prices",
    title: "Kerala Cake Shop Deals | Discounted Fresh Cakes | Meal Saver",
    description:
      "Local Kerala cake shops share unsold slices, whole cakes and pastries at end-of-day prices on Meal Saver's WhatsApp channel.",
    keywords: "cake shop deals Kerala, discounted cakes, unsold cake slices, birthday cake offers, Kerala pastry deals",
    intro:
      "Cake shops prep to peak demand and often finish the day with beautiful, perfectly fresh cakes and pastries that would otherwise go to waste. Meal Saver channels that surplus into fair-priced, joyful pickups for neighbours.",
    sections: [
      {
        heading: "What's on offer",
        body: [
          "Whole cakes (chocolate, black forest, red velvet, pineapple, butterscotch), individual pastries, brownies, mousse cups, cheesecake slices and celebration cakes that weren't collected on the day.",
        ],
      },
      {
        heading: "Why cake shops discount",
        body: [
          "Fresh cream and premium cakes have a short peak window. Shops would rather recover part of the value and keep a happy neighbour than throw a cake in the bin. Discounts are their standard end-of-day practice — Meal Saver just makes them visible.",
        ],
      },
    ],
    faqs: [
      { q: "Are the cakes fresh?", a: "Yes — they were baked or decorated the same day. You collect them within the pickup window listed on each deal." },
      { q: "Can I request a specific flavour?", a: "Deals are for whatever the shop has left that evening. Follow the channel to see the day's line-up." },
    ],
    related: ["bakeries", "surprise-boxes", "affordable-food"],
  },
  {
    slug: "supermarkets",
    h1: "Supermarket Deals in Kerala — Groceries at Great Value",
    title: "Supermarket Deals in Kerala | Discount Groceries | Meal Saver",
    description:
      "Local Kerala supermarkets share short-dated groceries, produce and packaged goods at discounted prices via Meal Saver's WhatsApp channel.",
    keywords: "supermarket deals Kerala, discount grocery, Kerala grocery savings, short-dated groceries, supermarket offers",
    intro:
      "Supermarkets carry thousands of SKUs. Some hit their sell-by window before customers reach them. Meal Saver helps neighbourhood supermarkets in Kerala move quality stock at a fair discount instead of letting it expire on the shelf.",
    sections: [
      {
        heading: "What you'll find",
        body: [
          "Fresh fruits and vegetables approaching peak ripeness, dairy near best-before, packaged goods on short date, bakery from in-store counters, prepared foods and end-of-day deli items.",
          "Everything is still within its safe consumption window. Best-before is a quality date, not a safety cliff.",
        ],
      },
      {
        heading: "How much you save",
        body: [
          "Typical discounts range from 20% to 60% depending on the product and time to best-before. It's the cheapest way to shop essentials in Kerala without compromising on quality.",
        ],
      },
    ],
    faqs: [
      { q: "Is short-dated food safe to eat?", a: "Yes. 'Best before' indicates peak quality, not safety. Products are safe well past that date if stored properly. Products past 'use by' are not offered on Meal Saver." },
      { q: "Can I return items?", a: "Returns are handled by each supermarket directly under their standard policy. Meal Saver is a discovery service, not the seller." },
    ],
    related: ["grocery-stores", "frozen-foods", "near-expiry-food", "budget-meals"],
  },
  {
    slug: "grocery-stores",
    h1: "Grocery Store Deals in Kerala — Save on Everyday Essentials",
    title: "Grocery Store Deals Kerala | Local Discount Groceries | Meal Saver",
    description:
      "Neighbourhood grocery stores in Kerala share short-dated staples, snacks and pantry items at discounted prices on Meal Saver.",
    keywords: "grocery deals Kerala, discount grocery store, local grocery offers, Kerala kirana deals, save on groceries",
    intro:
      "Small kirana stores and grocery shops are the backbone of Kerala neighbourhoods. Meal Saver helps them clear short-dated stock at a fair discount so nothing edible ends up in the bin — and you save on your monthly essentials.",
    sections: [
      {
        heading: "Everyday items, honest prices",
        body: [
          "Rice, atta, pulses, spices, oils, snacks, biscuits, sauces, condiments and packaged foods — all within their safe window, discounted because the store wants to clear the shelf for fresh stock.",
        ],
      },
    ],
    faqs: [
      { q: "Are these expired products?", a: "No. Meal Saver never lists expired stock. All items are within their manufacturer-stated safe use window." },
    ],
    related: ["supermarkets", "near-expiry-food", "budget-meals", "affordable-food"],
  },
  {
    slug: "frozen-foods",
    h1: "Frozen Food Deals in Kerala — Snacks, Ready Meals & More",
    title: "Frozen Food Deals Kerala | Discounted Frozen Snacks | Meal Saver",
    description:
      "Discounted frozen snacks, ready meals, ice cream and frozen produce from Kerala supermarkets — near best-before, still full quality.",
    keywords: "frozen food deals Kerala, discount frozen snacks, ice cream offers Kerala, frozen ready meals",
    intro:
      "Frozen food has a long safe life, but stores rotate stock aggressively to keep freezers fresh. That means near-best-before frozen items — samosas, cutlets, parathas, ice cream, ready meals — come to Meal Saver at big discounts.",
    sections: [
      {
        heading: "Why frozen items are heavily discounted",
        body: [
          "Frozen storage extends safety far beyond a shelf date, but supermarkets need freezer space for incoming stock. Discounting near-BB frozen product clears the freezer and keeps quality high for you.",
        ],
      },
    ],
    faqs: [
      { q: "How long can I keep frozen deals at home?", a: "As long as they stay frozen and the packaging is intact, frozen food remains safe. Refer to each product's guidance." },
    ],
    related: ["supermarkets", "grocery-stores", "budget-meals"],
  },
  {
    slug: "near-expiry-food",
    h1: "Near-Expiry Food Deals — Perfectly Safe, Deeply Discounted",
    title: "Near-Expiry Food Deals in Kerala | Safe Discount Groceries | Meal Saver",
    description:
      "Near-expiry does not mean unsafe. See how Kerala supermarkets and bakeries share short-dated food at up to 60% off through Meal Saver.",
    keywords: "near expiry food, short dated food Kerala, safe discount food, best before vs use by, near expiry grocery",
    intro:
      "Near-expiry food is one of the most misunderstood categories in retail. It is not unsafe. It is not spoiled. It is simply food that a store needs to move faster than its natural sell-through. Meal Saver connects that food with people who want to save money and reduce waste.",
    sections: [
      {
        heading: "Best before vs. Use by — the difference matters",
        body: [
          "'Best before' is a quality date — the food will still taste at peak until this date. It's usually safe to eat after, though texture or flavour may dip slightly.",
          "'Use by' is a safety date — food should be consumed by then. Meal Saver partners do not list items past their use-by date.",
        ],
      },
      {
        heading: "How near-expiry saves the planet",
        body: [
          "Roughly a third of all food produced globally is wasted. Near-expiry rescue is one of the most direct, high-impact ways to cut retail food waste without changing what you eat.",
        ],
      },
    ],
    faqs: [
      { q: "Is near-expiry food dangerous?", a: "No. Near-expiry means near the best-before or use-by date. Meal Saver never lists past use-by items. Best-before items remain safe past the date; only quality may dip." },
      { q: "How much can I save?", a: "Discounts commonly range from 30% to 70% on near-expiry items — one of the biggest savings categories on the platform." },
    ],
    related: ["supermarkets", "food-waste", "budget-meals", "affordable-food"],
  },
  {
    slug: "food-waste",
    h1: "Food Waste in India — The Problem, The Numbers, The Fix",
    title: "Food Waste in India | Causes, Impact & How To Reduce It | Meal Saver",
    description:
      "India throws away millions of tonnes of edible food every year. Learn the causes, environmental cost and simple actions that cut retail food waste.",
    keywords: "food waste India, food waste reduction, zero food waste, sustainable food, food rescue India",
    intro:
      "India wastes around 68 million tonnes of food every year, worth over ₹1 lakh crore. Much of it is edible food from supermarkets, bakeries and homes that simply didn't sell in time. Meal Saver is one part of the solution — here's the wider picture.",
    sections: [
      {
        heading: "Where the waste happens",
        body: [
          "Roughly 40% of food loss in India happens in the supply chain (farm to shelf). The remaining 60% is retail and consumer waste — the part households and stores can directly reduce.",
          "Retail-level waste is dominated by short-shelf-life categories: bakery, dairy, produce and prepared foods. This is exactly where Meal Saver focuses.",
        ],
      },
      {
        heading: "The environmental cost",
        body: [
          "Wasted food in landfill produces methane — a greenhouse gas roughly 28 times more potent than CO₂ over 100 years. Rescuing one meal saves not just food but the water, land, energy and emissions that produced it.",
        ],
      },
      {
        heading: "What you can do",
        body: [
          "Shop near-expiry when you can. Freeze bread and bakery items you can't eat immediately. Plan meals for the week. Follow local food rescue channels like Meal Saver. Every meal saved matters.",
        ],
      },
    ],
    faqs: [
      { q: "How much food is wasted in India each year?", a: "Approximately 68 million tonnes, worth over ₹1 lakh crore — one of the highest food-waste footprints globally." },
      { q: "Does saving food actually help the climate?", a: "Yes. Food waste is responsible for roughly 8–10% of global greenhouse gas emissions. Reducing it is one of the most effective climate actions individuals can take." },
    ],
    related: ["near-expiry-food", "food-rescue", "sustainable-shopping", "surprise-boxes"],
  },
  {
    slug: "affordable-food",
    h1: "Affordable Food Near You — Quality Groceries at Fair Prices",
    title: "Affordable Food Near Me in Kerala | Cheap Quality Groceries | Meal Saver",
    description:
      "Looking for affordable food near you in Kerala? Meal Saver's WhatsApp channel lists local bakery, grocery and supermarket deals at up to 60% off.",
    keywords: "affordable food near me, cheap food near me, budget grocery Kerala, low cost meals Kerala, affordable groceries",
    intro:
      "Rising food prices squeeze every household. Meal Saver connects Kerala residents with quality food from trusted local stores at end-of-day and near-expiry prices — no compromise on freshness, big compromise on cost.",
    sections: [
      {
        heading: "Where the savings come from",
        body: [
          "Stores lose money on food that doesn't sell in time. Meal Saver helps them recover part of that value by connecting the deal with a nearby customer. The saving is passed to you — usually 20–60% off menu.",
        ],
      },
      {
        heading: "Real savings, real families",
        body: [
          "A family of four picking up two bakery deals and a supermarket rescue box per week can meaningfully cut monthly grocery spend — while eating exactly the same quality of food.",
        ],
      },
    ],
    faqs: [
      { q: "Is affordable food lower quality?", a: "No. Meal Saver deals are the same products the store sells at full price — just discounted because they need to move today." },
    ],
    related: ["budget-meals", "student-meals", "near-expiry-food", "grocery-stores"],
  },
  {
    slug: "budget-meals",
    h1: "Budget Meals in Kerala — Eat Well Without Overspending",
    title: "Budget Meals in Kerala | Cheap Quality Food Deals | Meal Saver",
    description:
      "Find budget-friendly meal ingredients, bakery items and supermarket deals in Kerala. Save 30–60% on quality food with Meal Saver's WhatsApp channel.",
    keywords: "budget meals Kerala, cheap meals Kerala, low budget grocery, affordable meal ideas India, save money on food",
    intro:
      "Eating well on a budget in Kerala is easier than most people think. Meal Saver's daily deals from bakeries, supermarkets and grocery stores give you the ingredients — you get quality meals for a fraction of usual cost.",
    sections: [
      {
        heading: "How to plan budget meals with Meal Saver deals",
        body: [
          "Follow the channel each evening. Build the next day's meals around what's discounted — bread and eggs for breakfast, rice-based lunch from short-dated grocery, a bakery snack for tea. The savings add up quickly.",
        ],
      },
    ],
    faqs: [
      { q: "How much can a small family save?", a: "Households using Meal Saver weekly typically report meaningful reductions in grocery spend — often thousands of rupees a month, without changing what they eat." },
    ],
    related: ["affordable-food", "student-meals", "grocery-stores", "supermarkets"],
  },
  {
    slug: "student-meals",
    h1: "Student Food Savings in Kerala — Eat Well on a Hostel Budget",
    title: "Student Meals & Food Deals Kerala | Cheap Eats for Students | Meal Saver",
    description:
      "Students in Kerala save big on daily food with Meal Saver. Bakery, grocery and supermarket deals delivered to WhatsApp — no app, no fees.",
    keywords: "student food Kerala, cheap eats for students, hostel food savings, budget meals for students India, student grocery",
    intro:
      "Between fees, rent and books, food eats the rest of the student budget. Meal Saver's local deals — fresh from Kerala bakeries and supermarkets — mean full meals without the full-price shock.",
    sections: [
      {
        heading: "Why students love Meal Saver",
        body: [
          "No app to install (works over WhatsApp). No delivery fee. No minimum order. Pick up on your way back from campus. Split a bakery deal between roommates and pay ₹20 each for tea-time.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a student discount?", a: "The deals themselves are already discounted 20–60% off menu — that's the discount. No sign-up, no student ID required." },
    ],
    related: ["budget-meals", "affordable-food", "bakeries"],
  },
  {
    slug: "surprise-boxes",
    h1: "Surprise Food Boxes — Great Value, Zero Waste, Real Fun",
    title: "Surprise Food Boxes in Kerala | Mystery Bakery Boxes | Meal Saver",
    description:
      "Surprise boxes bundle a store's unsold items at a big discount. Learn how they work and where to find them in Kerala on Meal Saver.",
    keywords: "surprise food boxes, mystery bakery box, Kerala surprise box, food rescue box India, Too Good To Go India",
    intro:
      "A surprise box is a curated bundle of a store's end-of-day surplus, sold at a big discount. You don't pick the contents — the shop packs what's left. It's the most fun way to save money and rescue food.",
    sections: [
      {
        heading: "How surprise boxes work",
        body: [
          "The store lists a fixed-price box (say ₹149) worth 2–3× at menu price. You reserve on WhatsApp, pick up in the window, and open it at home. Contents vary — that's the surprise.",
        ],
      },
      {
        heading: "Are surprise boxes good value?",
        body: [
          "Yes. Boxes are typically worth 2–3× their price. The shop wins by moving surplus, you win by eating well for less, and food that would have been binned finds a home.",
        ],
      },
    ],
    faqs: [
      { q: "What's inside a surprise box?", a: "Whatever the shop has surplus of that day — usually a mix of bakery, snacks and pastries for bakery boxes, or a mix of produce and groceries for supermarket boxes." },
      { q: "Can I choose what goes in?", a: "No — that's the point. If you want specific items, browse the regular deals instead." },
    ],
    related: ["bakeries", "food-waste", "food-rescue"],
  },
  {
    slug: "food-rescue",
    h1: "Food Rescue in India — How Ordinary People Save Millions of Meals",
    title: "Food Rescue in India | How It Works & Why It Matters | Meal Saver",
    description:
      "Food rescue redirects edible surplus from stores to nearby customers instead of the bin. Learn how the movement works and how Meal Saver contributes.",
    keywords: "food rescue India, food redistribution, surplus food India, food recovery, save food India",
    intro:
      "Food rescue means diverting perfectly edible food from waste by connecting it with someone who wants it. It's not charity, not clearance — it's a fair exchange between stores and neighbours, at a discount that reflects the timing.",
    sections: [
      {
        heading: "How food rescue differs from food donation",
        body: [
          "Donation gives food to those in need at no cost. Rescue sells surplus at a fair discount to anyone who wants it. Both matter — rescue can operate at retail scale because it works for the store's economics.",
        ],
      },
      {
        heading: "How Meal Saver fits in",
        body: [
          "We're the WhatsApp channel that makes rescue frictionless in India. Stores post surplus, customers reserve, meals are saved. No app, no delivery, no waste.",
        ],
      },
    ],
    faqs: [
      { q: "Is food rescue legal in India?", a: "Yes. Selling surplus food that is within its safe consumption window is standard retail practice. Meal Saver partners hold their own FSSAI licences." },
    ],
    related: ["food-waste", "near-expiry-food", "sustainable-shopping"],
  },
  {
    slug: "sustainable-shopping",
    h1: "Sustainable Shopping in Kerala — Eco-Friendly Food Choices",
    title: "Sustainable Food Shopping Kerala | Eco-Friendly Groceries | Meal Saver",
    description:
      "Sustainable shopping is about buying what will actually get eaten. Meal Saver's rescue deals help Kerala shoppers cut waste and carbon at every trip.",
    keywords: "sustainable shopping Kerala, eco friendly grocery, zero waste shopping India, sustainable food India, low carbon groceries",
    intro:
      "Sustainable food shopping isn't only about organic labels or reusable bags. The biggest lever most households can pull is simply this: buy food that will actually be eaten. Meal Saver's rescue deals make that the cheapest option.",
    sections: [
      {
        heading: "Small habits, real impact",
        body: [
          "Rescuing one bakery deal a week diverts kilograms of food from landfill each year. Combined across a neighbourhood, the impact compounds into tonnes of food and thousands of litres of water saved.",
        ],
      },
    ],
    faqs: [
      { q: "Is rescued food really more sustainable?", a: "Yes. Rescuing food you'd otherwise buy new avoids the water, energy and land that would have gone into producing a fresh unit." },
    ],
    related: ["food-waste", "food-rescue", "near-expiry-food"],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}