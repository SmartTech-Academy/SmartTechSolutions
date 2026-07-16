/**
 * Bespoke inline-SVG "hand holding a phone with an app screen visible" for
 * the Mobile App Development "Why SmartTech" section. Ships as vector
 * markup instead of a sourced photo — no network request, no decode cost,
 * pixel-crisp at any size — while depicting exactly what the section asks
 * for: a hand holding a phone, screen visible, running a native app UI.
 */
const MobileWhyVisual = () => {
  return (
    <div className="mad-why-visual" role="img" aria-label="A hand holding a phone running a native SmartTech-built mobile app">
      <svg viewBox="0 0 560 700" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="madWhyBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eef1ff" />
            <stop offset="55%" stopColor="#f4eeff" />
            <stop offset="100%" stopColor="#eaf6ff" />
          </linearGradient>
          <linearGradient id="madWhyPhone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c2233" />
            <stop offset="100%" stopColor="#0d1220" />
          </linearGradient>
          <linearGradient id="madWhyScreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f57ef" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="madWhySkin" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a5a3b" />
            <stop offset="100%" stopColor="#6b4128" />
          </linearGradient>
        </defs>

        <rect width="560" height="700" rx="24" fill="url(#madWhyBg)" />

        {/* soft ambient blobs, static */}
        <circle cx="90" cy="120" r="140" fill="rgba(47,87,239,0.12)" />
        <circle cx="470" cy="560" r="160" fill="rgba(124,58,237,0.12)" />

        {/* forearm + hand, holding the phone from below */}
        <path
          d="M180 700 C170 560 210 470 260 430 C300 400 340 400 372 430 C404 460 402 520 380 560 L380 700 Z"
          fill="url(#madWhySkin)"
        />
        <path
          d="M212 700 C204 590 232 500 268 460"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* thumb crossing the phone's lower-left edge */}
        <path
          d="M244 486 C270 470 300 466 322 480 C334 488 336 502 326 512 C300 528 268 526 246 508 C238 500 238 492 244 486 Z"
          fill="url(#madWhySkin)"
        />

        {/* phone body */}
        <g transform="translate(198 120)">
          <rect x="0" y="0" width="230" height="470" rx="34" fill="url(#madWhyPhone)" />
          <rect x="8" y="8" width="214" height="454" rx="27" fill="#05070d" />

          {/* screen content — native app UI */}
          <rect x="8" y="8" width="214" height="454" rx="27" fill="url(#madWhyScreen)" />

          {/* status bar */}
          <text x="26" y="34" fill="#ffffff" fontSize="13" fontWeight="700" fontFamily="inherit">9:41</text>
          <rect x="178" y="24" width="34" height="10" rx="3" fill="rgba(255,255,255,0.85)" />

          {/* app header */}
          <circle cx="34" cy="66" r="14" fill="rgba(255,255,255,0.85)" />
          <rect x="56" y="58" width="90" height="9" rx="4" fill="rgba(255,255,255,0.9)" />
          <rect x="56" y="72" width="60" height="7" rx="3" fill="rgba(255,255,255,0.55)" />
          <circle cx="196" cy="66" r="13" fill="rgba(255,255,255,0.18)" />

          {/* stat card */}
          <rect x="22" y="104" width="188" height="86" rx="16" fill="rgba(255,255,255,0.12)" />
          <rect x="38" y="122" width="70" height="9" rx="4" fill="rgba(255,255,255,0.85)" />
          <rect x="38" y="140" width="110" height="16" rx="5" fill="#ffffff" />
          <path d="M38 172 L64 160 L84 170 L110 150 L136 164 L162 148" fill="none" stroke="#4ade80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* list rows */}
          {[0, 1, 2].map((row) => (
            <g key={row} transform={`translate(22 ${210 + row * 62})`}>
              <rect width="188" height="50" rx="14" fill="rgba(255,255,255,0.08)" />
              <circle cx="26" cy="25" r="12" fill="rgba(255,255,255,0.5)" />
              <rect x="48" y="15" width="90" height="8" rx="4" fill="rgba(255,255,255,0.85)" />
              <rect x="48" y="29" width="60" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
              <rect x="152" y="18" width="20" height="20" rx="6" fill="rgba(255,255,255,0.2)" />
            </g>
          ))}

          {/* bottom nav */}
          <rect x="8" y="404" width="214" height="58" rx="0" fill="rgba(5,7,13,0.35)" />
          {[0, 1, 2, 3].map((tab) => (
            <circle key={tab} cx={52 + tab * 44} cy={433} r="9" fill={tab === 0 ? "#ffffff" : "rgba(255,255,255,0.4)"} />
          ))}
        </g>

        {/* notch */}
        <rect x="290" y="128" width="46" height="14" rx="7" fill="#05070d" />
      </svg>
    </div>
  );
};

export default MobileWhyVisual;
