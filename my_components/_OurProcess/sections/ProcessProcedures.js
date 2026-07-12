const steps = [
  {
    number: "01/06",
    title: "Ideate",
    icon: "feather-compass",
    text: "By thoroughly understanding your vision, we develop a clear, goal-driven roadmap that aligns every decision with your desired outcomes and positions your product for success.",
  },
  {
    number: "02/06",
    title: "Design",
    icon: "feather-edit-3",
    text: "We craft high-impact minimal viable products (MVPs) that strike the perfect balance between design excellence and core functionalities, delivering meaningful value, validating concepts faster, and enhancing user satisfaction.",
  },
  {
    number: "03/06",
    title: "Develop",
    icon: "feather-code",
    text: "We develop end-to-end solutions with a strong emphasis on feasibility, robust architecture, and agile processes to accelerate delivery without compromising quality.",
  },
  {
    number: "04/06",
    title: "Test",
    icon: "feather-check-circle",
    text: "Ensuring your product delivers exceptional quality, reliability, and performance through rigorous QA and comprehensive testing across every user touchpoint.",
  },
  {
    number: "05/06",
    title: "Launch",
    icon: "feather-send",
    text: "Delivering successful product launches through tailored deployment strategies, seamless implementation, and dedicated post-launch support.",
  },
  {
    number: "06/06",
    title: "Support",
    icon: "feather-headphones",
    text: "Delivering ongoing support and continuous improvement to maximize product performance and long-term value.",
  },
];

const ProcessCard = ({ number, title, text, icon, delay }) => (
  <div className="col-lg-6 col-md-6 col-12">
    <div
      className="rbt-card variation-02 rbt-hover card-minimal rbt-process-card-pro"
      data-sal="slide-up"
      data-sal-delay={delay}
      data-sal-duration="700"
    >
      <div className="rbt-card-body">
        <div className="rbt-process-card-pro__top">
          <span className="rbt-process-card-pro__icon">
            <i className={icon}></i>
          </span>
          <b className="rbt-process-card-pro__number theme-gradient">{number}</b>
        </div>
        <h4 className="rbt-card-title">{title}</h4>
        <p className="description has-medium-font-size">{text}</p>
      </div>
    </div>
  </div>
);

/**
 * Renders the 6-step "how we work" card grid. The first two cards pull
 * up over the section above via a negative margin, so the caller's hero
 * must reserve enough bottom padding to match — pass `compact` for
 * shorter heroes so the pull-up (and its clearance) scale down together.
 */
const ProcessProcedures = ({ compact = false }) => {
  const topClass = `rbt-process-cards-top${compact ? " rbt-process-cards-top--compact" : ""}`;

  return (
    <div className="rbt-section-gapBottom">
      <div className={topClass}>
        <div className="container">
          <div className="row g-5">
            {steps.slice(0, 2).map((step, index) => (
              <ProcessCard key={step.number} {...step} delay={index * 120} />
            ))}
          </div>
        </div>
      </div>

      <div className="rbt-process-cards-bottom">
        <div className="container">
          <div className="row g-5">
            {steps.slice(2).map((step, index) => (
              <ProcessCard key={step.number} {...step} delay={index * 120} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessProcedures;
