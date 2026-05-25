
const Industries = ({ data, type = "light" }) => {

  return (

    <div className="row row--15 mt_dec--30">

      {data.map((industries, index) => (
        
        <div className="col-12 col-sm-6 col-md-4 mt--30" key={index}>
          {/* <div className="service-card service-card-6"> */}
          <div className={"service-card service-card-6 bg-color bg-card-color-"+industries.bg_color_style+" variation-2 rbt-hover"}>
            <div className="inner">
              <div className="content">
                <h4 className={`rbt-card-title${type === "light" ? "" : " color-white"}`}>{industries.title}</h4>
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
