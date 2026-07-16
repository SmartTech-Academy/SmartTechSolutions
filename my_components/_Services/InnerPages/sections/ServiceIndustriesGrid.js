import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

/**
 * Flat, light industries grid — the generalized version of the pattern
 * modeled on cubix.co/hybrid-app-development-services's "Proven Hybrid App
 * Development Expertise Tailored for Industries" section (see
 * MobileIndustriesShowcase.js for the original). A split header (heading
 * left, supporting paragraph right) above a uniform grid of minimal cards —
 * name plus one line, no icons, no dark theme.
 */
const ServiceIndustriesGrid = ({ eyebrow = "Built for your world", title, description, industries }) => {
  return (
    <div className="svc-industries">
      <div className="container">
        <ScrollRevealSection className="svc-industries__head">
          <div className="row g-5 align-items-end">
            <div className="col-lg-6">
              <span className="subtitle bg-primary-opacity">{eyebrow}</span>
              <h2 className="title">{title}</h2>
            </div>
            <div className="col-lg-6">
              <p className="description has-medium-font-size">{description}</p>
            </div>
          </div>
        </ScrollRevealSection>

        <div className="svc-industries__grid">
          {industries.map((industry, index) => (
            <ScrollRevealSection
              className="svc-industries__cell"
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

export default ServiceIndustriesGrid;
