import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CreateContext = createContext();

export const useAppContext = () => useContext(CreateContext);

const THEME_STORAGE_KEY = "histudy-theme";
const DARK_MODE_CLASS = "active-dark-mode";

const Context = ({ children }) => {
  const dispatch = useDispatch();
  // const { cart } = useSelector((state) => state.CartReducer);

  const [cartToggle, setCart] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [search, setSearch] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [smallMobileMenu, setsmallMobileMenu] = useState(true);
  const [pricing, setPricing] = useState(true);
  const [pricingTwo, setPricingTwo] = useState(true);
  const [pricingThree, setPricingThree] = useState(true);
  const [pricingFour, setPricingFour] = useState(true);
  
  const [isLightTheme, setLightTheme] = useState(true);

  // useEffect(() => {
  //   dispatch({ type: "COUNT_CART_TOTALS" });
  // }, [cart]);


  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.remove(DARK_MODE_CLASS);
    } else {
      document.body.classList.add(DARK_MODE_CLASS);
    }
  }, [isLightTheme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (savedTheme === "dark" || savedTheme === "light") {
      setLightTheme(savedTheme === "light");
      return;
    }

    setLightTheme(!systemTheme.matches);

    const handleSystemThemeChange = (event) => {
      setLightTheme(!event.matches);
    };

    systemTheme.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemTheme.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setLightTheme((prevTheme) => {
      const nextTheme = !prevTheme;
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme ? "light" : "dark");
      return nextTheme;
    });
  };

  return (
    <CreateContext.Provider
      value={{
        toggle,
        setToggle,
        mobile,
        setMobile,
        smallMobileMenu,
        setsmallMobileMenu,
        cartToggle,
        setCart,
        search,
        setSearch,
        pricing,
        setPricing,
        pricingTwo,
        setPricingTwo,
        pricingThree,
        setPricingThree,
        pricingFour,
        setPricingFour,
        isLightTheme,
        setLightTheme,
        toggleTheme,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

export default Context;
