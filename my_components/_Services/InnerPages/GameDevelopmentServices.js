import ServicePageTemplate from "./ServicePageTemplate";
import { getServicePage } from "@/my_data/services/service_pages.js";

const service = getServicePage("game-development");

const GameDevelopmentServices = () => <ServicePageTemplate service={service} />;

export default GameDevelopmentServices;
