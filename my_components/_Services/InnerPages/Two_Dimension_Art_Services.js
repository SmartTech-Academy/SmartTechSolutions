import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("2D-arts");

const Two_Dimension_Art_Services = () => <ServicePageTemplate service={service} />;

export default Two_Dimension_Art_Services;
