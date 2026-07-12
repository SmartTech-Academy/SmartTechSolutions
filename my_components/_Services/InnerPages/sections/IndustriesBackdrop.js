import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

/**
 * Shared backdrop wrapper for "Industries we serve" — reused on the
 * homepage and the Our Process page, each page keeps its own
 * <Industries data=... /> content. Previously a photo backdrop; that was
 * both a heavy asset to ship on two pages and a slow section to scroll
 * past, so it's now a pure-CSS dark pattern (animated via `transform`
 * only, so it stays GPU-composited and doesn't repaint on scroll).
 */
const IndustriesBackdrop = ({ children }) => {
  return (
    <div className="rbt-industries-backdrop">
      <span className="rbt-industries-backdrop__grid" aria-hidden="true" />
      <span className="rbt-industries-backdrop__glow rbt-industries-backdrop__glow--one" aria-hidden="true" />
      <span className="rbt-industries-backdrop__glow rbt-industries-backdrop__glow--two" aria-hidden="true" />
      <ScrollRevealSection className="rbt-industries-backdrop__content container">
        {children}
      </ScrollRevealSection>
    </div>
  );
};

export default IndustriesBackdrop;
