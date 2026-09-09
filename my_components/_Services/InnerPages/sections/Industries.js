// Cycled per-card so the grid doesn't read as one undifferentiated block —
// each industry gets its own accent (used for the icon, the ghost
// watermark, and the hover glow) while staying inside the brand's existing
// blue/purple pair plus two harmonious supporting tones.
const ACCENTS = [
  "47 87 239",   // brand blue
  "185 102 231", // brand purple
  "45 197 168",  // teal
  "245 166 35",  // amber
];

const Industries = ({ data, type = "light", variant = "pastel" }) => {

  const isDark = variant === "dark-glass";

  return (

    <div className="row row--15 mt_dec--30">

      {data.map((industries, index) => (

        <div className="col-12 col-sm-6 col-md-4 mt--30" key={index}>
          <div
            className={
              isDark
                ? "service-card service-card-6 variation-2 rbt-hover rbt-industries-card--dark"
                : "service-card service-card-6 bg-color bg-card-color-" + industries.bg_color_style + " variation-2 rbt-hover"
            }
            style={isDark ? { "--accent": ACCENTS[index % ACCENTS.length] } : undefined}
          >
            <div className="inner">
              {industries.icon ? (
                <i className={`rbt-industry-card__watermark feather-${industries.icon}`} aria-hidden="true"></i>
              ) : null}
              <div className="content">
                {industries.icon ? (
                  <span className="rbt-industry-icon" aria-hidden="true">
                    <i className={`feather-${industries.icon}`}></i>
                  </span>
                ) : null}
                <h4 className={`rbt-card-title${type === "light" && !isDark ? "" : " color-white"}`}>{industries.title}</h4>
                <p className="has-medium-font-size"> {industries.desc} </p>

                <ul className="rbt-meta rbt-meta-badge mb--20">
                  {industries.apps.map((applications, Innerindex) => (
                    <li key={Innerindex}><span className="rbt-badge-2">{applications}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      ))}

    </div>

  );

};

export default Industries;
