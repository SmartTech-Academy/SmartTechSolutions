import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Link from "next/link";

import PageHead from "@/pages/Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";

import SmartTechAcademyProject from "@/my_components/_Projects/InnerPages/SmartTechAcademyProject";

import Footer from "@/my_components/Footer/Footer";




const SmartTechAcademy = () => {

    return (

        <>

            <PageHead
                title="SmartTech Academy: Free Tech Education Platform | SmartTech Solutions"
                description="How SmartTech Solutions built SmartTech Academy, a free technology academy platform with live classrooms, events, and publicly verifiable certification, engineered for its own sister brand."
                image="/app_images/projects/smarttech_academy/desktop/home.webp"
                path="/projects/smarttech-academy"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />


                    <SmartTechAcademyProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default SmartTechAcademy;
