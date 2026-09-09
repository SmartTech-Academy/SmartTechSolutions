const Industries = ({ data }) => {

  return (

    <div className="row row--15 mt_dec--30">

      {data.map((industries, index) => (

        <div className="col-12 col-sm-6 col-md-4 mt--30" key={index}>
          <div className="service-card service-card-6 variation-2 rbt-hover rbt-industries-card">
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
                <h4 className="rbt-card-title">{industries.title}</h4>
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
