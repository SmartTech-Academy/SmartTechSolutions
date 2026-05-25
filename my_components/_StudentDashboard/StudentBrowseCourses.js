import React, { useState } from "react";
import Link from "next/link";

import CourseWidgets from "./widgets/CourseWidget";
import StudentDashboardHeader from "./sections/StudentDashboardHeader";
import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";
import Pagination from "@/my_components/Common/Pagination";

import Courses from "@/my_data/dashboard/instructor.json";

import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";





const StudentBrowseCourses = () => {

  const [focusedInput, setFocusedInput] = useState(null);
  

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
                        <h4 className="rbt-title-style-3">Search Course</h4>
                      </div>



                      <div className="rbt-dashboard-filter-wrapper">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="filter-select rbt-modern-select">
                              <div className="rbt-short-item">
                                <input id="search_course" type="text" placeholder="Find your next course.." onFocus={() => setFocusedInput("search_course")} onBlur={() => setFocusedInput(null)} />
                                <span className="focus-border"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className="mt--30" />



                      <div className="tab-content">
                        <div className="tab-pane active">
                          <div className="row g-5">
                            {Courses.slice(0, 3)?.map((slide, index) => (
                              <div className="col-lg-4 col-md-6 col-12" key={`course-enrolled-${index}`}>
                                <CourseWidgets data={slide} courseStyle="two" isProgress={false} isCompleted={false} isEdit={false} showDescription={false} showAuthor={false} 
                                  buttom_name={"Learn More"} button_link={ROUTE.course_details+1} />
                              </div>
                            ))}

                            {4 > CONFIG.DASHBOARD_CONTENT_LENGHT ? (
                                <div className="row"> <div className="col-lg-12 mt--60"> <Pagination totalPages={4} pageNumber={1} handleClick={""} /> </div> </div>
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

export default StudentBrowseCourses;
