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
        <section className="services-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="hero-copy" data-sal="slide-up" data-sal-duration="700">
                  <span className="subtitle">SMARTTECH SERVICES</span>
                  <h1>
                    Digital products built for serious growth.
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

              <div className="col-lg-6">
                <div className="hero-lab" data-sal="zoom-in" data-sal-duration="800">
                  <div className="lab-orbit lab-orbit-one"></div>
                  <div className="lab-orbit lab-orbit-two"></div>

                  <div className="lab-card lab-card-main">
                    <Image
                      src={serviceImage("smarttech_web_development.png")}
                      width={604}
                      height={408}
                      priority
                      alt="SmartTech web application development"
                    />
                    <div>
                      <span>Build Track</span>
                      <strong>Web Platforms</strong>
                    </div>
                  </div>

                  <div className="lab-card lab-card-mobile">
                    <Image
                      src={serviceImage("smarttech_mobile_app_development.png")}
                      width={604}
                      height={408}
                      priority
                      alt="SmartTech mobile application development"
                    />
                    <div>
                      <span>Experience</span>
                      <strong>Mobile Apps</strong>
                    </div>
                  </div>

                  <div className="lab-card lab-card-ai">
                    <Image
                      src={serviceImage("smarttech_ai_development.png")}
                      width={604}
                      height={408}
                      alt="SmartTech AI development"
                    />
                    <div>
                      <span>Intelligence</span>
                      <strong>AI Systems</strong>
                    </div>
                  </div>

                  <div className="lab-floating-note">
                    <i className="feather-zap"></i>
                    <span>Strategy, design, engineering, launch.</span>
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

        <section className="services-catalog rbt-section-gap bg-color-darker">
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
          padding: 150px 0 120px;
          background:
            linear-gradient(115deg, rgba(255, 255, 255, 0.055) 0 1px, transparent 1px 100%) 0 0/52px 52px,
            radial-gradient(circle at 76% 18%, rgba(20, 184, 166, 0.28), transparent 28%),
            radial-gradient(circle at 18% 82%, rgba(249, 115, 22, 0.26), transparent 26%),
            linear-gradient(135deg, #050b14 0%, #101b2e 58%, #241408 100%);
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
        .hero-lab {
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
          max-width: 760px;
          margin: 24px 0;
          color: #ffffff;
          font-size: clamp(44px, 5.8vw, 82px);
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

        .hero-lab {
          min-height: 640px;
          perspective: 1200px;
        }

        .lab-card {
          position: absolute;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.34);
        }

        .lab-card :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .lab-card div {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 15px;
          border-radius: 8px;
          background: rgba(7, 17, 31, 0.82);
          backdrop-filter: blur(12px);
        }

        .lab-card span,
        .lab-card strong {
          display: block;
          color: #ffffff;
        }

        .lab-card span {
          color: rgba(255, 255, 255, 0.72);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .lab-card strong {
          margin-top: 4px;
          font-size: 23px;
          line-height: 1.15;
        }

        .lab-card-main {
          top: 58px;
          right: 10px;
          width: min(560px, 94%);
          height: 370px;
          transform: rotateY(-10deg) rotateX(4deg) rotateZ(1deg);
          animation: lab-main-float 8s ease-in-out infinite;
        }

        .lab-card-mobile {
          left: 8px;
          bottom: 18px;
          width: 280px;
          height: 310px;
          transform: rotate(-7deg);
          animation: lab-card-float 7s ease-in-out infinite;
        }

        .lab-card-ai {
          right: 12px;
          bottom: 0;
          width: 300px;
          height: 245px;
          transform: rotate(6deg);
          animation: lab-card-float-two 7.5s ease-in-out infinite;
        }

        .lab-floating-note {
          position: absolute;
          top: 8px;
          left: 62px;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 270px;
          padding: 18px 20px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
          color: var(--service-ink);
          font-weight: 800;
          line-height: 1.4;
        }

        .lab-floating-note i {
          color: var(--service-orange);
          font-size: 22px;
        }

        .lab-orbit {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .lab-orbit-one {
          top: 20px;
          right: 0;
          width: 520px;
          height: 520px;
          animation: service-spin 24s linear infinite;
        }

        .lab-orbit-two {
          right: 100px;
          bottom: 28px;
          width: 310px;
          height: 310px;
          border-color: rgba(20, 184, 166, 0.24);
          animation: service-spin 18s linear infinite reverse;
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
            radial-gradient(circle at 84% 10%, rgba(249, 115, 22, 0.18), transparent 28%),
            linear-gradient(135deg, #07111f, #121d31);
        }

        .catalog-panel {
          position: sticky;
          top: 120px;
          padding: 34px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(16px);
        }

        .catalog-panel span {
          color: var(--service-orange);
          font-size: 13px;
          font-weight: 900;
        }

        .catalog-panel h2 {
          margin: 18px 0;
          color: #ffffff;
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
        }

        .catalog-panel p {
          margin: 0;
          color: rgba(255, 255, 255, 0.74);
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
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .preview-tile:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.11);
          color: #ffffff;
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
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);
        }

        .services-catalog :global(.modern-course-features-box .title),
        .services-catalog :global(.modern-course-features-box p),
        .services-catalog :global(.modern-course-features-box li) {
          color: #ffffff;
        }

        .services-catalog :global(.modern-course-features-box p),
        .services-catalog :global(.modern-course-features-box li) {
          color: rgba(255, 255, 255, 0.74);
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

        @keyframes lab-main-float {
          0%,
          100% {
            transform: rotateY(-10deg) rotateX(4deg) rotateZ(1deg) translateY(0);
          }

          50% {
            transform: rotateY(-7deg) rotateX(2deg) rotateZ(0deg) translateY(-14px);
          }
        }

        @keyframes lab-card-float {
          0%,
          100% {
            transform: rotate(-7deg) translateY(0);
          }

          50% {
            transform: rotate(-4deg) translateY(-14px);
          }
        }

        @keyframes lab-card-float-two {
          0%,
          100% {
            transform: rotate(6deg) translateY(0);
          }

          50% {
            transform: rotate(3deg) translateY(-12px);
          }
        }

        @keyframes service-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
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
          .hero-lab {
            min-height: 600px;
          }

          .lab-card-main {
            width: min(500px, 94%);
          }
        }

        @media (max-width: 991px) {
          .services-hero {
            padding: 120px 0 90px;
          }

          .hero-lab {
            min-height: 640px;
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

          .hero-lab {
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
            min-height: auto;
          }

          .lab-orbit {
            display: none;
          }

          .lab-card,
          .lab-card-main,
          .lab-card-mobile,
          .lab-card-ai,
          .lab-floating-note {
            position: relative;
            top: auto;
            right: auto;
            bottom: auto;
            left: auto;
            width: 100%;
            height: 260px;
            transform: none;
            animation: none;
          }

          .lab-floating-note {
            height: auto;
            margin-top: 4px;
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
