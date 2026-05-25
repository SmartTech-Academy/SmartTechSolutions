import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";

import AboutTwo from "../../components/Abouts/About-Two";
import Testimonial_3 from "@/my_components/Testimonials/Testimonial_3";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
// At the top of your file
import dynamic from "next/dynamic";

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


import { image_url } from "../../helper/Utilities";




const SmartTechAcademy = () => {

    const sinceParallax = useParallax({ translateX: [-20, 0] });
    const enrolledParallax = useParallax({ translateX: [30, 0] });

    useEffect(() => {
        sal({
            threshold: 0.01,
            once: true,
        });
    }, []);



    return (

        <>


            <main className="rbt-main-wrapper">


                
            

                <div className="rbt-banner-area rbt-banner-3 bg-gradient-1 theme-shape header-transperent-spacer"> 
                    <div className="wrapper w-100">
                        <div className="container">
                            <div className="row g-5 justify-content-between align-items-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div className="content">
                                        <div className="inner">
                                            <div className="section-title text-start">
                                                <span className="subtitle bg-primary-opacity"> SMARTTECH ACADEMY </span>
                                            </div>

                                            <h1 className="title"> 
                                                Transforming <span className="theme-gradient">Industries with Robust, Creative</span> Digital Solutions & 
                                                Training <span className="theme-gradient">Future Experts</span>. </h1>

                                            <div className="rbt-like-total">
                                                <div className="profile-share">
                                                    <Link href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex="0">
                                                        <Image src={image_url("/app_images/clients/client_2.webp")} width={55} height={55} alt="education" />
                                                    </Link>

                                                    <Link href="#" className="avatar" data-tooltip="Mark" tabIndex="0">
                                                        <Image src={image_url("/app_images/clients/client_3.webp")} width={55} height={55} alt="education" />
                                                    </Link>

                                                    <Link href="#" className="avatar" data-tooltip="Jordan" tabIndex="0">
                                                        <Image src={image_url("/app_images/clients/client_4.webp")} width={55} height={55} alt="education" />
                                                    </Link>

                                                    <div className="more-author-text">
                                                        <h5 className="total-join-students"> Join Over 150+ Happy Clients </h5>
                                                        <p className="subtitle"> Let's Help Transform your ideas to Reality. </p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="rbt-button-group justify-content-start mt--30">
                                                <Link className="rbt-btn btn-gradient rbt-switch-btn" href="#">
                                                    <span data-text="LET'S TALK ABOUT YOUR PROJECT">LET'S TALK ABOUT YOUR PROJECT</span>
                                                </Link>
                                                <Link className="rbt-btn btn-border rbt-switch-btn" href="#"> <span data-text="FIND COURSES">FIND COURSES</span> </Link>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="thumbnail-wrapper">
                                        <div className="thumbnail text-end">
                                            <Image src={image_url("/app_images/clients/client_1.webp")} width={597} height={479} alt="Education Images" />
                                        </div>

                                        {/* <div className="card-info bounce-slide">
                                            <div className="inner">
                                                <div className="name">
                                                    Hillery. <span>/ USA</span>
                                                </div>
                                                <div className="rating-wrapper d-block d-sm-flex">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>                                                                                                                                                                <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                                    </div>
                                                    <span>they are the best in this</span>
                                                </div>
                                            </div>
                                            <div className="notify-icon">
                                                <Image src={image_url("/app_images/clients/client_5.webp")} width={100} height={100} alt="Client Images" />
                                            </div>
                                        </div> */}
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







                



                <div className="rbt-about-area bg-color-white rbt-section-gapTop about-style-1">
                    <div className="container">
                        <ParallaxProvider>
                            <AboutTwo />
                        </ParallaxProvider>
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
                                            <h2 className="title">Why SmartTech Academy</h2>
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


























                <div className="rbt-about-area rbt-section-gap overflow-hidden">
                    <div className="about-style-4 version-04">
                        <div className="shape-2">
                            <Image src={bookShape} width={1393} height={956} unoptimized={true} alt="Shape" />
                        </div>

                        <div className="container">
                            <div className="row row--60 mt_dec--40 align-items-center">

                                <div className="col-xl-5 col-12 mt--40">
                                    <div className="about-thumb">
                                        <div className="shape-1">
                                            <Image src={dots} width={87} height={140} unoptimized={true} alt="Shape" />
                                        </div>

                                        <div className="since" ref={sinceParallax.ref}>
                                            <span>
                                                <Image src={awardImage} width={36} height={51} alt="Award Icon" />
                                            </span>
                                            <div className="title-wrap">
                                                <h4 className="number">
                                                    <span className="odometer rbt-font-primary">
                                                        <Odometer value={1890} />
                                                    </span>
                                                </h4>
                                                <h6 className="subtitle">Since</h6>
                                            </div>
                                        </div>

                                        <div className="enrolled" ref={enrolledParallax.ref}>
                                            <div className="enrolled-cont">
                                                <span><Image src={cap} width={41} height={31} alt="image" /></span>
                                                <div>
                                                    <h6 className="enrolled-title d-flex align-items-center">
                                                        <span className="odometer rbt-font-primary"> <Odometer value={36} /> </span>
                                                        k+
                                                    </h6>
                                                    <p className="enrolled-description"> Success Students </p>
                                                </div>
                                            </div>
                                            <div className="profile-share">
                                                 <Link href="#" className="avatar" data-tooltip="Mark JOrdan" tabIndex="0">
                                                    <Image src={image_url("/app_images/clients/client_2.webp")} width={55} height={55} alt="education" />
                                                </Link>

                                                <Link href="#" className="avatar" data-tooltip="Mark" tabIndex="1">
                                                    <Image src={image_url("/app_images/clients/client_3.webp")} width={55} height={55} alt="education" />
                                                </Link>

                                                <Link href="#" className="avatar" data-tooltip="Jordan" tabIndex="2">
                                                    <Image src={image_url("/app_images/clients/client_4.webp")} width={55} height={55} alt="education" />
                                                </Link>
                                                <Link href="#" className="avatar" data-tooltip="Mark" tabIndex="1">
                                                    <Image src={image_url("/app_images/clients/client_3.webp")} width={55} height={55} alt="education" />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="thumb-1">
                                            <Image src={coach} width={474} height={662} alt="COACH" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-12 mt--40">
                                    <div className="content">
                                        <div className="section-title">
                                            <span className="subtitle bg-primary-opacity">
                                                About SmartTech
                                            </span>
                                            <h2 className="title w-600">
                                                I Help People to Discover Their True Potential.
                                            </h2>
                                        </div>
                                        <p className="mt--20">
                                            At Histudy University, we are moving boldly - and
                                            concertedly - to expand tomorrow's frontiers. We believe
                                            that we have the power to shape the future, for the better
                                        </p>
                                        <ul className="mt--30 mb--25">
                                            <li>
                                                <span className="icon bg-primary-opacity">
                                                    <i className="feather-heart"></i>
                                                </span>
                                                <span className="text">Flexible Classes</span>
                                            </li>
                                            <li>
                                                <span className="icon bg-secondary-opacity">
                                                    <i className="feather-book"></i>
                                                </span>
                                                <span className="text">Learn From Anywhere</span>
                                            </li>
                                        </ul>
                                        <div className="d-flex align-items-center gap-5 flex-wrap">
                                            <a className="rbt-btn btn-gradient hover-icon-reverse" href="#">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">Chat With Us</span>
                                                    <span className="btn-icon">
                                                        <i className="feather-arrow-right"></i>
                                                    </span>
                                                    <span className="btn-icon">
                                                        <i className="feather-arrow-right"></i>
                                                    </span>
                                                </span>
                                            </a>
                                            <div>
                                                <Image src={signature} width={150} height={106} alt="Signature" />
                                            </div>
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
                                        <p>Pull the Trigger!</p>
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





                

                




                <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
                    <div className="container">
                        <div className="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30">
                            <Testimonial_3 />
                        </div>
                    </div>
                </div>











                <div className="rbt-ready-area ready-section-01 rbt-section-gap bg_image" style={{ backgroundImage: `url(${image_url('/app_images/bg/bg_img.jpg')})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="subtitle bg-primary-opacity"> Ready to start? </span>
                                    <h2 className="title w-600">Self Development Course</h2>
                                    <p className="mt--10 description"> We believe that we have the power to shape the <br />{" "} future, for the better lifelong </p>
                                    <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.course}>
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Browse Courses</span>
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








                {/* <div className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap" 
                style={{ background: "url("+image_url('../app_images/bg/dots.png')+") repeat center/auto" }}>
                <Newsletter />
                </div> */}


            </main>

        </>
    );
  
};



export default SmartTechAcademy;
