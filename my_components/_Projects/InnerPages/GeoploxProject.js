import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const geoImg = (name) => `/app_images/projects/geoplox/${name}.png`;



const screens = [
  { file: "homepage",                     label: "Marketing Homepage"          },
  { file: "dashboard",                    label: "Intelligence Dashboard"      },
  { file: "property_search",             label: "Property Search & Discovery" },
  { file: "property_detail",             label: "Property Detail View"        },
  { file: "property_upload",             label: "Property Data Upload"        },
  { file: "agent_properties_management", label: "Agent Property Management"   },
  { file: "chat",                        label: "Stakeholder Chat"            },
  { file: "user_onboarding",             label: "User Onboarding"             },
  { file: "admin_approvals",             label: "Admin Approvals"             },
  { file: "admin_managers_screen",       label: "Admin Manager Console"       },
  { file: "auth",                        label: "Authentication"              },
  { file: "settings",                    label: "Settings"                    },
];

const galleryImages = screens.map((s) => ({ src: geoImg(s.file), label: s.label }));



const challenges = [
  {
    title: "Structuring Fragmented Property Data",
    body: "Aggregating and standardising real estate data from disparate sources, ownership records, valuation histories, development timelines, and market activity, into a single trusted intelligence layer that every stakeholder can rely on to make high-stakes decisions.",
  },
  {
    title: "Multi-Stakeholder Role Architecture",
    body: "Engineering contextually appropriate experiences for five distinct participant types, developers, property owners, investors, professionals, and capital providers; each with different data needs, workflows, and access permissions, within one neutral and coherent platform.",
  },
  {
    title: "Building Trust Without Intermediation",
    body: "Creating a data validation and credibility layer that strengthens trust between parties without making advisory opinions, participating in transactions, or influencing outcomes; a philosophically and technically demanding design constraint that shaped every product decision.",
  },
  {
    title: "Real-Time Property Intelligence Delivery",
    body: "Delivering live market activity, development status, ecosystem participation, and property-level intelligence in real time with the accuracy, consistency, and reliability that stakeholders need when evaluating and coordinating around significant property opportunities.",
  },
  {
    title: "Neutral Ecosystem Connectivity at Scale",
    body: "Engineering a platform that connects developers, owners, investors, and service providers without acting as an intermediary, enabling visibility, coordination, and collaboration across fully independent actors without creating dependency or conflict of interest.",
  },
  {
    title: "Infrastructure for Emerging Market Conditions",
    body: "Designing platform architecture that performs reliably where data quality, network conditions, and digital literacy vary significantly ensuring Geoplox delivers consistent intelligence value whether deployed in mature markets or fragmented emerging property ecosystems.",
  },
];



const processSteps = [
  {
    num: "01",
    title: "Discovery & Ecosystem Mapping",
    body: "Deep stakeholder sessions mapped every participant role, data flow, pain point, and coordination gap in the real estate ecosystem. Output: complete product specification, role permission model, and intelligence layer strategy.",
  },
  {
    num: "02",
    title: "Data Architecture & Intelligence Layer",
    body: "Architects designed the MySQL schema, Redis caching strategy, Laravel API layer, data validation pipeline, proxy pattern, and the property intelligence structuring model that forms the platform's core value proposition.",
  },
  {
    num: "03",
    title: "Multi-Role UI/UX Design & Prototyping",
    body: "Every stakeholder dashboard was designed for clarity and purpose, from investor discovery flows to admin approval workflows. All interfaces validated in high-fidelity Figma prototypes with real users before a single line of code was written.",
  },
  {
    num: "04",
    title: "Backend API & Data Pipeline Development",
    body: "Laravel API, MySQL database, and Redis caching layer built to power real-time property intelligence, with the Vite-powered NextJS frontend consuming structured data endpoints designed for performance and reliability.",
  },
  {
    num: "05",
    title: "Platform Workflow & Coordination Systems",
    body: "Stakeholder coordination tools, property approval workflows, ecosystem connectivity features, agent management systems, and the admin operations suite; all integrated and tested against live data scenarios.",
  },
  {
    num: "06",
    title: "QA, Data Validation & Phased Launch",
    body: "End-to-end testing across all stakeholder journeys, data accuracy validation, role permission verification, admin workflow testing, and a carefully staged rollout to the first cohort of Geoplox ecosystem participants.",
  },
];



const craftFeatures = [
  {
    icon: "feather-bar-chart-2",
    title: "Intelligence-First Interface Design",
    body: "Every layout decision prioritises surfacing the right property intelligence at the right moment, turning complex, multi-source data into a clear visual narrative that any stakeholder can act on with confidence.",
  },
  {
    icon: "feather-eye",
    title: "Transparent Data Visualisation",
    body: "Property status, market activity, development timelines, and ecosystem participation are presented with visual clarity that communicates truthfulness, building the credibility the platform is built on.",
  },
  {
    icon: "feather-users",
    title: "Stakeholder-Specific Information Architecture",
    body: "Each participant type sees exactly what they need, not a generic dashboard. Developer views, investor discovery, agent management, and admin oversight are each architected for the specific job they perform.",
  },
  {
    icon: "feather-shield",
    title: "Infrastructure-Grade UX Reliability",
    body: "For a platform positioned as foundational infrastructure, UI performance is not a feature, it is the standard. Every interaction was optimised for speed, predictability, and error-free execution under real-world conditions.",
  },
];



