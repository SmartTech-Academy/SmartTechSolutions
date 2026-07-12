import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const lodaImg = (name) => `/app_images/projects/lodapoint/${name}.png`;







const riderScreens = [
  { file: "dashboard",         label: "Home Dashboard" },
  { file: "Ride Hailing",      label: "Ride Hailing" },
  { file: "pick_location",     label: "Pick Locations" },
  { file: "delivery",          label: "Delivery Booking" },
  { file: "trip_detail_page",  label: "Trip Details" },
  { file: "ride_requests",     label: "Ride Requests" },
];




const opsScreens = [
  { file: "trips",                   label: "Trip History" },
  { file: "drivers_dashboard",       label: "Driver Earnings" },
  { file: "drivers_activity_screen", label: "Driver Activity" },
  { file: "Drivers",                 label: "Fleet Drivers" },
  { file: "workspaces",              label: "Fleet Workspaces" },
  { file: "truck_request_screen",    label: "Truck Request" },
];





const challenges = [
  {
    title: "Real-Time Driver Matching at Scale",
    body: "Building a low-latency dispatch engine that matches ride and freight requests to the nearest verified driver, across tricycles, cars, and trucks in seconds, not minutes.",
  },
  {
    title: "Three Apps, One Backend",
    body: "Engineering Rider, Driver, and Transporter apps that share one backend, each with distinct permission models, vehicle types, pricing logic, and role-specific flows.",
  },
  {
    title: "Live GPS Tracking at Volume",
    body: "Integrating React Native Maps with continuous location streaming for loads of concurrent trips, without draining battery or overloading the map renderer.",
  },
  {
    title: "Freight & Fleet Operations",
    body: "Supporting heavy-duty truck haulage alongside everyday rides meant separate booking flows, load and tonnage capture, and multi-driver fleet management for logistics companies.",
  },
  {
    title: "Driver & Vehicle Trust Pipeline",
    body: "Designing a verification pipeline; KYC, vehicle documents, background checks, robust enough to earn rider and cargo-owner trust without slowing driver onboarding.",
  },
  {
    title: "Real-Time Wallet Reconciliation",
    body: "Building a wallet and earnings system that reconciles fares, driver payouts, and referral bonuses in real time across both ride and freight transactions.",
  },
];







const processSteps = [
  {
    num: "01",
    title: "Discovery & Market Research",
    body: "Mapped Nigeria's ride-hailing and freight logistics landscape, interviewing drivers, cargo owners, and fleet operators to define the three-app product architecture.",
  },
  {
    num: "02",
    title: "System & API Architecture",
    body: "Designed the NestJS backend, real-time dispatch engine, and shared API layer powering the Rider, Driver, and Transporter apps simultaneously.",
  },
  {
    num: "03",
    title: "UI/UX Design & Prototyping",
    body: "Designed distinct, role-specific flows for passengers, drivers, and fleet operators, every flow validated in a high-fidelity prototype before a line of code was written.",
  },
  {
    num: "04",
    title: "Mobile App Development",
    body: "Built all three React Native apps in parallel sprints, ride booking, freight requests, driver activity, and fleet dashboards, with native iOS and Android modules where needed.",
  },
  {
    num: "05",
    title: "Real-Time Systems Integration",
    body: "Integrated live GPS tracking, push notifications, WebSocket-based trip status updates, and the wallet and payments system across the platform.",
  },
  {
    num: "06",
    title: "QA, Testing & Launch",
    body: "End-to-end testing of booking flows, driver matching, fleet operations, and payment reconciliation — followed by a phased rollout and live monitoring.",
  },
];







const craftFeatures = [
  {
    icon: "feather-eye",
    title: "Clarity First Design",
    body: "Complex logistics workflows; freight booking, fleet management, multi-stop delivery, distilled into simple guided actions any driver or cargo owner can follow.",
  },
  {
    icon: "feather-shield",
    title: "Trust-Driven Visual Language",
    body: "Every screen was designed to reassure users handing over goods or hailing a ride from a stranger, clear driver info, live tracking, and transparent pricing throughout.",
  },
  {
    icon: "feather-smartphone",
    title: "Role-Specific Experiences",
    body: "Three apps, one design language. Riders, drivers, and fleet operators each get an experience built for their exact job, not a one-size-fits-all screen.",
  },
  {
    icon: "feather-zap",
    title: "Optimised for Speed & Flow",
    body: "From \"Where to?\" to driver match in seconds, every interaction engineered to reduce friction at the exact moment users need speed most.",
  },
];







