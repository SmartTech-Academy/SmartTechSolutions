import Link from "next/link";

import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";
import LazyImage from "@/my_components/_Global/LazyImage";
import Brands2 from "@/my_components/TrustedByBrands/Brands2";
import SpecialistAvatar from "./SpecialistAvatar";

// Universal 5-phase engagement roadmap — true of every ERP/CRM rollout we
// run, regardless of platform, so it lives here once instead of duplicated
// per solution entry in my_data/solutions/solutions.js.
const ROADMAP = [
  { num: "01", title: "Discover", desc: "Map your current processes, data, and integration points before a single screen gets configured." },
  { num: "02", title: "Configure", desc: "Build out modules, workflows, and user roles around how your team actually works, not a generic default." },
  { num: "03", title: "Migrate", desc: "Move and validate historical data with a full reconciliation pass — nothing silently lost in transit." },
  { num: "04", title: "Go-live", desc: "A structured cutover with staff training built in, not a system handoff and a wave goodbye." },
  { num: "05", title: "Support", desc: "Ongoing optimization after launch, since real day-to-day usage always surfaces refinements a demo never shows." },
];

/**
 * Single reusable shell for all 5 "Solutions" ERP/CRM implementation pages.
 * Deliberately built on a different visual grammar than
 * my_components/_Industries/IndustryPageTemplate.js: a light editorial
 * split hero with a product panel (instead of a full-bleed dark photo
 * hero), a horizontal engagement roadmap (instead of a dark glass capability
 * grid), and a bordered module checklist (instead of repeating that same
 * card style again) — so a Solutions page reads as a software-implementation
 * partner page, not a re-skinned Industries page.
 */
