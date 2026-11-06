import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sal from "sal.js";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import { ROUTE } from "@/route/app_routes.js";

const deskImg = (name) => `/app_images/projects/smarttech_academy/desktop/${name}.webp`;
const mobImg  = (name) => `/app_images/projects/smarttech_academy/mobile/${name}.webp`;



// Curated, deliberate viewing order (not shuffled), walking a new visitor
// through the product the way a student would actually encounter it.
const screens = [
  { file: "home",                       label: "Academy Homepage"          },
  { file: "event_details",              label: "Event Details"             },
  { file: "course_description",         label: "Course Description"        },
  { file: "login",                      label: "Sign In"                   },
  { file: "student_dashboard",          label: "Dashboard"                 },
  { file: "student_course_management",  label: "Dashboard Course Management" },
  { file: "user_profile",               label: "Dashboard Profile"         },
  { file: "certificate",                label: "Certificate"               },
  { file: "settings",                   label: "Dashboard Settings"        },
  { file: "certificate_summary",        label: "Certificate Details"       },
  { file: "certificate_collection",     label: "Certificate Collection"    },
  { file: "certificate_verification",   label: "Certificate Verification" },
  { file: "classroom",                  label: "Live Classroom"            },
  { file: "course_room",                label: "Course Room"               },
  { file: "dashboard_course_room",      label: "Dashboard Course Room"     },
  { file: "signup",                     label: "Sign Up"                   },
  { file: "student_event_management",   label: "Student Event Management" },
  { file: "quiz_attempts",              label: "Quiz Attempts"             },
  { file: "lost_event_ticket",          label: "Lost Ticket Recovery"      },
  { file: "notification",               label: "Notifications"             },
  { file: "blog",                       label: "Academy Blog"              },
];

const mobileScreens = [
  { file: "student_dashboard",      label: "Student Dashboard (Mobile)"      },
  { file: "classroom",              label: "Live Classroom (Mobile)"         },
  { file: "dashboard_course_room",  label: "Dashboard Course Room (Mobile)"  },
  { file: "student_course_management", label: "Course Management (Mobile)"  },
  { file: "event_management",       label: "Event Management (Mobile)"      },
  { file: "certificate_collection",  label: "Certificate Collection (Mobile)" },
  { file: "certificate_details",    label: "Certificate Details (Mobile)"    },
  { file: "profile",                label: "Profile (Mobile)"                },
  { file: "settings",               label: "Settings (Mobile)"               },
  { file: "notification",           label: "Notifications (Mobile)"          },
];

const galleryImages = [
  ...screens.map((s) => ({ src: deskImg(s.file), label: s.label })),
  ...mobileScreens.map((s) => ({ src: mobImg(s.file), label: s.label })),
];



const challenges = [
  {
    title: "Making a Full LMS Genuinely Free to Run",
    body: "Engineering an academy platform generous enough to offer courses, live classrooms, events, and certification at no cost to students, while keeping infrastructure lean enough that SmartTech Academy could sustain it indefinitely as an internal initiative, not a funded startup.",
  },
  {
    title: "Verifiable Certification at Scale",
    body: "Designing a certificate issuance and public verification system robust enough that any employer or institution could confirm a graduate's credential instantly, without manual lookups, spreadsheets, or trusting a PDF on its face.",
  },
  {
    title: "Classroom, Courses, and Events in One Coherent Flow",
    body: "Unifying three historically separate product categories, structured courses, live classroom sessions, and ticketed events, into a single dashboard experience that feels like one platform instead of three bolted-together tools.",
  },
  {
    title: "Background Work Without Blocking the Student",
    body: "Certificate generation, event ticket emails, notification delivery, and enrollment processing all needed to happen without freezing the UI, requiring a queue-driven architecture that keeps the student experience instant even when the backend is busy.",
  },
  {
    title: "One Codebase, Two Honest Experiences",
    body: "Building a responsive web experience and a true mobile-optimised experience from the same Laravel API, so a student on a budget Android phone gets a classroom, dashboard, and certificate flow as smooth as the desktop version.",
  },
  {
    title: "Production Infrastructure for a Free Product",
    body: "Holding a product that charges its students nothing to the same uptime, performance, and reliability standards SmartTech Solutions holds every paying client to, instead of treating it as a side project with lower stakes.",
  },
];



