import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";





const UdemyAffiliateBanner = () => {
  return (

    <>

      <Swiper className="swiper udemy-affilite-activation rbt-arrow-between" slidesPerView={1} modules={[Navigation]} 
        navigation={{ nextEl: ".rbt-arrow-left", prevEl: ".rbt-arrow-right", }}>

            <SwiperSlide className="swiper-wrapper" key="1">

              <div className="swiper-slide">
                <div className="row gy-5 row--30 align-items-center">

                  <div className="col-lg-6">
                    <div className="course-thumbnail">
                      <Link href="#">
                        <Image className="radius-6" src="/app_images/UdemyAffiliateBanner/image1.webp" width={623} height={398} priority alt="Course Images" />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="content">
                      <div className="inner text-start">
                        <h2 className="banner-title">
                          Learn Mathematics in{" "} <span className="theme-gradient"> 14 weeks </span>{" "} with spoken.
                        </h2>

                        <p className="description has-medium-font-size mt--20">
                          Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
                        </p>

                        <div className="slider-btn rbt-button-group justify-content-start">
                          <Link className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"href="#">
                            <span data-text="ENROLL NOW">ENROLL NOW</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </SwiperSlide>







            <SwiperSlide className="swiper-wrapper" key="2">

              <div className="swiper-slide">
                <div className="row gy-5 row--30 align-items-center">

                  <div className="col-lg-6">
                    <div className="course-thumbnail">
                      <Link href="#">
                        <Image className="radius-6" src="/app_images/UdemyAffiliateBanner/image2.webp" width={623} height={398} priority alt="Course Images" />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="content">
                      <div className="inner text-start">
                        <h2 className="banner-title">
                          Learn English in{" "} <span className="theme-gradient"> 8 weeks </span>{" "} with spoken.
                        </h2>

                        <p className="description has-medium-font-size mt--20">
                          Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
                        </p>

                        <div className="slider-btn rbt-button-group justify-content-start">
                          <Link className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y"href="#">
                            <span data-text="ENROLL NOW">ENROLL NOW</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </SwiperSlide>









          <div className="rbt-swiper-arrow rbt-arrow-left">
            <div className="custom-overfolow">
              <i className="rbt-icon feather-arrow-left"></i>
              <i className="rbt-icon-top feather-arrow-left"></i>
            </div>
          </div>
          <div className="rbt-swiper-arrow rbt-arrow-right">
            <div className="custom-overfolow">
              <i className="rbt-icon feather-arrow-right"></i>
              <i className="rbt-icon-top feather-arrow-right"></i>
            </div>
          </div>

      </Swiper>
    </>
  );
};


export default UdemyAffiliateBanner;
