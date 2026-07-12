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

import Two_Dimension_Art_Services from "@/my_components/_Services/InnerPages/Two_Dimension_Art_Services";

import Footer from "@/my_components/Footer/Footer";




const Two_Dimension_Art = () => {

    return (

        <>

            <PageHead
                title="2D Art Services | SmartTech Solutions"
                description="SmartTech Solutions crafts bespoke 2D art — from sleek corporate visuals to whimsical illustrations — for brands across tech, healthcare, and entertainment."
                image="/app_images/services/service_images/smarttech_2d_arts.png"
                path="/services/2D-arts"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <Two_Dimension_Art_Services />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default Two_Dimension_Art;
