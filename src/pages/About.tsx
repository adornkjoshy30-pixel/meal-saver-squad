import { Leaf, Users, Heart, Target } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainability", description: "We believe every meal saved is a step toward a greener planet. Our mission starts with reducing food waste across Kerala." },
  { icon: Users, title: "Community", description: "We connect local businesses with eco-conscious customers, building a community that cares about food and the environment." },
  { icon: Heart, title: "Accessibility", description: "Great food shouldn't go to waste — or cost a fortune. We make surplus meals affordable and easy to access via WhatsApp." },
  { icon: Target, title: "Transparency", description: "No hidden fees, no commissions per order. We keep things simple and honest for both merchants and customers." },
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We're on a Mission to End Food Waste in Kerala
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meal Saver connects customers with surplus food from local bakeries, hotels, cloud kitchens, and grocery stores — at discounted prices.
            We help businesses earn from what would otherwise be wasted, and customers save money while making a positive impact.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              India wastes over ₹1 lakh crore worth of food every year. In Kerala alone, thousands of kilograms of perfectly good food
              are discarded daily by restaurants, bakeries, and stores — simply because it went unsold.
            </p>
            <p>
              Meal Saver was born from a simple idea: what if we could connect that surplus food with people who want it?
              No app downloads, no complex onboarding — just WhatsApp.
            </p>
            <p>
              Today, we work with 200+ restaurant partners across Kerala, helping them turn waste into revenue while giving
              customers access to delicious food at a fraction of the price.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-background rounded-2xl p-6 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
