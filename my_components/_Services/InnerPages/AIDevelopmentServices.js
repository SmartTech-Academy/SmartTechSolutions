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
import { image_url, dangerouslySetInnerHTML } from "@/helper/Utilities";




const AIDevelopmentServices = () => {

  const { isLightTheme } = useAppContext();

  useEffect(() => {}, [isLightTheme]);

  return (

    <>

      <div className="rbt-banner-area rbt-banner-8 variation-02 breadcrumb-image-container breadcrumb-style-max-width">
        <div className="container">
          <div className="breadcrumb-content-top text-left">
            <h1 className="title"><span className="theme-gradient">{"Artificial Intelligence "}</span> {"Development Services"}</h1>
            <p className="description has-medium-font-size mt--20">
              {"At SmartTech, we harness cutting-edge AI solutions that not only streamline your operations and boost efficiency but also transform your data into actionable insights, empowering"+
              " your business to achieve sustainable growth and maintain a decisive edge in a rapidly evolving market."}
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
                <h2 className="title"> {"A globally recognized leader in "}<span className="theme-gradient">{"AI development Services."}</span> </h2>
                <p className="description has-medium-font-size mt--20">
                  {"For years, SmartTech has been the trusted partner of global brands, delivering professional AI development services through our competent team."}
                </p>
              </div>
            </div>
          </div>
          <ProjectCounters name_1={"Years of Experience"} counter_1={8} name_2={"Developers"} counter_2={70} name_3={"Satisfied Clients Globally"} counter_3={100} />
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



















      <div className={`rbt-service-area rbt-section-gap ${isLightTheme ? 'bg-gradient-5' : ''}`}>
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">{"Our AI Development Services"}</h2>
              </div>
            </div>
          </div>
          <Services data={ServicesData.ai_development_services} />
        </div>
      </div>




















      <div className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape" style={{ height: '600px', position: 'relative' }}>
        <div className="wrapper pb--50 rbt-index-upper">
          <div className="container">
            <div className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title color-white">{"Our Agile AI Development Approach"}</h2>
                  <p className="description color-white-off mt--20">
                    {"Our development teams embrace an agile methodology, fostering enhanced flexibility, improved communication, and accelerated delivery, ensuring your product initiatives"+
                    " are executed efficiently and adaptively."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesProcedures data={ServiceProcedureData.ai_development_service_procedure} />
















      <div className="rbt-feature-area rbt-single-course-features rbt-section-gapBottom rbt-feature-box">
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
                    <h2 className="title">{"Key Benefits of our AI Development Services"}</h2>
                    <p className="b1 mt--15">
                      {"At SmartTech, we harness our deep expertise in artificial intelligence to craft bespoke AI solutions that seamlessly integrate with your unique business processes,"+
                      "empowering you to automate workflows, enhance decision-making, and drive innovation tailored to your specific needs."}
                    </p>
                  </div>

                  <div className="section-title subtitle"></div>

                  <div className="row g-5">
                    <div className="col-lg-12">
                      <ul className="rbt-list-style-1">
                        <li key="1"> <i className="feather-check"></i> {"Fast, efficient, and scalable AI development"} </li>
                        <li key="2"> <i className="feather-check"></i> {"User-centered design approach"} </li>
                        <li key="3"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Future-ready: </b>Harness AI solutions tailored to your evolving needs, ensuring adaptability and sustained competitive advantage.")} </li>
                        <li key="4"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Scalability: </b>By leveraging our expertise in AI, we develop tailored solutions that streamline your operations, enhance scalability, and drive business growth.")} </li>
                        <li key="5"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Efficiency: </b>By automating routine tasks and streamlining processes, we empower your team to focus on strategic initiatives, enhancing productivity and driving innovation.")} </li>
                        <li key="6"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Customization: </b>Leveraging our AI expertise, we develop customized solutions that precisely address your business challenges and objectives.")} </li>
                        <li key="7"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Support: </b>Benefit from our dedicated support services, ensuring optimal performance and providing you with peace of mind.")} </li>
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




















      <div className="rbt-service-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-start">
                <h2 className="title">{"Industries we serve"}</h2>
                <p className="description has-medium-font-size mt--20">
                  {"We create innovative AI Development services that empower industries to make an impact, streamline critical processes, and achieve measurable results. By leveraging the latest "
                  +"technologies, we help businesses enhance efficiency, improve user experiences, and stay ahead in a competitive market."}
                </p>
              </div>
            </div>
          </div>
          <Industries data={IndustriesData.industries_served_2} />
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
          <ServiceFaq data={FaqData.ai_development_service_faqs} />
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

export default AIDevelopmentServices;
