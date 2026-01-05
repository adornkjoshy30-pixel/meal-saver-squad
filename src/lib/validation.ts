import { z } from "zod";

// Merchant signup form validation schema
export const merchantFormSchema = z.object({
  restaurantName: z
    .string()
    .trim()
    .min(2, "Restaurant name must be at least 2 characters")
    .max(100, "Restaurant name must be less than 100 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[+]?[0-9\s-]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  address: z
    .string()
    .trim()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be less than 200 characters"),
  description: z
    .string()
    .trim()
    .max(500, "Description must be less than 500 characters")
    .optional()
    .or(z.literal("")),
  orderMethod: z.enum(["pickup_only", "dine_in_only", "both"]),
});

export type MerchantFormData = z.infer<typeof merchantFormSchema>;

// Sanitize string for WhatsApp message (remove potentially confusing characters)
export const sanitizeForWhatsApp = (str: string, maxLength: number = 500): string => {
  return str
    .replace(/[<>]/g, "") // Remove angle brackets
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim()
    .substring(0, maxLength);
};

// Validate URL length (browsers have ~2000 char limit)
export const MAX_URL_LENGTH = 2000;

export const validateUrlLength = (url: string): boolean => {
  return url.length <= MAX_URL_LENGTH;
};
