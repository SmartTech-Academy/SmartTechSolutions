import Link from "next/link";

import { ROUTE } from "@/route/app_routes.js";
import { image_url, getYearOffset } from "@/helper/Utilities";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";
import LazyImage from "@/my_components/_Global/LazyImage";
import ProjectCounters from "@/my_components/Counters/ProjectCounters";
import Brands2 from "@/my_components/TrustedByBrands/Brands2";
import ServiceFaq from "./sections/ServiceFaq";
import CysecFaqVisual from "./sections/CysecFaqVisual";
import FaqData from "@/my_data/services/faq.json";

// Problem-first framing before the capability catalog — the risk a
// business is actually carrying is what makes the 12 pillars below land as
// necessary rather than a generic vendor checklist.
const RISK_DRIVERS = [
  { icon: "feather-trending-up", title: "Threats are outpacing generic defenses", desc: "Attackers now automate reconnaissance and phishing at scale — a static firewall-and-antivirus setup from five years ago isn't a real defense against them anymore." },
  { icon: "feather-alert-triangle", title: "A breach costs more than the breach itself", desc: "Downtime, customer trust, and regulatory exposure under frameworks like GDPR, HIPAA, and ISO 27001 usually outweigh the direct cost of the incident." },
  { icon: "feather-globe", title: "Your attack surface keeps expanding", desc: "Cloud infrastructure, remote teams, and connected devices all add new doors in — each one needs to be accounted for, not just the network perimeter." },
  { icon: "feather-user-x", title: "People are still the easiest way in", desc: "Most breaches start with a convincing email, not a sophisticated exploit — technology alone can't close a gap that begins with human behavior." },
];

// The 12 capability pillars behind SmartTech's Cybersecurity practice.
const CAPABILITIES = [
  { icon: "feather-user-check", title: "Identity & Access Management (IAM)", desc: "Centralized authentication, single sign-on, and least-privilege access control across every system and app you run." },
  { icon: "feather-lock", title: "Data Security & Loss Prevention (DLP)", desc: "Classify, encrypt, and monitor sensitive data so it never leaves your business through the wrong door." },
  { icon: "feather-users", title: "Security Awareness & Training", desc: "Turn your team into your first line of defense with ongoing phishing simulations and role-based security training." },
  { icon: "feather-mail", title: "Email & Phishing Protection", desc: "Advanced filtering, spoofing detection, and real-time threat blocking before a malicious email ever reaches an inbox." },
  { icon: "feather-layers", title: "Unified Security Platform", desc: "One consolidated view across your entire security stack, replacing a dozen disconnected tools with a single command center." },
  { icon: "feather-cpu", title: "OT/ICS & IoT Security", desc: "Purpose-built protection for industrial control systems, operational technology, and connected devices." },
  { icon: "feather-activity", title: "SIEM & SOAR Services", desc: "Centralized log analysis and automated incident response that catches threats in minutes, not months." },
  { icon: "feather-search", title: "Vulnerability Management", desc: "Continuous scanning, prioritization, and remediation of security gaps before attackers find them first." },
  { icon: "feather-server", title: "Infrastructure Security", desc: "Hardened cloud, network, and server architecture built to resist intrusion from day one, not patched after the fact." },
  { icon: "feather-eye", title: "Threat Intelligence", desc: "Real-time visibility into the tactics, actors, and vulnerabilities actively targeting your industry." },
  { icon: "feather-radio", title: "MDR/XDR", desc: "24/7 managed detection and response across endpoints, network, and cloud — backed by real analysts, not just alerts." },
  { icon: "feather-shield", title: "DFIR — Digital Forensics & Incident Response", desc: "Rapid breach containment, root-cause investigation, and recovery support when an incident does happen." },
];

