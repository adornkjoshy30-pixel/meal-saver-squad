import HowItWorks from "@/components/HowItWorks";
import BoxExamples from "@/components/BoxExamples";
import PageSEO from "@/components/PageSEO";

const HowItWorksPage = () => {
  return (
    <div>
      <PageSEO
        title="How Meal Saver Works | Discover, Reserve, Collect, Enjoy"
        description="Join your city's WhatsApp channel, discover quality products from local bakeries, cake shops and supermarkets, reserve, and collect at the store. No app needed."
        path="/how-it-works"
      />
      <HowItWorks />
      <BoxExamples />
    </div>
  );
};

export default HowItWorksPage;
