import { ShieldCheck, Users, Sparkles } from "lucide-react";

const MerchantPilot = () => (
  <section className="py-16 lg:py-24 bg-background border-b border-border">
    <div className="max-w-6xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">Where we are honestly</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            Pilot phase. Limited onboarding. Real partners only.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            MealSaver is an early-stage MVP launching across Kerala one area at a time.
            We are not pretending to have thousands of users — we are inviting a small group of restaurants to be the first active listing partners in their neighborhood.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="bg-card border border-border rounded-xl p-5 flex gap-4">
            <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-foreground">FSSAI-verified onboarding</p>
              <p className="text-sm text-muted-foreground">Every partner is checked before any deal goes live.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 flex gap-4">
            <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-foreground">Founding partner advantages</p>
              <p className="text-sm text-muted-foreground">Priority placement in your area's channel and direct access to the founding team.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 flex gap-4">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-foreground">Zero cost during pilot</p>
              <p className="text-sm text-muted-foreground">No subscription, no commission, no platform fees while we prove the model together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MerchantPilot;