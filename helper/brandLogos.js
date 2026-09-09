import { isBrandLogoColorLocked } from "@/helper/Utilities";

// Known filename -> friendlier display name. Anything dropped into
// public/app_images/trusted_by_brands that isn't listed here still works —
// it just falls back to an auto-title-cased version of the filename.
const NAME_OVERRIDES = {
  JAPAUL: "Japaul Group",
  EXPERT_WRITERS: "Expert Writers",
  GEOPLOX: "Geoplox",
  JPGOLDCOIN: "JP Gold Coin",
  "REAL-RIBIAX": "Ribiax Real Estates",
  FLATSHARE: "FlatShare",
  DATAQUEUE: "DataQueue",
  SCALABU: "Scalabu",
};

const toTitleCase = (name) =>
  name
    .replace(/[-_]+/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

// Pulls every image directly inside public/app_images/trusted_by_brands at
// build time — drop a new logo in that folder (or delete one) and every
// consumer of BRAND_LOGOS (the homepage/marquee trust strip, and every
// testimonial component's company logo) picks it up automatically, no code
// or data-file changes needed. `require.context` is a webpack feature,
// resolved once at build time, so this has zero runtime cost.
const logosContext = require.context(
  "../public/app_images/trusted_by_brands",
  false,
  /\.(png|jpe?g|webp|svg)$/i
);

export const BRAND_LOGOS = logosContext
  .keys()
  .sort()
  .map((key) => {
    const mod = logosContext(key);
    const fileName = key.replace("./", "").replace(/\.[^.]+$/, "");
    return {
      src: mod.default || mod,
      name: NAME_OVERRIDES[fileName] || toTitleCase(fileName),
      keepColor: isBrandLogoColorLocked(fileName),
    };
  });

// Deterministic pick by position rather than random, so server- and
// client-side render the same logo for the same card (avoids hydration
// mismatches) and so the same testimonial always shows the same partner.
export function getBrandLogoByIndex(index) {
  return BRAND_LOGOS[index % BRAND_LOGOS.length];
}
