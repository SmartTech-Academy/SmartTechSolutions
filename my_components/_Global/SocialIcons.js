// X (formerly Twitter) and TikTok have no glyph in the bundled feather/
// FontAwesome subsets this project ships (both are tree-shaken builds —
// confirmed via grep before adding these, rather than shipping a class
// that silently renders nothing). Plain inline SVGs sized to match the
// surrounding icon-font glyphs (1em square, currentColor) so they drop
// into the same `<i>`-style icon slots without any extra CSS.
export const XIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.6 5.82c-1.02-.9-1.65-2.19-1.65-3.63h-3.28v13.76c0 1.68-1.37 3.05-3.05 3.05a3.05 3.05 0 0 1-1.63-5.63V9.94a6.33 6.33 0 0 0-1.42-.16A6.35 6.35 0 1 0 11.99 16V9.4a6.94 6.94 0 0 0 4.08 1.31V7.44a4.85 4.85 0 0 1-1.47-1.62z" />
  </svg>
);
