import { Sprout, Store, ShieldCheck, Leaf, MapPin, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const items = [
  { icon: MapPin, label: "Live in Idukki, Kerala" },
  { icon: Store, label: "Bakeries & Supermarkets" },
  { icon: ShieldCheck, label: "FSSAI-verified partners" },
  { icon: Sprout, label: "Community-first pilot" },
  { icon: Leaf, label: "Less food, less waste" },
  { icon: Sparkles, label: "Quality before quantity" },
];

const TrustedBy = () => {
  return (
    <section className="py-14 lg:py-20 bg-background border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal preset="fade" className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
            What we stand for
          </p>
        </Reveal>
        <Stagger className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
          {items.map(({ icon: Icon, label }) => (
            <StaggerItem
              key={label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border shadow-soft"
            >
              <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default TrustedBy;