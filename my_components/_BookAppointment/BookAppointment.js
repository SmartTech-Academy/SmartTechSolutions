import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import Brands2 from "@/my_components/TrustedByBrands/Brands2";

import { CONFIG } from "@/app_config.js";

import heroBg from "@/public/app_images/banner/book_appointment_hero_bg.webp";
import supportVisual from "@/public/app_images/services/book_appointment_visual.webp";










const TRUST_PILLS = [
  { icon: "feather-calendar", text: "30-minute discovery call" },
  { icon: "feather-shield", text: "No-obligation project quote" },
  { icon: "feather-clock", text: "We reply within 24 hours" },
];




const NEXT_STEPS = [
  {
    title: "Book your call",
    text: "Tell us about your project using the form, takes under two minutes.",
  },
  {
    title: "We review your goals",
    text: "Our team studies your brief and prepares questions specific to your product.",
  },
  {
    title: "Get a tailored roadmap",
    text: "Walk away from the call with a clear scope, timeline, and next steps.",
  },
];




const SERVICE_OPTIONS = [
  "Web Application Development",
  "Mobile Application Development",
  "AI Development and Automations",
  "Blockchain Development",
  "Product Design (UI/UX)",
  "Game Development",
  "MVP Development",
  "Cybersecurity Services",
  "ERP / CRM Solution Implementation",
  "Audit & Consultancy",
  "Support & Maintenance",
  "Something else",
];




// Only relevant when "ERP / CRM Solution Implementation" is picked above —
// mirrors my_data/solutions/solutions.js, the 5 platforms under the
// Solutions menu.
const SOLUTION_OPTIONS = [
  "Odoo ERP",
  "Zoho CRM",
  "Oracle NetSuite",
  "SAP Business One",
  "Microsoft Dynamics 365 Business Central",
  "Not sure which platform yet",
];




const BUDGET_OPTIONS = ["Under $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+", "Not sure yet"];



const TIMELINE_OPTIONS = ["As soon as possible", "1 - 3 months", "3 - 6 months", "Just exploring"];



const FAQS = [
  {
    id: "faq-prepare",
    question: "What should I prepare before the call?",
    answer:
      "A short description of your idea or problem, any existing materials (designs, decks, or a live product if it exists), and a rough sense of your timeline and budget range, the form below covers all of this.",
  },
  {
    id: "faq-reply-time",
    question: "How soon will I hear back?",
    answer:
      "Our team responds to every appointment request within 24 hours on business days, usually with a few time slots to choose from for your call.",
  },
  {
    id: "faq-nda",
    question: "Do you sign NDAs before discussing my idea?",
    answer:
      "Absolutely. If your project involves sensitive or proprietary information, let us know in the form and we'll send over an NDA before the call.",
  },
];





















