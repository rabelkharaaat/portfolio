"use client";

import { Reveal, RevealText } from "./Reveal";
import Photo from "./Photo";

// ── Stats row — edit values here ──
const STATS = [
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "Years Building" },
  { value: "3", label: "Languages" },
  { value: "1", label: "Mission: Build Better" },
];

const PARAGRAPHS = [
  "I'm Mohamed. 19 years old, based in Tangier, building for Dubai's small business scene.",
  "I started designing and selling on print-on-demand platforms at 14, and I've been building digital products ever since — Shopify stores, landing pages, ad creatives, AI workflows. All self-taught, all in production.",
  "Now I'm focused on helping restaurants, car rentals, salons, and service businesses in Dubai compete with brands ten times their size — through smart design and AI-powered creative.",
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="container-px">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-6">
            <p className="section-label">03 — About</p>
            <p className="font-mono text-xs text-muted">Tangier → Dubai</p>
          </div>
        </Reveal>

        {/* Two-column layout */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: big statement */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-[2.5rem] leading-[1.1] text-primary sm:text-5xl lg:text-[3.5rem]">
              <RevealText
                text="I build websites, stores, and creative work for businesses that want"
              />{" "}
              <span className="italic text-accent">
                <RevealText text="more than a template." delay={0.3} />
              </span>
            </h2>
          </div>

          {/* Right: paragraphs */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:pt-3">
            {PARAGRAPHS.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-sm leading-relaxed text-secondary sm:text-base">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Cinematic city strip — the Tangier → Dubai narrative */}
        <Reveal className="mt-20">
          <div className="relative aspect-[21/9] overflow-hidden rounded-xl border border-line">
            <div className="absolute inset-0 bg-gradient-to-br from-dark2 to-base" />
            {/*
              ATMOSPHERE IMAGE — drop your night-city photo at
              /public/dubai-night.jpg (the skyline-at-night shot).
            */}
            <Photo
              src="/dubai-night.jpg"
              alt="City skyline at night"
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/30 to-transparent" />
            <div className="absolute inset-0 bg-accent/[0.05] mix-blend-overlay" />

            {/* Caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-8 sm:right-8">
              <p className="font-serif text-xl italic text-primary sm:text-3xl">
                Built in Tangier. Aimed at Dubai.
              </p>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-secondary sm:block">
                Relocating · July 2026
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="h-full bg-surface p-6 sm:p-8">
                <p className="font-serif text-4xl italic text-accent sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-secondary">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
