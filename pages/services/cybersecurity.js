import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

import PageHead from "@/pages/Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";
import Footer from "@/my_components/Footer/Footer";

import CybersecurityServices from "@/my_components/_Services/InnerPages/CybersecurityServices";

const Cybersecurity = () => {
  return (
    <>
      <PageHead
        title="Cybersecurity Services | SmartTech Solutions"
        description="SmartTech Solutions delivers full-stack cybersecurity — IAM, DLP, SIEM/SOAR, vulnerability management, 24/7 MDR/XDR monitoring, and incident response — built by the same team that engineers your software."
        image="/app_images/services/service_images/smarttech_cybersecurity.webp"
        path="/services/cybersecurity"
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
          <Cart />

          <CybersecurityServices />

          <BackToTop />
          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default Cybersecurity;
