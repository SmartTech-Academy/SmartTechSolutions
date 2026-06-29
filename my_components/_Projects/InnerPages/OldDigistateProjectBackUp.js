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

const projectFacts = [
  { label: "Industry", value: "Real Estate, Blockchain, FinTech" },
  { label: "Product", value: "Real Estate Assets Tokenization and Exchange" },
  { label: "Platforms", value: "Web App, Mobile App, Admin Dashboards" },
  { label: "Blockchain", value: "ERC-721 NFTs, eNaira Token, DAO Governance" },
];

const techStack = [
  "NextJS",
  "NestJS",
  "React Native",
  "Solidity",
  "ERC-721",
  "Proxy Pattern",
  "Java",
  "MySQL",
  "Redis",
];

const dashboardCards = [
  {
    title: "Homeowners",
    text: "Property owners onboard assets, upload documents, pass multi-level verification, receive IPO bids, and approve offers before an asset becomes tradable stock.",
    icon: "feather-home",
  },
  {
    title: "Investors",
    text: "Verified investors browse tokenized assets, monitor watchlists, integrate brokers, fund wallets with eNaira, and buy or sell fractional ownership positions.",
    icon: "feather-trending-up",
  },
  {
    title: "Brokers",
    text: "Broker institutions support property onboarding, IPO readiness, investor trading, and permission-based stock management for clients who approve broker activity.",
    icon: "feather-briefcase",
  },
  {
    title: "Verification Teams",
    text: "Operational reviewers evaluate property data, ownership documents, valuations, and approval stages before assets move into the IPO pipeline.",
    icon: "feather-check-circle",
  },
  {
    title: "Exchange Admin",
    text: "Market operators manage listed assets, stock activity, escrow states, transaction visibility, governance activity, and the broader exchange ecosystem.",
    icon: "feather-grid",
  },
];

const challenges = [
  "Real estate is naturally illiquid, so the platform needed to convert tied-down property value into tradable digital positions without making the product feel speculative or unsafe.",
  "Homeowners required a serious onboarding journey: property information, ownership documents, valuation, verification, four approval levels, IPO bidding, and IPO closure.",
  "Investors needed a familiar trading experience while still dealing with Web3 realities such as tokenized assets, wallet funding, eNaira conversion, escrow, and on-chain history.",
  "Broker workflows had to be powerful but permission-based, so institutions could help homeowners and investors without weakening user control.",
];

const processSteps = [
  {
    number: "01",
    title: "Business Analysis",
    text: "Mapped the real estate, investor, broker, IPO, and exchange operations into one product model.",
  },
  {
    number: "02",
    title: "Role Architecture",
    text: "Defined the five dashboards, permissions, approval gates, transaction states, and broker relationships.",
  },
  {
    number: "03",
    title: "Product Design",
    text: "Designed mobile and web experiences that make property discovery, bidding, wallet funding, and trading understandable.",
  },
  {
    number: "04",
    title: "Blockchain Engineering",
    text: "Implemented property NFTs, fractional ownership logic, dynamic pricing, eNaira funding flow, DAO governance, and upgradeable contracts.",
  },
  {
    number: "05",
    title: "Testing and Launch Prep",
    text: "Validated exchange behavior, approval flows, wallet interactions, order states, broker permissions, and responsive product screens.",
  },
];

const solutionPillars = [
  "ERC-721 NFTs represent each property as a traceable digital asset.",
  "Fractional ownership allows multiple investors to hold positions in a property-backed asset.",
  "Dynamic pricing responds to demand, supply, IPO bids, and secondary exchange activity.",
  "DAO-based governance records decisions and supports transparent asset operations.",
  "Proxy pattern architecture keeps the contract system upgradeable as product needs evolve.",
  "On-chain activity tracking preserves bidding history, ownership movement, and governance decisions.",
];

const screenReel = [
  { name: "stock page", label: "Stock details" },
  { name: "buy and sell stock", label: "Buy and sell" },
  { name: "broker integration", label: "Broker integration" },
  { name: "portfolio", label: "Portfolio" },
  { name: "invest screen", label: "Orders" },
  { name: "p2p", label: "P2P market" },
];

