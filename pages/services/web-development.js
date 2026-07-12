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

import WebDevelopmentServices from "@/my_components/_Services/InnerPages/WebDevelopmentServices";

import Footer from "@/my_components/Footer/Footer";




const WebDevelopment = () => {

    return (

        <>

            <PageHead
                title="Web Application Development Services | SmartTech Solutions"
                description="SmartTech Solutions builds reliable, user-friendly web applications, portals, and dashboards engineered for flawless performance and a seamless experience on every platform."
                image="/app_images/services/service_images/smarttech_web_development.png"
                path="/services/web-development"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <WebDevelopmentServices />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default WebDevelopment;
