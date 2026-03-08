const WhyItMatters = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            The Problem
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Why Surplus Food Goes to Waste
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* The problem */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Every day, bakeries, hotels, and restaurants across Kerala prepare more food than they sell. 
              This isn't because the food is bad — it's fresh, safe, and perfectly edible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But there's no simple way to connect that surplus food with people who would happily buy it at a lower price. 
              So it gets thrown away.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              India wastes over <span className="font-semibold text-foreground">68 million tonnes</span> of food per year — worth more than 
              <span className="font-semibold text-foreground"> ₹1 lakh crore</span>. Kerala is no exception.
            </p>
          </div>

          {/* What MealSaver does */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border space-y-6">
            <h3 className="text-xl font-bold text-foreground">What MealSaver Does About It</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">
                  We give restaurants a simple way to share surplus food details with us via WhatsApp.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">
                  We verify the deal and publish it in city-specific WhatsApp channels.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">
                  Customers see the deals and go directly to the restaurant to pick up the food.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">
                  Restaurants earn instead of wasting. Customers eat well for less.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
