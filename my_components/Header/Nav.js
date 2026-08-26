import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ROUTE } from "@/route/app_routes.js";
import { INDUSTRIES } from "@/my_data/industries/industries.js";
import { SOLUTIONS } from "@/my_data/solutions/solutions.js";

// Split into 4 columns of 4 for the desktop mega-menu grid.
const INDUSTRY_COLUMNS = [
  INDUSTRIES.slice(0, 4),
  INDUSTRIES.slice(4, 8),
  INDUSTRIES.slice(8, 12),
  INDUSTRIES.slice(12, 16),
];

const Nav = () => {
  // create router monitor, to be used to control "isActive" states of the nav links
  const router = useRouter();
  const isActive = (href) => router.pathname.startsWith(href);

  // Only the Industries item has a real dropdown right now — everything
  // else is a flat link. Kept as a single toggle (not per-item state) since
  // only one dropdown should ever be open at a time.
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (key) => setOpenMenu((current) => (current === key ? null : key));

  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="with-megamenu has-menu-child-item position-static">
          <Link prefetch={false} className={`${isActive(ROUTE.about) ? "active d-block" : ""}`} href={ROUTE.about}>About</Link>
        </li>

        <li className="with-megamenu has-menu-child-item rbt-has-real-dropdown position-static">
          <Link
            prefetch={false}
            href="#"
            className={`${isActive(ROUTE.industries) ? "active d-block" : ""}${openMenu === "industries" ? " open" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              toggleMenu("industries");
            }}
          >
            Industries
            <i className="feather-chevron-down"></i>
          </Link>
          <div className={`rbt-megamenu grid-item-4 rbt-industries-menu ${openMenu === "industries" ? "active d-block" : ""}`}>
            <div className="wrapper">
              <div className="row row--15">
                {INDUSTRY_COLUMNS.map((column, columnIndex) => (
                  <div className="col-lg-3 single-mega-item" key={columnIndex}>
                    <ul className="mega-menu-item">
                      {column.map((industry) => (
                        <li key={industry.slug}>
                          <Link
                            prefetch={false}
                            href={industry.href}
                            className={isActive(industry.href) ? "active" : ""}
                            onClick={() => setOpenMenu(null)}
                          >
                            <i className={industry.icon}></i> {industry.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="rbt-industries-menu__footer">
                <Link prefetch={false} href={ROUTE.industries} onClick={() => setOpenMenu(null)}>
                  View all industries <i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link prefetch={false} className={`${isActive(ROUTE.our_process) ? "active d-block" : ""}`} href={ROUTE.our_process}>Process</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link prefetch={false} className={`${isActive(ROUTE.service) ? "active d-block" : ""}`} href={ROUTE.service}>Services</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link prefetch={false} className={`${isActive(ROUTE.project) ? "active d-block" : ""}`} href={ROUTE.project}>Projects</Link>
        </li>

        <li className="has-dropdown has-menu-child-item rbt-has-real-dropdown">
          <Link
            prefetch={false}
            href="#"
            className={`${isActive(ROUTE.solutions) ? "active d-block" : ""}${openMenu === "solutions" ? " open" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              toggleMenu("solutions");
            }}
          >
            Solutions
            <i className="feather-chevron-down"></i>
          </Link>
          <ul className={`submenu rbt-solutions-menu ${openMenu === "solutions" ? "active d-block" : ""}`}>
            {SOLUTIONS.map((solution) => (
              <li key={solution.slug}>
                <Link
                  prefetch={false}
                  href={solution.href}
                  className={isActive(solution.href) ? "active" : ""}
                  onClick={() => setOpenMenu(null)}
                >
                  <i className={solution.icon}></i> {solution.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link prefetch={false} className={`${isActive(ROUTE.blog) ? "active d-block" : ""}`} href={ROUTE.blog}>Blog</Link>
        </li>

        <li className="with-megamenu has-menu-child-item position-static">
          <Link prefetch={false} className={`${isActive(ROUTE.enquiry) ? "active d-block" : ""}`} href={ROUTE.contact}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
