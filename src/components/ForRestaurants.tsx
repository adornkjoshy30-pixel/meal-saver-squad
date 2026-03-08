import { Button } from "@/components/ui/button";
import { Check, Store, Users, Smartphone, ShieldCheck, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: DollarSign, text: "Earn from unsold food instead of throwing it away" },
  { icon: Users, text: "Reach new local customers" },
  { icon: Smartphone, text: "Simple WhatsApp-based system" },
  { icon: Check, text: "Zero setup cost" },
  { icon: ShieldCheck, text: "Food safety compliant" },
  { icon: Clock, text: "Real-time pickup management" },
];

const ForRestaurants = () => {
  return (
    <section id="restaurants" className="py-20 lg:py-32 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                For Business
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                For Restaurants & Stores in Kerala
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you run a bakery, hotel, cloud kitchen, or grocery store in Kerala, Meal Saver helps you turn unsold food into revenue. 
                Instead of wasting surplus items at the end of the day, list them on our platform and reach eco-conscious customers nearby. 
                It's a win for your business and for the environment.
              </p>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground font-medium text-sm">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
            
            <Link to="/merchant">
              <Button variant="whatsapp" size="lg" className="min-h-[48px]">
                <Store className="w-5 h-5" aria-hidden="true" />
                Become a Partner
              </Button>
            </Link>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl transform -rotate-6"></div>
            <div className="relative bg-card rounded-3xl p-8 lg:p-12 shadow-card">
              {/* Stats Card */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Store className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Join 200+ Partners</h3>
                  <p className="text-muted-foreground">Restaurants already saving food with us</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background rounded-xl">
                    <p className="text-3xl font-bold text-primary">₹50K+</p>
                    <p className="text-sm text-muted-foreground">Extra monthly revenue</p>
                  </div>
                  <div className="text-center p-4 bg-background rounded-xl">
                    <p className="text-3xl font-bold text-primary">40%</p>
                    <p className="text-sm text-muted-foreground">Less food waste</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-sm font-medium text-muted-foreground">
                        {["🍕", "🍜", "🥐", "🍔"][i - 1]}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    +196 more restaurants
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForRestaurants;
