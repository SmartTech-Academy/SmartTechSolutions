import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("product-design");

const ProductDesignServices = () => <ServicePageTemplate service={service} />;

export default ProductDesignServices;
