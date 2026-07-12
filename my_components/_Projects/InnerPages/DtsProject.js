import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const dtsImg  = (name) => `/app_images/projects/dts/${name}.png`;
const dtsMob  = (name) => `/app_images/projects/dts/mobile_app_${name}.png`;



const webScreens = [
  { file: "homepage",                     label: "Marketing Homepage"      },
  { file: "dashboard",                    label: "Learner Dashboard"       },
  { file: "course_search",               label: "Course Search"           },
  { file: "course_details",              label: "Course Details"          },
  { file: "class_room",                  label: "Video Classroom"         },
  { file: "class_forum",                 label: "Class Forum"             },
  { file: "communities",                 label: "Communities"             },
  { file: "quize",                       label: "Module Quiz"             },
  { file: "profile",                     label: "User Profile"            },
  { file: "admin_dashboard",             label: "Admin Dashboard"         },
  { file: "admin_dashboard_user_manager",label: "User Management"         },
];

const mobileScreens = [
  { file: "flash_screen",               label: "Splash Screen"           },
  { file: "auth",                       label: "Authentication"          },
  { file: "dashboard",                  label: "Dashboard"               },
  { file: "course",                     label: "Courses"                 },
  { file: "course_details",            label: "Course Details"          },
  { file: "class_room",                label: "Video Classroom"         },
  { file: "quize",                     label: "Module Quiz"             },
  { file: "quize_success",             label: "Quiz Success"            },
  { file: "spiritual_growth_monitor",  label: "Spiritual Growth Monitor"},
  { file: "profile",                   label: "Profile"                 },
];

const galleryImages = [
  ...webScreens.map((s) => ({ src: dtsImg(s.file),  label: s.label })),
  ...mobileScreens.map((s) => ({ src: dtsMob(s.file), label: s.label })),
];



const challenges = [
  {
    title: "Video Streaming Infrastructure at Scale",
    body: "Building a reliable, low-latency video delivery system that supports self-paced playback, progress tracking, and adaptive-quality streaming across varying network conditions — for learners in bandwidth-constrained environments.",
  },
  {
    title: "Dual-Role Platform Architecture",
    body: "Engineering separate, contextually appropriate experiences for tutors (content creation, student management, forum moderation) and learners (discovery, enrolment, progress) within one unified and consistent system.",
  },
  {
    title: "Community Forum & Real-Time Engagement",
    body: "Building a faith-community forum that supports threaded discussions, real-time notifications, and contextual moderation — without compromising the platform's spirit-led environment or creating friction in spiritual conversations.",
  },
  {
    title: "Quiz Engine & Progress Assessment",
    body: "Designing an end-of-module quiz system that validates learning, tracks performance over time, surfaces encouraging progress signals, and generates growth reports meaningful to both the learner and their assigned tutor.",
  },
  {
    title: "Spiritual Growth Quantification",
    body: "Translating abstract discipleship milestones — scripture study, module completion, community participation, quiz mastery — into trackable, visualised spiritual growth metrics that motivate without feeling transactional.",
  },
  {
    title: "Cross-Platform Content Synchronisation",
    body: "Ensuring video progress, quiz state, community interactions, and course enrolments remained perfectly synchronised between web and mobile in real time — via Redis pub/sub and a NestJS proxy architecture.",
  },
];



const processSteps = [
  {
    num: "01",
    title: "Discovery & Ministry Research",
    body: "Deep engagement with DTS leadership mapped the discipleship model, learning journey, content hierarchy, and spiritual growth framework. Output: complete product spec, learner/tutor journey maps, and content strategy.",
  },
  {
    num: "02",
    title: "Platform Architecture & API Design",
    body: "Architects designed the NextJS + NestJS proxy pattern, Redis session caching, adaptive video streaming pipeline, modular quiz engine, community forum data model, and multi-role permission system.",
  },
  {
    num: "03",
    title: "UI/UX Design for Faith Contexts",
    body: "Visual design calibrated for warmth, reverence, and approachability — from onboarding to the classroom. Every flow validated with tutors and learners in high-fidelity prototypes before development began.",
  },
  {
    num: "04",
    title: "Full-Stack Development",
    body: "NextJS web app and NestJS API built in parallel sprints alongside the mobile application. Vite-powered build pipeline and Redis for session caching ensured performance across all surfaces throughout.",
  },
  {
    num: "05",
    title: "Video, Quiz & Community Systems",
    body: "Video player with resume playback and progress sync, quiz engine with scoring and success states, community forum with real-time notifications, and the spiritual growth monitor — all integrated and cross-tested.",
  },
  {
    num: "06",
    title: "QA, Content Migration & Launch",
    body: "End-to-end testing across tutor and learner journeys, cross-platform sync validation, admin dashboard verification, and a phased community rollout with live monitoring before the full DTS launch.",
  },
];



