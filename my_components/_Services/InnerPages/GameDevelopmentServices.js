import { useEffect } from "react";
import Link from "next/link";
// import sal from "sal.js";
import Image from "next/image";


import Testimonial_1 from "@/my_components/Testimonials/Testimonial_1";
import ServiceFaq from "./sections/ServiceFaq";
import ServicesProcedures from "./sections/ServicesProcedures";
import SubServices from "./sections/SubServices";
import Services from "./sections/Services";
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
import { image_url, getYearOffset, dangerouslySetInnerHTML } from "@/helper/Utilities";




const GameDevelopmentServices = () => {

  const { isLightTheme } = useAppContext();

  useEffect(() => {}, [isLightTheme]);

  return (

    <>

      <div className="rbt-banner-area rbt-banner-8 variation-02 breadcrumb-image-container breadcrumb-style-max-width">
        <div className="container">
          <div className="breadcrumb-content-top text-left">
            <h1 className="title"><span className="theme-gradient">{"2D, 3D, & NFT Game Development "}</span> {"with Unity or Unreal Engine"}</h1>
            <p className="description has-medium-font-size mt--20">
              {"From concept to launch, our award-winning team leverages Unity and Unreal Engine to build immersive 2D, 3D, and NFT games that seamlessly blend stunning visuals, intricate "+
              "storytelling, dynamic gameplay, and innovative play-to-own mechanics into real, comprehensive interactive experiences that captivate and engage players across mobile, VR, PC, "+
              "and console platforms."}
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
                <h2 className="title"> {"Your trusted "}<span className="theme-gradient">{"game development company"}</span> </h2>
                <p className="description has-medium-font-size mt--20">
                  {"For over "+getYearOffset(9)+" years, SmartTech has been the trusted partner of global brands, delivering exceptional 2D, 3D and NFT Games that engage players across mobile, "+
                  "VR, PC, and console platforms."}
                </p>
              </div>
            </div>
          </div>
          <ProjectCounters name_1={"Designed Projects"} counter_1={70} name_2={"Designers and Developers"} counter_2={150} name_3={"Experience"} counter_3={9} />
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
            <h2 className="title"> {"Our "}<span className="theme-gradient">{"Game Development "}</span> {"Services"} </h2>
          </div>

          <SubServices data={SubServiceData.game_dev} type="dark" />
        </div>
      </div>




















      <div className="rbt-service-area bg-color-white rbt-section-gapBottom mt--50">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title"> {"Why Choose SmartTech for your "} <span className="theme-gradient">{"2D and 3D Game Developmments"}</span> </h2>
              </div>
            </div>
          </div>
          <Services data={ServicesData.game_dev_services} />
        </div>
      </div>




















      <div className="rbt-rbt-blog-area rbt-section-gap bg-gradient-8 rbt-round-bottom-shape" style={{ height: '600px', position: 'relative' }}>
        <div className="wrapper pb--50 rbt-index-upper">
          <div className="container">
            <div className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title color-white">{"Our 2D/3D Game Development Process"}</h2>
                  <p className="description color-white-off mt--20">
                    {"From ideation to implementation and beyond, our expert-driven methodology guarantees that your Game is secure, scalable, and customized to meet"
                    +" your specific needs."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesProcedures data={ServiceProcedureData.game_dev_service_procedure} />
















      <div className="rbt-feature-area rbt-single-course-features rbt-section-gap rbt-feature-box mt--20">
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
                    <h2 className="title">{"Your"} <span className="theme-gradient">{" 2D/3D Game Development "}</span> {"Dream Team"} </h2>
                  </div>

                  <div className="section-title subtitle"></div>

                  <div className="row g-5">
                    <div className="col-lg-12">
                      <ul className="rbt-list-style-1">
                        <li key="1"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Project Manager:</b> To orchestrates seamless communication and on-time game delivery")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Game Producer:</b> To merge your ideas with industry trends and craft a 2D/3D game that's innovative and commercially astute.")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>2D, 3D Artists:</b> Our visionary artists push the boundaries of your 2D/3D game visuals, breathing life into every character and world.")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Art Lead:</b> Our Art Lead is the guardian of your game's artistic soul, ensuring every design element aligns with your vision.")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Game Designer:</b> This genius infuses life into your game, crafting captivating stories, memorable characters, immersive worlds, and endlessly engaging mechanics.")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Game Developers:</b> Our 2D/3D game developers turn creative visions of the designer into elegant code, crafting smooth mechanics and immersive experiences.")} </li>
                        <li key="2"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>Backend Developers:</b> Our unsung heroes engineer the server-side magic that powers online features, multiplayer gameplay, and seamless data storage.")} </li>
                        <li key="5"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>DevOps Engineers:</b> Our automation experts streamline development, ensuring tools and servers run flawlessly while maintaining your game's security and efficiency over the long haul.")} </li>
                        <li key="4"> <i className="feather-check"></i> {dangerouslySetInnerHTML("<b>QA Engineers:</b> Our eagle-eyed QA team meticulously tests your 2D game, eliminating bugs before they surface.")} </li>
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
          <ServiceFaq data={FaqData.game_dev_faqs} />
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

export default GameDevelopmentServices;
