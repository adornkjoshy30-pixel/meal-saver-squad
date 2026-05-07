import PageSEO from "@/components/PageSEO";
import MerchantHero from "@/components/merchant/MerchantHero";
import MerchantProblem from "@/components/merchant/MerchantProblem";
import MerchantSolution from "@/components/merchant/MerchantSolution";
import MerchantRetention from "@/components/merchant/MerchantRetention";
import MerchantValue from "@/components/merchant/MerchantValue";
import MerchantTrust from "@/components/merchant/MerchantTrust";
import MerchantFinalCTA from "@/components/merchant/MerchantFinalCTA";

const Index = () => {
  return (
    <div className="ms-dark">
      <PageSEO
        title="MealSaver | Turn Unsold Food Into Daily Revenue via WhatsApp"
        description="Restaurants in Kerala recover daily revenue from unsold food by listing surplus meals via WhatsApp in 30 seconds. No app, no setup, no commission."
        path="/"
      />
      <MerchantHero />
      <MerchantProblem />
      <MerchantSolution />
      <MerchantRetention />
      <MerchantValue />
      <MerchantTrust />
      <MerchantFinalCTA />
    </div>
  );
};

export default Index;
