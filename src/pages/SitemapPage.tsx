import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { categories } from "@/data/categories";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blog-posts";
import { breadcrumbSchema } from "@/lib/seo";

const Section = ({ title, links }: { title: string; links: Array<{ to: string; label: string }> }) => (
  <section className="mb-8">
    <h2 className="text-lg font-semibold text-foreground mb-3">{title}</h2>
    <ul className="grid sm:grid-cols-2 gap-y-2">
      {links.map((l) => (
        <li key={l.to}>
          <Link to={l.to} className="text-primary hover:underline">{l.label}</Link>
        </li>
      ))}
    </ul>
  </section>
);

const SitemapPage = () => {
  const path = "/sitemap";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Sitemap", path },
  ];
  return (
    <>
      <PageSEO
        title="Sitemap | Meal Saver"
        description="Every page on Meal Saver — categories, cities, blog and support pages — in one index."
        path={path}
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Sitemap</h1>

          <Section title="Main" links={[
            { to: "/", label: "Home" },
            { to: "/browse", label: "Browse Deals" },
            { to: "/how-it-works", label: "How It Works" },
            { to: "/about", label: "About" },
            { to: "/impact", label: "Impact" },
            { to: "/pricing", label: "Merchant Pricing" },
            { to: "/partners", label: "Partner With Meal Saver" },
            { to: "/contact", label: "Contact & Support" },
            { to: "/faqs", label: "FAQs" },
          ]} />

          <Section title="Categories" links={categories.map((c) => ({ to: `/category/${c.slug}`, label: c.h1.split(" — ")[0] }))} />
          <Section title="Cities" links={cities.map((c) => ({ to: `/cities/${c.slug}`, label: `${c.name}${c.status === "coming-soon" ? " (Soon)" : ""}` }))} />
          <Section title="Blog" links={[{ to: "/blog", label: "All posts" }, ...blogPosts.map((p) => ({ to: `/blog/${p.slug}`, label: p.title }))]} />
          <Section title="Legal" links={[
            { to: "/privacy", label: "Privacy Policy" },
            { to: "/terms", label: "Terms of Service" },
            { to: "/refund", label: "Refund Policy" },
            { to: "/deal-policy", label: "Deal Policy" },
          ]} />
        </div>
      </section>
    </>
  );
};

export default SitemapPage;