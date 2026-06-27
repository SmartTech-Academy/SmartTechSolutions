import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

import PageHead from "@/pages/Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
// import EventsOnSmartTech from "@/my_components/_Events/EventsOnSmartTech";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";

import BlogDetails from "@/my_components/_BlogDetails/BlogDetails";

import Footer from "@/my_components/Footer/Footer";




const index = () => {




  return (

    <>

<<<<<<< ours
        <PageHead title="Blog Post | SmartTech Academy" />
=======
        <PageHead title="Blog Post | SmartTech Solutions" />
>>>>>>> theirs

        <Provider store={Store}>
            <Context>
                <MobileMenu />
                <HeaderContainer headerSticky="" headerType="" />
                <Cart />

                
                <BlogDetails />


                <BackToTop />

                <Separator />
                <Footer />
            </Context>
        </Provider>

    </>

  );

};

export default index;
