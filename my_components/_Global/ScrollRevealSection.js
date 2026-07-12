import { useEffect, useRef, useState } from "react";

/**
 * Toggles `is-in-view` based on live intersection (not "once", unlike the
 * global sal.js instance) so CSS transitions can play forward on scroll-in
 * and reverse on scroll-out.
 */
const ScrollRevealSection = ({ children, className = "", threshold = 0.18, rootMargin = "-40px", style }) => {
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
