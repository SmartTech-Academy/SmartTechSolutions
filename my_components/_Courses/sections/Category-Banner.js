import Link from "next/link";

const CategoryBanner = () => {

  return (

    <>
      <div className="rbt-banner-content-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="page-list">
                <li className="rbt-breadcrumb-item"> <Link href="/">Home</Link> </li>
                <li> <div className="icon-right"> <i className="feather-chevron-right"></i> </div> </li>
                <li className="rbt-breadcrumb-item active"> {"All Courses"} </li>
              </ul>
              <div className=" title-wrapper">
                <h1 className="title mb--0"> {" "} {"All Courses"} </h1>
              </div>
              <p className="description">
                {"Empower your future with courses designed for growth, mastery, and lasting success."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );

};

export default CategoryBanner;
