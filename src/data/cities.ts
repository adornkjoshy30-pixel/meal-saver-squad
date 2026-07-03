export interface CityPageData {
  slug: string;
  name: string;
  region: string;
  status: "live" | "coming-soon";
  lat?: number;
  lng?: number;
  intro: string;
  keyStores?: string; // description of merchant categories active locally
  waitlistCopy?: string;
}

export const cities: CityPageData[] = [
  {
    slug: "idukki",
    name: "Idukki",
    region: "Kerala",
    status: "live",
    lat: 9.85,
    lng: 76.97,
    intro:
      "Meal Saver's Kerala pilot is centred on Idukki. Local bakeries, cake shops and supermarkets across the district post daily deals on the Meal Saver WhatsApp channel — real deals, real neighbours, zero waste.",
    keyStores: "Bakeries, cake shops and supermarkets across Kattappana, Thodupuzha, Painavu and surrounding towns.",
  },
  {
    slug: "kattappana",
    name: "Kattappana",
    region: "Kerala",
    status: "live",
    lat: 9.7473,
    lng: 77.1173,
    intro:
      "Kattappana is the home town of Meal Saver's Kerala pilot. Bakeries and grocery stores across the town post surplus deals to the channel — pickup within walking or short-ride distance for most locals.",
    keyStores: "Bakeries, cake shops and neighbourhood grocery stores across Kattappana municipality.",
  },
  {
    slug: "kochi",
    name: "Kochi",
    region: "Kerala",
    status: "coming-soon",
    lat: 9.9312,
    lng: 76.2673,
    intro:
      "Kochi is next on the Meal Saver roadmap. We're onboarding bakeries, cake shops and supermarkets across Ernakulam. Join the waitlist to be first when the Kochi channel goes live.",
    waitlistCopy: "Kochi launches after Idukki hits its next milestone. Follow the main Meal Saver channel to hear about the launch first.",
  },
  {
    slug: "kottayam",
    name: "Kottayam",
    region: "Kerala",
    status: "coming-soon",
    lat: 9.5916,
    lng: 76.5222,
    intro:
      "Kottayam is a priority expansion city for Meal Saver Kerala. Local bakeries and supermarkets are being invited to join the pilot ahead of a public launch.",
    waitlistCopy: "Kottayam launches after the Idukki pilot's next phase. Join the main channel for launch news.",
  },
  {
    slug: "bengaluru",
    name: "Bengaluru",
    region: "Karnataka",
    status: "coming-soon",
    lat: 12.9716,
    lng: 77.5946,
    intro:
      "Bengaluru is on the Meal Saver national roadmap after Kerala. Bakeries, cafés and supermarkets in Bengaluru interested in food rescue can register early interest via the main channel.",
    waitlistCopy: "Bengaluru launches after the Kerala rollout stabilises. Register interest to be notified.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    region: "Tamil Nadu",
    status: "coming-soon",
    lat: 13.0827,
    lng: 80.2707,
    intro:
      "Chennai is planned for a later phase of the Meal Saver rollout. Interested merchants and customers can register via the main WhatsApp channel.",
    waitlistCopy: "Chennai will launch after the South India pilot expands. Follow the main channel for updates.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    region: "Telangana",
    status: "coming-soon",
    lat: 17.385,
    lng: 78.4867,
    intro:
      "Hyderabad is on the Meal Saver roadmap. We'll open the Hyderabad channel once the South India rollout completes its next phase.",
    waitlistCopy: "Hyderabad launches later in the national rollout. Register interest on the main channel.",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    region: "Maharashtra",
    status: "coming-soon",
    lat: 19.076,
    lng: 72.8777,
    intro:
      "Mumbai is one of the largest food-waste opportunities in India and is on the Meal Saver national roadmap after the Kerala pilot proves out.",
    waitlistCopy: "Mumbai launches in a later national phase. Register interest via the main channel.",
  },
  {
    slug: "delhi",
    name: "Delhi",
    region: "Delhi NCR",
    status: "coming-soon",
    lat: 28.6139,
    lng: 77.209,
    intro:
      "Delhi NCR is on the Meal Saver national roadmap. Bakeries, cafés and supermarkets interested in food rescue can register early interest via the main channel.",
    waitlistCopy: "Delhi launches in a later national phase. Register interest via the main channel.",
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}