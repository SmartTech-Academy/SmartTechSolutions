import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";


import Contact from "../Contacts/Contact";
import ContactForm from "../Contacts/Contact-Form";
import Instagram from "../Instagram/Instagram";
import Brands2 from "../TrustedByBrands/Brands2";


// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { image_url } from "../../helper/Utilities";






const ContactUs = () => {

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);


  return (

    <>

        <main className="rbt-main-wrapper contact-page">


            <div className="rbt-conatct-area contact-hero-premium">
                <div className="contact-hero-bg">
                    <Image
                        src={image_url("/app_images/contact_and_office_img/contact_hero_bg.webp", true)}
                        alt="SmartTech Solutions modern office and consulting workspace"
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <span className="contact-hero-overlay" aria-hidden="true"></span>
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--60" data-sal="slide-up" data-sal-duration="700">
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
                src="https://www.google.com/maps?q=No%209%20Church%20Street%2C%20Shomolu%2C%20Lagos%2C%20Nigeria&output=embed"
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
                    <Brands2 hide_text="false" title="Trusted by ambitious teams and brands" />
                    </div>
                </div>
                </div>
            </div>



        </main>

    </>
  );

};



export default ContactUs;
