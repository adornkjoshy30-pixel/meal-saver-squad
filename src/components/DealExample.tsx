import { Clock, MapPin, ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DealExample = () => {
  const reserveMessage = encodeURIComponent(
    "Hi Meal Saver! I'd like to reserve:\n\nBakery Surprise Bag – ₹120\nGreen Leaf Bakery, Kattappana\nCollection: 7:30 PM – 8:30 PM\n\nPlease confirm my reservation."
  );

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            See an Example
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            What an offer looks like
          </h2>
          <p className="text-lg text-muted-foreground">
            Here's an example of the offers we share in our WhatsApp channel. Tap "Reserve" to hold your order.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* WhatsApp-style message card */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden border border-border">
            {/* Header */}
            <div className="bg-primary px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-primary-foreground text-sm">New Offer Available</p>
                <p className="text-primary-foreground/70 text-xs">Meal Saver • Idukki Channel</p>
              </div>
            </div>

            {/* Deal content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-bold text-foreground text-lg">Bakery Surprise Bag</h3>
                <p className="text-muted-foreground text-sm mt-1">Green Leaf Bakery, Kattappana</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-foreground">
                    <span className="font-bold text-primary text-lg">₹120</span>
                    <span className="text-muted-foreground line-through ml-2">₹250</span>
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">Great Value</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>Collection: 7:30 PM – 8:30 PM</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>Kattappana, Idukki</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ShoppingBag className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>3 of 5 remaining</span>
                </div>
              </div>

              {/* Reserve CTA */}
              <a
                href={`https://wa.me/917012345678?text=${reserveMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="whatsapp" size="default" className="w-full">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Reserve on WhatsApp
                </Button>
              </a>

              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Tap "Reserve" to send a WhatsApp message. We'll confirm your order and share collection details.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Offers like this go out through our WhatsApp channel. Reserve yours before it's gone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealExample;
