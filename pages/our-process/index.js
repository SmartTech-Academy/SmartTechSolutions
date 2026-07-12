import PageHead from "../Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import ContactUs from "@/my_components/_Contact/ContactUs";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";

import SmartTechProcess from "@/my_components/_OurProcess/SmartTechProcess";


import BackToTop from "@/my_components/BackToTop/BackToTop_1";
import { CONFIG } from "@/app_config.js";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Footer from "@/my_components/Footer/Footer";

const index = () => {


  return (

    <>

        <PageHead
          title="Our Process | SmartTech Solutions"
          description="From discovery to launch support, see how SmartTech Solutions plans, designs, builds, and ships web, mobile, AI, and blockchain products with precision at every phase."
          path="/our-process"
        />

        <Provider store={Store}>
            <Context>
                <MobileMenu />
                <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
                <Cart />

                <SmartTechProcess />
                <BackToTop />

                <Separator />
                <Footer />
            </Context>
        </Provider>

    </>

  );

};

export default index;
