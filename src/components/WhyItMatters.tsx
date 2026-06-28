import { Reveal } from "@/components/motion/Reveal";

const WhyItMatters = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal preset="blur" className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Why It Matters
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Good food deserves a second chance
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          <Reveal preset="fade-up" className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Every day, bakeries, cake shops and supermarkets across Kerala have quality products they didn't get to sell. They're still fresh, still safe — they just need someone to enjoy them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              India wastes over <span className="font-semibold text-foreground">68 million tonnes</span> of food per year — worth more than
              <span className="font-semibold text-foreground"> ₹1 lakh crore</span>. A small change in how we shop can make a real difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meal Saver makes it easy to choose better — better for your wallet, better for local businesses, better for the planet.
            </p>
          </Reveal>

          <Reveal preset="scale" delay={0.1} className="bg-card rounded-2xl p-8 shadow-soft border border-border space-y-6">
            <h3 className="text-xl font-bold text-foreground">Our Trust Standards</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">Only quality products are listed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">All products must be safe for consumption and comply with local food safety standards.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">No expired products. Transparent product information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-muted-foreground leading-relaxed">Reliable pickup experience from trusted local businesses.</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
