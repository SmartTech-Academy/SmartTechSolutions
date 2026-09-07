
// fake apis
import { EVENTS } from "@/AppDatas/apis/events";
import { COURSES } from "@/AppDatas/apis/courses";


// Import Datas into the config file
import { CATEGORIES_DATAS } from "@/AppDatas/categories";
import { TRUSTED_BY_BRANDS_DATAS } from "@/AppDatas/trusted_by_brands";


// create the config file datas here
export const CONFIG = {
  
    // GENERAL APP INFO's
    APP_NAME: "SmartTech Solutions",
    NICK_NAME: "SmartTech",
    SITE_URL: "https://smarttechacademy.org",
    PHONE_1: "+234 803 443 6977",
    PHONE_2: "+234 802 326 6696",
    EMAIL_1: "hello@smarttech.ng",
    ADDRESS: "No 9 Church Street, Shomolu, Lagos, Nigeria",
  
    // IN-APP FRONTEND CONFIGURATION
    module3: "/dashboard/module3",

    // configurations
    CONTENT_LENGHT: 6,
    DASHBOARD_CONTENT_LENGHT: 3,




    

    //    L O A D    W E B A P P     D A T A S      H E R E

    // GENERAL APP COURSE CATEGORIES AND THEIR RESPECTIVE CATEGORY ITEMS
    CATEGORIES: CATEGORIES_DATAS.CATEGORIES,
    CATEGORY_IMAGES: CATEGORIES_DATAS.CATEGORY_IMAGES,
    CATEGORY_LINKS: CATEGORIES_DATAS.CATEGORY_LINKS,
    CATEGORY_ITEMS: CATEGORIES_DATAS.CATEGORY_ITEMS,

    TRUSTED_BY_BRANDS: TRUSTED_BY_BRANDS_DATAS.BRANDS,

    // TEMP APIS
    EVENTS: EVENTS.TRENDING_EVENTS,
    COURSES: COURSES.TRENDING_COURSES,
      

};

// E X T E N D    T H E      C O N F I G        D A T A S         H E R E


// className={`icon ${ item.isPrimary ? "bg-primary-opacity" : "bg-pink-opacity" }`}

// EXPORT CONFIG DATAS
// export CONFIG;
// <div className="inner" style={type === "light" ? { border: "1px solid #ffffff4d" } : { border: "1px solid #ffffff4d" }}>