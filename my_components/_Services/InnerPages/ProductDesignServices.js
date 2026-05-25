import { useEffect } from "react";
import Link from "next/link";
// import sal from "sal.js";
import Image from "next/image";


import Testimonial_1 from "@/my_components/Testimonials/Testimonial_1";
import ServiceFaq from "./sections/ServiceFaq";
import ServicesProcedures from "./sections/ServicesProcedures";
import Services from "./sections/Services";
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


// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
// import { CONFIG } from "@/app_config.js";
import shapeImg from "@/public/app_images/bg/banner.jpg";
import { image_url, getYearOffset, dangerouslySetInnerHTML } from "@/helper/Utilities";
 




const ProductDesignServices = () => {

  const { isLightTheme } = useAppContext();

  useEffect(() => {}, [isLightTheme]);

  return (
    <>



      <div className="rbt-banner-area rbt-banner-8 variation-02 breadcrumb-image-container breadcrumb-style-max-width">
        <div className="container">
          <div className="breadcrumb-content-top text-left">
            <h1 className="title"><span className="theme-gradient">{"Product Design"}</span> {" Services"}</h1>
            <p className="description has-medium-font-size mt--20">
              {"Captivate your customers and build unwavering brand loyalty with designs that truly resonate. Our seasoned design experts transform your ideas into visually striking, "+
              "user-centric solutions, where every detail is meticulously refined to enhance functionality and elevate the user experience. This commitment to excellence ensures your "+
              "product stands out in today's competitive market."}
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
                  {"For over "+getYearOffset(10)+" years, SmartTech has been the trusted partner of global brands, delivering exceptional product designs through our competent team."}
                </p>
              </div>
            </div>
          </div>
          <ProjectCounters name_1={"Years of Experience"} counter_1={parseInt(getYearOffset((10)))} name_2={"Designers"} counter_2={30} name_3={"Completed Projects"} counter_3={180} />
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



















      <div className="rbt-service-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">{"Comprehensive product design services"}</h2>
              </div>
            </div>
          </div>
          <Services data={ServicesData.product_design_services} />
        </div>
      </div>




















      <div className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape" style={{ height: '600px', position: 'relative' }}>
        <div className="wrapper pb--50 rbt-index-upper">
          <div className="container">
            <div className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title color-white"> {"How we make your vision a reality"} </h2>
                  <p className="description color-white-off mt--20">
                    {"Armed with cutting-edge design tools, proven methodologies, and a focus on human experiences, we empower you to create products that truly resonate with your customers. "+
                    "Discover how we turn your vision into solutions your users will love."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesProcedures data={ServiceProcedureData.product_design_service_procedure} />


















      <div className="rbt-feature-area rbt-single-course-features rbt-section-gap rbt-feature-box">
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
                    <h2 className="title">{"Why work with us"}</h2>
                    <p className="b1 mt--15">
                      {"With over "+getYearOffset(10)+" years of expertise and a track record of hundreds of successful projects, SmartTech is the go-to partner for global brands."}
                    </p>
                  </div>

                  <div className="section-title subtitle"></div>

                  <div className="row g-5">
                    <div className="col-lg-12">
                      <ul className="rbt-list-style-1">
                        <li key="1"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>User-Centric Excellence:</b> Our digital product team designs experiences that prioritize the end user, ensuring intuitive interfaces and seamless interactions that truly resonate.")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Full-Service Expertise:</b> From initial concept through full-scale development, we expertly manage every stage of the product lifecycle, delivering robust solutions that stand the test of time.")}</li>
                        <li key="3"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Innovative Prototyping:</b> We rapidly transform ideas into tangible prototypes that map out app structure and flow, allowing you to visualize and refine your vision early in the process.")} </li>
                        <li key="4"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Rigorous Branding & Technology:</b> Leveraging cutting-edge platforms and technologies, we adhere to the strictest branding guidelines to create visually stunning and consistent digital products.")} </li>
                        <li key="5"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Strategic Redesign:</b> Whether you need a complete overhaul or a subtle UI refresh, we audit your current app and your competition to enhance performance while preserving what works.")} </li>
                        <li key="5"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Competitive Digital Advantage:</b> In today's fast-paced market, you need an application that's beautiful, easy to use, and perfectly aligned with your business goals and we deliver nothing less.")}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="read-more-btn mt--40">
                    <Link className="rbt-moderbt-btn" href={ROUTE.appointment}> 
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
                  {"We create innovative Product Design services that empower industries to make an impact, streamline critical processes, and achieve measurable results. By leveraging the latest "
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
          <ServiceFaq data={FaqData.product_design_faqs} />
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

export default ProductDesignServices;
