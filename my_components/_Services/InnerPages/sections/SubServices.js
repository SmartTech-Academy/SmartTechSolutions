import Image from "next/image";

import { image_url } from "@/helper/Utilities";



const SubServices = ({ data, type = "light" }) => {

  return (

    <>

      {data.map((item, index) => (
        
        <>

          {(item.title_1) ? 
            <div className={`rbt-video-area mb--120 ${type === "light" ? "bg-color-white" : "bg-color-darker"}`} key={index}>
              <div className="container">
                <div className="rbt-splite-style">
                  <div className="split-wrapper">
                    <div className="row g-0 align-items-center">
                      <div className="col-lg-12 col-xl-6 col-12">
                        <div className="thumbnail image-left-content">
                          <Image src={image_url(item.image_1)} width={960} height={650} alt="split Images" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-xl-6 col-12">
                        <div className="split-inner">
                          <h4 className={`title sal-animate${type === "light" ? "" : " color-white"}`} data-sal="slide-up" data-sal-duration="400" data-sal-delay="200"> {item.title_1} </h4>
                          <p className="description sal-animate" data-sal="slide-up" data-sal-duration="400" data-sal-delay="300"> {item.desc_1} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : null}

          {(item.title_2) ? 
            <div className={`rbt-video-area mb--120 ${type === "light" ? "bg-color-white" : "bg-color-darker"}`} key={index}>
              <div className="container">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-6 order-2 order-lg-1">
                    <div className="inner pr--90 pr_md--0 pr_sm--0">
                      <div className="section-title text-start">
                        <h3 className="title sal-animate" data-sal="slide-up" data-sal-duration="400" data-sal-delay="200">{item.title_2}</h3>
                        <p className="description mt--30 sal-animate" data-sal="slide-up" data-sal-duration="400" data-sal-delay="300">{item.desc_2}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2">
                    <div className="video-popup-wrapper">
                      <Image className="w-100 rbt-radius" src={image_url(item.image_2)} width={638} height={458} alt="Video Images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : null}

        </>

      ))}

    </>

  );

};

export default SubServices;
