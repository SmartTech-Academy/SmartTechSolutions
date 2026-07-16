import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("2D-animations");

const Two_Dimension_Animations_Services = () => <ServicePageTemplate service={service} />;

export default Two_Dimension_Animations_Services;
