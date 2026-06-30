import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import HowItWorks from "@/components/HowItWorks";
import DealExample from "@/components/DealExample";
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
      <TrustedBy />
      <HowItWorks />
      <DealExample />
      <FAQ />
      <CTASection />
    </div>
  );
};

export default Index;
