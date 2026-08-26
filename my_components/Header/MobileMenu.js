import Image from "next/image";
import Link from "next/link";

import logo from "@/public/app_images/logo/logo-blue.png";
import logoLight from "@/public/app_images/logo/logo-white.png";

import Nav from "./Nav";
import { useAppContext } from "@/context/Context";
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";

const MobileMenu = () => {
  const { mobile, setMobile, isLightTheme } = useAppContext();

  return (
    <>
      <div className={`popup-mobile-menu ${mobile ? "" : "active"}`}>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link prefetch={false} href="/">
                  {isLightTheme ? (
                    <Image
                      src={logo}
                      width={152}
                      height={50}
                      priority={true}
                      alt="SmartTech Official Logo"
                    />
                  ) : (
                    <Image
                      src={logoLight}
                      width={152}
                      height={50}
                      priority={true}
                      alt="SmartTech Official Logo"
                    />
                  )}
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            <p className="description">
              SmartTech Solutions is a full-cycle software, AI, and blockchain product studio.
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <Link href={`mailto:${CONFIG.EMAIL_1}`}>
                  <i className="feather-mail"></i>{CONFIG.EMAIL_1}
                </Link>
              </li>
              <li>
                <Link href={`tel:${CONFIG.PHONE_1}`}>
                  <i className="feather-phone"></i>{CONFIG.PHONE_1}
                </Link>
              </li>
            </ul>
          </div>

          <Nav />

          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <Link
                prefetch={false}
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href={ROUTE.appointment}
              >
                <span>Book Appointment</span>
              </Link>
            </div>

            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link href={ROUTE.FACEBOOK} target="_blank" rel="noopener noreferrer">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href={ROUTE.TWITTER} target="_blank" rel="noopener noreferrer">
                    <i className="feather-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href={ROUTE.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href={ROUTE.LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
