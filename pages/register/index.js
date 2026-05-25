import PageHead from "../Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import Register from "@/my_components/_Register/Register";

const ErrorPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        <PageHead title="Sign Up | SmartTech Academy" />
        <HeaderContainer headerSticky="rbt-sticky" headerType=" rbt-transparent-header" topBarToggle="off" />

        <Register />

        <Separator />
        <Footer bg="dark" />
      </Context>
    </Provider>
  );
};

export default ErrorPage;
