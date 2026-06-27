import { useEffect } from "react";
import "venobox/dist/venobox.min.css";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";
import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import Newsletter from "@/my_components/Newsletters/Newsletter";
import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";

import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";
import styles from "./SmartTechProjects.module.css";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    number: "01",
    label: "Featured Project",
    name: "Digistate",
    tagline: "Real Estate, Tokenized and Tradable.",
    description:
      "Digistate transforms real estate ownership with a blockchain-powered tokenization, that opens the door to fractional investments, supports asset value growth through market demand, and provides real-time secondary market trading through a custom exchange.",
    industry: "Real Estate · Blockchain · FinTech",
    platform: "Web App · Mobile App · Admin Suite",
    team: "10 Developers · 8 QA Engineers",
    cover: image_url("/app_images/projects/project_1.webp", true),
    heroWeb: image_url("/app_images/projects/digistate/website/exchange page.png", true),
    heroPhone: image_url("/app_images/projects/digistate/mobile app/invest screen.png", true),
    phoneTwo: image_url("/app_images/projects/digistate/mobile app/buy and sell stock.png", true),
    href: ROUTE.digistate_project,
    cta: "View Case Study",
    stack: ["NextJS", "NestJS", "React Native", "Tailwind CSS", "Solidity", "ERC-721", "Java", "Redis", "Android Native", "iOS Native"],
    stats: [
      { value: "5", label: "Dashboards" },
      { value: "3", label: "Platforms" },
      { value: "4", label: "IPO Stages" },
    ],
  },
  {
    id: 2,
    number: "02",
    label: "Web3 · Digital Asset",
    name: "Japaul Gold Coin & NFT",
    tagline: "Gold Backed Crypto & NFT",
    description:
      "JPGold Coin envisions a borderless token that serves as a universal medium for exchange, investment, goods, and services, empowering global commerce without limits. JPGC is listed on leading global exchanges like BitMart, making it easily accessible for trading worldwide.",
    industry: "Web3 · Digital Asset",
    platform: "Solana · Ethereum",
    team: "3 Developers · 5 QA Engineers",
    cover: image_url("/app_images/projects/JPGC/SmartTechProject_japaul_gold_coin.png", true),
    href: "#",
    cta: "View Case Study",
    stack: ["Rust", "Solidity", "NestJS", "WarmHole"],
  },
  {
    id: 3,
    number: "03",
    label: "Haulage · Logitech",
    name: "Lodapoint App",
    tagline: "Connecting Cargo, Empowering Journeys.",
    description:
      "Lodapoint is a digital logistics and ride-hailing platform that connects cargo owners and passengers with a network of verified drivers to seamlessly book, track, and manage on-demand rides and heavy-duty freight shipments.",
    industry: "Logitech",
    platform: "Mobile Application",
    team: "5 Developers & Designers · 7 QA Engineers",
    cover: image_url("/app_images/projects/lodapoint/SmartTechProject_lodapoint_app.png", true),
    href: "#",
    cta: "View Case Study",
    stack: ["React Native", "NestJS", "React Native Maps", "Android Native", "iOS Native"],
  },
  {
    id: 4,
    number: "04",
    label: "Game",
    name: "Vudoo Game",
    tagline: "Kill or be Killed",
    description:
      "Vudoo is an immersive 3D adventure game where players explore mysterious worlds, solve challenges, and battle powerful enemies in a visually stunning environment.",
    industry: "Game",
    platform: "Android · iOS",
    team: "14 Developers & Designers · 9 QA Engineers",
    cover: image_url("/app_images/projects/project_3.webp", true),
    youtubeId: "NrPPx2vn7ak",
    href: "#",
    cta: "View Case Study",
    stack: ["Unity", "c++", "Blender", "Photoshop"],
  },
  {
    id: 5,
    number: "05",
    label: "Web3 · Blockchain",
    name: "JPGC App",
    tagline: "Digital Gold Investments.",
    description:
      "JP GoldCoin Platform, is the official application for the JPGC project. Where investors can buy, manage, and sell their JPGC tokens and JPG-NFT's.",
    industry: "Web3 · Blockchain",
    platform: "Web App · Mobile App · Admin Suite",
    team: "7 Developers & Designers · 12 QA Engineers",
    cover: image_url("/app_images/projects/jpgc app/jpgc_display_picture.png", true),
    href: "#",
    cta: "View Case Study",
    stack: ["NextJS", "NestJS", "ReactJS", "React Native", "Tailwind CSS", "Vite", "Android Native", "iOS Native"],
  },
  {
    id: 6,
    number: "06",
    label: "PropTech · Social",
    name: "Flatshare",
    tagline: "Find Your Perfect Flatmate.",
    description:
      "A social flatmate-matching web platform that connects people looking to share property, with profiles, messaging, listing filters, and location-based search built for speed and trust.",
    industry: "PropTech · Social Platform",
    platform: "Web Application",
    team: "5 Developers & Designers · 5 QA Engineers",
    cover: image_url("/app_images/projects/flatshare/flatshare_display_picture.png", true),
    href: "#",
    cta: "View Case Study",
    stack: ["NextJS", "ReactJS", "Laravel", "Tailwind CSS", "Vite"],
  },
  {
    id: 7,
    number: "07",
    label: "FaithTech · RelTech",
    name: "Disciple Training School (DTS)",
    tagline: "Discipleship Made Simple, Engaging, Transformational.",
    description:
      "The DTS App is a self-paced discipleship platform designed to inspire spiritual growth. Whether you're a student seeking a deeper relationship with God or a tutor passionate about mentoring others, the app provides an engaging learning experience that nurtures faith and transforms lives.",
    industry: "FaithTech · RelTech",
    platform: "Web App · Mobile App · Admin Suite",
    team: "9 Developers & Designers · 16 QA Engineers",
    cover: image_url("/app_images/projects/dts/dts_display_picture.png", true),
    href: "#",
    cta: "View Case Study",
    stack: ["NextJS", "NestJS", "ReactJS", "React Native", "Tailwind CSS", "Vite", "Android Native", "iOS Native"],
  },
  {
    id: 8,
    number: "08",
    label: "Real Estate · PropTech",
    name: "Geoplox",
    tagline: "Find Your Perfect Flatmate.",
    description:
      "Geoplox is a platform that transforms real estate data into clear, actionable intelligence. Hereby creating a single trusted source of truth that helps stakeholders move with confidence and clarity.",
    industry: "Real Estate · PropTech",
    platform: "Web App · Admin Suite",
    team: "6 Developers & Designers · 8 QA Engineers",
    cover: image_url("/app_images/projects/geoplox/geoplox_display_picture.png", true),
    href: "#",
    cta: "View Case Study",
    stack: ["NextJS", "Laravel", "ReactJS", "React Native", "Tailwind CSS", "Vite"],
  },
  {
    id: 9,
    number: "09",
    label: "Advert Video",
    name: "Dano Milk Video",
    tagline: "Sublim 3D Animation & Motion Graphics.",
    description:
      "Milk animation and motion graphics video for Dano, a leading brand in the Nigerian market, showcasing their products and services in a visually captivating and engaging manner.",
    industry: "Advert Video",
    platform: "",
    team: "7 Designers · 5 QA Engineers",
    cover: image_url("/app_images/projects/project_2.webp", true),
    youtubeId: "NrPPx2vn7ak",
    href: "#",
    cta: "View Case Study",
    stack: ["Autodesk Maya", "Blender", "Photoshop", "After Effects", "Premiere Pro"],
  },
  {
    id: 10,
    number: "10",
    label: "FaithTech · RelTech",
    name: "MFM eBooks",
    tagline: "Growing Believers. Transforming Lives.",
    description:
      "Milk animation and motion graphics video for Xabi, a leading brand in the Nigerian market, showcasing their products and services in a visually captivating and engaging manner.",
    industry: "FaithTech · RelTech",
    platform: "Mobile Application",
    team: "4 Designer & Developers · 6 QA Engineers",
    cover: image_url("/app_images/projects/project_2.webp", true),
    href: "#",
    cta: "View Case Study",
    stack: ["React Native", "NestJS", "Android Native", "iOS Native", "Android Native"],
  },
  {
    id: 11,
    number: "11",
    label: "Real Estate · PropTech",
    name: "Xabi",
    tagline: "Modern Real Estate, Reimagined.",
    description:
      "Xabi is an all in one real estate solution, with features like, Wallets, Transactions, Rental Loans, Rental Savings, and property marketplace platform with smart search, listing management, and a mobile-first design built for fast property discovery and transaction flow.",
    industry: "Real Estate · PropTech",
    platform: "Web App · Admin Suite",
    team: "7 Designers &Developers · 11 QA Engineers",
    cover: image_url("/app_images/projects/xabi/xabi_display_picture.png", true),
    href: "#",
    cta: "View Case Study",
    stack: ["NextJS", "Laravel", "ReactJS", "React Native", "Tailwind CSS", "Vite"],
  },
];




