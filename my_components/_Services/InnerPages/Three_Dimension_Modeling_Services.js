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
 




const Three_Dimension_Modeling_Services = () => {

  const { isLightTheme } = useAppContext();

  useEffect(() => {}, [isLightTheme]);

  return (
    <>



      <div className="rbt-banner-area rbt-banner-8 variation-02 breadcrumb-image-container breadcrumb-style-max-width">
        <div className="container">
          <div className="breadcrumb-content-top text-left">
            <h1 className="title"><span className="theme-gradient">{"3D Modeling"}</span> {" Services"}</h1>
            <p className="description has-medium-font-size mt--20">
              {"Elevate your brand by seamlessly transforming real products into captivating virtual experiences with our detailed, affordable 3D modeling services and an innovative "+
              "solution for dynamic marketing research, rapid prototyping, and compelling product promotion through meticulously crafted low-poly and high-poly renderings. Our state-of-the-art "+
              "techniques combine precision and creativity to bring your vision to life, ensuring every model not only looks spectacular but also performs flawlessly across all platforms."}
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
                  {"Rest easy knowing our stellar animation production record speaks for itself, with loads of successful projects, delighted clients, and industry-leading turnaround times "+
                  "ensure your creative vision is in the best hands."}
                </p>
              </div>
            </div>
          </div>
          <ProjectCounters name_1={"Years of Experience"} counter_1={parseInt(getYearOffset((8)))} name_2={"Animators and Artists"} counter_2={50} name_3={"Completed Projects"} counter_3={40} />
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
            <h2 className="title"> {"Our "}<span className="theme-gradient">{" 3D Modeling "}</span> {"Services"} </h2>
            <p className="description has-medium-font-size mt--20"> 
              {"Our 3D modeling studio specializes in crafting custom assets tailored to your specific needs, adeptly handling projects of any complexity and delivering high-quality "+
              "pre-rendered or real-time models, be it realistic or low-poly styles—with exceptional speed and precision."} 
            </p>
          </div>

          <SubServices data={SubServiceData.three_dimensional_modeling} type="dark" />
        </div>
      </div>



















      <div className="rbt-service-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">{"Why Choose Us For "}<span className="theme-gradient">{"3D Modeling?"}</span></h2>
                <p className="description has-medium-font-size mt--20"> 
                  {"Leveraging our extensive expertise and state-of-the-art resources, we deliver rapid, high-quality 3D modeling solutions, adeptly managing even the most intricate design "+
                  "challenges to bring your vision to life."} 
                </p>
              </div>
            </div>
          </div>
          <Services data={ServicesData.three_dimentional_modeling_services} />
        </div>
      </div>




















      <div className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape" style={{ height: '600px', position: 'relative' }}>
        <div className="wrapper pb--50 rbt-index-upper">
          <div className="container">
            <div className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title color-white"> {"Our 3D Modeling Process"} </h2>
                  <p className="description color-white-off mt--20">
                    {"By adhering to an industry-standard 3D modeling pipeline, we ensure seamless project execution and consistently deliver first-class quality results."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesProcedures data={ServiceProcedureData.three_dimentional_modeling_service_procedure} />


















      <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
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
                  {"By leveraging the latest technologies, we help businesses build world class 3D Modeling Solutions."}
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
          <ServiceFaq data={FaqData.three_dimentional_modeling_service_faqs} />
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

export default Three_Dimension_Modeling_Services;
