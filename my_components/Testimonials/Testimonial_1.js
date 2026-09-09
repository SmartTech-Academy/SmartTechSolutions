import Image from "next/image";

import TestimonialData from "../../data/elements/testimonial.json";
import { getBrandLogoByIndex } from "@/helper/brandLogos";

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
              {data.left.map((item, innerIndex) => {
                const logo = getBrandLogoByIndex(innerIndex);
                return (
                  <div
                    className="single-column-20 bg-theme-gradient-odd"
                    key={innerIndex}
                  >
                    <div className="rbt-testimonial-box style-2">
                      <div className="inner">
                        <div className={`icons brand-logo${logo.keepColor ? " brand-logo--keep-color" : ""}`}>
                          <Image
                            src={logo.src}
                            width={130}
                            height={46}
                            style={{ objectFit: "contain" }}
                            alt={`${logo.name} logo`}
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
                                {item.title} <i>{item.position}, {logo.name}</i>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              {data.right.map((item, innerIndex) => {
                const logo = getBrandLogoByIndex(innerIndex + 4);
                return (
                  <div
                    className="single-column-20 bg-theme-gradient-even"
                    key={innerIndex}
                  >
                    <div className="rbt-testimonial-box style-2">
                      <div className="inner">
                        <div className={`icons brand-logo${logo.keepColor ? " brand-logo--keep-color" : ""}`}>
                          <Image
                            src={logo.src}
                            width={130}
                            height={46}
                            style={{ objectFit: "contain" }}
                            alt={`${logo.name} logo`}
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
                                {item.title} <i>{item.position}, {logo.name}</i>
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
    </>
  );
};

export default Testimonial_1;