// ─── COMPONENT ────────────────────────────────────────────────────────────────

const SmartTechProjects = () => {
  useEffect(() => {
    sal({ threshold: 0.01, once: true });
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({ selector: ".project-video-popup" });
    });
  }, []);

  const featured = projects[0];
  const rest     = projects.slice(1);

  return (
    <main className={`rbt-main-wrapper ${styles.pageRoot}`}>

      {/* ── HERO — rbt-banner-19 template pattern (same as About page) ── */}
      <div className="rbt-banner-area rbt-banner-19">
        <div className="wrapper">
          {/* rbt-banner-activation-2 is required — it provides the vertical padding on .rbt-banner-item */}
          <div className="rbt-banner-activation-2 rbt-arrow-between">
            <div
              className="rbt-banner-item bg_image"
              style={{
                backgroundImage: `linear-gradient(
                  to right,
                  rgba(7, 17, 30, 0.93) 0%,
                  rgba(7, 17, 30, 0.74) 52%,
                  rgba(7, 17, 30, 0.30) 100%
                ), url(${image_url("/app_images/banner/project-bg.webp", true)})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    {/* marginLeft:0 overrides the SCSS "margin-left:auto" that right-aligns .inner */}
                    <div
                      className="inner"
                      style={{ marginLeft: 0, opacity: 1, position: "relative", transform: "none", zIndex: 2 }}
                    >
                      {/* breadcrumb */}
                      <ul className={`page-list ${styles.bannerPageList}`}>
                        <li className="rbt-breadcrumb-item">
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <div className="icon-right">
                            <i className="feather-chevron-right"></i>
                          </div>
                        </li>
                        <li className="rbt-breadcrumb-item active">Projects</li>
                      </ul>

                      <h1
                        className="title"
                        style={{ animationName: "none", color: "#ffffff", opacity: 1, transform: "none" }}
                      >
                        Work That Speaks{" "}
                        <span className="theme-gradient">For Itself.</span>
                      </h1>

                      <p
                        className="description"
                        style={{ animationName: "none", color: "rgba(255,255,255,0.82)", opacity: 1, transform: "none" }}
                      >
                        Blockchain apps &amp; exchanges. Fintech apps. Real estate platforms.
                        2D &amp; 3D animations and games. AI solutions. Every project we ship
                        leaves our studio battle-tested, production-ready, and built to outlast the brief.
                      </p>

                      <div
                        className="bottom-content mt--30 d-flex align-items-center gap-4 flex-wrap"
                        style={{ animationName: "none", opacity: 1, transform: "none" }}
                      >
                        <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text">Start a Project</span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                            <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                          </span>
                        </Link>
                        <Link className="rbt-btn btn-border hover-icon-reverse" href={ROUTE.service}>
                          <span className="icon-reverse-wrapper">
                            <span className="btn-text text-white">View our Services</span>
                            <span className="btn-icon"><i className="feather-arrow-right text-white"></i></span>
                            <span className="btn-icon"><i className="feather-arrow-right text-white"></i></span>
                          </span>
                        </Link>
                      </div>

                      {/* stats bar */}
                      <div className={styles.heroStatBar}>
                        <div className={styles.heroStatItem}>
                          <strong>200+</strong>
                          <span>Products Shipped</span>
                        </div>
                        <div className={styles.heroStatDivider}></div>
                        <div className={styles.heroStatItem}>
                          <strong>410+</strong>
                          <span>Happy Clients</span>
                        </div>
                        <div className={styles.heroStatDivider}></div>
                        <div className={styles.heroStatItem}>
                          <strong>350+</strong>
                          <span>Engineers & Designers</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>







      {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
      <section className={`${styles.projectsHeader} rbt-section-gap`}>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-7" data-sal="slide-right" data-sal-duration="700">
              <span className="subtitle bg-primary-opacity">OUR WORK</span>
              <h2 className={`${styles.sectionTitle} mt--20`}>
                Products we&apos;ve built from
                <span className={styles.titleAccent}> zero to launch.</span>
              </h2>
            </div>
            <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
              <p className={`${styles.sectionDesc} mt_md--20 mt_sm--20`}>
                From blockchain exchanges to real estate platforms, every project
                starts with a sharp brief and ends with a product the client is
                proud to put their name on.
              </p>
            </div>
          </div>
        </div>
      </section>







      {/* ── FEATURED PROJECT ────────────────────────────────────────────── */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.featuredWrap} data-sal="slide-up" data-sal-duration="700">

            {/* visual */}
            <div className={styles.featVisual}>
              <div className={styles.featBrowser}>
                <div className={styles.featBrowserChrome} aria-hidden="true">
                  <span></span><span></span><span></span>
                  {/* <div className={styles.featUrl}>digistate.io</div> */}
                </div>
                <Image src={featured.heroWeb} width={1800} height={1314} alt="Digistate homepage" />
              </div>
              <div className={`${styles.featPhone} ${styles.featPhoneLeft}`}>
                <Image src={featured.heroPhone} width={610} height={1440} alt="Digistate invest screen" />
              </div>
              <div className={`${styles.featPhone} ${styles.featPhoneRight}`}>
                <Image src={featured.phoneTwo} width={610} height={1440} alt="Digistate buy and sell" />
              </div>
              <div className={styles.featLabel}>
                <i className="feather-zap"></i>
                <span>Web + Mobile + Admin · 3 Platforms</span>
              </div>
            </div>

            {/* copy */}
            <div>
              <div className={styles.featEyebrow}>
                <span className={styles.featNumber}>{featured.number}</span>
                <span className={styles.featBadge}>{featured.label}</span>
              </div>
              <h2 className={styles.featTitle}>{featured.name}</h2>
              <p className={styles.featTagline}>{featured.tagline}</p>
              <p className={styles.featDesc}>{featured.description}</p>

              <div className={styles.featMeta}>
                <div className={styles.featMetaRow}>
                  <i className="feather-layers"></i>
                  <span><strong>Industry:</strong> {featured.industry}</span>
                </div>
                <div className={styles.featMetaRow}>
                  <i className="feather-monitor"></i>
                  <span><strong>Platform:</strong> {featured.platform}</span>
                </div>
                <div className={styles.featMetaRow}>
                  <i className="feather-users"></i>
                  <span><strong>Team:</strong> {featured.team}</span>
                </div>
              </div>

              <div className={styles.featStack}>
                {featured.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={featured.href}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">{featured.cta}</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>

          </div>
        </div>
      </section>



      

      {/* ── MORE PROJECTS ───────────────────────────────────────────────── */}
      <section className={`${styles.moreSection} rbt-section-gap`}>
        <div className="container">
          <div className="row mb--50">
            <div className="col-12" data-sal="slide-up" data-sal-duration="600">
              <p className={styles.moreLabel}>More Projects</p>
              <div className={styles.moreDivider}></div>
            </div>
          </div>
          <div className={styles.projectsGrid}>
            {rest.map((project, i) => (
              <div
                className={styles.projectCard}
                key={project.id}
                data-sal="slide-up"
                data-sal-delay={i * 80}
              >
                <div className={styles.projectCardImg}>
                  {project.youtubeId ? (
                    <a
                      className={`project-video-popup ${styles.videoThumb}`}
                      data-vbtype="video"
                      href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                      aria-label={`Watch ${project.name} demo video`}
                    >
                      {/* plain img — YouTube domain doesn't need Next.js optimisation */}
                      <img
                        src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                        alt={`${project.name} video preview`}
                        style={{ display:"block", width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }}
                      />
                      <div className={styles.videoOverlay}>
                        <span className={`rbt-btn rounded-player-2 with-animation ${styles.videoPlayBtn}`}>
                          <span className="play-icon"></span>
                        </span>
                        <span className={styles.videoLabel}>Watch Demo</span>
                      </div>
                    </a>
                  ) : (
                    <Image src={project.cover} width={800} height={520} alt={`${project.name} cover`} />
                  )}
                  <div className={styles.projectCardOverlay}>
                    <span className={styles.projectNumber}>{project.number}</span>
                  </div>
                </div>
                <div className={styles.projectCardBody}>
                  <span className={styles.projectIndustry}>{project.label}</span>
                  <h3>{project.name}</h3>
                  <p className={styles.projectTagline}>{project.tagline}</p>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectStack}>
                    {project.stack.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className={styles.projectMetaRow}>
                    <span><i className="feather-monitor"></i>{project.platform}</span>
                    <span><i className="feather-users"></i>{project.team.split("·")[0].trim()}</span>
                  </div>
                  <Link
                    className={`rbt-btn ${project.href === "#" ? "btn-border" : "btn-gradient"} hover-icon-reverse`}
                    href={project.href}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">{project.cta}</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>









      

      {/* ── INVITE STRIP ────────────────────────────────────────────────── */}
      <section className={styles.inviteStrip}>
        <div className="container">
          <div className={styles.inviteInner} data-sal="slide-up" data-sal-duration="700">
            <div className={styles.inviteText}>
              <h3>Your project could be next.</h3>
              <p>
                Tell us what you&apos;re building. We&apos;ll tell you how we can ship it
                fast, right, and to production standard.
              </p>
            </div>
            <div className={styles.inviteActions}>
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Start a Project</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
              <Link className={`rbt-btn hover-icon-reverse ${styles.inviteBtnGhost}`} href={ROUTE.contact}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Talk to Us</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>






      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">TESTIMONIALS</span>
                  <h2 className="title">What Clients Say About Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Testimonial_2 />
      </div>






      {/* ── BLOG ────────────────────────────────────────────────────────── */}
      <div className="rbt-rbt-blog-area rbt-section-gap">
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
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <div className="rbt-callto-action-area rbt-section-gapTop">
        <div className="wrapper rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--10">
          <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
        </div>
      </div>

      {/* ── NEWSLETTER ──────────────────────────────────────────────────── */}
      <div
        className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap"
        style={{ background: `url(${image_url("../app_images/bg/dots.png")}) repeat center/auto` }}
      >
        <Newsletter />
      </div>

    </main>
  );
};

export default SmartTechProjects;
