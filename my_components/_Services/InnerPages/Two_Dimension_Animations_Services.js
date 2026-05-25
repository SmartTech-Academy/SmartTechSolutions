import { useEffect } from "react";
import Link from "next/link";
// import sal from "sal.js";
import Image from "next/image";


import Testimonial_1 from "@/my_components/Testimonials/Testimonial_1";
import ServiceFaq from "./sections/ServiceFaq";
import ServicesProcedures from "./sections/ServicesProcedures";
import Services from "./sections/Services";
import SubServices from "./sections/SubServices";
import Industries from "./sections/Industries";
import ProjectCounters from "@/my_components/Counters/ProjectCounters";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";
import Newsletter from "@/my_components/Newsletters/Newsletter";
import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";
import TrustedBrands from "@/my_components/Brand/Brands";
// import WebDevelopment_Services from "@/my_components/_Services/InnerPages/sections/WebDevelopment_Services";

// RADUX STORE
import { useAppContext } from "@/context/Context";

// LOAD DATA
import FaqData from "@/my_data/services/faq.json";
import ServicesData from "@/my_data/services/services.json";
import IndustriesData from "@/my_data/services/industries.json";
import ServiceProcedureData from "@/my_data/services/service_procedure.json";
import SubServiceData from "@/my_data/services/sub_services.json";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
// import { CONFIG } from "@/app_config.js";
import shapeImg from "@/public/app_images/bg/banner.jpg";
import { image_url, getYearOffset, dangerouslySetInnerHTML } from "@/helper/Utilities";
 




