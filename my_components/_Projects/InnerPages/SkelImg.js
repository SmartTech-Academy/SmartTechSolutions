import { useEffect, useRef, useState } from "react";

/* Drop-in <img> replacement that shows a shimmering skeleton (drawn as the
   img's own background) while the file loads. Because the real <img> element
   stays in the tree with its usual classes, every CSS rule that sizes or
   positions it — including `.parent img` descendant selectors — keeps
   working, and the skeleton occupies the exact same box. */
const SkelImg = ({ className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={imgRef}
      className={`${className}${loaded ? "" : " digi-skel-loading"}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
};

export default SkelImg;
