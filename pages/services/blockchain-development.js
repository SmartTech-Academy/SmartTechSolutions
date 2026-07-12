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

import BlockchainDevelopmentServices from "@/my_components/_Services/InnerPages/BlockchainDevelopmentServices";

import Footer from "@/my_components/Footer/Footer";




const BlockchainDevelopment = () => {

    return (

        <>

            <PageHead
                title="Blockchain Development Services | SmartTech Solutions"
                description="SmartTech Solutions builds secure, scalable blockchain products — tokens, smart contracts, NFT marketplaces, and crypto wallets — for businesses ready to go on-chain."
                image="/app_images/services/service_images/smarttech_blockchain_development.webp"
                path="/services/blockchain-development"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <BlockchainDevelopmentServices />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default BlockchainDevelopment;
