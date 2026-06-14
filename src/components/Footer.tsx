"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: footerRef });

  return (
    <footer
      ref={footerRef}
      className="border-t border-foreground/6 py-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-foreground/30 md:flex-row">
        <p>&copy; {new Date().getFullYear()} Vishal Singh. Built with Next.js &amp; Three.js.</p>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/vishussingh24"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground/60"
            aria-label="GitHub"
          >
            <Github size={16} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vishussingh24/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground/60"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground/60"
            aria-label="Twitter"
          >
            <Twitter size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
