import { Button } from "@/components/ui/button";
import { MessageCircle, Store, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MerchantHero = () => {
  return (
    <section className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-16 pb-16 lg:pt-24 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              For Restaurants in Kerala · Pilot Onboarding Open
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.05] tracking-tight">
              Recover Revenue From <br />
              <span className="text-primary">Unsold Food — Daily.</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              List your end-of-day surplus on WhatsApp in under 30 seconds.
              MealSaver pushes it to nearby customers — they pick up before it expires.
              No app. No commission. No new staff process.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link to="/partners#signup">
                <Button variant="whatsapp" size="lg" className="min-h-[52px] w-full sm:w-auto font-semibold">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Start Listing Surplus on WhatsApp
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/partners">
                <Button variant="whatsapp-outline" size="lg" className="min-h-[52px] w-full sm:w-auto">
                  <Store className="w-5 h-5" aria-hidden="true" />
                  Become a Partner Restaurant
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> No app to install</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> No commission during pilot</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> You set the price</span>
            </div>
          </div>

          {/* Operational ROI panel */}
          <div className="lg:col-span-5">
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                A typical closing-time loss
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Unsold meals / day</span>
                  <span className="text-xl font-bold text-foreground">15–40</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Avg. cost per meal</span>
                  <span className="text-xl font-bold text-foreground">₹60–₹120</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Daily loss (est.)</span>
                  <span className="text-xl font-bold text-destructive">₹900–₹4,800</span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-sm font-medium text-foreground">Recoverable via MealSaver</span>
                  <span className="text-xl font-bold text-primary">40–60%</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
                Indicative figures based on typical Kerala café & hotel kitchens. Your actual recovery depends on volume and pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantHero;