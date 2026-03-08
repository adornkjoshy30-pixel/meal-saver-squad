import HowItWorks from "@/components/HowItWorks";
import BoxExamples from "@/components/BoxExamples";
import PageSEO from "@/components/PageSEO";

const HowItWorksPage = () => {
  return (
    <div>
      <PageSEO
        title="How Meal Saver Works | Save Food in 3 Easy Steps"
        description="Join your city's WhatsApp channel, see surplus food deals from local restaurants, reserve via WhatsApp, and pick up directly. No app needed."
        path="/how-it-works"
      />
      <HowItWorks />
      <BoxExamples />
    </div>
  );
};

export default HowItWorksPage;
