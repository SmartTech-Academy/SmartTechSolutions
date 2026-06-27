import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";

import treeSvg from "@/public/images/icons/tree-shape.svg";







const ElegantBanner = () => {


  useEffect(() => {
    const typeitInstance = new Typed(".is-visible", {
      strings: ["Tech Product.", "Web App.", "Mobile App.", "3D Game", "AI Solution.", "Blockchain Project.", "AR/VR Experience."],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: Infinity,
      showCursor: false,
    });

    return () => {
      typeitInstance.destroy();
    };
  }, []);


  return (

    <>

      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-10 offset-lg-1">
            <div className="content">
              <div className="inner text-center">
                <div className="rbt-new-badge rbt-new-badge-one">
                  <span className="rbt-new-badge-icon">🏆</span> The Leader in Product Engineering
                </div>

                <h2 className="title"> Let's Build Your Next{" "} 
                  <span className="header-caption ms-2">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <b className="is-visible theme-gradient"></b>
                      </span>
                    </span>
                  </span>
                </h2>

                <p className="description has-medium-font-size mt--20">
                  {"From ambitious startups to established enterprises, we've helped organizations unlock new opportunities and accelerate growth. Yours could be our next success story."}
                </p>
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="shape-image">
          <Image src={treeSvg} width={912} height={513} alt="Shape" />
        </div>
      </div>

    </>

  );

};

export default ElegantBanner;
