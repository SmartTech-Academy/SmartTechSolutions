import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";

import AboutTwo from "../../components/Abouts/About-Two";
import Testimonial_3 from "@/my_components/Testimonials/Testimonial_3";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import HomePageCounter from "@/my_components/Counters/HomePageCounter";
import CounterSection from "@/my_components/Counters/CounterSection";
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";
import Brands2 from "../TrustedByBrands/Brands2";
// At the top of your file
import dynamic from "next/dynamic";

import AboutUsBanner from "./sections/AboutUsBanner";

// Dynamically import Odometer with SSR disabled
const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>0</span>, // Avoid `loading: () => 0` — return a React element instead
});

// import Newsletter from "../../my_components/Newsletters/Newsletter";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

// HOME PAGE SECTIONS
import Brands from "../TrustedByBrands/Brands";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
// import { CONFIG } from "@/app_config.js";

import bookShape from "../../public/images/shape/book-shape-01.png";
import awardImage from "../../public/images/icons/award-gd-01.png";
import cap from "../../public/images/shape/o-icon-2.png";
import coach from "../../public/app_images/about/about_us.webp";
import signature from "../../public/app_images/about/signatures.webp";
import dots from "../../public/images/shape/a-dot-01.png";
import journeyBg from "@/public/app_images/bg/agile_office_journey_bg.webp";
import whySmartTechAboutImg from "@/public/app_images/about/why_smarttech_about.webp";
import visionCtaBg from "@/public/app_images/bg/vision_life_cta_bg.webp";


// RADUX STORE
import { useAppContext } from "@/context/Context";









const SmartTechAcademy = () => {

    const { isLightTheme } = useAppContext();

    useEffect(() => {}, [isLightTheme]);

    useEffect(() => {
        sal({
            threshold: 0.01,
            once: true,
        });
    }, []);




    return (

        <>



            <AboutUsBanner />



            <main className="rbt-main-wrapper">





                <div className="rbt-brand-area bg-color-white bg-gradient-18 mb--70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-10 offset-lg-1">
                                <Brands2 hide_text="false" />
                            </div>
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


















                <div className="rbt-counterup-area counterup-section-02">
                    <CounterSection image={journeyBg}>
                        <HomePageCounter />
                    </CounterSection>
                </div>


















                <div className="rbt-feature-area rbt-single-course-features rbt-section-gap rbt-feature-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="row row--30 gy-5 align-items-center">

                                    <div className="col-lg-6 col-xl-5">
                                        <div className="thumbnail rbt-shadow-box rbt-why-smarttech-img">
                                            <Image className="w-100 radius-10" src={whySmartTechAboutImg} width={700} height={860} alt="SmartTech Solutions team member reviewing product progress on a laptop" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-xl-7" key="1">
                                        <div className="section-title">
                                            <h2 className="title">Why SmartTech Solutions</h2>
                                            <p className="b1 mt--15">{"Our software agency delivers unmatched technological expertise honed across diverse industries, pairs you with a "+
                                            "dedicated, scalable team that accelerates your project's time-to-market, and ensures seamless collaboration and quality that freelance or other "+
                                            "agencies simply can't match."}</p>
                                        </div>

                                        <div className="section-title subtitle"> <h5 className="title">Our areas of expertise</h5> </div>

                                        <div className="row g-5">
                                            <div className="col-lg-6">
                                                <ul className="rbt-list-style-1">
                                                    <li key="1"> <i className="feather-check"></i> Website Development </li>
                                                    <li key="2"> <i className="feather-check"></i> Mobile Development </li>
                                                    <li key="3"> <i className="feather-check"></i> Custom Software Development </li>
                                                    <li key="4"> <i className="feather-check"></i> Blockchain and NFT Development </li>
                                                    <li key="5"> <i className="feather-check"></i> Game Development </li>
                                                </ul>
                                            </div>{" "}
                                            <div className="col-lg-6">
                                                <ul className="rbt-list-style-1">
                                                    <li key="1"> <i className="feather-check"></i> Consultancy </li>
                                                    <li key="2"> <i className="feather-check"></i> DevOps Services </li>
                                                    <li key="3"> <i className="feather-check"></i> UI/UX Design </li>
                                                    <li key="4"> <i className="feather-check"></i> Data Science & Analysis</li>
                                                    <li key="5"> <i className="feather-check"></i> Cloud Development </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="read-more-btn mt--40">
                                            <Link className="rbt-moderbt-btn" href={ROUTE.appointment}> <span className="moderbt-btn-text"> Let's Talk About Your Project </span> <i className="feather-arrow-right"></i> </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



























                <div className="rbt-call-to-action-area rbt-section-gap rbt-vision-cta">
                    <Image src={visionCtaBg} alt="" fill sizes="100vw" className="rbt-vision-cta__img" aria-hidden="true" />
                    <span className="rbt-vision-cta__overlay" aria-hidden="true" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rbt-cta-6 text-center">
                                    <div className="content">
                                        <h1 className="title"> {"Let's bring your"}
                                        <br /> vision to life. </h1>
                                        {/* <p>We are SmartTech Solutions! driven by Passion, Committed to the Process</p> */}
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





                

                




                <div className={`rbt-rbt-blog-area rbt-section-gap ${isLightTheme ? 'bg-gradient-5' : ''}`}>
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



export default SmartTechAcademy;
