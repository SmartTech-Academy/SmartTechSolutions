import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";

import Category from "./Home-Sections/Category";
import FeaturedCourses from "./Home-Sections/FeaturedCourses";
import UdemyAffiliateBanner from "./Home-Sections/UdemyAffiliateBanner";
import AdvanceTab from "../AdvanceTab/AdvanceTab";
import Card from "../../components/Cards/Card";
import AboutTwo from "../../components/Abouts/About-Two";
import CallToAction from "../../components/Call-To-Action/CallToAction";
import Counter from "../../components/Counters/Counter";
import Testimonial_1 from "@/my_components/Testimonials/Testimonial_1";
import EventCarouse from "@/my_components/Events/EventCarouse";
import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";
import TeamTwo from "../../components/Team/TeamTwo";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";

import Newsletter from "@/my_components/Newsletters/Newsletter";
import MainDemoBanner from "./MainDemoBanner";
import { ParallaxProvider } from "react-scroll-parallax";


// HOME PAGE SECTIONS
import { Banner } from "@/my_components/_HomePage/Home-Sections/Banner";
import Brands2 from "../TrustedByBrands/Brands2";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import shapeImg from "../../public/images/icons/three-shape.png";
import { image_url } from "../../helper/Utilities";




const HomePageContents = () => {

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);



  return (
    <>



      <Banner />






      <main className="rbt-main-wrapper">




        {/* <div className="rbt-banner-area rbt-banner-1"> </div> */}
        <div className="rbt-banner-area rbt-banner-1">
          <MainDemoBanner />
        </div>












        <div className="rbt-brand-area bg-color-white rbt-section-gapBottom bg-gradient-18">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 offset-lg-1">
                <Brands2 />
              </div>
            </div>
          </div>
        </div>





        














        {/* <div className="rbt-banner-area rbt-banner-1">
          <MainDemoBanner />
        </div> */}









        {/* <div className="rbt-brand-area bg-color-white rbt-section-gap bg-gradient-11">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 offset-lg-1">
                <Brands />
              </div>
            </div>
          </div>
        </div> */}









        <div className="rbt-categories-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-start mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title"> <h2 className="title"><span class="theme-gradient">Popular</span> Categories</h2> </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <Link className="rbt-btn rbt-switch-btn bg-primary-opacity btn-sm" href={ROUTE.view_all_categories}>
                    <span data-text="View All">View All</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row g-5"> <Category /> </div>
          </div>
        </div>








        <div className="rbt-banner-area rbt-banner-11 bg-color-darker ptb--120">
          <div className="wrapper">
            <div className="container">
              <UdemyAffiliateBanner />
            </div>
          </div>
        </div>








        <div className="rbt-featured-course bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title">Featured Courses</h2>
                  <p className="description mt--20">
                    Learning communicate to global world and build Link bright future and career development, increase your skill with our advance courses.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="load-more-btn text-start text-lg-end">
                  <Link className="rbt-btn btn-border icon-hover radius-round" href={ROUTE.course}>
                    <span className="btn-text">Browse Courses</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row g-5">
              <FeaturedCourses />
            </div>
          </div>
        </div>



        



        <div className="rbt-about-area bg-color-white rbt-section-gapTop about-style-1">
          <div className="container">
            <ParallaxProvider>
              <AboutTwo />
            </ParallaxProvider>
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
                  <div className="section-title text-center mb--10">
                    {/* <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span> */}
                    <h2 className="title">
                    {"Our clients simply love what we do"} <br/> <span className="theme-gradient">{"No joking - here's the proof!"}</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Testimonial_1 />
        </div>





        





        <div className="rbt-ready-area ready-section-01 rbt-section-gap bg_image" 
          style={{ backgroundImage: `url(${image_url('/app_images/bg/bg_img.jpg')})` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity"> Ready to start? </span>
                  <h2 className="title w-600">Self Development Course</h2>
                  <p className="mt--10 description"> We believe that we have the power to shape the <br />{" "} future, for the better lifelong </p>
                  <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.course}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Browse Courses</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
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










        <div className="rbt-rbt-blog-area rbt-section-gap">
          <div className="container">
            <div className="row g-5 align-items-center mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title">
                  <span className="subtitle bg-primary-opacity">Blog Posts</span>
                  <h2 className="title">Never miss what we are up to</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.blog}>
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">See All Articles</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <BlogWidget extra_class="" />
          </div>
        </div>









        <div className="rbt-callto-action-area rbt-section-gapTop">
          <div className="wrapper rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--10">
            <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
          </div>
        </div>






        <div className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap" 
          style={{ background: "url("+image_url('/app_images/bg/dots.png')+") repeat center/auto" }}>
          <Newsletter />
        </div>
        
      </main>

    </>

  );

};

export default HomePageContents;
