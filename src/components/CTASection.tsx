import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
          
          <div className="relative bg-background rounded-3xl p-12 lg:p-16 shadow-card">
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-green-light flex items-center justify-center mx-auto">
                <span className="text-4xl">🥗</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Be the First to Know
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                We're preparing to launch Meal Saver across Kerala. Follow us on WhatsApp to get notified when surplus food deals go live near you — no app download needed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="https://whatsapp.com/channel/0029Vb7i7Pu4NVio2gT3Xd2g" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="xl" className="group min-h-[48px]">
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    Get Launch Updates
                  </Button>
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground">
                No app download needed • 100% free to join
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
