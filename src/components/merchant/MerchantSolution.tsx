import { MessageCircle, Megaphone, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Send surplus details on WhatsApp",
    body: "Items, quantity, price, pickup window. One message. Under 30 seconds.",
  },
  {
    icon: Megaphone,
    step: "02",
    title: "We distribute locally",
    body: "MealSaver pushes the deal into your area's customer WhatsApp channel within minutes.",
  },
  {
    icon: ShoppingBag,
    step: "03",
    title: "Customers pick up & pay you",
    body: "Buyers come to your counter before expiry and pay you directly. No middleman, no payouts.",
  },
];

const MerchantSolution = () => (
  <section className="py-16 lg:py-24 bg-background border-b border-border">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">How it works</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
          One WhatsApp message turns surplus into recovered revenue.
        </h2>
        <p className="text-muted-foreground mt-3">Zero app. Zero dashboard. Zero new process for your staff.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.step} className="relative bg-card border border-border rounded-xl p-6">
            <span className="text-xs font-mono font-semibold text-primary">{s.step}</span>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-3 mb-4">
              <s.icon className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MerchantSolution;