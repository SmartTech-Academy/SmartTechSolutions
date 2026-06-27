import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";

import Category from "./Home-Sections/Category";
import FeaturedCourses from "./Home-Sections/FeaturedCourses";
import UdemyAffiliateBanner from "./Home-Sections/UdemyAffiliateBanner";
import OurProcess from "../AdvanceTab/OurProcess";
import Card from "../../components/Cards/Card";
import AboutTwo from "../../components/Abouts/About-Two";
import CallToAction from "../../components/Call-To-Action/CallToAction";
import Counter from "../../components/Counters/Counter";
import Testimonial_1 from "@/my_components/Testimonials/Testimonial_1";
import EventCarouse from "@/my_components/Events/EventCarouse";
import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";
import TeamTwo from "../../components/Team/TeamTwo";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";
import HomePageCounter from "@/my_components/Counters/HomePageCounter";

import Newsletter from "@/my_components/Newsletters/Newsletter";
import MainDemoBanner from "./MainDemoBanner";
import { ParallaxProvider } from "react-scroll-parallax";
import ProjectsCards from "../Cards/ProjectsCards";

import Industries from "../_Services/InnerPages/sections/Industries";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import HomepageServices from "./Home-Sections/HomepageServices";


// LOAD DATAS
import IndustriesData from "@/my_data/services/industries.json";
import HomepageServicesData from "@/my_data/services/homepageServices.json";


// HOME PAGE SECTIONS
import { Banner } from "@/my_components/_HomePage/Home-Sections/Banner";
import Brands2 from "../TrustedByBrands/Brands2";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import shapeImg from "../../public/images/icons/three-shape.png";
import { image_url } from "../../helper/Utilities";


import lineArrow from "@/public/app_images/shape/o-line-arrow.png";






const homepageServices = HomepageServicesData.services.slice(0, 6);



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
        {/* <div className="rbt-banner-area rbt-banner-1">
          <MainDemoBanner />
        </div> */}












        <div className="rbt-brand-area bg-color-white bg-gradient-18 mb--70">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 offset-lg-1">
                <Brands2 />
              </div>
            </div>
          </div>
        </div>




        









        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
            <div className="container">

              <div className="row mb--60">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <h2 className="title">Our Core Services</h2>
                    <p className="description">
                      We engineer scalable digital products for visionaries and organizations across industries, transforming ideas into impactful solutions.
                    </p>
                  </div>
                </div>
              </div>
                
              <HomepageServices services={homepageServices} />

              <div className="row">
                <div className="col-lg-12">
                  <div className="load-more-btn mt--60 text-center">
                    <Link className="rbt-btn btn-gradient btn-lg btn-mobile hover-icon-reverse" href={ROUTE.service}>
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Explore All Services</span>
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




















        

        <div className="rbt-event-area bg-gradient-7 rbt-section-gap rbt-section-box">
          <div className="container">
            <div className="row col-lg-10 offset-lg-1 mb--60 mb_sm--50 g-5 align-items-end">
              <div className="col-lg-8 col-md-8 col-12">
                <div className="section-title text-start">
                  <h6 className="color-white w-500 b2 mb--15">Top Projects</h6>
                  <h2 className="title w-600 color-white">Our Success Stories</h2>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-4 col-12">
                <div className="load-more-btn text-start text-md-end">
                  <Link className="rbt-btn btn-border hover-icon-reverse" href={ROUTE.project}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text color-white">More Case Studies</span>
                      <span className="btn-icon color-white"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon color-white"><i className="feather-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="row g-5">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                          <ProjectsCards />
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
























        <div className="rbt-counterup-area counterup-section-02 rbt-section-gap">
          <div className="shape-1">
            <Image src={lineArrow} width={86} height={50} alt="Shape" />
          </div>

          <HomePageCounter />
        </div>

















        <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
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

















        <div className="rbt-advance-tab-area rbt-section-gapBottom bg-color-white">
          <OurProcess />
        </div>
















        <div className="rbt-course-area rbt-sec-cir-shadow-1 bg-color-extra2 rbt-section-gap">
          <div className="gradient-shape-top"></div>
          <div className="gradient-shape-bottom"></div>
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-start">
                  <h2 className="title">{"Industries "}<span class="theme-gradient">{"we serve"}</span></h2>
                  <p className="description has-medium-font-size mt--20">
                    {"With deep expertise across diverse industries and a comprehensive suite of services, we understand your unique challenges and deliver tailored solutions that create measurable impact."}
                  </p>
                </div>
              </div>
            </div>
            <Industries data={IndustriesData.industries_served_2} />
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
        
      </main>

    </>

  );

};

export default HomePageContents;
