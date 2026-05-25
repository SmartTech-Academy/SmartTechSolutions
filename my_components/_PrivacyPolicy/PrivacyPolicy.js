import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";
import Image from "next/image";


import CallToActionOne from "../../my_components/CallToAction/CallToActionOne";
// import TeamTwo from "../../components/Team/TeamTwo";
import BlogWidget from "../../my_components/Blogs/Widgets/BlogWidget";
import Testimonial_2 from "../Testimonials/Testimonial_2";
import Newsletter from "../../my_components/Newsletters/Newsletter";
// import { ParallaxProvider } from "react-scroll-parallax";
import EventCarouse from "@/my_components/Events/EventCarouse";

// import ElegantBanner from "./sections/ElegantBanner";
import ProjectsCards from "../Cards/ProjectsCards";


// HOME PAGE SECTIONS
// import { Banner } from "@/my_components/Landing/Home-Sections/Banner";
import Brands from "../TrustedByBrands/Brands";

// LOAD DATA
import SiteFaqData from "@/my_data/faq/faqs.json";

// CONFIGS AND ROUTE
import { ROUTE } from "@/route/app_routes.js";
import { CONFIG } from "@/app_config.js";
// import shapeImg from "../../public/images/icons/three-shape.png";
import { image_url, dangerouslySetInnerHTML } from "../../helper/Utilities";


import bgImage from "../../public/images/bg/bg-image-10.jpg";



const PrivacyPolicy = () => {

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);



  return (
    <>


      <main className="rbt-main-wrapper">






        <div className="rbt-overlay-page-wrapper">
          
          <div className="breadcrumb-image-container breadcrumb-style-max-width">
            <div className="breadcrumb-image-wrapper">
              <div className="breadcrumb-dark">
                <Image src={bgImage} alt="Education Images" />
              </div>
            </div>
            <div className="breadcrumb-content-top text-center">
              <h1 className="title">Privacy Policy</h1>
              <p className="mb--20">Histudy Course Privacy Policy Here.</p>
              <ul className="page-list">
                <li className="rbt-breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="feather-chevron-right"></i>
                  </div>
                </li>
                <li className="rbt-breadcrumb-item active">Purchase Guide</li>
              </ul>
            </div>
          </div>


          <div className="rbt-putchase-guide-area breadcrumb-style-max-width rbt-section-gapBottom">
            <div className="rbt-article-content-wrapper">
              <div className="post-thumbnail mb--30 position-relative wp-block-image alignwide">
                {/* <Image className="w-100" src={image_url("/images/blog/blog-single-03.png")} alt="Blog Images" /> */}
              </div>
              <div className="content">
                <h4>Welcome to Imroz Privacy Policy</h4>
                <ol>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur (the “Sites”).
                  </li>
                  <li>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </li>
                  <li>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </li>
                </ol>

                <h4>The type of personal information we collect</h4>

                <ol>
                  <li>
                    We collect certain personal information about visitors and
                    users of our Sites.{" "}
                    <Link href="http://rainbowit.net/themes/imroz">
                      http://rainbowit.net/themes/imroz
                    </Link>
                  </li>
                  <li>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur.
                  </li>
                </ol>

                <h4>How we collect personal information</h4>

                <ol>
                  <li>
                    I must explain to you how all this mistaken idea of denouncing
                    pleasure and praising pain was born and I will give you Link
                    complete account of the system, and expound the actual
                    teachings.
                  </li>
                  <li>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate
                    non provident similique sunt in culpa qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga.
                  </li>
                  <li>
                    On the other hand, we denounce with righteous indignation and
                    dislike men who are so beguiled and demoralized by the charms
                    of pleasure of the moment, so blinded by desire, that they
                    cannot foresee the pain and trouble that are bound to ensue;
                    and equal blame belongs to those who fail in their duty
                    through weakness of will, which is the same as saying through
                    shrinking from toil and pain. These cases are perfectly simple
                    and easy to distinguish. In Link free hour, when our power of
                    choice is untrammelled and when nothing prevents our being
                    able to do what we like best, every pleasure is to be welcomed
                    and every pain avoided. But in certain circumstances and owing
                    to the claims of duty or the obligations{" "}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>









        <div className="rbt-callto-action-area rbt-section-gapTop">
          <div className="wrapper rbt-callto-action rbt-cta-default style-4 bg-gradient-6 mt--10">
            <CallToActionOne btnClass="rbt-btn btn-gradient hover-icon-reverse radius-round" />
          </div>
        </div>






        <div className="rbt-newsletter-area bg-color-primary newsletter-style-2 rbt-section-gap" 
          style={{ background: "url("+image_url('../app_images/bg/dots.png')+") repeat center/auto" }}>
          <Newsletter />
        </div>

      </main>
    </>
  );
  
};



export default PrivacyPolicy;
