import { useLocation } from "react-router-dom";
import PageSEO from "@/components/PageSEO";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <PageSEO
        title="Page Not Found | Meal Saver"
        description="The page you're looking for doesn't exist. Return to the Meal Saver homepage."
        path={location.pathname}
      />
      <div className="text-center space-y-4">
        <h1 className="text-7xl font-extrabold text-primary">404</h1>
        <p className="text-2xl font-semibold text-foreground">Oops! Page not found</p>
        <p className="text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
