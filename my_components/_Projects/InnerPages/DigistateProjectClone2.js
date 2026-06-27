import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";

import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";

const appImage = (name) =>
  image_url(`/app_images/projects/digistate/mobile app/${name}.png`, true);

const webImage = (name) =>
  image_url(`/app_images/projects/digistate/website/${name}.png`, true);

// ─── DATA ────────────────────────────────────────────────────────────────────

const projectFacts = [
  { label: "Industry", value: "Real Estate · Blockchain · FinTech" },
  { label: "Product", value: "Real Estate Tokenization Exchange" },
  { label: "Platforms", value: "Web App · Mobile App · Admin Suite" },
  { label: "Blockchain", value: "ERC-721 NFTs · eNaira · DAO Governance" },
];

const platformStats = [
  { number: "5", label: "Dedicated Dashboards", icon: "feather-layers" },
  { number: "3", label: "Platform Surfaces", icon: "feather-monitor" },
  { number: "4", label: "IPO Approval Levels", icon: "feather-check-square" },
  { number: "ERC-721", label: "Property NFT Standard", icon: "feather-box" },
  { number: "DAO", label: "On-chain Governance", icon: "feather-users" },
  { number: "eNaira", label: "Blockchain Wallet Token", icon: "feather-credit-card" },
];

const techStack = [
  "NextJS", "NestJS", "React Native", "Solidity",
  "ERC-721", "Proxy Pattern", "Java", "MySQL", "Redis",
];

const dashboardCards = [
  {
    title: "Homeowners",
    text: "Property owners onboard assets, upload documents, pass multi-level verification, receive IPO bids, and approve offers before an asset becomes tradable stock.",
    icon: "feather-home",
    screen: "homeowner page",
    screenWidth: 1800,
    screenHeight: 1412,
  },
  {
    title: "Investors",
    text: "Verified investors browse tokenized assets, monitor watchlists, integrate brokers, fund wallets with eNaira, and buy or sell fractional ownership positions.",
    icon: "feather-trending-up",
    screen: "investor dashboard",
    screenWidth: 1782,
    screenHeight: 1242,
  },
  {
    title: "Brokers",
    text: "Broker institutions support property onboarding, IPO readiness, investor trading, and permission-based stock management for clients who approve broker activity.",
    icon: "feather-briefcase",
    screen: "broker page",
    screenWidth: 1800,
    screenHeight: 1380,
  },
  {
    title: "Verification Teams",
    text: "Operational reviewers evaluate property data, ownership documents, valuations, and approval stages before assets move into the IPO pipeline.",
    icon: "feather-check-circle",
    screen: "Digistate admin dashboard",
    screenWidth: 1646,
    screenHeight: 1298,
  },
  {
    title: "Exchange Admin",
    text: "Market operators manage listed assets, stock activity, escrow states, transaction visibility, governance activity, and the broader exchange ecosystem.",
    icon: "feather-grid",
    screen: "transactions page",
    screenWidth: 1626,
    screenHeight: 1130,
  },
];

const challenges = [
  {
    icon: "feather-lock",
    title: "Turning Illiquid Assets into Tradable Tokens",
    text: "Real estate is naturally illiquid — property value stays tied down until a slow, expensive sale completes. Converting verified properties into digital positions that feel safe and familiar to trade required deep product thinking and a trustworthy onboarding journey.",
  },
  {
    icon: "feather-file-text",
    title: "Multi-Stage Property Onboarding at Scale",
    text: "Homeowners needed a serious, structured journey: property details, ownership documents, independent valuation, four sequential approval levels, an IPO bidding window, and IPO closure — all before an asset could enter the exchange as tradable stock.",
  },
  {
    icon: "feather-refresh-cw",
    title: "Making Web3 Feel Like a Stock App",
    text: "Investors required a familiar stock-trading experience while dealing with Web3 realities: tokenized assets, wallet funding, eNaira conversion, escrow mechanics, and on-chain order history — all visible and understandable without any blockchain background.",
  },
  {
    icon: "feather-sliders",
    title: "Broker Power Without User Risk",
    text: "Broker institutions needed powerful tools to help both homeowners and investors — but only with explicit per-asset user permission. Building this access-control layer without compromising user ownership was a genuine product architecture challenge.",
  },
];

const processSteps = [
  {
    number: "01",
    phase: "Discovery",
    title: "Business Analysis",
    text: "Mapped real estate operations, investor behavior, broker roles, IPO mechanics, and exchange requirements into one unified product model.",
    icon: "feather-search",
  },
  {
    number: "02",
    phase: "Architecture",
    title: "Role Architecture",
    text: "Defined five dashboards, permission layers, multi-level approval gates, transaction state machines, and broker relationship models.",
    icon: "feather-layout",
  },
  {
    number: "03",
    phase: "Design",
    title: "Product Design",
    text: "Designed web and mobile experiences that make property discovery, IPO bidding, wallet funding, broker integration, and trading genuinely understandable.",
    icon: "feather-pen-tool",
  },
  {
    number: "04",
    phase: "Engineering",
    title: "Blockchain Engineering",
    text: "Implemented property NFTs, fractional ownership, dynamic pricing, eNaira wallet flow, DAO governance, upgradeable proxy contracts, and on-chain tracking.",
    icon: "feather-code",
  },
  {
    number: "05",
    phase: "Delivery",
    title: "Testing & Launch Prep",
    text: "Validated exchange behavior, approval flows, wallet states, order execution, broker permissions, governance events, and all responsive platform screens.",
    icon: "feather-check-circle",
  },
];

const solutionPillars = [
  { icon: "feather-box", text: "ERC-721 NFTs represent each property as a traceable on-chain digital asset." },
  { icon: "feather-pie-chart", text: "Fractional ownership lets multiple investors hold positions in one property-backed asset." },
  { icon: "feather-trending-up", text: "Dynamic pricing responds to demand, supply, IPO bids, and secondary exchange activity." },
  { icon: "feather-users", text: "DAO-based governance records decisions and supports transparent asset operations." },
  { icon: "feather-refresh-cw", text: "Proxy pattern keeps the contract system upgradeable as the product evolves." },
  { icon: "feather-activity", text: "On-chain tracking preserves bidding history, ownership movement, and governance decisions." },
];

const allMobileScreens = [
  { name: "flash screen", label: "Splash Screen" },
  { name: "auth screen", label: "Authentication" },
  { name: "stock page", label: "Stock Details" },
  { name: "buy and sell stock", label: "Buy & Sell" },
  { name: "broker integration", label: "Broker Integration" },
  { name: "portfolio", label: "Portfolio" },
  { name: "invest screen", label: "Investment" },
  { name: "p2p", label: "P2P Market" },
  { name: "broker review", label: "Broker Reviews" },
  { name: "order screens", label: "Order Management" },
  { name: "profile settings", label: "Profile Settings" },
];

const mosaicScreens = [
  { name: "auth screen", label: "Investor onboarding" },
  { name: "broker review", label: "Broker reviews" },
  { name: "order screens", label: "Order management" },
  { name: "profile settings", label: "Profile settings" },
];

