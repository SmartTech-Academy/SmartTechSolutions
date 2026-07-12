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









const HeaderNavigations = ({ headerType, gapSpaceBetween, sticky, headerSticky, navigationEnd, container, blendWithHero = false }) => {


  // The header is always pinned to the top (see .rbt-header-wrapper.rbt-sticky
  // being applied unconditionally below). This scroll listener drives two
  // things: (1) a lightweight "scrolled" polish class for extra shadow once
  // the page has moved, and (2) on pages with `blendWithHero`, whether the
  // header should still be blended (transparent, light text/logo) into the
  // hero behind it or has flipped to its normal solid white state.
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLightTheme } = useAppContext();

  const isBlended = blendWithHero && !isScrolled;
  const useLightLogo = !isLightTheme || isBlended;


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);






  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky} ${!headerType ? `${headerSticky}` : ""} ${isScrolled ? "rbt-header-wrapper--scrolled" : ""} ${blendWithHero ? "rbt-header-blend" : ""} ${isBlended ? "rbt-header-blend--active" : ""}`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>


            <div className="header-left rbt-header-content">
              <div className="header-info">
                <div className="logo">
                  <Link href={ROUTE.home}>
                    {useLightLogo ? (
                      <Image
                        src={logoLight}
                        width={152}
                        height={50}
                        priority={true}
                        alt="SmartTech Official Logo"
                      />
                    ) : (
                      <Image
                        src={logo}
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
