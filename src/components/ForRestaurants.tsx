import { Button } from "@/components/ui/button";
import { Store, Users, Smartphone, Check, ShieldCheck, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const benefits = [
  { icon: Users, text: "Reach new local customers across Kerala" },
  { icon: DollarSign, text: "Recover value from products that would go unsold" },
  { icon: ShieldCheck, text: "Strengthen your reputation for sustainability" },
  { icon: Smartphone, text: "Simple WhatsApp workflow — no apps or dashboards" },
  { icon: Check, text: "Zero cost during pilot — no fees or commissions" },
  { icon: Clock, text: "You set the collection window and price" },
];

const ForRestaurants = () => {
  return (
    <section id="for-businesses" className="py-20 lg:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <Reveal preset="fade-up" className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                For Businesses
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Turn Unsold Products Into New Opportunities
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Meal Saver helps bakeries, cake shops, supermarkets and food retailers connect with new customers while reducing unnecessary waste. Share what's still good — we help it find a home.
              </p>
            </div>
            
            {/* Benefits Grid */}
            <Stagger className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <StaggerItem
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground font-medium text-sm">
                    {benefit.text}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
            
            <div className="flex justify-center">
              <Link to="/partners">
                <Button variant="whatsapp" size="lg" className="min-h-[48px]">
                  <Store className="w-5 h-5" aria-hidden="true" />
                  Partner With Us
                </Button>
              </Link>
            </div>
          </Reveal>
          
          {/* Visual — honest early-stage card */}
          <Reveal preset="scale" delay={0.1} className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl transform -rotate-6"></div>
            <div className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-card">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Store className="w-10 h-10 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Now Onboarding Partners</h3>
                  <p className="text-muted-foreground">Be among the first local businesses to join Meal Saver in Kerala</p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 bg-background rounded-xl">
                    <p className="font-semibold text-foreground mb-1">Zero cost to join</p>
                    <p className="text-sm text-muted-foreground">No fees or commissions during the pilot. Just WhatsApp.</p>
                  </div>
                  <div className="p-4 bg-background rounded-xl">
                    <p className="font-semibold text-foreground mb-1">WhatsApp-only workflow</p>
                    <p className="text-sm text-muted-foreground">No apps or dashboards. Send us product details on WhatsApp.</p>
                  </div>
                  <div className="p-4 bg-background rounded-xl">
                    <p className="font-semibold text-foreground mb-1">Food safety verified</p>
                    <p className="text-sm text-muted-foreground">We verify FSSAI compliance before listing any partner.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ForRestaurants;
