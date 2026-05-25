import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";

// import Category from "./Home-Sections/Category";
// import FeaturedCourses from "./Home-Sections/FeaturedCourses";
// import UdemyAffiliateBanner from "./Home-Sections/UdemyAffiliateBanner";
// import Card from "../../components/Cards/Card";
// import AboutTwo from "../../components/Abouts/About-Two";
// import CallToAction from "../../components/Call-To-Action/CallToAction";
// import Counter from "../../components/Counters/Counter";
// import TestimonialSeven from "../../components/Testimonials/Testimonial-Seven";
// import EventCarouse from "../../my_components/Events/EventCarouse";
import CallToActionOne from "../../my_components/CallToAction/CallToActionOne";
// import TeamTwo from "../../components/Team/TeamTwo";
import BlogWidget from "../../my_components/Blogs/Widgets/BlogWidget";
import Testimonial_2 from "../Testimonials/Testimonial_2";
import Newsletter from "../../my_components/Newsletters/Newsletter";
// import { ParallaxProvider } from "react-scroll-parallax";
import EventCarouse from "@/my_components/Events/EventCarouse";

// import ElegantBanner from "./sections/ElegantBanner";
import ProjectsCards from "../Cards/ProjectsCards";


// HOME PAGE SECTIONS
// import { Banner } from "@/my_components/Landing/Home-Sections/Banner";
import Brands from "../TrustedByBrands/Brands";

// LOAD DATA
import SiteFaqData from "@/my_data/faq/faqs.json";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
// import shapeImg from "../../public/images/icons/three-shape.png";
import { image_url, dangerouslySetInnerHTML } from "../../helper/Utilities";




const KnowledgeBase = () => {

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);



  return (
    <>


      <main className="rbt-main-wrapper">






        <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h2 className="title">Faq</h2>
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item active">Frequently Asked Questions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>











        <div className="rbt-accordion-area accordion-style-1 bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row g-5">

              <div className="col-lg-6">
                <div className="rbt-accordion-style accordion">
                  <div className="section-title text-start mb--60">
                    <h4 className="title">Tech Agency FAQ</h4>
                  </div>
                  <div className="rbt-accordion-style rbt-accordion-04 accordion">
                    <div className="accordion" id="accordionExamplec3">

                      {SiteFaqData.WebsiteFaqData[0].faqBody.map((item, innerIndex) => (
                        <div className="accordion-item card" key={innerIndex}>
                          <h2 className="accordion-header card-header" id={item.heading}>
                            <button
                              className={`accordion-button ${
                                !item.collapsed ? "collapsed" : ""
                              }`}
                              type="button" data-bs-toggle="collapse" data-bs-target={`#${item.collapse}`} aria-expanded={item.expanded} aria-controls={item.collapse}>
                              {item.accordionTitle}
                            </button>
                          </h2>
                          <div
                            id={item.collapse}
                            className={`accordion-collapse collapse ${
                              item.show ? "show" : ""
                            }`}
                            aria-labelledby={item.heading} data-bs-parent="#accordionExamplec3">
                            <div className="accordion-body card-body">
                              {dangerouslySetInnerHTML(item.desc)}
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="rbt-accordion-style accordion">
                  <div className="section-title text-start mb--60">
                    <h4 className="title">Tech Academy FAQ</h4>
                  </div>
                  <div className="rbt-accordion-style rbt-accordion-04 accordion">
                    <div className="accordion" id="faqs-accordionExamplec3">
                      
                      {SiteFaqData.WebsiteFaqData[0].faqBody2.map((item, innerIndex) => (
                        <div className="accordion-item card" key={innerIndex}>
                          <h2 className="accordion-header card-header" id={`faq-${item.heading}`}>
                            <button
                              className={`accordion-button ${
                                !item.collapsed ? "collapsed" : ""
                              }`}
                              type="button" data-bs-toggle="collapse" data-bs-target={`#faq-${item.collapse}`} aria-expanded={item.expanded} aria-controls={`faq-${item.collapse}`}>
                              {item.accordionTitle}
                            </button>
                          </h2>
                          <div
                            id={`faq-${item.collapse}`}
                            className={`accordion-collapse collapse ${
                              item.show ? "show" : ""
                            }`}
                            aria-labelledby={`faq-${item.heading}`} data-bs-parent="#faqs-accordionExamplec3">
                            <div className="accordion-body card-body">
                              {dangerouslySetInnerHTML(item.desc)}
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>








        <div className="rbt-brand-area bg-color-white rbt-section-gap bg-gradient-11">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 offset-lg-1">
                <Brands />
              </div>
            </div>
          </div>
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

            <BlogWidget />
          </div>
        </div>









        <div className="rbt-callto-action-area rbt-section-gapTop">
          <div className="wrapper rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--10">
            <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
          </div>
        </div>






        <div className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap" 
          style={{ background: "url("+image_url('../app_images/bg/dots.png')+") repeat center/auto" }}>
          <Newsletter />
        </div>

      </main>
    </>
  );
  
};



export default KnowledgeBase;
