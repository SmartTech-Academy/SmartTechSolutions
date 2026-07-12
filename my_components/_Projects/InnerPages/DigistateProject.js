import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const webImg = (name) => `/app_images/projects/digistate/website/${name}.png`;
const appImg = (name) => `/app_images/projects/digistate/mobile app/${name}.png`;













const webScreens = [
  { file: "homepage",                  label: "Marketing Homepage" },
  { file: "exchange page",             label: "Exchange Marketplace" },
  { file: "investor dashboard",        label: "Investor Dashboard" },
  { file: "broker page",               label: "Broker Management" },
  { file: "homeowner page",            label: "Homeowner Operations" },
  { file: "buy and sell",              label: "Buy & Sell Flow" },
  { file: "transactions page",         label: "Transaction Monitoring" },
  { file: "Digistate admin dashboard", label: "Admin Overview" },
];








const mobileScreens = [
  { file: "flash screen",       label: "Splash" },
  { file: "auth screen",        label: "Authentication" },
  { file: "stock page",         label: "Stock Details" },
  { file: "invest screen",      label: "Investment" },
  { file: "buy and sell stock", label: "Buy & Sell" },
  { file: "portfolio",          label: "Portfolio" },
  { file: "broker integration", label: "Broker Integration" },
  { file: "p2p",                label: "P2P Market" },
  { file: "order screens",      label: "Orders" },
  { file: "profile settings",   label: "Profile" },
];











const challenges = [
  {
    title: "Blockchain Architecture Complexity",
    body: "Implementing ERC-721 NFTs with proxy-upgradeable smart contract patterns, DAO governance, and dynamic on-chain pricing demanded advanced Solidity engineering and rigorous audit planning.",
  },
  {
    title: "Five-Role Access System",
    body: "Engineering five distinct dashboards, each with isolated permissions, approval workflows, and unique data visibility rules.",
  },
  {
    title: "Real-Time Exchange Engine",
    body: "Building a functional secondary market with live bidding, fractional ownership transfers, escrow management, and demand-driven dynamic pricing required a robust, low-latency backend system.",
  },
  {
    title: "Multi-Level Verification Pipelines",
    body: "Designing a four-stage property approval process, legal, valuation, operational, and exchange reviews, while keeping the experience clear and trustworthy for all user types involved.",
  },
  {
    title: "eNaira",
    body: "Integrating Digital Currency as the platform's in-wallet currency required custom token minting, real-time fiat conversion flows.",
  },
];









const processSteps = [
  {
    num: "01",
    title: "Discovery & Requirements",
    body: "Deep discovery sessions with Ribiax mapped all five user roles, regulatory requirements, blockchain mechanics, and exchange model. Output: full PRD and technical feasibility report.",
  },
  {
    num: "02",
    title: "System Architecture Design",
    body: "Architects designed the five-role permission model, exchange engine, smart contract upgrade strategy, API layer, eNaira wallet integration, and scalable microservices infrastructure.",
  },
  {
    num: "03",
    title: "UI/UX Design & Prototyping",
    body: "All five dashboards were designed for web and mobile, clarity for non-technical homeowners, familiarity for financial investors. Every flow validated in high-fidelity prototype before code.",
  },
  {
    num: "04",
    title: "Smart Contract Development",
    body: "Solidity engineers built ERC-721 property NFTs, fractional ownership logic, DAO governance voting, dynamic pricing models, proxy-upgrade patterns, and full on-chain audit trails.",
  },
  {
    num: "05",
    title: "Full-Stack Development",
    body: "Web app, React Native mobile, NestJS API, admin dashboards, and exchange engine built in parallel sprints with continuous blockchain node connectivity tested at every milestone.",
  },
  {
    num: "06",
    title: "QA, Testing & Launch",
    body: "End-to-end testing of all approval workflows, smart contract interactions, exchange order states, wallet flows, and broker permissions, followed by staged access rollout and live monitoring.",
  },
];









