import Link from "next/link";

import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";







export const Banner = () => {


  return (

      <div className="slider-area rbt-banner-5 height-800 bg_image" data-gradient-overlay="7" style={{ backgroundImage: "url(/app_images/bg/banner.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title display-one">
                  We are a <span>Technology &</span> 
                  <span>Digital Solutions Company</span>
                </h1>
                <p className="description">
                  We are your reliable development partner with just one goal in focus, to create products that deliver enduring value and drive profitability. We transforming Industries with Robust, Creative Digital Solutions.
                </p>
                <div className="rbt-button-group">
                  <Link className="rbt-btn btn-white hover-icon-reverse" href={ROUTE.appointment}>
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Lets Talk About Your Project</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </div>
                  </Link>
                  <Link className="rbt-btn btn-border color-white hover-icon-reverse" href={ROUTE.service}>
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">Our Services</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
  
};
