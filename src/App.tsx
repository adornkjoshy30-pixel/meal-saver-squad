import { lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/ErrorBoundary";
import AppLayout from "@/components/AppLayout";
import LazyRoute from "@/components/LazyRoute";
import Index from "./pages/Index";

// Lazy-load non-critical pages
const About = lazy(() => import("./pages/About"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const Partners = lazy(() => import("./pages/Partners"));
const Impact = lazy(() => import("./pages/Impact"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Refund = lazy(() => import("./pages/Refund"));
const DealPolicy = lazy(() => import("./pages/DealPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BrowseDeals = lazy(() => import("./pages/BrowseDeals"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const CitiesIndex = lazy(() => import("./pages/CitiesIndex"));
const CityPage = lazy(() => import("./pages/CityPage"));
const FAQs = lazy(() => import("./pages/FAQs"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<LazyRoute component={About} />} />
                <Route path="/how-it-works" element={<LazyRoute component={HowItWorksPage} />} />
                <Route path="/partners" element={<LazyRoute component={Partners} />} />
                <Route path="/impact" element={<LazyRoute component={Impact} />} />
                <Route path="/pricing" element={<LazyRoute component={Pricing} />} />
                <Route path="/blog" element={<LazyRoute component={Blog} />} />
                <Route path="/blog/:slug" element={<LazyRoute component={BlogPost} />} />
                <Route path="/contact" element={<LazyRoute component={Contact} />} />
                <Route path="/terms" element={<LazyRoute component={Terms} />} />
                <Route path="/privacy" element={<LazyRoute component={Privacy} />} />
                <Route path="/refund" element={<LazyRoute component={Refund} />} />
                <Route path="/merchant" element={<Navigate to="/partners" replace />} />
                <Route path="/deal-policy" element={<LazyRoute component={DealPolicy} />} />
                <Route path="/browse" element={<LazyRoute component={BrowseDeals} />} />
                <Route path="/category/:slug" element={<LazyRoute component={CategoryPage} />} />
                <Route path="/cities" element={<LazyRoute component={CitiesIndex} />} />
                <Route path="/cities/:slug" element={<LazyRoute component={CityPage} />} />
                <Route path="/faqs" element={<LazyRoute component={FAQs} />} />
                <Route path="/faq" element={<Navigate to="/faqs" replace />} />
                <Route path="/sitemap" element={<LazyRoute component={SitemapPage} />} />
                <Route path="*" element={<LazyRoute component={NotFound} />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
