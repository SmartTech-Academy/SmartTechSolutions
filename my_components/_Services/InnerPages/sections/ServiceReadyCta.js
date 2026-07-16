import Link from "next/link";

import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";
import ServiceBuildAbstract from "./ServiceBuildAbstract";
import { ROUTE } from "@/route/app_routes.js";

/**
 * Dark accent-grid CTA with an abstract "under construction" visual —
 * generalized from MobileReadyCta.js so every service page closes on the
 * same premium, non-literal graphic instead of a screenshot repeated from
 * elsewhere on the page.
 */
const ServiceReadyCta = ({ eyebrow = "Let's build", title, description, accent, statValue, statLabel }) => {
  return (
    <div className="svc-cta" style={{ "--accent": accent }}>
      <span className="svc-cta__grid-bg" aria-hidden="true" />
      <span className="svc-cta__glow" aria-hidden="true" />

      <div className="container">
        <div className="svc-cta__row">
          <ScrollRevealSection className="svc-cta__copy">
            <span className="subtitle bg-primary-opacity">{eyebrow}</span>
            <h2 className="title">{title}</h2>
            <p className="description has-medium-font-size">{description}</p>
            <div className="rbt-button-group">
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Started Now!</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
              <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.project}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Explore our Projects</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection className="svc-cta__visual" threshold={0.1}>
            <div className="svc-cta__stage">
              <ServiceBuildAbstract accent={accent} />
            </div>
            {statValue ? (
              <div className="svc-cta__float">
                <strong>{statValue}</strong>
                <span>{statLabel}</span>
              </div>
            ) : null}
          </ScrollRevealSection>
        </div>
      </div>
    </div>
  );
};

export default ServiceReadyCta;
