import Link from "next/link";
import React from "react";

import { CONFIG } from "@/app_config.js";



const Banner = ({ text, col, ArticlesLength }) => {
  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className={col}>
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item"> <Link href="/">Home</Link> </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right"></i>
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">{"Blog"}</li>
                  </ul>

                  <div className="title-wrapper">
                    <h1 className="title mb--0">{text}</h1>
                    {/* <Link href="#" className="rbt-badge-2">
                      <div className="image">🎉</div>{" "}
                      {ArticlesLength+" Articles"}
                    </Link> */}
                  </div>

                  <p className="description"> {"Stay informed with the latest updates and announcements from "+CONFIG.NICK_NAME+"! "} </p>

                  {/* <div className="col-lg-7 col-md-12 mb--30">
                    <div className="rbt-sorting-list d-flex flex-wrap justify-content-start">
                      <div className="rbt-short-item">
                        <form action="#" className="rbt-search-style me-0">
                          <input type="text" placeholder="Search Our Blog..." />
                          <button type="submit" className="rbt-search-btn rbt-round-btn">
                            <i className="feather-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div> */}


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
