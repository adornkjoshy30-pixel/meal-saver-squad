import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need an app to use MealSaver?",
    answer: "No. MealSaver works entirely through WhatsApp. Join your city's WhatsApp channel, receive surplus food deals, and visit the restaurant to pick up your meal. No app download needed.",
  },
  {
    question: "How do I get surplus food deals?",
    answer: "Join the WhatsApp channel for your city. Whenever a restaurant near you has surplus food, we publish the deal in the channel with all the details — food items, price, pickup time, and location. You then go directly to the restaurant.",
  },
  {
    question: "How do I reserve a deal?",
    answer: "When you see a deal in the WhatsApp channel, tap the 'Reserve' link to send a pre-filled WhatsApp message to MealSaver. Our team will confirm your reservation and share the pickup details. Your portion is held until the end of the pickup window.",
  },
  {
    question: "Is the food safe to eat?",
    answer: "Yes. We only work with restaurants that meet food safety standards. The food is freshly prepared — it's simply surplus that went unsold. We verify deal details before publishing.",
  },
  {
    question: "What if a deal sells out before I can reserve?",
    answer: "Deals are limited by quantity. Once all portions are reserved, the deal is closed. Joining the WhatsApp channel ensures you see deals the moment they're posted, giving you the best chance to reserve.",
  },
  {
    question: "How do restaurants join MealSaver?",
    answer: "Restaurants can apply through our website. We'll verify your details and onboard you. Once you're a partner, you simply send us your surplus food details via WhatsApp, and we publish the deal in the local channel.",
  },
  {
    question: "Is there any cost for customers?",
    answer: "Joining the WhatsApp channel is completely free. You only pay the discounted price directly to the restaurant when you pick up the food.",
  },
  {
    question: "Is there any cost for restaurants?",
    answer: "No. Partnering with Meal Saver is completely free during our pilot phase — no setup fees, no monthly charges, no commission. Restaurants just need WhatsApp to share surplus food details with our team.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Questions
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple answers about how MealSaver works
          </p>
        </div>

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
