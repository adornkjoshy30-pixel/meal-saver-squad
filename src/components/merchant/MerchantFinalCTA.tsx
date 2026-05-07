import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MerchantFinalCTA = () => (
  <section className="py-20 lg:py-28 bg-foreground">
    <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-background leading-tight mb-5">
        Activate WhatsApp listing.<br />
        Stop throwing away revenue tonight.
      </h2>
      <p className="text-background/70 text-lg max-w-2xl mx-auto mb-8">
        Join as a partner restaurant and start recovering daily losses from unsold food — one WhatsApp message at a time.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/partners#signup">
          <Button variant="whatsapp" size="lg" className="min-h-[52px] w-full sm:w-auto font-semibold">
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Activate WhatsApp Listing
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </Link>
        <Link to="/partners">
          <Button variant="outline" size="lg" className="min-h-[52px] w-full sm:w-auto bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background">
            Talk to the founding team
          </Button>
        </Link>
      </div>
      <p className="text-background/50 text-xs mt-6">Pilot onboarding · Kerala · Limited slots per area</p>
    </div>
  </section>
);

export default MerchantFinalCTA;