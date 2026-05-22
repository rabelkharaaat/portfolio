"use client";

import { Reveal } from "./Reveal";

// ── Services — edit pricing / copy here ──
const SERVICES = [
  {
    no: "01",
    name: "Web Design",
    desc: "Custom websites built in Framer, Webflow, or code — fast, considered, and made to convert.",
    price: "Starting at $1,200",
  },
  {
    no: "02",
    name: "Ecommerce",
    desc: "Shopify and custom stores engineered around the buying journey, not just the catalog.",
    price: "Starting at $1,800",
  },
  {
    no: "03",
    name: "AI Creative",
    desc: "AI-generated visuals, ad creative, and video content — produced at a pace traditional studios can't match.",
    price: "Starting at $600",
  },
  {
    no: "04",
    name: "Paid Ads",
    desc: "Meta, TikTok, and Google campaigns built to find buyers and keep the cost of acquisition honest.",
    price: "Starting at $800/mo",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 sm:py-36">
      <div className="container-px">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-line pb-6">
            <p className="section-label">02 — What I Build</p>
            <p className="font-mono text-xs text-muted">Four ways to work</p>
          </div>
        </Reveal>

        {/* 2×2 grid */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.no} delay={(i % 2) * 0.08}>
              <div
                data-cursor="hover"
                className="group relative h-full bg-surface p-8 transition-colors duration-500 hover:bg-dark2 sm:p-10"
              >
                {/* Accent border-reveal on hover */}
                <span className="absolute inset-x-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted">/ {s.no}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {s.price}
                  </span>
                </div>

                <h3 className="mt-10 font-serif text-3xl italic text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-accent sm:text-4xl">
                  {s.name}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary">
                  {s.desc}
                </p>

                <p className="mt-8 font-mono text-xs text-muted sm:hidden">
                  {s.price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
