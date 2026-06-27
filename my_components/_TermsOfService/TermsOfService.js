import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import Newsletter from "../../my_components/Newsletters/Newsletter";
import { CONFIG } from "@/app_config.js";
import { image_url } from "../../helper/Utilities";

import bgImage from "../../public/images/bg/bg-image-10.jpg";

const termsSections = [
  {
    title: "1. Acceptance of These Terms",
    body: [
      `These Terms of Service govern your access to and use of ${CONFIG.APP_NAME} websites, digital products, software development services, training programs, consultation services, and related communications.`,
      "By using our website, requesting a quote, enrolling in a program, signing a proposal, paying an invoice, or otherwise engaging SmartTech, you confirm that you have read, understood, and agreed to these terms.",
    ],
  },
  {
    title: "2. Coverage and Scope",
    body: [
      "These terms apply to services, products, content, platforms, and websites owned or operated by SmartTech. They do not govern third-party websites, tools, payment processors, hosting providers, plugins, APIs, or platforms that we do not own or control.",
      "When a signed proposal, statement of work, service agreement, or invoice includes specific commercial terms, those project documents will apply together with these Terms. If there is a conflict, the signed project document takes priority for that project.",
    ],
  },
  {
    title: "3. Our Services",
    body: [
      "SmartTech provides services that may include website development, mobile application development, custom software development, blockchain and NFT solutions, game development, UI/UX design, MVP development, 3D modeling and animation, AI development, training, technical consulting, support, and maintenance.",
      "The exact scope, deliverables, timeline, pricing, revision limits, dependencies, and handover requirements for each engagement will be defined in the applicable proposal, invoice, service agreement, or written project brief.",
    ],
  },
  {
    title: "4. Client Responsibilities",
    body: [
      "You agree to provide accurate project requirements, content, credentials, approvals, brand assets, technical access, feedback, and payments on time. Delays in providing required information may affect delivery timelines and may require a revised schedule or budget.",
      "You are responsible for ensuring that any materials you provide to SmartTech, including text, images, videos, data, trademarks, code, and third-party assets, are lawful and properly licensed for use in the project.",
    ],
  },
  {
    title: "5. Project Delivery and Communication",
    body: [
      "We work professionally to deliver agreed services according to the approved scope and available client inputs. Delivery timelines are estimates unless a written agreement expressly states otherwise.",
      "SmartTech is not responsible for delays caused by incomplete information, late approvals, missed payments, third-party service issues, changes in scope, force majeure events, or communication gaps outside our control.",
    ],
  },
  {
    title: "6. Payments, Milestones, and Project Start",
    body: [
      "A project may not begin until the required deposit, milestone payment, purchase order, or written approval is received. Work may be paused if invoices are overdue or if required decisions and materials are not supplied.",
      "Fees are based on the agreed scope. New features, additional revisions, integrations, rush requests, licensing costs, hosting costs, third-party subscriptions, or work outside the approved scope may require a separate estimate or change request.",
    ],
  },
  {
    title: "7. Refund Eligibility",
    body: [
      "Refund requests are reviewed fairly and in relation to the approved scope, work already completed, resources assigned, third-party costs incurred, and the status of project deliverables.",
      "If a paid project has not started, SmartTech may approve a full or partial refund after deducting unavoidable transaction fees or committed third-party costs. Once strategy, design, development, research, consultation, training, or resource allocation has started, refunds are usually proportional to the uncompleted portion of the agreed work.",
      "Completed work, delivered milestones, approved designs, consultation sessions, training sessions, deployed code, purchased licenses, domain names, hosting, third-party subscriptions, and days already worked by assigned resources are non-refundable unless a signed agreement states otherwise.",
    ],
  },
  {
    title: "8. Dedicated Hiring and Retainers",
    body: [
      "For dedicated developers, designers, consultants, instructors, support staff, or monthly retainers, billing covers the reserved time and availability of the assigned resource or team.",
      "If you are dissatisfied with work in progress, you must notify the project manager or account contact immediately so concerns can be reviewed and corrected where reasonable. Discounts, credits, or adjustments will not usually be applied retroactively for issues that were not reported during the active billing period.",
    ],
  },
  {
    title: "9. Complaint and Dispute Resolution",
    body: [
      "If you are unhappy with any service, please contact us first so we can investigate and work toward a practical solution. We aim to resolve concerns through clear communication, documented expectations, and mutually acceptable remedies.",
      "Formal complaints, refund claims, chargebacks, or legal escalation should only be considered after you have given SmartTech a reasonable opportunity to review the issue and propose a resolution.",
    ],
  },
  {
    title: "10. Intellectual Property",
    body: [
      "Unless otherwise agreed in writing, SmartTech retains ownership of pre-existing tools, frameworks, reusable code, internal processes, concepts, templates, know-how, and background intellectual property used to deliver services.",
      "After full payment for the applicable project, you receive the agreed rights to final deliverables created specifically for you, subject to any third-party licenses, open-source licenses, usage restrictions, and unpaid balances.",
      "SmartTech may display completed work in portfolios, case studies, proposals, or marketing materials unless a written confidentiality agreement prohibits this.",
    ],
  },
  {
    title: "11. Website Use",
    body: [
      "You agree not to misuse our website or systems. Prohibited activity includes attempting unauthorized access, scraping content at scale, introducing malware, interfering with site operations, misrepresenting your identity, infringing intellectual property, or using our content for unlawful purposes.",
      "We may restrict access to our website, services, forms, accounts, or communication channels if we believe these terms are being violated or if activity creates a security, legal, or operational risk.",
    ],
  },
  {
    title: "12. Third-Party Services",
    body: [
      "Projects may rely on third-party services such as hosting providers, app stores, payment gateways, analytics platforms, cloud services, plugins, APIs, blockchain networks, AI services, email providers, and content delivery networks.",
      "SmartTech is not responsible for third-party downtime, pricing changes, policy changes, account suspensions, data loss, rejected submissions, or service limitations outside our control.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, SmartTech will not be liable for indirect, incidental, consequential, special, punitive, or business losses, including loss of revenue, profits, data, goodwill, opportunity, or expected savings.",
      "Where liability cannot be excluded, SmartTech's total liability will be limited to the amount paid for the specific portion of the service giving rise to the claim, or the uncompleted portion of the project, whichever is lower.",
    ],
  },
  {
    title: "14. Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time to reflect changes in our services, legal requirements, or business processes. The updated version will be posted on this page with a revised effective date.",
      "Continued use of our website or services after updates are posted means you accept the revised terms.",
    ],
  },
];

