import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import CallToActionOne from "../../my_components/CallToAction/CallToActionOne";
import Newsletter from "../../my_components/Newsletters/Newsletter";
import { CONFIG } from "@/app_config.js";
import { image_url } from "../../helper/Utilities";

import bgImage from "../../public/images/bg/bg-image-10.jpg";

const privacySections = [
  {
    title: "1. Introduction",
    body: [
      `${CONFIG.APP_NAME} ("SmartTech", "we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, store, and protect information when you visit our website, contact us, subscribe to updates, enroll in training, request a quote, or use our digital services.`,
      "Please read this policy carefully. If you do not agree with how we handle information, you should not use our website or services.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We collect information you choose to provide directly, information collected automatically through your device and browser, and limited information from third-party tools that help us operate our website and services.",
    ],
    lists: [
      {
        label: "Information you provide directly",
        items: [
          "Contact details such as your name, email address, phone number, company name, and mailing address.",
          "Project, training, or inquiry details submitted through forms, email, calls, chat, surveys, or consultations.",
          "Account or profile details if you create an account, enroll in a program, or access a learning or client portal.",
          "Billing details, transaction references, and payment confirmation data. Full card or payment credentials are handled by third-party payment processors where applicable.",
          "Messages, feedback, testimonials, support requests, and other communications you send to us.",
        ],
      },
      {
        label: "Information collected automatically",
        items: [
          "Device and browser details such as browser type, operating system, device type, IP address, and general location derived from IP address.",
          "Usage information such as pages viewed, links clicked, referring pages, session duration, approximate visit time, and other website interaction data.",
          "Cookie, pixel, analytics, and similar tracking data used to improve performance, security, user experience, and marketing relevance.",
        ],
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use the information we collect to operate our business, deliver services, improve our website, communicate with you, and keep our systems secure.",
    ],
    items: [
      "Respond to inquiries, proposals, consultation requests, support tickets, and service questions.",
      "Deliver software development, training, design, consulting, support, and maintenance services.",
      "Process invoices, payments, enrollment requests, service agreements, and transaction-related messages.",
      "Send newsletters, product updates, event notices, learning resources, and promotional messages where permitted.",
      "Personalize website content, improve user experience, and understand how visitors use our website.",
      "Monitor website performance, analyze trends, prevent fraud, detect abuse, and protect our systems.",
      "Comply with legal obligations, enforce our Terms of Service, and protect our rights and users.",
    ],
  },
  {
    title: "4. How We Share Information",
    body: [
      "We do not sell your personal information. We may share information only where reasonably necessary to provide services, operate our business, comply with the law, or protect legitimate interests.",
    ],
    lists: [
      {
        label: "Service providers",
        items: [
          "Hosting, cloud infrastructure, analytics, email, CRM, payment, customer support, project management, security, and marketing platforms.",
          "Professional advisers, contractors, instructors, developers, designers, or delivery partners who help us provide agreed services.",
        ],
      },
      {
        label: "Legal, safety, and business needs",
        items: [
          "We may disclose information to comply with legal obligations, court orders, government requests, or dispute resolution processes.",
          "We may share information to enforce agreements, investigate misuse, protect users, prevent fraud, or secure our website and services.",
          "If SmartTech is involved in a merger, acquisition, restructuring, financing, or asset transfer, relevant information may be transferred as part of that transaction.",
        ],
      },
    ],
  },
  {
    title: "5. Cookies and Tracking Technologies",
    body: [
      "Cookies are small files stored on your device that help websites remember preferences, improve performance, and understand visitor behavior. We may use cookies, pixels, web beacons, analytics tags, and similar technologies.",
    ],
    items: [
      "Essential cookies support website functionality, security, form handling, login sessions, and preferences.",
      "Analytics cookies help us understand how visitors use our website so we can improve navigation, content, and performance.",
      "Marketing cookies may help us measure campaigns and show more relevant content or advertisements.",
      "You can control or block cookies through your browser settings. Some website features may not work properly if cookies are disabled.",
    ],
  },
  {
    title: "6. Third-Party Links and Services",
    body: [
      "Our website and communications may include links to third-party websites, tools, payment processors, learning platforms, social networks, app stores, cloud services, or integrations that we do not control.",
      "This Privacy Policy applies only to SmartTech-controlled websites and services. We encourage you to review the privacy policies of any third-party service before sharing information with them.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We keep information only for as long as reasonably necessary for the purposes described in this policy, including service delivery, business records, security, dispute resolution, legal compliance, and legitimate operational needs.",
      "Inquiry and project records may be retained for future reference unless deletion is requested and no legal or contractual reason requires retention. Newsletter subscribers may unsubscribe at any time. Where information is no longer needed, we will delete, anonymize, or securely archive it where practical.",
    ],
  },
  {
    title: "8. Data Security",
    body: [
      "We use reasonable technical, administrative, and organizational safeguards designed to protect information from unauthorized access, disclosure, alteration, misuse, or loss.",
      "No internet transmission or electronic storage method is completely secure. If you believe your information or account has been compromised, please contact us immediately.",
    ],
  },
  {
    title: "9. Your Rights and Choices",
    body: [
      "Depending on your location and applicable law, you may have rights to access, correct, update, delete, restrict, export, or object to certain processing of your personal information.",
      "You may opt out of marketing emails by using the unsubscribe link in our emails or by contacting us. You may also manage cookies through your browser settings and opt out of some analytics tools through provider-level controls.",
    ],
    items: [
      "Request access to the personal information we hold about you.",
      "Ask us to correct inaccurate or incomplete information.",
      "Request deletion of personal information, subject to legal, contractual, security, and business record obligations.",
      "Object to or restrict certain processing activities where applicable.",
      "Request a portable copy of certain data where required by law.",
      "Lodge a complaint with a relevant data protection authority if you believe your rights have been violated.",
    ],
  },
  {
    title: "10. International Users",
    body: [
      "SmartTech works with clients, students, partners, and service providers across different regions. Your information may be processed in countries other than your own, where privacy laws may differ.",
      "When we transfer or process information across borders, we take reasonable steps to protect it in line with this Privacy Policy and applicable legal requirements.",
    ],
  },
  {
    title: "11. Children's Privacy",
    body: [
      "Our website and services are not directed to children under the age required by applicable privacy laws. We do not knowingly collect personal information from children without appropriate consent.",
      "If you believe a child has provided personal information to us without proper consent, please contact us and we will take reasonable steps to delete it.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, technology, legal requirements, or business operations.",
      "When we update the policy, we will revise the effective date on this page. Continued use of our website or services after changes are posted means you accept the updated policy.",
    ],
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <main className="rbt-main-wrapper">
      <div className="rbt-overlay-page-wrapper">
        <div className="breadcrumb-image-container breadcrumb-style-max-width">
          <div className="breadcrumb-image-wrapper">
            <div className="breadcrumb-dark">
              <Image src={bgImage} alt="SmartTech privacy policy" />
            </div>
          </div>
          <div className="breadcrumb-content-top text-center">
            <h1 className="title">Privacy Policy</h1>
            <p className="mb--20">
              How SmartTech collects, uses, protects, and manages your information.
            </p>
            <ul className="page-list">
              <li className="rbt-breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li>
                <div className="icon-right">
                  <i className="feather-chevron-right"></i>
                </div>
              </li>
              <li className="rbt-breadcrumb-item active">Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
          <div className="rbt-article-content-wrapper">
            <div className="content">
              <div className="mb--40">
                <p className="description has-medium-font-size">
                  Effective date: June 18, 2026
                </p>
                <p className="mt--20">
                  This Privacy Policy is written for clients, students, visitors, partners, and
                  subscribers who interact with SmartTech online or through our services. It explains
                  what we collect, why we collect it, when we share it, and the choices available to
                  you.
                </p>
              </div>

              {privacySections.map((section) => (
                <section className="mb--35" key={section.title}>
                  <h4>{section.title}</h4>
                  {section.body.map((paragraph) => (
                    <p className="mt--15" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}

                  {section.items ? (
                    <ul className="rbt-list-style-1 mt--20">
                      {section.items.map((item) => (
                        <li key={item}>
                          <i className="feather-check"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.lists
                    ? section.lists.map((list) => (
                        <div className="mt--20" key={list.label}>
                          <h6>{list.label}</h6>
                          <ul className="rbt-list-style-1 mt--10">
                            {list.items.map((item) => (
                              <li key={item}>
                                <i className="feather-check"></i>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    : null}
                </section>
              ))}

              <section className="mb--35">
                <h4>13. Contact Us</h4>
                <p className="mt--15">
                  If you have questions, concerns, or requests about this Privacy Policy or how we
                  handle your information, contact us at{" "}
                  <Link href={`mailto:${CONFIG.EMAIL_1}`}>{CONFIG.EMAIL_1}</Link> or{" "}
                  <Link href={`tel:${CONFIG.PHONE_1}`}>{CONFIG.PHONE_1}</Link>.
                </p>
                <p className="mt--15">
                  Mailing address: {CONFIG.ADDRESS}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>








      <div
        className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap"
        style={{ background: `url(${image_url("../app_images/bg/dots.png")}) repeat center/auto` }}
      >
        <Newsletter />
      </div>


    </main>
  );
};

export default PrivacyPolicy;
