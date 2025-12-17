-- RLS is already enabled on restaurants table
-- The existing SELECT policy allows reading active restaurants

-- Create restrictive policies that block all write operations for public users
-- Service role automatically bypasses RLS, so admins can still modify via backend

-- Explicitly deny INSERT for all public users (no policy = denied by default, but being explicit)
CREATE POLICY "No public inserts on restaurants"
ON public.restaurants
FOR INSERT
TO anon, authenticated
WITH CHECK (false);

-- Explicitly deny UPDATE for all public users
CREATE POLICY "No public updates on restaurants"
ON public.restaurants
FOR UPDATE
TO anon, authenticated
USING (false)
WITH CHECK (false);

-- Explicitly deny DELETE for all public users
CREATE POLICY "No public deletes on restaurants"
ON public.restaurants
FOR DELETE
TO anon, authenticated
USING (false);