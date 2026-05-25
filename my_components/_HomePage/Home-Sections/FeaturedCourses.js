import Link from "next/link";
import Image from "next/image";

import { image_url } from "@/helper/Utilities";

import { CONFIG } from "@/app_config.js";



const FeaturedCourses = () => {

  const DATA = CONFIG.COURSES;

  return (

    <>
    
      {DATA && DATA.map((data, index) => (

        <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
          <div className="rbt-card variation-01 rbt-hover card-list-2">
            <div className="rbt-card-img">
              <Link href={data.course_details_link}>
                <Image src={image_url(data.courseImg)} width={231} height={324} alt="Card image" />
              </Link>
            </div>
            <div className="rbt-card-body">
              <div className="rbt-card-top">
                <div className="rbt-review">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  {/* <span className="rating-count">
                    ({data.review} Reviews)
                  </span> */}
                </div>
                <div className="rbt-bookmark-btn">
                  <Link className="rbt-round-btn" title="Bookmark" href="#">
                    <i className="feather-bookmark"></i>
                  </Link>
                </div>
              </div>

              <h4 className="rbt-card-title">
                <Link href={data.course_details_link}>
                  {data.courseTitle}
                </Link>
              </h4>

              <ul className="rbt-meta">
                <li> <i className="feather-book"></i> {data.lesson} Lessons </li>
                <li> <i className="feather-users"></i> {data.student}{" "} Students </li>
              </ul>

              <p className="rbt-card-text">
                {data.desc.substring(0, 50)}...
              </p>
              <div className="rbt-author-meta mb--10">
                <div className="rbt-avater">
                  <Link href="#">
                    <Image src={image_url(data.instructorImg)} width={33} height={33} alt={data.instructorName} />
                  </Link>
                </div>
                <div className="rbt-author-info">
                  By{" "}
                  <Link href={data.instructorProfile}>
                    {data.instructorName}
                  </Link>{" "}
                  {/* In <Link href="#">{data.userCategory}</Link> */}
                </div>
              </div>
              <div className="rbt-card-bottom">
                <div className="rbt-price">
                  <span className="current-price">$0</span>
                  {/* <span className="off-price">${data.offPrice}</span> */}
                </div>
                <Link className="rbt-btn-link" href={data.course_details_link}> Learn More <i className="feather-arrow-right"></i> </Link>
              </div>
            </div>
          </div>
        </div>

      ))}

    </>

  );

};



export default FeaturedCourses;
