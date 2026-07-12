import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const jpgcImg = (name) => `/app_images/projects/jpgc_app/${name}.png`;













const webScreens = [
  { file: "jpgc_home",             label: "Marketing Homepage" },
  { file: "jpgc_dashboard",        label: "Investor Dashboard" },
  { file: "jpgc_token_purchase",   label: "Token Purchase" },
  { file: "jpgc_checkout",         label: "Checkout Flow" },
  { file: "app_wallet_connect",    label: "Wallet Connect" },
  { file: "jpg_nft_marketplace",   label: "NFT Marketplace" },
  { file: "jpg_nft_management",    label: "NFT Management" },
  { file: "transactions",          label: "Transaction History" },
  { file: "jpgc_display_picture",  label: "Profile Settings" },
];





const mobileScreens = [
  { file: "mobile_homepage",               label: "Splash / Home" },
  { file: "mobile_dashboard",              label: "Dashboard" },
  { file: "mobile_token_purchase",         label: "Token Purchase" },
  { file: "mobile_nft_purchase_checkout",  label: "NFT Checkout" },
  { file: "mobile_nft_shopping_cart",      label: "Shopping Cart" },
  { file: "mobile_my_nft",                 label: "My NFTs" },
  { file: "mobile_transactions",           label: "Transactions" },
  { file: "mobile_wallet_connect",         label: "Wallet Connect" },
];





const challenges = [
  {
    title: "Dual-Chain Architecture",
    body: "Engineering a token that lives simultaneously on Solana (SPL standard) and Ethereum (ERC-20 standard) required building a robust cross-chain bridge with atomic swap mechanics, security guards, and consistent state reconciliation across both networks.",
  },
  {
    title: "Gold-Peg Compliance & Valuation",
    body: "Maintaining a credible 1g-gold-to-1-JPGC peg demanded legal frameworks, real-time oracle integration for gold spot prices, reserve proof mechanisms, and regulatory positioning within Nigeria's SEC digital asset guidelines.",
  },
  {
    title: "NFT Fractionalization Mechanics",
    body: "Implementing on-chain NFT fractionalization required designing custom smart contracts that split ownership rights into tradable micro-positions, manage redemption windows, and enforce provenance, all while preserving the NFT's underlying gold backing.",
  },
  {
    title: "Multi-Gateway Payment Integration",
    body: "Supporting Stripe (fiat), a crypto gateway (multi-coin), and native SOL as purchase paths meant engineering a unified checkout engine that handles currency conversion, based on visitors location, settlement delays, partial failures, and cross-gateway reconciliation in real time.",
  },
  {
    title: "Staking Engine & Smart Contract Security",
    body: "Building a staking mechanism for both JPGC tokens and NFTs on Solana and ethereum bloackchains, demanded time-locked escrow contracts, reward distribution logic, and a rigorous security audit process, including proxy-upgrade patterns to allow future improvements without breaking staked positions.",
  },
  {
    title: "Real-Time Cross-Chain Data Sync",
    body: "Surfacing live token balances, NFT ownership, staking status, and transaction feeds consistently across both blockchain networks required a custom middleware layer using WebSockets, Redis caching, and event-driven reconciliation to eliminate state drift.",
  },
];






const processSteps = [
  {
    num: "01",
    title: "Discovery & Tokenomics Strategy",
    body: "In-depth sessions with Japaul Digital mapped the dual-chain model, gold-peg mechanics, investor journey, staking economics, and NFT utility. Output: full tokenomics paper, PRD, and technical feasibility report.",
  },
  {
    num: "02",
    title: "Legal & Blockchain Architecture",
    body: "Legal and blockchain architects aligned on the compliance structure, chain bridge design, proxy-upgradeable smart contract strategy, SPL and ERC-20 token standards, and the secure middleware layer for all contract interactions.",
  },
  {
    num: "03",
    title: "UI/UX Design & Prototyping",
    body: "All screens, token purchase, NFT marketplace, staking interface, dashboard, bridge, and checkout; were designed for web and mobile. Every flow was validated in high-fidelity prototype before a single line of code was written.",
  },
  {
    num: "04",
    title: "Smart Contract Development",
    body: "Solidity and Rust engineers built SPL token contracts, ERC-20 bridge contracts, NFT fractionalization logic, staking vaults, proxy-upgrade patterns, and a secure software middleware layer handling all on-chain interactions.",
  },
  {
    num: "05",
    title: "Full-Stack Development",
    body: "Next.js web app, React Native mobile, NestJS API, and PostgreSQL/Redis data layer built in parallel sprints, with WebSocket feeds, Stripe integration, crypto gateway, and live blockchain connectivity tested at every milestone.",
  },
  {
    num: "06",
    title: "Security Audit, QA & Launch",
    body: "End-to-end smart contract audits, payment gateway stress tests, cross-chain state validation, and full user-flow QA across web and mobile, followed by a staged rollout with live monitoring and on-call engineering support.",
  },
];







