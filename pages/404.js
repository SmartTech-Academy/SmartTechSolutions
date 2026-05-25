import PageHead from "./Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import NotFound from "@/my_components/_NotFound/NotFound";

const ErrorPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        <PageHead title="Page not found | SmartTech Academy" />
        <HeaderContainer headerSticky="rbt-sticky" headerType="" />

        <NotFound />

        <Separator />
        <Footer />
      </Context>
    </Provider>
  );
};

export default ErrorPage;
