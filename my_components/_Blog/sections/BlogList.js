import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// load in other components
import BlogListItems from "./BlogList-Items";
import Pagination from "@/my_components/Common/Pagination";

// load in data
import BlogData from "@/data/blog/blog.json";

// load in utilities
import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";





// start hook here
const BlogList = ({ isPagination }) => {


  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 7;
  const selectedBlogs = blogs.slice(startIndex, startIndex + 7);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getBlogs = () => {
      setBlogs(BlogData.blogList);
      setTotalPages(Math.ceil(BlogData.blogList.length / 7));
    };

    getBlogs();
  }, [BlogData, setBlogs, setTotalPages, 7]);

  return (
    <>
      <>
        <div className="row">
          <div className="col-lg-10 offset-lg-1 mt_dec--30">

            <div className="col-12 mt--30">
              <div className="rbt-card variation-02 height-auto rbt-hover">
                <div className="rbt-card-img">
                  <a href={"/post-format-standard/lol"} target="_blank">
                    <Image src={image_url("/app_images/blog/blog1.webp", true)} width={1085} height={645} priority alt="Card image" />
                  </a>
                </div>

                <div className="rbt-card-body">
                  <h3 className="rbt-card-title">
                    <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}> {"How to Analyze Your Best Pages for SEO Performance"} </Link>
                  </h3>
                  <p className="rbt-card-text"> {"It is a long established fact that a reader."} </p>
                  <div className="rbt-card-bottom">
                    <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`} target="_blank"> 
                      Learn More
                      <i>
                        <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                          <g stroke="#27374D" fill="none" fillRule="evenodd">
                            <path d="M10.614 0l5.629 5.629-5.63 5.629" />
                            <path strokeLinecap="square" d="M.663 5.572h14.594" />
                          </g>
                        </svg>
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            

            <BlogListItems selectedBlogs={selectedBlogs} start={1} end={6} />
          </div>
        </div>



        {isPagination ? (
          <div className="row">
            <div className="col-lg-12 mt--60">
              <Pagination
                totalPages={totalPages}
                pageNumber={page}
                handleClick={handleClick}
              />
            </div>
          </div>
        ) : (
          ""
        )}

      </>
    </>
  );
};

export default BlogList;
