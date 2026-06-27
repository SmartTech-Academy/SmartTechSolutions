import PageHead from "../Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import StudentDashboardOverview from "@/my_components/_StudentDashboard/StudentDashboardOverview";




const overview = () => {

  return (

    <Provider store={Store}>
      <Context>
        <PageHead title="Dashboard Overview | SmartTech Solutions Student Dashboard" />
        <HeaderContainer headerSticky="rbt-sticky" headerType="" topBarToggle="off"  />

        <StudentDashboardOverview />

        <Separator />
        <Footer bg="dark" />
      </Context>
    </Provider>

  );

};


export default overview;