const allWebScreens = [
  { name: "homepage", label: "Landing Page", width: 1800, height: 1314 },
  { name: "exchange page", label: "Exchange Marketplace", width: 1762, height: 1222 },
  { name: "investor dashboard", label: "Investor Dashboard", width: 1782, height: 1242 },
  { name: "investor page", label: "Investor Profile", width: 1800, height: 1200 },
  { name: "buy and sell", label: "Trading Interface", width: 2070, height: 1442 },
  { name: "auth page", label: "Authentication Portal", width: 1600, height: 1100 },
  { name: "broker integration page", label: "Broker Integration", width: 1800, height: 1300 },
  { name: "broker page", label: "Broker Dashboard", width: 1800, height: 1380 },
  { name: "homeowner page", label: "Homeowner Portal", width: 1800, height: 1412 },
  { name: "Digistate admin dashboard", label: "Admin Overview", width: 1646, height: 1298 },
  { name: "admin dashboard 1", label: "Admin Dashboard", width: 1800, height: 1300 },
  { name: "admin dashboard 2", label: "Admin Analytics", width: 1800, height: 1300 },
  { name: "transactions page", label: "Transaction Monitor", width: 1626, height: 1130 },
  { name: "mobile screen homepage", label: "Responsive Homepage", width: 1440, height: 900 },
  { name: "mobile screen investor page", label: "Investor Responsive", width: 1440, height: 900 },
  { name: "mobile screen homeowners page", label: "Homeowners Responsive", width: 1440, height: 900 },
  { name: "mobile screen brokers page", label: "Brokers Responsive", width: 1440, height: 900 },
];

