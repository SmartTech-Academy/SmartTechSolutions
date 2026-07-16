import Link from "next/link";

import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";
import LazyImage from "@/my_components/_Global/LazyImage";
import Newsletter from "@/my_components/Newsletters/Newsletter";





const VALUES = [
  {
    icon: "feather-target",
    title: "Ownership over tasks",
    desc: "We hand you real problems, not tickets. Everyone here is trusted to own a piece of the product, not just execute someone else's spec.",
  },
  {
    icon: "feather-trending-up",
    title: "Craft over shortcuts",
    desc: "We'd rather ship a week later and ship it right. Code reviews, QA, and design critique are taken seriously at every level.",
  },
  {
    icon: "feather-users",
    title: "A flat, honest team",
    desc: "Good ideas win regardless of title. Engineers, designers, and QA all have a real voice in how a product turns out.",
  },
  {
    icon: "feather-globe",
    title: "Work that ships globally",
    desc: "Our builds reach real users across industries and borders, real estate exchanges, fintech apps, and platforms used by thousands.",
  },
];




const BENEFITS = [
  { icon: "feather-map-pin", title: "Remote-friendly", desc: "Work from wherever you do your best work, we're built around async-friendly collaboration." },
  { icon: "feather-clock", title: "Flexible hours", desc: "We care about output and reliability, not clocking hours at a desk." },
  { icon: "feather-book-open", title: "Room to grow", desc: "Work across real client projects spanning web, mobile, AI, and blockchain, not one narrow stack." },
  { icon: "feather-cpu", title: "Modern tooling", desc: "The hardware and software you need to do serious work, without a fight over a purchase order." },
  { icon: "feather-heart", title: "Healthy pace", desc: "Deadlines are real, but burnout isn't a badge of honor here." },
  { icon: "feather-award", title: "Real ownership", desc: "Ship features that go live for real clients and real users, not sandbox projects that never leave a repo." },
];




const OPEN_ROLES = [
  { title: "Frontend Engineer (React / Next.js)", type: "Engineering" },
  { title: "Backend Engineer (Node.js / NestJS)", type: "Engineering" },
  { title: "React Native Developer", type: "Engineering" },
  { title: "Blockchain / Smart Contract Engineer", type: "Engineering" },
  { title: "Product Designer (UI/UX)", type: "Design" },
  { title: "QA Engineer", type: "Quality" },
  { title: "DevOps / Cloud Engineer", type: "Infrastructure" },
  { title: "Project Manager", type: "Delivery" },
];





// Flip to `true` the moment real applications should start landing in your
// inbox — every "Apply" link below re-enables instantly (full opacity,
// clickable, normal arrow icon on hover) with no other changes needed.
const ROLES_APPLY_ENABLED = false;

const STEPS = [
  { num: "01", title: "Apply", desc: "Send your CV, portfolio, or GitHub, whatever shows us your work best." },
  { num: "02", title: "Intro call", desc: "A relaxed conversation about your experience and what you're looking for next." },
  { num: "03", title: "Technical round", desc: "A practical exercise close to real work, no trick whiteboard puzzles." },
  { num: "04", title: "Offer", desc: "We move fast once we know it's a fit, and we're upfront the whole way through." },
];


