const processSteps = [
  {
    num: "01",
    title: "Curriculum & Platform Discovery",
    body: "Mapped the full student journey, from discovery and sign-up to enrollment, live classroom attendance, quiz attempts, and certificate collection, defining every screen the academy would need before any code was written.",
  },
  {
    num: "02",
    title: "Data Architecture & API Design",
    body: "Designed the Laravel API, MySQL schema, and Redis caching strategy to support courses, live classroom sessions, quizzes, events, ticketing, and certificate records as cleanly related, queryable data.",
  },
  {
    num: "03",
    title: "UI/UX Design for Web & Mobile",
    body: "Every dashboard, course room, and certificate screen was designed twice, once for desktop and once for mobile, so students never feel like the mobile experience is an afterthought to the real product.",
  },
  {
    num: "04",
    title: "Backend API & Queue Infrastructure",
    body: "Built the Laravel backend, MySQL data layer, and a background job queue so certificate generation, event ticket emails, and notification delivery run asynchronously without ever blocking a student's session.",
  },
  {
    num: "05",
    title: "Next.js Frontend & Classroom Experience",
    body: "Built the Next.js student portal consuming the Laravel API directly, students dashboard, course rooms, live classroom, quiz attempts, events, and the certificate centre, all wired to real-time, structured data.",
  },
  {
    num: "06",
    title: "Deployment & Launch",
    body: "Shipped to production with automated monitoring and deployment tooling in place, tested end-to-end before SmartTech Academy opened enrollment to its first cohort.",
  },
];



const craftFeatures = [
  {
    icon: "feather-award",
    title: "Certificate-First Visual Language",
    body: "Certificates, summaries, and the public verification screen were designed to feel like something worth printing and framing, not a generic auto-generated PDF, because a free credential still has to carry weight.",
  },
  {
    icon: "feather-video",
    title: "Classroom UI Built for Focus",
    body: "The live classroom and course room interfaces strip away distraction so students stay oriented between video, course materials, and quiz prompts without losing their place in the lesson.",
  },
  {
    icon: "feather-smartphone",
    title: "A Mobile Experience, Not a Shrunk Desktop",
    body: "Every core flow, dashboard, classroom, events, certificates, was redesigned at mobile breakpoints with its own layout logic, not a squeezed version of the desktop screen.",
  },
  {
    icon: "feather-bell",
    title: "Calm, Queue-Backed Notifications",
    body: "Enrollment confirmations, event tickets, and certificate-ready alerts arrive through the Redis-backed queue system promptly and consistently, reinforcing trust in a platform that costs the student nothing.",
  },
];



const results = [
  {
    icon: "feather-book-open",
    title: "A Complete Free Learning Platform",
    body: "Courses, live classroom sessions, quizzes, events, and verifiable certification, delivered as one coherent academy experience instead of a patchwork of disconnected tools.",
  },
  {
    icon: "feather-shield-check",
    title: "Publicly Verifiable Certification",
    body: "A certificate centre and public verification page that let any student, employer, or institution confirm a credential's authenticity in seconds, with no manual checks required.",
  },
  {
    icon: "feather-smartphone",
    title: "Genuine Web & Mobile Parity",
    body: "A fully responsive student experience with a dedicated mobile layout for every major flow, dashboard, classroom, events, and certificates, built from the same Laravel API.",
  },
  {
    icon: "feather-server",
    title: "Production-Grade Infrastructure",
    body: "A reliable, secure hosting setup engineered so a routine update or a spike in traffic never takes down the student experience.",
  },
  {
    icon: "feather-zap",
    title: "Asynchronous, Non-Blocking Student Flows",
    body: "Certificate generation, ticket emails, and notifications run entirely through a dedicated queue worker, keeping every student-facing interaction fast regardless of what is happening in the background.",
  },
  {
    icon: "feather-heart",
    title: "Proof SmartTech Builds What It Preaches",
    body: "A production-grade platform SmartTech Solutions engineered for its own sister academy, the same engineering discipline, architecture, and UI craft it brings to every paying client, applied to its own brainchild.",
  },
];



