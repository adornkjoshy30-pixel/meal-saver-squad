export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  category: "Impact" | "Education" | "Stories" | "Tips";
  readTime: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "reducing-food-waste-in-kerala",
    title: "How Kerala Can Lead India's Fight Against Food Waste",
    description: "India wastes over ₹1 lakh crore of food yearly. Here's how Kerala's restaurants and consumers can lead the change with surplus food services like Meal Saver.",
    excerpt: "With over ₹1 lakh crore worth of food wasted annually in India, Kerala's vibrant food industry has a unique opportunity to lead the change.",
    date: "2026-02-20",
    category: "Impact",
    readTime: "5 min read",
    content: [
      "India wastes over ₹1 lakh crore worth of food every year. That's not just an economic loss — it's a humanitarian and environmental crisis. In Kerala, a state renowned for its food culture and hospitality, thousands of kilograms of perfectly edible food are thrown away daily by restaurants, bakeries, and grocery stores.",
      "The root cause isn't carelessness. Restaurants prepare food based on expected demand, but demand fluctuates. A rainy evening, a cancelled event, or a slow weekday can leave kitchens with surplus food that goes unsold. Without a system to redirect this food, it ends up in the bin.",
      "This is where services like Meal Saver step in. By connecting surplus food from local businesses with price-conscious, eco-aware customers through WhatsApp channels, we create a simple system that benefits everyone. Restaurants recover revenue from food they'd otherwise discard. Customers get quality meals at discounted prices. And the environment benefits from reduced methane emissions from landfills.",
      "Kerala is uniquely positioned to lead this movement. The state has high literacy, widespread smartphone adoption, and a deeply rooted food culture. WhatsApp — the most popular messaging app in Kerala — serves as the perfect channel, removing the barrier of downloading yet another app.",
      "The potential is significant: if even a fraction of Kerala's restaurants shared their surplus through structured channels, thousands of kilograms of food could be diverted from landfills every month. Customers would save money, and restaurants would earn from food that currently goes to waste.",
      "This is just the beginning. With more restaurants joining and more customers choosing surplus food, Kerala can set a national example for how simple communication tools and community effort can address one of India's most pressing problems.",
    ],
  },
  {
    slug: "why-surplus-food-is-safe",
    title: "Is Surplus Food Safe to Eat? Here's What You Need to Know",
    description: "Surplus food is not expired food. Learn the difference between surplus and expired food, and why surplus meals from verified restaurants are perfectly safe and delicious.",
    excerpt: "Surplus food is not expired food. Learn about the difference and why surplus meals from verified restaurants are perfectly safe and delicious.",
    date: "2026-02-10",
    category: "Education",
    readTime: "4 min read",
    content: [
      "One of the most common questions we hear is: \"Is surplus food safe to eat?\" The short answer is yes — absolutely. But let's break down why.",
      "Surplus food is simply food that was prepared fresh but went unsold during normal business hours. It's the same food that was on the menu at full price earlier in the day. A biryani prepared at 11 AM for lunch service that wasn't sold by 2 PM is still perfectly good — it's just surplus.",
      "This is fundamentally different from expired food. Expired food has passed its use-by date and may pose health risks. Surplus food, on the other hand, is within its safe consumption window. The only reason it's discounted is that the restaurant needs to clear it before preparing the next batch.",
      "At Meal Saver, food safety is a priority. We ask partner restaurants to hold a valid FSSAI license and verify this during onboarding. Pickup windows are carefully timed — usually within 2–4 hours of preparation — to ensure freshness.",
      "We also work with restaurant partners to follow proper handling guidelines. Food should be stored at appropriate temperatures, packaged hygienically, and clearly communicated with pickup time windows.",
      "The global surplus food movement proves this model works safely at scale. Too Good To Go in Europe has saved over 300 million meals. OLIO in the UK redistributes millions of food items monthly. These services operate under strict food safety regulations, and Meal Saver follows the same principles adapted for India's context.",
      "So next time you see a surplus food deal at a big discount, remember: you're not getting lesser food. You're getting the same quality at a better price — and helping reduce waste in the process.",
    ],
  },
  {
    slug: "how-surplus-food-helps-restaurants",
    title: "Why Restaurants Should Stop Throwing Away Unsold Food",
    description: "Kerala's restaurants lose thousands monthly on unsold food. Here's how sharing surplus with nearby customers can turn waste into revenue.",
    excerpt: "Kerala restaurants lose thousands monthly on unsold food. Here's how surplus food sharing can turn that loss into a new opportunity.",
    date: "2026-01-28",
    category: "Stories",
    readTime: "4 min read",
    content: [
      "Bakeries and restaurants across Kerala deal with the same daily challenge: what to do with food that didn't sell. Cakes, puffs, bread rolls, biryani portions — all perfectly fresh, but unsold by closing time.",
      "Most of the time, this food goes straight to the bin. It's painful for the people who made it, and it's a real financial loss for the business.",
      "The idea behind Meal Saver is simple: instead of throwing that food away, share the details with us on WhatsApp. We verify the information and publish it as a deal in your city's WhatsApp channel, where nearby customers can see it.",
      "Customers visit the restaurant, pick up the food, and pay the restaurant directly. There's no app to install, no dashboard to manage, and no commission to pay during our pilot phase.",
      "For restaurants, the benefit is straightforward — earn from food that would otherwise be wasted. But there are secondary benefits too: new customers discover your restaurant through Meal Saver deals, and some of them become regulars.",
      "If you run a restaurant, bakery, cloud kitchen, or grocery store in Kerala and want to stop losing money to food waste, applying to join Meal Saver takes just a few minutes. We handle the publishing and customer communication — you just share what's left over.",
    ],
  },
  {
    slug: "whatsapp-ordering-no-app-needed",
    title: "Why Meal Saver Uses WhatsApp Instead of a Separate App",
    description: "No app downloads, no signups. Learn why Meal Saver chose WhatsApp as the communication channel and how it makes surplus food accessible to everyone in Kerala.",
    excerpt: "No app downloads, no signups. Here's why WhatsApp is the perfect channel for surplus food discovery in Kerala.",
    date: "2026-01-15",
    category: "Education",
    readTime: "3 min read",
    content: [
      "When we started building Meal Saver, the conventional advice was clear: build a mobile app. Every food-tech startup has one. But we chose a different path — WhatsApp.",
      "Here's why: Kerala has over 35 million WhatsApp users. It's the default communication channel for everything from family groups to business orders. When someone wants to order a cake from their local bakery, they don't download an app — they send a WhatsApp message.",
      "By building on WhatsApp, we eliminated the biggest friction point in food-tech: app downloads. There's zero barrier to entry. See a deal on our website or WhatsApp channel, tap to reserve via WhatsApp, visit the restaurant, pick up your food.",
      "For restaurant partners, this is equally powerful. They don't need to learn a new dashboard or manage another tablet in the kitchen. They send us their surplus details as a WhatsApp message — it fits naturally into their existing workflow.",
      "The simplicity also makes Meal Saver accessible to a wider demographic. Not everyone is comfortable with food delivery apps, but nearly everyone — from college students to retirees — knows how to use WhatsApp. This inclusivity is core to our mission.",
      "We're not anti-technology. We use backend systems to manage our website, partner applications, and deal verification. But we believe the best technology is invisible to the user. You shouldn't need to download a 50 MB app to find a ₹99 surplus meal nearby.",
      "As we grow across Kerala, WhatsApp will remain our primary channel. Because the best experience is one that feels as simple as texting a friend.",
    ],
  },
  {
    slug: "5-tips-reduce-food-waste-at-home",
    title: "5 Simple Tips to Reduce Food Waste at Home in Kerala",
    description: "Practical tips for Kerala households to reduce food waste — from smart meal planning to choosing surplus food deals from local restaurants.",
    excerpt: "Small changes in your kitchen can make a big difference. Here are 5 actionable tips to cut food waste at home.",
    date: "2026-01-05",
    category: "Tips",
    readTime: "3 min read",
    content: [
      "Food waste doesn't just happen in restaurants — Indian households waste an estimated 50 kg of food per person every year. In Kerala, where food is central to culture and hospitality, addressing household waste is an important part of the solution. Here are five practical tips.",
      "1. Plan your meals for the week. Before you shop, decide what you'll cook for the next 5–7 days. Write a list and stick to it. This simple habit can reduce impulse purchases and significantly cut waste from unused ingredients.",
      "2. Understand date labels. \"Best before\" doesn't mean \"toxic after.\" Many packaged foods are perfectly safe to consume days or even weeks past the best-before date. Use your senses — look, smell, taste — before throwing something away. \"Use by\" dates on perishables like dairy and meat should be followed more strictly.",
      "3. Store food properly. Kerala's humid climate accelerates spoilage. Store rice, flour, and spices in airtight containers. Keep fruits and vegetables in the crisper drawer, not on the counter. Separate ethylene-producing fruits (bananas, tomatoes) from ethylene-sensitive ones (leafy greens, cucumbers).",
      "4. Love your leftovers. Yesterday's rice becomes today's fried rice. Leftover curry works as a sandwich filling or pasta sauce. Get creative with what you have before cooking something new. Kerala's tradition of 'kanji' (rice porridge) with leftover rice is a perfect example of zero-waste cooking.",
      "5. Choose surplus food when possible. When you want affordable meals, check if a nearby restaurant has surplus deals available through services like Meal Saver. You save money, they reduce waste — everyone wins.",
      "Reducing food waste isn't about perfection. It's about small, consistent choices that add up over time. Start with one tip this week and build from there.",
    ],
  },
  {
    slug: "how-meal-saver-helps-restaurants-reduce-waste",
    title: "How Meal Saver Helps Kerala Restaurants Turn Waste Into Revenue",
    description: "Restaurants lose thousands monthly on unsold food. Meal Saver's WhatsApp-based service helps them share surplus meals with nearby customers at discounted prices.",
    excerpt: "Kerala restaurants lose thousands monthly on unsold food. Here's how Meal Saver helps turn that loss into opportunity.",
    date: "2025-12-20",
    category: "Stories",
    readTime: "5 min read",
    content: [
      "Running a restaurant in Kerala is tough. Margins are thin, competition is fierce, and food costs keep rising. But there's one cost that most restaurant owners don't track closely enough: the cost of food waste.",
      "The average Kerala restaurant wastes 5–15% of the food it prepares daily. For a mid-sized hotel doing ₹1 lakh in daily revenue, that could be ₹5,000–₹15,000 worth of food going to waste every single day. Over a month, that adds up significantly.",
      "Most owners accept this as the cost of doing business. You can't predict exactly how many customers will walk in, so you prepare for peak demand and hope for the best. But what if there was a way to recover some of that lost revenue?",
      "That's what Meal Saver is designed to do. We help restaurants share surplus food details with nearby customers who want quality food at discounted prices. Instead of throwing away surplus biryani, dosa batter, or pastries at the end of the day, restaurants share the details with us on WhatsApp.",
      "The process is designed to be frictionless. No new hardware, no complicated dashboards. Restaurants send us their available surplus via WhatsApp each afternoon. We verify and publish the deal in the city's WhatsApp channel. Customers see the deal, come to the restaurant, and pay directly.",
      "The benefits go beyond direct revenue recovery. Partners can expect new customer discovery (deal-seekers often become regular customers) and positive brand association with sustainability — both valuable for any food business.",
      "If you run a restaurant, bakery, cloud kitchen, or grocery store in Kerala and want to stop losing money to food waste, joining Meal Saver takes just a few minutes. We handle the verification and publishing — you just share what's left over.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
