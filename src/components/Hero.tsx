import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroFood from "@/assets/hero-food-branded.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Launching soon in Kerala
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight">
              A Smarter Way to <br />
              <span className="text-primary">Reduce Food Waste</span> <br />
              & Save on Meals
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Meal Saver is building a platform to connect Kerala's bakeries, hotels, and grocery stores with customers who want quality surplus food at reduced prices. We're preparing to launch — join us early.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://whatsapp.com/channel/0029Vb7i7Pu4NVio2gT3Xd2g" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" className="group min-h-[48px]">
                  <MessageCircle className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Get Launch Updates
                </Button>
              </a>
              <Link to="/merchant">
                <Button variant="whatsapp-outline" size="lg" className="min-h-[48px]">
                  Apply as Launch Partner
                </Button>
              </Link>
            </div>

            {/* Value Props instead of fake stats */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-soft">
                <span className="text-lg">🍽️</span>
                <span className="text-sm font-medium text-foreground">Up to 60% off meals</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-soft">
                <span className="text-lg">📱</span>
                <span className="text-sm font-medium text-foreground">Order via WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-soft">
                <span className="text-lg">🌱</span>
                <span className="text-sm font-medium text-foreground">Reduce food waste</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl transform rotate-6"></div>
            <img 
              src={heroFood} 
              alt="Surplus food boxes containing fresh meals, salads, and bakery items available at discounted prices" 
              className="relative rounded-3xl shadow-card w-full object-cover animate-float"
              fetchPriority="high"
              decoding="async"
              width={600}
              height={400}
            />
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Eco-Friendly</p>
                  <p className="text-sm text-muted-foreground">Zero waste packaging</p>
                </div>
              </div>
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
