import React, { useEffect } from "react";
import Link from "next/link";
import "plyr/dist/plyr.css";
import Plyr from "plyr";

import LessonSidebar from "@/my_components/Lesson/LessonSidebar";
import LessonPagination from "@/my_components/Lesson/LessonPagination";
import LessonTop from "@/my_components/Lesson/LessonTop";

import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";





const StudentEvents = () => {

  useEffect(() => {
    new Plyr(".rbtplayer", {
      muted: false,
      volume: 1,
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "fullscreen",
      ],
    });
  }, []);

  return (

    <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div className="rbt-lesson-leftsidebar">
            <LessonSidebar />
          </div>

          <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
            <LessonTop />
            <div className="inner">
              <div className="plyr__video-embed rbtplayer">
                <iframe className="w-100" src="https://www.youtube.com/embed/qKzhrXqT6oE" allowFullScreen allow="autoplay" style={{ minHeight: "615px" }}></iframe>
              </div>
              <div className="content">
                <div className="section-title">
                  <h4>About Lesson</h4>
                  <p>
                    Let us analyze the greatest hits of the past and learn what
                    makes these tracks so special.
                  </p>
                </div>
              </div>
            </div>
            <LessonPagination urlPrev="#" urlNext="/lesson-intro" />
          </div>
        </div>
      </div>

  );

};

export default StudentEvents;
