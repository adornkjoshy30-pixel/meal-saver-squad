import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BoxExamples from "@/components/BoxExamples";
import ForRestaurants from "@/components/ForRestaurants";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PageSEO from "@/components/PageSEO";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <PageSEO
        title="Meal Saver | Surplus Food at Discounted Prices in Kerala"
        description="Buy surplus food from bakeries, hotels & grocery stores in Kerala at up to 50% off. Save money, reduce waste — order via WhatsApp."
        path="/"
      />
      <Hero />
      <HowItWorks />
      <BoxExamples />
      <ForRestaurants />
      <Mission />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Index;
