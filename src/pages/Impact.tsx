import { Leaf, TrendingDown, Heart, Utensils, Store, Users } from "lucide-react";
import Mission from "@/components/Mission";

const stats = [
  { icon: Utensils, value: "50,000+", label: "Meals Saved", color: "bg-primary/10 text-primary" },
  { icon: Store, value: "200+", label: "Partner Restaurants", color: "bg-secondary/10 text-secondary" },
  { icon: Users, value: "10,000+", label: "Active Customers", color: "bg-accent text-accent-foreground" },
  { icon: Leaf, value: "10,000+ kg", label: "Food Rescued", color: "bg-primary/10 text-primary" },
  { icon: TrendingDown, value: "₹15L+", label: "Saved by Users", color: "bg-secondary/10 text-secondary" },
  { icon: Heart, value: "14+", label: "Districts Reached", color: "bg-accent text-accent-foreground" },
];

const Impact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Impact
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Making a Real Difference in Kerala
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every meal saved through Meal Saver reduces food waste, supports local businesses, and helps customers save money.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 shadow-soft text-center">
                <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Mission />
    </div>
  );
};

export default Impact;
