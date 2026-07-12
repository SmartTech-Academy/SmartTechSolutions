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

import JpgcAndNftProject from "@/my_components/_Projects/InnerPages/JpgcAndNftProject";

import Footer from "@/my_components/Footer/Footer";




const JPGC = () => {

    return (

        <>

            <PageHead
                title="Japaul Gold Coin (JPGC) & NFT | SmartTech Solutions"
                description="A case study on JPGC — SmartTech Solutions' gold-backed, cross-chain token and NFT redemption system built on Solana and Ethereum, listed on BitMart."
                image="/app_images/projects/JPGC/SmartTechProject_japaul_gold_coin.png"
                path="/projects/jpgc"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <JpgcAndNftProject />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default JPGC;
