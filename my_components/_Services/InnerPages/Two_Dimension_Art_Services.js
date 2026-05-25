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
 




const Two_Dimension_Art_Services = () => {

  const { isLightTheme } = useAppContext();

  useEffect(() => {}, [isLightTheme]);

  return (
    <>



      <div className="rbt-banner-area rbt-banner-8 variation-02 breadcrumb-image-container breadcrumb-style-max-width">
        <div className="container">
          <div className="breadcrumb-content-top text-left">
            <h1 className="title"><span className="theme-gradient">{"2D Art"}</span> {" Services"}</h1>
            <p className="description has-medium-font-size mt--20">
              {"Blending sleek corporate visuals with whimsical illustrations, our creative team crafts captivating, bespoke 2D art that transforms your ideas into vibrant visuals, "+
              "elevating your brand and deeply engaging your audience across tech, healthcare, entertainment, and beyond."}
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
              </div>
            </div>
          </div>
          <ProjectCounters name_1={"Years of Experience"} counter_1={parseInt(getYearOffset((10)))} name_2={"Artists"} counter_2={50} name_3={"Completed Projects"} counter_3={250} />
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
            <h2 className="title"> {"Comprehensive"}<span className="theme-gradient">{" 2D Art "}</span> {"Services"} </h2>
            <p className="description has-medium-font-size mt--20"> {"Backed by a team of visionary artists, our 2D art studio transforms challenging projects into captivating visual narratives "+
            "by crafting meticulously tailored artwork that elevates your business identity."} </p>
          </div>

          <SubServices data={SubServiceData.two_dimensional_art} type="dark" />
        </div>
      </div>



















      <div className="rbt-service-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">{"Why Choose Us For Your "}<span className="theme-gradient">{"2D Art Creation?"}</span></h2>
                <p className="description has-medium-font-size mt--20">
                  {"Experience the ultimate one-stop creative solution where SmartTech sets the benchmark in 2D art, delivering high-quality assets in every format and style and ensuring all "+
                  "your art needs are met in one place."}
                </p>
              </div>
            </div>
          </div>
          <Services data={ServicesData.two_dimentional_art_services} />
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
                    {"From the initial consultation to final product, the typical workflow for 2D art services encompasses several key stages:"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesProcedures data={ServiceProcedureData.two_dimentional_art_service_procedure} />


















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
                  {"We create innovative 2D Art that empower industries to make an impact, streamline critical processes, and achieve measurable results. By leveraging the latest "
                  +"technologies, we help businesses enhance efficiency, improve user experiences, and stay ahead in a competitive market."}
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
          <ServiceFaq data={FaqData.two_dimentional_art_service_faqs} />
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

export default Two_Dimension_Art_Services;