const craftFeatures = [
  {
    icon: "feather-eye",
    title: "Clarity First Design",
    body: "Complex flows, IPO bidding, fractional ownership, escrow, distilled into step-by-step guided actions any user can follow without a blockchain background.",
  },
  {
    icon: "feather-shield",
    title: "Trust-Driven Visual Language",
    body: "Every UI decision, colour, spacing, hierarchy, was made to communicate reliability and reduce anxiety at high-stakes investment moments.",
  },
  {
    icon: "feather-smartphone",
    title: "Cross-Platform Consistency",
    body: "Web and mobile share the same design system. Investors get an identical experience on browser or phone, no learning curve between platforms.",
  },
  {
    icon: "feather-zap",
    title: "Optimised for Speed & Flow",
    body: "User journeys engineered to reduce clicks, eliminate dead-ends, and surface the right information at the right moment, hereby maximising conversion and confidence.",
  },
];








const results = [
  {
    icon: "feather-globe",
    title: "Nigeria's First Real Estate Tokenization Exchange",
    body: "A first-of-its-kind platform converting verified properties into tradable blockchain-backed digital assets on a live secondary market.",
  },
  {
    icon: "feather-grid",
    title: "Five Production-Ready Dashboards",
    body: "From homeowner dashboard to App Administrative dashboard, each built for the specific job with isolated workflows.",
  },
  {
    icon: "feather-repeat",
    title: "Functional Secondary Market Exchange",
    body: "A fully operational stock-style exchange where investors trade fractional property-backed positions with live pricing, escrow, and order management.",
  },
  {
    icon: "feather-credit-card",
    title: "eNaira Wallet Funding System",
    body: "Custom-made eNaira Token integration. A tokem pegged to the nigerian naira, hereby enabling users to fund their investment wallets with the platforms token in exchange for their FIAT.",
  },
  {
    icon: "feather-trending-up",
    title: "Dynamic Pricing Engine",
    body: "Asset prices update in real time based on exchange supply and demand, genuine market behaviour, not fixed valuations.",
  },
  {
    icon: "feather-shield",
    title: "DAO Governance & On-Chain Transparency",
    body: "Governance decisions, ownership transfers, bid records, and asset histories preserved on-chain for full auditability and investor trust.",
  },
];





const galleryImages = [
  ...webScreens.map((s) => ({ src: webImg(s.file), label: s.label })),
  ...mobileScreens.map((s) => ({ src: appImg(s.file), label: s.label })),
];



















