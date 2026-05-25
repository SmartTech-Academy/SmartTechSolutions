import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";


import Contact from "../Contacts/Contact";
import ContactForm from "../Contacts/Contact-Form";
import TrustedBrands from "../Brand/Brands";
import Instagram from "../Instagram/Instagram";


// HOME PAGE SECTIONS
import Brands from "../TrustedByBrands/Brands";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
import shapeImg from "../../public/images/icons/three-shape.png";
import { image_url } from "../../helper/Utilities";






const ContactUs = () => {


  return (
    
    <>

        <main className="rbt-main-wrapper">


            <div className="rbt-conatct-area bg-gradient-11 rbt-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--60">
                                <span className="subtitle bg-secondary-opacity"> Contact Us </span>
                                <h2 className="title"> Got an Idea for  <br /> your Project? </h2>
                                <p className="description has-medium-font-size mt--10"> 
                                    {"We're keen to understand your needs, and we'd love to discuss how we can collaboratively design and create innovative solutions that bring your vision to life."} 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <Contact />
                </div>
            </div>










            <ContactForm />











            <div className="rbt-instagram-area bg-color-white">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb--60">
                            <div className="section-title text-center">
                                <span className="subtitle bg-secondary-opacity">Instagram</span>
                                <h2 className="title">
                                    Follow Histudy On{" "}
                                    <span className="color-primary">Instagram</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Instagram />
            </div>








            <div className="rbt-google-map bg-color-white mb--3 mt--10">
                <iframe
                className="w-100"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                height="600"
                style={{ border: "0" }}
                ></iframe>
            </div>










            <div className="rbt-call-to-action-area rbt-section-gap bg-color-secondary-alt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rbt-cta-6 text-center">
                                <div className="content">
                                    <h1 className="title"> {"Let's bring your"}
                                    <br /> vision to life. </h1>
                                    <p>Pull the Trigger!</p>
                                    <div className="rbt-button-group justify-content-center">
                                        <Link className="rbt-btn btn-gradient" href={ROUTE.appointment}> Hire Us </Link>
                                        <Link className="rbt-btn btn-border" href={ROUTE.project}> Explore our Projects </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










            <div className="rbt-brand-area bg-color-white ptb--60">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-10 offset-lg-1">
                    <TrustedBrands />
                    </div>
                </div>
                </div>
            </div>



        </main>

    </>
  );
  
};



export default ContactUs;
