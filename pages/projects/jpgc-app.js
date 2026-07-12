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

import JpgcProject from "@/my_components/_Projects/InnerPages/JpgcProject";

import Footer from "@/my_components/Footer/Footer";



const JpgcApp = () => {

    return (

        <>

            <PageHead
                title="JPGC App: Dual-Chain Token & NFT Marketplace | SmartTech Solutions"
                description="Inside the JPGC app — SmartTech Solutions' dual-chain wallet, token purchase, staking, and NFT marketplace experience spanning Solana, Ethereum, web, and mobile."
                image="/app_images/projects/jpgc_app/jpgc_display_picture.png"
                path="/projects/jpgc-app"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <JpgcProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default JpgcApp;
