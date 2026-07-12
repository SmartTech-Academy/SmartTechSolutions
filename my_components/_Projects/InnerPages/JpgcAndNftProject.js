import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const jpgcImg = (name) => `/app_images/projects/JPGC/${name}.png`;









/* Image with a shimmering skeleton placeholder while it loads.
   The skeleton span receives the same positioning classes as the img
   so it occupies the exact same spot in the composition. */
const SkelImg = ({ className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <span className={`${className} jpgc-skeleton`} aria-hidden="true"></span>}
      <img
        ref={imgRef}
        className={`${className} jpgc-skel-img${loaded ? " is-loaded" : ""}`}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </>
  );
};







const challenges = [
  {
    title: "Real-World Asset Collateralization",
    body: "Building transparent, verifiable proof-of-reserve that ties every JPGC token to federally-licensed gold mining leases and independently audited, physical reserves.",
  },
  {
    title: "Cross-Chain Interoperability via Wormhole",
    body: "Bridging JPGC across Solana and ethereum networks with Wormhole, so the token trades seamlessly on exchanges like BitMart without fragmenting liquidity or trust.",
  },
  {
    title: "Solana SPL Token Architecture at Scale",
    body: "Engineering a high-throughput SPL token and smart contract layer capable of supporting swaps, staking, and NFT issuance without network congestion.",
  },
  {
    title: "Exchange Listing & Liquidity Integration",
    body: "Integrating with centralized exchange infrastructure and market makers so JPGC has reliable pricing and 24/7 tradability from the moment it lists.",
  },
  {
    title: "NFT-Backed Redemption Mechanics",
    body: "Designing JPG-NFT certificates that cryptographically represent entitlement to future physical gold redemption, with no ambiguity, duplication, or double-claims possible.",
  },
  {
    title: "Regulatory Compliance Across Jurisdictions",
    body: "Aligning with Nigerian SEC and EFCC oversight from day one, while architecting the platform to pursue international regulatory standards as it expands globally.",
  }
];








const processSteps = [
  {
    num: "01",
    title: "Discovery & Tokenomics Design",
    body: "Modelled the 1:1 gold-backing ratio, supply mechanics, and redemption rules against Japaul's audited gold reserves and mining leases.",
  },
  {
    num: "02",
    title: "Smart Contract & SPL Token Architecture",
    body: "Built the SPL token standard implementation on Solana, alongside Solidity contracts for EVM-side bridge compatibility.",
  },
  {
    num: "03",
    title: "Cross-Chain Bridge Integration",
    body: "Integrated Wormhole to move JPGC across chains, unlocking multi-exchange listing without splitting liquidity.",
  },
  {
    num: "04",
    title: "JPG-NFT Certificate Development",
    body: "Designed and minted NFT certificates on Solana representing verifiable entitlement to future gold redemption and in-game mining rights.",
  },
  {
    num: "05",
    title: "Platform & Exchange API Integration",
    body: "Built the NestJS backend powering swaps, wallet connections, and exchange data feeds behind the JPGold Coin and JPGold NFT dashboards.",
  },
  {
    num: "06",
    title: "Security Audit, Testing & Launch",
    body: (
      <>
        External{" "}
        <a
          href="https://beosin.com/audits/JP_Gold_Coin_202506261010.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          smart contract security audits
        </a>{" "}
        by{" "}
        <a
          href="https://beosin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beosin
        </a>
        {", penetration testing, and a phased rollout ahead of listing on BitMart and major tracking platforms."}
      </>
    ),
  },
];









const craftFeatures = [
  {
    icon: "feather-link",
    title: "Multi-Chain Token Engineering",
    body: "SmartTech Solutions designs and deploys tokens across Solana, Ethereum, BNB Chain, and any EVM or non-EVM network, tailored to each project's liquidity and community.",
  },
  {
    icon: "feather-shield",
    title: "Audit-Ready Smart Contract Design",
    body: "Every contract we ship is built with security-first patterns and independent audit trails baked in from day one, not bolted on after launch.",
  },
  {
    icon: "feather-grid",
    title: "NFT Systems for Any Blockchain",
    body: "From generative art drops to utility-backed certificates like JPG-NFT, we mint and verify on whichever chain fits the use case, Solana, Ethereum, BNB, or beyond.",
  },
  {
    icon: "feather-trending-up",
    title: "Exchange-Ready Launch Engineering",
    body: "Tokenomics, liquidity pooling, and exchange listing integration engineered for real trading volume from day one, not just a whitepaper promise.",
  },
];









