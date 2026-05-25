
const Services = ({ data }) => {

  return (

    <div className={`row row--15 mt_dec--30`}>

      {data.map((item, index) => (
        
        <div className="col-12 col-sm-6 col-md-4 mt--30" key={index}>
          <div className={"service-card service-card-6 variation-2 rbt-hover-02"}>
            <div className="inner">
              <div className="content">
                <h4 className={`rbt-card-title`}>{item.title}</h4>
                <p className="has-medium-font-size"> {item.desc} </p>
              </div>
            </div>
          </div>
        </div>

      ))}

    </div>

  );

};

export default Services;
