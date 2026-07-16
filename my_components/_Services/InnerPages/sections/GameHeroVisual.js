/**
 * Bespoke inline-SVG hero illustration for the Game Development page — the
 * only "real" game-specific asset in the project library (project_3.webp)
 * turned out to be a mismatched, watermarked "preview image only" stock
 * photo unrelated to any shipped SmartTech game, so it isn't used here.
 * This is an original, abstract game-development scene (controller,
 * level HUD, character silhouette) instead — vector, no network request,
 * crisp at any size, tinted by the page's own accent color.
 */
const GameHeroVisual = () => {
  return (
    <div className="svc-hero-single__visual" role="img" aria-label="Abstract illustration of a game controller and level interface">
      <svg viewBox="0 0 900 560" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gameBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a0505" />
            <stop offset="100%" stopColor="#3f0d0d" />
          </linearGradient>
          <linearGradient id="gameAccent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        <rect width="900" height="560" fill="url(#gameBg)" />

        {/* HUD frame */}
        <rect x="60" y="60" width="780" height="440" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" />

        {/* level progress bar */}
        <rect x="96" y="96" width="420" height="16" rx="8" fill="rgba(255,255,255,0.1)" />
        <rect x="96" y="96" width="270" height="16" rx="8" fill="url(#gameAccent)" />
        <text x="96" y="140" fontSize="20" fontWeight="800" fill="#ffffff" fontFamily="inherit">LEVEL 07</text>

        {/* score chip */}
        <g transform="translate(700 88)">
          <rect width="140" height="46" rx="12" fill="rgba(255,255,255,0.08)" />
          <text x="16" y="30" fontSize="18" fontWeight="800" fill="#ffffff" fontFamily="inherit">128,450</text>
        </g>

        {/* character silhouette, centered */}
        <g transform="translate(450 300)">
          <ellipse cx="0" cy="150" rx="120" ry="22" fill="rgba(0,0,0,0.35)" />
          <path
            d="M0 -140 C40 -140 62 -108 62 -70 C62 -46 52 -30 62 -14 C78 12 70 44 40 56 L46 150 L-46 150 L-40 56 C-70 44 -78 12 -62 -14 C-52 -30 -62 -46 -62 -70 C-62 -108 -40 -140 0 -140 Z"
            fill="url(#gameAccent)"
            opacity="0.92"
          />
          <circle cx="-24" cy="-92" r="9" fill="#1a0505" />
          <circle cx="24" cy="-92" r="9" fill="#1a0505" />
        </g>

        {/* floating game controller, lower-left */}
        <g transform="translate(140 380)">
          <rect x="-70" y="-30" width="140" height="70" rx="30" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
          <circle cx="-34" cy="0" r="10" fill="none" stroke="#ffffff" strokeWidth="2.5" />
          <path d="M-34 -10 L-34 10 M-44 0 L-24 0" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="34" cy="-8" r="7" fill="url(#gameAccent)" />
          <circle cx="50" cy="6" r="7" fill="rgba(255,255,255,0.5)" />
        </g>

        {/* floating achievement badge, upper-right */}
        <g transform="translate(770 280)">
          <circle r="36" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" />
          <path d="M-14 2 L-4 12 L16 -12" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* dashed connectors */}
        <g stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeDasharray="4 6" fill="none">
          <path d="M210 380 L330 340" />
          <path d="M734 280 L560 290" />
        </g>
      </svg>
    </div>
  );
};

export default GameHeroVisual;
