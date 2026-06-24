import { Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/appConfig";

const PartnerHero = () => (
  <section className="py-16 lg:py-24 bg-card">
    <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
        For Bakeries, Cake Shops & Supermarkets
      </span>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
        Turn Unsold Products Into <span className="text-primary">New Opportunities</span>
      </h1>
      <p className="text-lg lg:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
        {site.name} helps bakeries, cake shops, supermarkets and food retailers connect with new local customers while reducing unnecessary waste.
      </p>
      <p className="text-primary font-semibold text-lg mb-8">
        Zero cost. Zero commission. Just WhatsApp.
      </p>
      <a href="#signup">
        <Button variant="whatsapp" size="lg">
          <Store className="w-5 h-5" />
          Partner With Us
          <ArrowRight className="w-4 h-4" />
        </Button>
      </a>
    </div>
  </section>
);

export default PartnerHero;
