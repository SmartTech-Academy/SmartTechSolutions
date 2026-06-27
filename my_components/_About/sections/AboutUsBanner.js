import React from "react";

import bannerImg from "@/public/images/shape/m-banner-shape-01.png";
import BannerProps from "./BannerProps";


const AboutUsBanner = () => {
  return (
    <>
      <div className="rbt-banner-area rbt-banner-19 mt--10">
        <div className="wrapper">
          <div className="rbt-banner-activation-2 rbt-arrow-between">
            
            <BannerProps
              parentClass="bg_image--24"
              bannerImg={bannerImg}
              title="Where Brilliant Minds Build the Future"
              desc="We are a team of visionary leaders, innovators, and problem-solvers who leverage agile methodologies to design and deliver transformative 
              solutions that create lasting value for our clients and the communities they serve."
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsBanner;
