import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

/**
 * Keyword → feather-icon lookup for the industries grid below. Config data
 * only ever carried {title, desc} — adding a hand-picked icon field to
 * every industry entry across 11 services (70+ rows) wasn't worth the
 * upkeep, so this matches on the title text instead: one shared map, every
 * service page benefits automatically, including any new industry added
 * later as long as its name is recognizable. Ordered longest/most-specific
 * keyword first so e.g. "entertainment" doesn't shadow "entertainment & media".
 */
const ICON_RULES = [
  ["real estate", "feather-home"],
  ["proptech", "feather-map-pin"],
  ["fintech", "feather-trending-up"],
  ["logistics", "feather-truck"],
  ["supply chain", "feather-package"],
  ["edtech", "feather-book-open"],
  ["education", "feather-book-open"],
  ["faith", "feather-users"],
  ["community", "feather-users"],
  ["e-commerce", "feather-shopping-bag"],
  ["enterprise", "feather-layers"],
  ["saas", "feather-layers"],
  ["web3", "feather-cpu"],
  ["digital assets", "feather-cpu"],
  ["public sector", "feather-shield"],
  ["collectibles", "feather-award"],
  ["art", "feather-award"],
  ["fashion", "feather-scissors"],
  ["apparel", "feather-scissors"],
  ["healthcare", "feather-heart"],
  ["fitness", "feather-activity"],
  ["wellness", "feather-activity"],
  ["marketplace", "feather-shopping-cart"],
  ["advertising", "feather-target"],
  ["marketing", "feather-target"],
  ["brand", "feather-target"],
  ["customer support", "feather-headphones"],
  ["manufacturing", "feather-settings"],
  ["entertainment", "feather-film"],
  ["media", "feather-film"],
  ["music", "feather-music"],
  ["gaming", "feather-play"],
];

const iconFor = (title) => {
  const lower = title.toLowerCase();
  const match = ICON_RULES.find(([keyword]) => lower.includes(keyword));
  return match ? match[1] : "feather-grid";
};

/**
 * Elevated industries grid — real cards (shadow, radius, hover lift) with
 * an accent-tinted icon badge and a quiet decorative index number, instead
 * of the flat hairline-grid table it replaced. `--accent` (already set on
 * <main> per page) drives the icon tint and hover glow, so the same markup
 * reads differently on every service page without extra config.
 */
const ServiceIndustriesGrid = ({ eyebrow = "Built for your world", title, description, industries }) => {
  return (
    <div className="svc-industries">
      <span className="svc-industries__glow" aria-hidden="true" />
      <div className="container">
        <ScrollRevealSection className="svc-industries__head">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6">
              <span className="subtitle bg-primary-opacity">{eyebrow}</span>
              <h2 className="title">{title}</h2>
            </div>
            <div className="col-lg-6">
              <p className="description has-medium-font-size">{description}</p>
            </div>
          </div>
        </ScrollRevealSection>

        <div className="svc-industries__grid">
          {industries.map((industry, index) => (
            <ScrollRevealSection
              className="svc-industries__cell"
              style={{ "--reveal-delay": `${(index % 6) * 0.05}s` }}
              key={industry.title}
            >
              <span className="svc-industries__cell-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="svc-industries__cell-icon">
                <i className={iconFor(industry.title)}></i>
              </span>
              <h4>{industry.title}</h4>
              <p>{industry.desc}</p>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceIndustriesGrid;
