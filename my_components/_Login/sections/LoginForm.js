import React, { useState } from "react";
import Link from "next/link";

import countries from 'world-countries';
import { ROUTE } from "@/route/app_routes.js";

const countryList = countries.map((c) => c.name.common).sort();



const LoginForm = () => {

  const [focusedInput, setFocusedInput] = useState(null);

  return (

    <>
      <div className="rbt-contact-form contact-form-style-1">

        <h3 className="title mb--30">Sign In</h3>

        <form id="rbt-profile-row rbt-default-form contact-form">

          
          <div className="row pt--15">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={`form-group ${ focusedInput === "email" ? "focused" : "" }`}>
                <input id="email" placeholder="Username or email *" type="email" onFocus={() => setFocusedInput("email")} onBlur={() => setFocusedInput(null)} />
                <span className="focus-border"></span>
              </div>
            </div>
          </div>


          
          <div className="row pt--10">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={`form-group ${ focusedInput === "password" ? "focused" : "" }`}>
                <input name="password" placeholder="Password *" type="password" onFocus={() => setFocusedInput("password")} onBlur={() => setFocusedInput(null)} />
                <span className="focus-border"></span>
              </div>
            </div>
          </div>




          <div className="row mb--50">
            <div className="col-lg-6">
              <div className="rbt-checkbox">
                <input type="checkbox" id="rememberme" name="rememberme" />
                <label htmlFor="rememberme">Remember me</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rbt-lost-password text-end">
                <Link className="rbt-btn-link" href={ROUTE.forgotPassword}> Lost your password? </Link>
              </div>
            </div>
          </div>



          <div className="form-submit-group mb--15">
            <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
              <span className="icon-reverse-wrapper">
                <span className="btn-text">SIGN IN</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </button>
          </div>

          <Link className="section-title text-center color-primary" href={ROUTE.register}><p className="title">Don't have an account yet? Sign up.</p></Link>



        </form>
      </div>




    </>

  );

};

export default LoginForm;
