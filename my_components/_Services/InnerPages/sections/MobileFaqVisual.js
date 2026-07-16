/**
 * Bespoke inline-SVG visual for the Mobile App Development FAQ section —
 * replaces the generic shared stock photo (my_data/services/faq.json's
 * faq.webp, reused across all 12 service FAQ sections) with a phone/app
 * mockup built specifically for this page's subject. Vector, not a
 * sourced photo: zero extra network request or decode cost, crisp at any
 * size. Mirrors the approach used for the Cybersecurity FAQ visual.
 */
const MobileFaqVisual = () => {
  return (
    <div className="mad-faq-visual" role="img" aria-label="A mobile app interface with App Store and Google Play ratings">
      <svg viewBox="0 0 526 644" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="madFaqBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4f6fb" />
            <stop offset="100%" stopColor="#e9edfb" />
          </linearGradient>
          <linearGradient id="madFaqPhone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c2233" />
            <stop offset="100%" stopColor="#0d1220" />
          </linearGradient>
          <linearGradient id="madFaqScreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        <rect width="526" height="644" rx="20" fill="url(#madFaqBg)" />
        <circle cx="60" cy="60" r="120" fill="rgba(47,87,239,0.08)" />
        <circle cx="470" cy="580" r="140" fill="rgba(249,115,22,0.08)" />

        {/* phone */}
        <g transform="translate(163 74)">
          <rect x="0" y="0" width="200" height="410" rx="30" fill="url(#madFaqPhone)" />
          <rect x="7" y="7" width="186" height="396" rx="24" fill="url(#madFaqScreen)" />

          <text x="24" y="34" fill="#ffffff" fontSize="12" fontWeight="700" fontFamily="inherit">9:41</text>
          <rect x="24" y="56" width="60" height="10" rx="5" fill="rgba(255,255,255,0.9)" />
          <rect x="24" y="72" width="100" height="8" rx="4" fill="rgba(255,255,255,0.6)" />

          <rect x="24" y="98" width="152" height="70" rx="14" fill="rgba(255,255,255,0.14)" />
          <rect x="38" y="112" width="70" height="8" rx="4" fill="#ffffff" />
          <rect x="38" y="126" width="110" height="14" rx="5" fill="#ffffff" />
          <rect x="38" y="146" width="90" height="7" rx="3" fill="rgba(255,255,255,0.6)" />

          {[0, 1, 2].map((row) => (
            <g key={row} transform={`translate(24 ${186 + row * 54})`}>
              <rect width="152" height="42" rx="12" fill="rgba(255,255,255,0.1)" />
              <circle cx="22" cy="21" r="10" fill="rgba(255,255,255,0.5)" />
              <rect x="40" y="13" width="80" height="7" rx="3.5" fill="rgba(255,255,255,0.85)" />
              <rect x="40" y="24" width="50" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
            </g>
          ))}
        </g>
        <rect x="240" y="82" width="46" height="12" rx="6" fill="#05070d" />

        {/* App Store rating badge */}
        <g transform="translate(40 130)">
          <rect width="128" height="70" rx="16" fill="#ffffff" stroke="rgba(23,32,51,0.08)" />
          <text x="16" y="28" fontSize="11" fontWeight="700" fill="#172033" fontFamily="inherit">App Store</text>
          <text x="16" y="52" fontSize="20" fontWeight="800" fill="#172033" fontFamily="inherit">4.9</text>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d="M0 -6 L1.8 -2 L6 -2 L2.6 0.8 L4 5 L0 2.4 L-4 5 L-2.6 0.8 L-6 -2 L-1.8 -2 Z"
              fill="#f59e0b"
              transform={`translate(${60 + i * 13} 44) scale(0.8)`}
            />
          ))}
        </g>

        {/* Google Play rating badge */}
        <g transform="translate(358 440)">
          <rect width="128" height="70" rx="16" fill="#ffffff" stroke="rgba(23,32,51,0.08)" />
          <text x="16" y="28" fontSize="11" fontWeight="700" fill="#172033" fontFamily="inherit">Google Play</text>
          <text x="16" y="52" fontSize="20" fontWeight="800" fill="#172033" fontFamily="inherit">4.8</text>
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d="M0 -6 L1.8 -2 L6 -2 L2.6 0.8 L4 5 L0 2.4 L-4 5 L-2.6 0.8 L-6 -2 L-1.8 -2 Z"
              fill="#22c55e"
              transform={`translate(${60 + i * 13} 44) scale(0.8)`}
            />
          ))}
        </g>

        {/* code bracket accent, bottom-left */}
        <text x="30" y="600" fontSize="46" fontWeight="800" fill="rgba(47,87,239,0.18)" fontFamily="monospace">{"</>"}</text>
      </svg>
    </div>
  );
};

export default MobileFaqVisual;