const WHY_POINTS = [
  "Full-stack security thinking — baked into architecture, not bolted on after launch",
  "24/7 monitoring and managed detection & response (MDR/XDR) coverage",
  "Real incident response experience — containment, forensics, and recovery",
  "Compliance-ready controls mapped to GDPR, HIPAA, and ISO 27001 — access logging, encryption, and audit trails by default",
  "Security awareness training that actually changes employee behavior",
  "One accountable partner instead of a dozen disconnected vendors",
];

const STATS = [
  { value: "12", label: "Security service pillars" },
  { value: "24/7", label: "Monitoring & response coverage" },
  { value: `${getYearOffset(10)}+`, label: "Years building secure systems" },
];

const CybersecurityServices = () => {
  return (
    <main className="rbt-main-wrapper cysec-page">
      {/* ══════════════ HERO ══════════════ */}
      <section className="cysec-hero">
        <LazyImage
          wrapperClassName="cysec-hero__bg"
          src={image_url("/app_images/bg/cybersecurity_cta_bg.webp", true)}
          alt="Security operations center monitored by SmartTech Solutions"
          fill
          priority
          sizes="100vw"
          className="cysec-hero__bg-img"
        />
        <span className="cysec-hero__overlay" aria-hidden="true" />

        <div className="container">
          <div className="cysec-hero__content rbt-reveal" style={{ "--reveal-delay": "0.1s" }}>
            <span className="cysec-hero__eyebrow"><i className="feather-shield"></i> Cybersecurity Services</span>
            <h1 className="cysec-hero__title">
              Security that keeps pace with what you&apos;re building
            </h1>
            <p className="cysec-hero__desc">
              From identity and access management to 24/7 managed detection and incident response —
              we design and run the security layer serious software deserves, so a breach never becomes
              the story of your business.
            </p>
            <div className="rbt-button-group">
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get a Security Assessment</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
              <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.project}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">See our Work</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </div>

          <div className="cysec-hero__stats rbt-reveal" style={{ "--reveal-delay": "0.2s" }}>
            {STATS.map((stat) => (
              <div className="cysec-hero__stat" key={stat.label}>
                <span className="cysec-hero__stat-value">{stat.value}</span>
                <span className="cysec-hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY SECURITY CAN'T WAIT — problem-first framing ══════════════ */}
      <section className="cysec-section rbt-section-gapTop">
        <div className="container">
          <ScrollRevealSection className="cysec-section__head">
            <span className="subtitle bg-primary-opacity">Why this matters now</span>
            <h2 className="title">The risk isn&apos;t hypothetical — it&apos;s already at your door</h2>
          </ScrollRevealSection>

          <div className="row row--15 mt_dec--30">
            {RISK_DRIVERS.map((risk, index) => (
              <div className="col-12 col-sm-6 col-lg-3 mt--30" key={risk.title}>
                <ScrollRevealSection style={{ "--reveal-delay": `${index * 0.08}s` }}>
                  <div className="cysec-risk-card">
                    <span className="cysec-risk-card__icon"><i className={risk.icon}></i></span>
                    <h4>{risk.title}</h4>
                    <p>{risk.desc}</p>
                  </div>
                </ScrollRevealSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TRUST COUNTERS ══════════════ */}
      <div className="rbt-counterup-area bg-gradient-6 rbt-section-gap">
        <div className="container">
          <ScrollRevealSection className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">
                  Security engineered by the same team that <span className="theme-gradient">builds your software.</span>
                </h2>
                <p className="description has-medium-font-size mt--20">
                  We don&apos;t bolt security on after launch — it&apos;s designed into every architecture
                  decision, from the first line of code to the systems monitoring it in production.
                </p>
              </div>
            </div>
          </ScrollRevealSection>
          <ProjectCounters name_1="Completed Projects" counter_1={80} name_2="Designers and Developers" counter_2={255} name_3="Satisfied Clients Globally" counter_3={400} />
        </div>
      </div>

      {/* ══════════════ CAPABILITIES — dark animated backdrop ══════════════ */}
      <section className="cysec-caps">
        <span className="cysec-caps__grid-bg" aria-hidden="true" />
        <span className="cysec-caps__glow cysec-caps__glow--one" aria-hidden="true" />
        <span className="cysec-caps__glow cysec-caps__glow--two" aria-hidden="true" />

        <div className="container">
          <ScrollRevealSection className="cysec-section__head">
            <span className="subtitle bg-primary-opacity">Full coverage</span>
            <h2 className="title color-white">12 pillars of a real security program</h2>
            <p className="description">
              Not a checklist — a connected security practice, each pillar reinforcing the next.
            </p>
          </ScrollRevealSection>

          <div className="row row--15 mt_dec--30">
            {CAPABILITIES.map((cap, index) => (
              <div className="col-12 col-sm-6 col-lg-4 mt--30" key={cap.title}>
                <ScrollRevealSection style={{ "--reveal-delay": `${(index % 3) * 0.08}s` }}>
                  <div className="cysec-cap-card">
                    <span className="cysec-cap-card__icon"><i className={cap.icon}></i></span>
                    <h4>{cap.title}</h4>
                    <p>{cap.desc}</p>
                  </div>
                </ScrollRevealSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY SMARTTECH ══════════════ */}
      <div className="rbt-feature-area rbt-single-course-features rbt-section-gap rbt-feature-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row row--30 gy-5 align-items-center">
                <ScrollRevealSection className="col-lg-6 col-xl-5">
                  <div className="thumbnail rbt-shadow-box cysec-why-img">
                    <LazyImage
                      wrapperClassName="w-100 radius-10"
                      src={image_url("/app_images/services/why_smarttech_cybersecurity.webp", true)}
                      width={700}
                      height={860}
                      alt="SmartTech security analyst monitoring threat activity"
                    />
                  </div>
                </ScrollRevealSection>

                <ScrollRevealSection className="col-lg-6 col-xl-7">
                  <div className="section-title">
                    <h2 className="title">Why SmartTech for Cybersecurity Services</h2>
                    <p className="b1 mt--15">
                      Security isn&apos;t a product we resell — it&apos;s a discipline we practice on every
                      system we build and every client we protect, backed by real engineers who understand
                      how the software underneath actually works.
                    </p>
                  </div>

                  <ul className="rbt-list-style-1">
                    {WHY_POINTS.map((point) => (
                      <li key={point}><i className="feather-check"></i> {point}</li>
                    ))}
                  </ul>

                  <div className="read-more-btn mt--40">
                    <Link className="rbt-moderbt-btn" href={ROUTE.appointment}>
                      <span className="moderbt-btn-text">Let&apos;s Discuss</span>
                      <i className="feather-arrow-right"></i>
                    </Link>
                  </div>
                </ScrollRevealSection>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ TRUSTED BY ══════════════ */}
      <div className="rbt-brand-area bg-color-white cysec-trusted-brands">
        <div className="container">
          <Brands2 hide_text="false" title="Trusted by ambitious teams and brands" />
        </div>
      </div>

      {/* ══════════════ FAQ ══════════════ */}
      <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden" id="testimonial">
        <div className="container">
          <ScrollRevealSection>
            <ServiceFaq data={FaqData.cybersecurity_faqs} visual={<CysecFaqVisual />} />
          </ScrollRevealSection>
        </div>
      </div>

      {/* ══════════════ CTA ══════════════ */}
      <section className="cysec-cta">
        <span className="cysec-cta__grid-bg" aria-hidden="true" />
        <span className="cysec-cta__glow" aria-hidden="true" />
        <div className="container">
          <ScrollRevealSection className="cysec-cta__inner">
            <h2 className="title">Don&apos;t wait for a breach to take security seriously</h2>
            <p>Get a free security posture review and see exactly where your exposure is.</p>
            <div className="rbt-button-group justify-content-center">
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Started Now!</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
              <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.service}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Explore all Services</span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                </span>
              </Link>
            </div>
          </ScrollRevealSection>
        </div>
      </section>
    </main>
  );
};

export default CybersecurityServices;