const DigistateProject = () => {


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


    <div className="digi-case-page">
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
                    <span className="digi-hero-tag tag-accent">Blockchain · Real Estate</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    Digi<span className="digi-gradient">state</span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    Real estate, tokenized and tradable. Digistate converts verified properties into
                    exchange-ready blockchain assets, giving home-owners liquidity and investors
                    fractional ownership in the Nigerian property market.
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

                  {/* Glassmorphism stats */}
                  <div className="digi-hero-glass-stats" data-sal="slide-up" data-sal-duration="700" data-sal-delay="240">
                    {[
                      { val: "5",  suffix: "", label: "Dashboards" },
                      { val: "3",  suffix: "",  label: "Platforms"  },
                      { val: "12", suffix: "+", label: "Developers & Designers"  },
                      { val: "7",  suffix: "+",  label: "QA Engineers" },
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

                {/* ── Right: perspective-tilted dashboard (desktop only) ── */}
                <div className="digi-hero-visual" aria-hidden="true">
                  <div className="digi-hv-glow"></div>
                  <div className="digi-hv-dashboard-wrap">
                    <div className="digi-hv-dashboard-tilt">
                      <div className="digi-hv-db-chrome">
                        <span></span><span></span><span></span>
                        <div className="digi-hv-db-url">digistate.io/investor/dashboard</div>
                      </div>
                      <img src={webImg("investor dashboard")} alt="" loading="eager" />
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
                { icon: "feather-layout",       num: "Trading",   label: "Exchange"          },
                { icon: "feather-monitor",       num: "Platforms",   label: "iOS · Android · Web"           },
                { icon: "feather-link",          num: "ERC-721", label: "NFT Standard"    },
                { icon: "feather-users",         num: "DAO", label: "System"           },
                { icon: "feather-credit-card",   num: "eNaira", label: "Token" },
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
                <h2 className="digi-client-heading">Ribiax Engineering Limited</h2>
                <div className="digi-client-body">
                  <p>
                    Ribiax Engineering Limited is a technology-driven engineering and innovation
                    company headquartered in Nigeria. The firm specialises in building transformative
                    digital platforms that address deep inefficiencies in high-value sectors, with a
                    particular focus on real estate, financial technology, and blockchain-powered asset
                    management.
                  </p>
                  <p>
                    With a mission to unlock the economic value trapped in Nigeria&apos;s property market,
                    Ribiax commissioned Digistate as its flagship product, a multi-role
                    exchange where tokenized property assets can be discovered, bid on, fractionalized,
                    and actively traded by verified investors and brokers.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-briefcase"></i></div>
                  <div>
                    <strong>Ribiax Engineering Limited</strong>
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
                    { icon: "feather-briefcase",  label: "Industry",     value: "Real Estate, Blockchain & Financial Technology" },
                    { icon: "feather-box",         label: "Product",      value: "Real Estate Tokenization & Trading Exchange" },
                    { icon: "feather-monitor",     label: "Platforms",    value: "Web Application, Mobile App (iOS & Android), Admin Dashboards" },
                    { icon: "feather-link",        label: "Blockchain",   value: "ERC-721 NFTs, eNaira Token, DAO Governance, Proxy Upgradeable" },
                    { icon: "feather-layout",      label: "Dashboards",   value: "5 Dashboards for Different User Classes" },
                    { icon: "feather-users",       label: "Team",         value: "10 Developers, 8 QA Engineers, 3 Blockchain Specialists" },
                    { icon: "feather-award",       label: "Delivered By", value: "SmartTech Solutions", highlight: true },
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
                  A complete exchange for property-backed digital assets.
                </h2>
                <div className="digi-app-body">
                  <p>
                    Digistate is a blockchain-powered real estate tokenization platform that converts
                    verified properties into tradable digital assets, making an inherently illiquid
                    market liquid. Property owners onboard assets through a structured multi-stage
                    verification and IPO pipeline. Once listed, investors trade fractional positions
                    on a fully functioning secondary market exchange.
                  </p>
                  <p>
                    The platform operates across five distinct dashboards and a custom eNaira wallet
                    system bridges fiat currency to blockchain-backed investments, while ERC-721 NFTs
                    ensure each property has a unique, tamper-proof digital identity on-chain.
                  </p>
                  <p>
                    Dynamic pricing driven by supply, demand, and bidding activity means the exchange
                    behaves like a genuine securities market, with DAO governance providing transparency
                    and community-led decision-making on top of every listed asset.
                  </p>
                </div>
                <div className="digi-stack">
                  {["NextJS", "NestJS", "React Native", "Solidity", "ERC-721", "Proxy Pattern",
                    "Java", "MySQL", "Redis", "Android Native", "iOS Native", "WebSocket"].map((t, i) => (
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
                <div className="digi-app-visual">

                  {/* Ambient glow */}
                  <div className="digi-app-visual-glow" aria-hidden="true"></div>

                  {/* Desktop browser mockup */}
                  <div className="digi-app-browser">
                    <div className="digi-app-browser-chrome">
                      <span></span><span></span><span></span>
                      <div className="digi-app-browser-url">digistate.io/investor</div>
                    </div>
                    <img src={webImg("investor dashboard")} alt="Digistate investor dashboard" loading="lazy" />
                  </div>

                  {/* Mobile phone mockup overlapping */}
                  <div className="digi-app-phone digi-app-phone--thin-border">
                    <div className="digi-app-phone-speaker"></div>
                    <img src={appImg("invest screen")} alt="Digistate mobile invest screen" loading="lazy" />
                    <div className="digi-app-phone-home"></div>
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
                  Building a compliant, multi-role Exchange from the ground up.
                </h2>
                <p className="digi-challenge-lead">
                  Digistate combined real estate system, blockchain engineering, exchange mechanics,
                  five-role access design, and a digital currency into one coherent product.
                  These were the six hardest problems we solved.
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
                Designed for every user, built for every screen.
              </h2>
              <p className="digi-engage-desc">
                From homeowner onboarding to live exchange trading, every screen was crafted
                for clarity, speed, and trust across web and mobile.
              </p>
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track">
              {[...webScreens, ...webScreens].map((s, i) => (
                <div
                  className="digi-web-card"
                  key={`w-${i}`}
                  onClick={() => openLightbox(i % webScreens.length)}
                >
                  <div className="digi-browser-chrome">
                    <span></span><span></span><span></span>
                  </div>
                  <img src={webImg(s.file)} alt={s.label} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track digi-marquee-track-rev">
              {[...mobileScreens, ...mobileScreens].map((s, i) => (
                <div
                  className="digi-mob-card"
                  key={`m-${i}`}
                  onClick={() => openLightbox(webScreens.length + (i % mobileScreens.length))}
                >
                  <img src={appImg(s.file)} alt={s.label} loading="lazy" />
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
                  How we turned a complex idea into a ready product.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took Digistate from concept to production-ready product, each stage building on the last with zero shortcuts in design or engineering.
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
                  World-class UI craft for a fantastic product.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    Digistate operates in a domain where trust is everything. Every pixel,
                    interaction, and information flow was designed to make complex financial
                    and blockchain operations feel simple, reliable, and professional, removing
                    the intimidation that typically keeps everyday users away from Web3.
                  </p>
                  <p>
                    SmartTech Solutions applied the same level of UI precision to Digistate that
                    you expect from the world&apos;s leading fintech and crypto trading platforms,
                    calibrated for the Nigerian market and its users&apos; real behaviour.
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
                    <strong>5 Dashboards</strong>
                    <span>Role-Specific UX</span>
                    <small>+ Exchange Engine</small>
                  </div>
                  <div className="digi-craft-mockup">
                    <div className="digi-browser-chrome">
                      <span></span><span></span><span></span>
                    </div>
                    <Image
                      src={webImg("investor dashboard")}
                      width={1782}
                      height={1242}
                      alt="Digistate investor dashboard UI"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Cross-Platform</strong>
                    <span>Web + iOS + Android</span>
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
                  A launch-ready foundation for tokenized property trading.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions architected, designed, and shipped the complete Digistate
                    platform, from the blockchain layer and exchange engine to the five dashboard
                    interfaces and cross-platform mobile application.
                  </p>
                  <p>
                    The result is a serious, production-grade product that makes real estate
                    tokenization, IPO mechanics, broker operations, and stock-style trading
                    feel like a native, trustworthy experience for every stakeholder.
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
                      <Link className="rbt-btn btn-border" href={ROUTE.service}>Explore our Services</Link>
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














        {/* ── BLOG ────────────────────────────────────────────────────────── */}
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













        {/* ── BLOG ─────────────────────────────────────────────────── */}
        <section className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape">
          <div className="wrapper pb--50 rbt-index-upper">
            <div className="container">
              <div className="row g-5 align-items-end mb--60">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="section-title text-start">
                    <h2 className="title color-white">Latest News</h2>
                    <p className="description color-white-off mt--20">
                      Notes from our team on product design, software development, AI, blockchain, and launch strategy.
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

export default DigistateProject;
