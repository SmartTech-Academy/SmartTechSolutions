import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Link from "next/link";

import PageHead from "@/pages/Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
// import EventsOnSmartTech from "@/my_components/_Events/EventsOnSmartTech";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";

import ProductDesignServices from "@/my_components/_Services/InnerPages/ProductDesignServices";

import Footer from "@/my_components/Footer/Footer";




const ProductDesign = () => {

    return (

        <>

            <PageHead
                title="Product Design Services | SmartTech Solutions"
                description="SmartTech Solutions turns ideas into visually striking, user-centric products — UX research, interface design, prototypes, and design systems that build brand loyalty."
                image="/app_images/services/service_images/smarttech_uiux.png"
                path="/services/product-design"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <ProductDesignServices />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default ProductDesign;