const results = [
  {
    icon: "feather-globe",
    title: "Three Production Apps, One Platform",
    body: "Rider, Driver, and Transporter apps shipped from a single shared backend, each tuned for its specific user and job.",
  },
  {
    icon: "feather-truck",
    title: "Rides & Freight in One Marketplace",
    body: "A single platform connecting everyday ride-hailing with heavy-duty truck freight, tricycles, and delivery bikes.",
  },
  {
    icon: "feather-map-pin",
    title: "Real-Time GPS Tracking",
    body: "Live location tracking across every trip and delivery, powered by React Native Maps and WebSocket updates.",
  },
  {
    icon: "feather-users",
    title: "Fleet Operator Tools",
    body: "Dashboards for logistics companies to manage drivers, trucks, and active jobs across their entire fleet from one screen.",
  },
  {
    icon: "feather-shield",
    title: "Verified Driver Network",
    body: "A structured driver and vehicle verification pipeline built to earn rider and cargo-owner trust from the very first trip.",
  },
  {
    icon: "feather-credit-card",
    title: "Real-Time Wallet & Earnings",
    body: "A wallet system reconciling fares, driver payouts, and earnings in real time across the platform.",
  },
];






const galleryImages = [
  ...riderScreens.map((s) => ({ src: lodaImg(s.file), label: s.label })),
  ...opsScreens.map((s) => ({ src: lodaImg(s.file), label: s.label })),
];






























