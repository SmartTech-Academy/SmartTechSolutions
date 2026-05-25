import React from "react";

import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";
import EventTicketPurchase from "./widgets/EventTicketPurchase";

import { ROUTE } from "@/route/app_routes.js";




const StudentPurchaseEventTicket = () => {




  return (


        <div className="container mt--90 mb--150">
          <div className="row">

            <div className="col-lg-12">

              <div className="row g-5">

                <div className="col-lg-3">
                  <StudentDashboardSidebar />
                </div>

                <div className="col-lg-9 multi-step-form" style={{ padding: "30px 20px 30px 20px" }}>

                  <EventTicketPurchase coming_from_route={ROUTE.dashboardEvents} />

                </div>


              </div>
            </div>
          </div>
        </div>


  );

};

export default StudentPurchaseEventTicket;
