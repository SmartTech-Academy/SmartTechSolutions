import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("mvp-development");

const MVPDevelopmentServices = () => <ServicePageTemplate service={service} />;

export default MVPDevelopmentServices;
