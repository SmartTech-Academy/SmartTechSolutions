import Image from "next/image";
import Link from "next/link";

import SectionHead from "./SectionHead";
import { image_url } from "@/helper/Utilities";

const OurProcess = () => {

  const tag = "";
  const title_ = "Our Product Development Process";
  const description = "With over a decade of experience under our belt, we've meticulously honed our product process from concept to scale. Rest assured, you're in capable hands.";



  return (
    <>

      <div className="container">

        <SectionHead tag={tag} title={title_} desc={description} />

        <div className="row g-5">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 order-2 order-lg-1">
            <div className="advance-tab-button advance-tab-button-1">
              <ul className="nav nav-tabs tab-button-list" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation" key="1" style={{ padding: "0 0 0 0 !immportant" }}>
                    <Link href="#" className="nav-link tab-button active" id="IdeateAndDesign-tab" data-bs-toggle="tab" data-bs-target="#IdeateAndDesign" role="tab" aria-controls="IdeateAndDesign" style={{ padding: "0 0 0 0 !immportant" }} aria-selected="true">
                      <div className="tab">
                        <h4 className="title"> Ideation <span class="theme-gradient">and Design</span> </h4>
                        <p className="description"> We analyze your vision to create a minimal viable product (MVP) that maximizes value and user satisfaction </p>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item" role="presentation" key="2">
                    <Link href="#" className="nav-link tab-button" id="Develop-tab" data-bs-toggle="tab" data-bs-target="#Develop" role="tab" aria-controls="Develop" aria-selected="false">
                      <div className="tab">
                        <h4 className="title"> Development </h4>
                        <p className="description"> Delivering end-to-end solutions through feasibility assessments, smart architecture, and agile methods for quality results </p>
                      </div>
                    </Link>
                  </li>

                  <li className="nav-item" role="presentation" key="3">
                    <Link href="#" className="nav-link tab-button" id="TestAndLaunch-tab" data-bs-toggle="tab" data-bs-target="#TestAndLaunch" role="tab" aria-controls="TestAndLaunch" aria-selected="false">
                      <div className="tab">
                        <h4 className="title"> Test, launch <span class="theme-gradient">and support</span> </h4>
                        <p className="description"> Ensuring top quality and reliability with comprehensive QA, seamless launch, and dedicated post-launch support </p>
                      </div>
                    </Link>
                  </li>
              </ul>
            </div>
          </div>




          <div className="col-lg-8 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
            <div className="tab-content">
                <div className="tab-pane fade advance-tab-content-1 active show" id="IdeateAndDesign" role="tabpanel" aria-labelledby="IdeateAndDesign-tab" key="1">
                  <div className="thumbnail">
                    <Image src={image_url("/app_images/services/service_tab_3.webp", true)} width={860} height={620} alt="advance-tab-image" />
                  </div>
                </div>

                <div className="tab-pane fade advance-tab-content-1" id="Develop" role="tabpanel" aria-labelledby="Develop-tab" key="2">
                  <div className="thumbnail">
                    <Image src={image_url("/app_images/services/service_tab_1.webp", true)} width={860} height={620} alt="advance-tab-image" />
                  </div>
                </div>

                <div className="tab-pane fade advance-tab-content-1" id="TestAndLaunch" role="tabpanel" aria-labelledby="TestAndLaunch-tab" key="3">
                  <div className="thumbnail">
                    <Image src={image_url("/app_images/services/service_tab_2.webp", true)} width={860} height={620} alt="advance-tab-image" />
                  </div>
                </div>
            </div>
          </div>


        </div>
      </div>

    </>

  );

};


export default OurProcess;
