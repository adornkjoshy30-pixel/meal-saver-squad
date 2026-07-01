import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingBag, UtensilsCrossed, ArrowRight, Store, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { merchantFormSchema } from "@/lib/validation";
// Lazy-import supabase to avoid crash if env vars are missing at module load
const getSupabase = () => import("@/integrations/supabase/client").then(m => m.supabase);

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

const initialFormData: FormData = {
  restaurantName: "",
  phone: "",
  email: "",
  address: "",
  description: "",
  orderMethod: "pickup_only",
};

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
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOrderMethodChange = (method: OrderMethod) => {
    setFormData((prev) => ({ ...prev, orderMethod: method }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
    
    setIsSubmitting(true);
    
    try {
      const supabase = await getSupabase();
      const { data: fnData, error } = await supabase.functions.invoke("partner-signup", {
        body: {
          restaurantName: formData.restaurantName,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          description: formData.description,
          orderMethod: formData.orderMethod,
          website: (document.getElementById("website") as HTMLInputElement)?.value || "",
        },
      });

      if (error) throw error;
      if (fnData && !fnData.ok) throw new Error(fnData.error || "Submission failed");

      setIsSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
      toast.success("Application submitted successfully!");
    } catch (error: any) {
      console.error("Submission error:", error);
      const msg = error?.message?.includes("Too many")
        ? "Too many requests. Please try again later."
        : "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-3xl p-8 shadow-lg border border-border text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">Our team will contact you shortly.</p>
        <Button 
          variant="outline" 
          className="mt-6" 
          onClick={() => setIsSubmitted(false)}
        >
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 shadow-lg border border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Store className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Partner Application</h3>
          <p className="text-sm text-muted-foreground">Tell us about your business</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Business Name *</Label>
            <Input
              id="restaurantName"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleInputChange}
              placeholder="Your business name"
              maxLength={100}
              required
              className={errors.restaurantName ? "border-destructive" : ""}
            />
            {errors.restaurantName && (
              <p className="text-xs text-destructive">{errors.restaurantName}</p>
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
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
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
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Location *</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Your business location"
              maxLength={200}
              required
              className={errors.address ? "border-destructive" : ""}
            />
            {errors.address && (
              <p className="text-xs text-destructive">{errors.address}</p>
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
            className={errors.description ? "border-destructive" : ""}
          />
          {errors.description && (
            <p className="text-xs text-destructive">{errors.description}</p>
          )}
        </div>

        {/* Order Method Selection (Type of Business) */}
        <div className="space-y-3">
          <Label className="text-base">Type of Business *</Label>
          <p className="text-sm text-muted-foreground -mt-1">How will customers receive their orders?</p>
          
          <div className="grid sm:grid-cols-3 gap-3">
            {orderMethodOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleOrderMethodChange(option.value)}
                aria-pressed={formData.orderMethod === option.value}
                className={`relative flex flex-col items-center p-4 min-h-[96px] rounded-xl border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  formData.orderMethod === option.value
                    ? "border-primary bg-accent ring-2 ring-primary/20"
                    : "border-border bg-card hover:border-primary/40 hover:bg-muted"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${
                    formData.orderMethod === option.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {"icons" in option ? (
                    <div className="flex items-center gap-0.5">
                      {option.icons.map((Icon, i) => (
                        <Icon key={i} className="w-4 h-4" aria-hidden="true" />
                      ))}
                    </div>
                  ) : (
                    <option.icon className="w-5 h-5" aria-hidden="true" />
                  )}
                </div>
                <span
                  className={`font-medium text-sm ${
                    formData.orderMethod === option.value ? "text-primary" : "text-foreground"
                  }`}
                >
                  {option.label}
                </span>
                <span className="text-xs text-muted-foreground text-center mt-1">{option.description}</span>
              </button>
            ))}
        </div>

        {/* Honeypot — hidden from humans */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }}>
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        </div>

        <Button 
          type="submit" 
          variant="whatsapp" 
          size="lg" 
          className="w-full mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              Submit Application
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting, you agree to our terms. No fees or charges during the pilot phase.
        </p>
      </div>
    </form>
  );
};

export default MerchantSignupForm;
