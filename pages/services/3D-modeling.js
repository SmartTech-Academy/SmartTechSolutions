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

import Three_Dimension_Modeling_Services from "@/my_components/_Services/InnerPages/Three_Dimension_Modeling_Services";

import Footer from "@/my_components/Footer/Footer";




const Three_Dimension_Modeling = () => {

    return (

        <>

            <PageHead
                title="3D Modeling Services | SmartTech Solutions"
                description="SmartTech Solutions turns real products into detailed low-poly and high-poly 3D models for marketing research, rapid prototyping, and standout product promotion."
                image="/app_images/services/service_images/smarttech_3d_modeling.png"
                path="/services/3D-modeling"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <Three_Dimension_Modeling_Services />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default Three_Dimension_Modeling;
