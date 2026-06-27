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
        
        {services.map((data) => {

          const serviceRoute = ROUTE[data.routeKey] ?? "#";

          return (
            <div className="course-grid-3" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800" key={data.id}>
              <div className={`rbt-card variation-01 rbt-hover`}>
                {/* <div className={`rbt-card variation-01 rbt-hover ${ toggle ? "card-list-2" : "" }`}> */}
                <div className="rbt-card-img">
                  <Link href={serviceRoute}>
                    <Image src={data.image} width={600} height={400} alt={data.service} />
                  </Link>
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
                    <Link className="transparent-button" href={serviceRoute}>
                      Learn More
                      <i className="feather-arrow-right"></i>
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
