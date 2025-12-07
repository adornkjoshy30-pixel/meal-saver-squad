-- Create enum for order method
CREATE TYPE public.order_method AS ENUM ('pickup_only', 'dine_in_only', 'both');

-- Add order_method column to restaurants table
ALTER TABLE public.restaurants 
ADD COLUMN order_method public.order_method NOT NULL DEFAULT 'pickup_only';