const mosaicScreens = [
  { name: "auth screen", label: "Investor onboarding" },
  { name: "broker review", label: "Broker reviews" },
  { name: "order screens", label: "Order management" },
  { name: "profile settings", label: "Profile settings" },
];

const webScreens = [
  {
    name: "homepage",
    label: "Marketing homepage",
    width: 1800,
    height: 1314,
  },
  {
    name: "exchange page",
    label: "Exchange marketplace",
    width: 1762,
    height: 1222,
  },
  {
    name: "investor dashboard",
    label: "Investor dashboard",
    width: 1782,
    height: 1242,
  },
  {
    name: "buy and sell",
    label: "Buy and sell workflow",
    width: 2070,
    height: 1442,
  },
];

const adminWebScreens = [
  {
    name: "Digistate admin dashboard",
    label: "Admin overview",
    width: 1646,
    height: 1298,
  },
  {
    name: "homeowner page",
    label: "Homeowner operations",
    width: 1800,
    height: 1412,
  },
  {
    name: "broker page",
    label: "Broker management",
    width: 1800,
    height: 1380,
  },
  {
    name: "transactions page",
    label: "Transaction monitoring",
    width: 1626,
    height: 1130,
  },
];

const webShowcaseScreens = [...webScreens, ...adminWebScreens];

const results = [
  "A full real estate asset exchange where tokenized properties can move from onboarding to IPO, stock creation, and secondary market trading.",
  "A web and mobile product ecosystem covering homeowners, investors, brokers, verification teams, and exchange administration.",
  "eNaira wallet funding flow that lets users convert fiat value into a blockchain-backed balance for platform trading.",
  "A transparent asset layer with property NFTs, fractional ownership, dynamic pricing, governance records, and bidding history.",
  "A user experience that turns a complex Web3 investment model into understandable flows for non-technical property owners and investors.",
  "A scalable foundation for future market expansion, broker partnerships, governance features, and new asset classes.",
];

