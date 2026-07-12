import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const flatImg = (name) => `/app_images/projects/flatshare/${name}.png`;










const screens = [
  { file: "homepage",           label: "Marketing Homepage"   },
  { file: "dashboard",          label: "User Dashboard"       },
  { file: "dashboard_launcher", label: "Dashboard Launcher"   },
  { file: "find_apartment",     label: "Find a Flatmate"      },
  { file: "chats",              label: "Messaging"            },
  { file: "create_ads",         label: "Create Listing"       },
  { file: "profile",            label: "User Profile"         },
  { file: "profile_settings",   label: "Profile Settings"     },
  { file: "interest_settings",  label: "Interest Settings"    },
  { file: "onboarding",         label: "Onboarding Flow"      },
  { file: "request_management", label: "Request Management"   },
];




const galleryImages = screens.map((s) => ({ src: flatImg(s.file), label: s.label }));






const challenges = [
  {
    title: "Building Trust Between Strangers",
    body: "The core challenge: convincing users to share a home with someone they met online. The platform needed profile verification, trust signals, interest matching, and transparent reviews that genuinely reduce the risk of bad flatmate experiences.",
  },
  {
    title: "Real-Time Messaging at Scale",
    body: "Engineering a low-latency WebSocket chat system that handles concurrent conversations, read receipts, typing indicators, and notification delivery without lag, across a distributed server environment.",
  },
  {
    title: "Complex Multi-Dimensional Search",
    body: "Location-based filtering had to account for radius, budget range, move-in date, lifestyle, pet tolerance, gender preference, and shared interests, all composited in real time with sub-100ms query responses.",
  },
  {
    title: "Privacy & Data Compliance",
    body: "Handling sensitive personal data, home addresses, income ranges, lifestyle preferences, and identity documents, while maintaining GDPR-aligned policies, granular privacy controls, and secure storage patterns.",
  },
  {
    title: "Proxy Architecture & Session Management",
    body: "Designing a reverse-proxy pattern between the Next.js frontend and Laravel API to avoid CORS issues, centralise authentication, manage session state at the edge, and rate-limit abuse across shared-IP environments.",
  },
  {
    title: "Real-Time Listing Freshness",
    body: "Flatshare listings go stale fast. Redis-backed caching strategies, automated expiry rules, host dashboard notifications, and re-listing flows had to keep the live inventory genuinely current without burdening hosts.",
  },
];





const processSteps = [
  {
    num: "01",
    title: "Discovery & User Research",
    body: "In-depth interviews with prospective flatmates and property hosts mapped the exact pain points of traditional flatmate search, trust anxiety, search friction, and communication failures. Output: full product spec and user journey maps.",
  },
  {
    num: "02",
    title: "System Architecture & API Design",
    body: "Architects designed the Next.js + Laravel proxy pattern, MySQL schema, Redis cache strategy, WebSocket message broker, and the modular listing engine that powers all search and filtering logic.",
  },
  {
    num: "03",
    title: "UI/UX Design & Prototyping",
    body: "From onboarding to profile creation, listing browsing, and live messaging, every flow was wireframed, iterated, and validated in high-fidelity Figma prototypes before a single line of code was written.",
  },
  {
    num: "04",
    title: "Full-Stack Development",
    body: "Next.js frontend and Laravel API built in parallel sprints. Vite-powered build pipeline for fast HMR during development. Every feature shipped behind feature flags, tested in staging before merge to production.",
  },
  {
    num: "05",
    title: "Real-Time Systems & Integrations",
    body: "WebSocket server for live messaging, push notification delivery, location services for radius search, and Redis pub/sub for real-time listing updates, user presence indicators, and application status tracking.",
  },
  {
    num: "06",
    title: "QA, Security Audit & Launch",
    body: "End-to-end testing across all user flows, search, match, message, apply, list, manage. Penetration testing of auth and messaging layers. Staged rollout with live monitoring before full public launch can take place.",
  },
];





const craftFeatures = [
  {
    icon: "feather-heart",
    title: "Human-Centered by Design",
    body: "Every interaction — profile creation, interest tagging, browsing — was designed around real human behaviour and the emotional weight of choosing a person to share your home with.",
  },
  {
    icon: "feather-shield",
    title: "Trust-First Visual Language",
    body: "Verification badges, transparent profiles, and review systems are woven into the visual hierarchy so users feel safe and informed at every decision point — not as afterthoughts.",
  },
  {
    icon: "feather-zap",
    title: "Speed-Optimized for Discovery",
    body: "Listings load instantly, filters respond in real time, and the entire search experience was engineered to surface the right match in as few clicks as possible.",
  },
  {
    icon: "feather-monitor",
    title: "Responsive & Screen-Adaptive",
    body: "The full product experience — browsing, messaging, managing listings — works flawlessly on desktop and mobile without feature compromise or layout degradation.",
  },
];






