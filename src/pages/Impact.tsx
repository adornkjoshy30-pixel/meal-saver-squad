import { Leaf, TrendingDown, Utensils, Target, Rocket, Heart } from "lucide-react";
import Mission from "@/components/Mission";
import PageSEO from "@/components/PageSEO";

const projections = [
  { icon: Utensils, value: "50,000+", label: "Meals rescued from waste", tag: "Year 1 Goal", color: "bg-primary/10 text-primary" },
  { icon: Target, value: "200+", label: "Restaurant partners onboarded", tag: "Launch Vision", color: "bg-secondary/10 text-secondary" },
  { icon: Leaf, value: "10,000+ kg", label: "Food diverted from landfills", tag: "Projected at Scale", color: "bg-accent text-accent-foreground" },
  { icon: TrendingDown, value: "₹15L+", label: "Savings for customers", tag: "Expected Impact", color: "bg-primary/10 text-primary" },
  { icon: Rocket, value: "14+", label: "Districts across Kerala", tag: "Expansion Goal", color: "bg-secondary/10 text-secondary" },
  { icon: Heart, value: "10,000+", label: "Conscious consumers reached", tag: "Pilot-Stage Goal", color: "bg-accent text-accent-foreground" },
];

const Impact = () => {
  return (
    <div>
      <PageSEO
        title="Our Impact Goals | Meal Saver — Fighting Food Waste in Kerala"
        description="Meal Saver is building a platform to reduce food waste across Kerala. See our projected impact and the problem we're solving."
        path="/impact"
      />
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Projected Impact
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Change We're Building Toward
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're just getting started. These projections represent what we aim to achieve as Meal Saver grows across Kerala — not current results.
          </p>
        </div>
      </section>

      {/* Projections Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projections.map((item, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 shadow-soft relative overflow-hidden">
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                  {item.tag}
                </span>
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{item.value}</p>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/70 mt-8 max-w-2xl mx-auto leading-relaxed">
            Projections shown are estimates based on expected platform adoption and are not current live platform results. We'll update this page with real data as we grow.
          </p>
        </div>
      </section>

      <Mission />
    </div>
  );
};

export default Impact;
