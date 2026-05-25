import Image from "next/image";
import Link from "next/link";

import brand1 from "../../public/app_images/trusted_by_brands/intercome.webp";
import brand2 from "../../public/app_images/trusted_by_brands/hubspot.webp";
import brand3 from "../../public/app_images/trusted_by_brands/invision.webp";
import brand4 from "../../public/app_images/trusted_by_brands/slack.webp";

// import { image_url } from "../../helper/Utilities";

import { CONFIG } from "@/app_config.js";




const Brands2 = ({ hide_text="false" }) => {

    const DATA = CONFIG.TRUSTED_BY_BRANDS;

    return (
        
        <div className="container">
            <div className="mt--80">
                {hide_text === "false" ?
                    <div className="rbt-brand-title-wrap">
                        <h5 className="rbt-brand-title w-600 text-center mb-0">
                            Making
                            <span className="theme-gradient ms-2"> sensitive clients </span>
                            {" "} more valuable for{" "} <span className="theme-gradient me-2">companies</span> like 
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
                            src={brand2}
                            width={120}
                            height={135}
                            alt="Brand Image"
                            />
                        </a>
                    </li>{" "}
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
                </ul>
            </div>
        </div>

    );

};



export default Brands2;
