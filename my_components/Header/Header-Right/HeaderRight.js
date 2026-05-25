import Link from "next/link";
// import { useSelector } from "react-redux";
import User from "../Offcanvas/User";
import { useAppContext } from "@/context/Context";

import { ROUTE } from "@/route/app_routes.js";









const HeaderRight = ({ btnClass, userType }) => {

  const { mobile, setMobile, search, setSearch, cartToggle, setCart } = useAppContext();

  return (
    <div className="header-right">


      <ul className="quick-access">
        <li className="access-icon rbt-mini-cart">
          <Link className={`search-trigger-active rbt-round-btn ${ search ? "" : "open" }`} href="#" onClick={() => setSearch(!search)}>
            <i className="feather-search"></i>
          </Link>
        </li>

        <li className="access-icon rbt-mini-cart">
          <Link className="rbt-cart-sidenav-activation rbt-round-btn" href="#" onClick={() => setCart(!cartToggle)} >
            <i className="feather feather-bell"></i>
            <span className="rbt-cart-count">88</span>
          </Link>
        </li>

        <li className="account-access rbt-user-wrapper d-none d-xl-block">
          <Link href="#">
            <i className="feather-user"></i>
            {/* {userType} */}
          </Link>
          <User />
        </li>

        <li className="access-icon rbt-user-wrapper d-block d-xl-none">
          <Link className="rbt-round-btn" href="#"><i className="feather-user"></i></Link>
          <User />
        </li>
      </ul>




      

      {/* <div className="rbt-btn-wrapper d-none d-xl-block">
        <Link className={`rbt-btn ${btnClass}`} href={ROUTE.register}>
          <span data-text={`Get Started`}>Get Started</span>
        </Link>
      </div> */}
      <div className="rbt-btn-wrapper d-none d-xl-block">
        <Link className="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none" href={ROUTE.register}>
          <span data-text="Join for Free">Join for Free</span>
        </Link>
      </div>

      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button
            className="hamberger-button rbt-round-btn"
            onClick={() => setMobile(!mobile)}
          >
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>


    </div>
  );
};

export default HeaderRight;
