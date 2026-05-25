import React, { useState } from "react";
import Link from "next/link";

// import CourseWidgets from "./widgets/CourseWidget";
// import StudentDashboardHeader from "./sections/StudentDashboardHeader";
import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";
import EventForms from "./widgets/EventForms";
// import Pagination from "@/my_components/Common/Pagination";

// import Courses from "@/my_data/dashboard/instructor.json";

import { ROUTE } from "@/route/app_routes.js";
// import { CONFIG } from "@/app_config.js";





const StudentEditEvent = () => {

  // const [focusedInput, setFocusedInput] = useState(null);

  // const [textareaText, setTextareaText] = useState(
  //   "The Global Technology Expo (ATE) is where tech and business leaders gather with one clear goal: to make deals happen. It's a space where enterprises, operators, and industry giants "
  //   +"converge to showcase innovations, build partnerships, and deliver results. For 2025, ATE takes a bold step forward, spotlighting the future of the world's tech with a sharp focus on "
  //   +"hardware, telecoms, software, and more—exploring the ideas shaping tomorrow."
  // );


  return (


        <div className="container mt--90 mb--150">
          <div className="row">
            <div className="col-lg-12">
              {/* <StudentDashboardHeader /> */}

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

                  <EventForms usage_type="create" />
                  
                  {/* <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Create Event</h4>
                      </div>




                      <div className="rbt-callto-action rbt-cta-default style-2 mb--20">
                        <div className="content-wrapper overflow-hidden pt--30 pb--30 bg-color-primary-opacity">
                          <div className="row gy-5 align-items-end">
                            <div className="col-lg-8">
                              <div className="inner">
                                <div className="content text-left">
                                  <h5 className="mb--5">Spotlight Your Event to the Masses</h5>
                                  <p className="b3">Create events now, its 100% free!</p>
                                </div>
                              </div>
                            </div>
                            <div className="call-to-btn text-start text-lg-center position-relative">
                              <Link className="rbt-btn btn-lg rbt-switch-btn rbt-switch-y btn-border-gradient radius-round hover-icon-reverse" href={ROUTE.dashboardEventsCreate}>
                                <span data-text="Upload Event Image"> Upload Event Image </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      



                      <div className="tab-pane fade active mt--40 show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                          <div className="col-lg-7 col-md-7 col-sm-7 col-12 mt--15">
                            <div className="rbt-form-group">
                              <label htmlFor="Event_Title">Event Title</label>
                              <input id="Event_Title" type="text" placeholder="Global Technology Expo 2025" 
                                style={focusedInput === "Event_Title" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("Event_Title")} onBlur={() => setFocusedInput(null)}  />
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt--10">
                            <div className="filter-select rbt-modern-select">
                              <label htmlFor="Event_Type" className="">Event Type</label>
                              <select id="Event_Type" className="w-100" style={focusedInput === "Event_Type" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("Event_Type")} onBlur={() => setFocusedInput(null)}>
                                  <option>Select Event Type</option>
                                  <option>Music</option>
                                  <option>Parties</option>
                                  <option>Religion & Spirituality</option>
                                  <option>Performing & Visual Arts</option>
                                  <option>Beauty & Fashion</option>
                                  <option>Comedy</option>
                                  <option>Business & Professional</option>
                                  <option>Community & Culture</option>
                                  <option>Food & Drink</option>
                                  <option>Hobbies & Special Interest</option>
                                  <option>Family & Education</option>
                                  <option>Health & Wellness</option>
                                  <option>Sports & Fitness</option>
                                  <option>Non-Profit</option>
                                  <option>Event Company, Agency, Promoter</option>
                                  <option>Other</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                            <div className="rbt-form-group">
                              <label htmlFor="event_date">Start Date</label>
                              <input id="event_date" type="date" style={focusedInput === "event_date" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("event_date")} onBlur={() => setFocusedInput(null)} />
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                            <div className="rbt-form-group">
                              <label htmlFor="event_start_time">Start Time</label>
                              <input id="event_start_time" type="time" style={focusedInput === "event_start_time" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("event_start_time")} onBlur={() => setFocusedInput(null)} />
                            </div>
                          </div>

                          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                            <div className="rbt-form-group">
                              <label htmlFor="event_end_time">End Time</label>
                              <input id="event_end_time" type="time" style={focusedInput === "event_end_time" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("event_end_time")} onBlur={() => setFocusedInput(null)} />
                            </div>
                          </div>
                          
                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                            <div className="rbt-form-group">
                              <label htmlFor="Venue_Name">Venue Name / Hall</label>
                              <input id="Venue_Name" type="text" placeholder="o2 Arena, vegas" 
                                style={focusedInput === "Venue_Name" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("Venue_Name")} onBlur={() => setFocusedInput(null)} />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                            <div className="rbt-form-group">
                              <label htmlFor="event_location">Location</label>
                              <input id="event_location" type="text" placeholder="234 church street" 
                                style={focusedInput === "event_location" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("event_location")} onBlur={() => setFocusedInput(null)} />
                            </div>
                          </div>

                          <div className="col-lg-7 col-md-7 col-sm-7 col-12 mt--15 mb--30">
                            <div className="filter-select rbt-modern-select">
                              <label htmlFor="Attendance_Type" className="">Attendance Type</label>
                              <select id="Attendance_Type" className="w-100" style={focusedInput === "Attendance_Type" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("Attendance_Type")} onBlur={() => setFocusedInput(null)}>
                                  <option>Select Attendance Type</option>
                                  <option>Physical Venue (In Person)</option>
                                  <option>Online (Virtual)</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt--15">
                            <div className="rbt-form-group">
                              <label htmlFor="event_ticket_amount">Total Ticket Number</label>
                              <input id="event_ticket_amount" type="number" placeholder="50" style={focusedInput === "event_ticket_amount" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("event_ticket_amount")} onBlur={() => setFocusedInput(null)} />
                            </div>
                          </div>

                          <div className="col-12 mt--10">
                            <div className="rbt-form-group">
                              <label htmlFor="About_Event">About Event</label>
                              <textarea id="About_Event" cols="20" rows="5" placeholder={textareaText} style={focusedInput === "About_Event" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onChange={(e) => setTextareaText(e.target.value)} onFocus={() => setFocusedInput("About_Event")} onBlur={() => setFocusedInput(null)}></textarea>
                            </div>
                          </div>

                          <div className="col-12 mt--20">
                            <div className="rbt-form-group">
                              <Link className="rbt-btn btn-gradient" href="#"> Create Event </Link>
                            </div>
                          </div>
                        </form>
                      </div>



                    </div>
                  </div> */}

                </div>


              </div>
            </div>
          </div>
        </div>


  );

};

export default StudentEditEvent;