const craftFeatures = [
  {
    icon: "feather-sun",
    title: "Faith-Inspired Visual Language",
    body: "Every design decision — colour, typography, spacing — was made to communicate warmth, reverence, and spiritual depth appropriate for a discipleship platform, not a generic LMS.",
  },
  {
    icon: "feather-book-open",
    title: "Learner-First Journey Design",
    body: "Course discovery, enrolment, and classroom flows were designed to remove all friction between a learner and their next spiritual lesson — from search to streamed video in as few steps as possible.",
  },
  {
    icon: "feather-users",
    title: "Community Spaces That Breathe",
    body: "Forum and community sections were designed to feel alive and welcoming — encouraging tutors and learners to connect, share insights, and grow together outside the structured classroom.",
  },
  {
    icon: "feather-monitor",
    title: "Cross-Platform Visual Consistency",
    body: "Web and mobile share a single design language. Learners move between browser and phone with zero visual or functional learning curve — the experience is identical, the platform is everywhere.",
  },
];



const results = [
  {
    icon: "feather-play-circle",
    title: "Self-Paced Video Learning Platform",
    body: "A complete video streaming classroom with progress tracking, bookmarking, and resume playback — enabling learners to grow in faith at their own rhythm, on any device.",
  },
  {
    icon: "feather-message-square",
    title: "Community-Driven Forum",
    body: "A moderated, threaded discussion platform where tutors and learners engage in meaningful discipleship conversations — extending the classroom into a vibrant faith community.",
  },
  {
    icon: "feather-check-circle",
    title: "End-of-Module Quiz Engine",
    body: "Assessment system that validates each learning module with scored quizzes, tracks performance over time, and generates encouraging, milestone-based progress reports.",
  },
  {
    icon: "feather-trending-up",
    title: "Spiritual Growth Monitor",
    body: "A first-of-its-kind spiritual growth tracker that visualises the learner's faith journey through measurable milestones — scripture engagement, module progress, and community participation.",
  },
  {
    icon: "feather-layout",
    title: "Dual-Role Dashboard System",
    body: "Separate purpose-built dashboards for tutors — course management, student tracking, community moderation — and learners — course discovery, progress, and community spaces.",
  },
  {
    icon: "feather-shield",
    title: "Full Admin Management Suite",
    body: "Comprehensive administrator control over users, courses, community content, and platform analytics — all in one organised, permission-layered dashboard.",
  },
];









