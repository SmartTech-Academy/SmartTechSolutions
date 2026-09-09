import Image from "next/image";

import TestimonialData from "../../data/elements/testimonial.json";
import { isBrandLogoColorLocked } from "@/helper/Utilities";

const Testimonial_1 = () => {
  return (
    <>
      {TestimonialData &&
        TestimonialData.testimonialSeven.map((data, index) => (
          <div
            className="scroll-animation-wrapper no-overlay mt--50"
            key={index}
          >
            <div className="scroll-animation scroll-right-left">
              {data.left.map((item, innerIndex) => (
                <div
                  className="single-column-20 bg-theme-gradient-odd"
                  key={innerIndex}
                >
                  <div className="rbt-testimonial-box style-2">
                    <div className="inner">
                      <div className={`icons brand-logo${isBrandLogoColorLocked(item.img) ? " brand-logo--keep-color" : ""}`}>
                        <Image
                          src={item.img}
                          width={130}
                          height={46}
                          style={{ width: "auto", height: "auto", maxWidth: "130px", maxHeight: "46px", objectFit: "contain" }}
                          alt={`${item.position} company logo`}
                        />
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.desc}</p>
                        <div className="clint-info-wrapper">
                          <div className="thumb">
                            <Image
                              src={item.client}
                              width={160}
                              height={160}
                              alt={`Photo of ${item.title}`}
                            />
                          </div>
                          <div className="client-info">
                            <h5 className="title">
                              {item.title} <i>{item.position}</i>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      {TestimonialData &&
        TestimonialData.testimonialSeven.map((data, index) => (
          <div
            className="scroll-animation-wrapper no-overlay mt--30"
            key={index}
          >
            <div className="scroll-animation scroll-left-right">
              {data.right.map((item, innerIndex) => (
                <div
                  className="single-column-20 bg-theme-gradient-even"
                  key={innerIndex}
                >
                  <div className="rbt-testimonial-box style-2">
                    <div className="inner">
                      <div className={`icons brand-logo${isBrandLogoColorLocked(item.img) ? " brand-logo--keep-color" : ""}`}>
                        <Image
                          src={item.img}
                          width={130}
                          height={46}
                          style={{ width: "auto", height: "auto", maxWidth: "130px", maxHeight: "46px", objectFit: "contain" }}
                          alt={`${item.position} company logo`}
                        />
                      </div>
                      <div className="description">
                        <p className="subtitle-3">{item.desc}</p>
                        <div className="clint-info-wrapper">
                          <div className="thumb">
                            <Image
                              src={item.client}
                              width={160}
                              height={160}
                              alt={`Photo of ${item.title}`}
                            />
                          </div>
                          <div className="client-info">
                            <h5 className="title">
                              {item.title} <i>{item.position}</i>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default Testimonial_1;
