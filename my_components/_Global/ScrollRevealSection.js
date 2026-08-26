import { useEffect, useRef, useState } from "react";

/**
 * Toggles `is-in-view` based on live intersection (not "once", unlike the
 * global sal.js instance) so CSS transitions can play forward on scroll-in
 * and reverse on scroll-out.
 *
 * `threshold` is a ratio of the TARGET's own area, not the viewport's. A
 * section taller than the viewport (e.g. a long stacked card grid on
 * mobile) can never satisfy a ratio like the old 0.18 default while
 * scrolled into its middle — visible area / the section's own huge total
 * area stays under 0.18 even at full-bleed, so `isIntersecting` flips back
 * to false and the content (opacity: 0 until revealed) disappears again
 * mid-scroll. threshold: 0 fires on any non-zero overlap regardless of the
 * target's size, so it reveals correctly for both small and oversized
 * sections and still reverses cleanly once there's truly zero overlap.
 */
const ScrollRevealSection = ({ children, className = "", threshold = 0, rootMargin = "-40px", style }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={`rbt-scroll-reveal${inView ? " is-in-view" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollRevealSection;
