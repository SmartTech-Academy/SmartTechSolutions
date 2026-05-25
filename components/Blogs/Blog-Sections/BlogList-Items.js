// import Link from "next/link";
import Image from "next/image";

// load in utilities
import { image_url } from "@/helper/Utilities";
import { ROUTE } from "@/route/app_routes.js";


const BlogListItems = ({ start, end, selectedBlogs }) => {
  return (
    <>

      <div className="rbt-card card-list variation-02 rbt-hover mt--30" key="1">
        <div className="rbt-card-img">
          <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
            <Image src={image_url("/app_images/blog/blog2.webp", true)} width={580} height={300} priority alt="Card image" />{" "}
          </Link>
        </div>
        <div className="rbt-card-body">
          <h5 className="rbt-card-title">
            <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">{"Why Is Education So Famous?"}</Link>
          </h5>
          <div className="rbt-card-bottom">
            <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
              Read Article
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


      <div className="rbt-card card-list variation-02 rbt-hover mt--30" key="2">
        <div className="rbt-card-img">
          <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
            <Image src={image_url("/app_images/blog/blog3.webp", true)} width={580} height={300} priority alt="Card image" />{" "}
          </Link>
        </div>
        <div className="rbt-card-body">
          <h5 className="rbt-card-title">
            <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">{"Difficult Things About Education."}</Link>
          </h5>
          <div className="rbt-card-bottom">
            <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
              Read Article
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


      <div className="rbt-card card-list variation-02 rbt-hover mt--30" key="3">
        <div className="rbt-card-img">
          <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
            <Image src={image_url("/app_images/blog/blog4.webp", true)} width={580} height={300} priority alt="Card image" />{" "}
          </Link>
        </div>
        <div className="rbt-card-body">
          <h5 className="rbt-card-title">
            <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">{"Education Is So Famous, But Why?"}</Link>
          </h5>
          <div className="rbt-card-bottom">
            <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
              Read Article
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


      <div className="rbt-card card-list variation-02 rbt-hover mt--30" key="4">
        <div className="rbt-card-img">
          <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
            <Image src={image_url("/app_images/blog/blog5.webp", true)} width={580} height={300} priority alt="Card image" />{" "}
          </Link>
        </div>
        <div className="rbt-card-body">
          <h5 className="rbt-card-title">
            <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">{"Five Things You About Education."}</Link>
          </h5>
          <div className="rbt-card-bottom">
            <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
              Read Article
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


      <div className="rbt-card card-list variation-02 rbt-hover mt--30" key="5">
        <div className="rbt-card-img">
          <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
            <Image src={image_url("/app_images/blog/blog6.webp", true)} width={580} height={300} priority alt="Card image" />{" "}
          </Link>
        </div>
        <div className="rbt-card-body">
          <h5 className="rbt-card-title">
            <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">{"You Will Never Truth Of Education."}</Link>
          </h5>
          <div className="rbt-card-bottom">
            <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-6754`} target="_blank">
              Read Article
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


    </>
  );
};

export default BlogListItems;
