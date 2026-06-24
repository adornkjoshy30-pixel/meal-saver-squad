import PageSEO from "@/components/PageSEO";
import PartnerHero from "@/components/partners/PartnerHero";
import PartnerBenefits from "@/components/partners/PartnerBenefits";
import PartnerSteps from "@/components/partners/PartnerSteps";
import PartnerSignup from "@/components/partners/PartnerSignup";
import PartnerCTA from "@/components/partners/PartnerCTA";

const Partners = () => (
  <div>
    <PageSEO
      title="Partner With Meal Saver | For Bakeries, Cake Shops & Supermarkets"
      description="Join Meal Saver as a local food retailer in Kerala. Reach new customers and reduce waste — zero cost, zero commission during the pilot."
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
