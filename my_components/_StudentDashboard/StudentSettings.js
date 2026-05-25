import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// RADUX STORE
import { useAppContext } from "@/context/Context";

// IMPORT THE LIBRARY, HOLDING THE NAMES OF ALL COUNTRIES IN THE WORLD
import countries from 'world-countries';

// FETCH THE NAMES OF ALL COUNTRIES IN THE WORLD
const countryList = countries.map((c) => c.name.common).sort();


// import CourseWidgets from "./widgets/CourseWidget";
import StudentDashboardHeader from "./sections/StudentDashboardHeader";
import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";
// import Pagination from "@/my_components/Common/Pagination";

// import Courses from "@/my_data/dashboard/instructor.json";

// import { ROUTE } from "@/route/app_routes.js";
// import { CONFIG } from "@/app_config.js";





const StudentSettings = () => {

  const [focusedInput, setFocusedInput] = useState(null);
  
  const ages = Array.from({ length: 52 }, (_, i) => 18 + i); // [18...69]

  const { isLightTheme } = useAppContext();

  useEffect(() => {}, [isLightTheme]);

  const [textareaText, setTextareaText] = useState(
    "I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."
  );
  

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
                        <h4 className="rbt-title-style-3">Settings</h4>
                      </div>



                      <div className="advance-tab-button mb--30">
                        <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="settinsTab-4" role="tablist">
                          <li role="presentation">
                            <Link href="#" className="tab-button active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="true">
                              <span className="title">Profile</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link href="#" className="tab-button" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" role="tab" aria-controls="password" aria-selected="false">
                              <span className="title">Password</span>
                            </Link>
                          </li>
                          <li role="presentation">
                            <Link href="#" className="tab-button" id="social-tab" data-bs-toggle="tab" data-bs-target="#social" role="tab" aria-controls="social" aria-selected="false">
                              <span className="title">Socials</span>
                            </Link>
                          </li>
                        </ul>
                      </div>







                      <div className="tab-content">


                        <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <div className="rbt-dashboard-content-wrapper">
                            <div className="tutor-bg-photo bg_image bg_image--22 height-245"></div>
                            <div className="rbt-tutor-information">
                              <div className="rbt-tutor-information-left">
                                <div className="thumbnail rbt-avatars size-lg position-relative">
                                  <Image width={300} height={300} src="/images/team/avatar.jpg" alt="Instructor" />
                                  <div className="rbt-edit-photo-inner">
                                    <button className="rbt-edit-photo" title="Upload Photo"> <i className="feather-camera" /> </button>
                                  </div>
                                </div>
                              </div>
                              <div className="rbt-tutor-information-right">
                                <div className="tutor-btn">
                                  <Link className="rbt-btn btn-sm btn-border color-white radius-round-10" href="#"> Edit Cover Photo </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                              <div className="rbt-form-group">
                                <label htmlFor="firstname">First Name</label>
                                <input id="firstname" type="text" defaultValue="John" style={focusedInput === "firstname" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("firstname")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                              <div className={`rbt-form-group`}>
                                <label htmlFor="lastname">Last Name</label>
                                <input id="lastname" type="text" defaultValue="Due" style={focusedInput === "lastname" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("lastname")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                              <div className="rbt-form-group">
                                <label htmlFor="username">Email</label>
                                <input id="email" type="email" value="iokeakwalam@gmail.com" readOnly onFocus={(e) => e.target.blur()} /* prevent focus */
                                  style={isLightTheme ? 
                                    { pointerEvents: 'none', /* block interactions */ backgroundColor: '#eee', color: '#555', border: '2px solid #ccc', cursor: 'not-allowed' } : 
                                    { pointerEvents: 'none', /* block interactions */ backgroundColor: '#192335', color: '#888', border: '2px solid #999', cursor: 'not-allowed' }} />
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt--15">
                              <div className="rbt-form-group">
                                <label htmlFor="phonenumber">Country</label>
                                <select className="w-100 service-select" 
                                  style={focusedInput === "country" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("country")} onBlur={() => setFocusedInput(null)}>
                                    <option value="">Select Country</option>
                                    {countryList.map((country) => (
                                      <option key={country} value={country}>
                                        {country}
                                      </option>
                                    ))}
                                </select>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                              <div className="rbt-form-group">
                                <label htmlFor="phonenumber">Profession</label>
                                <input id="Profession" type="text" defaultValue="Product Engineer" style={focusedInput === "Profession" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("Profession")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                              <div className="rbt-form-group">
                                <label htmlFor="phonenumber">Age</label>
                                <select className="w-100 service-select" 
                                  style={focusedInput === "age" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("age")} onBlur={() => setFocusedInput(null)}>
                                    <option value="25" selected>25</option>
                                    {ages.map((age) => (
                                      <option key={age} value={age}>
                                        {age}
                                      </option>
                                    ))}
                                    <option value="70+">70+</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt--15">
                              <div className="rbt-form-group">
                                <label htmlFor="phonenumber">Gender</label>
                                <select className="w-100 service-select" 
                                  style={focusedInput === "gender" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("gender")} onBlur={() => setFocusedInput(null)}>
                                    <option value="Male" selected>Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                              </div>
                            </div>

                            <div className="col-12 mt--15">
                              <div className="rbt-form-group">
                                <label htmlFor="bio">Bio</label>
                                <textarea id="bio" cols="20" rows="5" style={focusedInput === "bio" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("bio")} onBlur={() => setFocusedInput(null)} value={textareaText} 
                                  onChange={(e) => setTextareaText(e.target.value)}></textarea>
                              </div>
                            </div>

                            <div className="col-12 mt--20">
                              <div className="rbt-form-group">
                                <Link className="rbt-btn btn-gradient" href="#"> Update Info </Link>
                              </div>
                            </div>
                          </form>
                        </div>











                        <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                          <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                            <div className="col-12 mt--10">
                              <div className="rbt-form-group">
                                <label htmlFor="currentpassword">Current Password</label>
                                <input id="currentpassword" type="password" placeholder="Current Password" style={focusedInput === "currentpassword" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("currentpassword")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-12 mt--10">
                              <div className="rbt-form-group">
                                <label htmlFor="newpassword">New Password</label>
                                <input id="newpassword" type="password" placeholder="New Password" style={focusedInput === "newpassword" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("newpassword")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-12 mt--10">
                              <div className="rbt-form-group">
                                <label htmlFor="retypenewpassword"> Re-type New Password </label>
                                <input id="retypenewpassword" type="password" placeholder="Re-type New Password" style={focusedInput === "retypenewpassword" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("retypenewpassword")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-12 mt--20">
                              <div className="rbt-form-group">
                                <Link className="rbt-btn btn-gradient" href="#"> Update Password </Link>
                              </div>
                            </div>
                          </form>
                        </div>








                        <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                          <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="facebook"> <i className="feather-facebook"></i> Facebook </label>
                                <input id="facebook" type="text" defaultValue="https://facebook.com/" style={focusedInput === "facebook" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("facebook")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="twitter"> <i className="feather-twitter"></i> Twitter </label>
                                <input id="twitter" type="text" defaultValue="https://twitter.com/" style={focusedInput === "twitter" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("twitter")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="linkedin"> <i className="feather-linkedin"></i> Linkedin </label>
                                <input id="linkedin" type="text" defaultValue="https://linkedin.com/" style={focusedInput === "linkedin" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("linkedin")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="Instagram"> <i className="feather-globe"></i> Instagram </label>
                                <input id="Instagram" type="text" defaultValue="https://instagram.com/" style={focusedInput === "Instagram" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("Instagram")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div>

                            {/* <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="github"> <i className="feather-github"></i> Github </label>
                                <input id="github" type="text" defaultValue="https://github.com/" style={focusedInput === "github" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null} 
                                  onFocus={() => setFocusedInput("github")} onBlur={() => setFocusedInput(null)} />
                              </div>
                            </div> */}

                            <div className="col-12 mt--10">
                              <div className="rbt-form-group">
                                <Link className="rbt-btn btn-gradient" href="#"> Update Socials </Link>
                              </div>
                            </div>

                          </form>
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

export default StudentSettings;
