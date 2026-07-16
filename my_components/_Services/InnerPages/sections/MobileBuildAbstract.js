/**
 * Abstract "app under construction" visual for the "Let's build" CTA —
 * previously a literal screenshot reused from the hero collage. A wireframe
 * phone outline with floating, dashed-line-connected UI blocks reads as
 * "assembling an app" rather than showing one specific finished project,
 * which fits a generic "ready to build?" CTA better than a single client's
 * screenshot repeated a second time on the same page. Inline SVG: no extra
 * network request, crisp at any size.
 */
const MobileBuildAbstract = () => {
  return (
    <div className="mad-cta__abstract" role="img" aria-label="Abstract illustration of a mobile app interface being assembled">
      <svg viewBox="0 0 420 520" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="madBuildA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#2f57ef" />
          </linearGradient>
          <linearGradient id="madBuildB" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>

        {/* connecting lines, drawn first so blocks sit on top */}
        <g stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeDasharray="5 6" fill="none">
          <path d="M120 90 L60 60" />
          <path d="M300 130 L372 84" />
          <path d="M96 260 L28 300" />
          <path d="M320 300 L392 340" />
          <path d="M140 420 L74 452" />
          <path d="M280 430 L344 468" />
        </g>

        {/* wireframe phone, center */}
        <rect x="110" y="60" width="200" height="400" rx="34" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
        <rect x="128" y="90" width="164" height="340" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
        <rect x="188" y="70" width="44" height="10" rx="5" fill="rgba(255,255,255,0.3)" />

        {/* floating UI blocks around the phone */}
        <g transform="translate(28 40)">
          <rect width="64" height="64" rx="16" fill="url(#madBuildA)" opacity="0.9" />
          <rect x="16" y="24" width="32" height="6" rx="3" fill="rgba(255,255,255,0.85)" />
          <rect x="16" y="36" width="20" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
        </g>

        <g transform="translate(346 46)">
          <circle r="30" fill="url(#madBuildB)" opacity="0.9" />
          <path d="M-10 0 L-2 8 L12 -8" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        <g transform="translate(6 268)">
          <rect width="58" height="58" rx="16" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" />
          <rect x="14" y="18" width="30" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
          <rect x="14" y="30" width="20" height="6" rx="3" fill="rgba(255,255,255,0.45)" />
        </g>

        <g transform="translate(360 306)">
          <rect width="66" height="66" rx="18" fill="url(#madBuildA)" opacity="0.85" />
          <circle cx="20" cy="20" r="8" fill="rgba(255,255,255,0.9)" />
          <rect x="14" y="38" width="38" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
        </g>

        <g transform="translate(24 434)">
          <circle r="26" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" />
          <path d="M-8 -8 L8 8 M8 -8 L-8 8" stroke="rgba(255,255,255,0.55)" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g transform="translate(316 452)">
          <rect width="56" height="56" rx="16" fill="url(#madBuildB)" opacity="0.9" />
          <rect x="12" y="14" width="16" height="16" rx="4" fill="rgba(255,255,255,0.9)" />
          <rect x="32" y="14" width="12" height="16" rx="4" fill="rgba(255,255,255,0.55)" />
          <rect x="12" y="34" width="32" height="6" rx="3" fill="rgba(255,255,255,0.7)" />
        </g>

        {/* screen content — abstract layout blocks, not a real app */}
        <g transform="translate(146 110)">
          <rect width="132" height="30" rx="8" fill="rgba(255,255,255,0.14)" />
          <rect width="80" height="46" rx="10" y="42" fill="rgba(255,255,255,0.1)" />
          <rect width="132" height="18" rx="6" y="98" fill="rgba(255,255,255,0.08)" />
          <rect width="100" height="18" rx="6" y="122" fill="rgba(255,255,255,0.08)" />
          <rect width="60" height="18" rx="6" y="146" fill="rgba(255,255,255,0.08)" />
        </g>
      </svg>
    </div>
  );
};

export default MobileBuildAbstract;