const results = [
  {
    icon: "feather-shield",
    title: "Eliminates Physical Gold Storage Risk",
    body: "Investors gain real gold exposure without the cost, security, or logistics of vaulting physical bullion themselves.",
  },
  {
    icon: "feather-trending-up",
    title: "Inflation Hedge With Real Backing",
    body: "A 1:1 gold-backed token pegged to audited physical reserves, value grounded in a real-world asset, not speculation alone.",
  },
  {
    icon: "feather-grid",
    title: "Fractional Gold Ownership",
    body: "JPGC lets holders own fractions of a gram of gold, opening gold investment to far more people than physical bullion ever could.",
  },
  {
    icon: "feather-link",
    title: "DeFi-Ready Utility",
    body: "JPGC integrates with staking, yield farming, and collateral use cases across DeFi protocols, a token built to do more than sit in a wallet.",
  },
  {
    icon: "feather-globe",
    title: "24/7 Global Accessibility",
    body: "Tradable anytime, anywhere via BitMart, unlike traditional gold markets bound by hours and borders.",
  },
  {
    icon: "feather-award",
    title: "Verifiable Ownership via JPG-NFT",
    body: "Blockchain-verified NFT certificates give holders provable, tamper-proof entitlement to future gold redemption starting 2028.",
  },
];






























