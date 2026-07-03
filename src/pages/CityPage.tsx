import { useParams, Navigate, Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { getCityBySlug, cities } from "@/data/cities";
import { breadcrumbSchema, localBusinessSchema, faqSchema } from "@/lib/seo";
import { whatsapp } from "@/config/appConfig";

const CityPage = () => {
  const { slug } = useParams();
  const city = slug ? getCityBySlug(slug) : undefined;
  if (!city) return <Navigate to="/cities" replace />;

  const path = `/cities/${city.slug}`;
  const isLive = city.status === "live";
  const title = isLive
    ? `Meal Saver ${city.name} — Bakery, Cake Shop & Supermarket Deals`
    : `Meal Saver ${city.name} — Coming Soon | Join the Waitlist`;
  const description = isLive
    ? `Fresh bakery, cake shop and supermarket deals in ${city.name}, ${city.region}. Save 20–60% via WhatsApp — no app, no fees.`
    : `Meal Saver is coming to ${city.name}. Join the waitlist to be first when food rescue deals go live in your city.`;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Cities", path: "/cities" },
    { name: city.name, path },
  ];

  const faqs = isLive
    ? [
        { q: `How do I get Meal Saver deals in ${city.name}?`, a: `Join the Meal Saver WhatsApp channel. Deals from ${city.name} stores are posted daily. Tap a deal, reserve, pick up.` },
        { q: `Which stores are on Meal Saver in ${city.name}?`, a: city.keyStores ?? `Local bakeries, cake shops and supermarkets across ${city.name}.` },
        { q: `Is there a delivery service?`, a: `No — Meal Saver is pickup only. You save because there's no delivery fee or commission.` },
      ]
    : [
        { q: `Is Meal Saver live in ${city.name}?`, a: `Not yet. ${city.name} is on the roadmap. Join the main WhatsApp channel to be notified at launch.` },
        { q: `Can my store in ${city.name} join early?`, a: `Yes. Bakeries and supermarkets can register interest via the Partners page. Early partners get onboarded first at launch.` },
      ];

  return (
    <>
      <PageSEO
        title={title}
        description={description}
        path={path}
        keywords={`Meal Saver ${city.name}, food deals ${city.name}, bakery deals ${city.name}, supermarket deals ${city.name}, ${city.name} food rescue`}
        jsonLd={[
          breadcrumbSchema(crumbs),
          localBusinessSchema({
            name: `Meal Saver ${city.name}`,
            city: city.name,
            region: city.region,
            path,
            lat: city.lat,
            lng: city.lng,
            description,
          }),
          faqSchema(faqs),
        ]}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={crumbs} />
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Meal Saver {city.name}</h1>
            {!isLive && (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Coming soon
              </span>
            )}
          </div>
          <p className="text-lg text-muted-foreground mb-8">{city.intro}</p>

          {isLive ? (
            <>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-3">Local stores on Meal Saver</h2>
                <p className="text-foreground/90 leading-relaxed">{city.keyStores}</p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-3">How pickup works in {city.name}</h2>
                <ol className="list-decimal list-inside space-y-2 text-foreground/90">
                  <li>Join the WhatsApp channel and browse today's deals.</li>
                  <li>Tap the deal — a pre-filled message opens for the store.</li>
                  <li>Send it, then head to the store during the pickup window.</li>
                  <li>Pay the store directly. That's it — no fee, no commission.</li>
                </ol>
              </section>
            </>
          ) : (
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Join the waitlist</h2>
              <p className="text-foreground/90 leading-relaxed">{city.waitlistCopy}</p>
            </section>
          )}

          <section aria-labelledby="faq-heading" className="mt-12">
            <h2 id="faq-heading" className="text-2xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
            <dl className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-medium text-foreground">{f.q}</dt>
                  <dd className="text-muted-foreground mt-1">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-12 p-6 bg-card rounded-2xl text-center">
            <a href={whatsapp.channelUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" className="min-h-[48px]">
                {isLive ? "Join the WhatsApp channel" : "Join the waitlist on WhatsApp"}
              </Button>
            </a>
          </div>

          <nav aria-label="Other cities" className="mt-12">
            <h2 className="text-xl font-semibold text-foreground mb-3">Other cities</h2>
            <ul className="flex flex-wrap gap-2">
              {cities.filter((c) => c.slug !== city.slug).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/cities/${c.slug}`}
                    className="px-3 py-2 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 min-h-[44px] inline-flex items-center"
                  >
                    {c.name}{c.status === "coming-soon" ? " (Soon)" : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default CityPage;