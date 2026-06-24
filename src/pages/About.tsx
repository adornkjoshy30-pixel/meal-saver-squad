import { Leaf, Users, Heart, Target } from "lucide-react";
import PageSEO from "@/components/PageSEO";

const values = [
  { icon: Leaf, title: "Sustainability", description: "Every order is one less item heading to waste. Better for your wallet, better for the planet." },
  { icon: Users, title: "Community", description: "We connect local bakeries, cake shops and supermarkets with the people in their neighbourhoods." },
  { icon: Heart, title: "Quality", description: "Only quality products that meet local food safety standards — never expired, always transparent." },
  { icon: Target, title: "Honesty", description: "No fake metrics, no hidden fees. Just a simple way to enjoy good food at great value." },
];

const About = () => {
  return (
    <div>
      <PageSEO
        title="About Meal Saver | Enjoy More. Waste Less."
        description="Meal Saver helps people discover quality food and grocery products from Kerala's local bakeries, cake shops and supermarkets — while helping businesses reduce waste."
        path="/about"
      />
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Helping people discover great food. Helping businesses reduce waste.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Meal Saver is a community-driven marketplace for quality products from local bakeries, cake shops, supermarkets and food retailers across Kerala. Better for your wallet. Better for the planet.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              India wastes over ₹1 lakh crore worth of food every year. In Kerala alone, thousands of kilograms of perfectly good food are discarded daily by bakeries, cake shops and supermarkets — simply because it went unsold.
            </p>
            <p>
              Meal Saver was born from a simple idea: good food deserves a second chance. What if we could connect quality products with people who'd love them — easily, on WhatsApp?
            </p>
            <p>
              We're onboarding our first local partners across Kerala. They share what's available on WhatsApp, we verify, and customers in the same community get to enjoy quality food at great value.
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
