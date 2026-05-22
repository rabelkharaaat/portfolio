"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Nav links — edit labels / anchors here ──
const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/** Smooth-scroll to a section via Lenis when available. */
function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (!el) return;
  const lenis = (window as Window & { lenis?: { scrollTo: (t: Element, o?: object) => void } }).lenis;
  if (lenis) lenis.scrollTo(el, { offset: 0 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn(
        "fixed inset-x-0 top-0 z-[100] transition-colors duration-500",
        scrolled
          ? "border-b border-line/70 bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="container-px flex h-[72px] items-center justify-between">
        {/* Wordmark */}
        <button
          onClick={() => handleNav("#top")}
          className="group flex items-baseline gap-2"
          aria-label="Back to top"
        >
          <span className="text-sm font-medium tracking-tight text-primary transition-colors group-hover:text-accent">
            Mohamed Afkir
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
            — Aurex
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-secondary transition-colors hover:text-primary"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Availability pill + mobile toggle */}
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-secondary">
              Available for projects
            </span>
          </span>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={cn(
                "h-px w-5 bg-primary transition-all duration-300",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-primary transition-all duration-300",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-line bg-base/95 backdrop-blur-xl md:hidden"
        style={{ borderBottomWidth: open ? 1 : 0 }}
      >
        <div className="container-px flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="py-3 text-left font-serif text-2xl italic text-primary"
            >
              {l.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
