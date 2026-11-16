import { useRef, useState } from "react";

import NewsletterData from "../../data/elements/newsletter.json";
import { postToBackend, getFormRenderedAt } from "@/helper/api";
import Honeypot from "@/my_components/_Global/Honeypot";
import FormAlert from "@/my_components/_Global/FormAlert";
import AltchaWidget from "@/my_components/_Global/AltchaWidget";




const Newsletter_2 = () => {

  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState({ status: null, message: "" });
  const [altchaPayload, setAltchaPayload] = useState(null);
  const [captchaKey, setCaptchaKey] = useState(0);
  const formRenderedAt = useRef(getFormRenderedAt());

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitState.status === "submitting") return;

    if (!altchaPayload) {
      setSubmitState({ status: "error", message: "Please complete the captcha first." });
      return;
    }

    setSubmitState({ status: "submitting", message: "" });

    const result = await postToBackend("/newsletter-subscribe", {
      email,
      source: "Newsletter_2 (footer)",
      website: honeypot,
      form_rendered_at: formRenderedAt.current,
      altcha: altchaPayload,
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

    // Each ALTCHA solve is single-use server-side (consumed by this attempt whether it succeeded
    // or not), so re-mount the widget to fetch a fresh challenge.
    setAltchaPayload(null);
    setCaptchaKey((k) => k + 1);
  };

  // Matches SmartTech Academy: the captcha appears only once an email is being typed, so the many
  // pages carrying this newsletter box don't each fetch a challenge on load.
  const showCaptcha = Boolean(email.trim());

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
                disabled={submitState.status === "submitting" || !showCaptcha || !altchaPayload}
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

            {showCaptcha && (
              <div className="d-flex justify-content-center mt--20">
                <AltchaWidget
                  key={captchaKey}
                  onVerified={(payload) => setAltchaPayload(payload)}
                  onReset={() => setAltchaPayload(null)}
                />
              </div>
            )}

            <FormAlert status={submitState.status} message={submitState.message} />

          </div>

        ))}

    </>

  );

};




export default Newsletter_2;
