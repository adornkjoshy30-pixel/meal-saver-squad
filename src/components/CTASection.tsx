import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl" />
          
          <div className="relative bg-background rounded-3xl p-12 lg:p-16 shadow-card">
            <div className="space-y-6">
              <div className="w-20 h-20 rounded-2xl bg-green-light flex items-center justify-center mx-auto">
                <span className="text-4xl">🥗</span>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Start Saving Food Today
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                Join thousands of people rescuing meals and reducing waste. 
                Get delicious food at amazing prices — all through WhatsApp.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="https://whatsapp.com/channel/0029Vb7i7Pu4NVio2gT3Xd2g" target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="xl" className="group">
                    <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Start on WhatsApp
                  </Button>
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground">
                No app download needed • 100% free to use
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
