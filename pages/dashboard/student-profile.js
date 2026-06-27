import PageHead from "../Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import StudentProfile from "@/my_components/_StudentDashboard/StudentProfile";




const studentProfile = () => {

  return (

    <Provider store={Store}>
      <Context>
        <PageHead title="Profile | SmartTech Solutions Student Dashboard" />
        <HeaderContainer headerSticky="rbt-sticky" headerType="" topBarToggle="off"  />

        <StudentProfile />

        <Separator />
        <Footer bg="dark" />
      </Context>
    </Provider>

  );

};


export default studentProfile;
