import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Meal Saver?",
    answer: "Meal Saver helps you discover quality food and grocery products from bakeries, cake shops, supermarkets and other local food retailers in Kerala — at great value, before they go unsold.",
  },
  {
    question: "Do I need an app?",
    answer: "No. Meal Saver works entirely through WhatsApp. Join your city's channel, browse offers, reserve, and collect your order at the store. No app download needed.",
  },
  {
    question: "How do I reserve an order?",
    answer: "Tap the reservation link on any offer to send a pre-filled WhatsApp message. Our team confirms your order and shares collection details. Your order is held during the collection window.",
  },
  {
    question: "Is the food safe and good quality?",
    answer: "Yes. Every partner business must comply with local food safety standards. We list only quality products that are safe for consumption — no expired items.",
  },
  {
    question: "What kind of products will I find?",
    answer: "Fresh breads and pastries from bakeries, cakes and desserts from cake shops, everyday groceries from supermarkets, plus frozen, packaged, dairy and refrigerated essentials.",
  },
  {
    question: "How do local businesses partner with Meal Saver?",
    answer: "Bakeries, cake shops, supermarkets and other food retailers can apply through our Partners page. We verify your details and onboard you — no setup fees, no commissions during the pilot phase.",
  },
  {
    question: "Is there any cost for customers?",
    answer: "Joining the WhatsApp channel is completely free. You pay the listed price directly at the store when you collect your order.",
  },
  {
    question: "Where does Meal Saver operate?",
    answer: "We're launching in Idukki, Kerala first, with Kochi, Trivandrum and Calicut coming soon.",
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
            Simple answers about how Meal Saver works
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
