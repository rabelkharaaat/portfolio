"use client";

// ── Ticker words — edit freely ──
const ITEMS = [
  "Web Design",
  "Ecommerce",
  "AI Marketing",
  "Shopify",
  "Framer",
  "Brand Design",
  "Landing Pages",
  "Paid Ads",
];

/**
 * Infinite horizontal ticker. The track is duplicated and translated
 * -50% via a CSS keyframe, so the loop is seamless and GPU-cheap.
 */
export default function Marquee() {
  return (
    <section
      aria-hidden
      className="border-y border-line bg-dark2 py-6"
    >
      <div className="group flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-serif text-2xl italic text-secondary transition-colors duration-300 hover:text-accent sm:text-3xl">
                {item}
              </span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
        {/* Second copy for seamless loop */}
        <div
          className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]"
          aria-hidden
        >
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 font-serif text-2xl italic text-secondary transition-colors duration-300 hover:text-accent sm:text-3xl">
                {item}
              </span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
