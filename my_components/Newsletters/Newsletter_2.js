import { useRef, useState } from "react";

import NewsletterData from "../../data/elements/newsletter.json";
import { postToBackend, getFormRenderedAt } from "@/helper/api";
import Honeypot from "@/my_components/_Global/Honeypot";
import FormAlert from "@/my_components/_Global/FormAlert";




const Newsletter_2 = () => {

  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState({ status: null, message: "" });
  const formRenderedAt = useRef(getFormRenderedAt());

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitState.status === "submitting") return;

    setSubmitState({ status: "submitting", message: "" });

    const result = await postToBackend("/newsletter-subscribe", {
      email,
      source: "Newsletter_2 (footer)",
      website: honeypot,
      form_rendered_at: formRenderedAt.current,
    });

    if (result.ok) {
      setSubmitState({
        status: "success",
        message: result.message || "Subscribed successfully! Thank you for joining our newsletter.",
      });
      setEmail("");
      setHoneypot("");
      formRenderedAt.current = getFormRenderedAt();
    } else {
      setSubmitState({ status: "error", message: result.message });
    }
  };

  return (

    <>

      {NewsletterData && NewsletterData.newsletterFour.map((data, index) => (

          <div className="section-title text-center" key={index}>

            <h2 className="title">
              {data.title} <br /> {data.subTitle}
            </h2>

            <form className="newsletter-form-1 mt--50 radius-round" onSubmit={handleSubmit} noValidate>
              <Honeypot value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
              <input
                className="rbt-border"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse radius-round"
                disabled={submitState.status === "submitting"}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">
                    {submitState.status === "submitting" ? "Subscribing..." : "Subscribe"}
                  </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                  <span className="btn-icon"> <i className="feather-arrow-right"></i> </span>
                </span>
              </button>
            </form>

            <FormAlert status={submitState.status} message={submitState.message} />

          </div>

        ))}

    </>

  );

};




export default Newsletter_2;
