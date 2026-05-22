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
    <section id="top" className="relative min-h-svh overflow-hidden">
      {/* ── Banner image (portrait photo, blended into black) ── */}
      <div className="absolute inset-0">
        {/* Fallback backdrop if the photo is missing */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark2 to-base" />
        {/*
          HERO BANNER — uses /public/dubai-night.jpg (the night-city shot).
          It's a portrait photo, so the gradients below fade its edges
          into the black background for a true full-width banner.
        */}
        <Photo
          src="/dubai-night.jpg"
          alt=""
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Blend layers — left dark for text, top/bottom fade to black */}
        <div className="absolute inset-0 bg-gradient-to-r from-base via-base/75 to-base/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/25 to-base/55" />
        <div className="absolute inset-0 bg-base/20" />
      </div>

      {/* Soft accent glow for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent/[0.06] blur-[120px]"
      />

      {/* ── Content — anchored lower-left, over the image ── */}
      <div className="container-px relative z-10 flex min-h-svh flex-col justify-end pb-28 pt-[120px] sm:pb-32">
        <motion.p
          {...rise(0.3)}
          className="font-mono text-xs uppercase tracking-[0.28em] text-accent"
        >
          Designer · Developer · Builder
        </motion.p>

        <h1 className="mt-6 font-serif text-display tracking-[-0.02em] text-primary [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]">
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

        <motion.div
          {...rise(1.04)}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
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
              className="inline-flex items-center gap-3 rounded-full border border-line bg-base/40 px-7 py-3.5 text-sm font-medium text-primary backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              Get In Touch
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* ── Rotating availability badge — bottom-right over the image ── */}
      <motion.div
        {...rise(0.85)}
        className="absolute bottom-12 right-8 z-10 hidden h-28 w-28 sm:block lg:right-12 lg:h-32 lg:w-32"
      >
        <div className="relative h-full w-full rounded-full border border-line bg-base/70 backdrop-blur-md">
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
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg text-accent">✦</span>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        {...rise(1.2)}
        onClick={() => scrollTo("#work")}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
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
