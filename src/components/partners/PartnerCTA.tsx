import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { waUrl } from "@/lib/whatsapp";

const PartnerCTA = () => (
  <section className="py-16 lg:py-24">
    <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
      <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
      <p className="text-muted-foreground mb-6">
        We're happy to explain how the partnership works and answer any questions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contact">
          <Button variant="outline" size="lg">
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </Button>
        </Link>
        <a
          href={waUrl("partner-cta", {
            mode: "chat",
            text: "Hi Meal Saver team! I'd like to partner my business with you.",
            campaign: "partner_inquiry",
          })}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="whatsapp" size="lg">
            <MessageCircle className="w-5 h-5" />
            Chat With Us on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default PartnerCTA;
