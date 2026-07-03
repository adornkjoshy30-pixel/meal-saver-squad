import PageSEO from "@/components/PageSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { faqs, faqsByCategory } from "@/data/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

const FAQs = () => {
  const path = "/faqs";
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "FAQs", path },
  ];
  const grouped = faqsByCategory();

  return (
    <>
      <PageSEO
        title="FAQs — How Meal Saver Works | Meal Saver"
        description="Everything about Meal Saver: how surplus food deals work, pickup, payment, food safety and merchant onboarding — clearly explained."
        path={path}
        keywords="Meal Saver FAQ, surplus food FAQ, food rescue FAQ, near expiry food safety, WhatsApp food deals FAQ"
        jsonLd={[breadcrumbSchema(crumbs), faqSchema(faqs.map((f) => ({ q: f.q, a: f.a })))]}
      />
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mb-10">
            The short answers to the questions we hear most. Still stuck? Message us via the Support page.
          </p>

          {Object.entries(grouped).map(([cat, list]) => (
            <section key={cat} className="mb-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">{cat}</h2>
              <dl className="space-y-5">
                {list.map((f) => (
                  <div key={f.q}>
                    <dt className="font-medium text-foreground">{f.q}</dt>
                    <dd className="text-muted-foreground mt-1">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQs;