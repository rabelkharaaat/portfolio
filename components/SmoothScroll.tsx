"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Wraps the app with Lenis smooth scrolling.
 * Disabled automatically when the user prefers reduced motion.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Expose for anchor links / "back to top"
    (window as Window & { lenis?: Lenis }).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as Window & { lenis?: Lenis }).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