const SolutionPageTemplate = ({ solution }) => {
  const panelTags = solution.capabilities.slice(0, 4);

  return (
    <main className="rbt-main-wrapper sol-page" style={{ "--sol-accent": solution.accent }}>
      {/* ══════════════ HERO — light editorial split, product panel ══════════════ */}
      <section className="sol-hero-v2">
        <span className="sol-hero-v2__pattern" aria-hidden="true" />
        <span className="sol-hero-v2__blob" aria-hidden="true" />
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <ScrollRevealSection className="sol-hero-v2__copy">
                <span className="sol-hero-v2__eyebrow">
                  <i className={solution.icon}></i> {solution.eyebrow}
                </span>
                <h1 className="sol-hero-v2__title">{solution.heroTitle}</h1>
                <p className="sol-hero-v2__desc">{solution.heroDesc}</p>

                <div className="rbt-button-group">
                  <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Book a Free Consultation</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </span>
                  </Link>
                  <Link className="rbt-btn btn-border hover-icon-reverse" href={ROUTE.solutions}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">All Solutions</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>

                <div className="sol-hero-v2__stats">
                  {solution.stats.map((stat) => (
                    <div className="sol-hero-v2__stat" key={stat.label}>
                      <span className="sol-hero-v2__stat-value">{stat.value}</span>
                      <span className="sol-hero-v2__stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollRevealSection>
            </div>

            <div className="col-lg-6">
              <ScrollRevealSection className="sol-hero-v2__panel" style={{ "--reveal-delay": "0.1s" }}>
                <LazyImage
                  wrapperClassName="sol-hero-v2__panel-media"
                  src={image_url(solution.heroImage, true)}
                  alt={`${solution.fullName} interface`}
                  fill
                  sizes="(max-width: 991px) 90vw, 480px"
                  className="sol-hero-v2__panel-img"
                />
                <div className="sol-hero-v2__panel-tags">
                  {panelTags.map((cap) => (
                    <span className="sol-hero-v2__panel-tag" key={cap.title}>
                      <i className="feather-check-circle"></i> {cap.title}
                    </span>
                  ))}
                </div>
              </ScrollRevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ ABOUT THE PLATFORM ══════════════ */}
      <section className="sol-section">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <ScrollRevealSection className="sol-section__head sol-section__head--left">
                <span className="subtitle bg-primary-opacity">About {solution.name}</span>
                <h2 className="title">What is {solution.fullName}?</h2>
              </ScrollRevealSection>
            </div>
            <div className="col-lg-7">
              <ScrollRevealSection style={{ "--reveal-delay": "0.06s" }}>
                <p className="description has-medium-font-size">{solution.about}</p>
                <div className="sol-partner-note">
                  <span className="sol-partner-note__icon">
                    <i className="feather-check-circle"></i>
                  </span>
                  <span className="sol-partner-note__text">
                    {solution.isPartner ? (
                      <>
                        SmartTech Solutions holds certified <strong>implementation partner</strong> status
                        for {solution.fullName}, helping businesses plan, configure, migrate, and go live
                        with confidence.
                      </>
                    ) : (
                      <>
                        SmartTech Solutions brings hands-on <strong>implementation experience</strong> to{" "}
                        {solution.fullName} deployments — planning, configuring, migrating, and
                        supporting your rollout end to end.
                      </>
                    )}
                  </span>
                </div>
              </ScrollRevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ ENGAGEMENT ROADMAP — horizontal stepper, light ══════════════ */}
      <section className="sol-section sol-roadmap">
        <div className="container">
          <ScrollRevealSection className="sol-section__head">
            <span className="subtitle bg-primary-opacity">How the engagement runs</span>
            <h2 className="title">From discovery to day-two support, in five phases</h2>
          </ScrollRevealSection>

          <div className="sol-roadmap__track">
            {ROADMAP.map((step, index) => (
              <ScrollRevealSection
                className="sol-roadmap__step"
                style={{ "--reveal-delay": `${index * 0.08}s` }}
                key={step.num}
              >
                <span className="sol-roadmap__node">
                  <span className="sol-roadmap__num">{step.num}</span>
                </span>
                <span className="sol-roadmap__body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </span>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ MODULE CHECKLIST ══════════════ */}
      <section className="sol-section sol-modules bg-color-extra2">
        <div className="container">
          <ScrollRevealSection className="sol-section__head">
            <span className="subtitle bg-primary-opacity">What we implement</span>
            <h2 className="title">{solution.name} modules we configure and support</h2>
          </ScrollRevealSection>

          <div className="sol-modules__list">
            {solution.capabilities.map((cap, index) => (
              <ScrollRevealSection
                className="sol-modules__row"
                style={{ "--reveal-delay": `${(index % 3) * 0.06}s` }}
                key={cap.title}
              >
                <span className="sol-modules__row-num">{String(index + 1).padStart(2, "0")}</span>
                <div className="sol-modules__row-body">
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY SMARTTECH + TRUST BADGE ══════════════ */}
      <section className="sol-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <ScrollRevealSection className="sol-section__head sol-section__head--left">
                <span className="subtitle bg-primary-opacity">Why SmartTech</span>
                <h2 className="title">A partner who sees the implementation through</h2>
              </ScrollRevealSection>
              <ul className="rbt-list-style-1">
                {solution.whyPoints.map((point) => (
                  <li key={point}><i className="feather-check"></i> {point}</li>
                ))}
              </ul>
              <div className="read-more-btn mt--40">
                <Link className="rbt-moderbt-btn" href={ROUTE.appointment}>
                  <span className="moderbt-btn-text">Let&apos;s Discuss</span>
                  <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="sol-trust-badge">
                {solution.isPartner ? (
                  <span className="sol-trust-badge__icon">
                    <i className="feather-award"></i>
                  </span>
                ) : (
                  <SpecialistAvatar />
                )}
                <h4>{solution.isPartner ? "Certified implementation partner" : "Dedicated specialist team"}</h4>
                <p>
                  {solution.isPartner
                    ? `Formally certified on ${solution.fullName}, not a generalist consultant learning on your project.`
                    : `A team with real, repeated ${solution.fullName} implementation mileage across finance, operations, and migration work.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TRUSTED BY ══════════════ */}
      <div className="rbt-brand-area bg-color-white sol-trusted-brands">
        <div className="container">
          <Brands2 hide_text="false" title="Trusted by ambitious teams and brands" />
        </div>
      </div>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="sol-section rbt-section-gapBottom">
        <div className="container">
          <ScrollRevealSection className="sol-section__head">
            <span className="subtitle bg-primary-opacity">Common questions</span>
            <h2 className="title">FAQ — {solution.name} implementation</h2>
          </ScrollRevealSection>

          <div className="row g-5 justify-content-center">
            <div className="col-lg-9">
              <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion" id={`sol-faq-${solution.slug}`}>
                {solution.faqs.map((item, index) => (
                  <div className="accordion-item card" key={item.q}>
                    <h2 className="accordion-header card-header" id={`sol-faq-h-${solution.slug}-${index}`}>
                      <button
                        className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#sol-faq-c-${solution.slug}-${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`sol-faq-c-${solution.slug}-${index}`}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`sol-faq-c-${solution.slug}-${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`sol-faq-h-${solution.slug}-${index}`}
                      data-bs-parent={`#sol-faq-${solution.slug}`}
                    >
                      <div className="accordion-body card-body">{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="sol-cta">
        <span className="sol-cta__grid-bg" aria-hidden="true" />
        <span className="sol-cta__glow" aria-hidden="true" />
        <div className="container">
          <ScrollRevealSection className="sol-cta__inner">
            <h2 className="title">Ready to implement {solution.name}?</h2>
            <p>Tell us about your business — we&apos;ll scope the right rollout plan, not a generic one.</p>
            <div className="rbt-button-group justify-content-center">
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Started Now!</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
              <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.solutions}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Explore all Solutions</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </ScrollRevealSection>
        </div>
      </section>
    </main>
  );
};

export default SolutionPageTemplate;
