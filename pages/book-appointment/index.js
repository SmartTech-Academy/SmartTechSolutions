import PageHead from "../Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import BookAppointment from "@/my_components/_BookAppointment/BookAppointment";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Footer from "@/my_components/Footer/Footer";

const BookAppointmentPage = () => {
  return (
    <>
      <PageHead
        title="Book an Appointment | SmartTech Solutions"
        description="Book a free 30-minute discovery call with SmartTech Solutions. Tell us about your web, mobile, AI, or blockchain project and get a tailored roadmap within 24 hours."
        path="/book-appointment"
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
          <Cart />

          <BookAppointment />
          <BackToTop />

          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default BookAppointmentPage;
