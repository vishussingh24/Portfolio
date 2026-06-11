"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Note: We intentionally avoid setting body overflow hidden here
    // to preserve Lenis smooth scrolling height calculations.

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          // Safely wake up ScrollTrigger since the site is fully revealed
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        },
      });

      // 1. Animate counter from 0 to 100
      const counterObj = { val: 0 };
      tl.to(counterObj, {
        val: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          setCounter(Math.floor(counterObj.val));
        },
      });

      // 2. Character typing effect for the name
      tl.fromTo(
        ".char",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.04,
          ease: "power3.out",
        },
        0.3
      );

      // 3. Slide out characters
      tl.to(
        ".char",
        {
          y: -100,
          opacity: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: "power3.in",
        },
        "+=0.4"
      );

      // 4. Slide up the entire preloader screen
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  if (!isLoading) return null;

  const text = "Vishal Singh";

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground will-change-transform"
    >
      {/* GSAP Animated Name in the Middle */}
      <div ref={textRef} className="overflow-hidden flex">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="char font-display text-5xl md:text-7xl lg:text-8xl font-bold inline-block opacity-0"
            style={{ minWidth: char === " " ? "1.5rem" : "auto" }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Minimalistic Counter Bottom Right */}
      <div className="absolute bottom-10 right-10 font-sans text-2xl md:text-3xl font-semibold tracking-widest text-foreground/60">
        {counter}%
      </div>
    </div>
  );
}
