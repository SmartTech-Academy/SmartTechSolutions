import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

import PageHead from "@/pages/Head";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/my_components/Header/MobileMenu";
import Cart from "@/my_components/Header/Offcanvas/Cart";
import BackToTop from "@/my_components/BackToTop/BackToTop_1";
import Footer from "@/my_components/Footer/Footer";

import SolutionsHub from "@/my_components/_Solutions/SolutionsHub";

const SolutionsPage = () => {
  return (
    <>
      <PageHead
        title="ERP & CRM Solutions | SmartTech Solutions"
        description="SmartTech Solutions is a certified implementation partner for NetSuite, SAP Business One, Zoho CRM, Odoo, and Microsoft Dynamics 365 Business Central."
        image="/app_images/solutions/netsuite.webp"
        path="/solutions"
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <SolutionsHub />

          <BackToTop />
          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default SolutionsPage;
