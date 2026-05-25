// import { useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";

import BlogList from "./sections/BlogList";
import Banner from "@/my_components/Common/Banner";
import Newsletter from "@/my_components/Newsletters/Newsletter";
import EventCarouse from "@/my_components/Events/EventCarouse";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";
import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import { image_url } from "../../helper/Utilities";




const AllBlogs = () => {


  return (


        <main className="rbt-main-wrapper">
            

            <Banner col="col-lg-10 offset-lg-1" text={"The "+CONFIG.APP_NAME+" Blog"} ArticlesLength={"0"} />




            <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    <BlogWidget extra_class=" sal-animate" />
                </div>
            </div>





            <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gap">
                <div className="container">
                    <BlogList isPagination={true} />
                </div>
            </div>






            <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--75">
                <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse" extra_class=" sal-animate" />
            </div>







            <div className="rbt-event-area rbt-section-gap bg-gradient-3">
                <div className="container">
                    <div className="row mb--55">
                        <div className="section-title text-center">
                            <span className="subtitle bg-white-opacity">
                                STIMULATED TO TAKE PART IN?
                            </span>
                            <h2 className="title color-white">Upcoming Events</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <EventCarouse />
                        </div>
                    </div>
                </div>
            </div>







            <div className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap" 
                style={{ background: "url("+image_url('/app_images/bg/dots.png')+") repeat center/auto" }}>
                <Newsletter />
            </div>




        </main>

    );
  
};



export default AllBlogs;