const results = [
  {
    icon: "feather-activity",
    title: "Full Exchange Infrastructure",
    text: "A complete real estate asset exchange where tokenized properties move from onboarding through IPO to stock creation and live secondary market trading.",
  },
  {
    icon: "feather-grid",
    title: "Five-Dashboard Ecosystem",
    text: "A web and mobile product covering homeowners, investors, brokers, verification teams, and exchange administrators — each with a purpose-built interface.",
  },
  {
    icon: "feather-dollar-sign",
    title: "eNaira Wallet System",
    text: "A blockchain-backed wallet funding flow that lets users convert fiat naira into eNaira and manage their full exchange balance on-platform.",
  },
  {
    icon: "feather-shield",
    title: "Transparent Asset Layer",
    text: "Property NFTs, fractional ownership, dynamic pricing, DAO governance records, and complete bidding history maintained transparently on-chain.",
  },
  {
    icon: "feather-users",
    title: "Accessible Web3 UX",
    text: "An experience that makes a complex Web3 investment model understandable to non-technical property owners and retail investors through guided, familiar flows.",
  },
  {
    icon: "feather-trending-up",
    title: "Scalable Market Foundation",
    text: "A future-ready architecture ready for market expansion, new broker partnerships, governance feature evolution, and new real-world asset classes.",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const DigistateProject = () => {
  useEffect(() => {
    sal({ threshold: 0.01, once: true });
  }, []);

  return (
    <>
      <main className="rbt-main-wrapper digistate-case-study">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="digistate-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="hero-content" data-sal="slide-up" data-sal-duration="700">
                  <span className="hero-eyebrow">
                    <i className="feather-zap"></i>
                    DIGISTATE — CASE STUDY
                  </span>
                  <h1>
                    <span>Real estate,</span>
                    <span className="h1-accent">tokenized</span>
                    <span>and tradable.</span>
                  </h1>
                  <p>
                    Digistate is a blockchain-powered real estate exchange that unlocks
                    tied-down property value. Homeowners IPO their assets on-chain, verified
                    investors trade fractional positions, and brokers facilitate — all powered
                    by eNaira wallets and on-chain transparency.
                  </p>
                  <div className="hero-platforms" aria-label="Digistate platform coverage">
                    <span><i className="feather-monitor"></i>Web App</span>
                    <span><i className="feather-smartphone"></i>Mobile App</span>
                    <span><i className="feather-shield"></i>Admin Suite</span>
                  </div>
                  <div className="hero-actions">
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
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-visual" data-sal="zoom-in" data-sal-duration="800">
                  <div className="hero-orbit hero-orbit-one"></div>
                  <div className="hero-orbit hero-orbit-two"></div>

                  <div className="hero-browser">
                    <div className="browser-chrome" aria-hidden="true">
                      <span></span><span></span><span></span>
                      <div className="browser-url">digistate.io</div>
                    </div>
                    <Image
                      src={webImage("homepage")}
                      width={1800}
                      height={1314}
                      priority
                      alt="Digistate platform homepage"
                    />
                  </div>

                  <div className="hero-phone hero-phone-large">
                    <Image
                      src={appImage("flash screen")}
                      width={610}
                      height={1320}
                      priority
                      alt="Digistate splash screen"
                    />
                  </div>
                  <div className="hero-phone hero-phone-small">
                    <Image
                      src={appImage("buy and sell stock")}
                      width={610}
                      height={1440}
                      priority
                      alt="Digistate buy and sell screen"
                    />
                  </div>

                  <div className="hero-badge hero-badge-top">
                    <i className="feather-zap"></i>
                    <span>Property to Exchange in 5 Steps</span>
                  </div>
                  <div className="hero-badge hero-badge-bottom">
                    <i className="feather-trending-up"></i>
                    <div>
                      <strong>Web + Mobile</strong>
                      <small>End-to-end real estate tokenization platform</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECT FACTS ─────────────────────────────────────────────────── */}
        <section className="project-facts">
          <div className="container">
            <div className="facts-grid">
              {projectFacts.map((item) => (
                <div className="fact-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHASE BANNER 01 ──────────────────────────────────────────────── */}
        <div className="phase-banner">
          <div className="phase-banner-inner">
            <span className="phase-num">01</span>
            <div className="phase-divider"></div>
            <div className="phase-meta">
              <strong>About the App</strong>
              <p>What Digistate is, how it works, and what makes it unique — with a full visual tour of the platform.</p>
            </div>
            <div className="phase-tags">
              <span>Platform Overview</span>
              <span>App Screenshots</span>
              <span>Feature Tour</span>
            </div>
          </div>
        </div>

        {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
        <section className="rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-center mb--60">
              <div className="col-lg-5">
                <div className="section-title text-start" data-sal="slide-right" data-sal-duration="700">
                  <span className="subtitle bg-primary-opacity">ABOUT THE PRODUCT</span>
                  <h2 className="title">A complete exchange for property-backed digital assets.</h2>
                </div>
              </div>
              <div className="col-lg-7" data-sal="slide-left" data-sal-duration="700">
                <p className="description has-medium-font-size">
                  Digistate was created around one ambitious idea: property wealth should not
                  stay locked because traditional real estate is slow to sell, expensive to
                  enter, and impossible to divide. The platform converts verified properties
                  into tokenized assets that can be bid on, fractionalized, held, and traded
                  on an open exchange.
                </p>
                <p className="description has-medium-font-size mt--20">
                  SmartTech Solutions architected the platform across five dashboards and
                  delivered the complete trading foundation: homeowner onboarding, investor
                  trading, broker operations, verification workflows, exchange controls, eNaira
                  wallet funding, and blockchain-backed asset records.
                </p>
              </div>
            </div>

            <div className="about-browser" data-sal="slide-up" data-sal-duration="800">
              <div className="browser-chrome" aria-hidden="true">
                <span></span><span></span><span></span>
                <div className="browser-url">digistate.io/exchange</div>
              </div>
              <Image
                src={webImage("exchange page")}
                width={1762}
                height={1222}
                alt="Digistate exchange marketplace"
              />
            </div>
          </div>
        </section>

        {/* ── PLATFORM STATS ────────────────────────────────────────────────── */}
        <section className="platform-stats rbt-section-gap">
          <div className="container">
            <div className="row mb--50">
              <div className="col-lg-8 offset-lg-2 text-center">
                <div className="section-title" data-sal="slide-up" data-sal-duration="700">
                  <span className="subtitle bg-primary-opacity">BUILT FOR COMPLEXITY</span>
                  <h2 className="title color-white mt--20">
                    One platform. Five roles. Unlimited property potential.
                  </h2>
                </div>
              </div>
            </div>
            <div className="stats-grid">
              {platformStats.map((stat, index) => (
                <div className="stat-card" key={stat.label} data-sal="slide-up" data-sal-delay={index * 60}>
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <strong>{stat.number}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IPO FLOW ──────────────────────────────────────────────────────── */}
        <section className="innovation-section rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="innovation-copy" data-sal="slide-right" data-sal-duration="700">
                  <span className="subtitle bg-primary-opacity">INNOVATIVE EXCHANGE MODEL</span>
                  <h2>From property onboarding to IPO, then live market trading.</h2>
                  <p>
                    Homeowners upload property details and documents for valuation. After four
                    distinct approval levels, the asset enters an IPO state where bids are
                    received, reviewed, and selectively accepted. Once the IPO closes, the
                    property becomes a tradable stock and market forces begin to set its
                    real-time price on the exchange.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ipo-flow" data-sal="slide-left" data-sal-duration="700">
                  {[
                    { label: "Onboard", desc: "Upload property & documents" },
                    { label: "Verify", desc: "4-level approval process" },
                    { label: "IPO Bids", desc: "Receive & select investor bids" },
                    { label: "List Stock", desc: "Asset becomes exchange-traded" },
                    { label: "Trade", desc: "Market forces set price" },
                  ].map((item, index) => (
                    <div className="flow-step" key={item.label}>
                      <span className="flow-num">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{item.label}</strong>
                        <small>{item.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MOBILE APP SHOWCASE ───────────────────────────────────────────── */}
        <section className="screen-stage rbt-section-gap">
          <div className="container">
            <div className="row mb--50">
              <div className="col-lg-8">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">MOBILE APP SHOWCASE</span>
                  <h2 className="title color-white">
                    Eleven screens. Every role. One seamless mobile experience.
                  </h2>
                </div>
              </div>
              <div className="col-lg-4">
                <p className="description color-white-off mt_md--20 mt_sm--20">
                  The app uses familiar trading patterns while introducing property details,
                  broker approvals, escrow summaries, and eNaira-backed account activity.
                </p>
              </div>
            </div>
          </div>

          <div className="reel-track" aria-label="Digistate mobile application screens">
            <div className="screen-reel">
              {[...allMobileScreens, ...allMobileScreens].map((screen, index) => (
                <div className="reel-phone" key={`reel-a-${screen.name}-${index}`}>
                  <Image
                    src={appImage(screen.name)}
                    width={610}
                    height={1500}
                    alt={`Digistate ${screen.label} screen`}
                  />
                  <span>{screen.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reel-track reel-track-rev" aria-label="Digistate mobile screens reversed" style={{ marginTop: "22px" }}>
            <div className="screen-reel screen-reel-rev">
              {[...allMobileScreens.slice().reverse(), ...allMobileScreens.slice().reverse()].map((screen, index) => (
                <div className="reel-phone reel-phone-sm" key={`reel-b-${screen.name}-${index}`}>
                  <Image
                    src={appImage(screen.name)}
                    width={610}
                    height={1500}
                    alt={`Digistate ${screen.label} screen`}
                  />
                  <span>{screen.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WEB PLATFORM SHOWCASE ─────────────────────────────────────────── */}
        <section className="web-showcase-section rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-end mb--50">
              <div className="col-lg-7">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">WEB PLATFORM SHOWCASE</span>
                  <h2 className="title">Seventeen screens for a full-service exchange ecosystem.</h2>
                </div>
              </div>
              <div className="col-lg-5">
                <p className="description has-medium-font-size mt_md--20 mt_sm--20">
                  The web app gives investors, homeowners, brokers, and administrators the
                  room they need to review assets, manage operations, monitor transactions,
                  and trade from a full desktop interface.
                </p>
              </div>
            </div>

            <div className="browser-feature" data-sal="slide-up" data-sal-duration="700">
              <div className="browser-chrome" aria-hidden="true">
                <span></span><span></span><span></span>
                <div className="browser-url">digistate.io/investor</div>
              </div>
              <Image
                src={webImage("investor dashboard")}
                width={1782}
                height={1242}
                alt="Digistate investor dashboard"
              />
            </div>
          </div>

          <div className="web-reel-wrap" aria-label="Digistate web platform screens">
            <div className="web-screen-reel">
              {[...allWebScreens, ...allWebScreens].map((screen, index) => (
                <div className="web-screen-card" key={`web-a-${screen.name}-${index}`}>
                  <div className="browser-chrome" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </div>
                  <Image
                    src={webImage(screen.name)}
                    width={screen.width}
                    height={screen.height}
                    alt={`Digistate ${screen.label}`}
                  />
                  <span>{screen.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="web-reel-wrap web-reel-wrap-reverse" aria-label="Digistate web platform screens reversed">
            <div className="web-screen-reel web-screen-reel-reverse">
              {[...allWebScreens.slice().reverse(), ...allWebScreens.slice().reverse()].map((screen, index) => (
                <div className="web-screen-card web-screen-card-compact" key={`web-b-${screen.name}-${index}`}>
                  <div className="browser-chrome" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </div>
                  <Image
                    src={webImage(screen.name)}
                    width={screen.width}
                    height={screen.height}
                    alt={`Digistate ${screen.label}`}
                  />
                  <span>{screen.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHASE BANNER 02 ──────────────────────────────────────────────── */}
        <div className="phase-banner phase-banner-dark">
          <div className="phase-banner-inner">
            <span className="phase-num">02</span>
            <div className="phase-divider"></div>
            <div className="phase-meta">
              <strong>The Challenge &amp; Solution</strong>
              <p>Real problems we faced building a regulated, multi-role Web3 exchange — and how we solved each one.</p>
            </div>
            <div className="phase-tags">
              <span>Challenges</span>
              <span>Our Solution</span>
              <span>Architecture</span>
            </div>
          </div>
        </div>

        {/* ── CHALLENGES ────────────────────────────────────────────────────── */}
        <section className="challenge-section rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="challenge-panel" data-sal="slide-right" data-sal-duration="700">
                  <span className="panel-kicker">THE CHALLENGE</span>
                  <h2>Making a regulated, multi-role Web3 exchange feel trustworthy.</h2>
                  <p>
                    Digistate was not a simple marketplace. It combined property
                    verification, IPO mechanics, exchange trading, blockchain wallet
                    funding, permission-based broker access, on-chain governance, and
                    real-time asset records into one product.
                  </p>
                  <div className="challenge-stats-row">
                    <div className="challenge-stat">
                      <strong>5</strong>
                      <span>User roles</span>
                    </div>
                    <div className="challenge-stat">
                      <strong>4</strong>
                      <span>Approval levels</span>
                    </div>
                    <div className="challenge-stat">
                      <strong>3</strong>
                      <span>Platforms</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="challenge-list">
                  {challenges.map((item, index) => (
                    <div
                      className="challenge-card"
                      key={item.title}
                      data-sal="slide-up"
                      data-sal-delay={index * 80}
                    >
                      <div className="challenge-card-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="challenge-card-body">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DASHBOARD ECOSYSTEM ───────────────────────────────────────────── */}
        <section className="rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row mb--50">
              <div className="col-lg-8 offset-lg-2">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">DASHBOARD ECOSYSTEM</span>
                  <h2 className="title">Five dashboards built for five very different jobs.</h2>
                  <p className="description has-medium-font-size mt--20">
                    Each user type gets an interface built around their role, while sharing
                    one secure exchange engine underneath.
                  </p>
                </div>
              </div>
            </div>

            <div className="dashboard-grid">
              {dashboardCards.map((item, index) => (
                <div
                  className="dashboard-card"
                  key={item.title}
                  data-sal="slide-up"
                  data-sal-delay={index * 70}
                >
                  <div className="dashboard-card-screen">
                    <div className="browser-chrome browser-chrome-sm" aria-hidden="true">
                      <span></span><span></span><span></span>
                    </div>
                    <Image
                      src={webImage(item.screen)}
                      width={item.screenWidth}
                      height={item.screenHeight}
                      alt={`Digistate ${item.title} dashboard`}
                    />
                  </div>
                  <div className="dashboard-card-content">
                    <div className="icon">
                      <i className={item.icon}></i>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT MOMENTS MOSAIC ────────────────────────────────────────── */}
        <section className="mosaic-section rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-title text-start" data-sal="slide-right" data-sal-duration="700">
                  <span className="subtitle bg-primary-opacity">PRODUCT MOMENTS</span>
                  <h2 className="title">Screens that turn heavy financial actions into clear steps.</h2>
                  <p className="description has-medium-font-size mt--20">
                    We used clear cards, prominent calls to action, status labels, order
                    summaries, and concise property information so users always know what
                    they are doing and what happens next.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="screen-mosaic" data-sal="zoom-in" data-sal-duration="700">
                  {mosaicScreens.map((screen, index) => (
                    <div className={`mosaic-card card-${index + 1}`} key={screen.name}>
                      <Image
                        src={appImage(screen.name)}
                        width={610}
                        height={1440}
                        alt={`Digistate ${screen.label} screen`}
                      />
                      <span>{screen.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE SOLUTION ──────────────────────────────────────────────────── */}
        <section className="solution-section rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="solution-visual" data-sal="zoom-in" data-sal-duration="700">
                  <div className="solution-phone solution-phone-back">
                    <Image
                      src={appImage("invest screen")}
                      width={610}
                      height={1440}
                      alt="Digistate invest screen"
                    />
                  </div>
                  <div className="solution-phone solution-phone-front">
                    <Image
                      src={appImage("buy and sell stock")}
                      width={610}
                      height={1440}
                      alt="Digistate buy and sell screen"
                    />
                  </div>
                  <div className="solution-badge">
                    <small>Smart contract layer</small>
                    <strong>ERC-721 + DAO</strong>
                    <span>Property identity, governance decisions, bids, and ownership events stay traceable on-chain.</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="section-title text-start" data-sal="slide-left" data-sal-duration="700">
                  <span className="subtitle bg-primary-opacity">THE SOLUTION</span>
                  <h2 className="title">A unified real estate exchange with Web3 rails under the hood.</h2>
                  <p className="description has-medium-font-size mt--20">
                    We created the product architecture, application experience, wallet
                    logic, and blockchain model required to move assets from verified
                    properties into tradable positions. The complexity stays in the system;
                    the user sees guided, familiar actions.
                  </p>
                </div>
                <div className="solution-list">
                  {solutionPillars.map((item) => (
                    <div className="solution-item" key={item.text}>
                      <div className="solution-item-icon">
                        <i className={item.icon}></i>
                      </div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHASE BANNER 03 ──────────────────────────────────────────────── */}
        <div className="phase-banner">
          <div className="phase-banner-inner">
            <span className="phase-num">03</span>
            <div className="phase-divider"></div>
            <div className="phase-meta">
              <strong>The Process</strong>
              <p>How we moved from discovery and business analysis through architecture, design, engineering, and launch.</p>
            </div>
            <div className="phase-tags">
              <span>Discovery</span>
              <span>Design</span>
              <span>Engineering</span>
              <span>Delivery</span>
            </div>
          </div>
        </div>

        {/* ── THE PROCESS ───────────────────────────────────────────────────── */}
        <section className="process-section rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-7">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">THE PROCESS</span>
                  <h2 className="title color-white">
                    A product process shaped around operations, users, and blockchain truth.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <p className="description color-white-off mt_md--20 mt_sm--20 mt_lg--30">
                  Each phase unlocked the next. Discovery shaped architecture. Architecture
                  informed design. Design guided engineering. Engineering was tested against
                  every user scenario we mapped from day one.
                </p>
              </div>
            </div>

            <div className="process-timeline">
              {processSteps.map((item, index) => (
                <div
                  className="process-step"
                  key={item.number}
                  data-sal="slide-up"
                  data-sal-delay={index * 80}
                >
                  <div className="process-phase-tag">{item.phase}</div>
                  <div className="process-num">{item.number}</div>
                  <div className="process-icon-wrap">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ────────────────────────────────────────────────────── */}
        <section className="stack-section rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-title text-start" data-sal="slide-right" data-sal-duration="700">
                  <span className="subtitle bg-primary-opacity">TECH STACK</span>
                  <h2 className="title">Built for mobile usage, exchange speed, and upgradeable contracts.</h2>
                </div>
              </div>
              <div className="col-lg-7" data-sal="slide-left" data-sal-duration="700">
                <div className="tech-list">
                  {techStack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PHASE BANNER 04 ──────────────────────────────────────────────── */}
        <div className="phase-banner phase-banner-accent">
          <div className="phase-banner-inner">
            <span className="phase-num">04</span>
            <div className="phase-divider"></div>
            <div className="phase-meta">
              <strong>Project Results</strong>
              <p>What we delivered — a launch-ready foundation for tokenized real estate trading at scale.</p>
            </div>
            <div className="phase-tags">
              <span>Exchange Infrastructure</span>
              <span>5 Dashboards</span>
              <span>Web3 UX</span>
            </div>
          </div>
        </div>

        {/* ── PROJECT RESULTS ───────────────────────────────────────────────── */}
        <section className="results-section rbt-section-gap">
          <div className="container">
            <div className="row align-items-end mb--50">
              <div className="col-lg-7">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">PROJECT RESULTS</span>
                  <h2 className="title color-white">
                    A launch-ready foundation for tokenized property trading.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <p className="description color-white-off mt_md--20 mt_sm--20">
                  The result is a serious digital product that turns property ownership, IPO
                  bidding, broker operations, wallet funding, and stock-style trading into one
                  coherent, scalable ecosystem.
                </p>
              </div>
            </div>

            <div className="results-grid">
              {results.map((item, index) => (
                <div
                  className="result-card"
                  key={item.title}
                  data-sal="slide-up"
                  data-sal-delay={index * 60}
                >
                  <div className="result-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rbt-cta-6 text-center">
                  <div className="content">
                    <span className="subtitle bg-primary-opacity mb--20">BUILD WITH SMARTTECH</span>
                    <h2 className="title">
                      Let&apos;s bring your
                      <br /> vision to life.
                    </h2>
                    <div className="rbt-button-group justify-content-center">
                      <Link className="rbt-btn btn-gradient" href={ROUTE.appointment}>
                        Hire Us
                      </Link>
                      <Link className="rbt-btn btn-border" href={ROUTE.project}>
                        Explore our Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
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

        {/* ── BLOG ──────────────────────────────────────────────────────────── */}
        <section className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape">
          <div className="wrapper pb--50 rbt-index-upper">
            <div className="container">
              <div className="row g-5 align-items-end mb--60">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="section-title text-start">
                    <h2 className="title color-white">Latest News</h2>
                    <p className="description color-white-off mt--20">
                      Notes from our team on product design, software development, AI,
                      blockchain, and launch strategy.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="load-more-btn text-start text-lg-end">
                    <Link
                      className="rbt-btn btn-border icon-hover radius-round color-white-off"
                      href={ROUTE.blog}
                    >
                      <span className="btn-text">See All Articles</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <BlogGridMinimal />
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ────────────────────────────────────────────────────── */}
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

      {/* ─── STYLES ──────────────────────────────────────────────────────────── */}
      <style jsx>{`
        /* ── TOKEN VARIABLES ──────────────────────────────────────────────── */
        .digistate-case-study {
          --case-dark: #09131f;
          --case-ink: #172033;
          --case-muted: #697287;
          --case-orange: #f97316;
          --case-green: #76b82a;
          --case-cream: #fff8ef;
          --case-line: rgba(23, 32, 51, 0.1);
          overflow-x: hidden;
        }

        /* ── HERO ─────────────────────────────────────────────────────────── */
        .digistate-hero {
          position: relative;
          overflow: hidden;
          padding: 150px 0 130px;
          background:
            linear-gradient(115deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 100%) 0 0/48px 48px,
            radial-gradient(circle at 78% 18%, rgba(249,115,22,0.44), transparent 28%),
            radial-gradient(circle at 16% 80%, rgba(118,184,42,0.22), transparent 26%),
            linear-gradient(135deg, #050b14 0%, #101b2e 50%, #241408 100%);
        }
        .digistate-hero:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.07), transparent 12%, transparent 88%, rgba(255,255,255,0.07)),
            radial-gradient(circle at 50% 120%, rgba(255,255,255,0.12), transparent 34%);
          pointer-events: none;
        }
        .digistate-hero:after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 200px;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.1));
          pointer-events: none;
        }

        .hero-content, .hero-visual { position: relative; z-index: 1; }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 36px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(249,115,22,0.18);
          border: 1px solid rgba(249,115,22,0.35);
          color: rgba(249,115,22,1);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .hero-eyebrow i { font-size: 13px; }

        .hero-content h1 {
          margin: 22px 0;
          color: #ffffff;
          font-size: clamp(42px, 5.65vw, 78px);
          line-height: 1.02;
          letter-spacing: -0.01em;
        }
        .hero-content h1 span { display: block; }
        .h1-accent {
          background: linear-gradient(135deg, #f97316 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-content p {
          max-width: 620px;
          color: rgba(255,255,255,0.78);
          font-size: 18px;
          line-height: 1.78;
        }

        .hero-platforms {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }
        .hero-platforms span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          padding: 8px 16px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.88);
          font-size: 13px;
          font-weight: 800;
          backdrop-filter: blur(14px);
        }
        .hero-platforms i { color: #f97316; font-size: 15px; }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 34px;
        }
        .hero-actions :global(.rbt-btn.btn-border) {
          color: #ffffff;
          border-color: rgba(255,255,255,0.42);
        }

        .hero-visual {
          position: relative;
          min-height: 660px;
          perspective: 1200px;
        }

        /* phones */
        .hero-phone {
          overflow: hidden;
          border: 10px solid #0b1220;
          border-radius: 34px;
          background: #0b1220;
          box-shadow: 0 32px 96px rgba(0,0,0,0.38);
          position: absolute;
        }
        .hero-phone :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .hero-phone-large {
          left: 12px;
          bottom: 8px;
          width: 210px;
          height: 455px;
          border-width: 8px;
          transform: rotate(-7deg);
          animation: hero-float-one 6.5s ease-in-out infinite;
        }
        .hero-phone-small {
          right: 14px;
          bottom: 40px;
          width: 170px;
          height: 360px;
          border-width: 7px;
          transform: rotate(8deg);
          animation: hero-float-two 7.4s ease-in-out infinite;
        }

        /* browser mock */
        .hero-browser {
          position: absolute;
          top: 50px;
          right: 8px;
          width: min(620px, 94%);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 36px 115px rgba(0,0,0,0.38);
          transform: rotateY(-10deg) rotateX(4deg) rotateZ(1deg);
          animation: hero-browser-float 8s ease-in-out infinite;
        }
        .hero-browser :global(img) { display: block; width: 100%; height: auto; }

        /* orbit rings */
        .hero-orbit {
          position: absolute;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-orbit-one {
          top: 6px; right: 8px;
          width: 520px; height: 520px;
          animation: hero-spin 22s linear infinite;
        }
        .hero-orbit-two {
          right: 90px; bottom: 14px;
          width: 330px; height: 330px;
          border-color: rgba(249,115,22,0.22);
          animation: hero-spin 16s linear infinite reverse;
        }

        /* floating badges */
        .hero-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 12px;
          background: rgba(255,255,255,0.94);
          box-shadow: 0 22px 65px rgba(0,0,0,0.22);
          backdrop-filter: blur(18px);
          z-index: 4;
        }
        .hero-badge i { color: var(--case-orange); font-size: 20px; flex-shrink: 0; }
        .hero-badge-top { top: 10px; left: -14px; }
        .hero-badge-top span { color: var(--case-ink); font-size: 15px; font-weight: 800; }
        .hero-badge-bottom { bottom: 6px; right: -10px; width: 264px; }
        .hero-badge-bottom strong { display: block; color: var(--case-ink); font-size: 20px; font-weight: 900; }
        .hero-badge-bottom small { display: block; color: var(--case-muted); font-size: 13px; line-height: 1.5; margin-top: 4px; font-weight: 600; }

        /* browser url bar */
        .browser-url {
          flex: 1;
          max-width: 240px;
          height: 25px;
          padding: 0 12px;
          margin-left: 8px;
          border: 1px solid var(--case-line);
          border-radius: 5px;
          background: #fff;
          color: var(--case-muted);
          font-size: 12px;
          display: flex;
          align-items: center;
        }

        /* hero keyframes */
        @keyframes hero-browser-float {
          0%, 100% { transform: rotateY(-10deg) rotateX(4deg) rotateZ(1deg) translate3d(0,0,0); }
          50% { transform: rotateY(-7deg) rotateX(2deg) rotateZ(0deg) translate3d(0,-14px,0); }
        }
        @keyframes hero-float-one {
          0%, 100% { transform: rotate(-7deg) translateY(0); }
          50% { transform: rotate(-4deg) translateY(-16px); }
        }
        @keyframes hero-float-two {
          0%, 100% { transform: rotate(8deg) translateY(0); }
          50% { transform: rotate(5deg) translateY(-12px); }
        }
        @keyframes hero-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── PROJECT FACTS ────────────────────────────────────────────────── */
        .project-facts {
          margin-top: -44px;
          position: relative;
          z-index: 2;
        }
        .facts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          border: 1px solid var(--case-line);
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 20px 65px rgba(23,32,51,0.13);
        }
        .fact-item {
          padding: 30px;
          border-right: 1px solid var(--case-line);
        }
        .fact-item:last-child { border-right: 0; }
        .fact-item span {
          display: block;
          margin-bottom: 10px;
          color: var(--case-muted);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .fact-item strong { color: var(--case-ink); font-size: 17px; line-height: 1.4; }

        /* ── ABOUT BROWSER ────────────────────────────────────────────────── */
        .about-browser {
          overflow: hidden;
          border: 1px solid var(--case-line);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 44px 130px rgba(23,32,51,0.14);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .about-browser:hover {
          transform: translateY(-8px);
          box-shadow: 0 58px 150px rgba(23,32,51,0.18);
        }
        .about-browser .browser-chrome {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 46px;
          padding: 0 18px;
          border-bottom: 1px solid var(--case-line);
          background: #f4f6fa;
        }
        .about-browser :global(img) { display: block; width: 100%; height: auto; }

        /* ── PLATFORM STATS ───────────────────────────────────────────────── */
        .platform-stats {
          background:
            radial-gradient(circle at 10% 50%, rgba(118,184,42,0.1), transparent 35%),
            radial-gradient(circle at 90% 30%, rgba(249,115,22,0.14), transparent 35%),
            linear-gradient(135deg, #070e19, #172033);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 18px;
        }
        .stat-card {
          padding: 32px 20px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          text-align: center;
          transition: transform 0.28s ease, border-color 0.28s ease, background 0.28s ease;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249,115,22,0.35);
          background: rgba(255,255,255,0.08);
        }
        .stat-icon {
          display: inline-flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 12px;
          background: rgba(249,115,22,0.15);
          color: var(--case-orange);
          font-size: 22px;
        }
        .stat-card strong {
          display: block;
          color: #ffffff;
          font-size: clamp(20px, 2.4vw, 30px);
          font-weight: 900;
          line-height: 1.1;
        }
        .stat-card span {
          display: block;
          margin-top: 8px;
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          font-weight: 700;
        }

        /* ── INNOVATION / IPO FLOW ────────────────────────────────────────── */
        .innovation-section { background: #f6f8fb; }
        .innovation-copy { }
        .innovation-copy .subtitle { margin-bottom: 4px; }
        .innovation-copy h2 {
          margin: 18px 0;
          color: var(--case-ink);
          font-size: clamp(30px, 3.8vw, 50px);
          line-height: 1.1;
        }
        .innovation-copy p { color: var(--case-muted); font-size: 17px; line-height: 1.78; }

        .ipo-flow { display: grid; gap: 14px; }
        .flow-step {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 20px 22px;
          border: 1px solid var(--case-line);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 10px 32px rgba(23,32,51,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .flow-step:hover {
          transform: translateX(6px);
          box-shadow: 0 18px 50px rgba(23,32,51,0.1);
        }
        .flow-num {
          display: inline-flex;
          width: 50px;
          height: 50px;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 10px;
          background: rgba(249,115,22,0.12);
          color: var(--case-orange);
          font-size: 18px;
          font-weight: 900;
        }
        .flow-step strong { display: block; color: var(--case-ink); font-size: 19px; font-weight: 800; }
        .flow-step small { display: block; color: var(--case-muted); font-size: 13px; margin-top: 3px; }

        /* ── SCREEN STAGE (MOBILE REEL) ───────────────────────────────────── */
        .screen-stage, .process-section, .results-section {
          overflow: hidden;
          background:
            radial-gradient(circle at 82% 20%, rgba(249,115,22,0.16), transparent 30%),
            linear-gradient(135deg, #070e19, #172033);
        }

        .reel-track {
          position: relative;
          overflow: hidden;
        }
        .reel-track:before, .reel-track:after {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          z-index: 2;
          width: 80px;
          pointer-events: none;
        }
        .reel-track:before { left: 0; background: linear-gradient(90deg, #070e19, transparent); }
        .reel-track:after { right: 0; background: linear-gradient(270deg, #070e19, transparent); }

        .screen-reel {
          display: flex;
          width: max-content;
          gap: 24px;
          padding: 10px 24px 28px;
          animation: scroll-fwd 44s linear infinite;
        }
        .screen-reel:hover { animation-play-state: paused; }
        .screen-reel-rev {
          animation-name: scroll-rev;
          animation-duration: 52s;
        }

        .reel-phone {
          position: relative;
          flex: 0 0 auto;
          width: 236px;
          height: 515px;
          overflow: hidden;
          border: 9px solid #0b1220;
          border-radius: 32px;
          background: #0b1220;
          box-shadow: 0 28px 80px rgba(0,0,0,0.3);
        }
        .reel-phone-sm {
          width: 194px;
          height: 420px;
          border-width: 7px;
          border-radius: 26px;
        }
        .reel-phone :global(img) {
          display: block; width: 100%; height: 100%;
          object-fit: cover; object-position: top;
        }
        .reel-phone span {
          position: absolute;
          left: 14px; bottom: 14px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(8,15,26,0.8);
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
        }

        @keyframes scroll-fwd {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-rev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        /* ── WEB SHOWCASE ─────────────────────────────────────────────────── */
        .web-showcase-section {
          overflow: hidden;
          background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
        }

        .browser-feature {
          overflow: hidden;
          border: 1px solid rgba(23,32,51,0.12);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 24px 74px rgba(23,32,51,0.13);
          margin-bottom: 30px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .browser-feature:hover {
          transform: translateY(-7px);
          box-shadow: 0 36px 100px rgba(23,32,51,0.17);
        }
        .browser-feature :global(img) { display: block; width: 100%; height: auto; }

        .browser-chrome {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 42px;
          padding: 0 18px;
          border-bottom: 1px solid rgba(23,32,51,0.1);
          background: #f4f6fa;
        }
        .browser-chrome span {
          width: 11px; height: 11px;
          border-radius: 50%;
          background: #f97316;
        }
        .browser-chrome span:nth-child(2) { background: #f5c542; }
        .browser-chrome span:nth-child(3) { background: #76b82a; }

        .browser-chrome-sm { height: 28px; padding: 0 12px; gap: 5px; }
        .browser-chrome-sm span { width: 8px; height: 8px; }

        .web-reel-wrap {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          overflow: hidden;
          margin-top: 24px;
        }
        .web-reel-wrap:before, .web-reel-wrap:after {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          z-index: 2;
          width: min(14vw, 160px);
          pointer-events: none;
        }
        .web-reel-wrap:before { left: 0; background: linear-gradient(90deg, #f7f9fc, transparent); }
        .web-reel-wrap:after { right: 0; background: linear-gradient(270deg, #f7f9fc, transparent); }
        .web-reel-wrap-reverse { margin-top: 18px; }
        .web-reel-wrap-reverse:before { background: linear-gradient(90deg, #f7f9fc, transparent); }
        .web-reel-wrap-reverse:after { background: linear-gradient(270deg, #f7f9fc, transparent); }

        .web-screen-reel {
          display: flex;
          width: max-content;
          gap: 24px;
          padding: 10px 24px 28px;
          animation: scroll-fwd 60s linear infinite;
        }
        .web-screen-reel:hover { animation-play-state: paused; }
        .web-screen-reel-reverse { animation-name: scroll-rev; animation-duration: 66s; }

        .web-screen-card {
          position: relative;
          flex: 0 0 auto;
          width: min(680px, calc(100vw - 44px));
          overflow: hidden;
          border: 1px solid rgba(23,32,51,0.11);
          border-radius: 10px;
          background: #ffffff;
          box-shadow: 0 22px 68px rgba(23,32,51,0.11);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }
        .web-screen-card-compact { width: min(560px, calc(100vw - 44px)); }
        .web-screen-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 32px 90px rgba(23,32,51,0.16);
        }
        .web-screen-card :global(img) { display: block; width: 100%; height: auto; }
        .web-screen-card span {
          position: absolute;
          left: 16px; bottom: 16px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(8,15,26,0.82);
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
        }

        /* ── CHALLENGES ───────────────────────────────────────────────────── */
        .challenge-section { background: #f6f8fb; }

        .challenge-panel {
          min-height: 540px;
          padding: 44px;
          border-radius: 16px;
          background:
            linear-gradient(180deg, rgba(8,15,26,0.25) 0%, rgba(8,15,26,0.92) 100%),
            url("/app_images/projects/digistate/mobile app/broker integration.png") center/cover;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .panel-kicker {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .challenge-panel h2 {
          margin: 22px 0 16px;
          color: #ffffff;
          font-size: clamp(26px, 3.4vw, 44px);
          line-height: 1.1;
        }
        .challenge-panel > p {
          color: rgba(255,255,255,0.76);
          font-size: 16px;
          line-height: 1.78;
        }
        .challenge-stats-row {
          display: flex;
          gap: 24px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.16);
        }
        .challenge-stat strong {
          display: block;
          color: var(--case-orange);
          font-size: 38px;
          font-weight: 900;
          line-height: 1;
        }
        .challenge-stat span {
          color: rgba(255,255,255,0.62);
          font-size: 13px;
          font-weight: 700;
        }

        .challenge-list { display: grid; gap: 18px; }
        .challenge-card {
          display: grid;
          grid-template-columns: 58px 1fr;
          gap: 20px;
          padding: 26px;
          border: 1px solid var(--case-line);
          border-left: 3px solid var(--case-orange);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 12px 36px rgba(23,32,51,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .challenge-card:hover {
          transform: translateX(6px);
          box-shadow: 0 20px 58px rgba(23,32,51,0.1);
        }
        .challenge-card-icon {
          display: inline-flex;
          width: 50px;
          height: 50px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(249,115,22,0.1);
          color: var(--case-orange);
          font-size: 20px;
          flex-shrink: 0;
          align-self: start;
          margin-top: 2px;
        }
        .challenge-card-body h4 {
          color: var(--case-ink);
          font-size: 18px;
          margin: 0 0 10px;
          line-height: 1.3;
        }
        .challenge-card-body p {
          margin: 0;
          color: var(--case-muted);
          font-size: 15px;
          line-height: 1.74;
        }

        /* ── DASHBOARD ECOSYSTEM ──────────────────────────────────────────── */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 22px;
        }
        .dashboard-card {
          grid-column: span 2;
          overflow: hidden;
          border: 1px solid var(--case-line);
          border-radius: 16px;
          background: #ffffff;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .dashboard-card:nth-child(4),
        .dashboard-card:nth-child(5) { grid-column: span 3; }
        .dashboard-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 26px 72px rgba(23,32,51,0.12);
        }
        .dashboard-card-screen {
          overflow: hidden;
          border-bottom: 1px solid var(--case-line);
          aspect-ratio: 16 / 9;
        }
        .dashboard-card-screen :global(img) {
          display: block; width: 100%; height: 100%;
          object-fit: cover; object-position: top;
        }
        .dashboard-card-content { padding: 28px; }
        .dashboard-card-content .icon {
          display: inline-flex;
          width: 52px; height: 52px;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border-radius: 10px;
          background: rgba(249,115,22,0.1);
          color: var(--case-orange);
          font-size: 24px;
        }
        .dashboard-card-content h3 { color: var(--case-ink); font-size: 22px; margin-bottom: 10px; }
        .dashboard-card-content p { margin: 0; color: var(--case-muted); font-size: 15px; line-height: 1.74; }

        /* ── MOSAIC ───────────────────────────────────────────────────────── */
        .mosaic-section { background: #fffaf4; }
        .screen-mosaic {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 128px;
          gap: 16px;
        }
        .mosaic-card {
          position: relative;
          overflow: hidden;
          border: 8px solid #0b1220;
          border-radius: 28px;
          background: #0b1220;
          box-shadow: 0 28px 80px rgba(0,0,0,0.28);
        }
        .mosaic-card :global(img) {
          display: block; width: 100%; height: 100%;
          object-fit: cover; object-position: top;
        }
        .mosaic-card span {
          position: absolute;
          left: 14px; bottom: 14px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(8,15,26,0.8);
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
        }
        .card-1 { grid-column: 1 / span 5; grid-row: 1 / span 4; }
        .card-2 { grid-column: 6 / span 4; grid-row: 1 / span 3; }
        .card-3 { grid-column: 10 / span 3; grid-row: 1 / span 4; }
        .card-4 { grid-column: 6 / span 4; grid-row: 4 / span 3; }

        /* ── SOLUTION ─────────────────────────────────────────────────────── */
        .solution-section { background: #f6f8fb; }

        .solution-visual {
          position: relative;
          min-height: 680px;
        }
        .solution-phone {
          position: absolute;
          overflow: hidden;
          border: 10px solid #0b1220;
          border-radius: 34px;
          background: #0b1220;
          box-shadow: 0 32px 96px rgba(0,0,0,0.28);
        }
        .solution-phone :global(img) {
          display: block; width: 100%; height: 100%;
          object-fit: cover; object-position: top;
        }
        .solution-phone-back {
          left: 0; top: 60px;
          width: 255px; height: 555px;
          border-width: 8px;
          border-radius: 30px;
          transform: rotate(-6deg);
          opacity: 0.78;
          z-index: 1;
        }
        .solution-phone-front {
          left: 110px; top: 0;
          width: 295px; height: 635px;
          z-index: 2;
        }
        .solution-badge {
          position: absolute;
          right: 8px; bottom: 52px;
          width: 275px;
          padding: 24px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 24px 72px rgba(23,32,51,0.18);
          z-index: 3;
        }
        .solution-badge small {
          display: block;
          color: var(--case-muted);
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .solution-badge strong {
          display: block;
          color: var(--case-ink);
          font-size: 26px;
          font-weight: 900;
          margin: 8px 0 10px;
        }
        .solution-badge span {
          display: block;
          color: var(--case-muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .solution-list { display: grid; gap: 13px; margin-top: 30px; }
        .solution-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 20px;
          border: 1px solid var(--case-line);
          border-radius: 10px;
          background: #ffffff;
          font-size: 15px;
          font-weight: 700;
          color: var(--case-ink);
          line-height: 1.56;
          transition: border-color 0.25s ease;
        }
        .solution-item:hover { border-color: rgba(249,115,22,0.3); }
        .solution-item-icon {
          flex: 0 0 auto;
          display: inline-flex;
          width: 34px; height: 34px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(118,184,42,0.12);
          color: var(--case-green);
          font-size: 16px;
          margin-top: 1px;
        }

        /* ── PROCESS ──────────────────────────────────────────────────────── */
        .process-section {
          overflow: hidden;
          background:
            radial-gradient(circle at 82% 20%, rgba(249,115,22,0.14), transparent 30%),
            linear-gradient(135deg, #070e19, #172033);
        }
        .process-timeline {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          position: relative;
        }
        .process-step {
          padding: 28px 22px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          transition: background 0.28s ease, border-color 0.28s ease, transform 0.28s ease;
        }
        .process-step:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(249,115,22,0.28);
          transform: translateY(-6px);
        }
        .process-phase-tag {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--case-orange);
          margin-bottom: 12px;
        }
        .process-num {
          font-size: 46px;
          font-weight: 900;
          color: rgba(249,115,22,0.14);
          line-height: 1;
          margin-bottom: 14px;
        }
        .process-icon-wrap {
          display: inline-flex;
          width: 46px; height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: rgba(249,115,22,0.16);
          color: var(--case-orange);
          font-size: 20px;
          margin-bottom: 18px;
        }
        .process-step h3 { color: #ffffff; font-size: 20px; margin-bottom: 10px; line-height: 1.22; }
        .process-step p { margin: 0; color: rgba(255,255,255,0.68); font-size: 14px; line-height: 1.74; }

        /* ── TECH STACK ───────────────────────────────────────────────────── */
        .tech-list { display: flex; flex-wrap: wrap; gap: 12px; }
        .tech-list span {
          padding: 11px 18px;
          border: 1px solid rgba(249,115,22,0.2);
          border-radius: 999px;
          background: rgba(249,115,22,0.07);
          color: #a54305;
          font-size: 14px;
          font-weight: 800;
          transition: background 0.25s, border-color 0.25s;
        }
        .tech-list span:hover {
          background: rgba(249,115,22,0.14);
          border-color: rgba(249,115,22,0.38);
        }

        /* ── RESULTS ──────────────────────────────────────────────────────── */
        .results-section {
          overflow: hidden;
          background:
            radial-gradient(circle at 12% 75%, rgba(118,184,42,0.1), transparent 32%),
            radial-gradient(circle at 85% 18%, rgba(249,115,22,0.14), transparent 30%),
            linear-gradient(135deg, #070e19, #172033);
        }
        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .result-card {
          padding: 32px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          background: rgba(255,255,255,0.05);
          transition: transform 0.28s ease, border-color 0.28s ease, background 0.28s ease;
        }
        .result-card:hover {
          transform: translateY(-7px);
          border-color: rgba(249,115,22,0.28);
          background: rgba(255,255,255,0.08);
        }
        .result-icon {
          display: inline-flex;
          width: 52px; height: 52px;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border-radius: 12px;
          background: rgba(249,115,22,0.15);
          color: var(--case-orange);
          font-size: 22px;
        }
        .result-card h4 { color: #ffffff; font-size: 20px; margin-bottom: 10px; line-height: 1.25; }
        .result-card p { margin: 0; color: rgba(255,255,255,0.68); font-size: 15px; line-height: 1.74; }

        /* ── RESPONSIVE ───────────────────────────────────────────────────── */
        @media (max-width: 1199px) {
          .stats-grid { grid-template-columns: repeat(3, 1fr); }
          .process-timeline { grid-template-columns: repeat(3, 1fr); }
          .results-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 991px) {
          .digistate-hero { padding: 110px 0 88px; }
          .hero-visual { min-height: 600px; }

          .facts-grid { grid-template-columns: repeat(2, 1fr); }
          .fact-item:nth-child(2) { border-right: 0; }
          .fact-item:nth-child(1),
          .fact-item:nth-child(2) { border-bottom: 1px solid var(--case-line); }

          .stats-grid { grid-template-columns: repeat(3, 1fr); }

          .dashboard-grid { grid-template-columns: 1fr; }
          .dashboard-card,
          .dashboard-card:nth-child(4),
          .dashboard-card:nth-child(5) { grid-column: auto; }

          .screen-mosaic {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 320px;
          }
          .card-1, .card-2, .card-3, .card-4 {
            grid-column: auto;
            grid-row: auto;
          }

          .process-timeline { grid-template-columns: repeat(2, 1fr); }
          .results-grid { grid-template-columns: repeat(2, 1fr); }

          .solution-visual { min-height: 560px; }
          .solution-phone-back { width: 200px; height: 430px; }
          .solution-phone-front { left: 90px; width: 240px; height: 520px; }
          .solution-badge { right: 0; width: 230px; }
        }

        @media (max-width: 767px) {
          .digistate-hero { padding: 95px 0 70px; }

          .hero-content h1 { font-size: 36px; }
          .hero-content p { font-size: 16px; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .hero-actions :global(.rbt-btn) { justify-content: center; width: 100%; }

          .hero-visual {
            min-height: auto;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding-bottom: 18px;
          }
          .hero-browser {
            position: relative;
            top: auto; right: auto;
            grid-column: 1 / -1;
            width: 100%;
            transform: none;
            animation: none;
          }
          .hero-orbit { display: none; }
          .hero-phone-large, .hero-phone-small {
            position: relative;
            left: auto; right: auto; bottom: auto;
            width: 100%; height: 340px;
            margin: 0;
            transform: none;
            animation: none;
          }
          .hero-badge-top, .hero-badge-bottom {
            position: static;
            grid-column: 1 / -1;
            width: 100%;
            margin-top: 10px;
          }

          .facts-grid { grid-template-columns: 1fr; }
          .fact-item, .fact-item:nth-child(2) { border-right: 0; border-bottom: 1px solid var(--case-line); }
          .fact-item:last-child { border-bottom: 0; }

          .stats-grid { grid-template-columns: repeat(2, 1fr); }

          .challenge-panel { min-height: auto; padding: 30px; }
          .challenge-card { grid-template-columns: 1fr; }
          .challenge-card-icon { width: 44px; height: 44px; }

          .screen-mosaic { grid-template-columns: 1fr; grid-auto-rows: 420px; }

          .solution-visual { min-height: auto; }
          .solution-phone { position: static; width: 100%; height: auto; transform: none; opacity: 1; }
          .solution-phone-back { display: none; }
          .solution-phone-front { left: auto; top: auto; height: 500px; }
          .solution-badge { position: static; width: 100%; margin-top: 18px; }

          .process-timeline { grid-template-columns: 1fr; }
          .results-grid { grid-template-columns: 1fr; }

          .ipo-flow { gap: 10px; }
          .flow-step { flex-direction: column; align-items: flex-start; }

          .reel-phone { width: 205px; height: 450px; }
          .reel-phone-sm { width: 175px; height: 380px; }
        }

        /* ── PHASE BANNERS ────────────────────────────────────────────────── */
        .phase-banner {
          background: #ffffff;
          border-top: 1px solid rgba(249,115,22,0.18);
          border-bottom: 1px solid rgba(249,115,22,0.18);
        }
        .phase-banner-dark {
          background: #080f1a;
          border-color: rgba(255,255,255,0.1);
        }
        .phase-banner-accent {
          background: linear-gradient(135deg, #0d1927 0%, #1a0e04 100%);
          border-color: rgba(249,115,22,0.3);
        }

        .phase-banner-inner {
          display: flex;
          align-items: center;
          gap: 32px;
          max-width: 1280px;
          margin: 0 auto;
          padding: 34px 32px;
          flex-wrap: wrap;
        }

        .phase-num {
          font-size: 100px;
          font-weight: 900;
          line-height: 1;
          background: linear-gradient(135deg, #f97316 0%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          flex-shrink: 0;
          letter-spacing: -4px;
        }

        .phase-divider {
          width: 2px;
          height: 80px;
          background: linear-gradient(180deg, transparent, rgba(249,115,22,0.5), transparent);
          flex-shrink: 0;
        }

        .phase-meta { flex: 1; min-width: 260px; }
        .phase-meta strong {
          display: block;
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 10px;
          color: var(--case-ink);
        }
        .phase-banner-dark .phase-meta strong,
        .phase-banner-accent .phase-meta strong { color: #ffffff; }
        .phase-meta p {
          margin: 0;
          color: var(--case-muted);
          font-size: 16px;
          line-height: 1.68;
          max-width: 540px;
        }
        .phase-banner-dark .phase-meta p,
        .phase-banner-accent .phase-meta p { color: rgba(255,255,255,0.62); }

        .phase-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-left: auto;
        }
        .phase-tags span {
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(249,115,22,0.25);
          background: rgba(249,115,22,0.08);
          color: #c05c12;
          font-size: 13px;
          font-weight: 800;
        }
        .phase-banner-dark .phase-tags span,
        .phase-banner-accent .phase-tags span {
          border-color: rgba(249,115,22,0.35);
          background: rgba(249,115,22,0.12);
          color: #f97316;
        }

        @media (max-width: 767px) {
          .phase-banner-inner { gap: 18px; padding: 28px 20px; }
          .phase-num { font-size: 64px; }
          .phase-divider { display: none; }
          .phase-tags { margin-left: 0; }
        }
      `}</style>
    </>
  );
};

export default DigistateProject;
