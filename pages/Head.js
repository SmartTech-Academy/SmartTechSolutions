import Head from "next/head";
import { useRouter } from "next/router";

import { CONFIG } from "@/app_config.js";

const DEFAULT_DESCRIPTION =
  "SmartTech Solutions is a full-cycle software, AI, and blockchain product studio — we design, build, and launch web apps, mobile apps, AI systems, blockchain products, and games for ambitious teams.";
const DEFAULT_IMAGE = "/app_images/og/smarttech-og-default.webp";

const PageHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  path,
  noIndex = false,
}) => {
  const router = useRouter();
  const canonicalPath = path ?? router.asPath.split("?")[0].split("#")[0];
  const canonicalUrl = `${CONFIG.SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;
  const absoluteImage = image.startsWith("http") ? image : `${CONFIG.SITE_URL}${image}`;
  const isHome = canonicalPath === "/";
  const toJsonLd = (data) => JSON.stringify(data).replace(/</g, "\\u003c");

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONFIG.APP_NAME,
    alternateName: CONFIG.NICK_NAME,
    url: CONFIG.SITE_URL,
    logo: `${CONFIG.SITE_URL}/app_images/fav-logo-blue.png`,
    image: absoluteImage,
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONFIG.ADDRESS,
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: CONFIG.PHONE_1,
        contactType: "customer service",
        email: CONFIG.EMAIL_1,
        areaServed: "Worldwide",
      },
    ],
    sameAs: [
      "https://www.facebook.com/smarttechacademy",
      "https://www.x.com/smarttechacademy",
      "https://www.instagram.com/smarttechacademy",
      "https://www.linkedin.com/company/smarttechacademy",
      "https://www.youtube.com/smarttechacademy",
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonicalUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: CONFIG.APP_NAME,
      url: CONFIG.SITE_URL,
    },
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={CONFIG.APP_NAME} />
      <link rel="icon" href="/app_images/fav-logo-blue.png" />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={CONFIG.APP_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Structured Data */}
      {!noIndex && isHome ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(organizationSchema) }}
        />
      ) : null}
      {!noIndex ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(webPageSchema) }}
        />
      ) : null}
    </Head>
  );
};

export default PageHead;
