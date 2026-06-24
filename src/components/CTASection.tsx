import { Button } from "@/components/ui/button";
import { MessageCircle, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { whatsapp } from "@/config/appConfig";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
          
          <div className="relative bg-background rounded-3xl p-12 lg:p-16 shadow-card">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Ready to enjoy more and waste less?
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                Join the WhatsApp channel to discover quality products from local bakeries, cake shops and supermarkets near you. Free to join, no app needed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href={whatsapp.channelUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="xl" className="group min-h-[48px] w-full sm:w-auto">
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    Get Started
                  </Button>
                </a>
                <Link to="/partners">
                  <Button variant="whatsapp-outline" size="lg" className="min-h-[48px] w-full sm:w-auto">
                    <Store className="w-5 h-5" aria-hidden="true" />
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