const results = [
  {
    icon: "feather-search",
    title: "Advanced Flatmate Matching Engine",
    body: "Multi-dimensional search combining location radius, budget, move-in date, lifestyle preferences, and shared interests — surfacing genuinely compatible flatmates, not just nearby ones.",
  },
  {
    icon: "feather-message-circle",
    title: "Real-Time Messaging System",
    body: "WebSocket-powered chat with typing indicators, read receipts, and push notifications — enabling fluid, in-context communication between hosts and prospective flatmates.",
  },
  {
    icon: "feather-home",
    title: "Full Listing Management Suite",
    body: "Hosts create, manage, and refresh property listings with rich media, pricing controls, availability settings, and applicant tracking from a single organised dashboard.",
  },
  {
    icon: "feather-users",
    title: "Interest & Lifestyle Profiling",
    body: "Deep preference mapping lets users signal who they are and how they live — enabling matches that go far beyond geography and budget to genuine lifestyle compatibility.",
  },
  {
    icon: "feather-inbox",
    title: "Request Management Dashboard",
    body: "Hosts receive, review, and respond to flatmate applications in one organised space — with status tracking, shortlisting tools, and full communication history preserved.",
  },
  {
    icon: "feather-trending-up",
    title: "Scalable PropTech Infrastructure",
    body: "Built on a proxy-pattern architecture with Redis caching and a Laravel API — a foundation engineered to handle growth without performance degradation as the community scales.",
  },
];























