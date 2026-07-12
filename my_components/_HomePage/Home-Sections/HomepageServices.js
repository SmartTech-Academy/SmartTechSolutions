import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";
import { ROUTE } from "@/route/app_routes.js";


import { useAppContext } from "@/context/Context";

const HomepageServices = ({ services }) => {
  // const { toggle } = useAppContext();

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, [services]);

  return (
    <>
      <div className="rbt-course-grid-column">
        {/* <div className={`rbt-course-grid-column list-column-half ${ toggle ? "active-list-view" : "" }`}> */}
        
        {services.map((data, index) => {

          const serviceRoute = ROUTE[data.routeKey] ?? "#";

          return (
            <div
              className="course-grid-3 rbt-service-pro"
              data-sal-delay={150 + index * 80}
              data-sal="slide-up"
              data-sal-duration="800"
              key={data.id}
            >
              <div className="rbt-card variation-01 rbt-hover rbt-service-pro__inner">
                <div className="rbt-card-img rbt-service-pro__img">
                  <Link href={serviceRoute}>
                    <Image src={data.image} width={600} height={400} alt={data.service} />
                  </Link>
                  <span className="rbt-service-pro__glow" aria-hidden="true" />
                </div>
                <div className="rbt-card-body">
                  <h4 className="rbt-card-title">
                    <Link href={serviceRoute}>
                      {data.service}
                    </Link>
                  </h4>
                  <p className="rbt-card-text">
                    {data.description}
                  </p>
                  <div className="rbt-card-bottom">
                    <Link className="rbt-service-pro__cta" href={serviceRoute}>
                      <span>Learn More</span>
                      <span className="rbt-service-pro__cta-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );

        })}

      </div>
    </>
  );
};

export default HomepageServices;
