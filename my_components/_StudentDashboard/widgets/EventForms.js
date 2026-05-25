import React, { useState, useMemo } from "react";
import Link from "next/link";


import { ROUTE } from "@/route/app_routes.js";



const requiredAsterisk = <span style={{ color: "#d32f2f", marginLeft: 6 }}>*</span>;




function isValidURL(value) {
try {
    // allow http/https
    const u = new URL(value);
    return ["http:", "https:"].includes(u.protocol);
} catch {
    return false;
}
}








// validation function - validates visible/required fields
function validate() {
    const e = {};

    if (!eventTitle || eventTitle.trim() === "") e.eventTitle = "Event Title is required.";
    if (!eventType || eventType.trim() === "") e.eventType = "Event Type is required.";
    if (!eventStartDate) e.eventStartDate = "Start Date is required.";
    if (!eventStartTime) e.eventStartTime = "Start Time is required.";
    if (!eventAttendanceType) e.eventAttendanceType = "Attendance Type is required.";

    if (showVenueFields) {
    if (!eventHall || eventHall.trim() === "") e.eventHall = "Venue Name / Hall is required for physical events.";
    if (!eventLocation || eventLocation.trim() === "") e.eventLocation = "Location is required for physical events.";
    }

    if (showConferenceField) {
    if (!eventMeetingLink || eventMeetingLink.trim() === "") e.eventMeetingLink = "Conference / Event Link is required for online events.";
    else if (!isValidURL(eventMeetingLink)) e.eventMeetingLink = "Conference link must be a valid URL (http/https).";
    }

    if (!eventTicketNumber || isNaN(Number(eventTicketNumber)) || Number(eventTicketNumber) <= 0)
    e.eventTicketNumber = "Total Ticket Number must be a positive number.";

    if (!eventPaymentStatus) e.eventPaymentStatus = "Payment Status is required.";

    if (showPaymentLinkField) {
    if (!eventPaymentLink || eventPaymentLink.trim() === "") e.eventPaymentLink = "Payment Link is required for paid events.";
    else if (!isValidURL(eventPaymentLink)) e.eventPaymentLink = "Payment link must be a valid URL (http/https).";
    }

    // if (!eventPreviewVideoLink || eventPreviewVideoLink.trim() === "") e.eventPreviewVideoLink = "Preview Video Link is required.";
    else if (!isValidURL(eventPreviewVideoLink)) e.eventPreviewVideoLink = "Preview video link must be a valid URL (http/https).";

    if (!eventDescription || eventDescription.trim() === "") e.eventDescription = "About Event is required.";

    return e;
}















