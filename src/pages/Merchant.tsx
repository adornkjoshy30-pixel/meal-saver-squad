import { Button } from "@/components/ui/button";
import { Check, Sparkles, Trophy, MessageCircle, CreditCard, Package, Clock, Users, BadgeCheck, BarChart3, Building2, Headphones, Zap, Store, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { MerchantSignupForm } from "@/components/MerchantSignupForm";
const benefits = [
  {
    icon: CreditCard,
    title: "Zero Commission",
    description: "Unlike other platforms, we charge no commission per order. You keep 100% of your earnings.",
  },
  {
    icon: BarChart3,
    title: "Predictable Monthly Cost",
    description: "Affordable, fixed plans starting at just ₹150 per month.",
  },
  {
    icon: Sparkles,
    title: "First Month Free",
    description: "Try Meal Saver risk-free. Cancel anytime during the trial.",
  },
  {
    icon: Package,
    title: "Earn From Surplus Food",
    description: "Turn unsold food into extra income instead of throwing it away.",
  },
  {
    icon: MessageCircle,
    title: "Simple WhatsApp System",
    description: "Manage orders easily through WhatsApp — no new tools needed.",
  },
  {
    icon: Users,
    title: "Verified Customer Base",
    description: "Reach eco-conscious customers who love saving food and money.",
  },
];

const plans = [
  {
    name: "Starter Plan",
    price: "₹150",
    period: "/ month",
    badge: null,
    bestFor: "small bakeries, cafés, and home kitchens",
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
    cta: "Start as Merchant",
    highlight: false,
  },
  {
    name: "Growth Plan",
    price: "₹379",
    period: "/ month",
    badge: "Best Value",
    bestFor: "cloud kitchens & mid-sized restaurants",
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
    cta: "Upgrade to Growth",
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
    cta: "Talk to Enterprise Team",
    highlight: false,
  },
];

const steps = [
  {
    number: "1",
    title: "Sign Up Free",
    description: "Start with your free month — no credit card required.",
  },
  {
    number: "2",
    title: "Add Surplus Items",
    description: "List your unsold meals, bakery items, groceries, or surprise boxes.",
  },
  {
    number: "3",
    title: "Receive Orders on WhatsApp",
    description: "Get real-time messages and track pickups.",
  },
  {
    number: "4",
    title: "Get Paid Instantly",
    description: "Payments through UPI — fast and reliable.",
  },
];

const Merchant = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Meal Saver logo" className="h-9 md:h-10 w-auto object-contain" />
            <span className="font-bold text-xl text-gray-900">Meal Saver</span>
          </Link>
          <Button variant="whatsapp" size="sm">
            <MessageCircle className="w-4 h-4" />
            Start as Merchant
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50/50 to-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Partner With <span className="text-primary">Meal Saver</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Earn from unsold food, reduce waste, and reach new customers — all with zero commission.
          </p>
          <p className="text-primary font-semibold text-lg mb-8">
            Your first month is completely FREE.
          </p>
          <a href="#signup">
            <Button variant="whatsapp" size="lg" className="shadow-lg">
              <Store className="w-5 h-5" />
              Start as a Merchant
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Join Meal Saver?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to turn surplus into profit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Simple Pricing
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your business
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 ${
                  plan.highlight
                    ? "ring-2 ring-primary shadow-xl scale-105"
                    : "border border-gray-100 shadow-sm"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    plan.highlight ? "bg-primary text-white" : "bg-green-50 text-primary"
                  }`}>
                    <plan.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">BEST for {plan.bestFor}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="bg-red-50 text-red-600 text-sm font-medium py-2 px-4 rounded-lg text-center">
                    🎁 First Month FREE
                  </div>
                  <Button
                    variant={plan.highlight ? "whatsapp" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get started in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section id="signup" className="py-20 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Start Earning From Surplus Food Today
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Join hundreds of restaurants, bakeries, and kitchens saving food and making money.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">No credit card required</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">First month completely free</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">Cancel anytime, no contracts</span>
                </div>
              </div>
            </div>
            <MerchantSignupForm />
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            Meal Saver is committed to reducing food waste and supporting local businesses.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            No contracts. No commission. Cancel anytime.
          </p>
          <Link to="/" className="inline-flex items-center gap-2 mt-4 text-primary hover:underline text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Merchant;