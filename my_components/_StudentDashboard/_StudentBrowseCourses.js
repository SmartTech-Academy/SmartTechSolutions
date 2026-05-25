import React, { useState } from "react";
import Link from "next/link";
import Select, { components } from "react-select";

import CourseWidgets from "./widgets/CourseWidget";
import StudentDashboardHeader from "./sections/StudentDashboardHeader";
import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";
import Pagination from "@/my_components/Common/Pagination";

import Courses from "@/my_data/dashboard/instructor.json";

import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";


const StudentBrowseCourses = () => {

  // selected options
  const [SearchOption, setSearchOption] = useState(null);
  const [FilterByCategory, setFilterByCategory] = useState(null);
  const [FilterByAuthor, setFilterByAuthor] = useState(null);

  const [course, setCourses] = useState({ value: "", label: "" });
  const [sortBy, setSortBy] = useState({ value: "Default", label: "Default" });
  const [sortByOffer, setSortByOffer] = useState({
    value: "Free",
    label: "Free",
  });

  const [focusedInput, setFocusedInput] = useState(null);

  const courses = [
    { value: "Web Design HTML", label: "Web Design HTML" },
    { value: "Graphic Photoshop", label: "Graphic Photoshop" },
    { value: "English Career", label: "English Career" },
    { value: "Spoken English Career", label: "Spoken English Career" },
    { value: "Art Painting Experts", label: "Art Painting Experts" },
    { value: "App Development Experts", label: "App Development Experts" },
    { value: "Web Application Experts", label: "Web Application Experts" },
    { value: "Php Development Experts", label: "Php Development Experts" },
  ];

  const sortByOptions = [
    { value: "Default", label: "Default" },
    { value: "Latest", label: "Latest" },
    { value: "Popularity", label: "Popularity" },
    { value: "Trending", label: "Trending" },
    { value: "Price: low to high", label: "Price: low to high" },
    { value: "Price: high to low", label: "Price: high to low" },
  ];

  const sortByOffers = [
    { value: "Free", label: "Free" },
    { value: "Paid", label: "Paid" },
    { value: "Premium", label: "Premium" },
  ];

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '100%',
      flex: 1,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: state.isFocused ? '#4F46E5' : '#D1D5DB', // Tailwind: indigo-600 & gray-300
      boxShadow: state.isFocused ? '0 0 0 1px #4F46E5' : 'none',
      borderRadius: '0.5rem', // Tailwind: rounded-lg
      padding: '0.125rem 0.25rem',
      minHeight: '0.5rem',
      backgroundColor: "white",
      borderColor: state.isFocused ? "#4F46E5" : "#D1D5DB",
      boxShadow: state.isFocused ? "0 0 0 1px #4F46E5" : "none",
      borderRadius: "0.5rem", // rounded-md
      minHeight: "5rem", // ~30px 5.875
      height: "6rem",
      zIndex: 9999,
      padding: "0 0.25rem",
      lineHeight: "1.25rem",
      '&:hover': {
        borderColor: '#4F46E5',
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    dropdownIndicator: () => ({
      display: 'none', // Hide the arrow icon
    }),
    indicatorSeparator: () => ({
      display: 'none', // Hide the line separator
    })
  };

  return (

    <>


      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image" />
      </div>

      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <StudentDashboardHeader />

              <div className="row g-5">

                <div className="col-lg-3">
                  <StudentDashboardSidebar />
                </div>

                <div className="col-lg-9">
                  
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Search Courses</h4>
                      </div>



                      <div className="rbt-dashboard-filter-wrapper mt--60">
                        <div className="row g-5">
                          <div className="col-lg-6">
                            <div className="filter-select rbt-modern-select">
                              <span className="select-label d-block">Search Courses</span>
                              <div className="w--100" style={{ width: '100%' }}>
                                <Select
                                  styles={customStyles}
                                  // className="react-select"
                                  instanceId="sortByAuthor"
                                  classNamePrefix="react-select"
                                  defaultValue={course}
                                  onChange={setCourses}
                                  options={courses}
                                  placeholder="Find your next course..."
                                  isSearchable
                                  value={SearchOption}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="filter-select rbt-modern-select">
                              <span className="select-label d-block">Short By</span>
                              <Select
                                instanceId="sortBySelect"
                                className="react-select"
                                classNamePrefix="react-select"
                                defaultValue={sortBy}
                                onChange={setSortBy}
                                options={sortByOptions}
                                isSearchable
                                value={FilterByCategory}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="filter-select rbt-modern-select">
                              <span className="select-label d-block">Short By Offer</span>
                              <Select
                                instanceId="sortBySelect"
                                className="react-select"
                                classNamePrefix="react-select"
                                defaultValue={sortByOffer}
                                onChange={setSortByOffer}
                                options={sortByOffers}
                                isSearchable
                                value={FilterByAuthor}
                              />
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
                                  buttom_name={"Learn More"} button_link={"/Course-Description-Link"} />
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
      </div>


    </>

  );

};

export default StudentBrowseCourses;
