import { Store, ShoppingBag, Sprout } from "lucide-react";

const values = [
  {
    icon: ShoppingBag,
    heading: "For Customers",
    points: [
      "Quality products from trusted local bakeries, cake shops and supermarkets",
      "Easy reservations through WhatsApp — no app to download",
      "Clear collection windows and reliable pickup at the store",
    ],
  },
  {
    icon: Store,
    heading: "For Local Businesses",
    points: [
      "Reach new customers across your neighbourhood",
      "Recover value from products that would otherwise go unsold",
      "Strengthen your community impact and sustainability story",
    ],
  },
  {
    icon: Sprout,
    heading: "For the Planet",
    points: [
      "Every order saved is one less item heading to waste",
      "Support a more sustainable food system in Kerala",
      "Better for your wallet — and better for the planet",
    ],
  },
];

const WhyMealSaver = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            The Vision
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Better for everyone
          </h2>
          <p className="text-lg text-muted-foreground">
            Meal Saver helps people discover great food and grocery products while helping local businesses reduce waste.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 shadow-soft border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{item.heading}</h3>
              <ul className="space-y-3">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMealSaver;