const JpgcAndNftProject = () => {


  useEffect(() => {
    sal({ threshold: 0.01, once: true });
  }, []);





  return (

    <div className="digi-case-page jpgcnft-theme">
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
                    <span className="digi-hero-tag tag-accent">Web3 · Gold-Backed Token</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    JPGC <span className="digi-gradient">&amp; NFT </span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    A borderless, gold-backed token for global commerce. JPGold Coin
                    (JPGC) pairs real gold reserves with blockchain-verified JPGC Tokens and JPG-NFT
                    certificates. JPGC token is tradable worldwide on BitMart exchange.
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
                      { val: "1",    suffix: "",  label: "Gram of Gold = 1 JPGC" },
                      { val: "∞",  suffix: "", label: "Max Supply"  },
                      { val: "10.5", suffix: "M", label: "Total Token Supply"  },
                      { val: "2028", suffix: "",  label: "Gold Redemption Opens" },
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

                {/* ── Right: two overlapping gold coins ── */}
                <div className="digi-hero-visual" aria-hidden="true">
                  <div className="digi-hv-glow"></div>
                  <div className="jpgcnft-coin-fan">
                    <div className="jpgcnft-coin-fan-glow"></div>
                    <SkelImg className="jpgcnft-coin jpgcnft-coin--back" src={jpgcImg("SmartTechProject_japaul_gold_coin")} alt="" loading="eager" />
                    <SkelImg className="jpgcnft-coin jpgcnft-coin--front" src={jpgcImg("SmartTechProject_japaul_gold_coin")} alt="" loading="eager" />
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
                { icon: "feather-truck", num: "Token Bridge",  label: "WarmHole"    },
                { icon: "feather-layers",      num: "10.5M+", label: "Total Token Supply"    },
                { icon: "feather-link",        num: "Solana", label: "Blockchain Network"    },
                { icon: "feather-repeat",      num: "BitMart",label: "Primary Exchange"      },
                { icon: "feather-award",       num: "2028",   label: "Gold Redemption Opens" },
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
                    { icon: "feather-briefcase",  label: "Industry",      value: "Digital Assets & Real-World Asset (RWA) Tokenization" },
                    { icon: "feather-box",         label: "Product",       value: "Gold-Backed Cryptocurrency & NFT Certificates" },
                    { icon: "feather-link",        label: "Blockchain",    value: "Solana (SPL) and Ethereum (ERC-20)" },
                    { icon: "feather-shield",       label: "Backing",       value: "1:1 Physical Gold Reserves, Independently Audited" },
                    { icon: "feather-repeat",       label: "Listed On",     value: "BitMart, CoinGecko, CoinMarketCap" },
                    { icon: "feather-users",        label: "Team",          value: "7 Blockchain Engineers, 2 Security Auditors, 2 Designers" },
                    { icon: "feather-award",       label: "Delivered By",  value: "SmartTech Solutions", highlight: true },
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
                  A borderless token for global commerce.
                </h2>
                <div className="digi-app-body">
                  <p>
                    JPGold Coin (JPGC) envisions a borderless token that serves as a
                    universal medium for exchange, investment, goods, and services, 
                    empowering global commerce without limits. Each JPGC token represents
                    one gram of physical gold.
                  </p>
                  <p>
                    Alongside the token, JPG-NFT certificates give holders a verifiable,
                    blockchain-based claim to future gold redemption and in-game mining
                    rights, each one uniquely tracked on Solana blockchain. JPGC is listed 
                    on leading global exchange like BitMart, making it easily accessible 
                    for trading worldwide, 24 hours a day.
                  </p>
                  <p>
                    Beyond simple trading, JPGC integrates with DeFi protocols for
                    staking, yield farming, and collateral, turning a gold-backed token
                    into productive, on-chain capital rather than a static store of value.
                  </p>
                </div>
                <div className="digi-stack">
                  {["Rust", "Solidity", "NestJS", "WarmHole"].map((t, i) => (
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
                <div className="jpgcnft-app-visual">
                  <div className="digi-app-visual-glow jpgcnft-app-glow" aria-hidden="true"></div>

                  <SkelImg className="jpgcnft-app-coin jpgcnft-app-coin--back" src={jpgcImg("SmartTechProject_japaul_gold_coin")} alt="" loading="lazy" />
                  <SkelImg className="jpgcnft-app-coin jpgcnft-app-coin--front" src={jpgcImg("SmartTechProject_japaul_gold_coin")} alt="JPGold Coin (JPGC)" loading="lazy" />
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
                  Building a gold-backed token that trades like a native crypto asset.
                </h2>
                <p className="digi-challenge-lead">
                  JPGC combined real-world asset auditing, cross-chain bridging, both 
                  Token and NFT backed redemption rights, and multi-jurisdiction compliance 
                  into one coherent product. These were the six hardest problems we solved.
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


















        {/* ── THE PROCESS ──────────────────────────────────────────── */}
        <section className="rbt-section-gap digi-process-section">
          <div className="container">
            <div className="row align-items-end mb--60">
              <div className="col-lg-7" data-sal="slide-right" data-sal-duration="700">
                <span className="digi-kicker">The Process</span>
                <h2 className="digi-process-heading">
                  How we engineered a gold-backed token from reserve to exchange.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took JPGC from tokenomics design to a live,
                  exchange-listed asset, each stage building on the last with zero
                  shortcuts in security or compliance.
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
                  World-class token and NFT engineering.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    JPGC isn&apos;t a website or an app, it&apos;s a living financial
                    instrument. That changes what &quot;design&quot; means: every decision,
                    from tokenomics to contract architecture, has to hold up under real
                    money and real scrutiny, on-chain, forever.
                  </p>
                  <p>
                    SmartTech Solutions brings the same rigour to every crypto engagement, 
                    whether it&apos;s a Solana SPL token, an EVM smart contract, or an NFT
                    collection on a chain we haven&apos;t touched yet. We build tokens and
                    NFTs for any blockchain, calibrated for real trading, real holders, and
                    real regulatory scrutiny.
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
                    <strong>JPG-NFT</strong>
                    <span>Gold Redemption Certificate</span>
                    <small>Verified on Solana</small>
                  </div>
                  <div className="jpgcnft-goldbar-wrap">
                    <div className="jpgcnft-goldbar">
                      <div className="jpgcnft-goldbar-top"></div>
                      <div className="jpgcnft-goldbar-front">
                        <div className="jpgcnft-goldbar-shine"></div>
                        <div className="jpgcnft-goldbar-stamp">
                          <span>999.9</span>
                          <small>FINE GOLD</small>
                        </div>
                      </div>
                    </div>
                    <div className="jpgcnft-goldbar-reflection"></div>
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Gold Backed NFT</strong>
                    <span>Physical Gold Reserves</span>
                    <small>Redeemable From 2028</small>
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
                  A gold-backed token, live and trading on global exchange like BitMart.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions architected, designed, and shipped the complete
                    JPGold Coin ecosystem, from the SPL token and cross-chain bridge to
                    the JPG-NFT certificate system and exchange-facing platform.
                  </p>
                  <p>
                    The result is a serious, production-grade digital asset that gives
                    physical gold the liquidity, accessibility, and programmability of a
                    native crypto token, without asking holders to give up what backs it.
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
                      Notes from our team on blockchain engineering, tokenomics, NFT design, and launch strategy.
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


    </div>

  );

};

export default JpgcAndNftProject;
