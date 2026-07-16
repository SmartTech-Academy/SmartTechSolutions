import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("3D-animations");

const Three_Dimension_Animations_Services = () => <ServicePageTemplate service={service} />;

export default Three_Dimension_Animations_Services;
