import Link from "next/link";

import Testimonial_1 from "@/my_components/Testimonials/Testimonial_1";
import Brands2 from "@/my_components/TrustedByBrands/Brands2";
import ProjectCounters from "@/my_components/Counters/ProjectCounters";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";
import Newsletter from "@/my_components/Newsletters/Newsletter";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

import ServiceHero from "./sections/ServiceHero";
import ServiceOutcomes from "./sections/ServiceOutcomes";
import ServiceIndustriesGrid from "./sections/ServiceIndustriesGrid";
import ServiceReadyCta from "./sections/ServiceReadyCta";
import ServiceWhyVisual from "./sections/ServiceWhyVisual";
import ServiceFaqVisual from "./sections/ServiceFaqVisual";
import ServiceFaq from "./sections/ServiceFaq";
import Services from "./sections/Services";
import ServicesProcedures from "./sections/ServicesProcedures";

import ServicesData from "@/my_data/services/services.json";
import ServiceProcedureData from "@/my_data/services/service_procedure.json";
import FaqData from "@/my_data/services/faq.json";
import { projects } from "@/my_data/projects/projects.js";

import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";

/**
 * Single reusable shell for the 10 non-Mobile, non-Cybersecurity service
 * pages — same idea as IndustryPageTemplate.js / SolutionPageTemplate.js:
 * one template driven by a per-service config object
 * (my_data/services/service_pages.js), instead of 10 hand-duplicated page
 * files each drifting slowly out of sync with each other.
 */
