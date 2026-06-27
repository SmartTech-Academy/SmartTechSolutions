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
  { label: "Product", value: "Real Estate Tokenization Exchange" },
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

      <style jsx>{`
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

        .digistate-hero {
          position: relative;
          overflow: hidden;
          padding: 150px 0 125px;
          background:
            linear-gradient(115deg, rgba(255, 255, 255, 0.06) 0 1px, transparent 1px 100%) 0 0/48px 48px,
            radial-gradient(circle at 78% 18%, rgba(249, 115, 22, 0.42), transparent 28%),
            radial-gradient(circle at 16% 80%, rgba(118, 184, 42, 0.22), transparent 26%),
            linear-gradient(135deg, #050b14 0%, #101b2e 50%, #241408 100%);
        }

        .digistate-hero:after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 180px;
          background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.11));
          pointer-events: none;
        }

        .digistate-hero:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.08), transparent 12%, transparent 88%, rgba(255, 255, 255, 0.08)),
            radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.13), transparent 34%);
          pointer-events: none;
        }

        .hero-content,
        .hero-visual {
          position: relative;
          z-index: 1;
        }

        .hero-content .subtitle,
        .panel-kicker {
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

        .hero-content h1 {
          margin: 24px 0;
          color: #ffffff;
          font-size: clamp(42px, 5.65vw, 78px);
          line-height: 1.02;
          letter-spacing: 0;
        }

        .hero-content h1 span {
          display: block;
        }

        .hero-content p {
          max-width: 650px;
          color: rgba(255, 255, 255, 0.78);
          font-size: 19px;
          line-height: 1.75;
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
          padding: 8px 14px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.88);
          font-size: 13px;
          font-weight: 800;
          backdrop-filter: blur(14px);
        }

        .hero-platforms i {
          color: #f97316;
          font-size: 16px;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 34px;
        }

        .hero-actions :global(.rbt-btn.btn-border) {
          color: #ffffff;
          border-color: rgba(255, 255, 255, 0.42);
        }

        .hero-visual {
          min-height: 660px;
          perspective: 1200px;
        }

        .hero-phone,
        .solution-phone,
        .reel-phone,
        .mosaic-card {
          overflow: hidden;
          border: 10px solid #0b1220;
          border-radius: 34px;
          background: #0b1220;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.32);
        }

        .hero-phone :global(img),
        .solution-phone :global(img),
        .reel-phone :global(img),
        .mosaic-card :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .hero-phone-large {
          position: absolute;
          left: 16px;
          bottom: 6px;
          width: 216px;
          height: 462px;
          border-width: 8px;
          transform: rotate(-7deg);
          animation: hero-float-one 6.5s ease-in-out infinite;
        }

        .hero-phone-small {
          position: absolute;
          right: 16px;
          bottom: 42px;
          width: 172px;
          height: 350px;
          border-width: 7px;
          transform: rotate(8deg);
          animation: hero-float-two 7.4s ease-in-out infinite;
        }

        .hero-browser {
          position: absolute;
          top: 56px;
          right: 10px;
          width: min(620px, 94%);
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 34px 110px rgba(0, 0, 0, 0.36);
          transform: rotateY(-10deg) rotateX(4deg) rotateZ(1deg);
          transform-origin: center;
          animation: hero-browser-float 8s ease-in-out infinite;
        }

        .hero-browser :global(img) {
          display: block;
          width: 100%;
          height: auto;
        }

        .hero-orbit {
          position: absolute;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-orbit-one {
          top: 8px;
          right: 10px;
          width: 520px;
          height: 520px;
          animation: hero-spin 22s linear infinite;
        }

        .hero-orbit-two {
          right: 96px;
          bottom: 18px;
          width: 330px;
          height: 330px;
          border-color: rgba(249, 115, 22, 0.22);
          animation: hero-spin 16s linear infinite reverse;
        }

        .hero-metric {
          position: absolute;
          top: 8px;
          left: 68px;
          width: 190px;
          padding: 18px 20px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
          backdrop-filter: blur(16px);
        }

        .hero-metric small {
          display: block;
          color: var(--case-muted);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .hero-metric strong {
          display: block;
          margin-top: 5px;
          color: var(--case-ink);
          font-size: 20px;
          line-height: 1.15;
        }

        .floating-market-card {
          position: absolute;
          right: 132px;
          bottom: 0;
          width: 270px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.93);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
        }

        @keyframes hero-browser-float {
          0%,
          100% {
            transform: rotateY(-10deg) rotateX(4deg) rotateZ(1deg) translate3d(0, 0, 0);
          }

          50% {
            transform: rotateY(-7deg) rotateX(2deg) rotateZ(0deg) translate3d(0, -14px, 0);
          }
        }

        @keyframes hero-float-one {
          0%,
          100% {
            transform: rotate(-7deg) translateY(0);
          }

          50% {
            transform: rotate(-4deg) translateY(-16px);
          }
        }

        @keyframes hero-float-two {
          0%,
          100% {
            transform: rotate(8deg) translateY(0);
          }

          50% {
            transform: rotate(5deg) translateY(-12px);
          }
        }

        @keyframes hero-spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .floating-market-card span,
        .floating-market-card small {
          display: block;
          color: var(--case-muted);
          font-size: 13px;
          font-weight: 700;
        }

        .floating-market-card strong {
          display: block;
          margin: 8px 0;
          color: var(--case-ink);
          font-size: 26px;
          line-height: 1.16;
        }

        .project-facts {
          margin-top: -42px;
          position: relative;
          z-index: 2;
        }

        .facts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          border: 1px solid var(--case-line);
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 18px 60px rgba(23, 32, 51, 0.12);
        }

        .fact-item {
          padding: 28px;
          border-right: 1px solid var(--case-line);
        }

        .fact-item:last-child {
          border-right: 0;
        }

        .fact-item span {
          display: block;
          margin-bottom: 8px;
          color: var(--case-muted);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .fact-item strong {
          color: var(--case-ink);
          font-size: 18px;
          line-height: 1.35;
        }

        .innovation-section,
        .challenge-section,
        .solution-section {
          background: #f6f8fb;
        }

        .innovation-copy h2 {
          margin: 18px 0;
          color: var(--case-ink);
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.08;
        }

        .innovation-copy p {
          color: var(--case-muted);
          font-size: 18px;
          line-height: 1.75;
        }

        .ipo-flow {
          display: grid;
          gap: 16px;
        }

        .flow-step {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px;
          border: 1px solid var(--case-line);
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 12px 36px rgba(23, 32, 51, 0.06);
        }

        .flow-step span {
          display: inline-flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(249, 115, 22, 0.11);
          color: var(--case-orange);
          font-weight: 900;
        }

        .flow-step strong {
          color: var(--case-ink);
          font-size: 22px;
        }

        .screen-stage,
        .process-section,
        .results-section {
          overflow: hidden;
          background:
            radial-gradient(circle at 82% 20%, rgba(249, 115, 22, 0.18), transparent 30%),
            linear-gradient(135deg, #070e19, #172033);
        }

        .screen-reel {
          display: flex;
          width: max-content;
          gap: 28px;
          padding: 10px 28px 28px;
          animation: digistate-scroll 42s linear infinite;
        }

        .screen-reel:hover {
          animation-play-state: paused;
        }

        .reel-phone {
          width: 240px;
          height: 520px;
          flex: 0 0 auto;
          position: relative;
        }

        .reel-phone span,
        .mosaic-card span {
          position: absolute;
          left: 16px;
          bottom: 16px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(8, 15, 26, 0.78);
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
        }

        @keyframes digistate-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .challenge-panel {
          min-height: 500px;
          padding: 44px;
          border-radius: 8px;
          background:
            linear-gradient(180deg, rgba(8, 15, 26, 0.2), rgba(8, 15, 26, 0.88)),
            url("/app_images/projects/digistate/mobile app/broker integration.png") top center/cover;
        }

        .challenge-panel h2 {
          margin: 22px 0;
          color: #ffffff;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.08;
        }

        .challenge-panel p {
          margin: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 18px;
          line-height: 1.75;
        }

        .web-showcase-section {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
        }

        .browser-feature,
        .web-screen-card,
        .admin-web-card {
          overflow: hidden;
          border: 1px solid rgba(23, 32, 51, 0.12);
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 22px 70px rgba(23, 32, 51, 0.12);
        }

        .browser-feature {
          margin-bottom: 28px;
          transform: translateZ(0);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .browser-feature:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 90px rgba(23, 32, 51, 0.16);
        }

        .browser-chrome {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 42px;
          padding: 0 18px;
          border-bottom: 1px solid rgba(23, 32, 51, 0.1);
          background: #f4f6fa;
        }

        .browser-chrome span {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #f97316;
        }

        .browser-chrome span:nth-child(2) {
          background: #f5c542;
        }

        .browser-chrome span:nth-child(3) {
          background: #76b82a;
        }

        .browser-feature :global(img),
        .web-screen-card :global(img),
        .admin-web-card :global(img) {
          display: block;
          width: 100%;
          height: auto;
        }

        .web-reel-wrap,
        .admin-web-strip {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          overflow: hidden;
        }

        .web-reel-wrap {
          margin-top: 26px;
        }

        .web-reel-wrap:before,
        .web-reel-wrap:after,
        .admin-web-strip:before,
        .admin-web-strip:after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          z-index: 2;
          width: min(14vw, 160px);
          pointer-events: none;
        }

        .web-reel-wrap:before,
        .admin-web-strip:before {
          left: 0;
          background: linear-gradient(90deg, #ffffff, transparent);
        }

        .web-reel-wrap:after,
        .admin-web-strip:after {
          right: 0;
          background: linear-gradient(270deg, #ffffff, transparent);
        }

        .web-reel-wrap-reverse {
          margin-top: 18px;
        }

        .web-screen-reel,
        .admin-screen-reel {
          display: flex;
          width: max-content;
          gap: 26px;
          padding: 10px 26px 28px;
          animation: digistate-web-scroll 58s linear infinite;
        }

        .web-screen-reel:hover,
        .admin-screen-reel:hover {
          animation-play-state: paused;
        }

        .web-screen-reel-reverse {
          animation-name: digistate-web-scroll-reverse;
          animation-duration: 64s;
        }

        .web-screen-card,
        .admin-web-card {
          position: relative;
          flex: 0 0 auto;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .web-screen-card {
          width: min(680px, calc(100vw - 44px));
        }

        .web-screen-card-compact {
          width: min(560px, calc(100vw - 44px));
        }

        .web-screen-card:hover,
        .admin-web-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 82px rgba(23, 32, 51, 0.16);
        }

        .web-screen-card span,
        .admin-web-card span {
          position: absolute;
          left: 18px;
          bottom: 18px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(8, 15, 26, 0.8);
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
        }

        @keyframes digistate-web-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes digistate-web-scroll-reverse {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        .challenge-list {
          display: grid;
          gap: 18px;
        }

        .challenge-item {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 18px;
          padding: 26px;
          border: 1px solid var(--case-line);
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 16px 46px rgba(23, 32, 51, 0.06);
        }

        .challenge-item span {
          color: var(--case-orange);
          font-size: 28px;
          font-weight: 900;
          line-height: 1;
        }

        .challenge-item p {
          margin: 0;
          color: var(--case-muted);
          font-size: 17px;
          line-height: 1.72;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 22px;
        }

        .dashboard-card {
          grid-column: span 2;
          min-height: 285px;
          padding: 30px;
          border: 1px solid var(--case-line);
          border-radius: 8px;
          background: #ffffff;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .dashboard-card:nth-child(4),
        .dashboard-card:nth-child(5) {
          grid-column: span 3;
        }

        .dashboard-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 60px rgba(23, 32, 51, 0.1);
        }

        .dashboard-card .icon {
          display: inline-flex;
          width: 58px;
          height: 58px;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 8px;
          background: rgba(249, 115, 22, 0.11);
          color: var(--case-orange);
          font-size: 28px;
        }

        .dashboard-card h3 {
          color: var(--case-ink);
          font-size: 24px;
        }

        .dashboard-card p {
          margin: 14px 0 0;
          color: var(--case-muted);
          line-height: 1.72;
        }

        .admin-web-strip {
          margin-top: 42px;
        }

        .admin-web-card {
          width: min(410px, calc(100vw - 44px));
          aspect-ratio: 1.32 / 1;
        }

        .admin-screen-reel {
          animation-duration: 46s;
        }

        .admin-web-card :global(img) {
          height: 100%;
          object-fit: cover;
          object-position: top;
        }

        .mosaic-section {
          background: #fffaf4;
        }

        .screen-mosaic {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 128px;
          gap: 18px;
        }

        .mosaic-card {
          position: relative;
          border-width: 8px;
          border-radius: 28px;
        }

        .mosaic-card.card-1 {
          grid-column: 1 / span 5;
          grid-row: 1 / span 4;
        }

        .mosaic-card.card-2 {
          grid-column: 6 / span 4;
          grid-row: 1 / span 3;
        }

        .mosaic-card.card-3 {
          grid-column: 10 / span 3;
          grid-row: 1 / span 4;
        }

        .mosaic-card.card-4 {
          grid-column: 6 / span 4;
          grid-row: 4 / span 3;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .process-card {
          min-height: 300px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
        }

        .process-card span {
          color: var(--case-orange);
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
        }

        .process-card h3 {
          margin: 24px 0 14px;
          color: #ffffff;
          font-size: 22px;
          line-height: 1.22;
        }

        .process-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.7;
        }

        .solution-showcase {
          position: relative;
          min-height: 650px;
        }

        .solution-phone {
          width: min(360px, 78vw);
          height: 620px;
          margin-left: 40px;
          transform: rotate(-3deg);
        }

        .solution-card {
          position: absolute;
          right: 20px;
          bottom: 58px;
          width: 300px;
          padding: 26px;
          border-radius: 8px;
          background: #ffffff;
          box-shadow: 0 24px 70px rgba(23, 32, 51, 0.16);
        }

        .solution-card small,
        .solution-card span {
          display: block;
          color: var(--case-muted);
          font-weight: 700;
        }

        .solution-card strong {
          display: block;
          margin: 8px 0 10px;
          color: var(--case-ink);
          font-size: 30px;
          line-height: 1.1;
        }

        .solution-list {
          display: grid;
          gap: 14px;
          margin-top: 30px;
        }

        .solution-list div {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 18px;
          border: 1px solid var(--case-line);
          border-radius: 8px;
          background: #ffffff;
          color: var(--case-ink);
          font-weight: 700;
          line-height: 1.55;
        }

        .solution-list i {
          flex: 0 0 auto;
          margin-top: 3px;
          color: var(--case-green);
          font-size: 20px;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tech-list span {
          padding: 11px 15px;
          border: 1px solid rgba(249, 115, 22, 0.18);
          border-radius: 999px;
          background: rgba(249, 115, 22, 0.08);
          color: #a54305;
          font-size: 14px;
          font-weight: 800;
        }

        .results-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .result-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.06);
        }

        .result-item i {
          flex: 0 0 auto;
          margin-top: 4px;
          color: var(--case-orange);
          font-size: 22px;
        }

        .result-item span {
          color: rgba(255, 255, 255, 0.8);
          font-size: 17px;
          line-height: 1.62;
        }

        @media (max-width: 1199px) {
          .process-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 991px) {
          .digistate-hero {
            padding: 110px 0 85px;
          }

          .hero-visual {
            min-height: 600px;
          }

          .facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .fact-item:nth-child(2) {
            border-right: 0;
          }

          .fact-item:nth-child(1),
          .fact-item:nth-child(2) {
            border-bottom: 1px solid var(--case-line);
          }

          .dashboard-grid,
          .results-list {
            grid-template-columns: 1fr;
          }

          .dashboard-card,
          .dashboard-card:nth-child(4),
          .dashboard-card:nth-child(5) {
            grid-column: auto;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .admin-web-card {
            aspect-ratio: auto;
          }

          .admin-web-card :global(img) {
            height: auto;
          }

          .screen-mosaic {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 340px;
          }

          .mosaic-card.card-1,
          .mosaic-card.card-2,
          .mosaic-card.card-3,
          .mosaic-card.card-4 {
            grid-column: auto;
            grid-row: auto;
          }
        }

        @media (max-width: 767px) {
          .digistate-hero :global(.container),
          .digistate-hero :global(.row),
          .digistate-hero :global([class*="col-"]) {
            max-width: 100%;
            min-width: 0;
          }

          .hero-content,
          .hero-content p,
          .hero-actions {
            width: calc(100vw - 30px);
            max-width: calc(100vw - 30px);
            min-width: 0;
          }

          .hero-content h1 {
            width: 100%;
            max-width: 100%;
            font-size: 36px;
            overflow-wrap: break-word;
          }

          .hero-content p {
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

          .hero-visual {
            min-height: auto;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
            padding-bottom: 20px;
          }

          .hero-browser {
            position: relative;
            top: auto;
            right: auto;
            grid-column: 1 / -1;
            width: 100%;
            transform: none;
            animation: none;
          }

          .hero-orbit {
            display: none;
          }

          .hero-phone-large,
          .hero-phone-small {
            position: relative;
            left: auto;
            right: auto;
            bottom: auto;
            width: 100%;
            height: 360px;
            margin-left: 0;
            transform: none;
            animation: none;
          }

          .solution-phone {
            width: 100%;
            height: 560px;
            margin-left: 0;
            transform: none;
          }

          .floating-market-card,
          .hero-metric,
          .solution-card {
            position: static;
            grid-column: 1 / -1;
            width: 100%;
            margin-top: 18px;
            transform: none;
          }

          .hero-metric {
            margin-top: 4px;
          }

          .facts-grid {
            grid-template-columns: 1fr;
          }

          .fact-item,
          .fact-item:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid var(--case-line);
          }

          .fact-item:last-child {
            border-bottom: 0;
          }

          .flow-step {
            align-items: flex-start;
            flex-direction: column;
          }

          .reel-phone {
            width: 210px;
            height: 470px;
          }

          .challenge-panel,
          .challenge-item,
          .dashboard-card,
          .process-card,
          .result-item {
            padding: 26px;
          }

          .challenge-item {
            grid-template-columns: 1fr;
          }

          .screen-mosaic,
          .process-grid,
          .results-list {
            grid-template-columns: 1fr;
          }

          .screen-mosaic {
            grid-auto-rows: 430px;
          }

          .solution-showcase {
            min-height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default DigistateProject;