const DtsProject = () => {

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

    <div className="digi-case-page dts-theme">
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
                    <span className="digi-hero-tag tag-accent">EdTech · Faith Platform</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    Disciple<span className="dts-title-small"><span className="digi-gradient"> Training School</span></span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    A self-paced discipleship platform where tutors mentor learners through video
                    streaming, structured courses, end-of-module quizzes, and a community-driven
                    forum — all built to inspire spiritual growth and transform lives.
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

                  <div className="digi-hero-glass-stats" data-sal="slide-up" data-sal-duration="700" data-sal-delay="240">
                    {[
                      { val: "2",    suffix: "",  label: "Platforms"        },
                      { val: "5+",   suffix: "",  label: "Core Modules"     },
                      { val: "10+",  suffix: "",  label: "Engineers"        },
                      { val: "21",   suffix: "",  label: "App Screens"      },
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
                        <div className="digi-hv-db-url">dts.app/dashboard</div>
                      </div>
                      <img src={dtsImg("homepage")} alt="" loading="eager" />
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
                { icon: "feather-play-circle", num: "Video",    label: "Streaming"       },
                { icon: "feather-users",       num: "2",        label: "Platforms"       },
                { icon: "feather-check-circle",num: "Quiz",     label: "Engine Built-In" },
                { icon: "feather-trending-up", num: "Growth",   label: "Monitor"         },
                { icon: "feather-message-square",num:"Community",label:"Forum Built-In" },
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
                <h2 className="digi-client-heading">Disciple Training School</h2>
                <div className="digi-client-body">
                  <p>
                    Disciple Training School (DTS) is a faith-based educational organisation dedicated
                    to nurturing spiritual growth and intentional discipleship. Through structured,
                    mentor-led learning programmes, DTS connects passionate tutors with learners who
                    desire to deepen their relationship with God and grow meaningfully in their faith
                    journey.
                  </p>
                  <p>
                    Recognising that traditional discipleship is difficult to scale without compromising
                    depth and personal connection, DTS commissioned a purpose-built digital platform —
                    one that combines the warmth of mentorship with the reach of modern technology,
                    enabling tutors to teach across boundaries and learners to grow at their own pace.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-book-open"></i></div>
                  <div>
                    <strong>Disciple Training School</strong>
                    <small>Product Owner · Faith EdTech</small>
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
                    { icon: "feather-briefcase",    label: "Industry",     value: "EdTech, Religious Education & Faith Technology" },
                    { icon: "feather-book-open",    label: "Product",      value: "Self-Paced Discipleship & Video Learning Platform" },
                    { icon: "feather-monitor",      label: "Platforms",    value: "Web Application, Mobile App (iOS & Android)" },
                    { icon: "feather-code",         label: "Tech Stack",   value: "NextJS · NestJS · Vite · Proxy Pattern · Redis" },
                    { icon: "feather-layout",       label: "Core Modules", value: "Courses · Video Classroom · Quiz Engine · Community · Growth Monitor" },
                    { icon: "feather-users",        label: "Team",         value: "8 Engineers, 2 UI/UX Designers, 2 QA Specialists" },
                    { icon: "feather-award",        label: "Delivered By", value: "SmartTech Solutions", highlight: true },
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
                  Where discipleship meets the power of modern technology.
                </h2>
                <div className="digi-app-body">
                  <p>
                    The DTS App is a self-paced discipleship platform designed to inspire spiritual
                    growth at scale. Tutors who are passionate about mentoring can sign up, create
                    structured courses, upload video content, and guide learners through a meaningful
                    journey of faith — while monitoring their progress and engaging with them through
                    a built-in community forum.
                  </p>
                  <p>
                    Learners join and choose their own growth path — enrolling in courses, watching
                    streamed video lessons, engaging in forum discussions with tutors and peers, and
                    taking end-of-module quizzes to validate their learning. A unique spiritual growth
                    monitor visualises their faith journey through measurable discipleship milestones.
                  </p>
                  <p>
                    Built on a NextJS and NestJS proxy architecture with Redis-powered session caching,
                    the platform delivers a consistent, high-performance experience across web and
                    mobile — one seamless product for every stage of the discipleship journey.
                  </p>
                </div>
                <div className="digi-stack">
                  {["NextJS", "NestJS", "Vite", "Proxy Pattern", "Redis", "REST API", "WebSocket", "Mobile App"].map((t, i) => (
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
                      <div className="digi-app-browser-url">dts.app/classroom</div>
                    </div>
                    <img src={dtsImg("class_room")} alt="DTS video classroom" loading="lazy" />
                  </div>
                  <div className="digi-app-phone">
                    <div className="digi-app-phone-speaker"></div>
                    <img src={dtsMob("class_room")} alt="DTS mobile classroom" loading="lazy" />
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
                  Scaling spiritual mentorship without losing its soul.
                </h2>
                <p className="digi-challenge-lead">
                  Building a discipleship platform means solving video delivery, dual-role
                  architecture, community trust, and spiritual growth quantification —
                  simultaneously, for users in the most personal of life journeys.
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
                Designed for every learner, built for every screen.
              </h2>
              <p className="digi-engage-desc">
                From onboarding and course discovery to live video classrooms, community
                forums, and the spiritual growth monitor — every screen was crafted for
                clarity, warmth, and a journey that transforms.
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
                  <img src={dtsImg(s.file)} alt={s.label} loading="lazy" />
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
                  <img src={dtsMob(s.file)} alt={s.label} loading="lazy" />
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
                  How we turned a ministry vision into a live platform.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took DTS from a ministry brief to a production-ready
                  discipleship platform — research-led, design-first, and built with no
                  shortcuts in content delivery, spiritual UX, or cross-platform quality.
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
                  World-class UI for a world-changing mission.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    Discipleship is one of the most personal journeys a person can take.
                    Every UI decision on the DTS platform was made knowing that the design
                    itself must communicate safety, warmth, and reverence — not just
                    aesthetics. The product had to feel like a trusted guide, not a tool.
                  </p>
                  <p>
                    SmartTech Solutions applied world-class UI precision to DTS — the same
                    level of craft you expect from the best EdTech and consumer social
                    platforms — calibrated for a faith context, for learners and tutors
                    who deserve an experience that honours the gravity of what they&apos;re doing.
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
                    <strong>Video Classroom</strong>
                    <span>Self-Paced Learning</span>
                    <small>+ Growth Monitor</small>
                  </div>
                  <div className="digi-craft-mockup">
                    <div className="digi-browser-chrome">
                      <span></span><span></span><span></span>
                    </div>
                    <Image
                      src={dtsImg("dashboard")}
                      width={1782}
                      height={1242}
                      alt="DTS learner dashboard UI"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Web + Mobile</strong>
                    <span>Two Platforms</span>
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
                  A discipleship platform built to transform lives.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions designed, architected, and shipped the complete DTS
                    platform — from the NestJS API and Redis-cached video delivery to the
                    NextJS web app, mobile application, quiz engine, community forum, and
                    spiritual growth tracking system.
                  </p>
                  <p>
                    The result is a modern, production-grade discipleship platform that
                    makes faith-based learning feel structured, connected, and genuinely
                    meaningful — for tutors and learners, across web and mobile.
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

export default DtsProject;
