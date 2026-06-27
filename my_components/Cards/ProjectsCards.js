import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import CourseCard from "../../data/course-details/courseData.json";

import { image_url } from "@/helper/Utilities";
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";



const ProjectsCards = ({invoked="homepage"}) => {

  return (

    <>


      <div className="course-card mt--50" key="1">
        <div className={"rbt-card variation-01 rbt-hover elegant-course card-list-2"+( invoked === "projects page" ? "" : " p-4" )}>
          <div className="rbt-card-img">
            <Link href="#">
              <Image src={image_url("/app_images/projects/project_1.webp", true)} width={597} height={454} alt="SmarttTech Project Cover image" />
            </Link>
          </div>

          <div className="rbt-card-body">
            <h4 className="rbt-card-title"> <Link href={ROUTE.digistate_project}>Digistate </Link> </h4>

            <ul className="rbt-meta mb--10">
              <li> <i className="feather-users"></i> Team of 10 Developers </li>
              <li> <i className="feather-users"></i> 8 Software Testers </li>
            </ul>

            <p className="rbt-card-text">
              Digistate is a Realestates assets tokenization and trading app. It is an elegant template, feel the difference as we launch this perfect 
              application in to the wide internet space and as we try to capture.
            </p>

            <ul className="rbt-meta rbt-meta-badge mb--20">
              <li><Link href={ROUTE.TAILWINDCSS}><span className="rbt-badge">NestJS</span></Link></li>
              <li><Link href={ROUTE.NEXT}><span className="rbt-badge">NextJS</span></Link></li>
              <li><Link href={ROUTE.VITE}><span className="rbt-badge">Vite</span></Link></li>
              <li><Link href={ROUTE.LARAVEL}><span className="rbt-badge">Solidity</span></Link></li>
              <li><Link href={ROUTE.LARAVEL}><span className="rbt-badge">Java</span></Link></li>
              <li><Link href={ROUTE.LARAVEL}><span className="rbt-badge">MySQL</span></Link></li>
              <li><Link href={ROUTE.LARAVEL}><span className="rbt-badge">Redis</span></Link></li>
              <li><Link href={ROUTE.LARAVEL}><span className="rbt-badge">ReactNative</span></Link></li>
            </ul>

            {invoked === "projects page" ? (
              <div className="rbt-card-bottom">
                <div className="rbt-price"></div>
                <Link className="rbt-btn-link left-icon" href={ROUTE.digistate_project}> <i className="feather-arrow-right"></i> View Details </Link>
              </div>
            ) : (
              <div className="read-more-btn">
                <a className="rbt-btn btn-gradient hover-icon-reverse" href={ROUTE.digistate_project}>
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View Details</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </span>
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
















      <div className="course-card mt--50" key="1">
        <div className={"rbt-card variation-01 rbt-hover elegant-course card-list-2"+( invoked === "projects page" ? "" : " p-4" )}>
          <div className="rbt-card-img">
            <Link href="#">
              <Image src={image_url("/app_images/projects/project_2.webp", true)} width={597} height={454} alt="SmarttTech Project Cover image" />
            </Link>
          </div>

          <div className="rbt-card-body">
            <h4 className="rbt-card-title"> <Link href="#"> Ribiax Real Estate App </Link> </h4>

            <ul className="rbt-meta mb--10">
              <li> <i className="feather-users"></i> Team of 7 Developers </li>
              <li> <i className="feather-book"></i> 14 Software Testers </li>
            </ul>

            <p className="rbt-card-text">
              Histudy is elegant template, feel the difference as we launch this perfect application in to the wide internet space and as we try to capture 
              the market of digistal marketing.
            </p>

            <ul className="rbt-meta rbt-meta-badge mb--20">
              <li><Link href={ROUTE.TAILWINDCSS}><span className="rbt-badge">Tailwind CSS</span></Link></li>
              <li><Link href={ROUTE.NEXT}><span className="rbt-badge">NextJS</span></Link></li>
              <li><Link href={ROUTE.VITE}><span className="rbt-badge">Vite</span></Link></li>
              <li><Link href={ROUTE.LARAVEL}><span className="rbt-badge">Laravel</span></Link></li>
            </ul>

            {invoked === "projects page" ? (
              <div className="rbt-card-bottom">
                <div className="rbt-price"></div>
                <Link className="rbt-btn-link left-icon" href="#"> <i className="feather-arrow-right"></i> View Details </Link>
              </div>
            ) : (
              <div className="read-more-btn">
                <a className="rbt-btn btn-gradient hover-icon-reverse" href="/event-details/4">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View Details</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </span>
                </a>
              </div>
            )}


          </div>
        </div>
      </div>

















      <div className="course-card mt--50" key="1">
        <div className={"rbt-card variation-01 rbt-hover elegant-course card-list-2"+( invoked === "projects page" ? "" : " p-4" )}>
          <div className="rbt-card-img">
            <Link href="#">
              <Image src={image_url("/app_images/projects/project_3.webp", true)} width={597} height={454} alt="SmarttTech Project Cover image" />
            </Link>
          </div>

          <div className="rbt-card-body">
            <h4 className="rbt-card-title"> <Link href="#"> Flatshare Web Application </Link> </h4>

            <ul className="rbt-meta mb--10">
              <li> <i className="feather-users"></i> Team of 8 Developers </li>
              <li> <i className="feather-book"></i> 5 Software Testers </li>
            </ul>

            <p className="rbt-card-text">
              Histudy is elegant template, feel the difference as we launch this perfect application in to the wide internet space and as we try to capture 
              the market of digistal marketing.
            </p>

            <ul className="rbt-meta rbt-meta-badge mb--20">
              <li><Link href={ROUTE.BOOTSTRAP}><span className="rbt-badge">Bootstrap</span></Link></li>
              <li><Link href={ROUTE.NEXT}><span className="rbt-badge">NextJS</span></Link></li>
              <li><Link href={ROUTE.VITE}><span className="rbt-badge">Vite</span></Link></li>
              <li><Link href={ROUTE.LARAVEL}><span className="rbt-badge">Laravel</span></Link></li>
            </ul>

            {invoked === "projects page" ? (
              <div className="rbt-card-bottom">
                <div className="rbt-price"></div>
                <Link className="rbt-btn-link left-icon" href="#"> <i className="feather-arrow-right"></i> View Details </Link>
              </div>
            ) : (
              <div className="read-more-btn">
                <a className="rbt-btn btn-gradient hover-icon-reverse" href="/event-details/4">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View Details</span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                  </span>
                </a>
              </div>
            )}

          </div>
        </div>
      </div>

    </>

  );

};




export default ProjectsCards;
