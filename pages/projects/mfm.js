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

import MfmEbookProject from "@/my_components/_Projects/InnerPages/MfmEbookProject";

import Footer from "@/my_components/Footer/Footer";




const MFM = () => {

    return (

        <>

            <PageHead
                title="MFM eBook & eMusic App | SmartTech Solutions"
                description="A case study on the MFM eBook & eMusic app — SmartTech Solutions' secure offline reading and listening platform serving a global congregation in 120+ countries."
                image="/app_images/projects/mfm_ebooks/mfm_display_image.png"
                path="/projects/mfm"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <MfmEbookProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default MFM;
