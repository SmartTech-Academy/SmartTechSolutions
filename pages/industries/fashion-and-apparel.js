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

import IndustryPageTemplate from "@/my_components/_Industries/IndustryPageTemplate";
import { getIndustryBySlug } from "@/my_data/industries/industries.js";

const industry = getIndustryBySlug("fashion-and-apparel");

const FashionAndApparelIndustryPage = () => {
  return (
    <>
      <PageHead
        title={`${industry.name} Software Development Services | SmartTech Solutions`}
        description={industry.heroDesc}
        image={industry.heroImage}
        path={industry.href}
      />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderContainer headerSticky="rbt-sticky" headerType="" blendWithHero />
          <Cart />

          <IndustryPageTemplate industry={industry} />

          <BackToTop />
          <Separator />
          <Footer />
        </Context>
      </Provider>
    </>
  );
};

export default FashionAndApparelIndustryPage;
