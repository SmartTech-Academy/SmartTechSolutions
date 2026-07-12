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

import { projects } from "@/my_data/projects/projects.js";




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
                <Image
                  src={featured.heroWeb}
                  width={1800}
                  height={1314}
                  alt="Digistate homepage"
                  sizes="(max-width: 991px) 100vw, 60vw"
                />
              </div>
              <div className={`${styles.featPhone} ${styles.featPhoneLeft}`}>
                <Image
                  src={featured.heroPhone}
                  width={610}
                  height={1440}
                  alt="Digistate invest screen"
                  sizes="(max-width: 767px) 45vw, 300px"
                />
              </div>
              <div className={`${styles.featPhone} ${styles.featPhoneRight}`}>
                <Image
                  src={featured.phoneTwo}
                  width={610}
                  height={1440}
                  alt="Digistate buy and sell"
                  sizes="(max-width: 767px) 45vw, 300px"
                />
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
                    <Image
                      src={project.cover}
                      width={800}
                      height={520}
                      alt={`${project.name} cover`}
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
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
                  {/* <Link className={`rbt-btn ${project.href === "#" ? "btn-border" : "btn-gradient"} hover-icon-reverse`} href={project.href}> */}
                  <Link className={`rbt-btn btn-border hover-icon-reverse`} href={project.href}>
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
