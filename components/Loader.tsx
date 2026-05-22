"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * First-visit loading screen: brand reveal that lasts ~3 seconds,
 * then slides away. Customize the duration via TOTAL_MS.
 */
const TOTAL_MS = 3000;

export default function Loader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / TOTAL_MS, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) rafId = requestAnimationFrame(tick);
      else setDone(true);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-base"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Mohamed Afkir
            </p>
            <p className="mt-3 font-serif text-5xl italic text-primary">
              Studio
            </p>
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 px-6">
            <div className="mx-auto flex max-w-container items-end justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Loading
              </span>
              <span className="font-mono text-xs tabular-nums text-secondary">
                {count.toString().padStart(3, "0")}
              </span>
            </div>
            <div className="mx-auto mt-3 h-px max-w-container overflow-hidden bg-line">
              <div
                className="h-full bg-accent transition-[width] duration-100 ease-linear"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
