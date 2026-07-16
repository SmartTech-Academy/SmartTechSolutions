import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("nft-marketplace-development");

const NftMarketplaceDevelopmentServices = () => <ServicePageTemplate service={service} />;

export default NftMarketplaceDevelopmentServices;
