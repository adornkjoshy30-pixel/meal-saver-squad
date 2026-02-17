-- Drop the existing restrictive insert policy
DROP POLICY "No public inserts on restaurants" ON public.restaurants;

-- Allow public merchant signup submissions (inserts only with is_active = false)
CREATE POLICY "Allow public merchant signup submissions"
ON public.restaurants
FOR INSERT
WITH CHECK (is_active = false);