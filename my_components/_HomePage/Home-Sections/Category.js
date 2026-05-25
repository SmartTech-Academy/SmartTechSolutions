import Link from "next/link";
import Image from "next/image";

import { image_url, COUNT } from "@/helper/Utilities";

import { CONFIG } from "@/app_config.js";



const Category = () => {

  const categories = Object.values(CONFIG.CATEGORIES);
  const categoryImages = Object.values(CONFIG.CATEGORY_IMAGES);
  const categoryLinks = Object.values(CONFIG.CATEGORY_LINKS);
  const categories_items = Object.values(CONFIG.CATEGORY_ITEMS);

  return (

    <>

      {categories && categories.slice(0, 8).map((item, innerIndex) => {

          const count = COUNT(categories_items[innerIndex]);

          return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={innerIndex}>
              <Link className="rbt-cat-box rbt-cat-box-1 list-style" href={categoryLinks[innerIndex]}>
                <div className="inner">
                  <div className="thumbnail">
                    <Image src={image_url(categoryImages[innerIndex])} width={300} height={300} priority alt="Icons Images"/>
                  </div>
                  <div className="content">
                    <h5 className="title">{item}</h5>
                    <div className="read-more-btn">
                      <span className="rbt-btn-link">
                        {count} Course{count !== 1 ? "s" : ""}
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );

        })}
        
    </>

  );

};



export default Category;
