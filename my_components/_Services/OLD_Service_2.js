import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import ServicesProp from "./sections/ServicesProp";
import SingleCourseData from "../../data/pages/11-singleCourse.json";
import Testimonial_1 from "@/my_components/Testimonials/Testimonial_1";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import ProcessProcedures from "../_OurProcess/sections/ProcessProcedures";
import HomePageCounter from "@/my_components/Counters/HomePageCounter";

import lineArrow from "@/public/app_images/shape/o-line-arrow.png";

import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";

const serviceImage = (name) =>
  image_url(`/app_images/services/service_images/${name}`, true);

const heroStats = [
  { value: "12+", label: "service tracks" },
  { value: "5", label: "delivery phases" },
  { value: "Web3", label: "AI, apps, games" },
];

const serviceHighlights = [
  {
    title: "Web Applications",
    text: "Fast, scalable platforms, portals, marketplaces, dashboards, and business systems.",
    image: "smarttech_web_development.png",
    route: ROUTE.web_dev_service,
    icon: "feather-monitor",
  },
  {
    title: "Mobile Apps",
    text: "Beautiful iOS and Android products with smooth UX and reliable engineering.",
    image: "smarttech_mobile_app_development.png",
    route: ROUTE.mobile_dev_service,
    icon: "feather-smartphone",
  },
  {
    title: "AI Development",
    text: "Applied AI features, automation, assistants, and smart product workflows.",
    image: "smarttech_ai_development.png",
    route: ROUTE.ai_development_service,
    icon: "feather-cpu",
  },
  {
    title: "Blockchain",
    text: "Tokens, exchanges, smart contracts, NFT platforms, wallets, and asset rails.",
    image: "smarttech_blockchain_development.png",
    route: ROUTE.blockchain_dev_service,
    icon: "feather-link",
  },
  {
    title: "Product Design",
    text: "Research, UX architecture, interface design, prototypes, and design systems.",
    image: "smarttech_uiux.png",
    route: ROUTE.product_design_service,
    icon: "feather-pen-tool",
  },
  {
    title: "Game Development",
    text: "2D, 3D, Web3, PC, mobile, VR, and console experiences built to engage.",
    image: "smarttech_game_development.png",
    route: ROUTE.game_dev_service,
    icon: "feather-crosshair",
  },
];

const deliveryPillars = [
  "Product strategy",
  "UI/UX systems",
  "Full-stack engineering",
  "Cloud deployment",
  "Quality assurance",
  "Launch support",
];

const heroServiceStack = [
  "Web Platforms",
  "Mobile Apps",
  "AI Systems",
  "Blockchain",
  "Product Design",
  "Games & 3D",
];

