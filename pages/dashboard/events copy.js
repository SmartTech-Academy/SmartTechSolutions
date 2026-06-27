import PageHead from "../Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import StudentEvents from "@/my_components/_StudentDashboard/StudentEvents";




const Events = () => {

  return (

    <Provider store={Store}>
      <Context>
        <PageHead title="Events | SmartTech Solutions Student Dashboard" />
        <HeaderContainer headerSticky="rbt-sticky" headerType="" topBarToggle="off"  />

        <StudentEvents />

        <Separator />
        <Footer bg="dark" />
      </Context>
    </Provider>

  );

};


export default Events;