const ServicePageTemplate = ({ service }) => {
  const outcomeItems = (service.outcomeProjectIds || [])
    .map((id) => {
      const project = projects.find((p) => p.id === id);
      if (!project) return null;
      return {
        project,
        highlight: service.outcomeHighlights[id],
        panelColor: service.outcomePanelColors[id],
      };
    })
    .filter(Boolean);

  return (
    <main className="rbt-main-wrapper svc-page" style={{ "--accent": service.accent }}>
      {/* ══════════════ HERO ══════════════ */}
      <div className="rbt-banner-area rbt-banner-8 variation-02 breadcrumb-image-container breadcrumb-style-max-width">
        <div className="container">
          <div className="breadcrumb-content-top text-left rbt-reveal" style={{ "--reveal-delay": "0.05s" }}>
            <h1 className="title">
              <span className="theme-gradient">{service.titleAccent}</span> {service.titleRest}
            </h1>
            <p className="description has-medium-font-size mt--20">{service.heroDesc}</p>
          </div>
        </div>
      </div>

      {/* ══════════════ PARTNER MARQUEE — moved directly under the headline,
          above the hero image, matching Cubix's hero → trust row → hero
          image order ══════════════ */}
      <div className="rbt-brand-area bg-color-white svc-trusted-brands">
        <div className="container">
          <Brands2 hide_text="false" title="Trusted by ambitious teams and brands" />
        </div>
      </div>

      <div className="rbt-reveal" style={{ "--reveal-delay": "0.2s" }}>
        <ServiceHero
          mode={service.heroMode}
          tiles={service.heroTiles}
          tileShape={service.tileShape}
          layout={service.heroLayout}
          image={service.heroImage}
          imageAlt={service.heroImageAlt}
          videoId={service.heroVideoId}
          visual={service.heroVisual}
        />
      </div>

      {/* ══════════════ TRUST COUNTERS ══════════════ */}
      <div className="rbt-counterup-area bg-gradient-6 rbt-section-gap">
        <div className="container">
          <ScrollRevealSection className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">{service.countersTitle}</h2>
                <p className="description has-medium-font-size mt--20">{service.countersDesc}</p>
              </div>
            </div>
          </ScrollRevealSection>
          <ProjectCounters
            name_1="Completed Projects"
            counter_1={80}
            name_2="Designers and Developers"
            counter_2={255}
            name_3="Satisfied Clients Globally"
            counter_3={400}
          />
        </div>
      </div>

      {/* ══════════════ OUTCOMES — real shipped projects only ══════════════ */}
      <ServiceOutcomes
        title={service.outcomesTitle}
        description={service.outcomesDesc}
        items={outcomeItems}
      />

      {/* ══════════════ ALL-IN-ONE SERVICES — dark animated backdrop ══════════════ */}
      <div className="mad-services">
        <span className="mad-services__grid-bg" aria-hidden="true" />
        <span className="mad-services__glow mad-services__glow--one" aria-hidden="true" />
        <span className="mad-services__glow mad-services__glow--two" aria-hidden="true" />
        <div className="container">
          <ScrollRevealSection className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">End-to-end delivery</span>
                <h2 className="title color-white">{service.allInOneTitle}</h2>
              </div>
            </div>
          </ScrollRevealSection>
          <ScrollRevealSection>
            <Services data={ServicesData[service.servicesKey]} />
          </ScrollRevealSection>
        </div>
      </div>

      {/* ══════════════ PROCESS ══════════════ */}
      <div
        className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape"
        style={{ height: "600px", position: "relative" }}
      >
        <div className="wrapper pb--50 rbt-index-upper">
          <div className="container">
            <ScrollRevealSection className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title color-white">Our approach, from concept to completion.</h2>
                  <p className="description color-white-off mt--20">{service.processDesc}</p>
                </div>
              </div>
            </ScrollRevealSection>
          </div>
        </div>
      </div>
      <ServicesProcedures data={ServiceProcedureData[service.procedureKey]} />

      {/* ══════════════ WHY SMARTTECH ══════════════ */}
      <div className="rbt-feature-area rbt-single-course-features rbt-section-gap rbt-feature-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row row--30 gy-5 align-items-center">
                <ScrollRevealSection className="col-lg-6 col-xl-5">
                  <div className="thumbnail rbt-shadow-box svc-why-img">
                    <ServiceWhyVisual
                      accent={service.accent}
                      src={service.whyImage}
                      alt={service.whyImageAlt}
                      visual={service.whyVisual}
                    />
                  </div>
                </ScrollRevealSection>

                <ScrollRevealSection className="col-lg-6 col-xl-7">
                  <div className="section-title">
                    <h2 className="title">{service.whyTitle}</h2>
                    <p className="b1 mt--15">{service.whyDesc}</p>
                  </div>

                  <ul className="rbt-list-style-1">
                    {service.whyPoints.map((point) => (
                      <li key={point}><i className="feather-check"></i> {point}</li>
                    ))}
                  </ul>

                  <div className="read-more-btn mt--40">
                    <Link className="rbt-moderbt-btn" href={ROUTE.appointment}>
                      <span className="moderbt-btn-text">Let&apos;s Discuss</span>
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </ScrollRevealSection>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
        <div className="wrapper">
          <div className="container">
            <ScrollRevealSection className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--10">
                  <h2 className="title">
                    Our clients simply love what we do <br />
                    <span className="theme-gradient">No joking - here&apos;s the proof!</span>
                  </h2>
                </div>
              </div>
            </ScrollRevealSection>
          </div>
        </div>
        <Testimonial_1 />
      </div>

      {/* ══════════════ INDUSTRIES ══════════════ */}
      <ServiceIndustriesGrid
        title={service.industriesTitle}
        description={service.industriesDesc}
        industries={service.industries}
      />

      {/* ══════════════ READY-TO-START CTA ══════════════ */}
      <ServiceReadyCta
        title={service.ctaTitle}
        description={service.ctaDesc}
        accent={service.accent}
        statValue={service.ctaStatValue}
        statLabel={service.ctaStatLabel}
      />

      {/* ══════════════ FAQ ══════════════ */}
      <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden" id="testimonial">
        <div className="container">
          <ScrollRevealSection>
            <ServiceFaq
              data={FaqData[service.faqKey]}
              visual={
                <ServiceFaqVisual
                  accent={service.accent}
                  src={service.faqImage}
                  alt={service.faqImageAlt}
                  visual={service.faqVisual}
                />
              }
            />
          </ScrollRevealSection>
        </div>
      </div>

      {/* ══════════════ BLOG / NEWSLETTER ══════════════ */}
      <div className="rbt-rbt-blog-area mb--80 rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-center mb--30">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title">
                <span className="subtitle bg-primary-opacity">Blog Posts</span>
                <h2 className="title">Never miss what we are up to</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.blog}>
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">See All Articles</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <BlogWidget extra_class=" sal-animate" />
        </div>
      </div>

      <div
        className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap"
        style={{ background: "url(" + image_url("/app_images/bg/dots.png") + ") repeat center/auto" }}
      >
        <Newsletter />
      </div>
    </main>
  );
};

export default ServicePageTemplate;
