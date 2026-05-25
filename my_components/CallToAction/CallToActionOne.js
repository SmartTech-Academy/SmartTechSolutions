import Image from "next/image";
import Link from "next/link";

import { image_url } from "@/helper/Utilities";





const CallToActionOne = ({ btnClass, extra_class }) => {



  return (

    <div className="container">
    
      <div className="row align-items-center content-wrapper row--30 mt_dec--30 position-relative sal-animate" key="1">
        <div className="col-lg-8 mt--30 offset-lg-3">
          <div className="inner">
            <div className="content text-left">
              <h2 className={"title"+extra_class} data-sal="slide-up">Ready to start creating a Educational Website?</h2>
              <div className="call-to-btn text-start mt--30">
                <Link className={btnClass} href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Purchase Histudy</span>
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

        <div className="thumbnail">
          <Image className="w-100" src={image_url("/app_images/cta/cta.webp")} width={272} height={386} alt="Shape Images"/>
        </div>
      </div>
          
    </div>

  );


};



export default CallToActionOne;
