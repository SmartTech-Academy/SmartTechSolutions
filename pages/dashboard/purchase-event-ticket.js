import PageHead from "../Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import Footer from "@/my_components/Footer/Footer";
import HeaderContainer from "@/my_components/Header/HeaderContainer";
import StudentPurchaseEventTicket from "@/my_components/_StudentDashboard/StudentPurchaseEventTicket";




const purchaseEventTicket = () => {

  return (

    <Provider store={Store}>
      <Context>
        <PageHead title="Purchase Event Ticket | SmartTech Academy Student Dashboard" />
        <HeaderContainer headerSticky="rbt-sticky" headerType="" topBarToggle="off"  />

        <StudentPurchaseEventTicket />

        <Separator />
        <Footer bg="dark" />
      </Context>
    </Provider>

  );

};


export default purchaseEventTicket;
