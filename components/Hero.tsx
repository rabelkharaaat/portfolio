"use client";

import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import Photo from "./Photo";

const ease = [0.22, 1, 0.36, 1] as const;

/** Hero load sequence — each element fades up with a staggered delay. */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

/** Smooth-scroll helper shared with the nav. */
function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const lenis = (window as Window & { lenis?: { scrollTo: (t: Element) => void } }).lenis;
  if (lenis) lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth" });
}

// Rotating badge text
const DISC_TEXT = "★ AVAILABLE FOR PROJECTS · JULY 2026 · DUBAI ";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh overflow-hidden pt-[72px]"
    >
      {/* Atmospheric depth — soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-accent/[0.07] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/[0.02] blur-[100px]"
      />

      <div className="container-px relative grid w-full grid-cols-1 items-center gap-14 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
        {/* ── Left: copy ── */}
        <div className="lg:col-span-7">
          <motion.p
            {...rise(0.3)}
            className="font-mono text-xs uppercase tracking-[0.28em] text-accent"
          >
            Designer · Developer · Builder
          </motion.p>

          <h1 className="mt-6 font-serif text-display tracking-[-0.02em] text-primary">
            <motion.span {...rise(0.42)} className="block">
              Crafting digital
            </motion.span>
            <motion.span {...rise(0.54)} className="block">
              experiences for
            </motion.span>
            <motion.span {...rise(0.66)} className="block italic text-accent">
              businesses ready
            </motion.span>
            <motion.span {...rise(0.78)} className="block">
              to scale.
            </motion.span>
          </h1>

          <motion.p
            {...rise(0.92)}
            className="mt-8 max-w-md text-base leading-relaxed text-secondary sm:text-lg"
          >
            Web design, ecommerce, and AI-powered marketing for Dubai&apos;s
            most ambitious SMBs.
          </motion.p>

          <motion.div {...rise(1.04)} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.4}>
              <button
                onClick={() => scrollTo("#work")}
                className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-base transition-colors"
              >
                View Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-3 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
              >
                Get In Touch
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* ── Right: portrait + rotating availability badge ── */}
        <motion.div
          {...rise(0.6)}
          className="relative mx-auto w-full max-w-[340px] lg:col-span-5 lg:mx-0 lg:ml-auto lg:max-w-none"
        >
          {/* Portrait frame */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
            {/* Fallback backdrop — shows if the photo is missing */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface via-dark2 to-base" />
            {/*
              HERO PORTRAIT — drop your photo at /public/hero-portrait.jpg
              (the black-tee mirror shot). Treated dark + grain to match.
            */}
            <Photo
              src="/hero-portrait.jpg"
              alt="Mohamed Afkir"
              priority
              sizes="(max-width: 1024px) 340px, 40vw"
              className="object-cover object-center contrast-[1.08] grayscale-[0.15]"
            />
            {/* Cinematic gradient grade */}
            <div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-transparent" />
            <div className="absolute inset-0 bg-accent/[0.06] mix-blend-overlay" />

            {/* Caption tag */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                Tangier, MA
              </span>
            </div>
          </div>

          {/* Rotating availability badge — overlaps the frame corner */}
          <div className="absolute -bottom-7 -left-7 h-28 w-28 sm:-left-9 sm:-bottom-9 sm:h-32 sm:w-32">
            <div className="relative h-full w-full rounded-full border border-line bg-base/90 backdrop-blur-sm">
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full animate-spin-slow"
                aria-hidden
              >
                <defs>
                  <path
                    id="disc-circle"
                    d="M 100,100 m -66,0 a 66,66 0 1,1 132,0 a 66,66 0 1,1 -132,0"
                  />
                </defs>
                <text className="fill-secondary font-mono text-[11px] uppercase tracking-[0.18em]">
                  <textPath href="#disc-circle">{DISC_TEXT}</textPath>
                </text>
              </svg>
              {/* Center mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg text-accent">✦</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.button
        {...rise(1.2)}
        onClick={() => scrollTo("#work")}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>
    </section>
  );
}
