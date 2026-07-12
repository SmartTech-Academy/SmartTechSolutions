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

import GameDevelopmentServices from "@/my_components/_Services/InnerPages/GameDevelopmentServices";

import Footer from "@/my_components/Footer/Footer";




const GameDevelopment = () => {

    return (

        <>

            <PageHead
                title="Game Development Services | SmartTech Solutions"
                description="SmartTech Solutions builds immersive 2D, 3D, and NFT games in Unity and Unreal Engine — cinematic trailers, play-to-own mechanics, and cross-platform experiences."
                image="/app_images/services/service_images/smarttech_game_development.png"
                path="/services/game-development"
            />

            <Provider store={Store}>
                <Context>
                    <MobileMenu />
                    <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                    <Cart />

                    
                    <GameDevelopmentServices />


                    <BackToTop />

                    <Separator />
                    <Footer />
                </Context>
            </Provider>

        </>

    );

};

export default GameDevelopment;
