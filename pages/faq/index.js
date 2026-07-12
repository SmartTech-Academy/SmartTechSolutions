import PageHead from "../Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import KnowledgeBase from "@/my_components/_FAQ/KnowledgeBase";
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
          title="FAQ | SmartTech Solutions"
          description="Answers to common questions about working with SmartTech Solutions — our process, pricing, timelines, and what it's like to build a product with our team."
          path="/faq"
        />

        <Provider store={Store}>
            <Context>
                <MobileMenu />
                <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                <Cart />
                
                <KnowledgeBase />
                <BackToTop />

                <Separator />
                <Footer />
            </Context>
        </Provider>

    </>

  );

};

export default index;
