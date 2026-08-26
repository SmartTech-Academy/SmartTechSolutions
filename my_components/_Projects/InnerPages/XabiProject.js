import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const xabiImg = (name) => `/app_images/projects/xabi/${name}.png`;



const screens = [
  { file: "homepage",         label: "Marketing Homepage"   },
  { file: "dashboard",        label: "User Dashboard"       },
  { file: "property_search",  label: "Property Search"      },
  { file: "property_details", label: "Property Details"     },
  { file: "rental_savings",   label: "Rental Savings"       },
  { file: "rental_loan",      label: "Rental Loan"          },
  { file: "wallet",           label: "Wallet & Transactions"},
  { file: "refer_and_earn",   label: "Refer & Earn"         },
  { file: "auth",             label: "Authentication"       },
  { file: "settings",         label: "Settings"             },
  { file: "xabi_tokens",      label: "Xabi Tokens"          },
];

const galleryImages = screens.map((s) => ({ src: xabiImg(s.file), label: s.label }));



const challenges = [
  {
    title: "Multi-Feature Financial Architecture",
    body: "Designing a single, coherent system that simultaneously handles rental savings, loan origination, wallet management, peer transfers, and a property marketplace, each with its own data model, business logic, and compliance requirements, without performance or reliability trade-offs.",
  },
  {
    title: "Rental Savings Engine & Affordability Logic",
    body: "Building a savings engine that deducts a configured portion of a user's monthly salary for rent accumulation, with flexible contribution schedules, grace periods, interest calculations, and goal-tracking, while keeping the remaining salary accessible and visible in real time.",
  },
  {
    title: "Rental Loan Origination & Credit Assessment",
    body: "Engineering a short-cycle rental loan system with automated eligibility checks, repayment scheduling, and interest computation, designed for users with no formal credit history, requiring alternative data signals and a robust risk-scoring model built from the ground up.",
  },
  {
    title: "Property Marketplace & Smart Search",
    body: "Building a full-featured property discovery platform with location-based smart search, filter-and-sort logic, listing management for agents, and a seamless inquiry-to-transaction flow, all optimised for the bandwidth and device constraints of Nigerian users.",
  },
  {
    title: "Mobile-First Cross-Platform Delivery",
    body: "Delivering a consistent, high-performance product across web (NextJS), iOS (React Native), and Android (React Native) from a single codebase, while optimising layouts, touch interactions, and performance specifically for mobile-primary users across varying network conditions.",
  },
  {
    title: "Financial Trust & Security in a Sensitive Market",
    body: "Building the security layer that earns user trust in a market with high fintech scepticism, end-to-end encrypted transactions, multi-factor authentication, real-time fraud signals, and transparent audit trails on every financial action across wallets, loans, and savings.",
  },
];



const processSteps = [
  {
    num: "01",
    title: "Discovery & Financial Product Design",
    body: "In-depth sessions with Ribiax stakeholders mapped every user financial journey, saving targets, loan needs, property discovery, and wallet behaviour. Output: full PRD, user personas, and a validated product architecture.",
  },
  {
    num: "02",
    title: "Platform Architecture & Systems Design",
    body: "Architects designed the Laravel API, MySQL schema, savings engine, loan origination system, wallet transaction ledger, property data model, and the proxy pattern that connects all surfaces, web, iOS, and Android.",
  },
  {
    num: "03",
    title: "Mobile-First UI/UX Design",
    body: "All screens designed mobile-first with Tailwind-aligned spacing and a visual language calibrated for financial trust and approachability. Property search, loan flows, savings dashboards, and wallet actions all prototyped and validated before code.",
  },
  {
    num: "04",
    title: "Backend API & Financial Engine Development",
    body: "Laravel API built with the rental savings engine, loan origination logic, wallet ledger, Xabi Tokens system, and property listing management, running on a MySQL data layer with Redis session caching and real-time transaction processing.",
  },
  {
    num: "05",
    title: "Web & Mobile Application Development",
    body: "NextJS web app and React Native mobile apps built in parallel sprints, sharing a single API contract. Vite-powered build pipeline, Tailwind CSS design system, and continuous cross-platform testing at every milestone.",
  },
  {
    num: "06",
    title: "Security Audit, QA & Phased Launch",
    body: "Full security audit across all financial flows, end-to-end QA of savings, loans, wallet, and marketplace journeys, cross-platform sync validation, and a staged rollout to the first cohort of Xabi users with live monitoring.",
  },
];



