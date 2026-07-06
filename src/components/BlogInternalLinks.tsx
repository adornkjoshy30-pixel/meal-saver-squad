import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const links = [
  {
    to: "/browse",
    title: "Browse Today's Deals",
    description: "See what local Kerala bakeries and supermarkets are sharing today.",
  },
  {
    to: "/category/near-expiry-food",
    title: "Near-Expiry Food Guide",
    description: "Why near-expiry food is safe — and how to save 30–70% on groceries.",
  },
  {
    to: "/category/affordable-food",
    title: "Affordable Food Near You",
    description: "Quality food at fair prices from trusted Kerala stores.",
  },
  {
    to: "/category/bakeries",
    title: "Bakery Deals in Kerala",
    description: "Fresh breads, cakes and pastries at end-of-day prices.",
  },
  {
    to: "/cities/idukki",
    title: "Meal Saver in Idukki",
    description: "Our live pilot city — see daily deals across the district.",
  },
  {
    to: "/faqs",
    title: "Frequently Asked Questions",
    description: "Everything about how Meal Saver works, safety and pickup.",
  },
];

const BlogInternalLinks = () => (
  <aside aria-label="Related pages" className="mt-12 pt-8 border-t border-border">
    <h2 className="text-lg font-bold text-foreground mb-4">Explore More</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="group p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all min-h-[48px]"
        >
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm mb-1">
            {link.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-2">{link.description}</p>
          <span className="inline-flex items-center gap-1 text-primary text-xs font-medium">
            Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  </aside>
);

export default BlogInternalLinks;
