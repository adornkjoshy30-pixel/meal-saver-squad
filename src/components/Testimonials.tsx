import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ananya R.",
    role: "Customer, Kochi",
    quote:
      "I picked up a surprise box from a bakery near Edappally for ₹99 — it had pastries, a brownie, and two slices of cake. Easily worth ₹250+. My kids loved it.",
    stars: 5,
  },
  {
    name: "Rajan K.",
    role: "Hotel Owner, Thrissur",
    quote:
      "We used to throw away 5-8 kg of food every evening. Since joining Meal Saver, our waste dropped to almost zero and we earn back some of the cost. Win-win.",
    stars: 5,
  },
  {
    name: "Priya M.",
    role: "Customer, Trivandrum",
    quote:
      "The WhatsApp ordering is so convenient — no app to install. I grab a meal box twice a week on my way home from work. Great food at half price.",
    stars: 4,
  },
  {
    name: "Deepak S.",
    role: "Cloud Kitchen, Calicut",
    quote:
      "Meal Saver brought us 30+ new customers in the first month. The onboarding was simple and the team is responsive whenever we need help.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            What People Say
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by Customers & Restaurants
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from early users and pilot partners across Kerala.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 shadow-soft border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
                {Array.from({ length: 5 - t.stars }).map((_, s) => (
                  <Star
                    key={s}
                    className="w-5 h-5 text-muted-foreground/30"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
