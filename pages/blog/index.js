import PageHead from "../Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import ContactUs from "@/my_components/_Contact/ContactUs";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";

import AllBlogs from "@/my_components/_Blog/AllBlogs";


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
          title="Blog | SmartTech Solutions"
          description="Ideas, engineering, and innovation notes from SmartTech Solutions — product deep-dives, engineering breakdowns, AI experiments, and build-in-public stories."
          image="/app_images/blog/blog_hero_bg.webp"
          path="/blog"
        />

        <Provider store={Store}>
            <Context>
                <MobileMenu />
                <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
                <Cart />

                <AllBlogs />
                <BackToTop />

                <Separator />
                <Footer />
            </Context>
        </Provider>

    </>

  );

};

export default index;
