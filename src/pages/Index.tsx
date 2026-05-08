import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DealExample from "@/components/DealExample";
import CityChannels from "@/components/CityChannels";
import WhyItMatters from "@/components/WhyItMatters";
import LaunchPhase from "@/components/LaunchPhase";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PageSEO from "@/components/PageSEO";

const Index = () => {
  return (
    <div className="overflow-hidden">
      <PageSEO
        title="MealSaver | Surplus Food Deals From Local Restaurants in Kerala"
        description="Get surplus food deals from restaurants near you via WhatsApp. No app needed. Join your city's channel and grab affordable meals before they go to waste."
        path="/"
      />
      <Hero />
      <HowItWorks />
      <DealExample />
      <CityChannels />
      <WhyItMatters />
      <LaunchPhase />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Index;
