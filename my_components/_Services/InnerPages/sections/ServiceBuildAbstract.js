/**
 * Abstract "work under construction" visual for each service page's closing
 * CTA — the generalized version of MobileBuildAbstract.js, with the phone-
 * specific framing replaced by a neutral wireframe screen/canvas so it
 * reads sensibly whether the page above it was about web apps, blockchain
 * products, 3D renders, or game builds. A floating, dashed-line-connected
 * block composition rather than a screenshot of one specific project.
 * Inline SVG: no extra network request, crisp at any size, tinted by the
 * page's own --sol-accent-style CSS variable passed in via `accent`.
 */
const ServiceBuildAbstract = ({ accent }) => {
  return (
    <div className="svc-cta__abstract" style={{ "--accent": accent }} role="img" aria-label="Abstract illustration of a product being assembled">
      <svg viewBox="0 0 420 460" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="svcBuildA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent))" stopOpacity="0.95" />
            <stop offset="100%" stopColor="rgb(var(--accent))" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <g stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeDasharray="5 6" fill="none">
          <path d="M110 80 L54 52" />
          <path d="M310 110 L376 66" />
          <path d="M90 240 L26 274" />
          <path d="M330 270 L396 300" />
          <path d="M140 380 L78 410" />
          <path d="M280 388 L340 420" />
        </g>

        <rect x="90" y="50" width="240" height="360" rx="26" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.32)" strokeWidth="2" />
        <rect x="112" y="76" width="196" height="308" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />

        <g transform="translate(28 30)">
          <rect width="60" height="60" rx="15" fill="url(#svcBuildA)" />
          <rect x="14" y="22" width="30" height="6" rx="3" fill="rgba(255,255,255,0.85)" />
          <rect x="14" y="33" width="18" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
        </g>

        <g transform="translate(340 40)">
          <circle r="28" fill="url(#svcBuildA)" />
          <path d="M-9 0 L-2 7 L11 -7" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        <g transform="translate(10 230)">
          <rect width="54" height="54" rx="14" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
          <rect x="12" y="16" width="28" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
          <rect x="12" y="27" width="18" height="6" rx="3" fill="rgba(255,255,255,0.45)" />
        </g>

        <g transform="translate(352 258)">
          <rect width="60" height="60" rx="16" fill="url(#svcBuildA)" opacity="0.9" />
          <circle cx="18" cy="18" r="7" fill="rgba(255,255,255,0.9)" />
          <rect x="12" y="34" width="34" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
        </g>

        <g transform="translate(24 386)">
          <circle r="24" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" />
          <path d="M-7 -7 L7 7 M7 -7 L-7 7" stroke="rgba(255,255,255,0.55)" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g transform="translate(300 400)">
          <rect width="52" height="52" rx="14" fill="url(#svcBuildA)" opacity="0.9" />
          <rect x="10" y="12" width="14" height="14" rx="4" fill="rgba(255,255,255,0.9)" />
          <rect x="28" y="12" width="10" height="14" rx="4" fill="rgba(255,255,255,0.55)" />
          <rect x="10" y="30" width="28" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
        </g>

        <g transform="translate(130 98)">
          <rect width="116" height="26" rx="7" fill="rgba(255,255,255,0.14)" />
          <rect width="70" height="40" rx="9" y="36" fill="rgba(255,255,255,0.1)" />
          <rect width="116" height="16" rx="5" y="86" fill="rgba(255,255,255,0.08)" />
          <rect width="88" height="16" rx="5" y="106" fill="rgba(255,255,255,0.08)" />
          <rect width="52" height="16" rx="5" y="126" fill="rgba(255,255,255,0.08)" />
        </g>
      </svg>
    </div>
  );
};

export default ServiceBuildAbstract;
