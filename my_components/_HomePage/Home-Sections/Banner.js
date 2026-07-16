import { useEffect, useRef } from "react";
import Link from "next/link";
import Typed from "typed.js";

import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";

const HERO_STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "350+", label: "Designers & Developers" },
  { value: "410+", label: "Satisfied Clients" },
];

export const Banner = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Web Platforms.",
        "Mobile Apps.",
        "AI Automations.",
        "Blockchain Products.",
        "Immersive Games.",
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1400,
      startDelay: 1400,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  const scrollToNext = () => {
    const next = document.querySelector(".rbt-hero-editorial")?.nextElementSibling;
    next?.scrollIntoView({ behavior: "smooth" });
  };

  // Once the mount-in animation finishes, drop it entirely instead of
  // leaving the (finished, identity-transform) animation attached. Some
  // engines keep an animated element promoted to its own compositing
  // layer for a while after a transform animation ends, which can make
  // text on that layer render a touch softer than normal — most visible
  // on the large title. Clearing `animation` on animationend forces a
  // clean repaint back in the normal (non-layered) text rendering path.
  const clearAnimation = (event) => {
    const el = event.currentTarget;
    // The base .rbt-hero-wonder rule starts at opacity: 0 — that was only
    // ever being held at 1 by the (now finished) animation's fill-mode,
    // so it must be pinned explicitly before the animation is cleared or
    // the element snaps straight back to its hidden starting state.
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
    el.style.animation = "none";
  };

  return (
    <div className="rbt-hero-editorial height-800">
      <span
        className="rbt-hero-editorial__bg"
        style={{ backgroundImage: "url(/app_images/banner/smarttech_hero_bg.webp)" }}
        aria-hidden="true"
      />
      <span className="rbt-hero-editorial__scrim" aria-hidden="true" />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <span
                className="rbt-hero-badge rbt-hero-wonder"
                style={{ "--wonder-delay": "0.05s" }}
                onAnimationEnd={clearAnimation}
              >
                <span className="rbt-hero-badge__dot" /> Technology &amp; Digital Solutions Agency
              </span>

              <h1
                className="title display-one rbt-hero-wonder"
                style={{ "--wonder-delay": "0.22s" }}
                onAnimationEnd={clearAnimation}
              >
                We build{" "}
                <span className="theme-gradient rbt-hero-typed-wrap">
                  <span ref={typedRef} />
                </span>
                <br />that move your business forward.
              </h1>

              <p
                className="description rbt-hero-wonder"
                style={{ "--wonder-delay": "0.4s" }}
                onAnimationEnd={clearAnimation}
              >
                Your reliable development partner with one goal in focus: products that deliver
                enduring value and drive profitability. We transform industries with robust,
                creative digital solutions.
              </p>

              <div
                className="rbt-button-group justify-content-center rbt-hero-wonder"
                style={{ "--wonder-delay": "0.56s" }}
                onAnimationEnd={clearAnimation}
              >
                <Link className="rbt-btn btn-white hover-icon-reverse" href={ROUTE.appointment}>
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">Lets Talk About Your Project</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </div>
                </Link>
                <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.service}>
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">Our Services</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </div>
                </Link>
              </div>

              <div
                className="rbt-hero-stats rbt-hero-wonder"
                style={{ "--wonder-delay": "0.72s" }}
                onAnimationEnd={clearAnimation}
              >
                {HERO_STATS.map((stat, index) => (
                  <div className="rbt-hero-stats__item" key={index}>
                    <span className="rbt-hero-stats__value">{stat.value}</span>
                    <span className="rbt-hero-stats__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="rbt-hero-scroll-cue"
        onClick={scrollToNext}
        aria-label="Scroll to explore"
      >
        <span className="rbt-hero-scroll-cue__mouse">
          <span className="rbt-hero-scroll-cue__wheel" />
        </span>
      </button>
    </div>
  );
};
