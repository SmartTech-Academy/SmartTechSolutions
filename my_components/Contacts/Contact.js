import Link from "next/link";
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import { XIcon, TikTokIcon } from "@/my_components/_Global/SocialIcons";

const Contact = () => {
  return (
    <>
      <div className="row g-5">

        <div className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate" data-sal="zoom-in" data-sal-delay="150" data-sal-duration="700" key="1">
          <div className="rbt-contact-card rbt-contact-card--phone">
            <span className="rbt-contact-card__glow" aria-hidden="true"></span>
            <div className="rbt-contact-card__icon">
              <i className={"feather-headphones"}></i>
            </div>
            <div className="rbt-contact-card__body">
              <span className="rbt-contact-card__eyebrow">Talk to us</span>
              <h4 className="rbt-contact-card__title">{"Contact Phone Number"}</h4>
              <p className="rbt-contact-card__line"> <Link href={`tel:${CONFIG.PHONE_1}`}>{CONFIG.PHONE_1}</Link> </p>
              <p className="rbt-contact-card__line"> <Link href={`tel:${CONFIG.PHONE_2}`}>{CONFIG.PHONE_2}</Link> </p>
            </div>
          </div>
        </div>


        <div className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate" data-sal="zoom-in" data-sal-delay="300" data-sal-duration="700" key="2">
          <div className="rbt-contact-card rbt-contact-card--email">
            <span className="rbt-contact-card__glow" aria-hidden="true"></span>
            <div className="rbt-contact-card__icon">
              <i className={"feather-mail "}></i>
            </div>
            <div className="rbt-contact-card__body">
              <span className="rbt-contact-card__eyebrow">Email us</span>
              <h4 className="rbt-contact-card__title">{"Our Email Address"}</h4>
              <p className="rbt-contact-card__line"> <Link href={`mailto:${CONFIG.EMAIL_1}`}> {CONFIG.EMAIL_1} </Link> </p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 sal-animate" data-sal="zoom-in" data-sal-delay="450" data-sal-duration="700" key="3">
          <div className="rbt-contact-card rbt-contact-card--social">
            <span className="rbt-contact-card__glow" aria-hidden="true"></span>
            <div className="rbt-contact-card__icon">
              <i className={"feather-share-2"}></i>
            </div>
            <div className="rbt-contact-card__body">
              <span className="rbt-contact-card__eyebrow">Find us</span>
              <h4 className="rbt-contact-card__title">{"Follow SmartTech Solutions"}</h4>
              <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                <li> <Link href={ROUTE.FACEBOOK} target="_blank" rel="noopener noreferrer"> <i className="feather-facebook"></i> </Link> </li>
                <li> <Link href={ROUTE.TWITTER} target="_blank" rel="noopener noreferrer"> <XIcon /> </Link> </li>
                <li> <Link href={ROUTE.INSTAGRAM} target="_blank" rel="noopener noreferrer"> <i className="feather-instagram"></i> </Link> </li>
                <li> <Link href={ROUTE.TIKTOK} target="_blank" rel="noopener noreferrer"> <TikTokIcon /> </Link> </li>
                <li> <Link href={ROUTE.LINKEDIN} target="_blank" rel="noopener noreferrer"> <i className="feather-linkedin"></i> </Link> </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;
