import HowItWorks from "@/components/HowItWorks";
import BoxExamples from "@/components/BoxExamples";
import PageSEO from "@/components/PageSEO";

const HowItWorksPage = () => {
  return (
    <div>
      <PageSEO
        title="How Meal Saver Works | Save Food in 3 Easy Steps"
        description="Browse surplus meals nearby, pay via UPI on WhatsApp, and pick up fresh food at discounted prices. No app needed."
        path="/how-it-works"
      />
      <HowItWorks />
      <BoxExamples />
    </div>
  );
};

export default HowItWorksPage;
