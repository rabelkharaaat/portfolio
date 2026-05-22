"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small dot that lerps toward the mouse with a slight
 * delay and scales up when hovering interactive elements.
 * Automatically disabled on touch / coarse-pointer devices.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    // Target = real mouse position, pos = lerped (delayed) position
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let hovering = false;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      const el = e.target as HTMLElement;
      hovering = !!el.closest('a, button, [data-cursor="hover"]');
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    let rafId: number;
    const render = () => {
      // lerp ring for trailing delay; dot follows tighter
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        const scale = hovering ? 2.4 : 1;
        ringRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.borderColor = hovering
          ? "rgba(212,165,116,0.9)"
          : "rgba(161,161,161,0.5)";
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-secondary/50 opacity-0 transition-[opacity,border-color] duration-300"
      />
    </>
  );
}
