import { Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrderMethodBadge } from "./OrderMethodBadge";
import { waUrl } from "@/lib/whatsapp";

type OrderMethod = "pickup_only" | "dine_in_only" | "both";

interface DealCardProps {
  title: string;
  restaurantName: string;
  originalPrice: number;
  discountedPrice: number;
  pickupTime: string;
  location: string;
  imageUrl: string;
  orderMethod: OrderMethod;
  quantityLeft?: number;
}

export const DealCard = ({
  title,
  restaurantName,
  originalPrice,
  discountedPrice,
  pickupTime,
  location,
  imageUrl,
  orderMethod,
  quantityLeft,
}: DealCardProps) => {
  const discount = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  const handleGrabNow = () => {
    const text = `Hi! I want to grab "${title}" from ${restaurantName} for ₹${discountedPrice}`;
    window.open(waUrl("deal-card", { mode: "chat", text, campaign: "deal_reservation" }), "_blank");
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative h-44 overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-danger text-danger-foreground text-xs font-bold px-2.5 py-1 rounded-full">
            {discount}% OFF
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <OrderMethodBadge method={orderMethod} />
        </div>
        {quantityLeft !== undefined && quantityLeft <= 3 && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-warning text-warning-foreground text-xs font-medium px-2.5 py-1 rounded-full">
              Only {quantityLeft} left!
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{restaurantName}</p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{pickupTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">₹{discountedPrice}</span>
            <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          </div>
          <Button variant="whatsapp" size="sm" onClick={handleGrabNow} aria-label={`Grab ${title} on WhatsApp`}>
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Grab Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
