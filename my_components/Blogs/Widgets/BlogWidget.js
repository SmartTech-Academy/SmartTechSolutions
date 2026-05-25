import Image from "next/image";
import Link from "next/link";

import { image_url } from "@/helper/Utilities";
import { ROUTE } from "@/route/app_routes.js";


const BlogWidget = ({extra_class}) => {

    return (
        
        <>
            <div className="row g-5">


                <div className={"col-lg-6 col-md-12 col-sm-12 col-12"+extra_class} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="rbt-card variation-02 height-330 rbt-hover" key="1">
                        <div className="rbt-card-img">
                        <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>
                            <Image src={image_url("/app_images/blog_images/blog-image-1.webp")} width={580} height={300} priority alt="Card image" />{" "}
                        </Link>
                        </div>
                        
                        <div className="rbt-card-body">
                            <h3 className="rbt-card-title">
                                <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>How to Analyze Your Best Pages for SEO Performance</Link>
                            </h3>
                            <p className="rbt-card-text">It is a long established fact that a reader.</p>
                            <div className="rbt-card-bottom">
                                <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>Read Article
                                    <i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg"><g stroke="#27374D" fill="none" fillRule="evenodd"><path d="M10.614 0l5.629 5.629-5.63 5.629" /><path strokeLinecap="square" d="M.663 5.572h14.594" /></g></svg></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>




                <div className={"col-lg-6 col-md-12 col-sm-12 col-12"+extra_class} data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className={`rbt-card card-list variation-02 rbt-hover`} key="1">
                        <div className="rbt-card-img">
                            <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>
                                <Image src={image_url("/app_images/blog_images/blog-image-2.webp")} width={580} height={300} priorityalt="Card image" /> {" "}
                            </Link>
                        </div>

                        <div className="rbt-card-body">
                            <h5 className="rbt-card-title"> <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>Why Is Education So Famous?</Link> </h5>
                            <div className="rbt-card-bottom">
                                <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}> Read Article
                                    <i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg" > <g stroke="#27374D" fill="none" fillRule="evenodd"> <path d="M10.614 0l5.629 5.629-5.63 5.629" /> <path strokeLinecap="square" d="M.663 5.572h14.594" /></g></svg></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`rbt-card card-list variation-02 rbt-hover mt--30`} key="1">
                        <div className="rbt-card-img">
                            <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>
                                <Image src={image_url("/app_images/blog_images/blog-image-3.webp")} width={580} height={300} priorityalt="Card image" /> {" "}
                            </Link>
                        </div>

                        <div className="rbt-card-body">
                            <h5 className="rbt-card-title"> <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>Difficult Things About Education.</Link> </h5>
                            <div className="rbt-card-bottom">
                                <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}> Read Article
                                    <i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg" > <g stroke="#27374D" fill="none" fillRule="evenodd"> <path d="M10.614 0l5.629 5.629-5.63 5.629" /> <path strokeLinecap="square" d="M.663 5.572h14.594" /></g></svg></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`rbt-card card-list variation-02 rbt-hover mt--30`} key="1">
                        <div className="rbt-card-img">
                            <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>
                                <Image src={image_url("/app_images/blog_images/blog-image-4.webp")} width={580} height={300} priorityalt="Card image" /> {" "}
                            </Link>
                        </div>

                        <div className="rbt-card-body">
                            <h5 className="rbt-card-title"> <Link href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}>Education Is So Famous, But Why?</Link> </h5>
                            <div className="rbt-card-bottom">
                                <Link className="transparent-button" href={ROUTE.blog_details+`How-to-Analyze-Your-Best-SEO-1`}> Read Article
                                    <i><svg width="17" height="12" xmlns="http://www.w3.org/2000/svg" > <g stroke="#27374D" fill="none" fillRule="evenodd"> <path d="M10.614 0l5.629 5.629-5.63 5.629" /> <path strokeLinecap="square" d="M.663 5.572h14.594" /></g></svg></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>

    );

};




export default BlogWidget;
