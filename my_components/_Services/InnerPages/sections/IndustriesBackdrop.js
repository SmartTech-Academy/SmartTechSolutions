import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

/**
 * Shared backdrop wrapper for "Industries we serve" — reused on the
 * homepage and the Our Process page, each page keeps its own
 * <Industries data=... /> content. A quiet, warm-white surface (distinct
 * from the pure-white sections on either side of it) with restrained
 * hairline borders top and bottom — the classic editorial way to set a
 * section apart without resorting to a dark, gradient-and-glow "SaaS"
 * backdrop.
 */
const IndustriesBackdrop = ({ children }) => {
  return (
    <div className="rbt-industries-backdrop">
      <ScrollRevealSection className="rbt-industries-backdrop__content container">
        {children}
      </ScrollRevealSection>
    </div>
  );
};

export default IndustriesBackdrop;
