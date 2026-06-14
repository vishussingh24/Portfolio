"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<number | null>(null);
  const sectionOffsets = useRef<{ id: string; offsetTop: number }[]>([]);

  // Cache section offsets on mount and resize to avoid DOM queries on every scroll tick
  useEffect(() => {
    const updateOffsets = () => {
      sectionOffsets.current = navItems.map((item) => {
        const section = document.getElementById(item.id);
        return {
          id: item.id,
          offsetTop: section ? section.offsetTop : 0,
        };
      });
    };

    // Delay initially to ensure the DOM is fully rendered before calculating offsets
    const timeoutId = setTimeout(updateOffsets, 500);
    window.addEventListener("resize", updateOffsets);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateOffsets);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current !== null) return;

      scrollTimeout.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // Handle background styling based on scroll position
        const newIsScrolled = currentScrollY > 18;
        setIsScrolled((prev) => (prev !== newIsScrolled ? newIsScrolled : prev));

        // Scroll direction logic: 
        if (currentScrollY < 100) {
          setIsVisible((prev) => (!prev ? true : prev));
        } else if (currentScrollY > lastScrollY.current) {
          setIsVisible((prev) => (prev ? false : prev));
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible((prev) => (!prev ? true : prev));
        }

        // Track active section
        let currentSection = "home";
        const scrollPosition = currentScrollY + 160;
        for (const item of sectionOffsets.current) {
          if (scrollPosition >= item.offsetTop) {
            currentSection = item.id;
          }
        }
        
        setActiveSection((prev) => (prev !== currentSection ? currentSection : prev));
        lastScrollY.current = currentScrollY;
        scrollTimeout.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current !== null) {
        window.cancelAnimationFrame(scrollTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav 
      className={`fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div
        className={`relative flex w-[95%] max-w-5xl items-center justify-between gap-8 rounded-full border transition-all duration-300 px-8 py-3 shadow-lg backdrop-blur-xl ${
          isScrolled
            ? "border-border-color/70 bg-surface/90 dark:bg-surface/90"
            : "border-border-color/40 bg-surface/70 dark:bg-surface/70"
        }`}
      >
        {/* Logo */}
        <Link
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-70 whitespace-nowrap"
          onClick={closeMenu}
        >
          Vishal Singh
        </Link>

        {/* Desktop Nav Links (No Capsule) */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive
                    ? "text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-foreground" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://github.com/vishussingh24"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition hover:-translate-y-0.5 hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vishussingh24/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition hover:-translate-y-0.5 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <div className="scale-90 opacity-80 hover:opacity-100 transition-opacity">
            <ThemeToggle />
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-md ml-1"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-4 right-4 z-[99] rounded-[24px] border border-border-color/70 bg-surface/95 p-4 shadow-xl backdrop-blur-xl md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-foreground/5 text-foreground"
                      : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <Link
              href="https://github.com/vishussingh24"
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-color/50 px-4 py-3 text-sm font-medium text-foreground/75 transition hover:bg-foreground/5 hover:text-foreground"
              onClick={closeMenu}
            >
              <Github size={16} />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/vishussingh24/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border-color/50 px-4 py-3 text-sm font-medium text-foreground/75 transition hover:bg-foreground/5 hover:text-foreground"
              onClick={closeMenu}
            >
              <Linkedin size={16} />
              LinkedIn
            </Link>
          </div>

          <Link
            href="#contact"
            onClick={closeMenu}
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
