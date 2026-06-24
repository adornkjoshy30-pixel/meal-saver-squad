import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedCategories from "@/components/FeaturedCategories";
import DealExample from "@/components/DealExample";
import WhyMealSaver from "@/components/WhyMealSaver";
import ForRestaurants from "@/components/ForRestaurants";
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
        title="Meal Saver | Enjoy More. Waste Less. — Kerala"
        description="Discover quality food and grocery products from local bakeries, cake shops and supermarkets in Kerala via WhatsApp. Get started — no app needed."
        path="/"
      />
      <Hero />
      <HowItWorks />
      <FeaturedCategories />
      <DealExample />
      <WhyMealSaver />
      <ForRestaurants />
      <CityChannels />
      <WhyItMatters />
      <LaunchPhase />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Index;
