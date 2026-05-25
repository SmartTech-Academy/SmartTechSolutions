import Link from "next/link";
import SingleCategory from "./CategoryProps/SingleCategory";
import { CONFIG } from "@/app_config.js";

const Category = () => {
  return (
    <div className="rbt-category-menu-wrapper rbt-category-update">
      <div className="rbt-category-btn">
        <div className="rbt-offcanvas-trigger md-size icon">
          <span className="d-none d-xl-block">
            <i className="feather-grid"></i>
          </span>
          <i title="Category" className="feather-grid d-block d-xl-none"></i>
        </div>
        <span className="category-text d-none d-xl-block">Category</span>
      </div>

      <div className="update-category-dropdown">
        <div className="inner">
          <ul className="dropdown-parent-wrapper">

            <SingleCategory
              title={CONFIG.CATEGORIES.categoryItemOne}
              isActive={false}
              CategoryData={CONFIG.CATEGORY_ITEMS}
              CategoryNum={CONFIG.CATEGORY_ITEMS.categoryItemOne}
            />
            <SingleCategory
              title={CONFIG.CATEGORIES.categoryItemTwo}
              isActive={false}
              CategoryData={CONFIG.CATEGORY_ITEMS}
              CategoryNum={CONFIG.CATEGORY_ITEMS.categoryItemTwo}
            />
            <SingleCategory
              title={CONFIG.CATEGORIES.categoryItemThree}
              isActive={false}
              CategoryData={CONFIG.CATEGORY_ITEMS}
              CategoryNum={CONFIG.CATEGORY_ITEMS.categoryItemThree}
            />
            <SingleCategory
              title={CONFIG.CATEGORIES.categoryItemFour}
              isActive={false}
              CategoryData={CONFIG.CATEGORY_ITEMS}
              CategoryNum={CONFIG.CATEGORY_ITEMS.categoryItemFour}
            />
            <SingleCategory
              title={CONFIG.CATEGORIES.categoryItemFive}
              isActive={false}
              CategoryData={CONFIG.CATEGORY_ITEMS}
              CategoryNum={CONFIG.CATEGORY_ITEMS.categoryItemFive}
            />
            <SingleCategory
              title={CONFIG.CATEGORIES.categoryItemSix}
              isActive={false}
              CategoryData={CONFIG.CATEGORY_ITEMS}
              CategoryNum={CONFIG.CATEGORY_ITEMS.categoryItemSix}
            />
            <SingleCategory
              title={CONFIG.CATEGORIES.categoryItemSeven}
              isActive={false}
              CategoryData={CONFIG.CATEGORY_ITEMS}
              CategoryNum={CONFIG.CATEGORY_ITEMS.categoryItemSeven}
            />
            <SingleCategory
              title={CONFIG.CATEGORIES.categoryItemEight}
              isActive={false}
              CategoryData={CONFIG.CATEGORY_ITEMS}
              CategoryNum={CONFIG.CATEGORY_ITEMS.categoryItemEight}
            />

          </ul>
        </div>
      </div>
    </div>
  );
};
export default Category;
