import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Meal Saver?",
    answer: "Meal Saver is a platform designed to connect you with local restaurants, bakeries, and cloud kitchens that have surplus food available at 50-80% discount. We're building a way to reduce food waste while making meals more affordable.",
  },
  {
    question: "Is the food safe to eat?",
    answer: "Absolutely. All partner restaurants are FSSAI-licensed and verified for food safety compliance. The food is freshly prepared — it's simply surplus that would otherwise go to waste. Restaurants are required to maintain strict quality standards.",
  },
  {
    question: "How do I place an order?",
    answer: "Everything works through WhatsApp — no app needed! Browse available deals on our website, click 'Grab Now' on any deal you like, and you'll be redirected to WhatsApp to complete your order and payment via UPI.",
  },
  {
    question: "How do payments work?",
    answer: "Payments are processed securely through UPI on WhatsApp. Once your payment is confirmed, you'll receive a pickup confirmation with restaurant details, address, and your pickup time window.",
  },
  {
    question: "What is the pickup process?",
    answer: "After payment confirmation, you'll receive a pickup time and location. Simply visit the restaurant during the specified window, show your order confirmation on WhatsApp, and collect your food. Most pickups are scheduled during off-peak hours.",
  },
  {
    question: "What if I miss my pickup window?",
    answer: "Pickup windows are strict to ensure food freshness. If you miss your window, the restaurant may not be able to honor your order, and refunds are not guaranteed for missed pickups. Please plan accordingly!",
  },
  {
    question: "Can restaurants join Meal Saver?",
    answer: "Yes! Restaurants, bakeries, cloud kitchens, and supermarkets can easily join. We verify FSSAI licenses and ensure food safety compliance before onboarding. Visit our 'For Restaurants' page to learn more and sign up.",
  },
  {
    question: "What if there's an issue with my order?",
    answer: "For food-related issues (quality, quantity), please contact the restaurant directly first. For platform issues (payment errors, technical problems), email us at hello@mealsaver.in and we'll help resolve it within 24-48 hours.",
  },
  {
    question: "Is my personal data safe?",
    answer: "Yes. We take privacy seriously. Your data is encrypted and only shared with restaurants to fulfill your orders. We never sell your information to third parties. Read our Privacy Policy for complete details.",
  },
  {
    question: "What is a Surprise Box?",
    answer: "Surprise Boxes are mystery meal combos where the exact contents vary based on what's available. They offer the best value but the specific items are a surprise! Perfect for adventurous eaters looking for great deals.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Meal Saver
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 shadow-soft border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
