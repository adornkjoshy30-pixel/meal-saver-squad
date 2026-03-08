import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const links = [
  {
    to: "/how-it-works",
    title: "How It Works",
    description: "See how to grab surplus food in 3 simple steps.",
  },
  {
    to: "/partners",
    title: "Become a Partner",
    description: "Join 200+ restaurants reducing waste with Meal Saver.",
  },
  {
    to: "/impact",
    title: "Our Impact",
    description: "See the difference surplus food rescue makes in Kerala.",
  },
];

const BlogInternalLinks = () => (
  <aside aria-label="Related pages" className="mt-12 pt-8 border-t border-border">
    <h2 className="text-lg font-bold text-foreground mb-4">Explore More</h2>
    <div className="grid sm:grid-cols-3 gap-4">
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
