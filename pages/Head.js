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
    </Head>
  );
};

export default PageHead;
