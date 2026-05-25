import Link from "next/link";

import CourseWidgets from "./widgets/CourseWidget";
import StudentDashboardHeader from "./sections/StudentDashboardHeader";
import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";
import Pagination from "@/my_components/Common/Pagination";

import Courses from "@/my_data/dashboard/instructor.json";

import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";




const StudentEnrolledCourses = () => {
  

  return (


        <div className="container mt--90 mb--150">
          <div className="row">
            <div className="col-lg-12">

              <div className="row g-5">

                <div className="col-lg-3">
                  <StudentDashboardSidebar />
                </div>

                <div className="col-lg-9">
                  
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">My Courses</h4>
                      </div>

                      <div className="advance-tab-button mb--30">
                        <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="myTab-4" role="tablist">
                          <li role="presentation">
                            <Link href="#" className="tab-button active" id="enrolled-courses-tab" data-bs-toggle="tab" data-bs-target="#enrolled-courses" role="tab" aria-controls="enrolled-courses" aria-selected="true">
                              <span className="title">Enrolled Courses</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link href="#" className="tab-button" id="active-courses-tab" data-bs-toggle="tab" data-bs-target="#active-courses" role="tab" aria-controls="active-courses" aria-selected="false">
                              <span className="title">Active Courses</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link href="#" className="tab-button" id="completed-courses-tab" data-bs-toggle="tab" data-bs-target="#completed-courses" role="tab" aria-controls="completed-courses" aria-selected="false">
                              <span className="title">Completed Courses</span>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="enrolled-courses" role="tabpanel" aria-labelledby="enrolled-courses-tab">
                          <div className="row g-5">
                            {Courses.slice(0, 3)?.map((slide, index) => (
                              <div className="col-lg-4 col-md-6 col-12" key={`course-enrolled-${index}`}>
                                <CourseWidgets data={slide} courseStyle="two" isProgress={false} isCompleted={false} isEdit={false} showDescription={false} showAuthor={false} 
                                  buttom_name={"Start"} button_link={ROUTE.dashboardClassRoom} />
                              </div>
                            ))}

                            {4 > CONFIG.DASHBOARD_CONTENT_LENGHT ? (
                                <div className="row"> <div className="col-lg-12 mt--60"> <Pagination totalPages={5} pageNumber={1} handleClick={""} /> </div> </div>
                            ) : ( "" )}
                          </div>
                        </div>

                        <div className="tab-pane fade" id="active-courses" role="tabpanel" aria-labelledby="active-courses-tab">
                          <div className="row g-5">
                            {Courses.slice(3, 6)?.map((slide, index) => (
                              <div className="col-lg-4 col-md-6 col-12" key={`course-active-${index}`}>
                                <CourseWidgets data={slide} courseStyle="two" isCompleted={false} isProgress={true} isEdit={false} showDescription={false} showAuthor={false} 
                                  buttom_name={"Continue"} button_link={ROUTE.dashboardClassRoom} />
                              </div>
                            ))}

                            {4 > CONFIG.DASHBOARD_CONTENT_LENGHT ? (
                                <div className="row"> <div className="col-lg-12 mt--60"> <Pagination totalPages={2} pageNumber={1} handleClick={""} /> </div> </div>
                            ) : ( "" )}
                          </div>
                        </div>

                        <div className="tab-pane fade" id="completed-courses" role="tabpanel" aria-labelledby="completed-courses-tab">
                          <div className="row g-5">
                            {Courses.slice(1, 4)?.map((slide, index) => (
                              <div className="col-lg-4 col-md-6 col-12" key={`course-completed-${index}`}>
                                <CourseWidgets data={slide} courseStyle="two" isCompleted={true} isProgress={true} showDescription={false} isEdit={false} showAuthor={false} 
                                  buttom_name={"Download Certificate"} button_link={"/Certificate-Link"} />
                              </div>
                            ))}

                            {4 > CONFIG.DASHBOARD_CONTENT_LENGHT ? (
                                <div className="row"> <div className="col-lg-12 mt--60"> <Pagination totalPages={3} pageNumber={1} handleClick={""} /> </div> </div>
                            ) : ( "" )}
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>


  );

};

export default StudentEnrolledCourses;
