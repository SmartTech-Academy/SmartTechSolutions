import Image from "next/image";

/**
 * Shared hero visual for the non-Mobile, non-Cybersecurity service pages.
 * Two modes, picked per service based on how much real project imagery
 * actually exists for that craft (see my_data/services/service_pages.js):
 *
 * - "collage": a two-layer wall of real screenshots (5-7 tiles), the same
 *   structure as MobileHeroCollage.js, for services backed by several
 *   shipped, multi-screen projects (Web, Blockchain, NFT, MVP).
 *   `tileShape` picks the frame: "phone" (portrait, 9:18.4 — for mobile
 *   screenshots) or "browser" (landscape, 16:10 — for desktop/web
 *   screenshots, which would otherwise be crushed into a phone silhouette).
 * - "single": one real featured image, optionally with a "play" affordance
 *   if a showcase video exists (used instead of a fabricated collage when
 *   only one real asset exists for that service). If no usable real asset
 *   exists at all — or the only one found turns out to be an unlicensed
 *   "preview image only" stock photo, as the game-development stock asset
 *   did — pass `visual` (a React node, typically a bespoke inline-SVG
 *   illustration) instead of `image` to render that in the same frame.
 */
const ServiceHero = ({ mode, tiles, tileShape = "phone", layout, image, imageAlt, videoId, visual }) => {
  if (mode === "single") {
    return (
      <div className="svc-hero-single" aria-hidden="true">
        <span className="svc-hero-single__grid-bg" aria-hidden="true" />
        <span className="svc-hero-single__glow svc-hero-single__glow--one" aria-hidden="true" />
        <span className="svc-hero-single__glow svc-hero-single__glow--two" aria-hidden="true" />
        <div className="svc-hero-single__frame">
          {visual ? visual : (
            <Image src={image} alt={imageAlt || ""} fill sizes="(max-width: 991px) 92vw, 900px" priority className="svc-hero-single__img" />
          )}
          {videoId ? (
            <a
              className="svc-hero-single__play"
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the showcase video"
            >
              <i className="feather-play"></i>
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  const backTiles = [...tiles].reverse();
  const shapeClass = tileShape === "browser" ? " svc-collage--browser" : "";
  const layoutClass = layout ? ` svc-collage--layout-${layout}` : "";

  return (
    <div className={`svc-collage${shapeClass}${layoutClass}`} aria-hidden="true">
      <span className="svc-collage__grid-bg" aria-hidden="true" />
      <span className="svc-collage__glow svc-collage__glow--one" aria-hidden="true" />
      <span className="svc-collage__glow svc-collage__glow--two" aria-hidden="true" />

      <div className="svc-collage__layer svc-collage__layer--back">
        <div className="svc-collage__field svc-collage__field--back">
          {backTiles.map((tile, i) => (
            <div className={`svc-collage__tile svc-collage__tile--back svc-collage__tile--${i}`} key={`back-${i}`}>
              <Image src={tile.src} alt="" fill sizes="(max-width: 767px) 44vw, (max-width: 1199px) 26vw, 340px" className="svc-collage__img" />
            </div>
          ))}
        </div>
      </div>

      <div className="svc-collage__layer svc-collage__layer--front">
        <div className="svc-collage__field">
          {tiles.map((tile, i) => (
            <div className={`svc-collage__tile svc-collage__tile--${i}`} key={i}>
              <Image src={tile.src} alt={tile.alt} fill sizes="(max-width: 767px) 50vw, (max-width: 1199px) 30vw, 420px" priority={i < 3} className="svc-collage__img" />
            </div>
          ))}
        </div>
      </div>

      <span className="svc-collage__scrim" />
    </div>
  );
};

export default ServiceHero;
