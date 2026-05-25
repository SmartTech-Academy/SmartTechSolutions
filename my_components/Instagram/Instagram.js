import Image from "next/image";

import { image_url } from "@/helper/Utilities";
import { ROUTE } from "@/route/app_routes.js";

 

const Instagram = () => {

  return (

    <div className="container-fluid">
      <div className="row g-3">
        
        <div className="col-lg-2 col-md-4 col-sm-6 col-6" key="">
          <div className="instagram-grid">
            <a href={ROUTE.TWITTER}>
              <Image src={image_url("/app_images/contact_and_office_img/office1.webp", true)} width={384} height={431} alt="instagram" />
              <span className="user-info">
                <span className="icon"> <i className="icon-instagram"></i> </span>
                <span className="user-name">{"smarttechschools"}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6" key="">
          <div className="instagram-grid">
            <a href={ROUTE.TWITTER}>
              <Image src={image_url("/app_images/contact_and_office_img/office2.webp", true)} width={384} height={431} alt="instagram" />
              <span className="user-info">
                <span className="icon"> <i className="icon-instagram"></i> </span>
                <span className="user-name">{"smarttechschools"}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6" key="">
          <div className="instagram-grid">
            <a href={ROUTE.TWITTER}>
              <Image src={image_url("/app_images/contact_and_office_img/office3.webp", true)} width={384} height={431} alt="instagram" />
              <span className="user-info">
                <span className="icon"> <i className="icon-instagram"></i> </span>
                <span className="user-name">{"smarttechschools"}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6" key="">
          <div className="instagram-grid">
            <a href={ROUTE.TWITTER}>
              <Image src={image_url("/app_images/contact_and_office_img/office4.webp", true)} width={384} height={431} alt="instagram" />
              <span className="user-info">
                <span className="icon"> <i className="icon-instagram"></i> </span>
                <span className="user-name">{"smarttechschools"}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6" key="">
          <div className="instagram-grid">
            <a href={ROUTE.TWITTER}>
              <Image src={image_url("/app_images/contact_and_office_img/office5.webp", true)} width={384} height={431} alt="instagram" />
              <span className="user-info">
                <span className="icon"> <i className="icon-instagram"></i> </span>
                <span className="user-name">{"smarttechschools"}</span>
              </span>
            </a>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-sm-6 col-6" key="">
          <div className="instagram-grid">
            <a href={ROUTE.TWITTER}>
              <Image src={image_url("/app_images/contact_and_office_img/office6.webp", true)} width={384} height={431} alt="instagram" />
              <span className="user-info">
                <span className="icon"> <i className="icon-instagram"></i> </span>
                <span className="user-name">{"smarttechschools"}</span>
              </span>
            </a>
          </div>
        </div>
            
      </div>
    </div>

  );

};

export default Instagram;
