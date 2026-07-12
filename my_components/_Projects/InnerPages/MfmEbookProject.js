import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const mfmImg = (name) => `/app_images/projects/mfm_ebooks/${name}.png`;




const screens = [
  { file: "flashscreen",                 label: "Welcome Screen" },
  { file: "dashboard",                   label: "Home Dashboard" },
  { file: "ebooks_store",                label: "eBook Store" },
  { file: "music_store",                 label: "Music Store" },
  { file: "user_book_and_library_store", label: "My Library" },
  { file: "user_profile",                label: "Profile" },
];



const challenges = [
  {
    title: "Secure Offline Content Protection",
    body: "Building DRM-style encryption so purchased eBooks and audio download safely to a device and stay playable offline — without exposing files to piracy or unauthorised sharing.",
  },
  {
    title: "Multi-Currency Payment Processing",
    body: "Supporting a global congregation across 120+ countries meant integrating multiple payment gateways and currencies — NGN, USD, EUR, GBP — into one seamless checkout flow.",
  },
  {
    title: "Large-Scale Digital Library Management",
    body: "Organising a growing catalogue of eBooks and music across prayer, deliverance, and devotional categories, with fast search and browse across a large content library.",
  },
  {
    title: "Cross-Platform Offline Sync",
    body: "Ensuring a reader's purchased library, download status, and reading progress stay perfectly in sync across iOS and Android, even without a live connection.",
  },
  {
    title: "Frictionless In-App Purchase Flow",
    body: "Designing a purchase and download experience simple enough for a non-technical, multi-generational global audience — from browse to preview to buy in a few taps.",
  },
  {
    title: "Unified Reading & Listening Experience",
    body: "Bringing eBook reading and music playback together in one distraction-free app, without either experience compromising the other's performance or design.",
  },
];



const processSteps = [
  {
    num: "01",
    title: "Discovery & Content Audit",
    body: "Catalogued MFM's existing library of prayer books, devotionals, and deliverance resources to define the digital bookshop's content structure and categories.",
  },
  {
    num: "02",
    title: "System & API Architecture",
    body: "Designed the NestJS backend, secure content delivery pipeline, and multi-currency payment layer powering the store, library, and offline download system.",
  },
  {
    num: "03",
    title: "UI/UX Design & Prototyping",
    body: "Designed a simple, distraction-free reading and browsing experience validated in high-fidelity prototypes before a single screen was built.",
  },
  {
    num: "04",
    title: "Mobile App Development",
    body: "Built the React Native app — store, library, offline reader, and music player — with native Android and iOS modules for secure local file storage.",
  },
  {
    num: "05",
    title: "Payment & Offline Sync Integration",
    body: "Integrated multi-currency in-app purchases, secure content encryption, and offline-first sync so every purchase is available the moment it's bought.",
  },
  {
    num: "06",
    title: "QA, Testing & Launch",
    body: "End-to-end testing of purchase flows, offline reading, currency conversion, and library sync — followed by store submission and a phased global rollout.",
  },
];



const craftFeatures = [
  {
    icon: "feather-eye",
    title: "Clarity First Design",
    body: "A large, growing library of eBooks and music distilled into a simple browse-preview-purchase flow anyone can follow, regardless of technical comfort.",
  },
  {
    icon: "feather-shield",
    title: "Trust-Driven Visual Language",
    body: "Every purchase screen was designed to reassure a global congregation handing over payment details — clear pricing, secure checkout, instant access.",
  },
  {
    icon: "feather-book-open",
    title: "Distraction-Free Reading Experience",
    body: "The reading and listening experience was stripped of clutter — clean typography, calm colour, and controls that stay out of the way of the content.",
  },
  {
    icon: "feather-zap",
    title: "Optimised for Speed & Flow",
    body: "From opening the app to reading offline in seconds — every screen engineered to get spiritual content into readers' hands with zero friction.",
  },
];



const results = [
  {
    icon: "feather-globe",
    title: "A Digital Bookshop for a Global Congregation",
    body: "MFM's prayer books and devotionals now reach readers across 120+ countries from a single mobile app.",
  },
  {
    icon: "feather-book-open",
    title: "Curated Library of Spiritual Resources",
    body: "A structured, searchable catalogue of prayer, deliverance, and devotional eBooks and music in one place.",
  },
  {
    icon: "feather-wifi-off",
    title: "True Offline Reading",
    body: "Purchased content downloads securely and stays fully readable with no internet connection required.",
  },
  {
    icon: "feather-credit-card",
    title: "Multi-Currency In-App Purchases",
    body: "Readers can pay in NGN, USD, EUR, GBP and more — a checkout experience built for a truly global audience.",
  },
  {
    icon: "feather-shield",
    title: "Secure, Piracy-Protected Content",
    body: "Every eBook and audio file is protected end-to-end, safeguarding the ministry's published content after every sale.",
  },
  {
    icon: "feather-music",
    title: "Integrated Music & Audio Library",
    body: "Worship music and audio testimonies sit alongside eBooks in one unified, distraction-free experience.",
  },
];