const LodapointProject = () => {




  useEffect(() => {
    sal({ threshold: 0.01, once: true });
  }, []);

  const [lbIndex, setLbIndex] = useState(0);
  const [lbOpen,  setLbOpen]  = useState(false);

  const openLightbox = (idx) => { setLbIndex(idx); setLbOpen(true); };
  const closeLightbox = () => setLbOpen(false);
  const prevImg = () => setLbIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const nextImg = () => setLbIndex((i) => (i + 1) % galleryImages.length);

  useEffect(() => {
    if (!lbOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lbOpen]);





  return (

    <div className="digi-case-page loda-theme">
      <main className="rbt-main-wrapper">




        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="digi-hero">

          {/* Animated aurora blobs */}
          <div className="digi-aurora" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="container">
            <div className="digi-hero-inner">
              <div className="digi-hero-cols">

                {/* ── Left: text content ── */}
                <div className="digi-hero-content">

                  {/* Category tags */}
                  <div className="digi-hero-tags" data-sal="fade" data-sal-duration="600" data-sal-delay="60">
                    <span className="digi-hero-tag tag-primary">Case Study</span>
                    <span className="digi-hero-tag tag-accent">Logistics · Ride-Hailing</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    Loda<span className="digi-gradient">point</span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    On-demand rides and heavy freight, connected through one platform.
                    Lodapoint links passengers and cargo owners to a network of verified
                    drivers, booking, tracking, and managing every journey in real time.
                  </p>

                  <div className="digi-hero-actions" data-sal="slide-up" data-sal-duration="700" data-sal-delay="200">
                    <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Start a Project</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </Link>
                    <Link className="rbt-btn btn-border hover-icon-reverse" href={ROUTE.service}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Our Service</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </Link>
                  </div>

                  {/* Glassmorphism stats */}
                  <div className="digi-hero-glass-stats" data-sal="slide-up" data-sal-duration="700" data-sal-delay="240">
                    {[
                      { val: "2",  suffix: "",  label: "Platforms (iOS & Android)" },
                      { val: "3",  suffix: "",  label: "Purpose-Built Apps"  },
                      { val: "5", suffix: "+", label: "Developers & Designers"  },
                      { val: "35", suffix: "+", label: "App Screens Designed" },
                    ].map(({ val, suffix, label }) => (
                      <div className="digi-glass-stat" key={label}>
                        <strong>{val}<em>{suffix}</em></strong>
                        <small>{label}</small>
                      </div>
                    ))}
                  </div>

                  {/* Scroll indicator */}
                  <div className="digi-scroll-cue" aria-hidden="true">
                    <div className="digi-scroll-mouse"></div>
                    <span>Scroll to explore</span>
                  </div>

                </div>

                {/* ── Right: cascading triple-phone mockup ── */}
                <div className="digi-hero-visual" aria-hidden="true">
                  <div className="digi-hv-glow"></div>
                  <div className="loda-hero-phones">

                    {/* Smallest — furthest back */}
                    <div className="loda-hero-phone loda-hero-phone--small">
                      <img src={lodaImg("pick_location")} alt="" loading="eager" />
                    </div>

                    {/* Medium — middle */}
                    <div className="loda-hero-phone loda-hero-phone--medium">
                      <img src={lodaImg("Ride Hailing")} alt="" loading="eager" />
                    </div>

                    {/* Largest — front */}
                    <div className="loda-hero-phone loda-hero-phone--large">
                      <img src={lodaImg("dashboard")} alt="" loading="eager" />
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>














        {/* ── METRICS STRIP ────────────────────────────────────────── */}
        <div className="digi-metrics-strip">
          <div className="container">
            <div className="digi-info-row">
              {[
                { icon: "feather-layout",   num: "3",    label: "Apps (Rider · Driver · Fleet)" },
                { icon: "feather-monitor",  num: "2",    label: "Platforms"        },
                { icon: "feather-truck",    num: "4+",   label: "Vehicle Types"    },
                { icon: "feather-users",    num: "10+",  label: "Engineers"        },
                { icon: "feather-map-pin",  num: "Live", label: "GPS Tracking"     },
              ].map(({ icon, num, label }) => (
                <div className="digi-info-item" key={label}>
                  <i className={`digi-info-icon ${icon}`}></i>
                  <span className="digi-info-num">{num}</span>
                  <span className="digi-info-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
















        {/* ── ABOUT THE CLIENT ─────────────────────────────────────── */}
        <section className="rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-start">

              <div className="col-lg-6" data-sal="slide-right" data-sal-duration="700">
                <span className="digi-kicker">About the Client</span>
                <h2 className="digi-client-heading">Amabills Technologies Limited</h2>
                <div className="digi-client-body">
                  <p>
                    Amabills Technologies Limited is a Nigerian software development company
                    headquartered in Kano, providing information communication technology
                    solutions across sectors including oil and gas, agriculture, financial
                    services, and transportation. 
                  </p>
                  <p>
                    With a mission to make moving people and goods across Nigeria simple,
                    transparent, and reliable, Amabills commissioned Lodapoint as its flagship
                    transportation product, a unified logistics and ride-hailing ecosystem
                    connecting passengers and cargo owners with a network of verified drivers
                    across tricycles, cars, trucks, and delivery bikes.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-briefcase"></i></div>
                  <div>
                    <strong>Amabills Technologies Limited</strong>
                    <small>Product Owner · Kano, Nigeria</small>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="digi-facts-list">

                  <div className="digi-facts-header">
                    <span className="digi-facts-dot"></span>
                    <span>Project Overview</span>
                  </div>

                  {[
                    { icon: "feather-briefcase",  label: "Industry",        value: "Transportation, Logistics & Mobility Technology" },
                    { icon: "feather-box",         label: "Product",         value: "Ride-Hailing & Freight Logistics Platform" },
                    { icon: "feather-monitor",     label: "Platforms",       value: "Rider, Driver & Transporter Apps (iOS & Android)" },
                    { icon: "feather-truck",       label: "Vehicle Network", value: "Tricycles, Cars, Trucks & Delivery Bikes" },
                    { icon: "feather-map-pin",     label: "Coverage",        value: "Kano & Expanding Across Nigeria" },
                    { icon: "feather-users",       label: "Team",            value: "5 Developers, 5 QA Engineers, 1 Product Designers" },
                    { icon: "feather-award",       label: "Delivered By",    value: "SmartTech Solutions", highlight: true },
                  ].map(({ icon, label, value, highlight }, i) => (
                    <div
                      className={`digi-fact-row${highlight ? " digi-fact-row--highlight" : ""}`}
                      key={label}
                      data-sal="slide-left"
                      data-sal-duration="600"
                      data-sal-delay={i * 75}
                    >
                      <div className="digi-fact-icon"><i className={icon}></i></div>
                      <div className="digi-fact-content">
                        <label>{label}</label>
                        <span>{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>



















        {/* ── ABOUT THE APP ────────────────────────────────────────── */}
        <section className="rbt-section-gap digi-app-section">
          <div className="container">
            <div className="row g-5 align-items-center">

              <div className="col-lg-6" data-sal="slide-right" data-sal-duration="700">
                <span className="digi-kicker">About the App</span>
                <h2 className="digi-app-heading">
                  One platform, three apps, every journey covered.
                </h2>
                <div className="digi-app-body">
                  <p>
                    Lodapoint is a digital logistics and ride-hailing platform that connects
                    cargo owners and passengers with a network of verified drivers, giving
                    Nigeria&apos;s transport and freight market a single, trustworthy way to
                    book, track, and manage every trip and shipment in real time.
                  </p>
                  <p>
                    The platform ships as three purpose-built apps sharing one backend: a
                    Rider app for everyday trips across tricycles, cars, and delivery bikes;
                    a Driver app for accepting jobs, running trips, and tracking earnings; and
                    a Transporter app for logistics companies managing trucks, drivers, and
                    freight jobs across their fleet.
                  </p>
                  <p>
                    Live GPS tracking, real-time trip status over WebSocket, and a
                    NestJS-powered wallet system tie the whole experience together, so a
                    solo rider and a haulage company both get full visibility and control
                    over every journey.
                  </p>
                </div>
                <div className="digi-stack">
                  {["React Native", "React", "NestJS", "React Native Maps", "React Navigation",
                    "Styled Components", "WebSocket", "Android Native", "iOS Native", "Push Notifications"].map((t, i) => (
                    <span
                      key={t}
                      className="digi-stack-tag"
                      data-sal="zoom-in"
                      data-sal-duration="400"
                      data-sal-delay={i * 55}
                    >{t}</span>
                  ))}
                </div>
              </div>

              <div className="col-lg-6" data-sal="zoom-in" data-sal-duration="800">
                <div className="loda-app-phones-wrap">
                  <div className="digi-app-visual-glow loda-app-glow" aria-hidden="true"></div>

                  {/* Tilted brand card peeking out behind the phone */}
                  <div className="loda-app-card">
                    <span className="loda-app-card-brand">LODAPOINT</span>
                    <span className="loda-app-card-name">Verified Driver</span>
                  </div>

                  {/* Single realistic phone, front and center */}
                  <div className="loda-app-phone loda-app-phone--single">
                    <div className="loda-app-phone-island"></div>
                    <img src={lodaImg("Ride Hailing")} alt="Lodapoint ride hailing screen" loading="lazy" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>





















        {/* ── THE CHALLENGE ────────────────────────────────────────── */}
        <section className="rbt-section-gap digi-challenge-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-sal="slide-up" data-sal-duration="700">
                <span className="digi-kicker">The Challenge</span>
                <h2 className="digi-challenge-heading">
                  Building one platform for rides, freight, and fleets, without compromise.
                </h2>
                <p className="digi-challenge-lead">
                  Lodapoint combined real-time dispatch, multi-vehicle logistics, live GPS
                  tracking, and three distinct user roles into one coherent ecosystem. These
                  were the six hardest problems we solved.
                </p>
              </div>
            </div>
            <div className="digi-challenge-grid">
              {challenges.map((c, i) => (
                <div
                  className="digi-challenge-card"
                  key={c.title}
                  data-sal={i % 3 === 0 ? "slide-up" : i % 3 === 1 ? "zoom-in" : "slide-right"}
                  data-sal-delay={i * 70}
                  data-sal-duration="650"
                >
                  <div className="digi-challenge-num">{String(i + 1).padStart(2, "0")}</div>
                  <h4>{c.title}</h4>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

















        {/* ── USER ENGAGEMENT — Marquee ─────────────────────────────── */}
        <section className="rbt-section-gap digi-engage-section">
          <div className="container">
            <div className="text-center mb--56" data-sal="slide-up" data-sal-duration="700">
              <span className="digi-kicker" style={{ justifyContent: "center" }}>
                User Engagement
              </span>
              <h2 className="digi-engage-heading">
                Designed for the road. Built for every screen.
              </h2>
              <p className="digi-engage-desc">
                From live map pickups to freight declarations and driver dashboards, every
                Lodapoint screen was designed to make mobility and logistics feel intuitive,
                trustworthy, and fast for every participant in the ecosystem.
              </p>
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track">
              {[...riderScreens, ...riderScreens].map((s, i) => (
                <div
                  className="digi-mob-card"
                  key={`r-${i}`}
                  onClick={() => openLightbox(i % riderScreens.length)}
                >
                  <img src={lodaImg(s.file)} alt={s.label} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track digi-marquee-track-rev">
              {[...opsScreens, ...opsScreens].map((s, i) => (
                <div
                  className="digi-mob-card"
                  key={`o-${i}`}
                  onClick={() => openLightbox(riderScreens.length + (i % opsScreens.length))}
                >
                  <img src={lodaImg(s.file)} alt={s.label} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>


















        {/* ── THE PROCESS ──────────────────────────────────────────── */}
        <section className="rbt-section-gap digi-process-section">
          <div className="container">
            <div className="row align-items-end mb--60">
              <div className="col-lg-7" data-sal="slide-right" data-sal-duration="700">
                <span className="digi-kicker">The Process</span>
                <h2 className="digi-process-heading">
                  How we shipped three apps on one backend.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took Lodapoint from concept to a live,
                  production-grade logistics platform. Each stage building on the last
                  with zero shortcuts in reliability or design.
                </p>
              </div>
            </div>
            <div className="digi-process-grid">
              {processSteps.map((step, i) => (
                <div
                  className="digi-process-card"
                  key={step.num}
                  data-sal={i % 2 === 0 ? "slide-up" : "zoom-in"}
                  data-sal-delay={i * 80}
                  data-sal-duration="650"
                >
                  <div className="digi-process-num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



















        {/* ── ENHANCING EXPERIENCE ─────────────────────────────────── */}
        <section className="rbt-section-gap digi-craft-section">
          <div className="container">
            <div className="row g-5 align-items-center">

              <div className="col-lg-6" data-sal="slide-right" data-sal-duration="700">
                <span className="digi-kicker">Enhancing Experience</span>
                <h2 className="digi-craft-heading">
                  World-class UI craft for a three-sided marketplace.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    Lodapoint operates in a domain where trust is everything. A stranger
                    picking up your goods, or driving you across town. Every pixel,
                    interaction, and information flow was designed to make that trust feel
                    earned, not assumed.
                  </p>
                  <p>
                    SmartTech Solutions applied the same level of UI precision to Lodapoint
                    that you&apos;d expect from the world&apos;s leading mobility platforms, 
                    calibrated for Nigerian drivers, riders, and fleet operators, and their
                    real day-to-day behaviour.
                  </p>
                </div>
                <ul className="digi-craft-list">
                  {craftFeatures.map((f, i) => (
                    <li
                      key={f.title}
                      data-sal="slide-right"
                      data-sal-duration="600"
                      data-sal-delay={i * 90}
                    >
                      <div className="digi-li-icon"><i className={f.icon}></i></div>
                      <div>
                        <strong>{f.title}</strong>
                        <p>{f.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-6" data-sal="zoom-in" data-sal-duration="800">
                <div className="digi-craft-visual">
                  <div className="digi-float-card fc-tl">
                    <strong>3 Apps</strong>
                    <span>Role-Specific UX</span>
                    <small>Rider · Driver · Fleet</small>
                  </div>
                  <div className="digi-craft-mockup loda-craft-phone">
                    <Image
                      src={lodaImg("ride_requests")}
                      width={752}
                      height={1624}
                      alt="Lodapoint ride requests UI"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Real-Time</strong>
                    <span>Live GPS + WebSocket</span>
                    <small>Every Trip Tracked</small>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
















        




        {/* ── SOLUTION & RESULTS ───────────────────────────────────── */}
        <section className="rbt-section-gap digi-solution-section">
          <div className="container">
            <div className="row g-5 align-items-start">

              <div className="col-lg-5" data-sal="slide-right" data-sal-duration="700">
                <span className="digi-kicker">Solution &amp; Results</span>
                <h2 className="digi-solution-heading">
                  A launch-ready platform for Nigeria&apos;s mobility and freight market.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions in collaboration with Amabills Technologies, 
                    architected, designed, and shipped the complete
                    Lodapoint platform, from the real-time dispatch engine and NestJS
                    backend to three cross-platform mobile apps serving riders, drivers,
                    and fleet operators.
                  </p>
                  <p>
                    The result is a serious, production-grade product that makes
                    ride-hailing, freight booking, and fleet management feel like a native,
                    trustworthy experience for every stakeholder, from a solo passenger to
                    a haulage company managing dozens of trucks.
                  </p>
                </div>
                <div className="mt--36">
                  <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Build With Us</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="digi-results-grid">
                  {results.map((r, i) => (
                    <div
                      className="digi-result-card"
                      key={r.title}
                      data-sal={i % 2 === 0 ? "zoom-in" : "slide-up"}
                      data-sal-duration="600"
                      data-sal-delay={i * 80}
                    >
                      <div className="digi-result-icon"><i className={r.icon}></i></div>
                      <div>
                        <h4>{r.title}</h4>
                        <p>{r.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>




















        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-cta-6 text-center">
                  <div className="content">
                    <span className="subtitle bg-primary-opacity mb--20">BUILD WITH SMARTTECH</span>
                    <h2 className="title">Let&apos;s bring your<br /> vision to life.</h2>
                    <div className="rbt-button-group justify-content-center">
                      <Link className="rbt-btn btn-gradient" href={ROUTE.appointment}>Hire Us</Link>
                      <Link className="rbt-btn btn-border" href={ROUTE.project}>Explore our Projects</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>















        {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
        <section className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle bg-primary-opacity">TESTIMONIALS</span>
                    <h2 className="title">What People Are Saying About Us!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Testimonial_2 />
        </section>













        {/* ── BLOG ─────────────────────────────────────────────────── */}
        <section className="rbt-rbt-blog-area rbt-section-gapBottom">
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
            <BlogWidget />
          </div>
        </section>

















        {/* ── BLOG GRID ────────────────────────────────────────────── */}
        <section className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape">
          <div className="wrapper pb--50 rbt-index-upper">
            <div className="container">
              <div className="row g-5 align-items-end mb--60">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="section-title text-start">
                    <h2 className="title color-white">Latest News</h2>
                    <p className="description color-white-off mt--20">
                      Notes from our team on product design, mobile engineering, logistics tech, and launch strategy.
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













        {/* ── NEWSLETTER ───────────────────────────────────────────── */}
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

























      {/* ── LIGHTBOX ─────────────────────────────────────────────── */}
      {lbOpen && (
        <div className="digi-lightbox" onClick={closeLightbox}>

          <button className="digi-lb-close" onClick={closeLightbox} aria-label="Close">
            <i className="feather-x"></i>
          </button>

          <button
            className="digi-lb-arrow digi-lb-arrow--prev"
            onClick={(e) => { e.stopPropagation(); prevImg(); }}
            aria-label="Previous image"
          >
            <i className="feather-chevron-left"></i>
          </button>

          <div className="digi-lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img
              key={lbIndex}
              src={galleryImages[lbIndex].src}
              alt={galleryImages[lbIndex].label}
            />
          </div>

          <button
            className="digi-lb-arrow digi-lb-arrow--next"
            onClick={(e) => { e.stopPropagation(); nextImg(); }}
            aria-label="Next image"
          >
            <i className="feather-chevron-right"></i>
          </button>

          <div className="digi-lb-footer">
            <span className="digi-lb-label">{galleryImages[lbIndex].label}</span>
            <span className="digi-lb-counter">{lbIndex + 1} / {galleryImages.length}</span>
          </div>

        </div>
      )}


    </div>

  );

};

export default LodapointProject;
