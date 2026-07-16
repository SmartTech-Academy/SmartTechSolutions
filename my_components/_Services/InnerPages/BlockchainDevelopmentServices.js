import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("blockchain-development");

const BlockchainDevelopmentServices = () => <ServicePageTemplate service={service} />;

export default BlockchainDevelopmentServices;
