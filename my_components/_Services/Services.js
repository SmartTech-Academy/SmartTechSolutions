import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import ServicesProp from "./sections/ServicesProp";
import SingleCourseData from "../../data/pages/11-singleCourse.json";
import Testimonial_1 from "@/my_components/Testimonials/Testimonial_1";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import HomePageCounter from "@/my_components/Counters/HomePageCounter";
import CounterSection from "@/my_components/Counters/CounterSection";

import journeyBg from "@/public/app_images/bg/agile_office_journey_bg.webp";
import servicesHeroVisual from "@/public/app_images/services/services_hero_visual.webp";

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
    image: "smarttech_blockchain_development.webp",
    route: ROUTE.blockchain_dev_service,
    icon: "feather-link",
  },
  {
    title: "Product Design",
    text: "Research, UX architecture, interface design, prototypes, and design systems.",
    image: "smarttech_uiux.png",
    route: ROUTE.product_design_service,
    icon: "feather-edit-3",
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
                <div className="hero-copy rbt-reveal" style={{ "--reveal-delay": "0.05s" }}>
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
                <div className="hero-command rbt-reveal" style={{ "--reveal-delay": "0.2s" }}>
                  <div className="command-image">
                    <Image
                      src={servicesHeroVisual}
                      width={700}
                      height={500}
                      priority
                      alt="SmartTech digital product services — web, mobile, AI, and blockchain builds"
                    />
                  </div>
                  <div className="command-card">
                    <span>Service Stack</span>
                    <div className="command-grid">
                      {heroServiceStack.map((item, index) => (
                        <div
                          key={item}
                          className="rbt-reveal"
                          style={{ "--reveal-delay": `${0.45 + index * 0.06}s` }}
                        >
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














        <section className="services-catalog rbt-section-gapBottom bg-color-white">
          <div className="container">
            {/* <div className="row g-5 align-items-center mb--60">
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
            </div> */}

            <div className="row g-5">
              <ServicesProp courseData={SingleCourseData.certificate} image={true} />
            </div>
          </div>
        </section>












        <section className="services-counter rbt-counterup-area">
          <CounterSection image={journeyBg}>
            <HomePageCounter />
          </CounterSection>
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
    </>
  );
};

export default Services;
