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

import "../public/scss/styles.scss";

// ========= Page-level CSS START =========
import "../public/css/pages/DigistateProject.css";
import "../public/css/pages/JpgcProject.css";
import "../public/css/pages/FlatshareProject.css";
// ========= Page-level CSS END =========

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

import { ROUTE } from "@/route/app_routes";
import { CONFIG } from "@/app_config.js";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");


  }, []);

  // return <Component {...pageProps} />;
  return (
    <Provider store={Store}>
      <Context>
        <Component {...pageProps} />
      </Context>
    </Provider>
  );

}
