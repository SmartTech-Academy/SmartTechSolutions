/**
 * Bespoke inline-SVG "security operations" visual for the Cybersecurity FAQ
 * section. The shared ServiceFaq component normally shows a generic stock
 * photo (my_data/services/faq.json -> faq.webp, reused across all 12
 * service pages) — on Cybersecurity that generic image read as unrelated
 * to the page's subject. Rendered as vector instead of a sourced photo: it
 * ships as a few hundred bytes of markup with zero extra network request,
 * decode cost, or layout shift, and stays pixel-crisp at any size —
 * strictly better for Core Web Vitals than an optimized raster image would
 * have been, while actually depicting the page's own capability pillars
 * (MDR/XDR, SIEM, IAM, DFIR) instead of a stand-in photo.
 */
const PILLS = [
  { label: "24/7 MDR/XDR", cx: 78, cy: 92, delay: "0s" },
  { label: "SIEM · SOAR", cx: 452, cy: 128, delay: "0.4s" },
  { label: "IAM", cx: 96, cy: 430, delay: "0.8s" },
  { label: "DFIR", cx: 438, cy: 468, delay: "1.2s" },
];

const CysecFaqVisual = () => {
  return (
    <div className="cysec-faq-visual" role="img" aria-label="SmartTech security operations — real-time monitoring across MDR/XDR, SIEM, IAM, and DFIR">
      <svg viewBox="0 0 526 560" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cysecBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0d1220" />
            <stop offset="55%" stopColor="#141826" />
            <stop offset="100%" stopColor="#1a1420" />
          </linearGradient>
          <radialGradient id="cysecGlowRed" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="rgba(220,38,38,0.35)" />
            <stop offset="100%" stopColor="rgba(220,38,38,0)" />
          </radialGradient>
          <radialGradient id="cysecGlowBlue" cx="50%" cy="42%" r="60%">
            <stop offset="0%" stopColor="rgba(47,87,239,0.28)" />
            <stop offset="100%" stopColor="rgba(47,87,239,0)" />
          </radialGradient>
          <linearGradient id="cysecShield" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6a6a" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        <rect width="526" height="560" rx="20" fill="url(#cysecBg)" />
        <rect width="526" height="560" rx="20" fill="url(#cysecGlowBlue)" />
        <rect width="526" height="560" rx="20" fill="url(#cysecGlowRed)" />

        {/* dot-grid, static (see Hero.css / global-effects.css note on why
            decorative grids on this site no longer drift continuously) */}
        <rect width="526" height="560" rx="20" fill="url(#cysecDots)" opacity="0.5" />
        <pattern id="cysecDots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.16)" />
        </pattern>

        {/* scan rings behind the shield */}
        <g opacity="0.5">
          <circle cx="263" cy="255" r="150" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <circle cx="263" cy="255" r="112" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          <circle cx="263" cy="255" r="74" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </g>

        {/* shield */}
        <g transform="translate(263 255)">
          <path
            d="M0 -86 L72 -58 V6 C72 62 40 100 0 118 C-40 100 -72 62 -72 6 V-58 Z"
            fill="url(#cysecShield)"
            opacity="0.95"
          />
          <path
            d="M0 -86 L72 -58 V6 C72 62 40 100 0 118 C-40 100 -72 62 -72 6 V-58 Z"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2"
          />
          <path
            d="M-32 4 L-10 28 L34 -24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* floating capability pills */}
        {PILLS.map((pill) => (
          <g key={pill.label} transform={`translate(${pill.cx} ${pill.cy})`}>
            <rect
              x="-58"
              y="-17"
              width="116"
              height="34"
              rx="17"
              fill="rgba(255,255,255,0.07)"
              stroke="rgba(255,255,255,0.16)"
            />
            <circle cx="-40" cy="0" r="4" fill="#4ade80" />
            <text x="-28" y="5" fill="#ffffff" fontSize="12.5" fontWeight="700" fontFamily="inherit">
              {pill.label}
            </text>
          </g>
        ))}

        {/* bottom activity waveform */}
        <g transform="translate(43 510)" opacity="0.8">
          <path
            d="M0 12 H60 L76 -14 L96 34 L112 0 L132 20 L150 12 H440"
            fill="none"
            stroke="rgba(74,222,128,0.85)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

export default CysecFaqVisual;
