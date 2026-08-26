import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import React from "react";
// import Image from "next/image";
import sal from "sal.js";

import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import EventCarouse from "@/my_components/Events/EventCarouse";

import CourseHead from "@/my_components/_CourseDetails/sections/course-head";
import CourseDetailsOne from "@/my_components/_CourseDetails/CourseDetails-One";
import CourseActionBottom from "@/my_components/_CourseDetails/sections/Course-Action-Bottom";
import SimilarCourses from "@/my_components/_CourseDetails/sections/SimilarCourses";
import CourseData from "@/data/course-details/courseData.json";
// import CourseData from "@/data/course-details/courseData.json";


// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import { image_url } from "../../helper/Utilities";



const CourseDetails = () => {

    const router = useRouter();
    const postId = parseInt(router.query.courseId);
    let getCourse;
  
    getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));
  
    const checkMatch = getCourse.find((course) => course.id === postId);
  
    useEffect(() => {
      if (postId && checkMatch === undefined) {
        // router.push("/course-filter-one-toggle");
        router.push(ROUTE.dashboardBrowseCourses);
      }
  
      sal({
        threshold: 0.01,
        once: true,
      });
    }, [checkMatch, router]);


  return (

    <>



        <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
            <CourseHead checkMatch={checkMatch !== undefined ? checkMatch : ""} />
        </div>








        <div className="rbt-course-details-area ptb--60">
            <div className="container">
                <div className="row g-5">
                    <CourseDetailsOne checkMatchCourses={checkMatch !== undefined ? checkMatch : ""} />
                </div>
            </div>
        </div>






        <CourseActionBottom checkMatchCourses={checkMatch !== undefined ? checkMatch : ""} />







        <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
            <SimilarCourses checkMatchCourses={checkMatch !== undefined ? checkMatch.similarCourse : ""} />
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


export default CourseDetails;
