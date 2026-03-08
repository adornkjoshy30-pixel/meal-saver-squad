import { Store, ShoppingBag, Sprout } from "lucide-react";

const values = [
  {
    icon: Store,
    heading: "What Restaurants Gain",
    points: [
      "Recover revenue from food that would otherwise be thrown away",
      "Reach new nearby customers without marketing spend",
      "Reduce daily waste with a simple WhatsApp-based workflow",
    ],
  },
  {
    icon: ShoppingBag,
    heading: "What Customers Can Expect",
    points: [
      "Quality meals from local restaurants at 40–60% off",
      "Easy ordering through WhatsApp — no app to download",
      "Fresh surplus food with clear pickup windows",
    ],
  },
  {
    icon: Sprout,
    heading: "Why Meal Saver Exists",
    points: [
      "Kerala's restaurants waste thousands of kilos of edible food daily",
      "Most surplus food is still fresh — it just went unsold",
      "We believe technology can connect that food with people who want it",
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
            Built for Restaurants & Customers
          </h2>
          <p className="text-lg text-muted-foreground">
            Meal Saver creates a practical way for Kerala's food businesses to reduce waste while making affordable meals accessible to everyone.
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
