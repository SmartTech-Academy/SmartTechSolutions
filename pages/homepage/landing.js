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
      <PageHead title="Home | SmartTech Academy" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" />
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
