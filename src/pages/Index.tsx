import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BoxExamples from "@/components/BoxExamples";
import WhyMealSaver from "@/components/WhyMealSaver";
import ForRestaurants from "@/components/ForRestaurants";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PageSEO from "@/components/PageSEO";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <PageSEO
        title="Meal Saver | Reduce Food Waste & Save on Meals in Kerala"
        description="Meal Saver is building a platform to connect Kerala's restaurants with customers looking for affordable surplus food. Launching soon — join the waitlist."
        path="/"
      />
      <Hero />
      <HowItWorks />
      <BoxExamples />
      <WhyMealSaver />
      <ForRestaurants />
      <Mission />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Index;