const SmartTechAcademyProject = () => {

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

    <div className="digi-case-page smarttech-academy-theme">
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
                    <span className="digi-hero-tag tag-accent">EdTech · Internal Product</span>
                  </div>

                  <h1 className="digi-hero-title" data-sal="slide-up" data-sal-duration="700" data-sal-delay="100">
                    SmartTech <span className="digi-gradient">Academy</span>
                  </h1>

                  <p className="digi-hero-lead" data-sal="slide-up" data-sal-duration="700" data-sal-delay="160">
                    A free technology academy platform, the digital brainchild of SmartTech
                    Solutions, built for its sister brand SmartTech Academy with courses, live
                    classrooms, events, quizzes, and publicly verifiable certification, on the
                    same production standards we hold every paying client to.
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
                      { val: "3+",  suffix: "",  label: "User Roles"        },
                      { val: "30",  suffix: "+", label: "App Screens"       },
                      { val: "0",   suffix: "",  label: "Cost to Students"  },
                      { val: "1",   suffix: "",  label: "Verified Credential" },
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
                        <div className="digi-hv-db-url">smarttechacademy.org/dashboard</div>
                      </div>
                      <img src={deskImg("student_dashboard")} alt="" loading="eager" />
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
                { icon: "feather-book-open",  num: "LMS",        label: "Courses & Classroom"  },
                { icon: "feather-award",      num: "Verified",   label: "Certification"        },
                { icon: "feather-calendar",   num: "Events",     label: "Ticketing Included"   },
                { icon: "feather-smartphone", num: "Web + Mobile", label: "Full Parity"         },
                { icon: "feather-server",     num: "Scalable",   label: "Cloud Infrastructure" },
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
                <span className="digi-kicker">About the Owner</span>
                <h2 className="digi-client-heading">SmartTech Academy</h2>
                <div className="digi-client-body">
                  <p>
                    SmartTech Academy is a free technology education initiative built to open
                    the door into software, design, and digital careers for anyone willing to
                    learn, regardless of their ability to pay. This platform is its home for
                    courses, live classrooms, events, and certification, the digital brainchild
                    of its sister brand, SmartTech Solutions.
                  </p>
                  <p>
                    Owned and operated by SmartTech Academy and engineered end to end by
                    SmartTech Solutions, the platform is proof of a simple principle, the same
                    engineering discipline, architecture, and UI craft applied to every paying
                    client was applied here, to a product that charges its students nothing.
                  </p>
                </div>
                <div className="digi-client-badge">
                  <div className="digi-cb-icon"><i className="feather-award"></i></div>
                  <div>
                    <strong>SmartTech Academy</strong>
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
                    { icon: "feather-briefcase",  label: "Industry",     value: "Education Technology · Free Learning" },
                    { icon: "feather-book-open",  label: "Product",      value: "Learning Management System with Events & Certification" },
                    { icon: "feather-monitor",    label: "Platform",     value: "Web Application + Dedicated Mobile Experience" },
                    { icon: "feather-code",       label: "Tech Stack",   value: "NextJS · Laravel · MySQL · Redis · REST API · Queue Workers" },
                    { icon: "feather-users",      label: "Stakeholders", value: "Students · Tutors · Event Organisers · Admins" },
                    { icon: "feather-users",      label: "Team",         value: "6 Engineers, 1 UI/UX Designer, 3 QA Specialists" },
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
                  A full academy, not a course catalogue with a login page.
                </h2>
                <div className="digi-app-body">
                  <p>
                    SmartTech Academy gives every student a single home for structured courses,
                    live classroom sessions, quiz attempts, ticketed events, and a certificate
                    centre with public verification, all wired to one Laravel API so nothing
                    feels bolted on. A tutor-facing event and course management suite lets the
                    academy run cohorts, events, and content without engineering help for every
                    update.
                  </p>
                  <p>
                    Built on a Laravel API with a Next.js frontend, MySQL for structured data,
                    and Redis powering both caching and a dedicated queue worker, certificate
                    generation, ticket emails, and notifications run in the background, so the
                    student experience never waits on them.
                  </p>
                </div>
                <div className="digi-stack">

                  {["NextJS", "Laravel", "MySQL", "Redis", "REST API", "ReactJS", "Queue Workers", "Tailwind CSS", "WebSocket"].map((t, i) => (
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
                      <div className="digi-app-browser-url">smarttechacademy.org/courses</div>
                    </div>
                    <img src={deskImg("course_room")} alt="SmartTech Academy course room" loading="lazy" />
                  </div>
                  <div className={`digi-float-card fc-br`}>
                    <strong>Live Classroom</strong>
                    <span>Courses · Quizzes · Certificates</span>
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
                  Building a platform that earns trust while charging nothing.
                </h2>
                <p className="digi-challenge-lead">
                  A free academy still has to behave like a real product. Every architectural
                  decision had to hold up against the same reliability and credibility bar as
                  a paid platform, with none of the usual revenue to justify the engineering.
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




        {/* ── USER ENGAGEMENT, Marquee ─────────────────────────────── */}
        <section className="rbt-section-gap digi-engage-section">
          <div className="container">
            <div className="text-center mb--56" data-sal="slide-up" data-sal-duration="700">
              <span className="digi-kicker" style={{ justifyContent: "center" }}>
                User Engagement
              </span>
              <h2 className="digi-engage-heading">
                Every corner of the academy, designed on purpose.
              </h2>
              <p className="digi-engage-desc">
                From the student dashboard and live classroom to certificates and event
                ticketing, every SmartTech Academy screen was built to make free education
                feel as considered as a paid product.
              </p>
            </div>
          </div>

          <div className="digi-marquee-wrap">
            <div className="digi-marquee-track">
              {[...screens, ...screens].map((s, i) => (
                <div
                  className="digi-web-card"
                  key={`f-${i}`}
                  onClick={() => openLightbox(i % screens.length)}
                >
                  <div className="digi-browser-chrome">
                    <span></span><span></span><span></span>
                  </div>
                  <img src={deskImg(s.file)} alt={s.label} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* ── MOBILE EXPERIENCE ────────────────────────────────────── */}
        <section className="rbt-section-gap sta-mobile-section">
          <div className="container">
            <div className="row align-items-end mb--56">
              <div className="col-lg-7" data-sal="slide-right" data-sal-duration="700">
                <span className="digi-kicker">Mobile Experience</span>
                <h2 className="digi-app-heading">
                  Built for the phone in a student&apos;s pocket.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Dashboard, classroom, events, and certificates were each redesigned at mobile
                  breakpoints, not shrunk, so the academy works just as well on a budget
                  Android phone as it does on a desktop.
                </p>
              </div>
            </div>
            <div className="sta-mobile-grid">
              {mobileScreens.map((s, i) => (
                <div
                  className="sta-phone-card"
                  key={s.file + i}
                  data-sal="zoom-in"
                  data-sal-delay={i * 60}
                  data-sal-duration="550"
                  onClick={() => openLightbox(screens.length + i)}
                >
                  <div className="sta-phone-frame">
                    <span className="sta-phone-notch"></span>
                    <img src={mobImg(s.file)} alt={s.label} loading="lazy" />
                  </div>
                  <span className="sta-phone-label">{s.label}</span>
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
                  How we built a free academy that behaves like a product.
                </h2>
              </div>
              <div className="col-lg-5" data-sal="slide-left" data-sal-duration="700">
                <p className="digi-process-lead mt_md--20 mt_sm--20">
                  Six structured phases took SmartTech Academy from a curriculum outline to a
                  production-ready learning platform, built with the same rigour as any
                  client engagement.
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
                  Free education, designed like it costs something.
                </h2>
                <div className="digi-craft-body">
                  <p>
                    A platform that gives away its core product for free has to work harder to
                    earn trust, not less. Students judge a certificate's legitimacy, a
                    classroom's reliability, and a dashboard's clarity the same way they would
                    on any paid platform.
                  </p>
                  <p>
                    SmartTech Solutions applied its full UI craft standard to its own sister
                    academy, precise layouts, considered motion, and interfaces that make
                    learning feel organised instead of overwhelming, because the academy's
                    credibility depends on it.
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
                    <strong>30+ App Screens</strong>
                    <span>Web + Mobile Parity</span>
                    <small>+ Verified Certificates</small>
                  </div>
                  <div className="digi-craft-mockup">
                    <div className="digi-browser-chrome">
                      <span></span><span></span><span></span>
                    </div>
                    <Image
                      src={deskImg("certificate_verification")}
                      width={1954}
                      height={1023}
                      alt="SmartTech Academy certificate verification UI"
                    />
                  </div>
                  <div className="digi-float-card fc-br">
                    <strong>Trusted Certification</strong>
                    <span>Publicly Verifiable</span>
                    <small>Zero Cost to Students</small>
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
                  A free academy built with paid-product discipline.
                </h2>
                <div className="digi-solution-body">
                  <p>
                    SmartTech Solutions architected, designed, and delivered the complete
                    SmartTech Academy platform, from the Laravel API, MySQL data layer, and
                    Redis-backed queue infrastructure to the Next.js student portal and its
                    dedicated mobile experience.
                  </p>
                  <p>
                    The result is a production-ready learning platform that gives SmartTech
                    Academy's students courses, classrooms, events, and
                    verifiable certification, proof that SmartTech builds with the same
                    discipline for itself that it brings to every client.
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
                      Notes from our team on product design, software development, AI, and education technology.
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

export default SmartTechAcademyProject;