const craftFeatures = [
  {
    icon: "feather-layers",
    title: "Web3 Made Approachable",
    body: "Connecting wallets, buying gold-backed tokens, staking NFTs, and bridging chains; all made as intuitive as online banking. Little or no blockchain expertise required to invest with confidence.",
  },
  {
    icon: "feather-shield",
    title: "Trust-First Design Language",
    body: "Every interface decision, from colour selection to micro-copy, was made to signal security, legitimacy, and reliability. Gold-backed investing demands a premium that investors can feel.",
  },
  {
    icon: "feather-smartphone",
    title: "Seamless Cross-Platform Experience",
    body: "Web and mobile share one unified design system. Investors switching between browser and phone find the same familiar, polished experience without any learning curve.",
  },
  {
    icon: "feather-zap",
    title: "Speed-Optimised User Journeys",
    body: "Purchase-to-confirmation flows engineered to minimise friction. The right information at the right moment, maximising investor confidence at every high-stakes decision point.",
  },
];






const results = [
  {
    icon: "feather-cpu",
    title: "Dual-Chain JPGC Token",
    body: "A gold-backed digital asset live on both Solana and Ethereum. Bridgeable between chains in one click, giving investors maximum liquidity and network flexibility.",
  },
  {
    icon: "feather-grid",
    title: "Gold-Backed NFT Marketplace",
    body: "A fully functional peer-to-peer NFT marketplace where investors buy, sell, list, gift, and fractionalize gold-backed NFTs with on-chain provenance and settlement.",
  },
  {
    icon: "feather-percent",
    title: "NFT Fractionalization System",
    body: "Custom smart contracts that split NFT ownership into tradable micro-positions, making high-value gold NFTs accessible to smaller investors without sacrificing on-chain integrity.",
  },
  {
    icon: "feather-lock",
    title: "Integrated Staking Engine",
    body: "Time-locked staking vaults for both JPGC tokens and NFTs, offering investors structured yield on their gold-backed digital assets with transparent on-chain reward mechanics.",
  },
  {
    icon: "feather-credit-card",
    title: "Multi-Gateway Purchase System",
    body: "Investors purchase JPGC and NFTs via Stripe (fiat), a crypto gateway (multi-coin), or native SOL; all unified in a single, seamless checkout experience.",
  },
  {
    icon: "feather-bar-chart-2",
    title: "BitMart Exchange Listing",
    body: "JPGC is listed and actively traded on BitMart; one of the world's leading centralized exchanges, giving the token global market visibility, real-time price discovery, and 24/7 liquidity for investors worldwide.",
  },
  {
    icon: "feather-shield",
    title: "Secure Smart Contract Middleware",
    body: "A proprietary software layer between the web app and blockchain contracts; handling signature validation, replay protection, and secure state relay without exposing raw contract calls.",
  },
];







const galleryImages = [
  ...webScreens.map((s)    => ({ src: jpgcImg(s.file), label: s.label })),
  ...mobileScreens.map((s) => ({ src: jpgcImg(s.file), label: s.label })),
];



















