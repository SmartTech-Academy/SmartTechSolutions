import LazyImage from "@/my_components/_Global/LazyImage";

/**
 * "Why SmartTech" section visual for each service page — a real, service-
 * relevant photo (a shipped project screenshot for Web/Blockchain/NFT/MVP,
 * or the craft's own real production photo for Game/3D/2D/AI/Product
 * Design) instead of a generic hand-at-a-laptop illustration reused across
 * every page. `visual` is an escape hatch for the one page with no usable
 * real asset at all (Game Development — see GameHeroVisual.js).
 */
const ServiceWhyVisual = ({ src, alt, accent, visual }) => {
  if (visual) {
    return (
      <div className="svc-why-visual svc-why-visual--illustration" style={{ "--accent": accent }}>
        {visual}
      </div>
    );
  }

  return (
    <div className="svc-why-visual" style={{ "--accent": accent }}>
      <LazyImage
        wrapperClassName="svc-why-visual__lazy"
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 991px) 92vw, 46vw"
        className="svc-why-visual__img"
      />
    </div>
  );
};

export default ServiceWhyVisual;
