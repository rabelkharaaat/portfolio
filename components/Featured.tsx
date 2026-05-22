"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Reveal, RevealText } from "./Reveal";
import Magnetic from "./Magnetic";

// ── The one project that matters right now: Aurex ──
const AUREX_URL = "https://aurex-landing-production.up.railway.app/";

// Numbers pulled from the Aurex landing page — edit as results grow.
const METRICS = [
  { value: "312%", label: "Engagement lift" },
  { value: "4.1×", label: "Return on ad spend" },
  { value: "4.7%", label: "Conversion rate" },
  { value: "0.8s", label: "Load speed" },
];

// What the agency does — straight from the Aurex deck.
const CAPABILITIES = [
  "Website Creation",
  "Landing Pages",
  "Ecommerce",
  "Brand Design",
  "Social Marketing",
  "Content Creation",
];

export default function Featured() {
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle parallax on the project frame.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to("[data-aurex-glow]", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-28 sm:py-36">
      <div className="container-px">
        {/* Section header */}
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-6">
            <p className="section-label">01 — The Work</p>
            <p className="font-mono text-xs text-muted">Currently · One focus</p>
          </div>
        </Reveal>

        {/* Intro line */}
        <Reveal delay={0.05}>
          <p className="mt-10 max-w-2xl font-serif text-2xl leading-snug text-secondary sm:text-3xl">
            Right now my work <span className="italic text-primary">is</span> a
            company. Everything I&apos;ve learned — design, code, marketing —
            lives in one place.
          </p>
        </Reveal>

        {/* ── Aurex showcase ── */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — the live-site frame */}
          <Reveal className="lg:col-span-7">
            <a
              href={AUREX_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group relative block overflow-hidden rounded-xl border border-line bg-dark2"
              aria-label="Open the Aurex agency website"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                <span className="ml-3 truncate font-mono text-[10px] text-muted">
                  aurex-agency.com
                </span>
              </div>

              {/* Faux viewport — atmospheric, with the Aurex line */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <div
                  data-aurex-glow
                  className="absolute inset-x-0 -inset-y-[20%] bg-[radial-gradient(circle_at_30%_30%,rgba(212,165,116,0.16),transparent_60%)]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#161310] via-[#1b160f] to-[#0d0b08]" />

                <div className="relative flex h-full flex-col justify-center px-8 sm:px-12">
                  <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
                    Aurex Agency
                  </span>
                  <p className="mt-4 max-w-md font-serif text-3xl italic leading-tight text-primary sm:text-5xl">
                    We don&apos;t follow trends. We set them.
                  </p>
                  <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary">
                    A full-service digital agency built for Dubai — brand,
                    web, and growth that actually converts.
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-base/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full border border-accent/60 bg-base/60 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    View Live Site →
                  </span>
                </div>
              </div>
            </a>
          </Reveal>

          {/* Right — the story */}
          <div className="flex flex-col lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Founder · Designer · Developer
              </p>
              <h3 className="mt-4 font-serif text-[3rem] leading-[0.95] text-primary sm:text-6xl">
                <RevealText text="Aurex" />
                <span className="block italic text-accent">
                  <RevealText text="Agency" delay={0.15} />
                </span>
              </h3>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 text-sm leading-relaxed text-secondary sm:text-base">
                I founded Aurex to do one thing properly: give ambitious small
                businesses the kind of brand and digital presence usually
                reserved for companies ten times their size. I design it, I
                build it, I run the growth.
              </p>
            </Reveal>

            {/* Capabilities */}
            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-wrap gap-2">
                {CAPABILITIES.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-secondary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.3}>
              <div className="mt-9">
                <Magnetic strength={0.3}>
                  <a
                    href={AUREX_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Visit aurex
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Metrics strip ── */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.07}>
              <div className="h-full bg-surface p-6 sm:p-8">
                <motion.p
                  className="font-serif text-4xl italic text-accent sm:text-5xl"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                >
                  {m.value}
                </motion.p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-secondary">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
