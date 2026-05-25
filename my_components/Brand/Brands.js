import Image from "next/image";
import Link from "next/link";

import BrandData from "../../data/elements/brands.json";




const Brands = ({isolate_title = false, show_layer_two = false}) => {

  return (

    <div className="container">

      {BrandData && BrandData.brandThree.map((data, index) => (

          <>

          <div className="row align-items-center" key={index}>
            <div className="col-lg-12">

              { isolate_title === false ? (
                <div className="section-title text-center mb--40">
                  <span className="small-title w-600">{data.title}</span>
                </div>
              ) : null }

              <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
                {data.brandLogo.map((item, innerIndex) => (
                  <li key={innerIndex}>
                    <Link href="#">
                      <Image src={item.img} width={item.width} height={item.height} priority={true} alt="Brand Image" />
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          </div>



          { show_layer_two === true ? (
            <div className="row align-items-center mt--90">
              <div className="col-lg-12">
                <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
                  {data.brandLogo.map((item, innerIndex) => (
                    <li key={innerIndex}>
                      <Link href="#">
                        <Image src={item.img} width={item.width} height={item.height} priority={true} alt="Brand Image" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null }

          </>

        ))}

    </div>

  );

};

export default Brands;
