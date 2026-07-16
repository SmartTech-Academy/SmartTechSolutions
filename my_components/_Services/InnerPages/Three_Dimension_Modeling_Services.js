import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("3D-modeling");

const Three_Dimension_Modeling_Services = () => <ServicePageTemplate service={service} />;

export default Three_Dimension_Modeling_Services;
