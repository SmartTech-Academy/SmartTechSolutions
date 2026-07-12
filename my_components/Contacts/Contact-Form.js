import Image from "next/image";

import { image_url } from "@/helper/Utilities";



const ContactForm = ({ gap }) => {

  return (
    <>
      <div className={`rbt-contact-address rbt-contact-address-premium rbt-section-gap`}>
        <div className="container">
          <div className="row g-5 align-items-center">

            <div className="col-lg-6 order-2 order-lg-1">
              <div className="rbt-contact-form contact-form-style-1 contact-form-premium max-width-auto">

                <span className="rbt-contact-form-badge">{"Let's talk"}</span>

                <h3 className="title"> Get in touch with us </h3>
                <p className="rbt-contact-form-subtitle">
                  {"Share a few details about your project and a member of our team will get back to you within one business day."}
                </p>

                <form
                  id="contact-form"
                  method="POST"
                  action="mail.php"
                  className="rainbow-dynamic-form max-width-auto"
                >
                  <div className="form-group form-group-premium">
                    <label htmlFor="contact-name" className="form-label-premium">Full Name</label>
                    <div className="input-wrap">
                      <i className="feather-user input-icon"></i>
                      <input
                        name="contact-name"
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Jordan Adeyemi"
                        required
                      />
                    </div>
                    <span className="focus-border"></span>
                  </div>

                  <div className="form-group form-group-premium">
                    <label htmlFor="contact-email" className="form-label-premium">Email Address</label>
                    <div className="input-wrap">
                      <i className="feather-mail input-icon"></i>
                      <input
                        name="contact-phone"
                        id="contact-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <span className="focus-border"></span>
                  </div>

                  <div className="form-group form-group-premium">
                    <label htmlFor="subject" className="form-label-premium">Subject</label>
                    <div className="input-wrap">
                      <i className="feather-edit-3 input-icon"></i>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <span className="focus-border"></span>
                  </div>

                  <div className="form-group form-group-premium">
                    <label htmlFor="contact-message" className="form-label-premium">Message</label>
                    <div className="input-wrap input-wrap-textarea">
                      <i className="feather-message-square input-icon input-icon-textarea"></i>
                      <textarea
                        name="contact-message"
                        id="contact-message"
                        placeholder="Tell us a bit about your project, goals, and timeline..."
                        required
                      ></textarea>
                    </div>
                    <span className="focus-border"></span>
                  </div>

                  <div className="form-submit-group">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Send Message</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail thumbnail-premium">
                <Image
                  className="w-100 radius-6"
                  src={image_url("/app_images/contact_and_office_img/get_in_touch_visual.webp", true)}
                  width={500}
                  height={620}
                  alt="SmartTech Solutions team member ready to assist you"
                />
                <span className="thumbnail-glow" aria-hidden="true"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};


export default ContactForm;
