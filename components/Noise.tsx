/**
 * Subtle film-grain overlay rendered with an SVG fractal-noise filter.
 * Sits above all content (pointer-events: none). Tune intensity via the
 * `.grain-overlay` opacity in globals.css.
 */
export default function Noise() {
  return (
    <div className="grain-overlay" aria-hidden>
      <svg className="h-full w-full">
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