const CareersPage = () => {


  return (


    <main className="rbt-main-wrapper career-page">



      {/* ══════════════ HERO ══════════════ */}
      <section className="career-hero">
        <LazyImage
          wrapperClassName="career-hero__bg"
          src={image_url("/app_images/careers/careers_hero.webp", true)}
          alt="The SmartTech Solutions team collaborating in the studio"
          fill
          priority
          sizes="100vw"
          className="career-hero__bg-img"
        />
        <span className="career-hero__overlay" aria-hidden="true" />

        <div className="container">
          <div className="career-hero__content rbt-reveal" style={{ "--reveal-delay": "0.05s" }}>
            <span className="career-hero__eyebrow">Careers at SmartTech</span>
            <h1 className="career-hero__title">Build what&apos;s next, with us</h1>
            <p className="career-hero__desc">
              We&apos;re a small, senior team shipping real products for real companies — real estate
              exchanges, fintech platforms, and apps used by thousands. If you&apos;d rather build
              things that matter than sit in a sandbox, we should talk.
            </p>
            <div className="rbt-button-group">
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href="#open-roles">
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">See open roles</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
              <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.about}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">About SmartTech</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>



















      {/* ══════════════ VALUES ══════════════ */}
      <section className="career-section">
        <div className="container">
          <ScrollRevealSection className="career-section__head">
            <span className="subtitle bg-primary-opacity">Why work here</span>
            <h2 className="title">More than a tech company</h2>
            <p className="description has-medium-font-size">
              We&apos;re a collective of engineers, designers, and problem-solvers who&apos;d rather ship
              something real than talk about shipping it.
            </p>
          </ScrollRevealSection>

          <div className="row row--15 mt_dec--30">
            {VALUES.map((value, index) => (
              <div className="col-12 col-sm-6 col-lg-3 mt--30" key={value.title}>
                <ScrollRevealSection style={{ "--reveal-delay": `${index * 0.08}s` }}>
                  <div className="career-value-card">
                    <span className="career-value-card__icon"><i className={value.icon}></i></span>
                    <h4>{value.title}</h4>
                    <p>{value.desc}</p>
                  </div>
                </ScrollRevealSection>
              </div>
            ))}
          </div>
        </div>
      </section>




















      {/* ══════════════ CURRENT OPENINGS ══════════════ */}
      <section className="career-section career-openings">
        <div className="container">
          <ScrollRevealSection className="career-openings__panel">
            <span className="career-openings__icon"><i className="feather-bell"></i></span>
            <span className="subtitle bg-primary-opacity">Current openings</span>
            <h2 className="title">While we don&apos;t have active listings today, we&apos;re still hiring — just not on a calendar</h2>
            <p className="description has-medium-font-size">
              We open a role the moment a real project demands another hand, not on a quarterly
              schedule. Rather than post a job for the sake of posting one, we keep a warm bench of
              people whose work we already admire, so when a seat does open, we already know who to
              call. Add yourself to that bench below, we review it before we ever write a public
              listing, and every submission gets a real reply either way.
            </p>
            <div className="career-openings__stats">
              <div className="career-openings__stat">
                <strong>Monthly</strong>
                <span>Talent pool reviewed by our leads</span>
              </div>
              <div className="career-openings__stat">
                <strong>First call</strong>
                <span>Pool candidates get contacted before any public posting</span>
              </div>
              <div className="career-openings__stat">
                <strong>Every time</strong>
                <span>You hear back, even when the answer is &quot;not yet&quot;</span>
              </div>
            </div>
            <div className="read-more-btn mt--10">
              <Link className="rbt-moderbt-btn" href="#open-roles">
                <span className="moderbt-btn-text">See roles we hire for</span>
                <i className="feather-arrow-down"></i>
              </Link>
            </div>
          </ScrollRevealSection>
        </div>
      </section>

      {/* ══════════════ BENEFITS — dark animated backdrop ══════════════ */}
      <section className="career-benefits">
        <span className="career-benefits__grid-bg" aria-hidden="true" />
        <span className="career-benefits__glow career-benefits__glow--one" aria-hidden="true" />
        <span className="career-benefits__glow career-benefits__glow--two" aria-hidden="true" />

        <div className="container">
          <ScrollRevealSection className="career-section__head career-section__head--dark">
            <span className="subtitle bg-primary-opacity">What you get</span>
            <h2 className="title color-white">Benefits built around real life</h2>
          </ScrollRevealSection>

          <div className="row row--15 mt_dec--30">
            {BENEFITS.map((benefit, index) => (
              <div className="col-12 col-sm-6 col-lg-4 mt--30" key={benefit.title}>
                <ScrollRevealSection style={{ "--reveal-delay": `${(index % 3) * 0.08}s` }}>
                  <div className="career-benefit-card">
                    <span className="career-benefit-card__icon"><i className={benefit.icon}></i></span>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                </ScrollRevealSection>
              </div>
            ))}
          </div>
        </div>
      </section>




















      {/* ══════════════ APPLICATION PROCESS ══════════════ */}
      <section className="career-section">
        <div className="container">
          <ScrollRevealSection className="career-section__head">
            <span className="subtitle bg-primary-opacity">How it works</span>
            <h2 className="title">A hiring process that respects your time</h2>
          </ScrollRevealSection>

          <div className="row row--15 mt_dec--30">
            {STEPS.map((step, index) => (
              <div className="col-12 col-sm-6 col-lg-3 mt--30" key={step.title}>
                <ScrollRevealSection style={{ "--reveal-delay": `${index * 0.08}s` }}>
                  <div className="career-step-card">
                    <span className="career-step-card__num">{step.num}</span>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </ScrollRevealSection>
              </div>
            ))}
          </div>
        </div>
      </section>




















      {/* ══════════════ OPEN ROLES ══════════════ */}
      <section className="career-section career-roles" id="open-roles">
        <div className="container">
          <ScrollRevealSection className="career-section__head">
            <span className="subtitle bg-primary-opacity">Join our talent pool</span>
            <h2 className="title">Roles we&apos;re always looking to fill</h2>
            <p className="description has-medium-font-size">
              We don&apos;t always have a formal listing open for every role below, but if one of these
              is you, we want to hear from you anyway. We reach out the moment a real opening matches
              your background.
            </p>
          </ScrollRevealSection>

          <ScrollRevealSection
            className={`career-roles__list${ROLES_APPLY_ENABLED ? "" : " career-roles__list--disabled"}`}
          >
            {OPEN_ROLES.map((role) => (
              <a
                key={role.title}
                href={`mailto:careers@smarttechacademy.org?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                className="career-role-row"
                aria-disabled={!ROLES_APPLY_ENABLED}
                tabIndex={ROLES_APPLY_ENABLED ? undefined : -1}
                onClick={(event) => { if (!ROLES_APPLY_ENABLED) event.preventDefault(); }}
              >
                <span className="career-role-row__title">{role.title}</span>
                <span className="career-role-row__type">{role.type}</span>
                <span className="career-role-row__cta">
                  <span className="career-role-row__cta-text">
                    {ROLES_APPLY_ENABLED ? "Apply" : "Not open yet"}
                  </span>
                  <i className="feather-arrow-up-right career-role-row__cta-icon"></i>
                  <i className="feather-slash career-role-row__cta-icon career-role-row__cta-icon--disabled"></i>
                </span>
              </a>
            ))}
          </ScrollRevealSection>

          <ScrollRevealSection className="career-roles__note">
            <p>
              Don&apos;t see your role above? Send us your CV and portfolio at{" "}
              <a href="mailto:careers@smarttechacademy.org">careers@smarttech.ng</a>, we keep
              every application on file and reach out when a fit comes up.
            </p>
          </ScrollRevealSection>
        </div>
      </section>









      {/* ══════════════ NEWSLETTER (reuse shared) ══════════════ */}
      <div
        className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap"
        style={{ background: "url(" + image_url("/app_images/bg/dots.png") + ") repeat center/auto" }}
      >
        <Newsletter />
      </div>





    </main>



  );


};

export default CareersPage;
