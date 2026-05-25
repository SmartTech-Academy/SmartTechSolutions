import Link from "next/link";

import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";







export const Banner = () => {


  return (

      <div className="slider-area rbt-banner-5 height-750 bg_image" data-gradient-overlay="7" style={{ backgroundImage: "url(/app_images/bg/banner.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <h1 className="title display-one">
                  {/* We Build <span>Industry-leading</span>
                  <span>Tech Solutions</span> with unmatched expertise */}

                  {/* We Build expert <span>Software Solutions</span>
                  <span>for Your Business</span> Growth */}

                  We're a <span>software agency</span> 
                  <span>& free online</span> School
                  
                </h1>
                <p className="description">
                  {/* At {CONFIG.APP_NAME}, we specialize in bringing your vision to life. We create robust digital solutions for diverse industries with our creative, 
                  dedicated team of professionals. */}
                  We are your reliable development partner with just one goal in focus, to create products that deliver enduring value and drive profitability. 
                  {/* We build robust digital 
                  solutions for diverse industries with our creative, dedicated team of professionals. */}
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
