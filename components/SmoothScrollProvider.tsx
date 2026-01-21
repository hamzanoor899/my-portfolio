"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type Props = {
  children: React.ReactNode;
};

export default function SmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    // Respect reduced motion.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      // A nice, modern “website” feel.
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
