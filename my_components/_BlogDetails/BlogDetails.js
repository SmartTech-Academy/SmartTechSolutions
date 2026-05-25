import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import React from "react";
// import Image from "next/image";
import sal from "sal.js";

// import EventBreadCrumb from "./sections/EventBreadCrumb";
// import EventDetails from "./sections/EventDetails";
import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import TrustedBrands from "@/my_components/Brand/Brands";
import EventCarouse from "@/my_components/Events/EventCarouse";
import BlogBreadCrumb from "@/my_components/Common/Blog-BreadCrumb";
import SmartTechBlogDetails from "./sections/SmartTechBlogDetails";
import BlogListItems from "@/my_components/_Blog/sections/BlogList-Items";

import BlogData from "@/data/blog/blog.json";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { extractNumbersFromString } from "@/helper/SpecialHelpers.js";
// import { CONFIG } from "@/app_config.js";
// import { image_url } from "../../helper/Utilities";



const SmartTechEventsDetails = () => {

  const router = useRouter();
  const postId = parseInt(extractNumbersFromString(router.query.postId));
  console.log(postId);
  let blogPosts;

  blogPosts = JSON.parse(JSON.stringify(BlogData.blogList));


  const matchedBlog = blogPosts.find((post) => post.id === postId);

  useEffect(() => {
    if (postId && !matchedBlog) {
      router.push(ROUTE.blog);
    }
  }, [matchedBlog, router]);



  return (


    <main className="rbt-main-wrapper">



      <div className="rbt-overlay-page-wrapper bg-body-primary rbt-section-gapBottom">
        <BlogBreadCrumb matchedBlog={matchedBlog} />

        <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
          <div className="blog-content-wrapper rbt-article-content-wrapper">
            <SmartTechBlogDetails matchedBlog={matchedBlog !== undefined ? matchedBlog : ""} />
            <div className="related-post pt--60">
              <div className="section-title text-start mb--40">
                <span className="subtitle bg-primary-opacity"> Related Post </span>
                <h4 className="title">Similar Post</h4>
              </div>
              <BlogListItems selectedBlogs={BlogData.blogList} start={1} end={4} />
            </div>
          </div>
        </div>
      </div>








      <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--35">
        <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse" extra_class=" sal-animate" />
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

















    

      <div className="rbt-brand-area bg-color-white ptb--60">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-10 offset-lg-1">
                <TrustedBrands />
                </div>
            </div>
          </div>
      </div>
      
    </main>

  );

};


export default SmartTechEventsDetails;
