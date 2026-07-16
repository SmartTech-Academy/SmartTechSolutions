import Link from "next/link";

import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";
import { ROUTE } from "@/route/app_routes.js";
import MobileBuildAbstract from "./MobileBuildAbstract";

const MobileReadyCta = () => {
  return (
    <div className="mad-cta">
      <span className="mad-cta__grid-bg" aria-hidden="true" />
      <span className="mad-cta__glow" aria-hidden="true" />

      <div className="container">
        <div className="mad-cta__row">
          <ScrollRevealSection className="mad-cta__copy">
            <span className="subtitle bg-primary-opacity">Let&apos;s build</span>
            <h2 className="title">
              Ready to launch your <br />
              next mobile app?
            </h2>
            <p className="description has-medium-font-size">
              Tell us what you&apos;re building. We&apos;ll bring the engineering, design, and
              App Store know-how to get it in front of real users.
            </p>
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

          <ScrollRevealSection className="mad-cta__visual" threshold={0.1}>
            <div className="mad-cta__phone">
              <MobileBuildAbstract />
            </div>
            <div className="mad-cta__float mad-cta__float--one">
              <i className="feather-smartphone"></i>
              <div>
                <strong>iOS &amp; Android</strong>
                <span>Native performance</span>
              </div>
            </div>
            <div className="mad-cta__float mad-cta__float--two">
              <strong>80+</strong>
              <span>Apps delivered</span>
            </div>
          </ScrollRevealSection>
        </div>
      </div>
    </div>
  );
};

export default MobileReadyCta;
