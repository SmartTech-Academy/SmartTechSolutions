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

import IndustriesHub from "@/my_components/_Industries/IndustriesHub";

const IndustriesPage = () => {
  return (
    <>
      <PageHead
        title="Industries We Serve | SmartTech Solutions"
        description="SmartTech Solutions builds software for 16 industries — from real estate and fintech to healthcare and logistics — shaped by real products we've shipped, not generic templates."
        image="/app_images/industries/real-estate.webp"
        path="/industries"
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
          <Cart />

          <IndustriesHub />

          <BackToTop />
          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default IndustriesPage;
