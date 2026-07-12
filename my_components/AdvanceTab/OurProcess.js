import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import SectionHead from "./SectionHead";

import ideationImg from "@/public/app_images/services/process_ideation_design.webp";
import developmentImg from "@/public/app_images/services/process_development.webp";
import launchImg from "@/public/app_images/services/process_launch_support.webp";

const TABS = [
  {
    id: "IdeateAndDesign",
    label: "ideation-and-design-tab",
    title: (
      <>
        Ideation <span className="theme-gradient">and Design</span>
      </>
    ),
    plainTitle: "Ideation and Design",
    description:
      "We analyze your vision to create a minimal viable product (MVP) that maximizes value and user satisfaction",
    image: ideationImg,
  },
  {
    id: "Develop",
    label: "development-tab",
    title: "Development",
    plainTitle: "Development",
    description:
      "Delivering end-to-end solutions through feasibility assessments, smart architecture, and agile methods for quality results",
    image: developmentImg,
  },
  {
    id: "TestAndLaunch",
    label: "test-launch-support-tab",
    title: (
      <>
        Test, launch <span className="theme-gradient">and support</span>
      </>
    ),
    plainTitle: "Test, launch and support",
    description:
      "Ensuring top quality and reliability with comprehensive QA, seamless launch, and dedicated post-launch support",
    image: launchImg,
  },
];

/**
 * "Our Product Development Process" — the tab buttons auto-advance as the
 * section scrolls through view (mapped from scroll progress across a
 * tall pinned wrapper), simulating a click on each button in turn, while
 * still supporting a real click to jump straight to a tab. The three
 * preview images are stacked absolutely and cross-faded with a plain CSS
 * opacity/transform transition (GPU-composited) instead of Bootstrap's
 * .fade/.show pair, which needs a browser reflow between adding the two
 * classes to animate at all — applying both in the same React commit (as
 * scroll-driven updates do) skipped the transition entirely and made the
 * swap look like it "hung" and then jump-cut.
 */
const OurProcess = () => {
  const [activeTab, setActiveTab] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    // Scroll-driven tab switching is a desktop-only flourish — the tall
    // pinned wrapper it depends on is also reverted to normal flow below
    // this breakpoint (see HomepageSections.css), so on tablet/mobile the
    // listener is never attached at all and the section just behaves like
    // any other: scroll past normally, tap a tab to switch it.
    const desktopQuery = window.matchMedia("(min-width: 992px)");

    let rafId = null;
    let cleanupScroll = null;

    const updateFromScroll = () => {
      rafId = null;
      const node = wrapperRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / scrollable));
      const index = Math.min(TABS.length - 1, Math.floor(progress * TABS.length));

      setActiveTab((current) => (current === index ? current : index));
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(updateFromScroll);
    };

    const attachIfDesktop = () => {
      if (desktopQuery.matches) {
        window.addEventListener("scroll", onScroll, { passive: true });
        updateFromScroll();
        cleanupScroll = () => window.removeEventListener("scroll", onScroll);
      } else if (cleanupScroll) {
        cleanupScroll();
        cleanupScroll = null;
        setActiveTab(0);
      }
    };

    attachIfDesktop();
    desktopQuery.addEventListener("change", attachIfDesktop);

    return () => {
      desktopQuery.removeEventListener("change", attachIfDesktop);
      if (cleanupScroll) cleanupScroll();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="rbt-process-scrolly" ref={wrapperRef}>
      <div className="rbt-process-scrolly__sticky">
        <div className="container">
          <SectionHead
            tag=""
            title="Our Product Development Process"
            desc="With over a decade of experience under our belt, we've meticulously honed our product process from concept to scale. Rest assured, you're in capable hands."
          />

          <div className="row g-5">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
              <div className="advance-tab-button advance-tab-button-1">
                <ul className="nav nav-tabs tab-button-list" role="tablist">
                  {TABS.map((tab, index) => (
                    <li className="nav-item" role="presentation" key={tab.id}>
                      <button
                        type="button"
                        className={`nav-link tab-button${activeTab === index ? " active" : ""}`}
                        id={tab.label}
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={activeTab === index}
                        onClick={() => setActiveTab(index)}
                      >
                        <div className="tab">
                          <h4 className="title">{tab.title}</h4>
                          <p className="description">{tab.description}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
              <div className="rbt-process-image-stack">
                {TABS.map((tab, index) => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={tab.label}
                    className={`rbt-process-image-stack__item${activeTab === index ? " is-active" : ""}`}
                  >
                    <Image
                      src={tab.image}
                      width={1080}
                      height={780}
                      alt={`${tab.plainTitle} — SmartTech Solutions product process`}
                      placeholder="blur"
                      /* All 3 are eager/priority, not just the first — the
                         scroll-driven tab switch can flip to image 2 or 3
                         within a fraction of a second of the section
                         entering view, faster than lazy-loading fetches
                         and decodes an on-demand image. Preloading all
                         three up front (they're small, local, above-the-
                         fold-adjacent assets) means the tab switch never
                         has to wait on a network/decode, which is what
                         was making the page feel like it "hung" mid-scroll. */
                      priority
                      sizes="(max-width: 991px) 100vw, 60vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
