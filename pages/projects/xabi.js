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

import XabiProject from "@/my_components/_Projects/InnerPages/XabiProject";

import Footer from "@/my_components/Footer/Footer";




const Xabi = () => {

    return (

        <>

            <PageHead
                title="Xabi: Rental Savings & Fintech Platform | SmartTech Solutions"
                description="How SmartTech Solutions built Xabi — a rental savings, loan, wallet, and property marketplace platform delivered across web, iOS, and Android from one codebase."
                image="/app_images/projects/xabi/xabi_display_picture.png"
                path="/projects/xabi"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <XabiProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default Xabi;
