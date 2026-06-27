import Image from "next/image";
import Link from "next/link";

import brand1 from "@/public/app_images/trusted_by_brands/JAPAUL.png";
import brand2 from "@/public/app_images/trusted_by_brands/EXPERT_WRITERS.png";
import brand3 from "@/public/app_images/trusted_by_brands/GEOPLOX.png";
import brand4 from "@/public/app_images/trusted_by_brands/JPGOLDCOIN.png";
import brand5 from "@/public/app_images/trusted_by_brands/REAL-RIBIAX.png";
import brand6 from "@/public/app_images/trusted_by_brands/FLATSHARE.png";

// import { image_url } from "../../helper/Utilities";

import { CONFIG } from "@/app_config.js";




const Brands2 = ({ hide_text="true" }) => {

    const DATA = CONFIG.TRUSTED_BY_BRANDS;

    return (
        
        <div className="container">
            <div className="mt--40">
                {hide_text === "false" ?
                    <div className="rbt-brand-title-wrap">
                        <h5 className="rbt-brand-title w-600 text-center mb-0">
                            clients 
                            <span className="theme-gradient ms-2"> we're proud to </span>
                            {" "} have worked with{" "} <span className="theme-gradient me-2"></span> 
                        </h5>
                    </div>
                : null}

                <ul className="brand-list brand-style-3 justify-content-start justify-content-lg-between mt--30">
                    <li>
                        <a href="#">
                            <Image
                            src={brand1}
                            width={120}
                            height={135}
                            alt="Brand Image"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image
                            src={brand2}
                            width={120}
                            height={135}
                            alt="Brand Image"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image
                            src={brand3}
                            width={120}
                            height={135}
                            alt="Brand Image"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image
                            src={brand4}
                            width={120}
                            height={135}
                            alt="Brand Image"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image
                            src={brand5}
                            width={120}
                            height={135}
                            alt="Brand Image"
                            />
                        </a>
                    </li>{" "}
                    <li>
                        <a href="#">
                            <Image
                            src={brand6}
                            width={120}
                            height={135}
                            alt="Brand Image"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    );

};



export default Brands2;
