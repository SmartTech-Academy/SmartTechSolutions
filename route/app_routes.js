
// ROUTES FOR THE APP
export const ROUTE = {
  // Auth routes
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  newPassword: "/new-password",

  // unprotected routes
  home: "/",
  about: "/about",

  service: "/services",
  web_dev_service: "/services/web-development",
  mobile_dev_service: "/services/mobile-app-development",
  game_dev_service: "/services/game-development",
  blockchain_dev_service: "/services/blockchain-development",
  product_design_service: "/services/product-design",
  audit_consultancy_service: "/services/",
  support_maintainance_service: "/services/",
  two_dimension_animation_service: "/services/2D-animations",
  three_dimension_animation_service: "/services/3D-animations",
  nft_marketplace_service: "/services/nft-marketplace-development",
  three_D_modeling_service: "/services/3D-modeling",
  ai_development_service: "/services/ai-development",
  two_D_art_service: "/services/2D-arts",
  mvp_development_service: "/services/mvp-development",

  project: "/projects",
  digistate_project: "/projects/digistate",
  jpgc_app_project: "/projects/jpgc-app",
  flatshare_project: "/projects/flatshare",
  dts_project: "/projects/dts",
  geoplox_project: "/projects/geoplox",
  xabi_project: "/projects/xabi",
  lodapoint_project: "/projects/lodapoint",
  mfm_project: "/projects/mfm",
  jpgc_project: "/projects/jpgc",

  our_process: "/our-process",
  course_details: "/courses/details/",
  contact: "/contact",
  events: "/events",
  event_details: "/events/details/",
  event_ticket_purchase: "/events/ticket-purchase/",
  blog: "/blog",
  blog_details: "/blog/post/",
  faq: "/faq",
  privacy: "/privacy-policy",
  terms: "/terms",
  Faq: "/faq",
  appointment: "/book-appointment",
  view_all_categories: "/categories/all",

  // protected routes
  dashboard: "/dashboard/overview",
  dashboardProfile: "/dashboard/student-profile",
  dashboardWishlist: "/dashboard/wishlist",
  dashboardBrowseCourses: "/dashboard/browse-courses",
  dashboardEvents: "/dashboard/events",
  dashboardEventsCreate: "/dashboard/create-event",
  dashboardEventsEdit: "/dashboard/edit-event",
  dashboardEventsRePurposing: "/dashboard/re-purpose-event",
  dashboardEventTicketPurchasing: "/dashboard/purchase-event-ticket",
  eventTicketBookings: "/dashboard/event-ticket-bookings",
  dashboardClassRoom: "/dashboard/class-room",
  dashboardSettings: "/dashboard/settings",
  enrolledCourse: "/dashboard/enrolled-courses",
  studentQuizAttempts: "/dashboard/student-quiz-attempts",
  module3: "/dashboard/module3",

  // LINKS TO WEBSITE FOR TECH STACKS
  SPRING: "https://spring.io/projects/spring-framework",
  LARAVEL: "https://laravel.com",
  NEXT: "https://nextjs.org",
  VITE: "https://vitejs.dev",
  REACT: "https://react.dev",
  TAILWINDCSS: "https://tailwindcss.com",
  BOOTSTRAP: "https://getbootstrap.com",

  // SOCIALS LINKS
  FACEBOOK: "https://www.facebook.com/smarttechacademy",
  TWITTER: "https://www.x.com/smarttechacademy",
  INSTAGRAM: "https://www.instagram.com/smarttechacademy",
  LINKEDIN: "https://www.linkedin.com/company/smarttechacademy",
  SKYPE: "https://www.skype.com/smarttechacademy",
  YOUTUBE: "https://www.youtube.com/smarttechacademy",
};

export const protectedRoutes = [
  ROUTE.dashboard,
  ROUTE.dashboardHome,
  ROUTE.delinquency,
  ROUTE.module3,
];



// complex if-else
// {isActive("/questions-types")
// ? 1
// : isActive("/all-questions")
// ? 2
// : isActive("/pagination-quiz")
// ? 3
// : isActive("/single-question")
// ? 4
// : isActive("/quiz-with-point")
// ? 5
// : isActive("/quiz-with-custom-timer")
// ? 6
// : isActive("/quiz-passing-grade")
// ? 7
// : isActive("/lesson-quiz")
// ? 8
// : isActive("/lesson-quiz-result")
// ? 9
// : 0}
