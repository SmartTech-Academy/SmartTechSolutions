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

import GeoploxProject from "@/my_components/_Projects/InnerPages/GeoploxProject";

import Footer from "@/my_components/Footer/Footer";




const Geoplox = () => {

    return (

        <>

            <PageHead
                title="Geoplox: Real Estate Intelligence Platform | SmartTech Solutions"
                description="How SmartTech Solutions built Geoplox, a neutral property intelligence platform connecting developers, investors, and agents with trusted, real-time real estate data."
                image="/app_images/projects/geoplox/geoplox_display_picture.png"
                path="/projects/geoplox"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <GeoploxProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default Geoplox;
