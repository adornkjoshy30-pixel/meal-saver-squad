import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BoxExamples from "@/components/BoxExamples";
import ForRestaurants from "@/components/ForRestaurants";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="overflow-hidden">
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
