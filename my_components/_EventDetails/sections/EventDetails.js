import Image from "next/image";

import EventContent from "./EventContent";
import EventDescription from "./EventDescription";
import EventFaq from "./EventFaq";
import EventParticipants from "./EventParticipants";
import SimilarEvent from "./SimilarEvent";
import EventViedo from "./EventViedo";




const EventDetails = ({ getMatchEvent }) => {


  return (

    <>

      <div className="row g-5">
        <div className="col-lg-8">

          <div className="course-details-content">
            <div className="rbt-feature-box rbt-shadow-box thuumbnail">
              <Image className="w-100" src={getMatchEvent.eventImg} width={800} height={550} priority alt="Card image" />
            </div>

            <div className="rbt-feature-box rbt-shadow-box mt--60">
              <EventContent getEventData={getMatchEvent} />
            </div>

            <div className="rbt-feature-box rbt-shadow-box mt--60">
              <EventDescription getEventData={getMatchEvent} />
            </div>

            <EventFaq eventParentClass="rbt-accordion-style rbt-accordion-02 accordion mt--45" getEventData={getMatchEvent} />

            <div className="rbt-participants-area mt--60">
              <EventParticipants getEventData={getMatchEvent} />
            </div>

            <div className="related-course mt--60">
              <SimilarEvent getEventData={getMatchEvent} />
            </div>
          </div>

        </div>

        <div className="col-lg-4 mt_md--60 mt_sm--60">
          <div className="course-sidebar rbt-gradient-border sticky-top rbt-shadow-box course-sidebar-top">
            <EventViedo getEventData={getMatchEvent} />
          </div>
        </div>
      </div>
    </>

  );

};


export default EventDetails;
