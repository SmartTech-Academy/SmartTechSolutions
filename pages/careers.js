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

import CareersPage from "@/my_components/_Careers/CareersPage";

const Careers = () => {
  return (
    <>
      <PageHead
        title="Careers at SmartTech Solutions | Join Our Team"
        description="Join SmartTech Solutions — a senior, remote-friendly team building web, mobile, AI, and blockchain products for real clients. See open roles and our hiring process."
        image="/app_images/careers/careers_hero.webp"
        path="/careers"
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
          <Cart />

          <CareersPage />

          <BackToTop />
          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default Careers;
