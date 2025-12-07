import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroFood from "@/assets/hero-food-branded.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4 lg:px-12 lg:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Meal Saver logo" className="h-9 md:h-10 w-auto object-contain" />
            <span className="font-bold text-xl text-foreground">Meal Saver</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              How It Works
            </a>
            <a href="#boxes" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Boxes
            </a>
            <a href="#restaurants" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              For Restaurants
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              FAQ
            </a>
          </div>
          <Link to="/merchant">
            <Button variant="outline" size="sm">
              Join as Merchant
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Reducing food waste across India
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight">
              Save Food. <br />
              <span className="text-primary">Save Money.</span> <br />
              Save the Planet.
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Buy fresh surplus meals from nearby restaurants at <span className="font-semibold text-foreground">50–80% discount</span>. 
              All on WhatsApp — no app needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" size="lg" className="group">
                <MessageCircle className="group-hover:scale-110 transition-transform" />
                Start on WhatsApp
              </Button>
              <Link to="/merchant">
                <Button variant="whatsapp-outline" size="lg">
                  Join as Merchant
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-foreground">50K+</p>
                <p className="text-sm text-muted-foreground">Meals Saved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Restaurant Partners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">₹15L+</p>
                <p className="text-sm text-muted-foreground">Saved by Users</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl transform rotate-6"></div>
            <img 
              src={heroFood} 
              alt="Delicious surplus food boxes with fresh meals and salads" 
              className="relative rounded-3xl shadow-card w-full object-cover animate-float"
            />
            {/* Floating Badge */}
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
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
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
