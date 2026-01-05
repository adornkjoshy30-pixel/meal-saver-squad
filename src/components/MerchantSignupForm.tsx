import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingBag, UtensilsCrossed, MessageCircle, ArrowRight, Store } from "lucide-react";
import { toast } from "sonner";
import { 
  merchantFormSchema, 
  sanitizeForWhatsApp, 
  validateUrlLength, 
  MAX_URL_LENGTH 
} from "@/lib/validation";

type OrderMethod = "pickup_only" | "dine_in_only" | "both";

interface FormData {
  restaurantName: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  orderMethod: OrderMethod;
}

interface FormErrors {
  restaurantName?: string;
  phone?: string;
  email?: string;
  address?: string;
  description?: string;
}

const orderMethodOptions = [
  {
    value: "pickup_only" as OrderMethod,
    label: "Pickup Only",
    description: "Customers pick up their orders",
    icon: ShoppingBag,
  },
  {
    value: "dine_in_only" as OrderMethod,
    label: "Dine-In Only",
    description: "Customers eat at your place",
    icon: UtensilsCrossed,
  },
  {
    value: "both" as OrderMethod,
    label: "Both Options",
    description: "Offer pickup and dine-in",
    icons: [ShoppingBag, UtensilsCrossed],
  },
];

export const MerchantSignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    restaurantName: "",
    phone: "",
    email: "",
    address: "",
    description: "",
    orderMethod: "pickup_only",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleOrderMethodChange = (method: OrderMethod) => {
    setFormData((prev) => ({ ...prev, orderMethod: method }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data with Zod
    const result = merchantFormSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Please check your input and try again");
      return;
    }
    
    // Sanitize inputs for WhatsApp message
    const sanitizedRestaurantName = sanitizeForWhatsApp(formData.restaurantName, 100);
    const sanitizedAddress = sanitizeForWhatsApp(formData.address, 200);
    const sanitizedDescription = sanitizeForWhatsApp(formData.description, 500);
    
    // Create WhatsApp message with sanitized form data
    const message = encodeURIComponent(
      `Hi! I want to join Meal Saver as a merchant.\n\n` +
      `Restaurant: ${sanitizedRestaurantName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Address: ${sanitizedAddress}\n` +
      `Order Method: ${formData.orderMethod.replace(/_/g, " ")}\n` +
      `About: ${sanitizedDescription}`
    );
    
    const url = `https://wa.me/919876543210?text=${message}`;
    
    // Check URL length
    if (!validateUrlLength(url)) {
      toast.error(`Message too long. Please shorten your description.`);
      return;
    }
    
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Store className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Merchant Signup</h3>
          <p className="text-sm text-gray-500">Start your free trial today</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Restaurant Name *</Label>
            <Input
              id="restaurantName"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleInputChange}
              placeholder="Your restaurant name"
              maxLength={100}
              required
              className={errors.restaurantName ? "border-red-500" : ""}
            />
            {errors.restaurantName && (
              <p className="text-xs text-red-500">{errors.restaurantName}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              maxLength={15}
              required
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email@example.com"
              maxLength={100}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Your restaurant address"
              maxLength={200}
              required
              className={errors.address ? "border-red-500" : ""}
            />
            {errors.address && (
              <p className="text-xs text-red-500">{errors.address}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">About Your Business</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Tell us about your restaurant, bakery, or kitchen..."
            rows={3}
            maxLength={500}
            className={errors.description ? "border-red-500" : ""}
          />
          {errors.description && (
            <p className="text-xs text-red-500">{errors.description}</p>
          )}
        </div>

        {/* Order Method Selection */}
        <div className="space-y-3">
          <Label className="text-base">Order Method *</Label>
          <p className="text-sm text-gray-500 -mt-1">How will customers receive their orders?</p>
          
          <div className="grid sm:grid-cols-3 gap-3">
            {orderMethodOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleOrderMethodChange(option.value)}
                className={`relative flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 ${
                  formData.orderMethod === option.value
                    ? "border-primary bg-green-50 ring-2 ring-primary/20"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${
                    formData.orderMethod === option.value
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {"icons" in option ? (
                    <div className="flex items-center gap-0.5">
                      {option.icons.map((Icon, i) => (
                        <Icon key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  ) : (
                    <option.icon className="w-5 h-5" />
                  )}
                </div>
                <span
                  className={`font-medium text-sm ${
                    formData.orderMethod === option.value ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {option.label}
                </span>
                <span className="text-xs text-gray-500 text-center mt-1">{option.description}</span>
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" variant="whatsapp" size="lg" className="w-full mt-6">
          <MessageCircle className="w-5 h-5" />
          Start Free Trial on WhatsApp
          <ArrowRight className="w-4 h-4" />
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By signing up, you agree to our terms. First month is free, cancel anytime.
        </p>
      </div>
    </form>
  );
};

export default MerchantSignupForm;