const craftFeatures = [
  {
    icon: "feather-smartphone",
    title: "Mobile-First Design Precision",
    body: "Every screen was designed for thumbs first, touch targets, gesture flows, and information density all calibrated for users who live on their phones and need instant access to their rent savings and wallet.",
  },
  {
    icon: "feather-shield",
    title: "Financial Trust Interface Design",
    body: "In a market where fintech scepticism is high, every UI decision, colour, microcopy, feedback state, was made to communicate security, reliability, and transparency at every financial interaction.",
  },
  {
    icon: "feather-map-pin",
    title: "Property Discovery Experience",
    body: "The property marketplace was designed to make finding a home feel fast and effortless, smart search filters, rich listing cards, and a seamless transition from discovery to enquiry to transaction.",
  },
  {
    icon: "feather-monitor",
    title: "Cross-Platform Visual Consistency",
    body: "Web and mobile share a single design language. Users switch between browser and phone with zero friction, the Xabi experience is identical across every surface, every time.",
  },
];



const results = [
  {
    icon: "feather-home",
    title: "Property Marketplace with Smart Search",
    body: "A full-featured property discovery platform with location-based search, advanced filters, listing management for agents, and a seamless enquiry-to-transaction flow for buyers and renters.",
  },
  {
    icon: "feather-trending-up",
    title: "Rental Savings System",
    body: "A goal-based savings engine that helps users set rent targets, configure automated monthly contributions, track progress in real time, and achieve financial security before their rent is even due.",
  },
  {
    icon: "feather-credit-card",
    title: "Rental Loan Management",
    body: "A short-cycle rental loan system with in-app origination, automated eligibility assessment, flexible repayment scheduling, and full loan history, giving users a financial bridge when savings fall short.",
  },
  {
    icon: "feather-dollar-sign",
    title: "Wallet & Transaction Infrastructure",
    body: "A full-featured in-app wallet supporting deposits, withdrawals, peer-to-peer transfers, and a complete transaction ledger, giving users a single financial hub for every Xabi activity.",
  },
  {
    icon: "feather-gift",
    title: "Refer & Earn Programme",
    body: "A built-in referral system that rewards users with Xabi Tokens for every successful invite, driving organic growth, deepening engagement, and creating a loyalty layer within the financial product.",
  },
  {
    icon: "feather-layers",
    title: "Web + Mobile Dual-Platform Delivery",
    body: "A complete NextJS web application and React Native mobile apps (iOS & Android), sharing one API, one design system, and one brand identity, giving every Nigerian user access to Xabi on any device.",
  },
];
















