import React, { useState } from "react";
import Link from "next/link";

// import CourseWidgets from "./widgets/CourseWidget";
// import StudentDashboardHeader from "./sections/StudentDashboardHeader";
import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";
import EventList from "@/my_components/_Events/sections/Events";
// import Pagination from "@/my_components/Common/Pagination";

// import Courses from "@/my_data/dashboard/instructor.json";
import EventData from "@/my_data/events.json";

import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";





const StudentEvents = () => {

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
                        <h4 className="rbt-title-style-3">Events</h4>
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
                            <div className="col-lg-4">
                              <div className="call-to-btn text-start text-lg-end position-relative">
                                <Link className="rbt-btn btn-sm rbt-switch-btn rbt-switch-y" href={ROUTE.dashboardEventsCreate}>
                                  <span data-text="Create Event"> Create Event </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>





                      <div className="advance-tab-button mb--15">
                        <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="myTab-4" role="tablist">
                          <li role="presentation">
                            <Link href="#" className="tab-button active" id="site-events-tab" data-bs-toggle="tab" data-bs-target="#site-events" role="tab" aria-controls="site-events" aria-selected="true">
                              <span className="title">Events</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link href="#" className="tab-button" id="user-events-tab" data-bs-toggle="tab" data-bs-target="#user-events" role="tab" aria-controls="user-events" aria-selected="false">
                              <span className="title">My Events</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link href="#" className="tab-button" id="user-events-history-tab" data-bs-toggle="tab" data-bs-target="#user-events-history" role="tab" aria-controls="user-events-history" aria-selected="false">
                              <span className="title">History</span>
                            </Link>
                          </li>
                        </ul>
                      </div>







                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="site-events" role="tabpanel" aria-labelledby="site-events-tab">
                          <div className="rbt-dashboard-filter-wrapper">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="filter-select rbt-modern-select">
                                  <div className="rbt-short-item">
                                    <input id="search_nigeria_events" type="text" placeholder="Find Events in Nigeria..." onFocus={() => setFocusedInput("search_nigeria_events")} onBlur={() => setFocusedInput(null)} />
                                    <span className="focus-border"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="mt--30" />
                          <div className="row">
                            <EventList isPagination={true} parentClass="card-list-2 event-list-card" childClass="col-lg-6 col-md-6 col-12 mb--15" getEvents={EventData} button_type="type_1" 
                              buttom_name="Get Ticket" button_link={ROUTE.dashboardEventTicketPurchasing} caller="private" />
                          </div>
                        </div>



                        <div className="tab-pane fade" id="user-events" role="tabpanel" aria-labelledby="user-events-tab">
                          <div className="rbt-dashboard-filter-wrapper">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="filter-select rbt-modern-select">
                                  <div className="rbt-short-item">
                                    <input id="search_personal_events" type="text" placeholder="Search your active Events..." onFocus={() => setFocusedInput("search_personal_events")} onBlur={() => setFocusedInput(null)} />
                                    <span className="focus-border"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="mt--30" />
                          <div className="row">
                            <EventList isPagination={true} parentClass="card-list-2 event-list-card" childClass="col-lg-6 col-md-6 col-12 mb--15" getEvents={EventData} start={0} end={3} button_type="type_2" 
                              buttom_name="View Bookings" button_link={ROUTE.eventTicketBookings} caller="private" hide_bookings_no={true} hide_edit_icon={false} edit_link={ROUTE.dashboardEventsEdit} />
                          </div>
                        </div>



                        <div className="tab-pane fade" id="user-events-history" role="tabpanel" aria-labelledby="user-events-history-tab">
                          <div className="rbt-dashboard-filter-wrapper">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="filter-select rbt-modern-select">
                                  <div className="rbt-short-item">
                                    <input id="search_event_history" type="text" placeholder="Explore your expired Events..." onFocus={() => setFocusedInput("search_event_history")} onBlur={() => setFocusedInput(null)} />
                                    <span className="focus-border"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr className="mt--30" />
                          <div className="row">
                            <EventList isPagination={true} parentClass="card-list-2 event-list-card" childClass="col-lg-6 col-md-6 col-12 mb--15" getEvents={EventData} start={0} end={5} button_type="type_2" 
                              buttom_name="Repurpose Event" button_link={ROUTE.dashboardEventsRePurposing} caller="private" hide_bookings_no={true} />
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

export default StudentEvents;
