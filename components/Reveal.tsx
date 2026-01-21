"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  /** Extra Tailwind classes applied to the wrapper */
  className?: string;
  /** Delay in seconds */
  delay?: number;
};

export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
