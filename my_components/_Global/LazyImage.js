import { useState } from "react";
import Image from "next/image";

/**
 * Drop-in wrapper around next/image that shows a shimmering skeleton
 * (`.rbt-img-skeleton`, see global-effects.css) for the exact box the
 * image will occupy, until the real file finishes downloading. Meant for
 * any non-priority image sourced/recreated across the site — next/image
 * already lazy-loads by default, this just makes that wait visible and
 * pleasant instead of a blank gap.
 */
const LazyImage = ({ wrapperClassName = "", className = "", onLoad, ...imageProps }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className={`rbt-lazy-img${wrapperClassName ? ` ${wrapperClassName}` : ""}${loaded ? "" : " rbt-img-skeleton"}`}>
      <Image
        className={`rbt-lazy-img__el${loaded ? " is-loaded" : ""}${className ? ` ${className}` : ""}`}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        {...imageProps}
      />
    </span>
  );
};

export default LazyImage;
