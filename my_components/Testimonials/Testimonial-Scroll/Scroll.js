import Image from "next/image";

import { getBrandLogoByIndex } from "@/helper/brandLogos";

const TestimonialCard = ({ item, logo }) => (
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
          </div>
        </div>
        <div className="description">
          <p className="subtitle-3">{item.desc}</p>
        </div>
        <div className={`rbt-testimonial-box__logo-footer brand-logo${logo.keepColor ? " brand-logo--keep-color" : ""}`}>
          <span className="rbt-testimonial-box__logo-label">Trusted at</span>
          <Image
            src={logo.src}
            width={90}
            height={22}
            style={{ objectFit: "contain" }}
            alt={`${logo.name} logo`}
          />
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
                <TestimonialCard item={item} logo={getBrandLogoByIndex(innerIndex)} key={innerIndex} />
              ))}
            </div>
          </div>
        ))}
      {testimonialData &&
        testimonialData.map((data, index) => (
          <div className="scroll-animation-wrapper mt--30" key={index}>
            <div className="scroll-animation scroll-left-right">
              {data.right.map((item, innerIndex) => (
                <TestimonialCard item={item} logo={getBrandLogoByIndex(innerIndex + 4)} key={innerIndex} />
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default Scroll;