const Two_Dimension_Animations_Services = () => {

  const { isLightTheme } = useAppContext();

  useEffect(() => {}, [isLightTheme]);

  return (
    <>



      <div className="rbt-banner-area rbt-banner-8 variation-02 breadcrumb-image-container breadcrumb-style-max-width">
        <div className="container">
          <div className="breadcrumb-content-top text-left">
            <h1 className="title"><span className="theme-gradient">{"2D Animation"}</span> {" Services"}</h1>
            <p className="description has-medium-font-size mt--20">
              {"Ignite your vision with SmartTech's seasoned experts, turning your boldest ideas into captivating 2D animations and mesmerizing visual effects that empower startups and "+
              "industry leaders to outshine the competition, leave an unforgettable brand impression, and achieve unparalleled success."}
            </p>
          </div>
        </div>
      </div>






      <div className="rbt-rbt-blog-area">
        {/* <div className="slider-area rbt-banner-5 height-750" style={{ backgroundImage: "url(/app_images/bg/banner.jpg)" }}></div> */}
        {/* <Image src={image_url(`/app_images/bg/banner.jpg`)} layout="fill" objectFit="cover" priority alt="Blog Images" /> */}
        <Image src={shapeImg} priority alt="Blog Images" />
      </div>















      <div className="rbt-counterup-area bg-gradient-6 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title"> {"Why our clients "} <span className="theme-gradient"> {"love us"} </span> </h2>
                <p className="description has-medium-font-size mt--20">
                  {"Rest assured, our proven legacy in animation production, marked by hundreds of successful projects, and glowing client testimonials, "+
                  "guarantees that your vision is executed with unmatched excellence and efficiency."}
                </p>
              </div>
            </div>
          </div>
          <ProjectCounters name_1={"Years of Experience"} counter_1={parseInt(getYearOffset((8)))} name_2={"Animators and Artists"} counter_2={70} name_3={"Completed Projects"} counter_3={87} />
        </div>
      </div>




















      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <TrustedBrands isolate_title={true} show_layer_two={true} />
            </div>
          </div>
        </div>
      </div>























      <div className={`rbt-split-area rbt-section-gapTop overflow-hidden bg-color-darker mb--100`}>
        <div className="wrapper">
          <div className="section-title text-center mb--60">
            {/* <h2 className="title">University Overview.</h2> */}
            <h2 className="title"> {"Comprehensive"}<span className="theme-gradient">{" 2D Animation "}</span> {"Services"} </h2>
            <p className="description has-medium-font-size mt--20"> {"From captivating 2D arts to stunning 2D animations, we bring your vision to life across a spectrum of styles. Our dedicated "+
            "artists meticulously fine-tune every detail to align with your unique requirements and business goals, ensuring your message makes an unforgettable impact."} </p>
          </div>

          <SubServices data={SubServiceData.two_dimensional_animations} type="dark" />
        </div>
      </div>



















      <div className="rbt-service-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">{"Why Choose Us For Your "}<span className="theme-gradient">{"2D Animation?"}</span></h2>
                <p className="description has-medium-font-size mt--20">
                  {"Our dedicated 2D animation team delivers high-quality animations and provides comprehensive support throughout your project, ensuring engaging and cost-effective visual "+
                  "storytelling that resonates with your audience."}
                </p>
              </div>
            </div>
          </div>
          <Services data={ServicesData.two_dimentional_animation_services} />
        </div>
      </div>




















      <div className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape" style={{ height: '600px', position: 'relative' }}>
        <div className="wrapper pb--50 rbt-index-upper">
          <div className="container">
            <div className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title color-white"> {"Our Proven Workflow"} </h2>
                  <p className="description color-white-off mt--20">
                    {"From the initial consultation to final approval, our seasoned team guides you every step of the way, ensuring seamless collaboration and obtaining your approvals at each "+
                    "stage. See what it take to create industry leading 2D animations."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesProcedures data={ServiceProcedureData.two_dimentional_animation_service_procedure} />
















      <div className="rbt-feature-area rbt-single-course-features rbt-section-gap rbt-feature-box bg-gradient-7 mt--20">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row row--30 gy-5 align-items-center">
                <div className="col-lg-6 col-xl-5">
                  <div className="thumbnail rbt-shadow-box">
                    <Image className="w-100 radius-10" src={image_url("/app_images/services/services.webp")} width={357} height={500} alt="Card image" />
                  </div>
                </div>

                <div className="col-lg-6 col-xl-7" key="1">
                  <div className="section-title">
                  <h2 className="title color-white">{"Your 2D Animation Dream Team"} </h2>
                  </div>

                  <div className="section-title subtitle"></div>

                  <div className="row g-5">
                    <div className="col-lg-12">
                      <ul className="rbt-list-style-1 color-white">
                        <li key="1"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Project Manager:</b> To orchestrates seamless communication and on-time game delivery")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Art Director:</b> Establishing a compelling visual style for your animation videos and ensures industry-standard excellence and consistency.")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>2D Animation Team Lead:</b> Meticulously oversee every phase of the animation journey, from initial concept to final cut, ensuring exceptional quality throughout")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>2D Artists:</b> Crafts realistic 2D characters, environments, and props tailored to your project's unique vision, ensuring immersive and visually captivating experiences.")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>2D Animators:</b> Builds dynamic character movements and animations. Our team of 2D artists meticulously animates every detail, from facial expressions and gestures to movements and visual effects, ensuring your original vision is faithfully brought to life with precision and artistry.")} </li>
                      </ul>
                    </div>
                  </div>

                  <div className="read-more-btn mt--40">
                    <Link className="rbt-moderbt-btn color-white" href={ROUTE.appointment}> 
                      <span className="moderbt-btn-text"> {"Let's Discuss"} </span> 
                      <i className="feather-arrow-right"></i> 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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




















      <div className="rbt-service-area bg-color-darker rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h2 className="title">{"industries we serve"}</h2>
                <p className="description has-medium-font-size mt--20">
                  {"By leveraging the latest technologies, we help businesses build world class 2D animations."}
                </p>
              </div>
            </div>
          </div>
          <Industries data={IndustriesData.industries_served_2} type="dark" />
        </div>
      </div>

















      <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-cta-6 text-center">
                <div className="content">
                  <h1 className="title"> {"Ready to start your"}
                  <br/> {"Web project?"} </h1>
                  <p>{"Let our expert developers turn your ideas into reality!"}</p>
                  <div className="rbt-button-group justify-content-center">
                    <Link className="rbt-btn btn-gradient" href={ROUTE.appointment}> Get Started Now! </Link>
                    <Link className="rbt-btn btn-border" href={ROUTE.project}> Explore our Projects </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
















      <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden" id="testimonial">
        <div className="container">
          <ServiceFaq data={FaqData.two_dimentional_animation_service_faqs} />
        </div>
      </div>

















      <div className={`rbt-rbt-blog-area mb--80 rbt-section-gap ${isLightTheme ? 'bg-gradient-5' : ''}`}>
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

          <BlogWidget extra_class=" sal-animate" />
        </div>
      </div>





















      <div className="rbt-callto-action-area rbt-section-gapTop">
        <div className="wrapper rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--10">
          <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" extra_class=" sal-animate" />
        </div>
      </div>
















      <div className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap" 
        style={{ background: "url("+image_url('/app_images/bg/dots.png')+") repeat center/auto" }}>
        <Newsletter />
      </div>




    </>

  );

};

export default Two_Dimension_Animations_Services;
