import PageHead from "../Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import ForgotPassword from "@/my_components/_ForgotPassword/ForgotPassword";

const ErrorPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        <PageHead title="Forgot Password | SmartTech Solutions" />
        <HeaderContainer headerSticky="rbt-sticky" headerType=" rbt-transparent-header" topBarToggle="off" />

        <ForgotPassword />

        <Separator />
        <Footer bg="dark" />
      </Context>
    </Provider>
  );
};

export default ErrorPage;
