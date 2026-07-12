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

import LodapointProject from "@/my_components/_Projects/InnerPages/LodapointProject";

import Footer from "@/my_components/Footer/Footer";




const Lodapoint = () => {

    return (

        <>

            <PageHead
                title="Lodapoint: Ride-Hailing & Logistics App | SmartTech Solutions"
                description="How SmartTech Solutions built Lodapoint — rider, driver, and transporter apps sharing one backend for real-time ride-hailing, deliveries, and freight dispatch."
                image="/app_images/projects/lodapoint/lodapoint_display_image.png"
                path="/projects/lodapoint"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <LodapointProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default Lodapoint;
