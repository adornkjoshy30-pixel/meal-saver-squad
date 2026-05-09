import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsapp } from "@/config/appConfig";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] gradient-hero overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Now live in Idukki
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight">
            Surplus Food Deals from <br />
            <span className="text-primary">Restaurants in Kerala</span>
          </h1>
          
          <p className="text-xl lg:text-2xl font-semibold text-primary mb-2">
            Real Food. Half the Price. Zero Waste.
          </p>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every evening, verified meal deals from Kerala restaurants land in your WhatsApp — ready to grab before they're gone. No app. No hassle. Just great food.
          </p>
          
          <div className="flex flex-col items-center gap-3 justify-center">
            <a href={whatsapp.channelUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="group min-h-[48px] w-full sm:w-auto">
                <MessageCircle className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                Join WhatsApp Deals
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              Are you a restaurant owner?{" "}
              <Link to="/partners" className="text-primary font-semibold hover:underline">
                List your restaurant →
              </Link>
            </p>
          </div>

          {/* Simple value props */}
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-soft">
              <span className="text-lg">📱</span>
              <span className="text-sm font-medium text-foreground">No app needed</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-soft">
              <span className="text-lg">🍽️</span>
              <span className="text-sm font-medium text-foreground">40–60% off meals</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-soft">
              <span className="text-lg">✅</span>
              <span className="text-sm font-medium text-foreground">Verified deals only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
          <path 
            d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
