import { site } from "@/config/appConfig";

const BASE = site.url;

export const breadcrumbSchema = (
  crumbs: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: `${BASE}${c.path}`,
  })),
});

export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (a: {
  title: string;
  description: string;
  path: string;
  date: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: a.title,
  description: a.description,
  datePublished: a.date,
  dateModified: a.date,
  mainEntityOfPage: `${BASE}${a.path}`,
  image: a.image ? `${BASE}${a.image}` : `${BASE}/og/default.png`,
  author: { "@type": "Organization", name: "Meal Saver" },
  publisher: {
    "@type": "Organization",
    name: "Meal Saver",
    logo: { "@type": "ImageObject", url: `${BASE}/android-chrome-512x512.png` },
  },
});

export const localBusinessSchema = (opts: {
  name: string;
  city: string;
  region?: string;
  path: string;
  lat?: number;
  lng?: number;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: opts.name,
  description: opts.description,
  url: `${BASE}${opts.path}`,
  areaServed: {
    "@type": "City",
    name: opts.city,
    ...(opts.region && { containedInPlace: { "@type": "State", name: opts.region } }),
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: opts.city,
    addressRegion: opts.region ?? "Kerala",
    addressCountry: "IN",
  },
  ...(opts.lat && opts.lng && {
    geo: { "@type": "GeoCoordinates", latitude: opts.lat, longitude: opts.lng },
  }),
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Meal Saver",
  url: BASE,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const collectionPageSchema = (opts: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: opts.name,
  description: opts.description,
  url: `${BASE}${opts.path}`,
  isPartOf: { "@type": "WebSite", name: "Meal Saver", url: BASE },
});