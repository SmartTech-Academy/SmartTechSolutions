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

import AIDevelopmentServices from "@/my_components/_Services/InnerPages/AIDevelopmentServices";

import Footer from "@/my_components/Footer/Footer";




const AIDevelopment = () => {

    return (

        <>

            <PageHead
                title="AI Development Services | SmartTech Solutions"
                description="SmartTech Solutions builds applied AI features, automation, and intelligent workflows that turn your data into actionable insights and a decisive market edge."
                image="/app_images/services/service_images/smarttech_ai_development.png"
                path="/services/ai-development"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <AIDevelopmentServices />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default AIDevelopment;
