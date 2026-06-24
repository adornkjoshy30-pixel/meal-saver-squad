import { Check, MessageCircle, Store, ArrowRight, Send, CheckCircle, Users } from "lucide-react";
import { site } from "@/config/appConfig";

const benefits = [
  {
    icon: Store,
    title: "Zero Cost to Join",
    description: "No setup fees, no commissions, no monthly charges during our pilot phase. Just share what's available.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-Based Workflow",
    description: "No apps to install, no dashboards to learn. Share product details on WhatsApp — we handle the rest.",
  },
  {
    icon: Users,
    title: "Reach Local Customers",
    description: "We publish your offers to city-specific WhatsApp channels. Customers see them and come directly to your store.",
  },
  {
    icon: Send,
    title: "You Stay in Control",
    description: "You decide what to list, the price, the quantity, and the collection window. We just help spread the word.",
  },
  {
    icon: CheckCircle,
    title: "Trusted & Verified",
    description: "We verify every offer before publishing to maintain trust with customers and protect your brand.",
  },
  {
    icon: ArrowRight,
    title: "Recover Value, Reduce Waste",
    description: "Turn unsold products into new opportunities. Customers get great value, you reduce waste and earn more.",
  },
];

const PartnerBenefits = () => (
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
);

export default PartnerBenefits;
