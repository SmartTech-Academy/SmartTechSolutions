import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Pagination from "@/my_components/Common/Pagination";

import { ROUTE } from "@/route/app_routes.js";



const Events = ({ getEvents, parentClass, childClass, isPagination, start, end, button_type, buttom_name, button_link, caller, edit_link=null, hide_bookings_no=false, hide_edit_icon=true }) => {

  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 6;

  const getSelectedEvent = events.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setEvents(getEvents.events);
    setTotalPages(Math.ceil(getEvents.events.length / 6));
  }, [setTotalPages, setEvents]);


  

  return (
    <>
      <div className={`row ${caller === "public" ? "g-5" : ""}`} style={caller !== "public" ? { padding: 0, margin: 0 } : undefined}>
        {getSelectedEvent.slice(start, end).map((data, index) => (
          <div className={`${childClass}`} key={index}>
            <div className={`rbt-card ${parentClass} variation-01 rbt-hover`}>
              <div className="rbt-card-img">
                <Link href={ROUTE.event_details+data.id}>
                  <Image src={data.img} width={355} height={240} priority alt="Card image" />
                  <div className="rbt-badge-3 bg-white">
                    <span>{data.badgeDate}</span>
                    <span>{data.badgeYear}</span>
                  </div>
                </Link>
              </div>

              <div className="rbt-card-body">
                <ul className="rbt-meta">
                  <li>
                    <i className="feather-map-pin"></i>
                    {data.location}
                  </li>
                  <li>
                    <i className="feather-clock"></i>
                    {data.time}
                  </li>
                  <br />
                  {hide_bookings_no === true ? <li> {"5 Bookings"} </li> : undefined}
                </ul>
                <h4 className="rbt-card-title">
                  <Link href={ROUTE.event_details+data.id}>{data.title}</Link> 
                </h4>

                <div className="read-more-btn">

                  {button_type === "type_1" ? (
                    <Link className="rbt-btn btn-border hover-icon-reverse btn-sm radius-round" href={button_link} >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">{buttom_name}</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  ) : (
                    <Link className="rbt-btn-link" href={button_link}>
                      {buttom_name} <i className="feather-arrow-right" />
                    </Link>
                  )}

                  {hide_edit_icon === true ? undefined : (
                    <Link className="btn-icon float-end" href={edit_link}>
                      <i className="feather-edit"></i>
                    </Link>
                  )}

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>






      

      {isPagination ? (
        <div className="row">
          <div className="col-lg-12 mt--60">
            <Pagination totalPages={totalPages} pageNumber={page} handleClick={handleClick} />
          </div>
        </div>
      ) : (
        ""
      )}



    </>
  );
};

export default Events;
