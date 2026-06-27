import React from "react";
import Image from "next/image";
import Link from "next/link";

import { image_url } from "@/helper/Utilities";
import { ROUTE } from "@/route/app_routes.js";



const BannerProps = ({ parentClass, bannerImg, title, desc }) => {

  return (

    <>

      <div className={`rbt-banner-item bg_image ${parentClass}`}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.54) 48%, rgba(0, 0, 0, 0.22) 100%), url(/app_images/banner/about_smarttech_solutions.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>

        {bannerImg ? (
          <div className="shape-1">
            <Image src={bannerImg} width={155} height={33} alt="Shape" />
          </div>
        ) : null}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner" style={{ marginLeft: 0, opacity: 1, position: "relative", transform: "none", zIndex: 2 }}>
                <h1 className="title" style={{ animationName: "none", color: "#ffffff", opacity: 1, transform: "none" }}>
                  {title}
                </h1>
                <p className="description" style={{ animationName: "none", color: "#ffffff", opacity: 1, transform: "none" }}>
                  {desc}
                </p>

                {/* <div className="rbt-like-total">
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
                        <h5 className="total-join-students text-white"> Join Over 150+ Happy Clients </h5>
                        <p className="subtitle"> Let's Help Transform your ideas to Reality. </p>
                    </div>
                  </div>
                </div> <br /><br /> */}

                <div className="bottom-content d-flex align-items-center gap-5 flex-wrap">
                  <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.project}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View Our Projects</span>
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

      </div>

    </>

  );
};

export default BannerProps;
