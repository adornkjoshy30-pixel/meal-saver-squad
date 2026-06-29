import { MessageCircle, Store, Check, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import { site, whatsapp } from "@/config/appConfig";

const Pricing = () => {
  return (
    <div>
      <PageSEO
        title="Pricing | Meal Saver — Free for Partners During Pilot"
        description="Meal Saver is completely free for bakery, cake shop and supermarket partners during our pilot launch in Kerala. Zero fees, zero commission, zero risk."
        path="/pricing"
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Free During Our Pilot Phase
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {site.name} is launching across Kerala. During this phase, partnering with us is completely free for bakeries, cake shops, supermarkets and other local food retailers — no setup fees, no monthly charges, no commission per order.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-card border border-border">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Pilot Partner — Free</h2>
              <p className="text-muted-foreground">Everything you need to reach new customers and reduce waste</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Zero commission on all orders",
                "Unlimited product listings",
                "Offers published in your city's WhatsApp channel",
                "Meal Saver team verifies and manages posting",
                "Customers pay you directly — no middleman",
                "WhatsApp-based workflow — no apps or dashboards",
                "Priority support during pilot phase",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/partners#signup">
              <Button variant="whatsapp" size="lg" className="w-full">
                <Store className="w-5 h-5" />
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ-like section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Will it always be free?",
                a: "We're free during our pilot launch. If we introduce pricing in the future, it will be simple, transparent, and communicated well in advance. Early partners will always get the best terms.",
              },
              {
                q: "Is there a commission per order?",
                a: "No. Customers pay you directly at pickup. We don't process payments or take any cut from your sales.",
              },
              {
                q: "Do I need any special software?",
                a: "No. Everything works through WhatsApp. You send us product details, we publish the offer, and customers come to you.",
              },
              {
                q: "What's the catch?",
                a: "There isn't one. We're building something new and need local partners to make it work. You help us prove the model, we help you recover value from products that would otherwise go to waste.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {item.q}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed pl-7">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  Contact Us
                </Button>
              </Link>
              <a href={waUrl("pricing", { campaign: "pricing_cta" })} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  Join WhatsApp Channel
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
