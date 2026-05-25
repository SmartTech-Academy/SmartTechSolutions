import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import React from "react";
// import Image from "next/image";
import sal from "sal.js";

import EventBreadCrumb from "./sections/EventBreadCrumb";
import EventDetails from "./sections/EventDetails";
import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import TrustedBrands from "@/my_components/Brand/Brands";
import EventData from "@/data/events.json";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import { image_url } from "../../helper/Utilities";



const SmartTechEventsDetails = () => {

  const router = useRouter();
  const postId = parseInt(router.query.eventId);
  // console.log(postId);
  let getEvent;

  getEvent = JSON.parse(JSON.stringify(EventData.events));

  const getMatchEvent = getEvent.find((event) => event.id === postId);

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
    
    if (postId && getMatchEvent === undefined) {
      router.push(ROUTE.events);
    }
  }, [getMatchEvent, router]);


  return (

    <>

      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        {getMatchEvent && <EventBreadCrumb getMatchEvent={getMatchEvent} />}
      </div>





      <div className="rbt-course-details-area rbt-section-gap">
        <div className="container">
          {getMatchEvent && <EventDetails getMatchEvent={getMatchEvent} />}
        </div>
      </div>






      <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
        <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse" />
      </div>







      <div className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape">
        <div className="wrapper pb--50 rbt-index-upper">
            <div className="container">
                <div className="row g-5 align-items-end mb--60">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="section-title text-start">
                        <h2 className="title color-white">Latest News</h2>
                        <p className="description color-white-off mt--20">
                            Learning communicate to global world and build Link bright future and career development, increase your skill with our histudy.
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="load-more-btn text-start text-lg-end">
                            <a className="rbt-btn btn-border icon-hover radius-round color-white-off" href={ROUTE.blog}>
                                <span className="btn-text">See All Articles</span>
                                <span className="btn-icon"><i className="feather-a~rrow-right"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <BlogGridMinimal />
            </div>
        </div>
      </div>














      <div className="rbt-newsletter-area bg-color-white rbt-section-gapBottom pt--60">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <Newsletter_2 />
                  </div>
              </div>
          </div>
      </div>

















    

      <div className="rbt-brand-area bg-color-white ptb--60">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-10 offset-lg-1">
                <TrustedBrands />
                </div>
            </div>
          </div>
      </div>
      
    </>

  );

};


export default SmartTechEventsDetails;
