import Content from "./sections/Content";
import CourseBanner from "./sections/Course-Banner";
import CourseMenu from "./sections/Course-Menu";
// import Featured from "./sections/Featured";
import Instructor from "./sections/Instructor";
import Overview from "./sections/Overview";
import RelatedCourse from "./sections/RelatedCourse";
import Requirements from "./sections/Requirements";
// import Review from "./sections/Review";
import Viedo from "./sections/Viedo";

import { image_url } from "@/helper/Utilities";



const CourseDetailsOne = ({ checkMatchCourses }) => {
  return (
    <> 
      <div className="col-lg-8">
        <div className="course-details-content">
          <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
            {checkMatchCourses.courseImg && (
              <CourseBanner bannerImg={image_url("/app_images/course/course-banner.webp")} />
            )}
          </div>
          <div className="rbt-inner-onepage-navigation sticky-top mt--30">
            <CourseMenu />
          </div>

          {checkMatchCourses &&
            checkMatchCourses.courseOverview.map((data, index) => (
              <Overview {...data} key={index} checkMatchCourses={data} />
            ))}

          <div
            className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
            id="coursecontent"
          >
            {checkMatchCourses &&
              checkMatchCourses.courseContent.map((data, index) => (
                <Content {...data} key={index} checkMatchCourses={data} />
              ))}
          </div>

          <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
            <div className="row g-5">
              {checkMatchCourses &&
                checkMatchCourses.courseRequirement.map((data, index) => (
                  <Requirements
                    {...data}
                    key={index}
                    checkMatchCourses={data}
                  />
                ))}
            </div>
          </div>
          <div className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30" id="intructor">
            {checkMatchCourses &&
              checkMatchCourses.courseInstructor.map((data, index) => (
                <Instructor {...data} key={index} checkMatchCourses={data} />
              ))}
          </div>
          {/* <div className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30" id="review">
            <Review />
          </div> */}

          {/* {checkMatchCourses &&
            checkMatchCourses.featuredReview.map((data, index) => (
              <Featured {...data} key={index} coursesFeatured={data} />
            ))} */}
        </div>
        <div className="related-course mt--60">
          {checkMatchCourses &&
            checkMatchCourses.relatedCourse.map((data, index) => (
              <RelatedCourse {...data} key={index} checkMatchCourses={data} />
            ))}
        </div>
      </div>

      <div className="col-lg-4">
        <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
          <div className="inner">
            <Viedo checkMatchCourses={checkMatchCourses && checkMatchCourses} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsOne;
