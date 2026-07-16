import Link from "next/link";

import { projects } from "@/my_data/projects/projects.js";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";
import LazyImage from "@/my_components/_Global/LazyImage";

// The five real SmartTech builds that shipped a native/React Native mobile
// app — pulled straight from the same data module that powers "Our
// Projects", so this spotlight never drifts out of sync with the actual
// case studies. `highlight` is page-specific curation, not project data.
const MOBILE_PROJECT_IDS = [1, 7, 5, 3, 10];

const HIGHLIGHTS = {
  1: "SmartTech built a blockchain-powered real estate platform, giving investors fractional ownership, real-time secondary trading, and a native iOS & Android app to manage it all on the go.",
  7: "SmartTech built a cross-platform discipleship app used by thousands of students, bringing courses, progress tracking, and community into one connected mobile experience.",
  5: "SmartTech engineered a React Native wallet with on-chain purchase and swap flows, giving holders a fast, secure way to manage a gold-backed digital asset from their phone.",
  3: "SmartTech shipped a live GPS ride and freight tracking app, keeping drivers, dispatchers, and customers in sync with real-time location data, built natively for React Native.",
  10: "SmartTech delivered an offline-first reading experience for React Native, so users keep learning without missing a page, connection or not.",
};

// Curated per-project brand panel color — Cubix's reference layout gives
// each case study its own full-bleed colored backdrop (matching that
// product's own brand) behind the phone mockups, rather than a plain photo
// crop. Picked to match each shipped product's real identity.
const PANEL_COLORS = {
  1: "linear-gradient(160deg, #0b1a3a 0%, #14275c 100%)",
  7: "linear-gradient(160deg, #7c2d12 0%, #c2410c 100%)",
  5: "linear-gradient(160deg, #3b1d5c 0%, #7c3aed 100%)",
  3: "linear-gradient(160deg, #78350f 0%, #d97706 100%)",
  10: "linear-gradient(160deg, #064e3b 0%, #0d9488 100%)",
};

const MobileSuccessStories = () => {
  const featured = MOBILE_PROJECT_IDS.map((id) => projects.find((p) => p.id === id)).filter(Boolean);

  return (
    <div className="mad-outcomes">
      <div className="container">
        <ScrollRevealSection className="mad-outcomes__head">
          <span className="subtitle bg-primary-opacity">Proof, not promises</span>
          <h2 className="title">
            Mobile apps we&apos;ve <span className="theme-gradient">shipped and scaled</span>
          </h2>
          <p className="description has-medium-font-size">
            A look inside five native and cross-platform builds our team designed, engineered, and
            shipped to real app stores for real users.
          </p>
        </ScrollRevealSection>
      </div>

      <div className="mad-outcomes__list">
        {featured.map((project, index) => (
          <ScrollRevealSection
            className={`mad-outcome-row${index % 2 === 1 ? " mad-outcome-row--reverse" : ""}`}
            style={{ "--reveal-delay": `${index * 0.05}s` }}
            key={project.id}
          >
            <div className="mad-outcome-row__media" style={{ background: PANEL_COLORS[project.id] }}>
              <LazyImage
                wrapperClassName="mad-outcome-row__lazy"
                src={project.cover}
                alt={`${project.name} — as shown on our Projects page`}
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
                className="mad-outcome-row__img"
              />
            </div>

            <div className="mad-outcome-row__body">
              <span className="mad-outcome-row__industry">{project.industry}</span>
              <h3 className="mad-outcome-row__name">{project.name}</h3>
              <p className="mad-outcome-row__highlight">{HIGHLIGHTS[project.id]}</p>
              <Link href={project.href} className="mad-outcome-row__cta">
                View Case Study
              </Link>
            </div>
          </ScrollRevealSection>
        ))}
      </div>
    </div>
  );
};

export default MobileSuccessStories;
