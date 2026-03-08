import { Leaf, TrendingDown, Utensils, Target, Rocket, Heart } from "lucide-react";
import Mission from "@/components/Mission";
import PageSEO from "@/components/PageSEO";

const goals = [
  { icon: Utensils, label: "Save 50,000+ meals in our first year", color: "bg-primary/10 text-primary" },
  { icon: Target, label: "Onboard 200+ restaurant partners across Kerala", color: "bg-secondary/10 text-secondary" },
  { icon: Leaf, label: "Divert 10,000+ kg of food from landfills", color: "bg-accent text-accent-foreground" },
  { icon: TrendingDown, label: "Help customers save ₹15L+ on food", color: "bg-primary/10 text-primary" },
  { icon: Rocket, label: "Expand to 14+ districts in Kerala", color: "bg-secondary/10 text-secondary" },
  { icon: Heart, label: "Build a community of conscious consumers", color: "bg-accent text-accent-foreground" },
];

const Impact = () => {
  return (
    <div>
      <PageSEO
        title="Our Impact Goals | Meal Saver — Fighting Food Waste in Kerala"
        description="Meal Saver is building a platform to reduce food waste across Kerala. See our goals and the problem we're solving."
        path="/impact"
      />
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Impact Goals
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Change We're Building Toward
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're just getting started. Here's what we aim to achieve as we grow Meal Saver across Kerala — every meal saved counts.
          </p>
        </div>
      </section>

      {/* Goals Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 shadow-soft">
                <div className={`w-14 h-14 rounded-xl ${goal.color} flex items-center justify-center mb-4`}>
                  <goal.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <p className="text-foreground font-semibold text-lg">{goal.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            These are our goals, not claims. We'll share real numbers as we grow.
          </p>
        </div>
      </section>

      <Mission />
    </div>
  );
};

export default Impact;
