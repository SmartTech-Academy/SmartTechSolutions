import Link from "next/link";
// import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";




const Contact = () => {


  return (

    <>


      <div className="row g-5">

        <div className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" key="1">
          <div className="rbt-address">
            <div className="icon"> <i className={"feather-headphones"}></i> </div>
            <div className="inner">
              <h4 className="title">{"Contact Phone Number"}</h4>
              <p> <Link href={CONFIG.PHONE_1}>{CONFIG.PHONE_1}</Link> </p>
              <p> <Link href={CONFIG.PHONE_2}>{CONFIG.PHONE_2}</Link> </p>
            </div>
          </div>
        </div>


        <div className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" key="1">
          <div className="rbt-address">
            <div className="icon"> <i className={"feather-mail "}></i> </div>
            <div className="inner">
              <h4 className="title">{"Our Email Address"}</h4>
              <p> <Link href={`mailto:${CONFIG.EMAIL_1}`}> {CONFIG.EMAIL_1} </Link> </p>
              <p> <Link href={`mailto:${CONFIG.EMAIL_2}`}> {CONFIG.EMAIL_2} </Link> </p>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" key="1">
          <div className="rbt-address">
            <div className="icon"> <i className={"feather-headphones"}></i> </div>
            <div className="inner">
              <h4 className="title">{"Contact Phone Number"}</h4>
              <p> <Link href={CONFIG.PHONE_1}>{CONFIG.PHONE_1}</Link> </p>
              <p> <Link href={CONFIG.PHONE_2}>{CONFIG.PHONE_2}</Link> </p>
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" key="1">
          <div className="rbt-address">
            <div className="icon"> <i className={"feather-mail "}></i> </div>
            <div className="inner">
              <h4 className="title">{"Our Email Address"}</h4>
              <p> <Link href={`mailto:${CONFIG.EMAIL_1}`}> {CONFIG.EMAIL_1} </Link> </p>
              <p> <Link href={`mailto:${CONFIG.EMAIL_2}`}> {CONFIG.EMAIL_2} </Link> </p>
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" key="1">
          <div className="rbt-address">
            <div className="icon"> <i className={"feather-map-pin"}></i> </div>
            <div className="inner">
              <h4 className="title">{"Our Location"}</h4>
              <p>{"5678 Bangla Main Road, cities 580 GBnagla, example 54786"}</p>
            </div>
          </div>
        </div> */}

      </div>


    </>

  );

};



export default Contact;
