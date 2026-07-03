import { Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cities } from "@/data/cities";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/seo";

const CitiesIndex = () => {
  const path = "/cities";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Cities", path },
  ];
  const live = cities.filter((c) => c.status === "live");
  const soon = cities.filter((c) => c.status === "coming-soon");
  return (
    <>
      <PageSEO
        title="Meal Saver Cities — Where We're Live & Coming Soon"
        description="Meal Saver is live in Idukki (Kerala). Kochi, Kottayam, Bengaluru, Chennai, Hyderabad, Mumbai and Delhi are on the roadmap. See coverage."
        path={path}
        keywords="Meal Saver cities, Meal Saver Kerala, Meal Saver Idukki, Meal Saver Kochi"
        jsonLd={[
          collectionPageSchema({ name: "Meal Saver Cities", description: "Live and upcoming Meal Saver cities in India.", path }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meal Saver Cities</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Meal Saver is pilot-live in Idukki district, Kerala. Every other city listed here is on the roadmap — join a city page to be notified at launch.
          </p>

          <h2 className="text-xl font-semibold text-foreground mb-3">Live now</h2>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {live.map((c) => (
              <li key={c.slug}>
                <Link to={`/cities/${c.slug}`} className="block p-4 rounded-xl border border-border bg-card hover:border-primary">
                  <span className="font-semibold text-foreground">{c.name}</span>
                  <span className="block text-sm text-muted-foreground">{c.region}</span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-foreground mb-3">Coming soon</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {soon.map((c) => (
              <li key={c.slug}>
                <Link to={`/cities/${c.slug}`} className="block p-4 rounded-xl border border-border bg-card hover:border-primary">
                  <span className="font-semibold text-foreground">{c.name}</span>
                  <span className="block text-sm text-muted-foreground">{c.region}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CitiesIndex;