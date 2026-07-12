import PageHead from "../Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import Services from "@/my_components/_Services/Services";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Footer from "@/my_components/Footer/Footer";

const index = () => {

  return (

    <>

        <PageHead
          title="Our Services | SmartTech Solutions"
          description="Explore SmartTech Solutions' 12 service tracks — web, mobile, AI, blockchain, product design, and game development — delivered through 5 structured phases from strategy to launch."
          image="/app_images/services/services_hero_visual.webp"
          path="/services"
        />

        <Provider store={Store}>
            <Context>
                <MobileMenu />
                <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
                <Cart />
                
                <Services />
                
                <BackToTop />
                <Separator />
                <Footer />
            </Context>
        </Provider>

    </>

  );

};

export default index;
