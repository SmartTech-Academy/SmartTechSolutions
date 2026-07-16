import Link from "next/link";

import { SOLUTIONS } from "@/my_data/solutions/solutions.js";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

const SolutionsHub = () => {
  return (
    <main className="rbt-main-wrapper sol-hub">
      <section className="sol-hub__hero">
        <span className="sol-hero-v2__pattern" aria-hidden="true" />
        <span className="sol-hub__hero-blob" aria-hidden="true" />

        <div className="container">
          <ScrollRevealSection className="sol-hub__hero-inner">
            <span className="subtitle bg-primary-opacity">ERP & CRM implementation</span>
            <h1 className="title">Which platform are you already running?</h1>
            <p className="description">
              We don&apos;t just build custom software — we implement the leading ERP and CRM
              platforms your business already runs on, configured, migrated, and supported by a
              team that understands the software underneath, not just the checkout page. We hold
              certified partner status with Odoo and Zoho, and run hands-on specialist
              implementations across NetSuite, SAP Business One, and Microsoft Dynamics 365.
            </p>
          </ScrollRevealSection>
        </div>
      </section>

      <section className="sol-hub__grid-section">
        <div className="container">
          <div className="row row--15 mt_dec--30 justify-content-center">
            {SOLUTIONS.map((solution, index) => (
              <div className="col-12 col-sm-6 col-lg-4 mt--30" key={solution.slug}>
                <ScrollRevealSection style={{ "--reveal-delay": `${(index % 3) * 0.08}s` }}>
                  <Link
                    href={solution.href}
                    className="sol-hub-card"
                    style={{ "--card-accent": solution.accent }}
                  >
                    {solution.isPartner ? (
                      <span className="sol-hub-card__partner-tag">
                        <i className="feather-award"></i> Certified partner
                      </span>
                    ) : null}
                    <span className="sol-hub-card__icon">
                      <i className={solution.icon}></i>
                    </span>
                    <h4>{solution.name}</h4>
                    <p>{solution.eyebrow}</p>
                    <span className="sol-hub-card__cta">
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

export default SolutionsHub;
