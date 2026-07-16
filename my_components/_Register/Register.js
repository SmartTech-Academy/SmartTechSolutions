import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import EventCarouse from "@/my_components/Events/EventCarouse";

import RegistrationForm from "./sections/RegistrationForm";

import rightShape from "../../public/images/banner/right-shape.png";
import topShape from "../../public/images/banner/top-shape.png";
// import client1 from "../../public/images/testimonial/client-03.png";
// import client2 from "../../public/images/testimonial/client-04.png";
// import client3 from "../../public/images/testimonial/client-06.png";

import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "../../helper/Utilities";









const Register = () => {

  const marqueeVariants = {
    animate: {
      x: [0, -1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        },
      },
    },
  };

  return (

    <>


        <div className="rbt-banner-area rbt-banner-3 header-transperent-spacer" style={{ paddingTop: 80 }}>
          <div className="wrapper">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-7 order-2 order-lg-1">
                  <div className="banner-content ">
                    <div className="inner">
                      <div className="section-title text-start">
                        <span className="subtitle bg-pink-opacity"> Community for Tech Enthusiasts </span>
                      </div>
                      <h4 className="subtitle">
                        {"Transform Your Future in Tech, No Cost, No Compromise. Launch Your Tech Career by joining our Community, it's Completely Free."}
                      </h4>
                      <p className="description">
                      {"Join our community-driven online school and master coding, data science, and more with zero tuition. Learn at your own pace from "+
                      "industry experts and build a portfolio that turns heads, with no hidden fees, ever."}
                      </p>
                      <div className="rating mb--20">
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a className="px-1" href="#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a className="px-1" href="#">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                      <div className="rbt-like-total">
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

                          <div className="more-author-text">
                            <h5 className="total-join-students"> Join Over 3000+ Learners </h5>
                            <p className="subtitle"> Launch Your Tech Career </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 order-1 order-lg-2">
                  <RegistrationForm />
                </div>
              </div>
            </div>
          </div>

          <div className="shape-wrapper">
              <div className="left-shape">
                <Image
                  src={rightShape}
                  width={1205}
                  height={808}
                  alt="Banner Images"
                />
              </div>
              <div className="top-shape">
                <Image
                  src={topShape}
                  width={1163}
                  height={156}
                  alt="Banner Images"
                />
              </div>
              <motion.div
                className="track"
                variants={marqueeVariants}
                animate="animate"
              >
                {/* <div className="marque-images edumarque"></div> */}
              </motion.div>
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











        <div className="rbt-ready-area ready-section-01 rbt-section-gap bg_image" style={{ backgroundImage: `url(${image_url('/app_images/bg/bg_img.jpg')})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle bg-primary-opacity"> Ready to start? </span>
                            <h2 className="title w-600">Self Development Course</h2>
                            <p className="mt--10 description"> We believe that we have the power to shape the <br />{" "} future, for the better lifelong </p>
                            <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.dashboardBrowseCourses}>
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




    </>

  );

};

export default Register;
