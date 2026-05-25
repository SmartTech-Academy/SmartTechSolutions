import Link from "next/link";
import React, { useState } from "react";

import CourseFilter from "@/my_components/_Courses/Filters/CourseFilter";

import EventData from "@/data/events.json";

const EventHead = () => {

  const [filterToggle, setFilterToggle] = useState(true);


  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>
        <div className="rbt-banner-content">
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className=" title-wrapper">
                    <h1 className="title mb--0">Top trending Events in { "{Nigeria}" }</h1>
                  </div>
                  <p className="description"> Your next extraordinary adventure awaits—unlock it with just one click.{" "} </p>
                </div>
              </div>
            </div>













            <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
              <div className="container">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                      
                      <div className="rbt-short-item switch-layout-container">
                        <ul className="course-switch-layout" style={{ display: "none" }}>
                          <li className="course-switch-item">
                            <button className="">
                              <i className="feather-grid"></i>
                              <span className="text ms-2">Grid</span>
                            </button>
                          </li>
                          <li className="course-switch-item">
                            <button className="">
                              <i className="feather-list"></i>
                              <span className="text ms-2">List</span>
                            </button>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>


                  <div className="col-lg-7 col-md-12 mt--0 pt--0">
                    <div className="rbt-sorting-list d-flex flex-wrap align-items-end justify-content-start justify-content-lg-end">
                      
                      <div className="rbt-short-item">
                        <form action="#" className="rbt-search-style me-0">
                          <input type="text" placeholder="Search Your Course.." />
                          <button type="submit" className="rbt-search-btn rbt-round-btn">
                            <i className="feather-search"></i>
                          </button>
                        </form>
                      </div>
                      
                      <div className="rbt-short-item">
                        <div className="view-more-btn text-start text-sm-end">
                          <button className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round" onClick={() => setFilterToggle(!filterToggle)}>
                            Filter<i className="feather-filter"></i>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                  <CourseFilter filterToggle={filterToggle} />
                  
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default EventHead;
