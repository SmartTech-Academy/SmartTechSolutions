import { useRouter } from "next/router";

import TopBar from "./Header-Top/TopBar";
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar";
import HeaderNavigations from "./Headers/HeaderNavigations";
import DarkSwitch from "./dark-switch";
import { useAppContext } from "@/context/Context";



const HeaderContainer = ({ headerSticky, headerType="", topBarToggle="on", topBarType="type 2" }) => {

  const { isLightTheme, toggleTheme } = useAppContext();

  const router = useRouter();

  return (
    <>

      <DarkSwitch isLight={isLightTheme} switchTheme={toggleTheme} />


      {/* <header className="rbt-header rbt-header-10 rbt-transparent-header"> */}
      <header className={`rbt-header rbt-header-10${headerType}`}>

      {topBarToggle=== "on" ? (
          topBarType=== "type 1" ? (
            <HeaderTopBar />
          ) : (
            <TopBar
              bgColor="bg-not-transparent bg-color-darker"
              gapSpaceBetween="header-space-betwween"
              container="container-fluid"
              flexDirection=""
              btnClass="rbt-switch-btn btn-gradient btn-xs"
              btnText="Call us now"
            />
          )
        ) : null}


        <HeaderNavigations
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          navigationEnd="rbt-navigation-start"
        />

      </header>
    </>

  );

};

export default HeaderContainer;
