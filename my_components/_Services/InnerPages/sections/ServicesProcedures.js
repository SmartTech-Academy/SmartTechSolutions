import { Fragment } from "react";

const ServicesProcedures = ({ data }) => {

  return (

    <div className="rbt-section-gapBottom">

      {data && data.map((data, index) => (

        <Fragment key={index}>

          <div className="wrapper cards-section" style={{ marginTop: '-220px', position: 'relative', zIndex: 2 }}>
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="rbt-card variation-02 rbt-hover card-minimal">
                    <div className="rbt-card-body">
                      <ul className="meta-list justify-content-start mb--30">
                        <li className="list-item"> <b className="b1"> <span>{data.number_1}</span> </b> </li>
                      </ul>
                      <h4 className="rbt-card-title">{data.title_1}</h4>
                      <p className="description has-medium-font-size"> {data.desc_1} </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12">
                  <div className="rbt-card variation-02 rbt-hover card-minimal">
                    <div className="rbt-card-body">
                      <ul className="meta-list justify-content-start mb--30">
                        <li className="list-item"> <b className="b1"> <span>{data.number_2}</span> </b> </li>
                      </ul>
                      <h4 className="rbt-card-title">{data.title_2}</h4>
                      <p className="description has-medium-font-size"> {data.desc_2} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wrapper remaining-cards" style={{ position: 'relative', zIndex: 1, marginTop: '50px' }}>
            <div className="container">
              <div className="row g-5">

                {data.serviceProcedureBodyRemains.map((item, innerIndex) => (
                  
                  <div className="col-lg-6 col-md-6 col-12" key={innerIndex + 2}>
                    <div className="rbt-card variation-02 rbt-hover card-minimal">
                      <div className="rbt-card-body">
                        <ul className="meta-list justify-content-start mb--30">
                          <li className="list-item"> <b className="b1"> <span>{item.number}</span> </b> </li>
                        </ul>
                        <h4 className="rbt-card-title">{item.title}</h4>
                        <p className="description has-medium-font-size"> {item.desc} </p>
                      </div>
                    </div>
                  </div>

                ))}

              </div>
            </div>
          </div>

        </Fragment>

      ))}

    </div>

  );

};

export default ServicesProcedures;