const JpgcProject = () => {



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
    <div className="digi-case-page jpgc-theme">
      <main className="rbt-main-wrapper">




        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="digi-hero">

          <div className="digi-aurora" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="container">
            <div className="digi-hero-inner">
              <div className="digi-hero-cols">

                <div className="digi-hero-content">

                  <div className="digi-hero-tags" data-sal="fade" data-sal-duration="600" data-sal-delay="60">
                    <span className="digi-hero-tag tag-primary">Case Study</span>
                    <span className="digi-hero-tag">Digital Asset · Web3</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    JPGC<span className="digi-gradient"> App</span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    The official platform of the Japaul Gold Coin, a gold-backed digital asset live on
                    Solana and Ethereum, and actively traded on BitMart Exchange. Buy tokens, trade NFTs,
                    stake assets, bridge chains, and manage gold-backed investments from one world-class
                    web and mobile app.
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
                      { val: "2",  suffix: "",  label: "Blockchains"      },
                      { val: "5",  suffix: "+", label: "Developers"    },
                      { val: "7", suffix: "+", label: "QA Engineers"        },
                      { val: "1",  suffix: "",  label: "CEX — BitMart"   },
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

                <div className="digi-hero-visual" aria-hidden="true">
                  <div className="digi-hv-glow"></div>
                  <div className="digi-hv-dashboard-wrap">
                    <div className="digi-hv-dashboard-tilt">
                      <div className="digi-hv-db-chrome">
                        <span></span><span></span><span></span>
                        <div className="digi-hv-db-url">jpgcapp.io/dashboard</div>
                      </div>
                      <img src={jpgcImg("jpgc_dashboard")} alt="" loading="eager" />
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
                { icon: "feather-cpu",          num: "Token bridge",        label: "WarmHole"         },
                { icon: "feather-trending-up",  num: "BitMart",  label: "Exchange Listed"     },
                { icon: "feather-layers",       num: "5+",       label: "Core Modules"        },
                { icon: "feather-users",        num: "14+",      label: "Engineers"           },
                { icon: "feather-shield",       num: "1g Gold",  label: "Per 1 JPGC Token"    },
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
                <h2 className="digi-client-heading">Japaul Digital Solutions Limited</h2>
                <div className="digi-client-body">
                  <p>
                    Japaul Digital Solutions Limited is an associate company of Japaul Gold 
                    and Ventures Plc, a Nigerian gold mining company that owns, mines, and
                    produces gold behind every JPGC token. The company
                    was created to lead the Group&apos;s expansion into the rapidly evolving
                    digital assets ecosystem.
                  </p>
                  <p>
                    By leveraging federally-issued gold mining leases and independently
                    audited reserves, Japaul Digital Solutions collateralises every token
                    it issues with real, verifiable value, commissioning JPGold Coin
                    (JPGC) and its companion JPG-NFT certificates as its flagship venture
                    into tokenized real-world assets.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-briefcase"></i></div>
                  <div>
                    <strong>Japaul Digital Solutions Limited</strong>
                    <small>Product Owner · Lagos, Nigeria</small>
                    {/* <small>Product Owner · Nigeria · NGX Listed</small> */}
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
                    { icon: "feather-briefcase", label: "Industry",     value: "Digital Assets, Blockchain & Gold-Backed Finance" },
                    { icon: "feather-box",        label: "Product",      value: "JPGC Token Web App & NFT Investment Platform" },
                    { icon: "feather-monitor",    label: "Platforms",    value: "Web Application, Mobile App (iOS & Android)" },
                    { icon: "feather-link",       label: "Blockchain",   value: "Solana (SPL) and Ethereum (ERC-20)" },
                    { icon: "feather-trending-up",label: "Exchange",     value: "Listed & Actively Traded on BitMart Exchange (CEX)" },
                    { icon: "feather-package",    label: "Core Modules", value: "Token & NFT Purchase · NFT Marketplace · Staking · Bridge · Fractionalization" },
                    { icon: "feather-users",      label: "Team",         value: "7 Developers, 8 QA Engineers, 1 Blockchain Specialists" },
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
                  The complete platform for gold-backed digital asset investing.
                </h2>
                <div className="digi-app-body">
                  <p>
                    JPGC App is the official web and mobile platform of Japaul Gold Coin (JPGC), a digital
                    asset pegged at 1 gram of physical gold per 1 JPGC, live on both the Solana and
                    Ethereum networks, and listed for trading on BitMart Exchange. The platform gives
                    investors a single destination to buy, manage, and grow gold-backed digital wealth
                    without needing much blockchain expertise.
                  </p>
                  <p>
                    Investors can purchase JPGC tokens using fiat currency through Stripe, or with other
                    cryptocurrencies via an integrated crypto gateway. A built-in chain bridge allows
                    seamless movement of assets between Solana and Ethereum blockchain respectively. 
                    For NFT investors, the platform features a peer-to-peer marketplace, fractionalization 
                    tools, gifting capabilities, and direct listing management.
                  </p>
                  <p>
                    A fully integrated staking engine lets investors stake both JPGC tokens and NFTs for
                    structured returns, all secured through a proprietary smart contract middleware layer
                    that protects every on-chain interaction with enterprise-grade validation and replay
                    protection.
                  </p>
                </div>
                <div className="digi-stack">
                  {["NextJS", "NestJS", "React Native", "Solidity", "ReactJS", "Tailwind CSS", "SPL", "Proxy Pattern", "Vite", "PostgreSQL", "Redis", "WebSocket", "Android Native", "iOS Native"].map((t, i) => (
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
                  <div className="digi-app-visual-glow" aria-hidden="true"></div>
                  <div className="digi-app-browser">
                    <div className="digi-app-browser-chrome">
                      <span></span><span></span><span></span>
                      <div className="digi-app-browser-url">jpgcapp.io/dashboard</div>
                    </div>
                    <img src={jpgcImg("jpgc_dashboard")} alt="JPGC investor dashboard" loading="lazy" />
                  </div>
                  <div className="digi-app-phone">
                    <div className="digi-app-phone-speaker"></div>
                    <img src={jpgcImg("mobile_dashboard")} alt="JPGC mobile dashboard" loading="lazy" />
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
                  Building a dual-chain, gold-backed Web3 investment platform at scale.
                </h2>
                <p className="digi-challenge-lead">
                  JPGC App combined gold-peg compliance, dual-chain architecture, multi-gateway
                  payments, NFT fractionalization, staking mechanics, and real-time cross-chain
                  data sync into one seamless product. These were the six hardest problems we solved.
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
                Designed for investors, built for every screen.
              </h2>
              <p className="digi-engage-desc">
                From wallet connection to gold-backed NFT checkout, every screen was crafted
                for clarity, confidence, and conversion across web and mobile.
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
                  <img src={jpgcImg(s.file)} alt={s.label} loading="lazy" />
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
                  <img src={jpgcImg(s.file)} alt={s.label} loading="lazy" />
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
                  How we turned gold and blockchain into one live product.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took JPGC App from tokenomics strategy to production-ready
                  platform; no shortcuts on compliance, smart contract security, or user experience.
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
                  World-class UI for the world of gold-backed Web3.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    JPGC App serves investors who are putting real wealth on-chain. SmartTech Solutions
                    built every interface to communicate one thing above all else: trust. Clean layouts,
                    zero visual noise, and precision-designed user journeys remove the complexity from
                    blockchain investing, leaving only confidence.
                  </p>
                  <p>
                    From token purchase flows to NFT fractionalization to staking dashboards, SmartTech
                    applied the same design precision you expect from the world&apos;s leading fintech
                    platforms, engineered specifically for the JPGC investor&apos;s journey.
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
                    <strong>Dual-Chain</strong>
                    <span>Solana + Ethereum</span>
                    <small>Seamless bridge</small>
                  </div>
                  <div className="digi-craft-mockup">
                    <div className="digi-browser-chrome">
                      <span></span><span></span><span></span>
                    </div>
                    <Image
                      src={jpgcImg("jpgc_home")}
                      width={1782}
                      height={1242}
                      alt="JPGC App homepage UI"
                      loading="lazy"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>5 Core Modules</strong>
                    <span>Token · NFT · Stake · Bridge</span>
                    <small>One unified platform</small>
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
                  A production-grade platform for gold-backed digital investing.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions designed, engineered, and shipped the complete JPGC App platform.
                    From dual-chain smart contracts and secure middleware to a world-class web and mobile
                    investment experience.
                  </p>
                  <p>
                    The result is a first-of-its-kind gold-backed Web3 platform that makes token trading,
                    NFT investing, staking, and cross-chain bridging feel like a native, premium financial
                    product, not a blockchain experiment.
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

export default JpgcProject;