const FlatshareProject = () => {




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


    <div className="digi-case-page flat-theme">
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
                    <span className="digi-hero-tag tag-accent">PropTech · Social Platform</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    Flat<span className="digi-gradient">share</span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    A social flatmate-matching web platform that connects people looking to share
                    property, with good profiles, real-time messaging, smart listing filters, and
                    location-based search built for speed, safety, and genuine human connection.
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
                        <span className="btn-text">Our Service</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </Link>
                  </div>

                  <div className="digi-hero-glass-stats" data-sal="slide-up" data-sal-duration="700" data-sal-delay="240">
                    {[
                      { val: "5",    suffix: "", label: "Core Modules"    },
                      { val: "4",    suffix: "", label: "QA Engineers"     },
                      { val: "5",    suffix: "", label: "designer & Developers"       },
                      { val: "13",   suffix: "+", label: "Smart Filters"   },
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
                        <div className="digi-hv-db-url">flatshare.app/dashboard</div>
                      </div>
                      <img src={flatImg("homepage")} alt="" loading="eager" />
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
                { icon: "feather-layers",           num: "30+",       label: "Screens"    },
                { icon: "feather-message-circle", num: "Real-Time",label: "WebSocket Chat"  },
                { icon: "feather-monitor",         num: "2",      label: "Platforms"   },
                { icon: "feather-users",          num: "8+",       label: "Total Engineers"       },
                { icon: "feather-map-pin",        num: "Location", label: "Based Search"    },
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
                <h2 className="digi-client-heading">Scalabu Digital</h2>
                <div className="digi-client-body">
                  <p>
                    Scalabu Digital is a Lagos-based digital marketing and web development agency 
                    that helps businesses grow their online presence through services such as SEO, 
                    social media marketing, pay-per-click (PPC) advertising, content marketing, 
                    web development, and e-commerce solutions.
                  </p>
                  <p>
                    Founded in 2017, the company focuses on delivering data-driven marketing strategies 
                    and customized digital solutions that improve brand visibility, website traffic, 
                    and business growth.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-briefcase"></i></div>
                  <div>
                    <strong>Scalabu Digital</strong>
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
                    { icon: "feather-briefcase", label: "Industry",     value: "PropTech & Social Networking" },
                    { icon: "feather-home",       label: "Product",      value: "Flatmate Matching & Property Sharing Platform" },
                    { icon: "feather-monitor",    label: "Platforms",    value: "Web Application, Admin Dashboard" },
                    { icon: "feather-code",       label: "Tech Stack",   value: "NextJS · Laravel · Vite · Proxy Pattern · MySQL · Redis · Tailwind CSS · WebSocket" },
                    { icon: "feather-layout",     label: "Core Modules", value: "Search · Listings · Profiles · Messaging · Request Management" },
                    { icon: "feather-users",      label: "Team",         value: "4 Engineers, 1 UI/UX Designers, 4 QA Specialists" },
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
                  The smarter way to find your perfect flatmate.
                </h2>
                <div className="digi-app-body">
                  <p>
                    Flatshare is a social property-sharing web platform built to replace the
                    broken, trust-deficient process of finding a flatmate. Users create rich
                    lifestyle profiles, signal their preferences and deal-breakers, and discover
                    compatible people through an intelligent, filter-driven discovery engine, 
                    not random listings from strangers.
                  </p>
                  <p>
                    Hosts who already have a property can list their spare room with full control
                    over pricing, move-in dates, and applicant criteria. Seekers looking to live
                    in expensive areas can find and connect with potential co-renters to split
                    costs intelligently, with in-app messaging, structured applications, and
                    request management tools keeping the entire process organised and transparent. 
                    Flatshare is engineered for speed, security, and the kind of social trust that 
                    turns a platform visit into a signed tenancy.
                  </p>
                </div>
                <div className="digi-stack">
                  {["NextJS", "Laravel", "ReactJS", "Tailwind CSS", "Vite", "MySQL", "Redis", "WebSocket"].map((t, i) => (
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
                <div className="digi-app-visual flat-app-visual">
                  <div className="digi-app-visual-glow" aria-hidden="true"></div>
                  <div className="digi-app-browser">
                    <div className="digi-app-browser-chrome">
                      <span></span><span></span><span></span>
                      <div className="digi-app-browser-url">flatshare.app/dashboard</div>
                    </div>
                    <img src={flatImg("dashboard")} alt="Flatshare dashboard" loading="lazy" />
                  </div>
                  <div className="flat-data-card">
                    <div className="flat-data-card-icon"><i className="feather-home"></i></div>
                    <div>
                      <strong>Find Your Flatmate</strong>
                      <span>Match · Connect · Move In</span>
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
                  Turning the most personal of searches into a scalable platform.
                </h2>
                <p className="digi-challenge-lead">
                  Building a social flatmate platform means solving trust, speed, privacy, and
                  real-time communication simultaneously; for users making one of life&apos;s most
                  personal decisions. These were the six hardest problems we solved.
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
                Crafted for how people actually search for home.
              </h2>
              <p className="digi-engage-desc">
                From onboarding and interest profiling to live search and real-time messaging; 
                every screen was built to reduce friction and build trust at each step of the
                flatmate discovery journey.
              </p>
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track">
              {[...screens, ...screens].map((s, i) => (
                <div
                  className="digi-web-card"
                  key={`w-${i}`}
                  onClick={() => openLightbox(i % screens.length)}
                >
                  <div className="digi-browser-chrome">
                    <span></span><span></span><span></span>
                  </div>
                  <img src={flatImg(s.file)} alt={s.label} loading="lazy" />
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
                  onClick={() => openLightbox(i % screens.length)}
                >
                  <div className="digi-browser-chrome">
                    <span></span><span></span><span></span>
                  </div>
                  <img src={flatImg(s.file)} alt={s.label} loading="lazy" />
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
                  How we turned a complex idea into a live platform.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took Flatshare from a research insight to a
                  production-ready social platform design-first, research-led, and built
                  with no shortcuts in performance, security, or user experience.
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
                  UI craft that makes finding home feel effortless.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    Flatshare operates in one of the most personal decision spaces a product
                    can occupy, choosing who you share your home with. Every UI decision was
                    made knowing that trust, clarity, and warmth are not optional extras,
                    they are the product itself.
                  </p>
                  <p>
                    SmartTech Solutions brought world-class UI precision to Flatshare — the
                    same level you expect from the best consumer social platforms — with
                    profile-forward layouts, frictionless search flows, and a visual language
                    that communicates safety and community from the very first screen.
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
                    <strong>Smart Matching</strong>
                    <span>15+ Filter Dimensions</span>
                    <small>+ Interest Compatibility</small>
                  </div>
                  <div className="digi-craft-mockup">
                    <div className="digi-browser-chrome">
                      <span></span><span></span><span></span>
                    </div>
                    <Image
                      src={flatImg("dashboard")}
                      width={1782}
                      height={1242}
                      alt="Flatshare dashboard UI"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Real-Time Chat</strong>
                    <span>WebSocket Powered</span>
                    <small>Instant messaging</small>
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
                  A complete flatmate-matching platform, live and trusted.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions designed, architected, and shipped the full Flatshare
                    platform — from the Laravel API and Redis-backed search engine to the
                    Next.js frontend, WebSocket real-time messaging system, and host management
                    dashboards.
                  </p>
                  <p>
                    The result is a social platform that makes the traditionally stressful,
                    opaque process of finding a flatmate feel modern, safe, and genuinely
                    human — with the engineering depth to scale alongside its growing community.
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
                      Notes from our team on product design, software development, AI, and launch strategy.
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

export default FlatshareProject;
