import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import TestimonialData from "../../data/elements/testimonial.json";


import { image_url, isBrandLogoColorLocked } from "@/helper/Utilities";





const Testimonial_3 = () => {



  return (

    <>
        
      <div className="container" key="1">

        <div className="row">
          <div className="col-lg-12 mb--60">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity"> EDUCATION FOR EVERYONE </span>
              <h2 className="title">Student's Feedback</h2>
              <p className="description mt--20">
                Learning communicate to global world and build a bright future and career development, increase your skill with our histudy.
              </p>
            </div>
          </div>
        </div>

        <Swiper className="testimonial-item-3-activation swiper rbt-arrow-between gutter-swiper-30" slidesPerView={1} key="1" modules={[Navigation]}
          navigation={{ nextEl: ".rbt-arrow-left", prevEl: ".rbt-arrow-right", }}
          breakpoints={{
            575: { slidesPerView: 1, },
            768: { slidesPerView: 2, },
            992: { slidesPerView: 3, },
          }}>

          {TestimonialData.testimonialTwo[0].left.map((data, index) => (

            <SwiperSlide className="swiper-wrapper" key={index}>
              <div className="swiper-slide">
                <div className="single-slide">
                  <div className="rbt-testimonial-box">
                    <div className="inner bg-no-shadow bg-color-primary-opacity">

                      <div className="clint-info-wrapper">
                        <div className="thumb">
                          <Image src={image_url(data.img)} width={494} height={494} alt="Clint Images" />
                        </div>
                        <div className="client-info">
                          <h5 className="title">{data.title}</h5>
                          <span>{data.position}</span>
                          {data.companyLogo ? (
                            <div className={`client-info__logo brand-logo${isBrandLogoColorLocked(data.companyLogo) ? " brand-logo--keep-color" : ""}`}>
                              <Image
                                src={data.companyLogo}
                                width={110}
                                height={38}
                                style={{ width: "auto", height: "auto", maxWidth: "110px", maxHeight: "38px", objectFit: "contain" }}
                                alt={data.company ? data.company.replace(/^@\s*/, "") : "Client company logo"}
                              />
                            </div>
                          ) : (
                            <i>{data.company}</i>
                          )}
                        </div>
                      </div>

                      <div className="description">
                        <p className="subtitle-3">{data.desc}</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}


          <div className="rbt-swiper-arrow rbt-arrow-left">
            <div className="custom-overfolow"> <i className="rbt-icon feather-arrow-left"></i> <i className="rbt-icon-top feather-arrow-left"></i> </div>
          </div>

          <div className="rbt-swiper-arrow rbt-arrow-right">
            <div className="custom-overfolow"> <i className="rbt-icon feather-arrow-right"></i> <i className="rbt-icon-top feather-arrow-right"></i> </div>
          </div>

        </Swiper>

      </div>

    </>

  );

};




export default Testimonial_3;
