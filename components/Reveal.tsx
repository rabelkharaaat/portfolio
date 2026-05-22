"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-reveal primitives used across every section.
 * - <Reveal>: fades + lifts a block into view once.
 * - <RevealText>: splits a string into words and staggers them up.
 */

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function RevealText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delayChildren: delay }}
    >
      {text.split(" ").map((w, i) => (
        <span
          key={`${w}-${i}`}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span variants={word} style={{ display: "inline-block" }}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
