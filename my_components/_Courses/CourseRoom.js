import { useEffect, useState } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";


import Contact from "../Contacts/Contact";
import ContactForm from "../Contacts/Contact-Form";
import Instagram from "../Instagram/Instagram";

import CourseDetails from "@/data/course-details/courseData.json";


// HOME PAGE SECTIONS
import CoursesPageCategoryHead from "./sections/CoursesPageCategoryHead";
import Pagination from "@/my_components/Common/Pagination";
import CourseCardTwo from "./Filters/CourseCard-Two";
import Testimonial_3 from "@/my_components/Testimonials/Testimonial_3";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import EventCarouse from "@/my_components/Events/EventCarouse";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import shapeImg from "../../public/images/icons/three-shape.png";
import { image_url } from "../../helper/Utilities";






const CourseRoom = () => {

    const [courses, setCourse] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.courseTab));

    const startIndex = (page - 1) * 6;

    const getSelectedCourse = courses.slice(startIndex, startIndex + 6);

    const handleClick = (num) => {
        setPage(num);
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    useEffect(() => {
        setCourse(getAllCourse);
        setTotalPages(Math.ceil(getAllCourse.length / 6));
    }, [setTotalPages, setCourse]);

    const fake_course = ["", "", "", "", "", "", ""]

    return (
        
        <>

            <CoursesPageCategoryHead />

            <div className="rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    
                    <CourseCardTwo course={getSelectedCourse} />

                    {fake_course.length > CONFIG.CONTENT_LENGHT ? (
                        <div className="row">
                            <div className="col-lg-12 mt--60">
                                <Pagination totalPages={totalPages} pageNumber={page} handleClick={handleClick} />
                            </div>
                        </div>
                    ) : ( "" )}
                    
                </div>
            </div>












            <div className="rbt-testimonial-area bg-color-extra2 rbt-section-gap">
                <div className="container">
                    <div className="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30">
                        <Testimonial_3 />
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
                                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
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



export default CourseRoom;