const Services = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <main className="rbt-main-wrapper services-page">
        <section className="services-hero services-hero-editorial">
          <div className="container">
            <div className="row align-items-end g-5">
              <div className="col-xl-7 col-lg-6">
                <div className="hero-copy" data-sal="slide-up" data-sal-duration="700">
                  <span className="subtitle">SMARTTECH SERVICES</span>
                  <h1>
                    One team for strategy, design, software, AI, blockchain, and launch.
                  </h1>
                  <p>
                    We design, build, and launch web apps, mobile apps, AI
                    systems, blockchain products, games, and immersive creative
                    experiences for founders and businesses that need execution
                    with depth.
                  </p>

                  <div className="hero-actions">
                    <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Hire Us</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>

                    <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.project}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Explore Projects</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div className="hero-stats" aria-label="SmartTech service capabilities">
                    {heroStats.map((item) => (
                      <div className="hero-stat" key={item.label}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="hero-command" data-sal="slide-left" data-sal-duration="800">
                  <div className="command-image">
                    <Image
                      src={serviceImage("smarttech_ai_development.png")}
                      width={604}
                      height={408}
                      priority
                      alt="SmartTech digital product services"
                    />
                  </div>
                  <div className="command-card">
                    <span>Service Stack</span>
                    <div className="command-grid">
                      {heroServiceStack.map((item, index) => (
                        <div key={item}>
                          <strong>{String(index + 1).padStart(2, "0")}</strong>
                          <small>{item}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="command-footer">
                    <i className="feather-compass"></i>
                    <span>From idea to deployed product, with one accountable team.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-rail-section">
          <div className="service-rail" aria-label="SmartTech service highlights">
            {[...serviceHighlights, ...serviceHighlights].map((service, index) => (
              <Link className="rail-card" href={service.route} key={`${service.title}-${index}`}>
                <Image
                  src={serviceImage(service.image)}
                  width={604}
                  height={408}
                  alt={`${service.title} service`}
                />
                <div className="rail-content">
                  <i className={service.icon}></i>
                  <strong>{service.title}</strong>
                  <span>{service.text}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="service-intro rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-end mb--50">
              <div className="col-lg-7">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">WHAT WE BUILD</span>
                  <h2 className="title">
                    Deep technical capability, shaped into products people can actually use.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <p className="description has-medium-font-size mt_md--20 mt_sm--20">
                  Every engagement blends product thinking with reliable
                  engineering. We can help you validate a new idea, rebuild a
                  struggling system, launch an MVP, or scale a product into a
                  full business platform.
                </p>
              </div>
            </div>

            <div className="delivery-pillars">
              {deliveryPillars.map((item) => (
                <span key={item}>
                  <i className="feather-check"></i>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="services-catalog rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-center mb--60">
              <div className="col-lg-5">
                <div className="catalog-panel" data-sal="slide-right" data-sal-duration="700">
                  <span>OUR SERVICES</span>
                  <h2>Choose the capability your product needs next.</h2>
                  <p>
                    From software engineering to creative production, each
                    service is structured around measurable product outcomes,
                    dependable delivery, and long-term maintainability.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="catalog-preview-grid">
                  {serviceHighlights.slice(0, 4).map((service, index) => (
                    <Link
                      className="preview-tile"
                      href={service.route}
                      key={service.title}
                      data-sal="slide-up"
                      data-sal-delay={index * 70}
                    >
                      <i className={service.icon}></i>
                      <strong>{service.title}</strong>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="row g-5">
              <ServicesProp courseData={SingleCourseData.certificate} image={true} />
            </div>
          </div>
        </section>

        <section className="process-hero">
          <div className="container">
            <div className="row g-5 align-items-end">
              <div className="col-lg-7">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">HOW WE WORK</span>
                  <h2 className="title color-white">Our product development process.</h2>
                  <p className="description color-white-off mt--20">
                    From concept to completion, our approach is shaped by
                    discovery, precision, testing, and launch support.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="process-note">
                  <i className="feather-compass"></i>
                  <span>Clear strategy before code. Clean execution before launch.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProcessProcedures />

        <section className="services-counter rbt-counterup-area counterup-section-02 rbt-section-gap">
          <div className="shape-1">
            <Image src={lineArrow} width={86} height={50} alt="Shape" />
          </div>

          <HomePageCounter />
        </section>

        <section className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    <span className="subtitle bg-primary-opacity">CLIENT RESULTS</span>
                    <h2 className="title">
                      Our clients simply love what we do.
                      <br />
                      <span className="theme-gradient">Here is the proof.</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Testimonial_1 />
        </section>

        <section className="services-cta rbt-section-gap">
          <div className="container">
            <div className="cta-panel">
              <div>
                <span>BUILD WITH SMARTTECH</span>
                <h2>Let&apos;s bring your vision to life.</h2>
                <p>
                  Bring the idea. We will help shape the product, design the
                  experience, build the system, and prepare it for launch.
                </p>
              </div>
              <div className="rbt-button-group">
                <Link className="rbt-btn btn-gradient" href={ROUTE.appointment}>Hire Us</Link>
                <Link className="rbt-btn btn-border" href={ROUTE.project}>Explore Projects</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape">
          <div className="wrapper pb--50 rbt-index-upper">
            <div className="container">
              <div className="row g-5 align-items-end mb--60">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="section-title text-start">
                    <h2 className="title color-white">Latest News</h2>
                    <p className="description color-white-off mt--20">
                      Notes from our team on product design, software
                      development, AI, blockchain, and launch strategy.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="load-more-btn text-start text-lg-end">
                    <Link className="rbt-btn btn-border icon-hover radius-round color-white-off" href={ROUTE.blog}>
                      <span className="btn-text">See All Articles</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>

              <BlogGridMinimal />
            </div>
          </div>
        </section>

        <section className="rbt-newsletter-area bg-color-white rbt-section-gapBottom pt--60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Newsletter_2 />
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .services-page {
          --service-dark: #07111f;
          --service-ink: #172033;
          --service-muted: #6d7688;
          --service-orange: #f97316;
          --service-teal: #14b8a6;
          --service-lime: #76b82a;
          --service-line: rgba(23, 32, 51, 0.1);
          overflow-x: hidden;
        }

        .services-hero {
          position: relative;
          overflow: hidden;
          padding: 150px 0 100px;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px) 0 0/74px 74px,
            linear-gradient(180deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px) 0 0/74px 74px,
            radial-gradient(circle at 86% 18%, rgba(249, 115, 22, 0.28), transparent 26%),
            linear-gradient(135deg, #06101e 0%, #111b2d 62%, #07111f 100%);
        }

        .services-hero:after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 180px;
          background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.1));
          pointer-events: none;
        }

        .hero-copy,
        .hero-command {
          position: relative;
          z-index: 1;
        }

        .hero-copy .subtitle {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 7px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0;
        }

        .hero-copy h1 {
          max-width: 900px;
          margin: 24px 0;
          color: #ffffff;
          font-size: clamp(42px, 5.2vw, 76px);
          line-height: 1.02;
          letter-spacing: 0;
        }

        .hero-copy p {
          max-width: 680px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 19px;
          line-height: 1.75;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 34px;
        }

        .hero-actions :global(.rbt-btn.btn-border) {
          border-color: rgba(255, 255, 255, 0.42);
          color: #ffffff;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          max-width: 620px;
          margin-top: 38px;
        }

        .hero-stat {
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(14px);
        }

        .hero-stat strong,
        .hero-stat span {
          display: block;
        }

        .hero-stat strong {
          color: #ffffff;
          font-size: 28px;
          line-height: 1;
        }

        .hero-stat span {
          margin-top: 7px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .hero-command {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(18px);
        }

        .command-image {
          position: relative;
          height: 270px;
          overflow: hidden;
        }

        .command-image:after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 20%, rgba(7, 17, 31, 0.72));
        }

        .command-image :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .command-card {
          padding: 24px;
          background: #ffffff;
        }

        .command-card > span {
          display: block;
          margin-bottom: 16px;
          color: var(--service-orange);
          font-size: 13px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .command-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .command-grid div {
          min-height: 88px;
          padding: 16px;
          border: 1px solid var(--service-line);
          border-radius: 8px;
          background: #f7f9fc;
        }

        .command-grid strong,
        .command-grid small {
          display: block;
        }

        .command-grid strong {
          color: var(--service-orange);
          font-size: 18px;
          line-height: 1;
        }

        .command-grid small {
          margin-top: 12px;
          color: var(--service-ink);
          font-size: 15px;
          font-weight: 900;
          line-height: 1.25;
        }

        .command-footer {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 20px 24px;
          border-top: 1px solid rgba(23, 32, 51, 0.1);
          background: #ffffff;
          color: var(--service-muted);
          font-weight: 800;
          line-height: 1.45;
        }

        .command-footer i {
          flex: 0 0 auto;
          color: var(--service-teal);
          font-size: 24px;
        }

        .services-rail-section {
          overflow: hidden;
          padding: 34px 0;
          background: #ffffff;
        }

        .service-rail {
          display: flex;
          width: max-content;
          gap: 22px;
          padding: 10px 22px;
          animation: service-rail-scroll 46s linear infinite;
        }

        .service-rail:hover {
          animation-play-state: paused;
        }

        .rail-card {
          position: relative;
          width: 360px;
          min-height: 250px;
          flex: 0 0 auto;
          overflow: hidden;
          border-radius: 8px;
          background: var(--service-dark);
          box-shadow: 0 20px 60px rgba(23, 32, 51, 0.14);
        }

        .rail-card :global(img) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.58;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        .rail-card:hover :global(img) {
          transform: scale(1.06);
          opacity: 0.78;
        }

        .rail-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          background: linear-gradient(180deg, transparent, rgba(7, 17, 31, 0.9));
        }

        .rail-content i {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-size: 22px;
        }

        .rail-content strong {
          color: #ffffff;
          font-size: 24px;
          line-height: 1.15;
        }

        .rail-content span {
          margin-top: 9px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 15px;
          line-height: 1.55;
        }

        .service-intro {
          position: relative;
        }

        .delivery-pillars {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .delivery-pillars span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 42px;
          padding: 10px 15px;
          border: 1px solid var(--service-line);
          border-radius: 999px;
          background: #f7f9fc;
          color: var(--service-ink);
          font-size: 14px;
          font-weight: 800;
        }

        .delivery-pillars i {
          color: var(--service-lime);
          font-size: 17px;
        }

        .services-catalog {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
        }

        .catalog-panel {
          position: sticky;
          top: 120px;
          padding: 34px;
          border: 1px solid var(--service-line);
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 18px 60px rgba(23, 32, 51, 0.08);
        }

        .catalog-panel span {
          color: var(--service-orange);
          font-size: 13px;
          font-weight: 900;
        }

        .catalog-panel h2 {
          margin: 18px 0;
          color: var(--service-ink);
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
        }

        .catalog-panel p {
          margin: 0;
          color: var(--service-muted);
          font-size: 17px;
          line-height: 1.75;
        }

        .catalog-preview-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .preview-tile {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 98px;
          padding: 22px;
          border: 1px solid var(--service-line);
          border-radius: 8px;
          background: #ffffff;
          color: var(--service-ink);
          box-shadow: 0 14px 42px rgba(23, 32, 51, 0.06);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .preview-tile:hover {
          transform: translateY(-5px);
          background: #fff8ef;
          color: var(--service-ink);
        }

        .preview-tile i {
          display: inline-flex;
          width: 46px;
          height: 46px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(249, 115, 22, 0.16);
          color: var(--service-orange);
          font-size: 22px;
        }

        .preview-tile strong {
          font-size: 18px;
          line-height: 1.25;
        }

        .services-catalog :global(.modern-course-features-box) {
          overflow: hidden;
          border: 1px solid var(--service-line);
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 22px 70px rgba(23, 32, 51, 0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .services-catalog :global(.modern-course-features-box:hover) {
          transform: translateY(-5px);
          box-shadow: 0 30px 90px rgba(23, 32, 51, 0.14);
        }

        .services-catalog :global(.modern-course-features-box .inner) {
          align-items: center;
          gap: 26px;
        }

        .services-catalog :global(.modern-course-features-box .thumbnail) {
          overflow: hidden;
          border-radius: 8px;
          background: #f7f9fc;
        }

        .services-catalog :global(.modern-course-features-box .thumbnail img) {
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .services-catalog :global(.modern-course-features-box:hover .thumbnail img) {
          transform: scale(1.04);
        }

        .services-catalog :global(.modern-course-features-box .title) {
          color: var(--service-ink);
        }

        .services-catalog :global(.modern-course-features-box p),
        .services-catalog :global(.modern-course-features-box li) {
          color: var(--service-muted);
          line-height: 1.7;
        }

        .services-catalog :global(.modern-course-features-box .btn-border) {
          border-color: rgba(23, 32, 51, 0.18);
          color: var(--service-ink);
        }

        .process-hero {
          position: relative;
          overflow: hidden;
          padding: 95px 0 120px;
          background:
            radial-gradient(circle at 78% 20%, rgba(20, 184, 166, 0.18), transparent 28%),
            linear-gradient(135deg, #050b14, #172033);
        }

        .process-note {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.82);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.5;
        }

        .process-note i {
          color: var(--service-orange);
          font-size: 28px;
        }

        .services-counter {
          position: relative;
          background: #f7f9fc;
        }

        .services-cta {
          background: #f7f9fc;
        }

        .cta-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 46px;
          border-radius: 10px;
          background:
            radial-gradient(circle at 92% 12%, rgba(249, 115, 22, 0.25), transparent 24%),
            linear-gradient(135deg, #07111f, #162033);
          box-shadow: 0 26px 80px rgba(23, 32, 51, 0.18);
        }

        .cta-panel span {
          color: var(--service-orange);
          font-size: 13px;
          font-weight: 900;
        }

        .cta-panel h2 {
          margin: 12px 0;
          color: #ffffff;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
        }

        .cta-panel p {
          max-width: 660px;
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
          font-size: 17px;
          line-height: 1.72;
        }

        .cta-panel :global(.rbt-button-group) {
          flex: 0 0 auto;
          justify-content: flex-end;
        }

        .cta-panel :global(.btn-border) {
          border-color: rgba(255, 255, 255, 0.34);
          color: #ffffff;
        }

        @keyframes service-rail-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 1199px) {
          .command-image {
            height: 240px;
          }
        }

        @media (max-width: 991px) {
          .services-hero {
            padding: 120px 0 90px;
          }

          .catalog-panel {
            position: relative;
            top: auto;
          }

          .cta-panel {
            align-items: flex-start;
            flex-direction: column;
          }

          .cta-panel :global(.rbt-button-group) {
            justify-content: flex-start;
          }
        }

        @media (max-width: 767px) {
          .services-hero :global(.container),
          .services-hero :global(.row),
          .services-hero :global([class*="col-"]) {
            max-width: 100%;
            min-width: 0;
          }

          .hero-copy,
          .hero-copy p,
          .hero-actions {
            width: calc(100vw - 30px);
            max-width: calc(100vw - 30px);
            min-width: 0;
          }

          .hero-copy h1 {
            width: 100%;
            max-width: 100%;
            font-size: 38px;
            overflow-wrap: break-word;
          }

          .hero-copy p {
            font-size: 17px;
            overflow-wrap: break-word;
          }

          .hero-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .hero-actions :global(.rbt-btn) {
            justify-content: center;
            width: 100%;
            max-width: calc(100vw - 30px);
          }

          .hero-stats,
          .catalog-preview-grid {
            grid-template-columns: 1fr;
          }

          .command-grid {
            grid-template-columns: 1fr;
          }

          .command-image {
            height: 220px;
          }

          .rail-card {
            width: 300px;
          }

          .catalog-panel,
          .cta-panel {
            padding: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
