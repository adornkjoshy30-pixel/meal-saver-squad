import { Clock, MapPin, MessageCircle, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrderMethodBadge } from "./OrderMethodBadge";
import { whatsapp } from "@/config/appConfig";

type OrderMethod = "pickup_only" | "dine_in_only" | "both";

interface DealDetailsProps {
  title: string;
  description: string;
  restaurantName: string;
  originalPrice: number;
  discountedPrice: number;
  pickupDate: string;
  pickupStartTime: string;
  pickupEndTime: string;
  location: string;
  imageUrl: string;
  orderMethod: OrderMethod;
  quantityLeft?: number;
  onBack?: () => void;
}

export const DealDetails = ({
  title,
  description,
  restaurantName,
  originalPrice,
  discountedPrice,
  pickupDate,
  pickupStartTime,
  pickupEndTime,
  location,
  imageUrl,
  orderMethod,
  quantityLeft,
  onBack,
}: DealDetailsProps) => {
  const discount = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);

  const handleGrabNow = () => {
    const message = encodeURIComponent(
      `Hi! I want to grab "${title}" from ${restaurantName} for ₹${discountedPrice}.\n\nPickup: ${pickupDate} between ${pickupStartTime} - ${pickupEndTime}`
    );
    window.open("https://whatsapp.com/channel/0029Vb7i7Pu4NVio2gT3Xd2g", "_blank");
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${title} - ${discount}% OFF`,
        text: `Check out this deal: ${title} from ${restaurantName} for just ₹${discountedPrice}!`,
        url: window.location.href,
      });
    } catch {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <img src={imageUrl} alt={title} className="w-full aspect-[4/3] object-cover" />
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
              {discount}% OFF
            </span>
          </div>
          {quantityLeft !== undefined && quantityLeft <= 5 && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-amber-500 text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-lg">
                Only {quantityLeft} left!
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Title and Restaurant */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">{restaurantName}</p>
          </div>

          {/* Description */}
          {description && (
            <p className="text-gray-600 leading-relaxed">{description}</p>
          )}

          {/* Order Options Section */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Order Options
            </h2>
            <OrderMethodBadge method={orderMethod} variant="detail" />
          </div>

          {/* Pickup Info */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Pickup Time</p>
                <p className="text-sm text-gray-600">
                  {pickupDate} • {pickupStartTime} - {pickupEndTime}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Location</p>
                <p className="text-sm text-gray-600">{location}</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">₹{discountedPrice}</span>
            <span className="text-lg text-gray-400 line-through">₹{originalPrice}</span>
            <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
              Save ₹{originalPrice - discountedPrice}
            </span>
          </div>

          {/* CTA Button */}
          <Button
            variant="whatsapp"
            size="lg"
            className="w-full shadow-lg"
            onClick={handleGrabNow}
          >
            <MessageCircle className="w-5 h-5" />
            Grab Now on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealDetails;
