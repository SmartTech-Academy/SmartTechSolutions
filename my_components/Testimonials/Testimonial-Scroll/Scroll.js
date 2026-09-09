import Image from "next/image";

import { isBrandLogoColorLocked } from "@/helper/Utilities";

const TestimonialCard = ({ item }) => (
  <div className="single-column-20">
    <div className="rbt-testimonial-box">
      <div className="inner">
        <div className="clint-info-wrapper">
          <div className="thumb">
            <Image
              src={item.img}
              width={494}
              height={494}
              alt={`Photo of ${item.title}`}
            />
          </div>
          <div className="client-info">
            <h5 className="title">{item.title}</h5>
            <span>{item.position}</span>
            {item.companyLogo ? (
              <div className={`client-info__logo brand-logo${isBrandLogoColorLocked(item.companyLogo) ? " brand-logo--keep-color" : ""}`}>
                <Image
                  src={item.companyLogo}
                  width={110}
                  height={38}
                  style={{ width: "auto", height: "auto", maxWidth: "110px", maxHeight: "38px", objectFit: "contain" }}
                  alt={item.company ? item.company.replace(/^@\s*/, "") : "Client company logo"}
                />
              </div>
            ) : (
              <i>{item.company}</i>
            )}
          </div>
        </div>
        <div className="description">
          <p className="subtitle-3">{item.desc}</p>
        </div>
      </div>
    </div>
  </div>
);

const Scroll = ({ testimonial, testimonialData }) => {
  return (
    <>
      {testimonial &&
        testimonialData.map((data, index) => (
          <div className="scroll-animation-wrapper mt--50" key={index}>
            <div className="scroll-animation scroll-right-left">
              {data.left.map((item, innerIndex) => (
                <TestimonialCard item={item} key={innerIndex} />
              ))}
            </div>
          </div>
        ))}
      {testimonialData &&
        testimonialData.map((data, index) => (
          <div className="scroll-animation-wrapper mt--30" key={index}>
            <div className="scroll-animation scroll-left-right">
              {data.right.map((item, innerIndex) => (
                <TestimonialCard item={item} key={innerIndex} />
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default Scroll;
