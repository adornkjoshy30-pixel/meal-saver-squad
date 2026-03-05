import { Check, Sparkles, Store, Zap, Trophy, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";

const plans = [
  {
    name: "Starter Plan",
    price: "₹150",
    period: "/ month",
    badge: null,
    bestFor: "Small bakeries, cafés & home kitchens",
    icon: Store,
    features: [
      "0% commission",
      "Unlimited surplus listings",
      "WhatsApp order management",
      "Basic analytics",
      "1 outlet supported",
      "Standard support",
      "Digital storefront included",
    ],
    highlight: false,
  },
  {
    name: "Growth Plan",
    price: "₹379",
    period: "/ month",
    badge: "Best Value",
    bestFor: "Cloud kitchens & mid-sized restaurants",
    icon: Zap,
    features: [
      "Everything in Starter +",
      "Priority listing in your area",
      '"Green Partner" badge',
      "Early visibility for deals",
      "Faster payouts",
      "Up to 3 outlets",
      "Promo slots (3/month)",
      "Detailed analytics dashboard",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₹999",
    period: "/ month",
    badge: null,
    bestFor: "5-star hotels & multi-branch chains",
    icon: Trophy,
    features: [
      "Everything in Growth +",
      "Unlimited outlets",
      "Chain-level management dashboard",
      "Brand banner on platform",
      "Dedicated success manager",
      "Custom WhatsApp ordering flow",
      "Staff training & onboarding",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <div>
      <PageSEO
        title="Pricing | Meal Saver Partner Plans from ₹150/mo"
        description="Zero commission partner plans for restaurants, bakeries & cloud kitchens in Kerala. First month free. Plans from ₹150/month."
        path="/pricing"
      />
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Simple Pricing
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Plans That Grow With Your Business
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zero commission. Fixed monthly cost. Your first month is completely free.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-3xl p-8 ${
                  plan.highlight
                    ? "ring-2 ring-primary shadow-card lg:scale-105"
                    : "border border-border shadow-soft"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    <plan.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.bestFor}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="bg-destructive/10 text-destructive text-sm font-medium py-2 px-4 rounded-lg text-center">
                    🎁 First Month FREE
                  </div>
                  <Link to="/partners#signup">
                    <Button
                      variant={plan.highlight ? "whatsapp" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-like note */}
      <section className="py-16 bg-card">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions?</h2>
          <p className="text-muted-foreground mb-6">
            We're happy to help you choose the right plan for your business.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
