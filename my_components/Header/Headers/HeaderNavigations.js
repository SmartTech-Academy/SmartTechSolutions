import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import HeaderRight from "../Header-Right/HeaderRight";
import Search from "../Offcanvas/Search";
import Category from "../Category/Category";
import Nav from "../Nav";

import logo from "@/public/app_images/logo/logo-blue.png";
import logoLight from "@/public/app_images/logo/logo-white.png";
import { useAppContext } from "@/context/Context";

import { ROUTE } from "@/route/app_routes.js";









const HeaderNavigations = ({ headerType, gapSpaceBetween, sticky, headerSticky, navigationEnd, container }) => {


  const [isSticky, setIsSticky] = useState(false);
  const { isLightTheme } = useAppContext();


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);






  return (
    <>
      <div className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky}  ${!headerType && isSticky ? `${headerSticky}` : ""}`}>
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>


            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href={ROUTE.home}>
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
              </div>

              <div className="header-info d-none d-lg-block">
                {/* <Category /> */}
              </div>
            </div>



            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>

            <HeaderRight btnClass="rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none" />
            
          </div>
        </div>
        {/* <Search /> */}
      </div>
    </>
  );
};

export default HeaderNavigations;
