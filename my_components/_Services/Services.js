import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
// import Image from "next/image";

import ServicesProp from "./sections/ServicesProp";
import SingleCourseData from "../../data/pages/11-singleCourse.json";
import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import AdvanceTab from "@/my_components/AdvanceTab/AdvanceTab";

// import Category from "./Home-Sections/Category";
// import FeaturedCourses from "./Home-Sections/FeaturedCourses";
// import UdemyAffiliateBanner from "./Home-Sections/UdemyAffiliateBanner";
// import Card from "../../components/Cards/Card";
// import AboutTwo from "../../components/Abouts/About-Two";
// import CallToAction from "../../components/Call-To-Action/CallToAction";
// import Counter from "../../components/Counters/Counter";
// import Testimonial_1 from "../../my_components/Testimonials/Testimonial_1";
import EventCarouse from "@/my_components/Events/EventCarouse";
// import CallToActionOne from "../../my_components/CallToAction/CallToActionOne";
// import TeamTwo from "../../components/Team/TeamTwo";
// import BlogWidget from "../../my_components/Blogs/Widgets/BlogWidget";
// import Testimonial_3 from "@/my_components/Testimonials/Testimonial_3";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import TrustedBrands from "@/my_components/Brand/Brands";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";

// import Newsletter from "../../my_components/Newsletters/Newsletter";
// import { ParallaxProvider } from "react-scroll-parallax";

// import ElegantBanner from "./sections/ElegantBanner";
// import ProjectsCards from "../Cards/ProjectsCards";


// HOME PAGE SECTIONS
// import { Banner } from "@/my_components/Landing/Home-Sections/Banner";
// import Brands from "../TrustedByBrands/Brands";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
// import { CONFIG } from "@/app_config.js";
// import shapeImg from "../../public/images/icons/three-shape.png";
// import { image_url } from "../../helper/Utilities";






const Services = () => {

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);



  return (
    <>

        <main className="rbt-main-wrapper">


            <div className="rbt-course-banner-area rbt-section-gap bg-color-darker">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="section-title text-center mb--60">
                                    <h2 className="title color-white"> Accelerating Your Business with <br /> Cutting-Edge <span className="theme-gradient">Digital Solutions</span></h2>
                                    <p className="description has-medium-font-size mt--20">
                                        We specialize in developing seamless, intuitive products that not only help you achieve your goals but also exceed user expectations, delivering 
                                        satisfaction every step of the way.
                                    </p>
                                    <div className="rbt-button-group mt--30">
                                        <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Hire Us</span>
                                                <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                                                <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                                            </span>
                                        </Link>

                                        <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.project}>
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Explore our Projects</span>
                                                <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                                                <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="row g-5">
                                    <ServicesProp courseData={SingleCourseData.certificate} image={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>















            <div className="rbt-advance-tab-area rbt-section-gapTop bg-color-white">
                <AdvanceTab />
            </div>


















            <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
                <div className="wrapper">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle bg-primary-opacity">
                            TESTIMONIALS
                            </span>
                            <h2 className="title"> What People Are Saying About Us! </h2>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Testimonial_2 />
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



        </main>

    </>
  );
  
};



export default Services;
