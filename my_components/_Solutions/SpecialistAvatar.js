/**
 * Bespoke inline-SVG avatar for the "Dedicated specialist team" trust badge
 * on non-partner Solutions pages (NetSuite, SAP Business One, Dynamics 365)
 * — previously an empty circle, since "feather-tool" isn't part of this
 * project's bundled feather.css icon subset (public/css/plugins/feather.css
 * only ships ~266 of the full set), then a generic silhouette. Now a
 * flat-illustration portrait — a Black woman's face, coily hair, taking a
 * call — reading immediately as "support specialist," matching the
 * "Certified implementation partner" badge's use of a real feather-award
 * icon on the partner pages.
 */
const SpecialistAvatar = () => {
  return (
    <span className="sol-trust-badge__avatar" role="img" aria-label="Support specialist taking a call">
      <svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="specSkin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a5a3b" />
            <stop offset="100%" stopColor="#714727" />
          </linearGradient>
          <linearGradient id="specHair" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a1b12" />
            <stop offset="100%" stopColor="#160e09" />
          </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="32" fill="rgba(var(--sol-accent), 0.12)" />

        {/* shoulders / top */}
        <path d="M12 58c1.5-10 9-16.5 20-16.5S50.5 48 52 58Z" fill="#334155" />

        {/* coily hair, behind the face */}
        <path
          d="M17 27c-1-9 5.5-16.5 15-16.5S47 18 46 27c1.5-1 3-.4 3 1.5 0 2.5-2.5 4-4.5 3.2C43.5 37 38.5 41 32 41s-11.5-4-12.5-9.3C17.5 32.5 15 31 15 28.5 15 26.6 15.5 26 17 27Z"
          fill="url(#specHair)"
        />

        {/* face */}
        <ellipse cx="32" cy="29" rx="11.5" ry="13" fill="url(#specSkin)" />

        {/* simple friendly features */}
        <circle cx="27.5" cy="28" r="1.6" fill="#241409" />
        <circle cx="36.5" cy="28" r="1.6" fill="#241409" />
        <path d="M27 35c1.6 1.6 8.4 1.6 10 0" stroke="#241409" strokeWidth="1.6" strokeLinecap="round" fill="none" />

        {/* small hoop earring */}
        <circle cx="21.5" cy="33" r="2.1" fill="none" stroke="#f2c14e" strokeWidth="1.4" />

        {/* phone held to her (right, viewer-left) ear */}
        <g transform="translate(15 20) rotate(-14)">
          <rect x="0" y="0" width="9.5" height="17" rx="4" fill="#ffffff" />
          <rect x="2.2" y="2.4" width="5" height="10" rx="1" fill="rgb(var(--sol-accent))" opacity="0.4" />
        </g>
      </svg>
    </span>
  );
};

export default SpecialistAvatar;
