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

import NftMarketplaceDevelopmentServices from "@/my_components/_Services/InnerPages/NftMarketplaceDevelopmentServices";

import Footer from "@/my_components/Footer/Footer";




const NftMarketplaceDevelopment = () => {

    return (

        <>

            <PageHead title="NFT Marketplace Development Services | SmartTech Solutions" />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <NftMarketplaceDevelopmentServices />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default NftMarketplaceDevelopment;
