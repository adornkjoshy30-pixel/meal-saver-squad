import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Leaf, Heart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { site, whatsapp } from "@/config/appConfig";
import heroBakery from "@/assets/hero-bakery.jpg";

const Hero = () => {
  return (
    <section className="relative gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-7 animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Now live in Idukki, Kerala
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
              Enjoy More. <br />
              <span className="text-primary">Waste Less.</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {site.name} connects you with quality products from bakeries, cake shops, supermarkets and local food retailers — before they go unsold.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
              <a href={whatsapp.channelUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="whatsapp" size="lg" className="group min-h-[48px] w-full sm:w-auto">
                  <MessageCircle className="group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Get Started
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
              <Link to="/partners" className="w-full sm:w-auto">
                <Button variant="whatsapp-outline" size="lg" className="min-h-[48px] w-full sm:w-auto">
                  Partner With Us
                </Button>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
              <div className="flex items-center gap-2 px-3.5 py-2 bg-card rounded-full shadow-soft">
                <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Quality checked</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-card rounded-full shadow-soft">
                <Heart className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Local businesses</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-card rounded-full shadow-soft">
                <Leaf className="w-4 h-4 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Less waste</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-6 bg-primary/10 rounded-[2.5rem] blur-3xl -z-10" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3] bg-card">
              <img
                src={heroBakery}
                alt="Fresh breads and pastries on display at a sunlit local bakery in Kerala"
                width={1536}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-card rounded-2xl shadow-card px-5 py-4 flex items-center gap-3 max-w-[260px]">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">
                Good food deserves a second chance.
              </p>
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