const BookAppointment = () => {

  const [service, setService] = useState("");
  const showSolutionField = service === "ERP / CRM Solution Implementation";

  useEffect(() => {
    sal({ threshold: 0.01, once: true });
  }, []);


  return (

    <main className="rbt-main-wrapper rbt-appointment-page">


      <section className="rbt-appointment-hero">
        <Image
          src={heroBg}
          alt=""
          fill
          sizes="100vw"
          className="rbt-appointment-hero__img"
          priority
          aria-hidden="true"
        />
        <span className="rbt-appointment-hero__overlay" aria-hidden="true" />

        <div className="container">
          <div className="rbt-appointment-hero__inner text-center">
            <span className="rbt-hero-badge" data-sal="zoom-in" data-sal-delay="100" data-sal-duration="700">
              <span className="rbt-hero-badge__dot" /> Book a Free Discovery Call
            </span>

            <h1 className="title" data-sal="slide-up" data-sal-delay="200" data-sal-duration="800">
              Let&apos;s plan your <span className="theme-gradient">next product.</span>
            </h1>

            <p className="description" data-sal="slide-up" data-sal-delay="320" data-sal-duration="800">
              Tell us about your idea and we&apos;ll set up a call with the right people on our
              team, product, engineering, and design to map out how to build it.
            </p>

            <div className="rbt-appointment-trust" data-sal="slide-up" data-sal-delay="420" data-sal-duration="800">
              {TRUST_PILLS.map((pill) => (
                <span className="rbt-appointment-trust__pill" key={pill.text}>
                  <i className={pill.icon}></i>
                  {pill.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>















      <section className="rbt-appointment-main rbt-section-gap">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-7">
              <div className="rbt-appointment-form-card" data-sal="slide-up" data-sal-duration="700">
                <span className="subtitle bg-primary-opacity">Tell Us About Your Project</span>
                <h2 className="title">Request your appointment</h2>
                <p className="form-lede">
                  Fill in as much detail as you can, it helps us bring the right specialists to
                  your call.
                </p>

                <form
                  id="appointment-form"
                  method="POST"
                  action="mail.php"
                  className="rainbow-dynamic-form rbt-appointment-form"
                >
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="appointment-name">Full name</label>
                        <input id="appointment-name" name="appointment-name" type="text" placeholder="Jane Okafor" required />
                        <span className="focus-border"></span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="appointment-email">Work email</label>
                        <input id="appointment-email" name="appointment-email" type="email" placeholder="jane@company.com" required />
                        <span className="focus-border"></span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="appointment-phone">Phone number</label>
                        <input id="appointment-phone" name="appointment-phone" type="tel" placeholder="+1 555 000 0000" />
                        <span className="focus-border"></span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="appointment-company">Company / project name</label>
                        <input id="appointment-company" name="appointment-company" type="text" placeholder="Acme Inc." />
                        <span className="focus-border"></span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="appointment-service">Service you need</label>
                        <select
                          id="appointment-service"
                          name="appointment-service"
                          value={service}
                          onChange={(event) => setService(event.target.value)}
                        >
                          <option value="" disabled>Choose a service</option>
                          {SERVICE_OPTIONS.map((option) => (
                            <option value={option} key={option}>{option}</option>
                          ))}
                        </select>
                        <span className="focus-border"></span>
                      </div>
                    </div>

                    {showSolutionField ? (
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="appointment-solution">Which platform?</label>
                          <select id="appointment-solution" name="appointment-solution" defaultValue="">
                            <option value="" disabled>Choose a solution</option>
                            {SOLUTION_OPTIONS.map((option) => (
                              <option value={option} key={option}>{option}</option>
                            ))}
                          </select>
                          <span className="focus-border"></span>
                        </div>
                      </div>
                    ) : null}

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="appointment-budget">Estimated budget</label>
                        <select id="appointment-budget" name="appointment-budget" defaultValue="">
                          <option value="" disabled>Choose a range</option>
                          {BUDGET_OPTIONS.map((option) => (
                            <option value={option} key={option}>{option}</option>
                          ))}
                        </select>
                        <span className="focus-border"></span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="appointment-timeline">Preferred timeline</label>
                        <select id="appointment-timeline" name="appointment-timeline" defaultValue="">
                          <option value="" disabled>Choose a timeline</option>
                          {TIMELINE_OPTIONS.map((option) => (
                            <option value={option} key={option}>{option}</option>
                          ))}
                        </select>
                        <span className="focus-border"></span>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="appointment-message">Tell us about your project</label>
                        <textarea
                          id="appointment-message"
                          name="appointment-message"
                          rows={5}
                          placeholder="What are you building, and what problem does it solve?"
                        ></textarea>
                        <span className="focus-border"></span>
                      </div>
                    </div>
                  </div>

                  <div className="form-submit-group">
                    <button type="submit" className="rbt-btn btn-gradient hover-icon-reverse w-100">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Request My Appointment</span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                        <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      </span>
                    </button>
                    <p className="form-fineprint">
                      By submitting, you agree to be contacted by SmartTech Solutions about your request.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="rbt-appointment-side" data-sal="slide-left" data-sal-delay="150" data-sal-duration="700">
                <div className="rbt-appointment-side__img">
                  <Image
                    src={supportVisual}
                    width={700}
                    height={1050}
                    alt="A SmartTech Solutions consultant ready for your discovery call"
                    placeholder="blur"
                  />
                </div>

                <div className="rbt-appointment-steps">
                  <h4>What happens next</h4>
                  {NEXT_STEPS.map((step, index) => (
                    <div className="rbt-appointment-steps__item" key={step.title}>
                      <span className="rbt-appointment-steps__index">{index + 1}</span>
                      <div>
                        <strong>{step.title}</strong>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rbt-appointment-direct">
                  <span>Prefer to reach us directly?</span>
                  <Link href={`tel:${CONFIG.PHONE_1}`}>
                    <i className="feather-phone"></i> {CONFIG.PHONE_1}
                  </Link>
                  <Link href={`mailto:${CONFIG.EMAIL_1}`}>
                    <i className="feather-mail"></i> {CONFIG.EMAIL_1}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>















      <section className="rbt-appointment-faq rbt-section-gap bg-color-extra2">
        <div className="container">
          <div className="row mb--50">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">FAQ</span>
                <h2 className="title">Common questions before you book</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="accordion rbt-accordion-style rbt-accordion-01 rbt-accordion-06" id="appointmentFaqAccordion">
                {FAQS.map((item, index) => (
                  <div className="accordion-item card" key={item.id}>
                    <h2 className="accordion-header card-header" id={`${item.id}-heading`}>
                      <button
                        className={`accordion-button${index === 0 ? "" : " collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                        aria-expanded={index === 0}
                        aria-controls={item.id}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                      aria-labelledby={`${item.id}-heading`}
                      data-bs-parent="#appointmentFaqAccordion"
                    >
                      <div className="accordion-body card-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>















      <section className="rbt-brand-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10 offset-lg-1">
              <Brands2 hide_text="false" title="Trusted by ambitious teams and brands" />
            </div>
          </div>
        </div>
      </section>


    </main>

  );

};

export default BookAppointment;
