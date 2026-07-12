import Image from "next/image";
import Link from "next/link";

import { projects } from "@/my_data/projects/projects.js";
import ScrollRevealSection from "@/my_components/_Global/ScrollRevealSection";

// Same three case studies that lead the real "Our Projects" page — kept in
// sync from the single shared `projects` data module so the homepage never
// drifts from the actual project content/images again.
const FEATURED_PROJECT_IDS = [1, 2, 3];

const ProjectsCards = ({ invoked = "homepage" }) => {
  const featured = FEATURED_PROJECT_IDS
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);

  return (
    <>
      {featured.map((project, index) => (
        <ScrollRevealSection
          key={project.id}
          className="course-card mt--50 rbt-project-reveal"
          threshold={0.15}
        >
          <div
            className={"rbt-card variation-01 rbt-hover elegant-course card-list-2 rbt-project-card" + (invoked === "projects page" ? "" : " p-4")}
            style={{ "--reveal-delay": `${index * 0.12}s` }}
          >
            <div className="rbt-card-img rbt-project-card__img">
              <Link href={project.href}>
                <Image
                  src={project.cover}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  alt={`${project.name} project cover`}
                />
              </Link>
            </div>

            <div className="rbt-card-body">
              <h4 className="rbt-card-title"> <Link href={project.href}>{project.name}</Link> </h4>

              <ul className="rbt-meta mb--10">
                <li> <i className="feather-briefcase"></i> {project.industry} </li>
                <li> <i className="feather-users"></i> {project.team} </li>
              </ul>

              <p className="rbt-card-text">
                {project.description}
              </p>

              {invoked === "projects page" ? (
                <div className="rbt-card-bottom">
                  <div className="rbt-price"></div>
                  <Link className="rbt-btn-link left-icon" href={project.href}> <i className="feather-arrow-right"></i> View Details </Link>
                </div>
              ) : (
                <div className="read-more-btn">
                  <Link className="rbt-btn btn-gradient hover-icon-reverse" href={project.href}>
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View Details</span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                      <span className="btn-icon"><i className="feather-arrow-right"></i></span>
                    </span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </ScrollRevealSection>
      ))}
    </>
  );
};

export default ProjectsCards;
