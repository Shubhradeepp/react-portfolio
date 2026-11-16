// Small print-style ornaments. Purely decorative, so always hidden from assistive tech.
const starPoints = (n, outer, inner) =>
  Array.from({ length: n * 2 }, (_, i) => {
    const r = i % 2 ? inner : outer;
    const a = (Math.PI * i) / n - Math.PI / 2;
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

/** A starburst. Colour it with the CSS `color` property. */
export const Star = ({ points = 12, inner = 34, ...props }) => (
  <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" {...props}>
    <polygon
      points={starPoints(points, 47, inner)}
      fill="currentColor"
      stroke="var(--ink)"
      strokeWidth="3"
      strokeLinejoin="round"
    />
  </svg>
);

/** A hand-pulled wavy rule. */
export const Squiggle = (props) => (
  <svg viewBox="0 0 120 16" aria-hidden="true" focusable="false" {...props}>
    <path
      d="M2 8 Q12 -2 22 8 T42 8 T62 8 T82 8 T102 8 T118 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);
