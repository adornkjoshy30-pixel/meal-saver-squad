import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Meal Saver?",
    answer: "Meal Saver lets you buy surplus food from restaurants at a discounted price to reduce food waste. We connect you with local restaurants, bakeries, and cloud kitchens that have unsold food at the end of the day.",
  },
  {
    question: "Is the food safe?",
    answer: "Absolutely. All meals come from verified FSSAI-licensed restaurants, cafés, and bakeries. The food is freshly prepared and completely safe to eat — it's simply surplus that would otherwise go to waste.",
  },
  {
    question: "Do I need an app?",
    answer: "No. Everything works through WhatsApp — completely app-free. Just message us, browse available boxes, pay via UPI, and pick up your food. It's that simple!",
  },
  {
    question: "How do payments work?",
    answer: "You pay securely through UPI directly on WhatsApp. Once your payment is confirmed, you'll receive a pickup confirmation with the restaurant details and pickup time window.",
  },
  {
    question: "Can any restaurant join?",
    answer: "Yes. Restaurants, bakeries, cloud kitchens, and supermarkets can join easily. We verify FSSAI licenses and ensure food safety compliance before onboarding any partner.",
  },
  {
    question: "What is the pickup process?",
    answer: "After payment, you get a pickup time + location. Just show your order message at the counter and collect your food. Most pickups are scheduled during off-peak hours for convenience.",
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
