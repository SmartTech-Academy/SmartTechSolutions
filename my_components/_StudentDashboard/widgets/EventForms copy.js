import React, { useState } from "react";
import Link from "next/link";


import { ROUTE } from "@/route/app_routes.js";
// import { CONFIG } from "@/app_config.js";





const EventForms = ({ usage_type }) => {

    const [focusedInput, setFocusedInput] = useState(null);


    const [eventTitle, setEventTitle] = useState(usage_type !== "create" ? "Africa Technology Expo 2025" : "Global Technology Expo 2025");
    const [eventType, setEventType] = useState();
    const [eventStartDate, setEventStartDate] = useState();
    const [eventStartTime, setEventStartTime] = useState();
    const [eventHall, setEventHall] = useState(usage_type !== "create" ? "Eko Hotel and Suites" : "Radison Blue International Hotels & Suits");
    const [eventLocation, setEventLocation] = useState(usage_type !== "create" ? "Gbagada Phase 11, Shomolu, Lagos, Nigeria" : "24, alen avenue, ikeja lagos, Nigeria");
    const [eventAttendanceType, setEventAttendanceType] = useState();
    const [eventTicketNumber, setEventTicketNumber] = useState(usage_type !== "create" ? "50" : "80");
    const [eventMeetingLink, setEventMeetingLink] = useState(usage_type !== "create" ? "https://www.google.meet.com/conference?page=jsdhjgfhjsdgs876e5r3tuyghvbjudi76tyre" : "https://zoom.com/index?page=ljhjdgfvghjuief987657e8f7eyutgh");
    const [eventPaymentStatus, seteventPaymentStatus] = useState();
    const [eventPaymentLink, setEventPaymentLink] = useState(usage_type !== "create" ? "https://www.smarttechacademy.net/pay" : "https://www.eventio.com/payment");
    const [eventPreviewVideoLink, seteventPreviewVideoLink] = useState(usage_type !== "create" ? "https://www.vimeo.com/content?video=9876fghjgf" : "https://www.youtube.com/video?url=dghfvjdgf");

    const [eventDescription, setEventDescription] = useState(usage_type !== "create" ? 
        "The Global Technology Expo (ATE) is where tech and business leaders gather with one clear goal: to make deals happen. It's a space where enterprises, operators, and industry giants "
        +"converge to showcase innovations, build partnerships, and deliver results. For 2025, ATE takes a bold step forward, spotlighting the future of the world's tech with a sharp focus on "
        +"hardware, telecoms, software, and more—exploring the ideas shaping tomorrow." : ""
    );

    const formTitle = usage_type === "create" ? "Create Event" : ((usage_type === "edit") ? "Edit Event" : "Re-Purpose Event");

    const formSubmitButtonName = usage_type === "create" ? "Create Event" : ((usage_type === "edit") ? "Update Event" : "Re-Purpose Event");

    const formImageLabelName = usage_type === "create" ? "Upload Event Image" : "Update Event Image";


    return (

                  
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
            <div className="content">
                <div className="section-title">
                <h4 className="rbt-title-style-3"> { formTitle } </h4>  
                </div>




                <div className="rbt-callto-action rbt-cta-default style-2 mb--20">
                <div className="content-wrapper overflow-hidden pt--30 pb--30 bg-color-primary-opacity">
                    <div className="row gy-5 align-items-end">
                    <div className="call-to-btn text-start text-lg-center position-relative">
                        <Link className="rbt-btn btn-lg rbt-switch-btn rbt-switch-y btn-border-gradient radius-round hover-icon-reverse" href={ROUTE.dashboardEventsCreate}>
                            <span data-text="Upload Event Image"> {formImageLabelName} </span>
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
                                <input id="Event_Title" type="text" placeholder={eventTitle} defaultValue={usage_type !== "create" ? eventTitle : ""}
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
                        
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                            <div className="rbt-form-group">
                                <label htmlFor="Venue_Name">Venue Name / Hall</label>
                                <input id="Venue_Name" type="text" placeholder={eventHall} defaultValue={usage_type !== "create" ? eventHall : ""} 
                                style={focusedInput === "Venue_Name" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("Venue_Name")} onBlur={() => setFocusedInput(null)} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                            <div className="rbt-form-group">
                                <label htmlFor="event_location">Location</label>
                                <input id="event_location" type="text" placeholder={eventLocation} defaultValue={usage_type !== "create" ? eventLocation : ""} 
                                style={focusedInput === "event_location" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("event_location")} onBlur={() => setFocusedInput(null)} />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--15">
                            <div className="rbt-form-group">
                                <label htmlFor="Venue_Name">Conference / Event Link</label>
                                <input id="Venue_Name" type="text" placeholder={eventMeetingLink} defaultValue={usage_type !== "create" ? eventMeetingLink : ""} 
                                style={focusedInput === "Venue_Name" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("Venue_Name")} onBlur={() => setFocusedInput(null)} />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7 col-12 mt--15 mb--30">
                            <div className="rbt-form-group">
                                <label htmlFor="Preview_Video_Link">Preview Video Link</label>
                                <input id="Preview_Video_Link" type="link" placeholder={eventPreviewVideoLink} defaultValue={usage_type !== "create" ? eventPreviewVideoLink : ""}
                                style={focusedInput === "Preview_Video_Link" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("Preview_Video_Link")} onBlur={() => setFocusedInput(null)} />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt--15">
                            <div className="rbt-form-group">
                                <label htmlFor="event_ticket_amount">Total Ticket Number</label>
                                <input id="event_ticket_amount" type="number" placeholder={eventTicketNumber} defaultValue={usage_type !== "create" ? eventTicketNumber : ""}
                                style={focusedInput === "event_ticket_amount" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("event_ticket_amount")} onBlur={() => setFocusedInput(null)} />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt--15 mb--30">
                            <div className="filter-select rbt-modern-select">
                                <label htmlFor="Payment_Status" className="">Payment Status</label>
                                <select id="Payment_Status" className="w-100" style={focusedInput === "Payment_Status" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                    onFocus={() => setFocusedInput("Payment_Status")} onBlur={() => setFocusedInput(null)}>
                                    <option>Select Payment Status</option>
                                    <option>Free Event</option>
                                    <option>Paid Event</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 col-sm-7 col-12 mt--15">
                            <div className="rbt-form-group">
                                <label htmlFor="Payment_Link">Payment Link</label>
                                <input id="Payment_Link" type="link" placeholder={eventPaymentLink} defaultValue={usage_type !== "create" ? eventPaymentLink : ""}
                                style={focusedInput === "Payment_Link" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onFocus={() => setFocusedInput("Payment_Link")} onBlur={() => setFocusedInput(null)} />
                            </div>
                        </div>

                        <div className="col-12 mt--10">
                            <div className="rbt-form-group">
                                <label htmlFor="About_Event">About Event</label>
                                <textarea id="About_Event" cols="20" rows="5" placeholder={eventDescription} value={usage_type !== "create" ? eventDescription : null} style={focusedInput === "About_Event" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                onChange={(e) => setEventDescription(e.target.value)} onFocus={() => setFocusedInput("About_Event")} onBlur={() => setFocusedInput(null)}></textarea>
                            </div>
                        </div>

                        <div className="col-12 mt--20">
                            <div className="rbt-form-group">
                                <Link className="rbt-btn btn-gradient" href="#"> {formSubmitButtonName} </Link>
                            </div>
                        </div>
                    </form>
                </div>



            </div>
        </div>


    );

};

export default EventForms;
