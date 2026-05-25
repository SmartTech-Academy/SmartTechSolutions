import Image from "next/image";

import CourseData from "@/data/elements/accordion.json";

import { image_url, dangerouslySetInnerHTML } from "@/helper/Utilities";


const ServiceFaq = ({ data }) => {

  return (

    <>
    
      {data && data.map((data, index) => (

          <div className="container" key={index}>
            <div className="row mb--50">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  {data.tag ? ( <span className="subtitle bg-pink-opacity">{data.tag}</span> ) : ( "" )}
                  <h2 className="title">{data.title}</h2>
                </div>
              </div>
            </div>


            <div className="row g-5 align-items-start">
              <div className="col-lg-7 order-2 order-lg-1">
                <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion">
                  <div className="accordion" id="tutionaccordionExamplea1">
                    {data.faqBody.map((item, innerIndex) => (
                      <div className="accordion-item card" key={innerIndex}>
                        <h2 className="accordion-header card-header" id={item.heading}>
                          <button className={`accordion-button ${ !item.collapsed ? "collapsed" : "" }`} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.collapse}`} aria-expanded={item.expanded} aria-controls={item.collapse}>
                            {item.subTitle}
                          </button>
                        </h2>
                        <div id={item.collapse} className={`accordion-collapse collapse ${item.show ? "show" : "" }`} aria-labelledby={item.heading} data-bs-parent="#tutionaccordionExamplea1">
                          <div className="accordion-body card-body">
                            {dangerouslySetInnerHTML(item.text)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-5 order-1 order-lg-2">
                <div className="thumbnail">
                  <Image className="radius-6" src={image_url(data.img)} width={526} height={644} alt="SmartTech Academy Web Development image" />
                </div>
              </div>
            </div>

          </div>

        ))}

    </>

  );

};

export default ServiceFaq;
