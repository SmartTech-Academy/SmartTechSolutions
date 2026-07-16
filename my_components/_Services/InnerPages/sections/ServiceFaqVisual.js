import LazyImage from "@/my_components/_Global/LazyImage";

const Star = ({ i }) => (
  <svg width="14" height="14" viewBox="-7 -7 14 14" key={i}>
    <path
      d="M0 -6 L1.8 -2 L6 -2 L2.6 0.8 L4 5 L0 2.4 L-4 5 L-2.6 0.8 L-6 -2 L-1.8 -2 Z"
      fill="#f59e0b"
    />
  </svg>
);

/**
 * FAQ-section visual for each service page — the same idea as
 * ServiceWhyVisual.js (a real, service-relevant photo instead of a generic
 * browser-mockup illustration), styled with an accent scrim + floating
 * rating badge so it reads as its own section rather than a repeat of the
 * "Why SmartTech" image above it. `visual` is the Game Development escape
 * hatch (see GameHeroVisual.js — no usable real asset exists for that page).
 */
const ServiceFaqVisual = ({ src, alt, accent, visual }) => {
  if (visual) {
    return (
      <div className="svc-faq-visual svc-faq-visual--illustration" style={{ "--accent": accent }}>
        {visual}
      </div>
    );
  }

  return (
    <div className="svc-faq-visual" style={{ "--accent": accent }}>
      <LazyImage
        wrapperClassName="svc-faq-visual__lazy"
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 991px) 92vw, 44vw"
        className="svc-faq-visual__img"
      />
      <span className="svc-faq-visual__scrim" aria-hidden="true" />
      <div className="svc-faq-visual__badge">
        <div className="svc-faq-visual__stars">
          {[0, 1, 2, 3, 4].map((i) => <Star i={i} key={i} />)}
        </div>
        <strong>4.9</strong>
        <span>Client rating</span>
      </div>
    </div>
  );
};

export default ServiceFaqVisual;
