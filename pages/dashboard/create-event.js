import PageHead from "../Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import StudentEvent from "@/my_components/_StudentDashboard/StudentEvent";




const EditEvent = () => {

  return (

    <Provider store={Store}>
      <Context>
        <PageHead title="Create Event | SmartTech Solutions Student Dashboard" />
        <HeaderContainer headerSticky="rbt-sticky" headerType="" topBarToggle="off"  />

        <StudentEvent usage_type="create" />

        <Separator />
        <Footer bg="dark" />
      </Context>
    </Provider>

  );

};


export default EditEvent;
