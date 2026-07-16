import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("web-development");

const WebDevelopmentServices = () => <ServicePageTemplate service={service} />;

export default WebDevelopmentServices;