const EventForms = ({ usage_type }) => {

    const [focusedInput, setFocusedInput] = useState(null);

    // controlled state for all fields
    const [eventTitle, setEventTitle] = useState( usage_type !== "create" ? "Africa Technology Expo 2025" : "Global Technology Expo 2025" );
    const [eventType, setEventType] = useState(""); // '' = default
    const [eventStartDate, setEventStartDate] = useState("");
    const [eventStartTime, setEventStartTime] = useState("");
    const [eventHall, setEventHall] = useState( usage_type !== "create" ? "Eko Hotel and Suites" : "Radison Blue International Hotels & Suits" );
    const [eventLocation, setEventLocation] = useState( usage_type !== "create" ? "Gbagada Phase 11, Shomolu, Lagos, Nigeria" : "24, alen avenue, ikeja lagos, Nigeria" );
    const [eventAttendanceType, setEventAttendanceType] = useState(""); // '', 'Physical Venue (In Person)', 'Online (Virtual)'
    const [eventTicketNumber, setEventTicketNumber] = useState(usage_type !== "create" ? "50" : "80");
    const [eventMeetingLink, setEventMeetingLink] = useState(
        usage_type !== "create"
        ? "https://www.google.meet.com/conference?page=jsdhjgfhjsdgs876e5r3tuyghvbjudi76tyre"
        : "https://zoom.com/index?page=ljhjdgfvghjuief987657e8f7eyutgh"
    );
    const [eventPaymentStatus, setEventPaymentStatus] = useState(""); // '', 'Free Event', 'Paid Event'
    const [eventPaymentLink, setEventPaymentLink] = useState( usage_type !== "create" ? "https://www.smarttechacademy.net/pay" : "https://www.eventio.com/payment" );
    const [eventPreviewVideoLink, setEventPreviewVideoLink] = useState( usage_type !== "create" ? "https://www.vimeo.com/content?video=9876fghjgf" : "https://www.youtube.com/video?url=dghfvjdgf" );
    const [eventDescription, setEventDescription] = useState(
        usage_type !== "create"
        ? "The Global Technology Expo (ATE) is where tech and business leaders gather with one clear goal: to make deals happen. It's a space where enterprises, operators, and industry giants converge to showcase innovations, build partnerships, and deliver results. For 2025, ATE takes a bold step forward, spotlighting the future of the world's tech with a sharp focus on hardware, telecoms, software, and more—exploring the ideas shaping tomorrow."
        : ""
    );


    // controlled namings for some fields as this component will be used accrose three pages
    const formTitle = usage_type === "create" ? "Create Event" : usage_type === "edit" ? "Edit Event" : "Re-Purpose Event";
    const formSubmitButtonName = usage_type === "create" ? "Create Event" : usage_type === "edit" ? "Update Event" : "Re-Purpose Event";
    const formImageLabelName = usage_type === "create" ? "Upload Event Image" : "Update Event Image";


    // derived booleans for visibility
    const showVenueConferenceAndVirtualLinksFields = useMemo(() => eventAttendanceType === "Both (In Persond & Virtual)", [eventAttendanceType]);
    const showVenueFields = useMemo(() => eventAttendanceType === "Physical Venue (In Person)", [eventAttendanceType]);
    const showConferenceField = useMemo(() => eventAttendanceType === "Online (Virtual)", [eventAttendanceType]);
    const showPaymentLinkField = useMemo(() => eventPaymentStatus === "Paid Event", [eventPaymentStatus]);

    // error controllers
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);



    const handleSubmit = (evt) => {
        evt.preventDefault();
        const e = validate();
        setErrors(e);
        setSubmitted(true);

        if (Object.keys(e).length === 0) {
        // form valid - prepare payload and send to API or do what you need
        const payload = {
            eventTitle,
            eventType,
            eventStartDate,
            eventStartTime,
            eventAttendanceType,
            eventHall: ((showVenueFields) || (showVenueConferenceAndVirtualLinksFields)) ? eventHall : null,
            eventLocation: ((showVenueFields) || (showVenueConferenceAndVirtualLinksFields)) ? eventLocation : null,
            eventMeetingLink: ((showConferenceField) || (showVenueConferenceAndVirtualLinksFields)) ? eventMeetingLink : null,
            eventTicketNumber: Number(eventTicketNumber),
            eventPaymentStatus,
            eventPaymentLink: showPaymentLinkField ? eventPaymentLink : null,
            eventPreviewVideoLink,
            eventDescription,
        };

        // TODO: call your backend API here
        console.log("Submitting payload:", payload);
        alert("Form is valid — payload logged to console. Replace this with API call.");
        // reset submitted flag or redirect as needed
        } else {
        // focus first invalid field (optional)
        const firstKey = Object.keys(e)[0];
        const elm = document.getElementById(
            {
            eventTitle: "Event_Title",
            eventType: "Event_Type",
            eventStartDate: "event_date",
            eventStartTime: "event_start_time",
            eventAttendanceType: "Attendance_Type",
            eventHall: "Venue_Name",
            eventLocation: "event_location",
            eventMeetingLink: "conference_link",
            eventTicketNumber: "event_ticket_amount",
            eventPaymentStatus: "Payment_Status",
            eventPaymentLink: "Payment_Link",
            eventPreviewVideoLink: "Preview_Video_Link",
            eventDescription: "About_Event",
            }[firstKey]
        );
        if (elm && typeof elm.focus === "function") elm.focus();
        }
    };










    return (
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
            <div className="content">
                <div className="section-title">
                    <h4 className="rbt-title-style-3"> {formTitle} </h4>
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
                    <form onSubmit={handleSubmit} className="rbt-profile-row rbt-default-form row row--15" noValidate>
                        {/* Event Title */}
                        <div className="col-lg-7 col-md-7 col-sm-7 col-12 mt--15">
                            <div className="rbt-form-group">
                                <label htmlFor="Event_Title"> Event Title {requiredAsterisk} </label>
                                <input
                                id="Event_Title"
                                type="text"
                                value={usage_type !== "create" ? eventTitle : ""}
                                onChange={(e) => setEventTitle(e.target.value)}
                                placeholder="Enter event title"
                                style={focusedInput === "Event_Title" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                onFocus={() => setFocusedInput("Event_Title")}
                                onBlur={() => setFocusedInput(null)}
                                />
                                {submitted && errors.eventTitle && <small style={{ color: "#d32f2f" }}>{errors.eventTitle}</small>}
                            </div>
                        </div>

                        {/* Event Type */}
                        <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt--10">
                            <div className="filter-select rbt-modern-select">
                                <label htmlFor="Event_Type"> Event Type {requiredAsterisk} </label>
                                <select id="Event_Type" value={eventType} onChange={(e) => setEventType(e.target.value)} className="w-100" 
                                    style={focusedInput === "Event_Type" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                    onFocus={() => setFocusedInput("Event_Type")} onBlur={() => setFocusedInput(null)}>
                                        <option value="">Select Event Type</option>
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
                                        <option>Conference</option>
                                        <option>Education</option>
                                        <option>Tech Event</option>
                                        <option>Event Company, Agency, Promoter</option>
                                        <option>Other</option>
                                </select>
                                {submitted && errors.eventType && <small style={{ color: "#d32f2f" }}>{errors.eventType}</small>}
                            </div>
                        </div>

                        {(usage_type !== "edit") ? (
                            <>
                                {/* Date */}
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                                    <div className="rbt-form-group">
                                        <label htmlFor="event_date"> Start Date {requiredAsterisk} </label>
                                        <input id="event_date" type="date" value={eventStartDate} onChange={(e) => setEventStartDate(e.target.value)}
                                            style={focusedInput === "event_date" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                            onFocus={() => setFocusedInput("event_date")} onBlur={() => setFocusedInput(null)} />
                                        {submitted && errors.eventStartDate && <small style={{ color: "#d32f2f" }}>{errors.eventStartDate}</small>}
                                    </div>
                                </div>

                                {/* Time */}
                                <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                                    <div className="rbt-form-group">
                                        <label htmlFor="event_start_time"> Start Time {requiredAsterisk} </label>
                                        <input id="event_start_time" type="time" value={eventStartTime} onChange={(e) => setEventStartTime(e.target.value)}
                                            style={focusedInput === "event_start_time" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                            onFocus={() => setFocusedInput("event_start_time")} onBlur={() => setFocusedInput(null)} />
                                        {submitted && errors.eventStartTime && <small style={{ color: "#d32f2f" }}>{errors.eventStartTime}</small>}
                                    </div>
                                </div>
                            </>
                        ) : null}

                        {/* Attendance Type */}
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                            <div className="filter-select rbt-modern-select">
                                <label htmlFor="Attendance_Type"> Attendance Type {requiredAsterisk} </label>
                                <select id="Attendance_Type" className="w-100" value={eventAttendanceType} onChange={(e) => setEventAttendanceType(e.target.value)}
                                    style={focusedInput === "Attendance_Type" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                    onFocus={() => setFocusedInput("Attendance_Type")} onBlur={() => setFocusedInput(null)} >
                                        <option value="">Select Attendance Type</option>
                                        <option>Physical Venue (In Person)</option>
                                        <option>Online (Virtual)</option>
                                        <option>Both (In Persond & Virtual)</option>
                                </select>
                                {submitted && errors.eventAttendanceType && <small style={{ color: "#d32f2f" }}>{errors.eventAttendanceType}</small>}
                            </div>
                        </div>

                        {/* Venue Name - visible only for Physical */}
                        {((showVenueFields) || (showVenueConferenceAndVirtualLinksFields)) && (
                        <>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                                <div className="rbt-form-group">
                                    <label htmlFor="Venue_Name"> Venue Name / Hall {requiredAsterisk} </label>
                                    <input id="Venue_Name" type="text" value={usage_type !== "create" ? eventHall : ""} onChange={(e) => setEventHall(e.target.value)}
                                        placeholder="Enter venue name / hall" style={focusedInput === "Venue_Name" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                        onFocus={() => setFocusedInput("Venue_Name")} onBlur={() => setFocusedInput(null)} />
                                    {submitted && errors.eventHall && <small style={{ color: "#d32f2f" }}>{errors.eventHall}</small>}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                                <div className="rbt-form-group">
                                    <label htmlFor="event_location"> Location {requiredAsterisk} </label>
                                    <input id="event_location" type="text" value={usage_type !== "create" ? eventLocation : ""} onChange={(e) => setEventLocation(e.target.value)}
                                        placeholder="Enter venue address / location" style={focusedInput === "event_location" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                        onFocus={() => setFocusedInput("event_location")} onBlur={() => setFocusedInput(null)} />
                                    {submitted && errors.eventLocation && <small style={{ color: "#d32f2f" }}>{errors.eventLocation}</small>}
                                </div>
                            </div>
                        </>
                        )}

                        {/* Conference / Event Link - visible only for Online */}
                        {((showConferenceField) || (showVenueConferenceAndVirtualLinksFields)) && (
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt--15">
                            <div className="rbt-form-group">
                            <label htmlFor="conference_link"> Conference / Event Link {requiredAsterisk} </label>
                            <input id="conference_link" type="text" value={usage_type !== "create" ? eventMeetingLink : ""} onChange={(e) => setEventMeetingLink(e.target.value)}
                                placeholder="https://zoom.us/..." style={focusedInput === "conference_link" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                onFocus={() => setFocusedInput("conference_link")} onBlur={() => setFocusedInput(null)} />
                            {submitted && errors.eventMeetingLink && <small style={{ color: "#d32f2f" }}>{errors.eventMeetingLink}</small>}
                            </div>
                        </div>
                        )}

                        {/* Preview Video Link */}
                        <div className="col-lg-7 col-md-7 col-sm-7 col-12 mt--15 mb--30">
                            <div className="rbt-form-group">
                                <label htmlFor="Preview_Video_Link"> Preview Video Link </label>
                                <input id="Preview_Video_Link" type="text" value={usage_type !== "create" ? eventPreviewVideoLink : ""}
                                    onChange={(e) => setEventPreviewVideoLink(e.target.value)} placeholder="https://www.youtube.com/..."
                                    style={focusedInput === "Preview_Video_Link" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                    onFocus={() => setFocusedInput("Preview_Video_Link")} onBlur={() => setFocusedInput(null)} />
                                {submitted && errors.eventPreviewVideoLink && <small style={{ color: "#d32f2f" }}>{errors.eventPreviewVideoLink}</small>}
                            </div>
                        </div>

                        {/* Total Ticket Number */}
                        <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt--15">
                            <div className="rbt-form-group">
                                <label htmlFor="event_ticket_amount"> Total Ticket Number {requiredAsterisk} </label>
                                <input id="event_ticket_amount" type="number" value={usage_type !== "create" ? eventTicketNumber : ""} onChange={(e) => setEventTicketNumber(e.target.value)}
                                    placeholder="Enter total tickets" style={focusedInput === "event_ticket_amount" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                    onFocus={() => setFocusedInput("event_ticket_amount")} onBlur={() => setFocusedInput(null)} min="1" />
                                {submitted && errors.eventTicketNumber && <small style={{ color: "#d32f2f" }}>{errors.eventTicketNumber}</small>}
                            </div>
                        </div>

                        {/* Payment Status */}
                        <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt--15 mb--30">
                            <div className="filter-select rbt-modern-select">
                                <label htmlFor="Payment_Status"> Payment Status {requiredAsterisk} </label>
                                <select id="Payment_Status" className="w-100" value={eventPaymentStatus} onChange={(e) => setEventPaymentStatus(e.target.value)}
                                    style={focusedInput === "Payment_Status" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                    onFocus={() => setFocusedInput("Payment_Status")} onBlur={() => setFocusedInput(null)} >
                                        <option value="">Select Payment Status</option>
                                        <option>Free Event</option>
                                        <option>Paid Event</option>
                                </select>
                                {submitted && errors.eventPaymentStatus && <small style={{ color: "#d32f2f" }}>{errors.eventPaymentStatus}</small>}
                            </div>
                        </div>

                        {/* Payment Link - visible only for Paid Event */}
                        {showPaymentLinkField && (
                        <div className="col-lg-7 col-md-7 col-sm-7 col-12 mt--15">
                            <div className="rbt-form-group">
                            <label htmlFor="Payment_Link"> Payment Link {requiredAsterisk} </label>
                            <input id="Payment_Link"  type="text" value={usage_type !== "create" ? eventPaymentLink : ""} onChange={(e) => setEventPaymentLink(e.target.value)}
                                    placeholder="https://your-payment-gateway/..." style={focusedInput === "Payment_Link" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                    onFocus={() => setFocusedInput("Payment_Link")} onBlur={() => setFocusedInput(null)} />
                            {submitted && errors.eventPaymentLink && <small style={{ color: "#d32f2f" }}>{errors.eventPaymentLink}</small>}
                            </div>
                        </div>
                        )}

                        {/* About Event */}
                        <div className="col-12 mt--10">
                            <div className="rbt-form-group">
                                <label htmlFor="About_Event"> About Event {requiredAsterisk} </label>
                                <textarea id="About_Event" cols="20" rows="5" value={usage_type !== "create" ? eventDescription : ""}
                                onChange={(e) => setEventDescription(e.target.value)} placeholder="Write a short description for the event..."
                                style={focusedInput === "About_Event" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : {}}
                                onFocus={() => setFocusedInput("About_Event")} onBlur={() => setFocusedInput(null)}></textarea>
                                {submitted && errors.eventDescription && <small style={{ color: "#d32f2f" }}>{errors.eventDescription}</small>}
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="col-12 mt--20">
                            <div className="rbt-form-group">
                                <button type="submit" className="rbt-btn btn-gradient"> {formSubmitButtonName} </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventForms;
