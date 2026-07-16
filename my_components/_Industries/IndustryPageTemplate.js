import Link from "next/link";

import { projects } from "@/my_data/projects/projects.js";
import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";
import LazyImage from "@/my_components/_Global/LazyImage";
import Brands2 from "@/my_components/TrustedByBrands/Brands2";

/**
 * Single reusable shell for all 16 "Industries we serve" pages — each page
 * component just imports its entry from my_data/industries/industries.js
 * and renders <IndustryPageTemplate industry={...} />. Keeping one template
 * means a design/UX fix lands on all 16 pages at once instead of being
 * hand-copied 16 times.
 */
const IndustryPageTemplate = ({ industry }) => {
  const relatedProjects = (industry.projectIds || [])
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <main className="rbt-main-wrapper ind-page" style={{ "--ind-accent": industry.accent }}>
      {/* ══════════════ HERO ══════════════ */}
      <section className="ind-hero">
        <LazyImage
          wrapperClassName="ind-hero__bg"
          src={image_url(industry.heroImage, true)}
          alt={`${industry.name} software development by SmartTech Solutions`}
          fill
          priority
          sizes="100vw"
          className="ind-hero__bg-img"
        />
        <span className="ind-hero__overlay" aria-hidden="true" />

        <div className="container">
          <div className="ind-hero__content rbt-reveal" style={{ "--reveal-delay": "0.1s" }}>
            <span className="ind-hero__eyebrow">
              <i className={industry.icon}></i> {industry.eyebrow}
            </span>
            <h1 className="ind-hero__title">{industry.heroTitle}</h1>
            <p className="ind-hero__desc">{industry.heroDesc}</p>

            <div className="rbt-button-group">
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Start a Project</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
              <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.project}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">See our Work</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </div>

          <div className="ind-hero__stats rbt-reveal" style={{ "--reveal-delay": "0.2s" }}>
            {industry.stats.map((stat) => (
              <div className="ind-hero__stat" key={stat.label}>
                <span className="ind-hero__stat-value">{stat.value}</span>
                <span className="ind-hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CHALLENGES ══════════════ */}
      <section className="ind-section">
        <div className="container">
          <ScrollRevealSection className="ind-section__head">
            <span className="subtitle bg-primary-opacity">The challenge</span>
            <h2 className="title">
              Where {industry.name.toLowerCase()} businesses lose the most time
            </h2>
          </ScrollRevealSection>

          <div className="row row--15 mt_dec--30">
            {industry.challenges.map((challenge, index) => (
              <div className="col-12 col-md-4 mt--30" key={challenge.title}>
                <ScrollRevealSection style={{ "--reveal-delay": `${index * 0.08}s` }}>
                  <div className="ind-challenge-card">
                    <span className="ind-challenge-card__num">{String(index + 1).padStart(2, "0")}</span>
                    <h4>{challenge.title}</h4>
                    <p>{challenge.desc}</p>
                  </div>
                </ScrollRevealSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CAPABILITIES — dark animated backdrop ══════════════ */}
      <section className="ind-capabilities">
        <span className="ind-capabilities__grid-bg" aria-hidden="true" />
        <span className="ind-capabilities__glow" aria-hidden="true" />

        <div className="container">
          <ScrollRevealSection className="ind-section__head ind-section__head--dark">
            <span className="subtitle bg-primary-opacity">What we build</span>
            <h2 className="title color-white">
              {industry.name} software, built end to end
            </h2>
          </ScrollRevealSection>

          <div className="row row--15 mt_dec--30">
            {industry.capabilities.map((cap, index) => (
              <div className="col-12 col-sm-6 col-lg-4 mt--30" key={cap.title}>
                <ScrollRevealSection style={{ "--reveal-delay": `${(index % 3) * 0.08}s` }}>
                  <div className="ind-cap-card">
                    <h4>{cap.title}</h4>
                    <p>{cap.desc}</p>
                  </div>
                </ScrollRevealSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ RELATED WORK (conditional — only real shipped projects) ══════════════ */}
      {relatedProjects.length > 0 ? (
        <section className="ind-section">
          <div className="container">
            <ScrollRevealSection className="ind-section__head">
              <span className="subtitle bg-primary-opacity">Proof, not promises</span>
              <h2 className="title">
                {industry.name} work we&apos;ve actually shipped
              </h2>
            </ScrollRevealSection>

            <div className="row row--15 mt_dec--30">
              {relatedProjects.map((project, index) => (
                <div className="col-12 col-md-6 col-lg-4 mt--30" key={project.id}>
                  <ScrollRevealSection style={{ "--reveal-delay": `${index * 0.08}s` }}>
                    <Link href={project.href} className="ind-project-card">
                      <span className="ind-project-card__media">
                        <LazyImage
                          wrapperClassName="ind-project-card__lazy"
                          src={project.cover}
                          alt={`${project.name} project screen`}
                          fill
                          sizes="(max-width: 767px) 90vw, 360px"
                          className="ind-project-card__img"
                        />
                      </span>
                      <span className="ind-project-card__body">
                        <span className="ind-project-card__industry">{project.industry}</span>
                        <span className="ind-project-card__name">{project.name}</span>
                        <span className="ind-project-card__cta">
                          View case study <i className="feather-arrow-up-right"></i>
                        </span>
                      </span>
                    </Link>
                  </ScrollRevealSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ══════════════ WHY SMARTTECH ══════════════ */}
      <section className="ind-section ind-why">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <ScrollRevealSection className="ind-section__head ind-section__head--left">
                <span className="subtitle bg-primary-opacity">Why SmartTech</span>
                <h2 className="title">
                  Built by a team that ships in {industry.name.toLowerCase()}
                </h2>
              </ScrollRevealSection>
              <ul className="rbt-list-style-1">
                {industry.whyPoints.map((point) => (
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
            <div className="col-lg-6">
              <div className="ind-why__stat-panel">
                {industry.stats.map((stat) => (
                  <div className="ind-why__stat" key={stat.label}>
                    <span className="ind-why__stat-value">{stat.value}</span>
                    <span className="ind-why__stat-label">{stat.label}</span>
                  </div>
                ))}
                <div className="ind-why__stat-icon">
                  <i className={industry.icon}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TRUSTED BY ══════════════ */}
      <div className="rbt-brand-area bg-color-white ind-trusted-brands">
        <div className="container">
          <Brands2 hide_text="false" title="Trusted by ambitious teams and brands" />
        </div>
      </div>

      {/* ══════════════ FAQ ══════════════ */}
      <section className="ind-section rbt-section-gapBottom">
        <div className="container">
          <ScrollRevealSection className="ind-section__head">
            <span className="subtitle bg-primary-opacity">Common questions</span>
            <h2 className="title">FAQ — {industry.name} software development</h2>
          </ScrollRevealSection>

          <div className="row g-5 justify-content-center">
            <div className="col-lg-9">
              <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion" id={`ind-faq-${industry.slug}`}>
                {industry.faqs.map((item, index) => (
                  <div className="accordion-item card" key={item.q}>
                    <h2 className="accordion-header card-header" id={`ind-faq-h-${industry.slug}-${index}`}>
                      <button
                        className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#ind-faq-c-${industry.slug}-${index}`}
                        aria-expanded={index === 0}
                        aria-controls={`ind-faq-c-${industry.slug}-${index}`}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`ind-faq-c-${industry.slug}-${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`ind-faq-h-${industry.slug}-${index}`}
                      data-bs-parent={`#ind-faq-${industry.slug}`}
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
      <section className="ind-cta">
        <span className="ind-cta__grid-bg" aria-hidden="true" />
        <span className="ind-cta__glow" aria-hidden="true" />
        <div className="container">
          <ScrollRevealSection className="ind-cta__inner">
            <h2 className="title">
              Let&apos;s build your next {industry.name.toLowerCase()} product
            </h2>
            <p>Tell us what you&apos;re building — we&apos;ll bring the engineering and design to ship it.</p>
            <div className="rbt-button-group justify-content-center">
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Started Now!</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
              <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.industries}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Explore all Industries</span>
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

export default IndustryPageTemplate;
