import PageSEO from "@/components/PageSEO";
import PartnerHero from "@/components/partners/PartnerHero";
import PartnerBenefits from "@/components/partners/PartnerBenefits";
import PartnerSteps from "@/components/partners/PartnerSteps";
import PartnerSignup from "@/components/partners/PartnerSignup";
import PartnerCTA from "@/components/partners/PartnerCTA";

const Partners = () => (
  <div>
    <PageSEO
      title="Partner With Meal Saver | Turn Surplus Food Into Revenue"
      description="Join Meal Saver as a restaurant partner in Kerala. Zero cost, zero commission. Share surplus food deals via WhatsApp and reach new customers."
      path="/partners"
    />
    <PartnerHero />
    <PartnerBenefits />
    <PartnerSteps />
    <PartnerSignup />
    <PartnerCTA />
  </div>
);

export default Partners;
