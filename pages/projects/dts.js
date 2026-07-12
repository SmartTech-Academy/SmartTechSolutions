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

import DtsProject from "@/my_components/_Projects/InnerPages/DtsProject";

import Footer from "@/my_components/Footer/Footer";




const Dts = () => {

    return (

        <>

            <PageHead
                title="Disciple Training School (DTS) Case Study | SmartTech Solutions"
                description="See how SmartTech Solutions built DTS, a faith-based learning platform with live video classrooms, community forums, quizzes, and a spiritual growth tracker."
                image="/app_images/projects/dts/dts_display_picture.png"
                path="/projects/dts"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <DtsProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default Dts;
