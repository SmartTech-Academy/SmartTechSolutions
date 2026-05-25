import Image from "next/image";
import Link from "next/link";

import HeaderTopData from "../../../data/headerTop";
import { useAppContext } from "@/context/Context";
import { useRouter } from "next/router";
import { ROUTE } from "@/route/app_routes.js";



const TopBar = ({ bgColor, gapSpaceBetween, container, flexDirection }) => {

  const router = useRouter();
  // router.pathname === "/10-online-course"

  const { toggle, setToggle } = useAppContext();

  

  return (
    <div className={`rbt-header-top rbt-header-top-1 ${gapSpaceBetween} ${bgColor} top-expended-activation d-none d-xl-block ${!toggle ? "d-none" : "" }`}>

      <div className={`${container}`}>
        <div className="top-expended-wrapper">
          {HeaderTopData &&
            HeaderTopData.headerTopOne.map((item, index) => (
              <div className={`top-expended-inner rbt-header-sec align-items-center ${flexDirection}`} key={index} >
                <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                  <div className="rbt-header-content">
                    <div className="header-info">
                      <ul className="rbt-information-list">
                        {/* <li>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                            {item.insFollowers}k
                            <span className="d-none d-xxl-block">
                              {item.type}
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-square"></i>
                            {item.fbFollowers}k
                            <span className="d-none d-xxl-block">
                              {item.type}
                            </span>
                          </Link>
                        </li> */}

                        {router.pathname === "/10-online-course" ? (
                          ""
                        ) : (
                          <li>
                            <Link href="#">
                              <i className="feather-phone"></i>
                              {item.phone}
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>


                <div className="rbt-header-sec-col rbt-header-center">
                  <div className="rbt-header-content justify-content-start justify-content-xl-center">
                    <div className="header-info">
                      <div className="rbt-header-top-news">
                        <div className="inner">
                          <div className="content">
                            <span className="rbt-badge variation-02 bg-color-primary color-white radius-round">Top Courses</span>
                            <span className="news-text">
                              <Image src={item.img} width={22} height={22} alt="Hand Emojji Images" />
                              {/* Intro price. Get Histudy for Big Sale -95% off. */}
                              Ready to stay ahead? Learn with us.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                  <div className="rbt-header-content justify-content-start justify-content-lg-end">
                    
                    <div className="header-info d-none d-xl-block">
                      <ul className="social-share-transparent">
                        <li>
                          <Link href={ROUTE.FACEBOOK}>
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href={ROUTE.TWITTER}>
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href={ROUTE.LINKEDIN}>
                            <i className="fab fa-linkedin-in"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href={ROUTE.INSTAGRAM}>
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href={ROUTE.SKYPE}>
                            <i className="fab fa-skype"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href={ROUTE.YOUTUBE}>
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="header-info">
                      <ul className="rbt-dropdown-menu switcher-language">
                        {item.language.map((lng, innerIndex) => (
                          <li className="has-child-menu" key={innerIndex}>
                            <Link href={lng.link}>
                              <Image
                                className="left-image"
                                src={lng.img}
                                width={20}
                                height={13}
                                alt={`${lng.name} Images`}
                              />
                              <span className="menu-item">
                                {lng.defaultTitle}
                              </span>
                              <i className="right-icon feather-chevron-down"></i>
                            </Link>

                            <ul className="sub-menu">
                              {lng.subLng.map((sublng, innerIndex) => (
                                <li key={innerIndex}>
                                  <Link href={sublng.link}>
                                    <Image
                                      className="left-image"
                                      src={sublng.img}
                                      width={20}
                                      height={13}
                                      alt={`${sublng.name} Images`}
                                    />
                                    <span className="menu-item">
                                      {sublng.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div> */}

                    {/* <div className="header-info">
                      <ul className="rbt-dropdown-menu currency-menu">
                        {item.currency.map((curnc, innerIndex) => (
                          <li className="has-child-menu" key={innerIndex}>
                            <Link href={curnc.link}>
                              <span className="menu-item">
                                {curnc.defaultCurrency}
                              </span>
                              <i className="right-icon feather-chevron-down"></i>
                            </Link>
                            <ul className="sub-menu hover-reverse">
                              {curnc.subCurr.map((sub, subIndex) => (
                                <li key={subIndex}>
                                  <Link href={sub.link}>
                                    <span className="menu-item">
                                      {sub.currency}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div> */}


                  </div>
                </div>
              </div>
            ))}
          <div className="header-info">
            <div className="top-bar-expended d-block d-lg-none">
              <button
                className="topbar-expend-button rbt-round-btn"
                onClick={() => setToggle(!toggle)}
              >
                <i className="feather-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
