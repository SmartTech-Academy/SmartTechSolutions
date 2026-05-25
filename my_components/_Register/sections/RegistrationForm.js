import React, { useState } from "react";
import Link from "next/link";

// IMPORT THE LIBRARY, HOLDING THE NAMES OF ALL COUNTRIES IN THE WORLD
import countries from 'world-countries';

// FETCH THE NAMES OF ALL COUNTRIES IN THE WORLD
const countryList = countries.map((c) => c.name.common).sort();


import { ROUTE } from "@/route/app_routes.js";





const RegistrationForm = () => {

  const [focusedInput, setFocusedInput] = useState(null);

  const ages = Array.from({ length: 52 }, (_, i) => 18 + i); // [18...69]


  return (

    <>
      <div className="rbt-contact-form contact-form-style-1">

        <h3 className="title mb--30">Join The Academy</h3>

        <form id="rbt-profile-row rbt-default-form contact-form">

          


          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className={`rbt-form-group ${focusedInput === "firstname" ? "focused" : ""}`}>
                <input id="firstname" type="text" placeholder="First name" onFocus={() => setFocusedInput("firstname")} onBlur={() => setFocusedInput(null)} />
                <span className="focus-border"></span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className={`rbt-form-group ${focusedInput === "surname" ? "focused" : ""}`}>
                <input id="surname" type="text" placeholder="Surname" onFocus={() => setFocusedInput("surname")} onBlur={() => setFocusedInput(null)} />
                <span className="focus-border"></span>
              </div>
            </div>
          </div>




          <div className="row pb--30 pt--30">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={`rbt-form-group ${ focusedInput === "email" ? "focused" : "" }`}>
                <input id="email" placeholder="Email" type="email" onFocus={() => setFocusedInput("email")} onBlur={() => setFocusedInput(null)} />
                <span className="focus-border"></span>
              </div>
            </div>
          </div>



          <div className={`form-group`} style={focusedInput === "country" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null}>
            <select className="w-100 service-select" onFocus={() => setFocusedInput("country")} onBlur={() => setFocusedInput(null)}>
              <option value="">Select Country</option>
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>



          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className={`rbt-form-group`} style={focusedInput === "age_range" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null}>
                <select className="w-100 service-select" onFocus={() => setFocusedInput("age_range")} onBlur={() => setFocusedInput(null)}>
                  <option>Age</option>
                  {ages.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                  <option value="70+">70+</option>
                  {/* <option>Less than 18</option><option>18 - 21</option><option>22 - 25</option><option>26 - 30</option><option>31 - 35</option><option>36 - 40</option><option>41 - 45</option><option>46 - 50</option><option>51 - 55</option><option>56 - 60</option><option>61+</option> */}
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className={`rbt-form-group`} style={focusedInput === "gender" ? { border: "2px solid #2f57ef", borderRadius: "6px" } : null}>
                <select className="w-100 service-select" onFocus={() => setFocusedInput("gender")} onBlur={() => setFocusedInput(null)}>
                  <option>Gender</option>
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
            </div>
          </div>


          
          <div className="row pb--30 pt--30">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={`rbt-form-group ${ focusedInput === "password" ? "focused" : "" }`}>
                <input name="password" placeholder="Password" type="password" onFocus={() => setFocusedInput("password")} onBlur={() => setFocusedInput(null)} />
                <span className="focus-border"></span>
              </div>
            </div>
          </div>



          
          <div className="form-submit-group mb--15">
            <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round w-100">
              <span className="icon-reverse-wrapper">
                <span className="btn-text">JOIN COMMUNITY</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </button>
          </div>

          <Link className="section-title text-center color-primary" href={ROUTE.login}><p className="title">Already have an account? Sign in.</p></Link>



        </form>
      </div>




    </>

  );

};

export default RegistrationForm;
