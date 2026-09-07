import React, { useEffect } from "react";
import Script from "next/script";

import "bootstrap/scss/bootstrap.scss";
// The only Euclid Circular @font-face import — public/css/plugins/euclid-
// circulara.css used to be imported too (below), but it's a stale compiled
// copy of this exact file (same 10 @font-face rules, byte-for-byte
// identical font URLs) minus `font-display: swap`, so every page shipped
// the same font declarations twice and the later, swap-less copy could win
// the cascade for font-display. Removed there instead of duplicated here.
import "../public/scss/default/euclid-circulara.scss";

// ========= Plugins CSS START =========
import "../node_modules/sal.js/dist/sal.css";
import "../public/css/plugins/fontawesome.min.css";
import "../public/css/plugins/feather.css";
import "../public/css/plugins/odometer.css";
import "../public/css/plugins/animation.css";
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

      {/* Google Analytics (gtag.js) — afterInteractive: fires once the page
          is interactive, same timing Next.js recommends for GA so it never
          competes with the initial render/hydration for main-thread time. */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-P4VX9EEPCC"
      />
      <Script id="ga-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P4VX9EEPCC');
        `}
      </Script>

      {/* Tawk.to live chat — lazyOnload: a chat widget isn't needed for the
          first paint or for anything above the fold, so it loads dead last,
          once the browser is idle, instead of competing with real content
          for bandwidth/main-thread time during the page's critical path. */}
      <Script id="tawkto" strategy="lazyOnload">
        {`
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6a593f50e816a01d463923a3/1jtm9ulaq';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `}
      </Script>
    </Provider>
  );

}
