import PageHead from "../Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import StudentBrowseCourses from "@/my_components/_StudentDashboard/StudentBrowseCourses";




const BrowseCourses = () => {

  return (

    <Provider store={Store}>
      <Context>
        <PageHead title="Browse Courses | SmartTech Solutions Student Dashboard" />
        <HeaderContainer headerSticky="rbt-sticky" headerType="" topBarToggle="off"  />

        <StudentBrowseCourses />

        <Separator />
        <Footer bg="dark" />
      </Context>
    </Provider>

  );

};


export default BrowseCourses;
