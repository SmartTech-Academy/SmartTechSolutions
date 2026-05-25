import React, { useState } from "react";
import Link from "next/link";

import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";
import EventForms from "./widgets/EventForms";

import { ROUTE } from "@/route/app_routes.js";
// import { CONFIG } from "@/app_config.js";





const StudentEvent = ({ usage_type }) => {
  

  return (


        <div className="container mt--90 mb--150">
          <div className="row">
            <div className="col-lg-12">
              <div className="row g-5">

                <div className="col-lg-3">
                  <StudentDashboardSidebar />
                </div>

                <div className="col-lg-9">

                  <div className="call-to-btn text-start text-lg-start position-relative mb--10">
                    <Link className="rbt-btn btn-sm rbt-switch-btn hover-icon-reverse btn-border radius-round-6" href={ROUTE.dashboardEvents}>
                      <div className="icon-reverse-wrapper">
                        <span class="btn-icon"><i class="feather-arrow-left"></i></span>
                        <span class="btn-icon"><i class="feather-arrow-left"></i></span>
                      </div>
                    </Link>
                  </div>

                  <EventForms usage_type={usage_type} />

                </div>
              </div>
            </div>
          </div>
        </div>


  );

};

export default StudentEvent;
