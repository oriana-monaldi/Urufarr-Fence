import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  image?: string;
};

function SEO({
  title,
  description,
  canonical,
  keywords,
  image = "/seo-image.jpg",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={`https://urufarrfences.com${canonical}`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://urufarrfences.com${canonical}`}
      />
      <meta property="og:image" content={`https://urufarrfences.com${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://urufarrfences.com${image}`}
      />
    </Helmet>
  );
}

export default SEO;
