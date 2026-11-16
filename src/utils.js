export const SITE_URL = "https://shubhradeep-maity-dev-portfolio.vercel.app";

// Sets the --tone / --tone-ink pair for a named colour from the palette in index.css
// (primary, secondary, mustard, orange, olive, teal). Add a new colour there plus an --on-<name>.
export const toneVars = (name) => ({ "--tone": `var(--${name})`, "--tone-ink": `var(--on-${name})` });
