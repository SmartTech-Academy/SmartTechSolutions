import Image from "next/image";
import Link from "next/link";

import logo from "@/public/app_images/logo/logo-blue.png";
import logoLight from "@/public/app_images/logo/logo-white.png";

import FooterData from "@/data/footer.json";
import SingleFooter from "./sections/SingleFooter";
import CopyRight from "./sections/CopyRight";
import { useAppContext } from "@/context/Context";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";



const Footer = ({bg="white"}) => {

  const { isLightTheme } = useAppContext();

  return (
    <>
      <footer className={`rbt-footer rbt-footer-shadow-1 footer-style-1 bg-color-${bg} overflow-hidden`}>
        <div className="gradient-shadow-top"></div>
        <div className="gradient-shadow-bottom"></div>
        <div className="footer-top">
          <div className="container">
            {FooterData &&
              FooterData.footerOne.map((footer, index) => (
                <div className="row row--15 mt_dec--30" key={index}>


                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                    <div className="footer-widget">
                      <div className="logo">
                        <Link href={ ROUTE.home }>
                          {isLightTheme ? (
                            <Image src={logo} width={152} height={50} priority={true} alt="SmartTech Solutions Logo" />
                          ) : (
                            <Image src={logoLight} width={152} height={50} priority={true} alt="SmartTech Solutions Logo" />
                          )}
                        </Link>
                      </div>

                      <p className="description mt--20">{"We are transforming industries with innovative digital solutions. As your reliable development partner, "
                      +"our focus is to build products that delivers enduring value and drive profitability."}</p>

                      <div className="contact-btn mt--30">
                        <Link className="rbt-btn hover-icon-reverse btn-border-gradient radius-round" href={ ROUTE.contact }>
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">Contact With Us</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>



                  <SingleFooter classOne="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30" title="Our Company" data={[ { text: "Home", link: ROUTE.home },
                    { text: "About Us", link: ROUTE.about }, { text: "Our Process", link: ROUTE.our_process }, { text: "Services", link: ROUTE.service }, { text: "Projects", link: ROUTE.project },
                    { text: "Industries", link: ROUTE.industries }, { text: "Blog", link: ROUTE.blog }, { text: "Careers", link: ROUTE.careers }, { text: "Contact Us", link: ROUTE.contact }, { text: "Appointment", link: ROUTE.appointment } ]} />




                  <SingleFooter classOne="col-lg-2 col-md-6 col-sm-6 col-12 mt--30" title="Our Services" data={[ { text: "Web Development", link: ROUTE.web_dev_service },
                    { text: "Mobile App Development", link: ROUTE.mobile_dev_service }, { text: "Blockchain Development", link: ROUTE.blockchain_dev_service },
                    { text: "Cybersecurity Services", link: ROUTE.cybersecurity_service },
                    { text: "Game Development", link: ROUTE.game_dev_service }, { text: "Product design", link: ROUTE.product_design_service },
                    { text: "MVP Development", link: ROUTE.mvp_development_service }, { text: "3D Modeling", link: ROUTE.three_D_modeling_service }, 
                    { text: "3D Animations", link: ROUTE.three_dimension_animation_service }, { text: "2D Art", link: ROUTE.two_D_art_service }, 
                    { text: "2D Animations", link: ROUTE.two_dimension_animation_service }, { text: "AI Development", link: ROUTE.ai_development_service }, 
                    { text: "NFT Marketplace", link: ROUTE.nft_marketplace_service }, { text: "Audit & Consultancy", link: ROUTE.appointment }, 
                    { text: "Support & Maintenance", link: ROUTE.appointment} ]} />




                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                    <div className="footer-widget">
                      <h5 className="ft-title">Get Contact</h5>
                      <ul className="ft-link">
                        <li>
                          <span>Phone:</span>{" "}
                          <Link href={"tel:"+CONFIG.PHONE_1}>{ CONFIG.PHONE_1 }</Link>
                        </li>
                        <li>
                          <span>E-mail:</span>{" "}
                          <Link href={"mailto:"+CONFIG.EMAIL_1}> { CONFIG.EMAIL_1 } </Link>
                        </li>
                        <li> <span>Location:</span> { CONFIG.ADDRESS } </li>
                      </ul>

                      <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                        <li key={"1"}> <Link href={ROUTE.FACEBOOK}> <i className={"feather-facebook"}></i> </Link> </li>
                        <li key={"2"}> <Link href={ROUTE.TWITTER}> <i className={"feather-twitter"}></i> </Link> </li>
                        <li key={"3"}> <Link href={ROUTE.INSTAGRAM}> <i className={"feather-instagram"}></i> </Link> </li>
                        <li key={"4"}> <Link href={ROUTE.LINKEDIN}> <i className={"feather-linkedin"}></i> </Link> </li>
                        <li key={"5"}> <Link href={ROUTE.YOUTUBE}> <i className={"feather-youtube"}></i> </Link> </li>
                      </ul>
                    </div>
                  </div>

                  
                </div>
              ))}
          </div>
        </div>

        <CopyRight />
      </footer>

    </>
  );
};

export default Footer;
