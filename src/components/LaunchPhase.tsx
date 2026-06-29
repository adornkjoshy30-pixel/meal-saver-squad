import { Button } from "@/components/ui/button";
import { Store, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { waUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/motion/Reveal";

const LaunchPhase = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <Reveal preset="blur" className="max-w-3xl mx-auto px-6 lg:px-12 text-center space-y-8">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Where We Are Now
        </span>

        <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
          We're just getting started
        </h2>

        <div className="text-lg text-muted-foreground space-y-4 max-w-2xl mx-auto">
          <p>
            Meal Saver is launching across Kerala — starting in Idukki. We're onboarding bakeries, cake shops, supermarkets and other local food retailers, one community at a time.
          </p>
          <p>
            No fake numbers, no inflated claims — just a simple idea that we believe can make a real difference for local businesses and the people who shop with them.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/partners">
            <Button variant="whatsapp-outline" size="lg" className="min-h-[48px] w-full sm:w-auto">
              <Store className="w-5 h-5" aria-hidden="true" />
              Partner With Us
            </Button>
          </Link>
          <a href={waUrl("launch-phase", { campaign: "launch_phase" })} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="lg" className="min-h-[48px] w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Get Started
            </Button>
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default LaunchPhase;
