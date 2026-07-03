import { useParams, Navigate, Link } from "react-router-dom";
import PageSEO from "@/components/PageSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug, categories } from "@/data/categories";
import { breadcrumbSchema, faqSchema, collectionPageSchema } from "@/lib/seo";
import { whatsapp } from "@/config/appConfig";

const CategoryPage = () => {
  const { slug } = useParams();
  const cat = slug ? getCategoryBySlug(slug) : undefined;
  if (!cat) return <Navigate to="/browse" replace />;

  const path = `/category/${cat.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/browse" },
    { name: cat.h1, path },
  ];

  const related = cat.related
    .map((s) => categories.find((c) => c.slug === s))
    .filter(Boolean) as typeof categories;

  return (
    <>
      <PageSEO
        title={cat.title}
        description={cat.description}
        path={path}
        keywords={cat.keywords}
        jsonLd={[
          collectionPageSchema({ name: cat.h1, description: cat.description, path }),
          breadcrumbSchema(crumbs),
          faqSchema(cat.faqs),
        ]}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{cat.h1}</h1>
          <p className="text-lg text-muted-foreground mb-8">{cat.intro}</p>

          {cat.sections.map((s) => (
            <section key={s.heading} className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-3">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-foreground/90 mb-3 leading-relaxed">{p}</p>
              ))}
            </section>
          ))}

          <section aria-labelledby="faq-heading" className="mt-12">
            <h2 id="faq-heading" className="text-2xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
            <dl className="space-y-5">
              {cat.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-medium text-foreground">{f.q}</dt>
                  <dd className="text-muted-foreground mt-1">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-12 p-6 bg-card rounded-2xl text-center">
            <p className="text-muted-foreground mb-4">Ready to save money and save food?</p>
            <a href={whatsapp.channelUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" className="min-h-[48px]">Join the WhatsApp channel</Button>
            </a>
          </div>

          {related.length > 0 && (
            <nav aria-label="Related categories" className="mt-12">
              <h2 className="text-xl font-semibold text-foreground mb-3">Related</h2>
              <ul className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/category/${r.slug}`}
                      className="px-3 py-2 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 min-h-[44px] inline-flex items-center"
                    >
                      {r.h1.split(" — ")[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryPage;