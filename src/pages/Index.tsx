import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BoxExamples from "@/components/BoxExamples";
import ForRestaurants from "@/components/ForRestaurants";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <HowItWorks />
      <BoxExamples />
      <ForRestaurants />
      <Mission />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
