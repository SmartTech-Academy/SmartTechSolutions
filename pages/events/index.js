import PageHead from "@/pages/Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import EventsOnSmartTech from "@/my_components/_Events/EventsOnSmartTech";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Footer from "@/my_components/Footer/Footer";

const index = () => {

  return (

    <>

        <PageHead
          title="Events | SmartTech Solutions"
          description="Explore tech talks, product showcases, and community meetups hosted by SmartTech Solutions — connect with our team and see what we're building next."
          image="/app_images/event/event_landing_bg_image.jpg"
          path="/events"
        />

        <Provider store={Store}>
            <Context>
                <MobileMenu />
                <HeaderContainer headerSticky="rbt-sticky" headerType="" />
                <Cart />
                

                <EventsOnSmartTech />


                <BackToTop />

                <Separator />
                <Footer />
            </Context>
        </Provider>

    </>

  );

};

export default index;
