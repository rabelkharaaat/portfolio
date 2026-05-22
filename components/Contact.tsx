"use client";

import { motion } from "framer-motion";
import { Reveal, RevealText } from "./Reveal";
import Magnetic from "./Magnetic";

// ── Contact details — single source of truth ──
const EMAIL = "mohamedafkir2007@hotmail.com";
const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "WhatsApp", href: "https://wa.me/212704249454" },
];
// Replace with a real Cal.com / Calendly link when ready
const BOOKING_URL = "#";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40">
      {/* Accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[130px]"
      />

      <div className="container-px relative">
        <Reveal>
          <p className="section-label">05 — Let&apos;s Build</p>
        </Reveal>

        <h2 className="mt-8 font-serif text-display tracking-[-0.02em] text-primary">
          <RevealText text="Have a" />
          <span className="italic text-accent">
            {" "}
            <RevealText text="project?" delay={0.2} />
          </span>
        </h2>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            Currently booking Q3 2026 projects. Open to freelance work, agency
            partnerships, and full-time opportunities in Dubai.
          </p>
        </Reveal>

        {/* Big email link */}
        <Reveal delay={0.2}>
          <div className="mt-14 border-y border-line py-10">
            <Magnetic strength={0.2}>
              <a
                href={`mailto:${EMAIL}`}
                data-cursor="hover"
                className="link-underline inline-block break-words font-serif text-[1.4rem] italic leading-tight text-primary transition-colors duration-300 hover:text-accent sm:text-4xl lg:text-6xl"
              >
                {EMAIL}
              </a>
            </Magnetic>
          </div>
        </Reveal>

        {/* Socials + booking */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-secondary transition-colors hover:text-primary"
                >
                  {s.label}
                </a>
              ))}
            </div>

            <motion.a
              href={BOOKING_URL}
              whileHover={{ x: 4 }}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent"
            >
              Or book a 15-min call
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </div>
        </Reveal>

        {/* Direct line */}
        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-muted">
            <a
              href="tel:+212704249454"
              className="transition-colors hover:text-secondary"
            >
              +212 704 249 454
            </a>
            <span>Tangier, Morocco → Dubai, UAE · July 2026</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
