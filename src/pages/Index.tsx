import PageSEO from "@/components/PageSEO";
import MerchantHero from "@/components/merchant/MerchantHero";
import MerchantProblem from "@/components/merchant/MerchantProblem";
import MerchantSolution from "@/components/merchant/MerchantSolution";
import MerchantRetention from "@/components/merchant/MerchantRetention";
import MerchantPilot from "@/components/merchant/MerchantPilot";
import MerchantFinalCTA from "@/components/merchant/MerchantFinalCTA";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <PageSEO
        title="MealSaver | Recover Revenue From Unsold Food via WhatsApp"
        description="MealSaver helps Kerala restaurants recover daily revenue from unsold food. List surplus on WhatsApp in 30 seconds — no app, no commission. Pilot onboarding open."
        path="/"
      />
      <MerchantHero />
      <MerchantProblem />
      <MerchantSolution />
      <MerchantRetention />
      <MerchantPilot />
      <FAQ />
      <MerchantFinalCTA />
    </div>
  );
};

export default Index;
