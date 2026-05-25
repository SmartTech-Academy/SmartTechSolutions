import React, { useState } from "react";
import Link from "next/link";

import countries from 'world-countries';
import { ROUTE } from "@/route/app_routes.js";

const countryList = countries.map((c) => c.name.common).sort();



const ForgotPasswordForm = () => {

  const [focusedInput, setFocusedInput] = useState(null);

  return (

    <>
      <div className="rbt-contact-form contact-form-style-1">

        <h3 className="title mb--30">Recover Your Account</h3>
        <p><i>Please enter your email address to recover your account.</i></p>

        <form id="rbt-profile-row rbt-default-form contact-form">

          
          <div className="row pt--10">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={`form-group ${ focusedInput === "email" ? "focused" : "" }`}>
                <input id="email" placeholder="Email Address *" type="email" onFocus={() => setFocusedInput("email")} onBlur={() => setFocusedInput(null)} />
                <span className="focus-border"></span>
              </div>
            </div>
          </div>



          <div className="form-submit-group mb--15">
            <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
              <span className="icon-reverse-wrapper">
                <span className="btn-text">RECOVER ACCOUNT</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </button>
          </div>

          <Link className="section-title text-center color-primary" href={ROUTE.login}><p className="title">Remember your password? Log in.</p></Link>



        </form>
      </div>




    </>

  );

};

export default ForgotPasswordForm;
