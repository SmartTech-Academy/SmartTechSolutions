import Image from "next/image";

import { image_url } from "@/helper/Utilities";

// Industries served — mirrors my_data/services/industries.json (industries_served)
const industries = [
  { title: "Real Estate", image: "industry_real_estate.webp", desc: "Smart platforms for listings, tours, and property management" },
  { title: "Healthcare", image: "industry_healthcare.webp", desc: "Secure, compliant systems that streamline patient care" },
  { title: "Finance", image: "industry_finance.webp", desc: "Secure fintech tools built for trust and scale" },
  { title: "Automotive", image: "industry_automotive.webp", desc: "Connected apps for dealerships, fleets, and drivers" },
  { title: "Education", image: "industry_education.webp", desc: "Engaging ed-tech that makes learning stick" },
  { title: "Hospitality", image: "industry_hospitality.webp", desc: "Seamless booking and guest experiences, digitally reimagined" },
];

const Instagram = () => {

  return (

    <div className="container-fluid">
      <div className="row g-3">

        {industries.map((industry, index) => (
          <div
            className="col-lg-2 col-md-4 col-sm-6 col-6 sal-animate"
            data-sal="zoom-in"
            data-sal-delay={index * 100}
            data-sal-duration="700"
            key={industry.title}
          >
            <div className="industry-tile">
              <Image
                className="industry-tile__img"
                src={image_url(`/app_images/contact_and_office_img/${industry.image}`, true)}
                width={900}
                height={900}
                alt={`${industry.title} industry solutions by SmartTech Solutions`}
              />
              <span className="industry-tile__overlay" aria-hidden="true"></span>
              <span className="industry-tile__content">
                <span className="industry-tile__label">{industry.title}</span>
                <span className="industry-tile__desc">{industry.desc}</span>
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>

  );

};

export default Instagram;
