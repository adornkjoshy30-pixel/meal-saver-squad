import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo";
import { whatsapp } from "@/config/appConfig";

const BrowseDeals = () => {
  const path = "/browse";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Browse Deals", path },
  ];
  return (
    <>
      <PageSEO
        title="Browse Food Deals in Kerala | Bakery, Cake Shop, Supermarket | Meal Saver"
        description="Browse Meal Saver's rescue-food categories — bakery, cake shop, supermarket, grocery, frozen, near-expiry and more. WhatsApp-first, zero waste."
        path={path}
        keywords="browse food deals Kerala, bakery deals, supermarket deals, grocery discounts Kerala"
        jsonLd={[
          collectionPageSchema({ name: "Browse Food Deals", description: "All Meal Saver deal categories in Kerala.", path }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Browse Food Deals</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Meal Saver deals come in a few flavours. Pick the category you care about — every page explains how it works, what to expect and how much you save.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/category/${c.slug}`}
                  className="block p-5 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition"
                >
                  <h2 className="font-semibold text-foreground mb-1">{c.h1.split(" — ")[0]}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{c.description}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 bg-card rounded-2xl text-center">
            <p className="text-muted-foreground mb-4">See every day's live deals in the WhatsApp channel.</p>
            <a href={whatsapp.channelUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" className="min-h-[48px]">Join the WhatsApp channel</Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseDeals;