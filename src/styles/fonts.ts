import { Heebo, Frank_Ruhl_Libre } from "next/font/google";

/**
 * SITE TYPOGRAPHY — TBD (not decided).
 * Heebo / Frank Ruhl Libre are TEMPORARY stand-ins so the layout can be reviewed.
 * They are not the E-Ventures brand choice. To change typography, edit ONLY this file
 * (and the two role tokens --font-body / --font-display in tokens.css if the variable names change).
 * Do NOT derive site typography from the logo, and never use Clicker Script here (see docs/BRAND.md).
 */
const body = Heebo({ subsets: ["hebrew", "latin"], variable: "--font-site-body", display: "swap" });
const display = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500"],
  variable: "--font-site-display",
  display: "swap",
});

export const fontClassName = `${body.variable} ${display.variable}`;
