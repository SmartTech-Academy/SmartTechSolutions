import LogoMarquee from "@/my_components/_Global/LogoMarquee";
import { BRAND_LOGOS } from "@/helper/brandLogos";

const LOGOS = BRAND_LOGOS.map((logo) => ({
  src: logo.src,
  alt: logo.name,
  keepColor: logo.keepColor,
}));

const Brands2 = ({ hide_text = "true", title }) => {
  return (
    <div className="container">
      <div className="mt--40">
        {hide_text === "false" ? (
          <div className="rbt-brand-title-wrap">
            <h5 className="rbt-brand-title w-600 text-center mb-0">
              {title || (
                <>
                  clients
                  <span className="theme-gradient ms-2"> we're proud to </span>
                  {" "}have worked with{" "}<span className="theme-gradient me-2"></span>
                </>
              )}
            </h5>
          </div>
        ) : null}

        <div className="mt--30">
          <LogoMarquee logos={LOGOS} speed={34} />
        </div>
      </div>
    </div>
  );
};

export default Brands2;