const XabiProject = () => {


  useEffect(() => {
    sal({ threshold: 0.01, once: true });
  }, []);


  const [lbIndex, setLbIndex] = useState(0);
  const [lbOpen,  setLbOpen]  = useState(false);

  const openLightbox  = (idx) => { setLbIndex(idx); setLbOpen(true); };
  const closeLightbox = ()    => setLbOpen(false);
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

    <div className="digi-case-page xabi-theme">
      <main className="rbt-main-wrapper">


        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="digi-hero">

          <div className="digi-aurora" aria-hidden="true">
            <span></span><span></span><span></span>
          </div>

          <div className="container">
            <div className="digi-hero-inner">
              <div className="digi-hero-cols">

                {/* ── Left: text ── */}
                <div className="digi-hero-content">

                  <div className="digi-hero-tags" data-sal="fade" data-sal-duration="600" data-sal-delay="60">
                    <span className="digi-hero-tag tag-primary">Case Study</span>
                    <span className="digi-hero-tag tag-accent">FinTech · Real Estate</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    X<span className="digi-gradient">abi</span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    An all-in-one real estate solution built to relieve the mental stress of
                    rent for every Nigerian. Rental savings, rental loans, a property marketplace,
                    wallets, and Xabi Tokens, everything a renter needs in a single mobile-first
                    product designed for speed, trust and financial dignity.
                  </p>

                  <div className="digi-hero-actions" data-sal="slide-up" data-sal-duration="700" data-sal-delay="200">
                    <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Start a Project</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </Link>
                    <Link className="rbt-btn btn-border hover-icon-reverse" href={ROUTE.project}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">View More Work</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </Link>
                  </div>

                  <div className="digi-hero-glass-stats" data-sal="slide-up" data-sal-duration="700" data-sal-delay="240">
                    {[
                      { val: "5",  suffix: "",  label: "Core Features"     },
                      { val: "2",   suffix: "",  label: "Platforms"         },
                      { val: "40",  suffix: "+",  label: "App Screens"       },
                      { val: "1",   suffix: "",  label: "App for All Renters"},
                    ].map(({ val, suffix, label }) => (
                      <div className="digi-glass-stat" key={label}>
                        <strong>{val}<em>{suffix}</em></strong>
                        <small>{label}</small>
                      </div>
                    ))}
                  </div>

                  <div className="digi-scroll-cue" aria-hidden="true">
                    <div className="digi-scroll-mouse"></div>
                    <span>Scroll to explore</span>
                  </div>

                </div>

                {/* ── Right: browser mockup ── */}
                <div className="digi-hero-visual" aria-hidden="true">
                  <div className="digi-hv-glow"></div>
                  <div className="digi-hv-dashboard-wrap">
                    <div className="digi-hv-dashboard-tilt">
                      <div className="digi-hv-db-chrome">
                        <span></span><span></span><span></span>
                        <div className="digi-hv-db-url">xabi.ng/dashboard</div>
                      </div>
                      <img src={xabiImg("dashboard")} alt="" loading="eager" />
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
                { icon: "feather-home",        num: "Property",  label: "Marketplace"      },
                { icon: "feather-trending-up",  num: "Rental",    label: "Savings Built-In" },
                { icon: "feather-credit-card",  num: "Rental",    label: "Loans Available"  },
                { icon: "feather-dollar-sign",  num: "Wallet",    label: "& Transactions"   },
                { icon: "feather-smartphone",   num: "Mobile",    label: "First Design"     },
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
                <h2 className="digi-client-heading">Ribiax Estate Limited</h2>
                <div className="digi-client-body">
                  <p>
                    Ribiax Estate Limited is a technology-driven real estate and innovation
                    company headquartered in Nigeria. The firm specialises in building transformative
                    digital platforms that address deep inefficiencies in high-value sectors,
                    with a particular focus on real estate, financial technology, and digital
                    product innovation for the Nigerian market.
                  </p>
                  <p>
                    Having identified rent as one of Nigeria&apos;s most persistent sources of financial
                    stress, where millions face landlord pressure, lump-sum demands, and no
                    structured way to save or borrow for shelter, Ribiax commissioned Xabi as
                    its response: a mobile-first, all-in-one platform that gives every Nigerian
                    renter the financial tools they need to take control of their housing situation.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-briefcase"></i></div>
                  <div>
                    <strong>Ribiax Estate Limited</strong>
                    <small>Product Owner · Nigeria</small>
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
                    { icon: "feather-briefcase",  label: "Industry",     value: "Real Estate, FinTech & Consumer Financial Technology" },
                    { icon: "feather-home",        label: "Product",      value: "All-in-One Real Estate & Rental Finance Platform"     },
                    { icon: "feather-monitor",     label: "Platforms",    value: "Web Application, Mobile App (iOS & Android)"          },
                    { icon: "feather-code",        label: "Tech Stack",   value: "NextJS · Laravel · Java · ReactJS · React Native · Tailwind CSS · Vite · MySQL · REST API · Redis" },
                    { icon: "feather-layers",      label: "Core Features",value: "Savings · Loans · Wallet · Marketplace · Refer & Earn" },
                    { icon: "feather-users",       label: "Team",         value: "6 Engineers, 1 UI/UX Designers, 3 QA Specialists"     },
                    { icon: "feather-award",       label: "Delivered By", value: "SmartTech Solutions", highlight: true                 },
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
                  The app that takes the stress out of rent in Nigeria.
                </h2>
                <div className="digi-app-body">
                  <p>
                    Xabi is built on a simple, powerful truth: shelter is a right, not a
                    privilege, and no Nigerian should face landlord embarrassment, lump-sum
                    rent panic, or financial paralysis because they lack the right tools.
                    Xabi puts those tools in every renter&apos;s pocket.
                  </p>
                  <p>
                    Users can set up a rental savings plan that automatically sets aside a
                    configured portion of their monthly salary toward rent, leaving the rest
                    of their income intact. When savings fall short, Xabi&apos;s rental loan
                    system provides fast, in-app financing with clear repayment terms.
                  </p>
                  <p>
                    Beyond finance, Xabi&apos;s property marketplace makes finding a rental or
                    purchase property fast and seamless, smart search, rich listings, and
                    a direct path from discovery to enquiry. A Refer &amp; Earn programme
                    and Xabi Tokens layer rewards on top of every action, making the platform
                    as engaging as it is useful.
                  </p>
                </div>
                <div className="digi-stack">
                  {["NextJS", "Laravel", "Java", "ReactJS", "React Native", "Tailwind CSS", "Vite", "MySQL", "REST API", "Redis"].map((t, i) => (
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
                <div className="digi-app-visual xabi-app-visual">
                  <div className="digi-app-visual-glow" aria-hidden="true"></div>
                  <div className="digi-app-browser">
                    <div className="digi-app-browser-chrome">
                      <span></span><span></span><span></span>
                      <div className="digi-app-browser-url">xabi.ng/rental-savings</div>
                    </div>
                    <img src={xabiImg("rental_savings")} alt="Xabi rental savings" loading="lazy" />
                  </div>
                  <div className="xabi-data-card">
                    <div className="xabi-data-card-icon"><i className="feather-credit-card"></i></div>
                    <div>
                      <strong>Zero-Stress Rent</strong>
                      <span>Pay · Save · Borrow</span>
                    </div>
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
                  Building a multi-feature fintech platform for a market that demands trust.
                </h2>
                <p className="digi-challenge-lead">
                  Xabi had to simultaneously solve savings, lending, payments, property
                  discovery, and cross-platform delivery, in a market where fintech
                  trust is hard-won, data infrastructure is uneven, and users live on
                  mobile. These were the six hardest problems we solved.
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
                Every screen designed to reduce rent anxiety.
              </h2>
              <p className="digi-engage-desc">
                From property discovery and rental savings to in-app loans, wallet
                transactions, and referral rewards, every Xabi screen was designed
                to make financial empowerment feel intuitive, fast, and within reach
                for every Nigerian renter.
              </p>
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track">
              {[...screens, ...screens].map((s, i) => (
                <div
                  className="digi-web-card"
                  key={`f-${i}`}
                  onClick={() => openLightbox(i % screens.length)}
                >
                  <div className="digi-browser-chrome">
                    <span></span><span></span><span></span>
                  </div>
                  <img src={xabiImg(s.file)} alt={s.label} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track digi-marquee-track-rev">
              {[...screens.slice(5), ...screens.slice(0, 5), ...screens.slice(5), ...screens.slice(0, 5)].map((s, i) => (
                <div
                  className="digi-web-card"
                  key={`r-${i}`}
                  onClick={() => openLightbox(screens.findIndex((x) => x.file === s.file))}
                >
                  <div className="digi-browser-chrome">
                    <span></span><span></span><span></span>
                  </div>
                  <img src={xabiImg(s.file)} alt={s.label} loading="lazy" />
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
                  How we built a financial platform that Nigerians trust.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took Xabi from a market insight about rent stress to
                  a production-ready, multi-feature fintech and property platform, designed
                  mobile-first and built with no shortcuts in financial engineering or user trust.
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
                  World-class UI for a product that carries real weight.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    Xabi deals with money, shelter, and financial anxiety, three of the
                    most emotionally charged areas in any user&apos;s life. When a platform
                    handles rent savings, short-term loans, and wallet transactions, the
                    UI has to do more than look good. It has to communicate safety,
                    clarity, and control at every single interaction.
                  </p>
                  <p>
                    SmartTech Solutions applied world-class UI craft to Xabi, the same
                    level of precision you expect from the best global fintech products,
                    calibrated for Nigerian users, Nigerian behaviour patterns, and the
                    mobile-first reality of how people engage with financial tools in
                    Nigeria today. Every screen earns the user&apos;s trust before asking for it.
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
                    <strong>6+ Core Features</strong>
                    <span>One Seamless App</span>
                    <small>+ Xabi Token Rewards</small>
                  </div>
                  <div className="digi-craft-mockup">
                    <div className="digi-browser-chrome">
                      <span></span><span></span><span></span>
                    </div>
                    <Image
                      src={xabiImg("property_search")}
                      width={1782}
                      height={1242}
                      alt="Xabi property search UI"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Web + iOS + Android</strong>
                    <span>3 Platforms</span>
                    <small>One design system</small>
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
                  A complete platform that puts rent in Nigerian hands.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions designed, architected, and delivered the complete Xabi
                    platform, from the Laravel financial API and MySQL data layer to the NextJS
                    web app, React Native mobile apps, savings engine, loan system, wallet
                    infrastructure, and property marketplace.
                  </p>
                  <p>
                    The result is a production-ready, multi-feature fintech and real estate
                    platform that gives Nigerian renters the savings discipline, credit access,
                    and property discovery tools they need to live without rent stress.
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




        {/* ── BLOG ────────────────────────────────────────────────────── */}
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




        {/* ── BLOG (gradient) ──────────────────────────────────────── */}
        <section className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape">
          <div className="wrapper pb--50 rbt-index-upper">
            <div className="container">
              <div className="row g-5 align-items-end mb--60">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="section-title text-start">
                    <h2 className="title color-white">Latest News</h2>
                    <p className="description color-white-off mt--20">
                      Notes from our team on product design, software development, AI, and real estate technology.
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

export default XabiProject;
