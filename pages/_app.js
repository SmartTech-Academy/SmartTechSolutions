import React, { useEffect } from "react";

import "bootstrap/scss/bootstrap.scss";
import "../public/scss/default/euclid-circulara.scss";

// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
import "../public/css/plugins/euclid-circulara.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
// ========= Plugins CSS END =========

// ========= Global Effects CSS =========
import "../public/css/global-effects.css";
// ========= Global Effects CSS END =========

import "../public/scss/styles.scss";

// ========= Page-level CSS START =========
import "../public/css/pages/Hero.css";
import "../public/css/pages/HomepageSections.css";
import "../public/css/pages/Services.css";
import "../public/css/pages/MobileAppDevelopmentServices.css";
import "../public/css/pages/ServicePages.css";
import "../public/css/pages/Industries.css";
import "../public/css/pages/Careers.css";
import "../public/css/pages/Cybersecurity.css";
import "../public/css/pages/Solutions.css";
import "../public/css/pages/BookAppointment.css";
import "../public/css/pages/Contact.css";
import "../public/css/pages/Blog.css";
import "../public/css/pages/ProcessProcedures.css";
import "../public/css/pages/DigistateProject.css";
import "../public/css/pages/JpgcProject.css";
import "../public/css/pages/FlatshareProject.css";
import "../public/css/pages/DtsProject.css";
import "../public/css/pages/GeoploxProject.css";
import "../public/css/pages/XabiProject.css";
import "../public/css/pages/LodapointProject.css";
import "../public/css/pages/MfmEbookProject.css";
import "../public/css/pages/JpgcAndNftProject.css";
// ========= Page-level CSS END =========

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

import { ROUTE } from "@/route/app_routes";
import { CONFIG } from "@/app_config.js";

import GlobalImageLoadingEffect from "@/my_components/_Global/GlobalImageLoadingEffect";
import RouteTransition from "@/my_components/_Global/RouteTransition";
import RouteProgressBar from "@/my_components/_Global/RouteProgressBar";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");


  }, []);

  // return <Component {...pageProps} />;
  return (
    <Provider store={Store}>
      <Context>
        <RouteProgressBar />
        <GlobalImageLoadingEffect />
        <RouteTransition>
          <Component {...pageProps} />
        </RouteTransition>
      </Context>
    </Provider>
  );

}
