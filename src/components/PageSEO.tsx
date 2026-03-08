import { Helmet } from "react-helmet-async";
import { site, social } from "@/config/appConfig";

const BASE_URL = site.url;

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const PageSEO = ({
  title,
  description,
  path,
  ogImage = "/og/default.png",
}: PageSEOProps) => {
  const canonicalUrl = `${BASE_URL}${path}`;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Meal Saver" />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content={social.twitterHandle} />
    </Helmet>
  );
};

export default PageSEO;
