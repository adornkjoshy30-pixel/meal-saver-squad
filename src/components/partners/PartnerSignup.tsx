import { Check } from "lucide-react";
import { MerchantSignupForm } from "@/components/MerchantSignupForm";

const PartnerSignup = () => (
  <section id="signup" className="py-16 lg:py-24 bg-primary/5">
    <div className="max-w-5xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Apply as a Partner
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Fill out the form and our team will reach out to onboard you. We're currently launching across Kerala — early partners get priority support.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">No fees or commissions</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">WhatsApp-only workflow — no new tools</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-foreground">You control pricing and availability</span>
            </div>
          </div>
        </div>
        <MerchantSignupForm />
      </div>
    </div>
  </section>
);

export default PartnerSignup;
