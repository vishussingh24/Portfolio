"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseTimeout = useRef<number | null>(null);

  // Mouse move effect for parallax text and spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (mouseTimeout.current !== null) return;

    const { clientX, clientY } = e;

    mouseTimeout.current = window.requestAnimationFrame(() => {
      const x = (clientX / window.innerWidth - 0.5) * 20; // -10 to 10
      const y = (clientY / window.innerHeight - 0.5) * 20; // -10 to 10
      
      gsap.to(".parallax-text", {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 1000,
        duration: 1.5,
        ease: "power2.out"
      });

      // Update spotlight position via CSS variables
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const relativeX = clientX - rect.left;
        const relativeY = clientY - rect.top;
        sectionRef.current.style.setProperty("--mouse-x", `${relativeX}px`);
        sectionRef.current.style.setProperty("--mouse-y", `${relativeY}px`);
      }
      mouseTimeout.current = null;
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Reveal text lines
    tl.fromTo(
      ".hero-text-line",
      { y: 150, opacity: 0, rotateZ: 5 },
      { y: 0, opacity: 1, rotateZ: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" }
    );

    // Reveal other elements
    tl.fromTo(
      ".hero-fade",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
      "-=0.8"
    );

    // Parallax out
    gsap.to(".hero-content", {
      yPercent: 40,
      opacity: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-background"
    >
      {/* Aurora / Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-80 dark:opacity-70">
        <div className="absolute -inset-[100%] opacity-60 dark:opacity-80">
          <div className="absolute top-[30%] left-[20%] h-[40rem] w-[40rem] animate-[spin_20s_linear_infinite] rounded-full bg-purple-500/30 mix-blend-multiply blur-3xl filter" />
          <div className="absolute top-[40%] right-[20%] h-[35rem] w-[35rem] animate-[spin_25s_linear_infinite_reverse] rounded-full bg-blue-500/30 mix-blend-multiply blur-3xl filter" />
          <div className="absolute bottom-[20%] left-[40%] h-[45rem] w-[45rem] animate-[spin_30s_linear_infinite] rounded-full bg-emerald-500/20 mix-blend-multiply blur-3xl filter" />
        </div>
      </div>
      
      {/* Subtle Noise / Grid to give it texture */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.15]"
           style={{ 
             backgroundImage: `linear-gradient(to right, rgba(128,128,128,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.1) 1px, transparent 1px)`,
             backgroundSize: `4rem 4rem`,
             maskImage: `radial-gradient(ellipse 100% 100% at 50% 50%, #000 40%, transparent 100%)`,
             WebkitMaskImage: `radial-gradient(ellipse 100% 100% at 50% 50%, #000 40%, transparent 100%)`
           }} 
      />

      <div className="hero-content relative z-10 flex w-full max-w-7xl flex-col items-center px-6 text-center">
        
        {/* Clean Typography with 3D Parallax */}
        <div className="parallax-text flex flex-col items-center">
          <div className="overflow-hidden pb-2 md:pb-4">
            <h1 className="hero-text-line font-display text-[13vw] leading-[0.85] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-foreground dark:to-foreground/40 sm:text-[11vw] md:text-[9vw] lg:text-[8rem]">
              CREATIVE
            </h1>
          </div>
          <div className="overflow-hidden pb-4 flex items-center justify-center w-full">
            <h1 className="hero-text-line font-display text-[13vw] leading-[0.85] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-foreground dark:to-foreground/40 sm:text-[11vw] md:text-[9vw] lg:text-[8rem]">
              DEVELOPER
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <p className="hero-fade mt-8 max-w-2xl text-lg font-normal text-foreground/60 md:text-xl leading-relaxed">
          I craft digital experiences that seamlessly blend robust engineering with clean, interactive design.
        </p>

        {/* CTA */}
        <div className="hero-fade mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#projects"
            className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform hover:scale-105 shadow-lg"
          >
            Explore My Work
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>

      {/* Rotating Badge Bottom Left */}
      <div className="hero-fade absolute bottom-12 left-12 hidden lg:flex items-center justify-center">
        <div className="relative flex h-32 w-32 items-center justify-center">
          <svg className="absolute h-full w-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
            <defs>
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[11px] font-bold uppercase tracking-[0.2em] fill-foreground/50">
              <textPath href="#circle">
                Scroll to explore • Scroll to explore • 
              </textPath>
            </text>
          </svg>
          <ArrowDown size={24} className="text-foreground/40 absolute" />
        </div>
      </div>
      
    </section>
  );
}
