import { useRef, useState } from "react";
import dynamic from "next/dynamic";

import NewsletterData from "../../data/elements/newsletter.json";
import { postToBackend, getFormRenderedAt } from "@/helper/api";
import Honeypot from "@/my_components/_Global/Honeypot";
import FormAlert from "@/my_components/_Global/FormAlert";

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

const Newsletter = () => {

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
      source: "Newsletter (footer)",
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
    <div className="container">
      <div className="row row--15 align-items-center">
        <div className="col-lg-12">


          {NewsletterData &&
            NewsletterData.newsletterTwo.map((data, index) => (
              <div className="inner text-center" key="1">
                <div className="section-title text-center">
                  <span className="subtitle bg-white-opacity"> GET LATEST SMARTTECH SOLUTIONS UPDATE </span>
                  <h2 className="title color-white"> Subscribe Our Newsletter </h2>
                  <p className="description color-white mt--20">
                    {"Be the first to get our latest articles, exclusive updates, and insider tips. Subscribe to our content and stay ahead with everything we share, directly to your inbox."}
                  </p>
                </div>

                <form className="newsletter-form-1 mt--40" onSubmit={handleSubmit} noValidate>
                  <Honeypot value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                    disabled={submitState.status === "submitting"}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">
                        {submitState.status === "submitting" ? "Subscribing..." : "Subscribe"}
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                </form>

                <FormAlert status={submitState.status} message={submitState.message} />

                <span className="note-text color-white mt--20"> No ads, No trails, No commitments </span>

                <div className="row row--15 mt--50">

                  <div className={"col-lg-3 col-sm-6 col-md-6 single-counter offset-lg-3"} key="1">
                    <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                      <div className="inner">
                        <div className="content">
                          <h3 className="counter color-white">
                            <span className="odometer">
                              <Odometer value={350} />
                            </span>
                          </h3>
                          <h5 className="title color-white">{"Designers and Developers"}</h5>
                          <span className="subtitle color-white">
                            {"Engineers & counting"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={"col-lg-3 col-sm-6 col-md-6 single-counter"} key="2">
                    <div className="rbt-counterup rbt-hover-03 style-2 text-color-white">
                      <div className="inner">
                        <div className="content">
                          <h3 className="counter color-white">
                            <span className="odometer">
                              <Odometer value={410} />
                            </span>
                          </h3>
                          <h5 className="title color-white">{"Satisfied Clients"}</h5>
                          <span className="subtitle color-white">
                            {"Worldwide"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}


        </div>
      </div>
    </div>
  );
};

export default Newsletter;
