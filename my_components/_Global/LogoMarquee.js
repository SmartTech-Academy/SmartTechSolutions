import Image from "next/image";

/**
 * Infinite horizontal marquee for partner/brand logos. Duplicates the
 * logo strip once so the CSS keyframe can loop seamlessly from -50%,
 * and renders the duplicate with aria-hidden so screen readers only
 * ever see one set of logos.
 */
const LogoMarquee = ({ logos = [], speed = 32 }) => {
  if (!logos.length) return null;

  const track = (hidden = false) => (
    <ul className="logo-marquee__track" aria-hidden={hidden || undefined}>
      {logos.map((logo, index) => (
        <li key={`${hidden ? "dup" : "src"}-${index}`}>
          <div className="logo-marquee__logo">
            <Image
              src={logo.src}
              width={logo.width || 120}
              height={logo.height || 135}
              alt={hidden ? "" : logo.alt || "Partner logo"}
            />
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="logo-marquee" style={{ "--logo-marquee-speed": `${speed}s` }}>
      <div className="logo-marquee__fade logo-marquee__fade--left" />
      <div className="logo-marquee__fade logo-marquee__fade--right" />
      <div className="logo-marquee__viewport">
        <div className="logo-marquee__rail">
          {track(false)}
          {track(true)}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
