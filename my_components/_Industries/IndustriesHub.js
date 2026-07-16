import Link from "next/link";

import { INDUSTRIES } from "@/my_data/industries/industries.js";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

const IndustriesHub = () => {
  return (
    <main className="rbt-main-wrapper ind-hub">
      <section className="ind-hub__hero">
        <span className="ind-hub__grid-bg" aria-hidden="true" />
        <span className="ind-hub__glow ind-hub__glow--one" aria-hidden="true" />
        <span className="ind-hub__glow ind-hub__glow--two" aria-hidden="true" />

        <div className="container">
          <ScrollRevealSection className="ind-hub__hero-inner">
            <span className="subtitle bg-primary-opacity">16 industries, one engineering team</span>
            <h1 className="title color-white">Industries we serve</h1>
            <p className="description">
              We don&apos;t hand every client the same template. Each industry below comes with its own
              playbook, shaped by real products we&apos;ve shipped and the specific problems that
              industry actually needs solved.
            </p>
          </ScrollRevealSection>
        </div>
      </section>

      <section className="ind-hub__grid-section">
        <div className="container">
          <div className="row row--15 mt_dec--30">
            {INDUSTRIES.map((industry, index) => (
              <div className="col-12 col-sm-6 col-lg-3 mt--30" key={industry.slug}>
                <ScrollRevealSection style={{ "--reveal-delay": `${(index % 4) * 0.06}s` }}>
                  <Link
                    href={industry.href}
                    className="ind-hub-card"
                    style={{ "--card-accent": industry.accent }}
                  >
                    <span className="ind-hub-card__icon">
                      <i className={industry.icon}></i>
                    </span>
                    <h4>{industry.name}</h4>
                    <p>{industry.eyebrow}</p>
                    <span className="ind-hub-card__cta">
                      Explore <i className="feather-arrow-right"></i>
                    </span>
                  </Link>
                </ScrollRevealSection>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustriesHub;
