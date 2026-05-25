import Image from "next/image";
import { useRouter } from "next/router";

import CourseBreadcrumb from "./Course-Breadcrumb";

import bgImage from "@/public/app_images/bg/bg-image-10.jpg";

import CourseBreadcrumbTwo from "./CourseBreadcrumb-Two";

import { image_url } from "@/helper/Utilities";


const CourseHead = ({ checkMatch }) => {
  const router = useRouter();
  const path = router.pathname;

  // const bgImage = image_url("/app_images/bg/bg-image-10.jpg");

  return (
    <>
      {path === "/course-details-two/[courseId]" ? (
        <>
          <div className="container">
            <div className="row">
              <CourseBreadcrumbTwo getMatchCourse={checkMatch && checkMatch} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="breadcrumb-inner breadcrumb-dark">
            <Image src={bgImage} alt="Education Images" />
          </div>
          <div className="container">
            <div className="row">
              <CourseBreadcrumb getMatchCourse={checkMatch && checkMatch} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseHead;
