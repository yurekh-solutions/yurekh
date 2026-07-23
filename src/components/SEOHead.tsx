import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schema?: string;
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "https://yurekh.com/og-image.png",
  schema,
  breadcrumbs,
  noindex = false,
}: SEOHeadProps) => {
  const fullTitle = `${title} | Yurekh Solutions`;
  const url = canonical || "https://yurekh.com";

  // Generate breadcrumb schema
  const breadcrumbSchema = breadcrumbs
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://yurekh.com/" },
          ...breadcrumbs.map((b, i) => ({
            "@type": "ListItem" as const,
            position: i + 2,
            name: b.name,
            item: b.url,
          })),
        ],
      })
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Yurekh Solutions" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yurekhsolutions" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">{schema}</script>
      )}

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">{breadcrumbSchema}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
