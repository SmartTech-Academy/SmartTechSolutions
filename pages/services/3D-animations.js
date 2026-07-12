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

import Three_Dimension_Animations_Services from "@/my_components/_Services/InnerPages/Three_Dimension_Animations_Services";

import Footer from "@/my_components/Footer/Footer";




const Three_Dimension_Animations = () => {

    return (

        <>

            <PageHead
                title="3D Animation Services | SmartTech Solutions"
                description="SmartTech Solutions produces cinematic 3D animation — game trailers, product renders, architectural walkthroughs, and medical explainers with striking, immersive visuals."
                image="/app_images/services/service_images/smarttech_3d_animation.png"
                path="/services/3D-animations"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <Three_Dimension_Animations_Services />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default Three_Dimension_Animations;
