import Link from "next/link";

import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";
import LazyImage from "@/my_components/_Global/LazyImage";

/**
 * Full-bleed alternating case-study panels — the generalized version of
 * MobileSuccessStories.js's "Proof, not promises" section, reused across
 * every service page that has real shipped projects to point to. `items`
 * must be pre-resolved {project, highlight, panelColor} objects (see
 * my_data/services/service_pages.js) — a page with zero matching real
 * projects simply doesn't render this component rather than fabricating
 * case studies that don't exist.
 */
const ServiceOutcomes = ({ eyebrow = "Proof, not promises", title, description, items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="svc-outcomes">
      <div className="container">
        <ScrollRevealSection className="svc-outcomes__head">
          <span className="subtitle bg-primary-opacity">{eyebrow}</span>
          <h2 className="title">{title}</h2>
          <p className="description has-medium-font-size">{description}</p>
        </ScrollRevealSection>
      </div>

      <div className="svc-outcomes__list">
        {items.map((item, index) => (
          <ScrollRevealSection
            className={`svc-outcome-row${index % 2 === 1 ? " svc-outcome-row--reverse" : ""}`}
            style={{ "--reveal-delay": `${index * 0.05}s` }}
            key={item.project.id}
          >
            <div className="svc-outcome-row__media" style={{ background: item.panelColor }}>
              <LazyImage
                wrapperClassName="svc-outcome-row__lazy"
                src={item.project.cover}
                alt={`${item.project.name} — as shown on our Projects page`}
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
                className="svc-outcome-row__img"
              />
            </div>

            <div className="svc-outcome-row__body">
              <span className="svc-outcome-row__industry">{item.project.industry}</span>
              <h3 className="svc-outcome-row__name">{item.project.name}</h3>
              <p className="svc-outcome-row__highlight">{item.highlight}</p>
              <Link href={item.project.href} className="svc-outcome-row__cta">
                View Case Study
              </Link>
            </div>
          </ScrollRevealSection>
        ))}
      </div>
    </div>
  );
};

export default ServiceOutcomes;
