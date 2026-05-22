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

        {/* Portrait + story side by side */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: portrait photo */}
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line">
              {/* Fallback backdrop if the photo is missing */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface via-dark2 to-base" />
              {/*
                PORTRAIT — uses /public/hero-portrait.jpg (the black-tee shot).
                Graded dark + slight desaturation to match the site.
              */}
              <Photo
                src="/hero-portrait.jpg"
                alt="Mohamed Afkir"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center contrast-[1.08] grayscale-[0.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-accent/[0.05] mix-blend-overlay" />

              {/* Caption tag */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                  Mohamed Afkir · Tangier
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: statement + paragraphs */}
          <div className="flex flex-col lg:col-span-7">
            <h2 className="font-serif text-[2.25rem] leading-[1.12] text-primary sm:text-[2.75rem] lg:text-5xl">
              <RevealText text="I build websites, stores, and creative work for businesses that want" />{" "}
              <span className="italic text-accent">
                <RevealText text="more than a template." delay={0.3} />
              </span>
            </h2>

            <div className="mt-9 flex flex-col gap-6">
              {PARAGRAPHS.map((p, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="max-w-xl text-sm leading-relaxed text-secondary sm:text-base">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
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
