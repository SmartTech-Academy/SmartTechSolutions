import PageHead from "../Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import ContactUs from "@/my_components/_Contact/ContactUs";
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
          title="Contact Us | SmartTech Solutions"
          description="Got an idea for your project? Get in touch with SmartTech Solutions to discuss your web, mobile, AI, or blockchain build and get a response from our team."
          image="/app_images/contact_and_office_img/contact_hero_bg.webp"
          path="/contact"
        />

        <Provider store={Store}>
            <Context>
                <MobileMenu />
                <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
                <Cart />
                
                <ContactUs />
                <BackToTop />

                <Separator />
                <Footer />
            </Context>
        </Provider>

    </>

  );

};

export default index;
