import Image from "next/image";

import tile1 from "@/public/app_images/services/mobile_hero/hero_tile_1_digistate_invest.webp";
import tile2 from "@/public/app_images/services/mobile_hero/hero_tile_2_digistate_portfolio.webp";
import tile3 from "@/public/app_images/services/mobile_hero/hero_tile_3_dts_dashboard.webp";
import tile4 from "@/public/app_images/services/mobile_hero/hero_tile_4_dts_course.webp";
import tile5 from "@/public/app_images/services/mobile_hero/hero_tile_5_lodapoint_delivery.webp";
import tile6 from "@/public/app_images/services/mobile_hero/hero_tile_6_jpgc_dashboard.webp";
import tile7 from "@/public/app_images/services/mobile_hero/hero_tile_7_mfm_ebooks_store.webp";

// Real native-app screens pulled from live SmartTech builds — Digistate,
// DTS, Lodapoint, JPGC App, and MFM eBooks — rather than stock UI kits or
// responsive/mobile-view crops of a website. Every tile here is an actual
// phone app screen that shipped to a real user.
const TILES = [
  { src: tile1, alt: "Digistate investment app screen", cls: "t1" },
  { src: tile2, alt: "Digistate portfolio app screen", cls: "t2" },
  { src: tile3, alt: "DTS discipleship app dashboard screen", cls: "t3" },
  { src: tile4, alt: "DTS discipleship app course screen", cls: "t4" },
  { src: tile5, alt: "Lodapoint delivery app screen", cls: "t5" },
  { src: tile6, alt: "JPGC App NFT dashboard screen", cls: "t6" },
  { src: tile7, alt: "MFM eBooks store app screen", cls: "t7" },
];

// Same 7 screens, reversed order — reused (not re-downloaded, the browser
// already cached them from the row above) to build a second, receding
// layer instead of duplicating the image budget.
const BACK_TILES = [...TILES].reverse();

const MobileHeroCollage = () => {
  return (
    <div className="mad-collage" aria-hidden="true">
      <span className="mad-collage__grid-bg" aria-hidden="true" />
      <span className="mad-collage__glow mad-collage__glow--one" aria-hidden="true" />
      <span className="mad-collage__glow mad-collage__glow--two" aria-hidden="true" />

      <div className="mad-collage__layer mad-collage__layer--back">
        <div className="mad-collage__field mad-collage__field--back">
          {BACK_TILES.map((tile) => (
            <div className={`mad-collage__tile mad-collage__tile--back mad-collage__tile--${tile.cls}`} key={`back-${tile.cls}`}>
              <Image
                src={tile.src}
                alt=""
                fill
                sizes="(max-width: 767px) 34vw, (max-width: 1199px) 18vw, 260px"
                placeholder="blur"
                className="mad-collage__img"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mad-collage__layer mad-collage__layer--front">
        <div className="mad-collage__field">
          {TILES.map((tile, index) => (
            <div className={`mad-collage__tile mad-collage__tile--${tile.cls}`} key={tile.cls}>
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 767px) 40vw, (max-width: 1199px) 22vw, 320px"
                placeholder="blur"
                priority={index < 3}
                className="mad-collage__img"
              />
            </div>
          ))}
        </div>
      </div>

      <span className="mad-collage__scrim" />
    </div>
  );
};

export default MobileHeroCollage;
