import React from "react";
import Link from "next/link";

import CallToActionOne from "@/my_components/CallToAction/CallToActionOne";
import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
import BlogBreadCrumb from "@/my_components/Common/Blog-BreadCrumb";
import SmartTechBlogDetails from "./sections/SmartTechBlogDetails";
import BlogListItems from "@/my_components/_Blog/sections/BlogList-Items";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";

const BlogDetails = ({ post, relatedPosts = [] }) => {
  return (
    <main className="rbt-main-wrapper">
      <div className="rbt-overlay-page-wrapper bg-body-primary rbt-section-gapBottom">
        <BlogBreadCrumb post={post} />

        <div className="rbt-blog-details-area rbt-section-gapBottom breadcrumb-style-max-width">
          <div className="blog-content-wrapper rbt-article-content-wrapper">
            <SmartTechBlogDetails post={post} />

            {relatedPosts.length > 0 ? (
              <div className="related-post pt--60">
                <div className="section-title text-start mb--40">
                  <span className="subtitle bg-primary-opacity"> Related Post </span>
                  <h4 className="title">Similar Post</h4>
                </div>
                <BlogListItems posts={relatedPosts} />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--35">
        <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse" extra_class=" sal-animate" />
      </div>

      <div className="rbt-rbt-blog-area rbt-section-gapTop bg-gradient-8 rbt-round-bottom-shape">
        <div className="wrapper pb--50 rbt-index-upper">
          <div className="container">
            <div className="row g-5 align-items-end mb--60">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="section-title text-start">
                  <h2 className="title color-white">Latest News</h2>
                  <p className="description color-white-off mt--20">
                    Ideas, engineering, and innovation notes from SmartTech Solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="load-more-btn text-start text-lg-end">
                  <Link className="rbt-btn btn-border icon-hover radius-round color-white-off" href={ROUTE.blog}>
                    <span className="btn-text">See All Articles</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </Link>
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
  );
};

export default BlogDetails;
