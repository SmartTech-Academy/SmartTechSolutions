import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

// Copy written specifically for mobile app delivery per industry — not the
// shared industries.json (which carries NFT-marketplace leftover text from
// an older page).
const INDUSTRIES = [
  { title: "Fintech", desc: "Biometric-secured banking, budgeting and payments apps built to move real money safely." },
  { title: "Healthcare", desc: "HIPAA-minded patient apps for telehealth, appointment booking and remote monitoring." },
  { title: "Logistics", desc: "Live GPS tracking, route optimization and driver apps that keep fleets moving." },
  { title: "Real Estate", desc: "Listing, tour-booking and tokenized-ownership apps for a native mobile habit." },
  { title: "EdTech", desc: "Course, quiz and progress-tracking apps engineered to keep learners coming back." },
  { title: "Web3 & Blockchain", desc: "Wallet, token and NFT apps with on-chain purchase flows that feel App-Store smooth." },
  { title: "Hospitality", desc: "Booking, loyalty and guest-services apps that turn one stay into a repeat customer." },
  { title: "Faith & Community", desc: "Discipleship, giving and community apps built for daily engagement at scale." },
];

/**
 * Modeled directly on cubix.co/hybrid-app-development-services's "Proven
 * Hybrid App Development Expertise Tailored for Industries" section: a
 * plain light background, a split header (large heading left, supporting
 * paragraph right), and a flat, uniform grid of minimal cards — name plus
 * one line, no icons, no borders, no dark theme. Replaces the previous
 * interactive tabbed directory to match that reference exactly.
 */
const MobileIndustriesShowcase = () => {
  return (
    <div className="mad-industries">
      <div className="container">
        <ScrollRevealSection className="mad-industries__head">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6">
              <span className="subtitle bg-primary-opacity">Built for your world</span>
              <h2 className="title">Industries we bring mobile-first</h2>
            </div>
            <div className="col-lg-6">
              <p className="description has-medium-font-size">
                Backed by real, shipped work across eight industries, SmartTech builds mobile
                products that understand each industry&apos;s own constraints, not a copy-pasted
                template.
              </p>
            </div>
          </div>
        </ScrollRevealSection>

        <div className="mad-industries__grid">
          {INDUSTRIES.map((industry, index) => (
            <ScrollRevealSection
              className="mad-industries__cell"
              style={{ "--reveal-delay": `${(index % 4) * 0.05}s` }}
              key={industry.title}
            >
              <h4>{industry.title}</h4>
              <p>{industry.desc}</p>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileIndustriesShowcase;