const TermsOfService = () => {
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
              <Image src={bgImage} alt="SmartTech terms of service" />
            </div>
          </div>
          <div className="breadcrumb-content-top text-center">
            <h1 className="title">Terms of Service</h1>
            <p className="mb--20">
              Clear terms for using our website, products, training, and digital services.
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
              <li className="rbt-breadcrumb-item active">Terms of Service</li>
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
                  These Terms of Service explain how clients, students, visitors, and partners may use
                  SmartTech services. They are written to keep expectations simple, practical, and fair
                  across software projects, training programs, consulting, support, and digital product
                  engagements.
                </p>
              </div>

              {termsSections.map((section) => (
                <section className="mb--35" key={section.title}>
                  <h4>{section.title}</h4>
                  {section.body.map((paragraph) => (
                    <p className="mt--15" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section className="mb--35">
                <h4>15. Contact Us</h4>
                <p className="mt--15">
                  If you have questions about these terms, a project agreement, refund request, or
                  service concern, contact us at{" "}
                  <Link href={`mailto:${CONFIG.EMAIL_1}`}>{CONFIG.EMAIL_1}</Link> or{" "}
                  <Link href={`tel:${CONFIG.PHONE_1}`}>{CONFIG.PHONE_1}</Link>.
                </p>
              </section>

              <p className="mt--30">
                These terms are provided for general business clarity and should be reviewed alongside
                any signed proposal, invoice, or service agreement connected to your project.
              </p>
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

export default TermsOfService;
