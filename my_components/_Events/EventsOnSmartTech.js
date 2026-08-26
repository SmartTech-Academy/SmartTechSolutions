import React, { useState } from "react";
import Link from "next/link";
// import React from "react";
import Image from "next/image";

import EventHead from "@/my_components/_Events/sections/EventHead";
import EventList from "@/my_components/_Events/sections/Events";
import EventData from "@/my_data/events.json";

import CourseFilter from "@/my_components/_Courses/Filters/CourseFilter";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import EventCarouse from "@/my_components/Events/EventCarouse";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import shapeImg from "../../public/images/icons/three-shape.png";
import { image_url } from "../../helper/Utilities";



const EventsOnSmartTech = () => {

  const [filterToggle, setFilterToggle] = useState(true);
  
  // let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));
  const img_link = image_url("/app_images/event/event_landing_bg_image.jpg");

  return (
    <>


{/* "url("+img_link+")" */}


      <div className="slider-area rbt-banner-6 variation-01 bg_image bg_image--14 header-transperent-spacer" data-black-overlay="7" 
        style={{ paddingTop: 132, backgroundImage: `url(${img_link})` }}>
        <div className="wrapper w-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="inner text-center">
                  {/* <div className="badge-top mb--30">
                    <span className="rbt-badge">Histudy Badge</span>
                  </div> */}
                  <h1 className="title">
                    Bringing you closer to <span className="theme-gradient">all the events</span>{" "}
                    <strong>you love</strong>
                  </h1>
                  <p className="description"> Find events and make memories that last a lifetime. <br />Your next great experience is just a click away.{" "} </p>
                  <div className="rbt-button-group mt--30">
                    <button className="rbt-btn btn-gradient hover-icon-reverse" onClick={() => { document.getElementById('event_head').scrollIntoView({ behavior: 'smooth' }) }}>
                        <span className="icon-reverse-wrapper">
                            <span className="btn-text">Discover Events</span>
                            <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                            <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                        </span>
                    </button>

                    <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.login}>
                        <span className="icon-reverse-wrapper">
                            <span className="btn-text">Create Events</span>
                            <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                            <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                        </span>
                    </Link>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div id="event_head"></div>
        </div>
      </div>





      










      <div className="about-style-2 rbt-section">

            <EventHead />

            <div className="rbt-counterup-area rbt-section-overlayping-top rbt-section-gapBottom">
              <div className="container">
                <EventList isPagination={true} parentClass="card-list-2 event-list-card" childClass="col-lg-6 col-md-6 col-12" getEvents={EventData} button_type="type_1" buttom_name="Get Ticket" 
                button_link={ROUTE.event_ticket_purchase+1} caller="public" />
              </div>
            </div>
      </div>





















      <div className="rbt-event-area rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--55">
            <div className="section-title text-left">
              <h2 className="title">More Events</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <EventCarouse />
            </div>
          </div>
        </div>
      </div>





















      <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="rbt-cta-6 text-center">
                          <div className="content">
                              <h1 className="title"> {"Let's bring your"}
                              <br /> vision to life. </h1>
                              <p>Pull the Trigger!</p>
                              <div className="rbt-button-group justify-content-center">
                                  <Link className="rbt-btn btn-gradient" href={ROUTE.appointment}> Hire Us </Link>
                                  <Link className="rbt-btn btn-border" href={ROUTE.project}> Explore our Projects </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
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
                                <span className="btn-icon"><i className="feather-arrow-right"></i></span>
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

















    







      
    </>
  );
};

export default EventsOnSmartTech;
