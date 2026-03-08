import { Button } from "@/components/ui/button";
import { Store, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsapp } from "@/config/appConfig";

const LaunchPhase = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center space-y-8">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Where We Are Now
        </span>

        <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
          We're Just Getting Started
        </h2>

        <div className="text-lg text-muted-foreground space-y-4 max-w-2xl mx-auto">
          <p>
            MealSaver is currently preparing to launch city by city across Kerala. 
            We are onboarding early restaurant partners and building local WhatsApp deal channels.
          </p>
          <p>
            This is day one. No fake numbers, no inflated claims — just a simple idea that we believe can make a real difference for restaurants and customers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/merchant">
            <Button variant="whatsapp-outline" size="lg" className="min-h-[48px] w-full sm:w-auto">
              <Store className="w-5 h-5" aria-hidden="true" />
              Apply as a Restaurant Partner
            </Button>
          </Link>
          <a href="https://whatsapp.com/channel/0029Vb7i7Pu4NVio2gT3Xd2g" target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg" className="min-h-[48px] w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Join WhatsApp Deals
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LaunchPhase;
