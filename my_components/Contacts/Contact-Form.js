import { useRef, useState } from "react";
import Image from "next/image";

import { image_url } from "@/helper/Utilities";
import { postToBackend, getFormRenderedAt } from "@/helper/api";
import Honeypot from "@/my_components/_Global/Honeypot";
import FormAlert from "@/my_components/_Global/FormAlert";



const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};



const ContactForm = ({ gap }) => {

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState({ status: null, message: "" });
  const formRenderedAt = useRef(getFormRenderedAt());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitState.status === "submitting") return;

    setSubmitState({ status: "submitting", message: "" });

    const result = await postToBackend("/contact", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      website: honeypot,
      form_rendered_at: formRenderedAt.current,
    });

    if (result.ok) {
      setSubmitState({
        status: "success",
        message: result.message || "Message sent successfully! Our team will get back to you within one business day.",
      });
      setFormData(INITIAL_FORM_STATE);
      setHoneypot("");
      formRenderedAt.current = getFormRenderedAt();
    } else {
      setSubmitState({ status: "error", message: result.message });
    }
  };

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
                  className="rainbow-dynamic-form max-width-auto"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <Honeypot value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />

                  <div className="form-group form-group-premium">
                    <label htmlFor="contact-name" className="form-label-premium">Full Name</label>
                    <div className="input-wrap">
                      <i className="feather-user input-icon"></i>
                      <input
                        name="name"
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Jordan Adeyemi"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <span className="focus-border"></span>
                  </div>

                  <div className="form-group form-group-premium">
                    <label htmlFor="contact-email" className="form-label-premium">Email Address</label>
                    <div className="input-wrap">
                      <i className="feather-mail input-icon"></i>
                      <input
                        name="email"
                        id="contact-email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <span className="focus-border"></span>
                  </div>

                  <div className="form-group form-group-premium">
                    <label htmlFor="contact-phone" className="form-label-premium">Phone Number</label>
                    <div className="input-wrap">
                      <i className="feather-phone input-icon"></i>
                      <input
                        name="phone"
                        id="contact-phone"
                        type="tel"
                        placeholder="2348030000000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <span className="focus-border"></span>
                  </div>

                  <div className="form-group form-group-premium">
                    <label htmlFor="subject" className="form-label-premium">Reason for contacting us</label>
                    <div className="input-wrap">
                      <i className="feather-edit-3 input-icon"></i>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <span className="focus-border"></span>
                  </div>

                  <div className="form-group form-group-premium">
                    <label htmlFor="contact-message" className="form-label-premium">Message</label>
                    <div className="input-wrap input-wrap-textarea">
                      <i className="feather-message-square input-icon input-icon-textarea"></i>
                      <textarea
                        name="message"
                        id="contact-message"
                        placeholder="Tell us a bit about your project, goals, and timeline..."
                        required
                        value={formData.message}
                        onChange={handleChange}
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
                      disabled={submitState.status === "submitting"}
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">
                          {submitState.status === "submitting" ? "Sending..." : "Send Message"}
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </button>
                    <FormAlert status={submitState.status} message={submitState.message} />
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
