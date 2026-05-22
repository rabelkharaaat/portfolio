"use client";

import { useEffect, useState } from "react";

/** Scroll to the very top via Lenis (falls back to native). */
function scrollTop() {
  const lenis = (window as Window & { lenis?: { scrollTo: (t: number) => void } }).lenis;
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Live clock for a given IANA timezone. */
function useClock(timeZone: string) {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone,
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

export default function Footer() {
  // Tangier — Africa/Casablanca timezone
  const tangier = useClock("Africa/Casablanca");

  return (
    <footer className="border-t border-line py-10">
      <div className="container-px flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Left: copyright */}
        <p className="font-mono text-xs text-muted">
          © 2026 Mohamed Afkir. Built with care in Tangier.
        </p>

        {/* Center: live clock */}
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tabular-nums text-muted">
            {tangier ? `Tangier ${tangier}` : "Tangier --:--:--"}
          </span>
        </div>

        {/* Right: back to top */}
        <button
          onClick={scrollTop}
          className="link-underline font-mono text-xs uppercase tracking-[0.15em] text-secondary transition-colors hover:text-accent"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
