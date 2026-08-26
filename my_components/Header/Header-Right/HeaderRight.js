import Link from "next/link";
// import { useSelector } from "react-redux";
import User from "../Offcanvas/User";
import { useAppContext } from "@/context/Context";

import { ROUTE } from "@/route/app_routes.js";









const HeaderRight = () => {

  const { mobile, setMobile } = useAppContext();

  return (
    <div className="header-right">
      

      <div className="rbt-btn-wrapper d-none d-xl-block">
        <Link prefetch={false} className="rbt-btn rbt-switch-btn btn-gradient btn-sm hover-transform-none" href={ROUTE.appointment}>
          <span data-text="Book Appointment">Book Appointment</span>
        </Link>
      </div>

      <div className="mobile-menu-bar d-block d-xl-none">
        <div className="hamberger">
          <button className="hamberger-button rbt-round-btn" onClick={() => setMobile(!mobile)}>
            <i className="feather-menu"></i>
          </button>
        </div>
      </div>


    </div>
  );
};

export default HeaderRight;