const results = [
  {
    icon: "feather-globe",
    title: "Unified Real Estate Intelligence Platform",
    body: "A single trusted source of property data, structured, validated, and consistently available, giving every ecosystem participant a shared factual baseline for confident decision-making.",
  },
  {
    icon: "feather-grid",
    title: "Multi-Stakeholder Ecosystem Hub",
    body: "A neutral platform where developers, property owners, investors, professionals, and capital providers connect, discover opportunities, and coordinate, without friction, duplication, or dependency on a central intermediary.",
  },
  {
    icon: "feather-database",
    title: "Structured Property Data Layer",
    body: "A production-ready property intelligence infrastructure, organising real estate information into usable, queryable, and verifiable data that supports every decision made on the platform.",
  },
  {
    icon: "feather-check-circle",
    title: "Credibility & Transparency Infrastructure",
    body: "A data validation and documentation layer that improves trust between parties, allowing stakeholders to engage with greater confidence while retaining full autonomy over negotiations and outcomes.",
  },
  {
    icon: "feather-repeat",
    title: "Process & Workflow Coordination System",
    body: "Milestone tracking, information exchange workflows, property approval pipelines, and stakeholder coordination tools that create continuity across projects even when multiple independent parties are involved.",
  },
  {
    icon: "feather-shield",
    title: "Admin & Operations Management Suite",
    body: "A comprehensive admin console giving platform operators full visibility over approvals, user management, property listings, ecosystem activity, and platform health, all from a single organised interface.",
  },
];









