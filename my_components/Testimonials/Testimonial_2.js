import TestimonialData from "../../data/elements/testimonial.json";
import Scroll from "./Testimonial-Scroll/Scroll";

const Testimonial_2 = () => {
  return (
    <>
      <Scroll
        testimonial={TestimonialData}
        testimonialData={TestimonialData.testimonialTwo}
      />
    </>
  );
};

export default Testimonial_2;
