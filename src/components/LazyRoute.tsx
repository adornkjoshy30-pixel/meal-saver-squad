import { Suspense, type ComponentType, type LazyExoticComponent } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

/**
 * Wraps a lazy-loaded route component with Suspense + ErrorBoundary
 * so chunk-load failures show a recoverable UI instead of a white screen.
 */
const LazyRoute = ({ component: Component }: { component: LazyExoticComponent<ComponentType<any>> }) => (
  <ErrorBoundary>
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

export default LazyRoute;