const galleryImages = screens.map((s) => ({ src: mfmImg(s.file), label: s.label }));




const MfmEbookProject = () => {

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

    <div className="digi-case-page mfm-theme">
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
                    <span className="digi-hero-tag tag-accent">Publishing · Christian eBooks</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    MFM <span className="digi-gradient">eBooks</span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    Discover, purchase, and read anytime, anywhere. MFM eBooks brings
                    Mountain of Fire and Miracles Ministries&apos; prayer books and
                    devotionals to a global congregation — securely, and fully offline.
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

                  {/* Glassmorphism stats */}
                  <div className="digi-hero-glass-stats" data-sal="slide-up" data-sal-duration="700" data-sal-delay="240">
                    {[
                      { val: "2",   suffix: "",  label: "Platforms (iOS & Android)" },
                      { val: "40",  suffix: "+", label: "eBooks & Audio Titles"  },
                      { val: "120", suffix: "+", label: "Countries Reached"  },
                      { val: "6",   suffix: "+", label: "App Screens Designed" },
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
                  <div className="mfm-hero-phones">

                    {/* Smallest — furthest back */}
                    <div className="mfm-hero-phone mfm-hero-phone--small">
                      <img src={mfmImg("user_profile")} alt="" loading="eager" />
                    </div>

                    {/* Medium — middle */}
                    <div className="mfm-hero-phone mfm-hero-phone--medium">
                      <img src={mfmImg("ebooks_store")} alt="" loading="eager" />
                    </div>

                    {/* Largest — front */}
                    <div className="mfm-hero-phone mfm-hero-phone--large">
                      <img src={mfmImg("dashboard")} alt="" loading="eager" />
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
                { icon: "feather-layout",     num: "2",    label: "Platforms"            },
                { icon: "feather-book-open",  num: "40+",  label: "eBooks & Audio"        },
                { icon: "feather-globe",      num: "120+", label: "Countries Reached"     },
                { icon: "feather-wifi-off",   num: "100%", label: "Offline Reading"       },
                { icon: "feather-credit-card",num: "4+",   label: "Currencies Supported"  },
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
                <h2 className="digi-client-heading">Mountain of Fire and Miracles Ministries</h2>
                <div className="digi-client-body">
                  <p>
                    Mountain of Fire and Miracles Ministries (MFM) is one of Africa&apos;s
                    largest Pentecostal denominations, founded in 1989 by Dr. Daniel
                    Kolawole Olukoya at a prayer meeting in his living room in Yaba, Lagos.
                    Today its International Headquarters sits on Olasimbo Street, Onike,
                    Yaba — with branches now active in over 120 countries worldwide.
                  </p>
                  <p>
                    Known for its teachings on prayer, deliverance, and spiritual warfare,
                    MFM has published a vast library of prayer books and devotionals under
                    Dr. Olukoya&apos;s ministry. MFM eBooks was commissioned as the digital
                    extension of that publishing work — making decades of prayer books and
                    audio resources instantly accessible to a global congregation, purchasable
                    and readable offline from anywhere.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-briefcase"></i></div>
                  <div>
                    <strong>Mountain of Fire and Miracles Ministries</strong>
                    <small>Product Owner · Lagos, Nigeria</small>
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
                    { icon: "feather-briefcase",  label: "Industry",        value: "Religious Publishing & Digital Media" },
                    { icon: "feather-box",         label: "Product",         value: "Christian eBook & Music Store" },
                    { icon: "feather-monitor",     label: "Platforms",       value: "Mobile App (iOS & Android)" },
                    { icon: "feather-book-open",   label: "Content Library", value: "40+ eBooks, Prayer & Deliverance Audio" },
                    { icon: "feather-globe",       label: "Reach",           value: "120+ Countries Worldwide" },
                    { icon: "feather-users",       label: "Team",           value: "6 Developers, 2 QA Engineers, 2 Product Designers" },
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
                  Discover. Purchase. Read anytime, anywhere.
                </h2>
                <div className="digi-app-body">
                  <p>
                    MFM eBooks is a digital bookshop that lets readers buy Christian eBooks
                    and audio resources and read or listen offline — no internet required
                    after purchase. Every eBook bought is safely stored within the app,
                    protected from end to end.
                  </p>
                  <p>
                    Readers can browse, preview, and purchase from a curated library of
                    prayer books, deliverance guides, and devotionals, alongside a dedicated
                    music section for worship audio and testimonies — all paid for in the
                    currency of their choice, from NGN to USD, EUR, and GBP.
                  </p>
                  <p>
                    The flow is deliberately simple: download the app, create an account,
                    browse and purchase, then read offline — anytime, anywhere, even
                    without a connection.
                  </p>
                </div>
                <div className="digi-stack">
                  {["React Native", "React", "NestJS", "Styled Components", "Android Native",
                    "iOS Native", "SQLite", "In-App Purchase", "Push Notifications"].map((t, i) => (
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
                <div className="mfm-app-phones-wrap">
                  <div className="digi-app-visual-glow mfm-app-glow" aria-hidden="true"></div>

                  {/* Tilted brand card peeking out behind the phone */}
                  <div className="mfm-app-card">
                    <span className="mfm-app-card-brand">MFM eBOOKS</span>
                    <span className="mfm-app-card-name">Digital Christian Library</span>
                  </div>

                  {/* Single realistic phone, front and center */}
                  <div className="mfm-app-phone mfm-app-phone--single">
                    <div className="mfm-app-phone-island"></div>
                    <img src={mfmImg("ebooks_store")} alt="MFM eBooks store screen" loading="lazy" />
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
                  Building a secure digital bookshop for a global congregation.
                </h2>
                <p className="digi-challenge-lead">
                  MFM eBooks combined secure offline content, multi-currency payments, and
                  a large, growing library into one distraction-free reading experience.
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




        {/* ── USER ENGAGEMENT — Marquee (single line) ───────────────── */}
        <section className="rbt-section-gap digi-engage-section">
          <div className="container">
            <div className="text-center mb--56" data-sal="slide-up" data-sal-duration="700">
              <span className="digi-kicker" style={{ justifyContent: "center" }}>
                User Engagement
              </span>
              <h2 className="digi-engage-heading">
                Simple, secure, and Spirit-filled — on every screen.
              </h2>
              <p className="digi-engage-desc">
                From the welcome screen to the library shelf, every MFM eBooks screen was
                designed to make discovering and reading spiritual content feel calm,
                trustworthy, and distraction-free.
              </p>
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track">
              {[...screens, ...screens].map((s, i) => (
                <div
                  className="digi-mob-card"
                  key={`s-${i}`}
                  onClick={() => openLightbox(i % screens.length)}
                >
                  <img src={mfmImg(s.file)} alt={s.label} loading="lazy" />
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
                  How we built a digital bookshop that reads the room.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took MFM eBooks from a shelf of printed books to a
                  live, global digital bookshop — each stage building on the last with zero
                  shortcuts in security or design.
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
                  World-class UI craft for a Spirit-filled reading experience.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    MFM eBooks operates in a domain where calm and trust matter more than
                    flash. Every pixel, interaction, and information flow was designed to
                    let the content — not the interface — hold the reader&apos;s attention.
                  </p>
                  <p>
                    SmartTech Solutions applied the same level of UI precision to MFM eBooks
                    that you&apos;d expect from the world&apos;s leading publishing platforms —
                    calibrated for a global, multi-generational congregation and their real
                    reading habits.
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
                    <strong>40+ Titles</strong>
                    <span>Curated Library</span>
                    <small>Prayer · Deliverance · Devotionals</small>
                  </div>
                  <div className="digi-craft-mockup mfm-craft-phone">
                    <Image
                      src={mfmImg("user_book_and_library_store")}
                      width={752}
                      height={1624}
                      alt="MFM eBooks library UI"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Offline</strong>
                    <span>Read Anywhere</span>
                    <small>No Internet Required</small>
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
                  A launch-ready digital bookshop for a global ministry.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions architected, designed, and shipped the complete
                    MFM eBooks platform — from the secure content and payments backend to
                    the cross-platform mobile app readers use every day.
                  </p>
                  <p>
                    The result is a serious, production-grade product that makes
                    discovering, purchasing, and reading Christian eBooks feel simple,
                    secure, and Spirit-filled for a congregation spanning the globe.
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
                      Notes from our team on product design, mobile engineering, publishing tech, and launch strategy.
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

export default MfmEbookProject;