const GeoploxProject = () => {



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

    <div className="digi-case-page geoplox-theme">
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
                    <span className="digi-hero-tag tag-accent">PropTech · Data Intelligence</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    Geo<span className="digi-gradient">plox</span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    A real estate intelligence and ecosystem infrastructure platform that transforms
                    fragmented property data into clear, actionable intelligence creating a single
                    trusted source of truth that helps developers, investors, and property owners
                    move with confidence and clarity.
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
                        <span className="btn-text">Our Services</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </Link>
                  </div>

                  <div className="digi-hero-glass-stats" data-sal="slide-up" data-sal-duration="700" data-sal-delay="240">
                    {[
                      { val: "5",  suffix: "",  label: "Stakeholder Roles" },
                      { val: "35",  suffix: "+",  label: "App Screens"       },
                      { val: "6+",  suffix: "",  label: "Core Modules"      },
                      { val: "1",   suffix: "",  label: "Source of Truth"   },
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
                        <div className="digi-hv-db-url">geoplox.com/dashboard</div>
                      </div>
                      <img src={geoImg("dashboard")} alt="" loading="eager" />
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
                { icon: "feather-database",     num: "Data",      label: "Intelligence Layer" },
                { icon: "feather-monitor",         num: "1",        label: "Platforms"  },
                { icon: "feather-map-pin",       num: "Property",  label: "Level Intelligence" },
                { icon: "feather-shield",        num: "Trust",     label: "Infrastructure"     },
                { icon: "feather-repeat",        num: "Workflow",  label: "Coordination"       },
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
                <h2 className="digi-client-heading">Estate Informant (Geoplox)</h2>
                <div className="digi-client-body">
                  <p>
                    Geoplox is a real estate intelligence and ecosystem infrastructure company built to
                    fix a fundamental weakness in the property industry: fragmentation. Real estate
                    involves many capable players, developers, property owners, investors, professionals,
                    and capital providers, yet they often operate in isolation, with poor information
                    flow and limited coordination.
                  </p>
                  <p>
                    Geoplox exists to connect these players through a neutral, data-led platform that
                    enables trust, efficiency, and scale. Intentionally independent and conflict-free,
                    Geoplox does not compete with brokers or advisors, it strengthens their ability
                    to operate by providing the shared intelligence infrastructure they lack.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-briefcase"></i></div>
                  <div>
                    <strong>Estate Informant Ltd.</strong>
                    <small>Product Owner</small>
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
                    { icon: "feather-briefcase",  label: "Industry",     value: "Real Estate Intelligence & PropTech Infrastructure" },
                    { icon: "feather-database",   label: "Product",      value: "Real Estate Intelligence & Ecosystem Infrastructure Platform" },
                    { icon: "feather-monitor",    label: "Platform",     value: "Web Application (Responsive)" },
                    { icon: "feather-code",       label: "Tech Stack",   value: "NextJS · Laravel · Vite · Proxy Pattern · MySQL · Redis · REST API · ReactJS · Tailwind CSS · WebSocket" },
                    { icon: "feather-users",      label: "Stakeholders", value: "Developers · Property Owners · Investors · Agents · Admins" },
                    { icon: "feather-users",      label: "Team",         value: "5 Engineers, 1 UI/UX Designer, 4 QA Specialists" },
                    { icon: "feather-award",      label: "Delivered By", value: "SmartTech Solutions", highlight: true },
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
                  The intelligence layer the real estate industry has been missing.
                </h2>
                <div className="digi-app-body">
                  <p>
                    Geoplox is a data-led platform that transforms how real estate stakeholders
                    discover, verify, and coordinate around property opportunities. The platform 
                    serves five distinct stakeholder types, developers, property
                    owners, investors, agents, and platform administrators, each with purpose-built
                    dashboards, appropriate data access, and tailored workflow tools. A structured
                    property upload and validation pipeline ensures every listing meets the platform's
                    data integrity standards before entering the ecosystem.
                  </p>
                  <p>
                    Built on a Laravel API with NextJS frontend, Vite build tooling, Redis caching,
                    and a MySQL data layer. Geoplox delivers institutional-grade property intelligence
                    with the performance and reliability of modern web infrastructure, at scale.
                  </p>
                </div>
                <div className="digi-stack">
                  
                  {["NextJS", "Laravel", "Vite", "Proxy Pattern", "MySQL", "Redis", "REST API", "ReactJS", "Tailwind CSS", "WebSocket"].map((t, i) => (
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
                <div className="digi-app-visual geoplox-app-visual">
                  <div className="digi-app-visual-glow" aria-hidden="true"></div>
                  <div className="digi-app-browser">
                    <div className="digi-app-browser-chrome">
                      <span></span><span></span><span></span>
                      <div className="digi-app-browser-url">geoplox.com/property-search</div>
                    </div>
                    <img src={geoImg("property_search")} alt="Geoplox property search" loading="lazy" />
                  </div>
                  <div className="geoplox-data-card">
                    <div className="geoplox-data-card-icon"><i className="feather-bar-chart-2"></i></div>
                    <div>
                      <strong>Live Property Intelligence</strong>
                      <span>Structured · Verified · Real-Time</span>
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
                  Building neutral infrastructure for a fragmented industry.
                </h2>
                <p className="digi-challenge-lead">
                  Geoplox operates at the intersection of data engineering, multi-stakeholder
                  design, trust architecture, and emerging market infrastructure. Each of these
                  dimensions presented distinct and deeply intertwined technical challenges.
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
                Intelligence delivered beautifully, on every screen.
              </h2>
              <p className="digi-engage-desc">
                From property search and data upload to admin approvals and stakeholder chat,
                every Geoplox screen was designed to make property intelligence feel intuitive,
                trustworthy, and actionable for every participant in the ecosystem.
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
                  <img src={geoImg(s.file)} alt={s.label} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track digi-marquee-track-rev">
              {[...screens.slice(4), ...screens.slice(0, 4), ...screens.slice(4), ...screens.slice(0, 4)].map((s, i) => (
                <div
                  className="digi-web-card"
                  key={`r-${i}`}
                  onClick={() => openLightbox(screens.findIndex(x => x.file === s.file))}
                >
                  <div className="digi-browser-chrome">
                    <span></span><span></span><span></span>
                  </div>
                  <img src={geoImg(s.file)} alt={s.label} loading="lazy" />
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
                  How we built foundational infrastructure for real estate.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took Geoplox from a market thesis to a production-ready
                  intelligence platform, research-led, architecture-first, and built with zero
                  compromises on data integrity or stakeholder experience.
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
                  World-class UI for infrastructure that demands trust.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    Geoplox is positioned as foundational infrastructure and foundational
                    infrastructure must look and feel like it. When stakeholders land on a
                    platform that holds their property data, investment intelligence, and
                    workflow coordination, the UI must communicate reliability, clarity,
                    and institutional-grade quality at first sight.
                  </p>
                  <p>
                    SmartTech Solutions applied the same UI craft to Geoplox that you expect
                    from the world&apos;s leading data platforms and PropTech products, precise,
                    purposeful, and architected for the specific cognitive demands of real
                    estate intelligence. The result is a platform that feels as trustworthy
                    as the data it delivers.
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
                    <strong>5+ Stakeholder Roles</strong>
                    <span>Purpose-Built UX</span>
                    <small>+ Intelligence Layer</small>
                  </div>
                  <div className="digi-craft-mockup">
                    <div className="digi-browser-chrome">
                      <span></span><span></span><span></span>
                    </div>
                    <Image
                      src={geoImg("property_detail")}
                      width={1782}
                      height={1242}
                      alt="Geoplox property detail UI"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Data Intelligence</strong>
                    <span>Single Source of Truth</span>
                    <small>Verified · Structured</small>
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
                  The infrastructure that makes real estate work as a system.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions architected, designed, and delivered the complete Geoplox
                    platform, from the Laravel API and MySQL intelligence layer to the NextJS
                    web application, multi-role dashboards, data validation pipeline, and
                    admin operations suite.
                  </p>
                  <p>
                    The result is a neutral, production-ready property intelligence platform
                    that makes real estate data structured, stakeholders connected, and the
                    whole ecosystem capable of operating with the coordination and clarity
                    it has long been missing.
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

export default GeoploxProject;
