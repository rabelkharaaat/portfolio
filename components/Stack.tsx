"use client";

import { Reveal } from "./Reveal";

// ── Toolkit — monochrome wordmarks, edit freely ──
const TOOLS = [
  "Figma",
  "Shopify",
  "Framer",
  "Webflow",
  "ChatGPT",
  "Midjourney",
  "Runway",
  "Meta Ads",
  "TikTok",
  "Google Ads",
  "Notion",
  "Photoshop",
];

/** A single marquee row. `reverse` flips the scroll direction. */
function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...TOOLS, ...TOOLS].map((tool, i) => (
          <span
            key={i}
            className="px-8 font-mono text-lg uppercase tracking-[0.1em] text-muted transition-colors duration-300 hover:text-primary sm:text-xl"
          >
            {tool}
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className={`flex shrink-0 items-center ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...TOOLS, ...TOOLS].map((tool, i) => (
          <span
            key={i}
            className="px-8 font-mono text-lg uppercase tracking-[0.1em] text-muted transition-colors duration-300 hover:text-primary sm:text-xl"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="py-28 sm:py-36">
      <div className="container-px">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-6">
            <p className="section-label">04 — Toolkit</p>
            <p className="font-mono text-xs text-muted">Design · AI · Growth</p>
          </div>
        </Reveal>
      </div>

      {/* Edge-fade logo wall */}
      <Reveal className="mt-14">
        <div className="relative">
          {/* Side fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent sm:w-40" />
          <div className="flex flex-col gap-6">
            <Row />
            <Row reverse />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
