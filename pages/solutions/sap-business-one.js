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

import SolutionPageTemplate from "@/my_components/_Solutions/SolutionPageTemplate";
import { getSolutionBySlug } from "@/my_data/solutions/solutions.js";

const solution = getSolutionBySlug("sap-business-one");

const SapBusinessOneSolutionPage = () => {
  return (
    <>
      <PageHead
        title={`${solution.fullName} Implementation Partner | SmartTech Solutions`}
        description={solution.heroDesc}
        image={solution.heroImage}
        path={solution.href}
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <SolutionPageTemplate solution={solution} />

          <BackToTop />
          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default SapBusinessOneSolutionPage;
