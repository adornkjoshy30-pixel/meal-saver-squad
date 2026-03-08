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
    description: "India wastes over ₹1 lakh crore of food yearly. Here's how Kerala's restaurants and consumers can lead the change with surplus food platforms like Meal Saver.",
    excerpt: "With over ₹1 lakh crore worth of food wasted annually in India, Kerala's vibrant food industry has a unique opportunity to lead the change.",
    date: "2026-02-20",
    category: "Impact",
    readTime: "5 min read",
    content: [
      "India wastes over ₹1 lakh crore worth of food every year. That's not just an economic loss — it's a humanitarian and environmental crisis. In Kerala, a state renowned for its food culture and hospitality, thousands of kilograms of perfectly edible food are thrown away daily by restaurants, bakeries, and grocery stores.",
      "The root cause isn't carelessness. Restaurants prepare food based on expected demand, but demand fluctuates. A rainy evening, a cancelled event, or a slow weekday can leave kitchens with surplus food that goes unsold. Without a system to redirect this food, it ends up in the bin.",
      "This is where platforms like Meal Saver step in. By connecting surplus food from local businesses with price-conscious, eco-aware customers, we create a marketplace that benefits everyone. Restaurants recover revenue from food they'd otherwise discard. Customers get quality meals at 50–80% off. And the environment benefits from reduced methane emissions from landfills.",
      "Kerala is uniquely positioned to lead this movement. The state has high literacy, widespread smartphone adoption, and a deeply rooted food culture. WhatsApp — the most popular messaging app in Kerala — serves as the perfect ordering channel, removing the barrier of downloading yet another app.",
      "The numbers speak for themselves: during our pilot phase, partner restaurants reported a 40% reduction in daily food waste. Customers saved an average of ₹150 per order. And we diverted over 500 kg of food from landfills in just the first month.",
      "But this is just the beginning. With more restaurants joining and more customers choosing surplus food, Kerala can set a national example for how technology and community can solve one of India's most pressing problems.",
    ],
  },
  {
    slug: "why-surplus-food-is-safe",
    title: "Is Surplus Food Safe to Eat? Here's What You Need to Know",
    description: "Surplus food is not expired food. Learn the difference between surplus and expired food, and why Meal Saver boxes are perfectly safe, fresh, and delicious.",
    excerpt: "Surplus food is not expired food. Learn about the difference and why Meal Saver boxes are perfectly safe and delicious.",
    date: "2026-02-10",
    category: "Education",
    readTime: "4 min read",
    content: [
      "One of the most common questions we hear is: \"Is surplus food safe to eat?\" The short answer is yes — absolutely. But let's break down why.",
      "Surplus food is simply food that was prepared fresh but went unsold during normal business hours. It's the same food that was on the menu at full price earlier in the day. A biryani prepared at 11 AM for lunch service that wasn't sold by 2 PM is still perfectly good — it's just surplus.",
      "This is fundamentally different from expired food. Expired food has passed its use-by date and may pose health risks. Surplus food, on the other hand, is within its safe consumption window. The only reason it's discounted is that the restaurant needs to clear it before preparing the next batch.",
      "At Meal Saver, food safety is non-negotiable. Every partner restaurant must hold a valid FSSAI license. We verify this during onboarding and conduct periodic checks. Our pickup windows are carefully timed — usually within 2–4 hours of preparation — to ensure everything you receive is fresh.",
      "We also work closely with restaurant partners to set proper handling guidelines. Food is stored at appropriate temperatures, packaged hygienically, and clearly labeled with pickup time windows. If a restaurant can't meet our quality standards, they can't list on the platform.",
      "The global surplus food movement proves this model works safely at scale. Too Good To Go in Europe has saved over 300 million meals. OLIO in the UK redistributes millions of food items monthly. These platforms operate under strict food safety regulations, and Meal Saver follows the same principles adapted for India's regulatory framework.",
      "So next time you see a Meal Saver deal at 60% off, remember: you're not getting lesser food. You're getting the same quality at a better price — and helping reduce waste in the process.",
    ],
  },
  {
    slug: "merchant-success-story-kozhikode",
    title: "How a Kozhikode Bakery Earns ₹30K Extra Monthly With Meal Saver",
    description: "A Kozhikode bakery shares how listing surplus items on Meal Saver turned daily food waste into a reliable ₹30,000/month income stream.",
    excerpt: "A local bakery shares how listing surplus items on Meal Saver turned waste into a reliable income stream.",
    date: "2026-01-28",
    category: "Stories",
    readTime: "4 min read",
    content: [
      "Bake House, a popular neighbourhood bakery in Kozhikode, used to throw away 8–10 kg of baked goods every evening. Cakes, puffs, bread rolls, and pastries that didn't sell during the day would go straight to the bin. \"It was painful,\" says owner Rashid, \"but we had no way to sell them after closing.\"",
      "That changed when Bake House joined Meal Saver's pilot programme in late 2025. The concept was simple: list surplus items as \"Surprise Boxes\" on the platform at a 50–60% discount, and let nearby customers grab them before closing time.",
      "\"The first week, we sold 15 boxes. By the second month, we were consistently selling 25–30 boxes a day,\" Rashid recalls. At ₹99 per box (items worth ₹250+), that translates to roughly ₹30,000 in extra monthly revenue — money that was literally going in the trash before.",
      "But it's not just about the money. Rashid says his staff morale improved because they no longer feel guilty about waste. \"My bakers take pride in their work. Seeing their creations thrown away was demoralising. Now, every item finds a home.\"",
      "The onboarding process was straightforward. Meal Saver verified Bake House's FSSAI license, set up a WhatsApp-based ordering flow, and handled customer payments through UPI. Rashid doesn't need to manage any app or dashboard — he simply updates his available quantities via WhatsApp each afternoon.",
      "Customer feedback has been overwhelmingly positive. \"People come to the shop to pick up their Meal Saver box and end up buying fresh items too,\" Rashid notes. \"It's brought us new regular customers we wouldn't have reached otherwise.\"",
      "Bake House's story isn't unique. Across Kerala, restaurants, cloud kitchens, and grocery stores are discovering that surplus food isn't waste — it's an untapped revenue stream. And with Meal Saver, turning that surplus into income takes less than 5 minutes a day.",
    ],
  },
  {
    slug: "whatsapp-ordering-no-app-needed",
    title: "Why Meal Saver Uses WhatsApp Instead of a Separate App",
    description: "No app downloads, no signups. Learn why Meal Saver chose WhatsApp as the ordering channel and how it makes surplus food accessible to everyone in Kerala.",
    excerpt: "No app downloads, no signups. Here's why WhatsApp is the perfect channel for surplus food ordering in Kerala.",
    date: "2026-01-15",
    category: "Education",
    readTime: "3 min read",
    content: [
      "When we started building Meal Saver, the conventional advice was clear: build a mobile app. Every food-tech startup has one. But we chose a different path — WhatsApp.",
      "Here's why: Kerala has over 35 million WhatsApp users. It's the default communication channel for everything from family groups to business orders. When someone wants to order a cake from their local bakery, they don't download an app — they send a WhatsApp message.",
      "By building on WhatsApp, we eliminated the biggest friction point in food-tech: app downloads. Our conversion rate from discovery to first order is 3x higher than industry average because there's zero barrier. See a deal on our website, tap 'Grab on WhatsApp', confirm payment via UPI, done.",
      "For restaurant partners, this is equally powerful. They don't need to learn a new dashboard or manage another tablet in the kitchen. They receive orders as WhatsApp messages, confirm with a tap, and prepare the pickup. It fits naturally into their existing workflow.",
      "The simplicity also makes Meal Saver accessible to a wider demographic. Not everyone is comfortable with food delivery apps, but nearly everyone — from college students to retirees — knows how to use WhatsApp. This inclusivity is core to our mission.",
      "We're not anti-technology. We use sophisticated backend systems for payment processing, inventory management, and partner matching. But we believe the best technology is invisible to the user. You shouldn't need to download a 50 MB app to buy a ₹99 surplus meal box.",
      "As we scale across Kerala and beyond, WhatsApp will remain our primary channel. Because the best ordering experience is one that feels like texting a friend.",
    ],
  },
  {
    slug: "5-tips-reduce-food-waste-at-home",
    title: "5 Simple Tips to Reduce Food Waste at Home in Kerala",
    description: "Practical tips for Kerala households to reduce food waste — from smart meal planning to using surplus food platforms like Meal Saver.",
    excerpt: "Small changes in your kitchen can make a big difference. Here are 5 actionable tips to cut food waste at home.",
    date: "2026-01-05",
    category: "Tips",
    readTime: "3 min read",
    content: [
      "Food waste doesn't just happen in restaurants — Indian households waste an estimated 50 kg of food per person every year. In Kerala, where food is central to culture and hospitality, addressing household waste is an important part of the solution. Here are five practical tips.",
      "1. Plan your meals for the week. Before you shop, decide what you'll cook for the next 5–7 days. Write a list and stick to it. This simple habit can reduce impulse purchases by 30% and significantly cut waste from unused ingredients.",
      "2. Understand date labels. \"Best before\" doesn't mean \"toxic after.\" Many packaged foods are perfectly safe to consume days or even weeks past the best-before date. Use your senses — look, smell, taste — before throwing something away. \"Use by\" dates on perishables like dairy and meat should be followed more strictly.",
      "3. Store food properly. Kerala's humid climate accelerates spoilage. Store rice, flour, and spices in airtight containers. Keep fruits and vegetables in the crisper drawer, not on the counter. Separate ethylene-producing fruits (bananas, tomatoes) from ethylene-sensitive ones (leafy greens, cucumbers).",
      "4. Love your leftovers. Yesterday's rice becomes today's fried rice. Leftover curry works as a sandwich filling or pasta sauce. Get creative with what you have before cooking something new. Kerala's tradition of 'kanji' (rice porridge) with leftover rice is a perfect example of zero-waste cooking.",
      "5. Use surplus food platforms. When you know you won't finish something, check if a local platform like Meal Saver can help. And when you want affordable meals, grab a surplus box from a nearby restaurant. You save money, they reduce waste — everyone wins.",
      "Reducing food waste isn't about perfection. It's about small, consistent choices that add up over time. Start with one tip this week and build from there.",
    ],
  },
  {
    slug: "how-meal-saver-helps-restaurants-reduce-waste",
    title: "How Meal Saver Helps Kerala Restaurants Turn Waste Into Revenue",
    description: "Restaurants lose thousands monthly on unsold food. Meal Saver's WhatsApp-based platform helps them sell surplus meals to nearby customers at discounted prices.",
    excerpt: "Kerala restaurants lose thousands monthly on unsold food. Here's how Meal Saver turns that loss into a new revenue stream.",
    date: "2025-12-20",
    category: "Stories",
    readTime: "5 min read",
    content: [
      "Running a restaurant in Kerala is tough. Margins are thin, competition is fierce, and food costs keep rising. But there's one cost that most restaurant owners don't track closely enough: the cost of food waste.",
      "The average Kerala restaurant wastes 5–15% of the food it prepares daily. For a mid-sized hotel doing ₹1 lakh in daily revenue, that's ₹5,000–₹15,000 worth of food going to waste every single day. Over a month, that's ₹1.5–4.5 lakh in pure loss.",
      "Most owners accept this as the cost of doing business. You can't predict exactly how many customers will walk in, so you prepare for peak demand and hope for the best. But what if there was a way to recover that lost revenue?",
      "That's exactly what Meal Saver does. Our platform connects restaurants with nearby customers who want quality food at discounted prices. Instead of throwing away surplus biryani, dosa batter, or pastries at the end of the day, restaurants list them as 'Meal Saver Boxes' at 40–60% off.",
      "The process is designed to be frictionless. No new hardware, no complicated dashboards. Restaurants update their available surplus via WhatsApp each afternoon. Customers browse deals on our website and order through WhatsApp. Payments happen via UPI. The customer picks up the food during a designated window.",
      "During our pilot, partner restaurants reported recovering an average of ₹20,000–₹40,000 per month from food that would have been wasted. That's money straight to the bottom line with zero additional food cost.",
      "But the benefits go beyond revenue. Partners report improved staff satisfaction (less guilt about waste), new customer acquisition (Meal Saver users often become regular customers), and positive brand association with sustainability.",
      "If you run a restaurant, bakery, cloud kitchen, or grocery store in Kerala and want to stop losing money to food waste, joining Meal Saver takes less than 10 minutes. We handle the technology, marketing, and payments — you just list what's left over.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
