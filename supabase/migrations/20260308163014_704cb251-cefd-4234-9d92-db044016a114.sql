
-- 1. Remove the overly-permissive public INSERT policy on restaurants
DROP POLICY IF EXISTS "Allow public merchant signup submissions" ON public.restaurants;

-- 2. Create a durable rate_limits table for edge function abuse tracking
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier text NOT NULL,
  function_name text NOT NULL,
  window_start timestamptz NOT NULL DEFAULT now(),
  request_count integer NOT NULL DEFAULT 1,
  UNIQUE (identifier, function_name)
);

-- Enable RLS and deny all public access (only service role writes here)
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "No public access on rate_limits"
  ON public.rate_limits
  FOR ALL
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

-- 3. Create a helper function for durable rate limiting (called by edge functions via service role)
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  p_identifier text,
  p_function_name text,
  p_max_requests integer DEFAULT 5,
  p_window_seconds integer DEFAULT 3600
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_count integer;
  v_window_start timestamptz;
BEGIN
  -- Try to get existing entry
  SELECT request_count, window_start INTO v_count, v_window_start
  FROM public.rate_limits
  WHERE identifier = p_identifier AND function_name = p_function_name;

  IF NOT FOUND THEN
    -- First request from this identifier
    INSERT INTO public.rate_limits (identifier, function_name, window_start, request_count)
    VALUES (p_identifier, p_function_name, now(), 1);
    RETURN false; -- not limited
  END IF;

  -- Check if window has expired
  IF v_window_start + (p_window_seconds || ' seconds')::interval < now() THEN
    -- Reset window
    UPDATE public.rate_limits
    SET window_start = now(), request_count = 1
    WHERE identifier = p_identifier AND function_name = p_function_name;
    RETURN false;
  END IF;

  -- Window still active, increment
  UPDATE public.rate_limits
  SET request_count = request_count + 1
  WHERE identifier = p_identifier AND function_name = p_function_name;

  RETURN (v_count + 1) > p_max_requests;
END;
$$;

-- 4. Ensure restaurants has explicit deny policies for all write ops (INSERT now included)
-- UPDATE and DELETE deny policies already exist, add INSERT deny
CREATE POLICY "No public inserts on restaurants"
  ON public.restaurants
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);