const DigistateProject = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      <main className="rbt-main-wrapper digistate-case-study">
        <section className="digistate-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="hero-content" data-sal="slide-up" data-sal-duration="700">
                  <span className="subtitle">DIGISTATE CASE STUDY</span>
                  <h1>
                    <span>Making real estate</span>
                    <span>liquid through</span>
                    <span>tokenized trading.</span>
                  </h1>
                  <p>
                    Digistate is a real estate tokenization exchange built to
                    unlock tied-down property value. Homeowners can onboard
                    properties into an IPO workflow, while verified investors
                    trade fractional property-backed assets with eNaira-powered
                    wallets, brokers, and on-chain transparency.
                  </p>
                  <div className="hero-platforms" aria-label="Digistate platform coverage">
                    <span>
                      <i className="feather-monitor"></i>
                      Web App
                    </span>
                    <span>
                      <i className="feather-smartphone"></i>
                      Mobile App
                    </span>
                    <span>
                      <i className="feather-shield"></i>
                      Admin Dashboards
                    </span>
                  </div>
                  <div className="hero-actions">
                    <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Start a Project</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                    <Link className="rbt-btn btn-border hover-icon-reverse" href={ROUTE.project}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">View More Work</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
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
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <Image
                      src={webImage("investor dashboard")}
                      width={1782}
                      height={1242}
                      priority
                      alt="Digistate web app investor dashboard"
                    />
                  </div>

                  <div className="hero-phone hero-phone-large">
                    <Image
                      src={appImage("stock page")}
                      width={610}
                      height={1644}
                      priority
                      alt="Digistate stock detail screen"
                    />
                  </div>
                  <div className="hero-phone hero-phone-small">
                    <Image
                      src={appImage("portfolio")}
                      width={500}
                      height={1196}
                      priority
                      alt="Digistate investor portfolio screen"
                    />
                  </div>

                  <div className="hero-metric hero-metric-top">
                    <small>Asset Flow</small>
                    <strong>IPO to Exchange</strong>
                  </div>
                  <div className="floating-market-card">
                    <span>Cross-platform Build</span>
                    <strong>Web + Mobile</strong>
                    <small>Asset bids, escrow, trading, and governance tracked end to end.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">ABOUT THE PRODUCT</span>
                  <h2 className="title">
                    A complete exchange for property-backed digital assets.
                  </h2>
                </div>
              </div>
              <div className="col-lg-7">
                <p className="description has-medium-font-size">
                  Digistate was created around a simple but ambitious idea:
                  property wealth should not stay locked because traditional
                  real estate is slow to sell, expensive to enter, and difficult
                  to divide. The platform converts verified properties into
                  tokenized assets that can be bid on, fractionalized, held, and
                  traded.
                </p>
                <p className="description has-medium-font-size mt--20">
                  SmartTech Solutions designed the product across five
                  dashboards and delivered the trading foundation behind it:
                  homeowner onboarding, investor trading, broker operations,
                  verification workflows, exchange controls, eNaira funding, and
                  blockchain-backed asset records.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="innovation-section rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="innovation-copy">
                  <span className="subtitle bg-primary-opacity">INNOVATIVE EXCHANGE MODEL</span>
                  <h2>From property onboarding to IPO, then live market trading.</h2>
                  <p>
                    Homeowners upload properties and documents for valuation.
                    After four approval levels, the asset enters an IPO state
                    where bids are received, selected, and closed. Once the IPO
                    closes, the asset becomes stock on the exchange and market
                    activity begins to determine its new price.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ipo-flow">
                  {["Onboard", "Verify", "IPO Bids", "List Stock", "Trade"].map((item, index) => (
                    <div className="flow-step" key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="screen-stage rbt-section-gap">
          <div className="container">
            <div className="row mb--50">
              <div className="col-lg-8">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">APP SHOWCASE</span>
                  <h2 className="title color-white">
                    Investor, broker, order, and exchange flows in one mobile experience.
                  </h2>
                </div>
              </div>
              <div className="col-lg-4">
                <p className="description color-white-off mt_md--20 mt_sm--20">
                  The interface uses familiar trading patterns while introducing
                  property details, broker approvals, escrow summaries, and
                  eNaira-backed account activity.
                </p>
              </div>
            </div>
          </div>

          <div className="screen-reel" aria-label="Digistate mobile application screens">
            {[...screenReel, ...screenReel].map((screen, index) => (
              <div className="reel-phone" key={`${screen.name}-${index}`}>
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
        </section>

        <section className="web-showcase-section rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-end mb--50">
              <div className="col-lg-7">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">WEB APP SHOWCASE</span>
                  <h2 className="title">
                    Desktop screens for the same exchange ecosystem.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <p className="description has-medium-font-size mt_md--20 mt_sm--20">
                  The Digistate web app gives investors, homeowners, brokers,
                  and administrators the room they need to review assets,
                  manage operations, monitor transactions, and trade from a
                  full desktop interface.
                </p>
              </div>
            </div>

            <div className="browser-feature" data-sal="slide-up" data-sal-duration="700">
              <div className="browser-chrome" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Image
                src={webImage("exchange page")}
                width={1762}
                height={1222}
                alt="Digistate web app exchange marketplace screen"
              />
            </div>

            <div className="web-reel-wrap" aria-label="Digistate web application screens">
              <div className="web-screen-reel">
                {[...webShowcaseScreens, ...webShowcaseScreens].map((screen, index) => (
                  <div className="web-screen-card" key={`${screen.name}-web-${index}`}>
                    <div className="browser-chrome" aria-hidden="true">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <Image
                      src={webImage(screen.name)}
                      width={screen.width}
                      height={screen.height}
                      alt={`Digistate web app ${screen.label} screen`}
                    />
                    <span>{screen.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="web-reel-wrap web-reel-wrap-reverse" aria-label="Additional Digistate web app screens">
              <div className="web-screen-reel web-screen-reel-reverse">
                {[...webShowcaseScreens.slice().reverse(), ...webShowcaseScreens.slice().reverse()].map((screen, index) => (
                  <div className="web-screen-card web-screen-card-compact" key={`${screen.name}-reverse-${index}`}>
                    <div className="browser-chrome" aria-hidden="true">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <Image
                      src={webImage(screen.name)}
                      width={screen.width}
                      height={screen.height}
                      alt={`Digistate web app ${screen.label} screen`}
                    />
                    <span>{screen.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="challenge-section rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="challenge-panel" data-sal="slide-right" data-sal-duration="700">
                  <span className="panel-kicker">OUR CHALLENGE</span>
                  <h2>Make a regulated, multi-role Web3 exchange feel reliable.</h2>
                  <p>
                    Digistate was not a simple marketplace. It combined property
                    verification, IPO mechanics, exchange trading, wallet
                    funding, broker permissions, governance, and on-chain asset
                    records into one product.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="challenge-list">
                  {challenges.map((item, index) => (
                    <div className="challenge-item" key={item} data-sal="slide-up" data-sal-delay={index * 80}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row mb--50">
              <div className="col-lg-8 offset-lg-2">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">DASHBOARD ECOSYSTEM</span>
                  <h2 className="title">Five dashboards built for five very different jobs.</h2>
                  <p className="description has-medium-font-size mt--20">
                    The product needed each user type to feel like the platform
                    was built for their job, while still sharing one secure
                    exchange engine underneath.
                  </p>
                </div>
              </div>
            </div>

            <div className="dashboard-grid">
              {dashboardCards.map((item, index) => (
                <div className="dashboard-card" key={item.title} data-sal="slide-up" data-sal-delay={index * 70}>
                  <div className="icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="admin-web-strip" aria-label="Digistate dashboard desktop screens">
              <div className="admin-screen-reel">
                {[...adminWebScreens, ...adminWebScreens].map((screen, index) => (
                  <div className="admin-web-card" key={`${screen.name}-admin-${index}`}>
                    <Image
                      src={webImage(screen.name)}
                      width={screen.width}
                      height={screen.height}
                      alt={`Digistate web app ${screen.label} screen`}
                    />
                    <span>{screen.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mosaic-section rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">PRODUCT MOMENTS</span>
                  <h2 className="title">Screens that turn heavy financial actions into clear steps.</h2>
                  <p className="description has-medium-font-size mt--20">
                    We used clear cards, prominent calls to action, status
                    labels, order summaries, and concise property information so
                    users always know what they are doing and what happens next.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="screen-mosaic">
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

        <section className="process-section rbt-section-gap">
          <div className="container">
            <div className="row mb--50">
              <div className="col-lg-7">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">THE PROCESS</span>
                  <h2 className="title color-white">
                    A product process shaped around operations, users, and blockchain truth.
                  </h2>
                </div>
              </div>
            </div>

            <div className="process-grid">
              {processSteps.map((item) => (
                <div className="process-card" key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="solution-section rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="solution-showcase">
                  <div className="solution-phone">
                    <Image
                      src={appImage("buy and sell stock")}
                      width={610}
                      height={1440}
                      alt="Digistate buy and sell stock screen"
                    />
                  </div>
                  <div className="solution-card">
                    <small>Smart contract layer</small>
                    <strong>ERC-721 + DAO</strong>
                    <span>Property identity, governance decisions, bids, and ownership events stay traceable.</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">THE SOLUTION</span>
                  <h2 className="title">A unified real estate exchange with Web3 rails under the hood.</h2>
                  <p className="description has-medium-font-size mt--20">
                    We created the product architecture, app experience, wallet
                    logic, and blockchain model required to move assets from
                    verified properties into tradable positions. The complexity
                    stays in the system; the user sees guided actions.
                  </p>
                </div>
                <div className="solution-list">
                  {solutionPillars.map((item) => (
                    <div key={item}>
                      <i className="feather-check"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stack-section rbt-section-gap bg-color-white">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">TECH STACK</span>
                  <h2 className="title">Built for mobile usage, exchange speed, and upgradeable contracts.</h2>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="tech-list">
                  {techStack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  The result is a serious digital product that turns property
                  ownership, IPO bidding, broker operations, wallet funding, and
                  stock-style trading into one coherent ecosystem.
                </p>
              </div>
            </div>

            <div className="results-list">
              {results.map((item) => (
                <div className="result-item" key={item}>
                  <i className="feather-arrow-right"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

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

export default DigistateProject;
