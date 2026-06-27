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
import BlogWidget from "@/my_components/Blogs/Widgets/BlogWidget";
import Brands2 from "../TrustedByBrands/Brands2";
import ProcessProcedures from "./sections/ProcessProcedures";
// At the top of your file
import dynamic from "next/dynamic";

import Industries from "../_Services/InnerPages/sections/Industries";

// LOAD DATAS
import IndustriesData from "@/my_data/services/industries.json";

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

// import bookShape from "../../public/images/shape/book-shape-01.png";
// import awardImage from "../../public/images/icons/award-gd-01.png";
// import cap from "../../public/images/shape/o-icon-2.png";
// import coach from "../../public/app_images/about/about_us.webp";
// import signature from "../../public/app_images/about/signatures.webp";
// import dots from "../../public/images/shape/a-dot-01.png";
// import lineArrow from "@/public/app_images/shape/o-line-arrow.png";



import { image_url } from "../../helper/Utilities";








const SmartTechProcess = () => {


    useEffect(() => {
        sal({
            threshold: 0.01,
            once: true,
        });
    }, []);




    return (

        <>


            <main className="rbt-main-wrapper">





                <div className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape" style={{ height: '650px', position: 'relative' }}>
                    <div className="wrapper pb--50 rbt-index-upper">
                        <div className="container">
                            <div className="row g-5 align-items-end mb--60">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="section-title text-start">
                                        <br /><br />
                                        <h2 className="title color-white">{"Our product development process"}</h2>
                                        <p className="description color-white-off mt--20">
                                            {"Our approach, From concept to completion is driven by an unwavering commitment to precision and care"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProcessProcedures />



















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




















                <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
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



export default SmartTechProcess;
