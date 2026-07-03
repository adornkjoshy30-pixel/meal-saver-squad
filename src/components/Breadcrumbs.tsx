import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

/** Visual breadcrumb trail. Pair with `breadcrumbSchema` in PageSEO jsonLd. */
const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
    <ol className="flex flex-wrap items-center gap-1">
      {items.map((c, i) => {
        const last = i === items.length - 1;
        return (
          <li key={c.path} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />}
            {last ? (
              <span aria-current="page" className="text-foreground font-medium">
                {c.name}
              </span>
            ) : (
              <Link to={c.path} className="hover:text-primary underline-offset-2 hover:underline">
                {c.name}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;