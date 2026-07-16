import LogoMarquee from "@/my_components/_Global/LogoMarquee";

// Known filename -> friendlier alt text. Anything dropped into the folder
// that isn't listed here still works — it just falls back to an
// auto-title-cased version of the filename (see toTitleCase below).
const ALT_OVERRIDES = {
  JAPAUL: "Japaul",
  EXPERT_WRITERS: "Expert Writers",
  GEOPLOX: "Geoplox",
  JPGOLDCOIN: "JP Gold Coin",
  "REAL-RIBIAX": "Ribiax Engineering",
  FLATSHARE: "Flatshare",
  DATAQUEUE: "DataQueue Limited",
  SCALABU: "Scalabu Digital",
};

const toTitleCase = (name) =>
  name
    .replace(/[-_]+/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

// Pulls every image directly inside public/app_images/trusted_by_brands at
// build time — drop a new logo in that folder (or delete one) and it shows
// up here automatically, no code change needed. `require.context` is a
// webpack feature (Next.js Pages Router runs on webpack), resolved once at
// build time, so this has zero runtime cost.
const logosContext = require.context(
  "../../public/app_images/trusted_by_brands",
  false,
  /\.(png|jpe?g|webp|svg)$/i
);

const LOGOS = logosContext
  .keys()
  .sort()
  .map((key) => {
    const mod = logosContext(key);
    const fileName = key.replace("./", "").replace(/\.[^.]+$/, "");
    return {
      src: mod.default || mod,
      alt: ALT_OVERRIDES[fileName] || toTitleCase(fileName),
    };
  });

const Brands2 = ({ hide_text = "true", title }) => {
  return (
    <div className="container">
      <div className="mt--40">
        {hide_text === "false" ? (
          <div className="rbt-brand-title-wrap">
            <h5 className="rbt-brand-title w-600 text-center mb-0">
              {title || (
                <>
                  clients
                  <span className="theme-gradient ms-2"> we're proud to </span>
                  {" "}have worked with{" "}<span className="theme-gradient me-2"></span>
                </>
              )}
            </h5>
          </div>
        ) : null}

        <div className="mt--30">
          <LogoMarquee logos={LOGOS} speed={34} />
        </div>
      </div>
    </div>
  );
};

export default Brands2;
