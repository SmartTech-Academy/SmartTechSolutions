import Link from "next/link";

import { ROUTE } from "@/route/app_routes.js";


const NotFound = () => {
  return (
    <div className="rbt-error-area bg-gradient-11 rbt-section-gap">
      <div className="error-area">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-10">
              <h1 className="title">404!</h1>
              <h3 className="sub-title">Page not found</h3>
              <p>The page you were looking for could not be found.</p>
              <Link className="rbt-btn btn-gradient icon-hover" href={ ROUTE.home }>
                <span className="btn-text">Back To Home</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
