import Image from "next/image";
import Link from "next/link";

import AboutData from "../../data/elements/about.json";

import { useParallax } from "react-scroll-parallax";


import { image_url } from "@/helper/Utilities";


import aboutImg1 from "@/public/app_images/about/about1.webp";
import aboutImg2 from "@/public/app_images/about/about2.webp";
import aboutImg3 from "@/public/app_images/about/about3.webp";




const AboutTwo = () => {


  const { ref: ref1, style: style1 } = useParallax({
    translateY: [0, -20],
  });

  const { ref: ref2, style: style2 } = useParallax({
    translateY: [0, 20],
  });

  const { ref: ref3, style: style3 } = useParallax({
    translateY: [0, 20],
  });



  return (
    <>

          <div className="row g-5 align-items-center" key="1">
            <div className="col-lg-6">
              <div className="thumbnail-wrapper">

                <div className="thumbnail-wrapper">
                  <div className={`thumbnail image-1`} ref={ref1} style={style1}>
                    <Image src={aboutImg1} width={366} height={490} alt="Senior team member pointing out priorities on a whiteboard during a strategy planning session" />
                  </div>
                  <div className={`thumbnail image-2`} ref={ref2} style={style2}>
                    <Image src={aboutImg2} width={308} height={250} alt="Team member mapping out a marketing plan with sticky notes during a product design session" />
                  </div>
                  <div className={`thumbnail image-3`} ref={ref3} style={style3}>
                    <Image src={aboutImg3} width={405} height={490} alt="Team members reviewing project notes on a laptop during a confident office discussion" />
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6">
              <div className="inner pl--50 pl_sm--0 pl_md--0">
                <div className="section-title text-start">
                  {/* <span className="subtitle bg-coral-opacity">{data.tag}</span> */}
                  <h2 className="title">
                    Our Objectives remains <br /> as simple as ABC..
                  </h2>
                </div>

                <p className="description mt--30">
                  To be your reliable development partner with just one goal in focus, to create products that deliver enduring value and drive profitability.
                </p>

                <div className="rbt-feature-wrapper mt--20 ml_dec_20">

                  <div className="rbt-feature feature-style-2 rbt-radius" key="1">
                    <div className={`icon ${"bg-primary-opacity"}`}>
                      <i className="feather-briefcase"></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">MISSION</h6>
                      <p className="feature-description">
                        Transforming Industries with Robust, Creative Digital Solutions & Training Future Experts.
                      </p>
                    </div>
                  </div>

                  <div className="rbt-feature feature-style-2 rbt-radius" key="2">
                    <div className={`icon ${"bg-pink-opacity"}`}>
                      <i className="feather-eye"></i>
                    </div>
                    <div className="feature-content">
                      <h6 className="feature-title">VISION</h6>
                      <p className="feature-description">
                        Bridging the gap between industry needs and technological prowess, driving progress and fostering future leaders in technology.
                      </p>
                    </div>
                  </div>

                </div>

                <p className="description mt--30">
                  Together, we bridge the gap between industry needs and technological prowess, driving progress and fostering the next generation of technological solutions.
                </p>

              </div>
            </div>
          </div>

    </>
  );
};

export default AboutTwo;
