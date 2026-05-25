import { useRouter } from "next/router";
import Link from "next/link";
// import { useState } from "react";

import { ROUTE } from "@/route/app_routes.js";





const Nav = () => {

  // create router monitor, to be used to control "isActive" states of the nav links
  const router = useRouter();
  const isActive = (href) => router.pathname.startsWith(href);


  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">

        {/* <li className="with-megamenu has-menu-child-item position-static">
          <Link className={`${activeMenuItem === "home" ? "open" : ""} ${activeMenuItem === "home" ? "active d-block" : ""}`} 
            onClick={() => toggleMenuItem("home")} href={ROUTE.home}>Home</Link>
        </li> */}

        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={`${isActive(ROUTE.about) ? "active d-block" : ""}`} href={ROUTE.about}>About</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={`${isActive(ROUTE.course) ? "active d-block" : ""}`} href={ROUTE.course}>Courses</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={`${isActive(ROUTE.service) ? "active d-block" : ""}`} href={ROUTE.service}>Services</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={`${isActive(ROUTE.project) ? "active d-block" : ""}`} href={ROUTE.project}>Projects</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={`${isActive(ROUTE.events) ? "active d-block" : ""}`} href={ROUTE.events}>Events</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={`${isActive(ROUTE.blog) ? "active d-block" : ""}`} href={ROUTE.blog}>Blog</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link className={`${isActive(ROUTE.enquiry) ? "active d-block" : ""}`} href={ROUTE.contact}>Contact</Link>
        </li>

      </ul>
    </nav>
  );
};


export default Nav;
