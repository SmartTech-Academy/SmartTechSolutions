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

import DigistateProject from "@/my_components/_Projects/InnerPages/DigistateProject";

import Footer from "@/my_components/Footer/Footer";




const Digistate = () => {

    return (

        <>

            <PageHead
                title="Digistate: Tokenized Real Estate Platform | SmartTech Solutions"
                description="How SmartTech Solutions built Digistate — a blockchain platform tokenizing real estate for fractional investment, with a live exchange and 5 role-based dashboards."
                image="/app_images/projects/digistate/website/exchange-page.png"
                path="/projects/digistate"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <DigistateProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default Digistate;
