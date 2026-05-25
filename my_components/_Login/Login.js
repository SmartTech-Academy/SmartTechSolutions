// import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// import Testimonial_2 from "@/my_components/Testimonials/Testimonial_2";
// import BlogGridMinimal from "@/my_components/Blogs/Components/BlogGridMinimal";
// import Newsletter_2 from "@/my_components/Newsletters/Newsletter_2";
// import EventCarouse from "@/my_components/Events/EventCarouse";

import LoginForm from "./sections/LoginForm";

import rightShape from "../../public/images/banner/right-shape.png";
import topShape from "../../public/images/banner/top-shape.png";
// import client1 from "../../public/images/testimonial/client-03.png";
// import client2 from "../../public/images/testimonial/client-04.png";
// import client3 from "../../public/images/testimonial/client-06.png";

// import { ROUTE } from "@/route/app_routes.js";
// import { image_url } from "../../helper/Utilities";









const Login = () => {

  const marqueeVariants = {
    animate: {
      x: [0, -1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        },
      },
    },
  };

  return (

    <>


        <div className="rbt-banner-area rbt-banner-3 header-transperent-spacer" style={{ paddingTop: 80 }}>
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-3"></div>

                <div className="col-lg-6">
                  <LoginForm />
                </div>

                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>

          <div className="shape-wrapper">
              <div className="left-shape">
                <Image
                  src={rightShape}
                  width={1205}
                  height={808}
                  alt="Banner Images"
                />
              </div>
              <div className="top-shape">
                <Image
                  src={topShape}
                  width={1163}
                  height={156}
                  alt="Banner Images"
                />
              </div>
              <motion.div
                className="track"
                variants={marqueeVariants}
                animate="animate"
              >
                {/* <div className="marque-images edumarque"></div> */}
              </motion.div>
            </div>
        </div>


    </>

  );

};

export default Login;
