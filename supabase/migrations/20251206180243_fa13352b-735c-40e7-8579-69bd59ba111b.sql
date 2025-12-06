-- Create enum for meal categories
CREATE TYPE public.meal_category AS ENUM ('surprise_box', 'meal_box', 'grocery_rescue', 'cloud_kitchen');

-- Create restaurants table
CREATE TABLE public.restaurants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  address TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  image_url TEXT,
  is_fssai_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create surplus_meals table
CREATE TABLE public.surplus_meals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  restaurant_id UUID NOT NULL REFERENCES public.restaurants(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  original_price DECIMAL(10,2) NOT NULL,
  discounted_price DECIMAL(10,2) NOT NULL,
  quantity_available INTEGER NOT NULL DEFAULT 0,
  category meal_category NOT NULL DEFAULT 'meal_box',
  pickup_date DATE NOT NULL,
  pickup_start_time TIME NOT NULL,
  pickup_end_time TIME NOT NULL,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.surplus_meals ENABLE ROW LEVEL SECURITY;

-- Public read access for active restaurants
CREATE POLICY "Anyone can view active restaurants"
ON public.restaurants
FOR SELECT
USING (is_active = true);

-- Public read access for active surplus meals
CREATE POLICY "Anyone can view active surplus meals"
ON public.surplus_meals
FOR SELECT
USING (is_active = true);

-- Create indexes for better query performance
CREATE INDEX idx_restaurants_active ON public.restaurants(is_active);
CREATE INDEX idx_surplus_meals_restaurant ON public.surplus_meals(restaurant_id);
CREATE INDEX idx_surplus_meals_pickup_date ON public.surplus_meals(pickup_date);
CREATE INDEX idx_surplus_meals_category ON public.surplus_meals(category);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add triggers for automatic timestamp updates
CREATE TRIGGER update_restaurants_updated_at
BEFORE UPDATE ON public.restaurants
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_surplus_meals_updated_at
BEFORE UPDATE ON public.surplus_meals
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();