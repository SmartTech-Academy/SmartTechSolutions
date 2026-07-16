import PageHead from "../Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import HomePageContents from "@/my_components/_HomePage/Home";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Footer from "@/my_components/Footer/Footer";

const Home = () => {
  return (
    <>
      <PageHead
        title="SmartTech Solutions | Web, Mobile, AI & Blockchain Development Studio"
        description="SmartTech Solutions builds web platforms, mobile apps, AI systems, blockchain products, and games for ambitious teams — 200+ projects delivered, 410+ satisfied clients."
        image="/app_images/banner/smarttech_hero_bg.webp"
        path="/"
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" topBarToggle="on" blendWithHero />
          <Cart />
          <HomePageContents />

          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default Home;
