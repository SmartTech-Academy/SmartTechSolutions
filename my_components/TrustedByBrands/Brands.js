import Image from "next/image";
import Link from "next/link";

import { image_url } from "../../helper/Utilities";

import { CONFIG } from "@/app_config.js";




const Brands = () => {

    const DATA = CONFIG.TRUSTED_BY_BRANDS;

    return (

        <div className="container">
        
            <div className="row align-items-center" key="1">
                <div className="col-lg-12">
                    <div className="section-title text-center mb--40">
                        <span className="small-title w-600">Trusted by companies and learners around the world</span>
                    </div>
                    <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
                        {DATA && DATA.map((item, index) => (
                            <li key={index}>
                                <Link href="#">
                                    <Image src={image_url(item.img)} width={item.width} height={item.height} priority={true} alt="Brand Image" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>

    );

};



export default Brands;
