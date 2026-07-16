import Image from "next/image";
import React from "react";
import Link from "next/link";
import CourseSlider from "./CourseSlider";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "@/helper/Utilities";


export default function ServicesProp({ courseData, image }) {


  return (
    <>
      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="0" data-sal-duration="700">
          <div className="modern-course-features-box h-100">
              <div className="inner">
                <div className="thumbnail">
                  <Image src={image_url("/app_images/services/service_images/smarttech_web_development.png", true)} width={604} height={408} alt="Image" />
                </div>

                <div className="content">
                  {/* <span className="rbt-badge-6 bg-secondary-opacity"> {"Hello! Web Development Course"} </span> */}
                  <h2 className="title mt--10">{"Web Application Development Services"}</h2>
                  <p>{"Unlock the full potential of your business with expertly crafted web applications that are fast, scalable, and tailored to deliver "+ 
                  "exceptional user experiences. The web applications we build are always designed to drive results and set you ahead of the competition."}</p>

                  <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.web_dev_service}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Learn More</span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="100" data-sal-duration="700">
          <div className="modern-course-features-box h-100">
              <div className="inner">
                <div className="thumbnail">
                  <Image src={image_url("/app_images/services/service_images/smarttech_mobile_app_development.png", true)} width={604} height={408} alt="Image" />
                </div>

                <div className="content">
                  <h2 className="title mt--10">{"Mobile Application Development Services"}</h2>
                  <p>{"We specialize in crafting custom mobile applications that prioritize user experience, drive engagement, and align perfectly with your business objectives. With our "
                  +"wealth of experienced and skilled engineers, we are able to work with the most reliable technology to deliver an enterprise class solution, ensuring your vision comes to"
                  +" life with seamless functionality and unparalleled quality."}</p>

                  <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.mobile_dev_service}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Learn More</span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
      </div>
















      <div className="col-lg-6" data-sal="slide-up" data-sal-delay="200" data-sal-duration="700">
        {courseData.map((data, index) => (
          <div className="modern-course-features-box one-colume-grid h-100" key={`blockchain-service-${index}`}>
            {data.certificateTwo.map((innerData, innerIndex) => (
              <div className="inner" key={`blockchain-service-inner-${innerIndex}`}>
                <div className="thumbnail">
                  <Image src={image_url("/app_images/services/service_images/smarttech_blockchain_development.webp", true)} width={558} height={397} alt="Glowing blockchain network visualization" />
                </div>
                <div className="content">
                  <h2 className="title">{"Blockchain Development Services"}</h2>
                  <p>{"Our expertise in blockchain development empowers businesses to harness the transformative potential of decentralized technology, whether you want to build your own blockchain, cryptocurrency, token, NFT, crypto wallet, exchange, NFT marketplace, or tokenize real-world and digital assets with a dedicated marketplace for trading and sales, we deliver secure, transparent, and scalable solutions that foster trust, streamline operations, and drive innovation across your industry."}</p>

                  <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.blockchain_dev_service}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Learn More</span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>



      <div className="col-lg-6" data-sal="slide-up" data-sal-delay="0" data-sal-duration="700">
        <div className="modern-course-features-box grid-content-reverse h-100">
          <div className="inner">

            {/* <CourseSlider /> */}
            <div className="thumbnail">
              <Image src={image_url("/app_images/services/service_images/smarttech_game_development.png", true)} width={558} height={397} alt="Image" />
            </div>

            <div className="content">
              <h2 className="title">{"Game Development Services"}</h2>
              <p>{"From concept to launch, our award-winning team harnesses Unity and Unreal Engine to craft immersive 2D, 3D, and NFT games. We seamlessly blend stunning visuals, intricate "+
              "storytelling, dynamic gameplay, and innovative play-to-own mechanics to deliver rich interactive experiences that captivate players on mobile, VR, PC, and console platforms."}</p>
              <ul className="rbt-list-style-2 flex-wrap">
                <li key="1"> <i className="feather-check"></i> High quality Visuals </li>
                <li key="2"> <i className="feather-check"></i> Secure and Optimized application </li>
                <li key="3"> <i className="feather-check"></i> Experienced engineers </li>
                <li key="5"> <i className="feather-check"></i> Responsive support </li>
              </ul>

              <Link className="rbt-btn hover-icon-reverse btn-border color-white-off mb--30" href={ROUTE.game_dev_service}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Learn More</span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="50" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
          <div className="inner">
            <div className="thumbnail">
              <Image src={image_url("/app_images/services/service_images/smarttech_cybersecurity.webp", true)} width={604} height={408} alt="Cybersecurity Services" />
            </div>

            <div className="content">
              <h2 className="title mt--10">{"Cybersecurity Services"}</h2>
              <p>{"From identity and access management to 24/7 managed detection and incident response, we design and run the security layer serious software deserves. Spanning DLP, "
              +"SIEM/SOAR, vulnerability management, threat intelligence, and DFIR, so a breach never becomes the story of your business."}</p>

              <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.cybersecurity_service}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Learn More</span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </Link>
              
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="100" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
          <div className="inner">
            <div className="thumbnail">
              <Image src={image_url("/app_images/services/service_images/smarttech_uiux.png", true)} width={604} height={408} alt="Image" />
            </div>

            <div className="content">
              <h2 className="title mt--10">{"Product Design Services"}</h2>
              <p>{"Transforming ideas into visually stunning and user-centric solutions, our product design expertise ensures that every detail is meticulously crafted to enhance "
              +"functionality and elevate the user experience, setting your product apart in a competitive market."}</p>

              <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.product_design_service}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Learn More</span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="200" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
          <div className="inner">
            <div className="thumbnail">
              <Image src={image_url("/app_images/services/service_images/smarttech_mvp_development.png", true)} width={604} height={408} alt="Image" />
            </div>

            <div className="content">
              <h2 className="title mt--10">{"Professional MVP Development Services"}</h2>
              <p>{"At SmartTech, we transform your innovative ideas into market-ready realities through our proven MVP development services. By leveraging agile methodologies and deep "+
              "industry expertise, we build lean, high-impact prototypes that validate your concept quickly and pave the way for scalable growth. Our reliable approach minimizes risk while "+
              "accelerating your time-to-market, ensuring your vision is realized with precision and creative flair."}</p>

              <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.mvp_development_service}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Learn More</span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="0" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
            <div className="inner">
              <div className="thumbnail">
                <Image src={image_url("/app_images/services/service_images/smarttech_3d_modeling.png", true)} width={604} height={408} alt="Image" />
              </div>

              <div className="content">
                <h2 className="title mt--10">{"3D Modeling Services"}</h2>
                <p>{"Unleash your brand's potential with our expert 3D modeling services. Whether you need low-poly models for agile, real-time applications or high-poly designs that capture "+
                "every intricate detail for immersive product showcases, we create digital assets tailored to any business purpose. Our state-of-the-art techniques combine precision and "+
                "creativity to bring your vision to life, ensuring every model not only looks spectacular but also performs flawlessly across all platforms."}</p>

                <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.three_D_modeling_service}>
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Learn More</span>
                    <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  </span>
                </Link>
              </div>
            </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="100" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
            <div className="inner">
              <div className="thumbnail">
                <Image src={image_url("/app_images/services/service_images/smarttech_3d_animation.png", true)} width={604} height={408} alt="Image" />
              </div>

              <div className="content">
                <h2 className="title mt--10">{"3D Animation Services"}</h2>
                <p>{"At SmartTech, our expert animators blend creativity, precision, and breathtaking VFX to transform your ideas into dynamic 3D animations, whether cinematic "+
                "game trailers, engaging product showcases, immersive environments, or realistic medical videos, we deliver an unforgettable visual experience that elevates your brand "+
                "and captivates your audience."}</p>

                <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.three_dimension_animation_service}>
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Learn More</span>
                    <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  </span>
                </Link>
              </div>
            </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="200" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
          <div className="inner">
            <div className="thumbnail">
              <Image src={image_url("/app_images/services/service_images/smarttech_2d_arts.png", true)} width={604} height={408} alt="Image" />
            </div>

            <div className="content">
              <h2 className="title mt--10">{"2D Art Services"}</h2>
              <p>{"From sleek corporate visuals to whimsical illustrations, we craft captivating 2D art tailored to every industry, from tech and healthcare to entertainment and beyond. Our "+
              "creative expertise transforms your ideas into vibrant visuals that elevate your brand and engage your audience."}</p>

              <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.two_D_art_service}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Learn More</span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="0" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
            <div className="inner">
              <div className="thumbnail">
                <Image src={image_url("/app_images/services/service_images/smarttech_2d_animations.png", true)} width={604} height={408} alt="Image" />
              </div>

              <div className="content">
                <h2 className="title mt--10">{"2D Animation Services"}</h2>
                <p>{"At SmartTech, we transform your ideas into captivating 2D animations, enhanced with breathtaking visual effects, ensuring your brand leaves an unforgettable impression. "+
                "Whether you're a startup or an established organization, our dedicated team meticulously crafts animations tailored to your unique style and objectives, bringing your vision "+
                "to life with precision and creativity."}</p>

                <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.two_dimension_animation_service}>
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Learn More</span>
                    <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  </span>
                </Link>
              </div>
            </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="100" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
          <div className="inner">
            <div className="thumbnail">
              <Image src={image_url("/app_images/services/service_images/smarttech_ai_development.png", true)} width={604} height={408} alt="Image" />
            </div>

            <div className="content">
              <h2 className="title mt--10">{"Artificial Intelligence Development Services"}</h2>
              <p>{"We empower your business with groundbreaking AI solutions that drive growth and boost efficiency. Our expert team seamlessly integrates cutting-edge technology into your "+
              "operations, transforming workflows and providing a competitive edge in today's dynamic market. Let us help you unlock AI's full potential to streamline processes, enhance "+
              "decision-making, and propel your business forward."}</p>

              <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.ai_development_service}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Learn More</span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="200" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
            <div className="inner">
              <div className="thumbnail">
                <Image src={image_url("/app_images/services/service_images/smarttech_nft_marketplace.png", true)} width={604} height={408} alt="Image" />
              </div>

              <div className="content">
                <h2 className="title mt--10">{"NFT Market Place"}</h2>
                <p>{"We make ideas into valuable digital assets with custom-built NFT marketplaces, immersive gaming platforms, and dynamic ecosystems that drive engagement and growth."}</p>

                <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.nft_marketplace_service}>
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Learn More</span>
                    <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  </span>
                </Link>
              </div>
            </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="0" data-sal-duration="700">
        <div className="modern-course-features-box h-100">
          <div className="inner">
            <div className="thumbnail">
              <Image src={image_url("/app_images/services/service_images/smarttech_audit.jpg", true)} width={604} height={408} alt="Image" />
            </div>

            <div className="content">
              <h2 className="title mt--10">{"Audit & Consultancy"}</h2>
              <p>{"Navigating the complexities of technology and compliance with confidence, our audit and consultancy services provide tailored insights and strategic guidance that empower "
              +"your business to achieve operational excellence, mitigate risks, and drive sustainable growth."}</p>

              {/* <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.service}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Learn More</span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </Link> */}
              <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Hire Us</span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </Link>
              
            </div>
          </div>
        </div>
      </div>


      <div className="col-lg-12" data-sal="slide-up" data-sal-delay="100" data-sal-duration="700">
          <div className="modern-course-features-box h-100">
              <div className="inner">
                <div className="thumbnail">
                  <Image src={image_url("/app_images/services/service_images/smarttech_support.png", true)} width={604} height={408} alt="Image" />
                </div>

                <div className="content">
                  <h2 className="title mt--10">{"Support & Maintenance"}</h2>
                  <p>{"Our support and maintenance services ensure that your systems run smoothly and efficiently, providing proactive monitoring and timely solutions that keep your "
                  +"operations uninterrupted, allowing you to focus on what you do best while we handle the rest."}</p>

                  {/* <Link className="rbt-btn hover-icon-reverse btn-border color-white-off" href={ROUTE.service}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Learn More</span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    </span>
                  </Link> */}
                  <Link className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.appointment}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Hire Us</span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                      <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                    </span>
                  </Link>
                </div>
              </div>
          </div>
      </div>

    </>

  );


}
