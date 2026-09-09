import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import { ROUTE } from "@/route/app_routes.js";


// Short, homepage-only taglines — the JSON's `description` field holds the
// long-form paragraph used on each service's own detail page; a paragraph
// per card is what made this grid read as a blog listing rather than a
// services overview, so the grid gets its own tight one-liner instead.
const TAGLINE_BY_ID = {
  1: "Fast, scalable web platforms engineered to outperform the competition.",
  2: "Native-grade mobile apps built for engagement, retention, and growth.",
  3: "Secure, transparent decentralized systems, from tokens to full marketplaces.",
  4: "Immersive 2D, 3D, and play-to-own games built in Unity and Unreal Engine.",
  5: "Custom AI systems that automate workflows and sharpen every decision.",
  6: "Custom marketplaces and ecosystems built for real digital ownership.",
};

const ICON_BY_ID = {
  1: "feather-code",
  2: "feather-smartphone",
  3: "feather-box",
  4: "feather-play-circle",
  5: "feather-cpu",
  6: "feather-image",
};

const HomepageServices = ({ services }) => {

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, [services]);

  return (
    <div className="rbt-service-tiles">
      {services.map((data, index) => {

        const serviceRoute = ROUTE[data.routeKey] ?? "#";

        return (
          <Link
            href={serviceRoute}
            className="rbt-service-tile"
            data-sal="slide-up"
            data-sal-delay={120 + index * 70}
            data-sal-duration="700"
            key={data.id}
          >
            <i className={`rbt-service-tile__watermark ${ICON_BY_ID[data.id]}`} aria-hidden="true"></i>

            <span className="rbt-service-tile__icon">
              <i className={ICON_BY_ID[data.id]}></i>
            </span>

            <h4 className="rbt-service-tile__title">{data.service}</h4>
            <p className="rbt-service-tile__desc">{TAGLINE_BY_ID[data.id]}</p>

            <span className="rbt-service-tile__cta">
              Explore service
              <i className="feather-arrow-up-right"></i>
            </span>
          </Link>
        );

      })}
    </div>
  );
};

export default HomepageServices;
