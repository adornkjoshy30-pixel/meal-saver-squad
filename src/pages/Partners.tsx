import { Check, MessageCircle, Store, ArrowRight, Send, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MerchantSignupForm } from "@/components/MerchantSignupForm";
import { site, whatsapp } from "@/config/appConfig";
import PageSEO from "@/components/PageSEO";

const benefits = [
  {
    icon: Store,
    title: "Zero Cost to Join",
    description: "No setup fees, no commissions, no monthly charges during our pilot phase. Just send us your surplus details.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-Based Workflow",
    description: "No apps to install, no dashboards to learn. Share your surplus food details with us on WhatsApp — we handle the rest.",
  },
  {
    icon: Users,
    title: "Reach Nearby Customers",
    description: "We publish your deals to city-specific WhatsApp channels. Customers see your offer and come directly to your restaurant.",
  },
  {
    icon: Send,
    title: "You Stay in Control",
    description: "You decide what to list, the price, the quantity, and the pickup window. We just help spread the word.",
  },
  {
    icon: CheckCircle,
    title: "Verified Deals Only",
    description: "We verify every deal before publishing to maintain trust with customers and protect your brand.",
  },
  {
    icon: ArrowRight,
    title: "Earn Instead of Waste",
    description: "Turn end-of-day surplus into revenue. Customers get affordable meals, you reduce waste and earn more.",
  },
];

const steps = [
  {
    number: "1",
    title: "Apply as a Partner",
    description: "Fill out the form below. Our team will review and get in touch.",
  },
  {
    number: "2",
    title: "Send Surplus Details via WhatsApp",
    description: "When you have unsold food, message us with the items, price, quantity, and pickup window.",
  },
  {
    number: "3",
    title: "We Verify & Publish the Deal",
    description: "Our team checks the details and posts the deal in your city's WhatsApp channel.",
  },
  {
    number: "4",
    title: "Customers Pick Up & Pay You Directly",
    description: "Customers visit your restaurant, pick up the food, and pay you directly. No middleman.",
  },
];

const Partners = () => {
  return (
    <div>
      <PageSEO
        title="Partner With Meal Saver | Turn Surplus Food Into Revenue"
        description="Join Meal Saver as a restaurant partner in Kerala. Zero cost, zero commission. Share surplus food deals via WhatsApp and reach new customers."
        path="/partners"
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            For Restaurants & Food Businesses
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Partner With <span className="text-primary">{site.name}</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Have unsold food at the end of the day? Share it with us on WhatsApp — we'll connect it with nearby customers who want it.
          </p>
          <p className="text-primary font-semibold text-lg mb-8">
            Zero cost. Zero commission. Just WhatsApp.
          </p>
          <a href="#signup">
            <Button variant="whatsapp" size="lg">
              <Store className="w-5 h-5" />
              Apply as a Partner
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Partner With {site.name}?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A simple way to earn from surplus food — no tech, no complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works for Partners
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get started in 4 simple steps — no apps, no dashboards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-button">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form Section */}
      <section id="signup" className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Apply as a Partner
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Fill out the form and our team will reach out to onboard you. We're currently launching across Kerala — early partners get priority support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">No fees or commissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">WhatsApp-only workflow — no new tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-foreground">You control pricing and availability</span>
                </div>
              </div>
            </div>
            <MerchantSignupForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            We're happy to explain how the partnership works and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" size="lg">
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </Button>
            </Link>
            <a href={whatsapp.channelUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Channel
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
