import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("ai-development");

const AIDevelopmentServices = () => <ServicePageTemplate service={service} />;

export default AIDevelopmentServices;
