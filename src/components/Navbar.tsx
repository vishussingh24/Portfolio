"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Sparkles, X } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavbarState = () => {
      setIsScrolled(window.scrollY > 18);

      const scrollPosition = window.scrollY + 160;
      let currentSection = "home";

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavbarState);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`relative mx-auto max-w-6xl overflow-hidden rounded-[30px] border transition-all duration-300 ${
          isScrolled
            ? "border-border-color/70 bg-[#f7f2eb]/88 shadow-[0_22px_55px_var(--shadow-color)] backdrop-blur-2xl dark:bg-surface/94"
            : "border-border-color/55 bg-[#fbf8f3]/78 shadow-[0_14px_36px_rgba(29,26,22,0.12)] backdrop-blur-2xl dark:bg-surface/88"
        }`}
      >
        <div className="relative flex items-center justify-between gap-3 px-4 py-3 md:px-5">
          <Link
            href="#home"
            className="group flex min-w-0 items-center"
            onClick={closeMenu}
          >
            <span className="block font-display text-xl leading-none text-foreground transition-opacity group-hover:opacity-80">
              Vishal Singh
            </span>
          </Link>

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex items-center gap-1 rounded-full border border-border-color/70 bg-white/50 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:bg-surface/75">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-foreground text-background shadow-sm"
                        : "text-foreground/65 hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="https://github.com/vishussingh24"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-color/70 bg-white/52 text-foreground/65 transition hover:-translate-y-0.5 hover:text-foreground dark:bg-surface/75"
              aria-label="GitHub"
            >
              <Github size={17} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vishussingh24/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-color/70 bg-white/52 text-foreground/65 transition hover:-translate-y-0.5 hover:text-foreground dark:bg-surface/75"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </Link>
            <ThemeToggle />
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5"
            >
              <Sparkles size={15} />
              Let&apos;s Talk
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-color/70 bg-white/55 text-foreground transition hover:border-foreground/30 dark:bg-surface/78"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="relative border-t border-border-color/80 px-4 pb-4 md:hidden"
          >
            <div className="mt-4 rounded-[28px] border border-border-color/70 bg-[#fbf8f3]/90 p-3 shadow-[0_18px_40px_var(--shadow-color)] dark:bg-surface/92">
              <div className="grid gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={closeMenu}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-foreground text-background"
                          : "bg-background/60 text-foreground/70 hover:bg-background hover:text-foreground"
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
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border-color px-4 py-3 text-sm font-medium text-foreground/75 transition hover:text-foreground"
                  onClick={closeMenu}
                >
                  <Github size={16} />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/vishussingh24/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border-color px-4 py-3 text-sm font-medium text-foreground/75 transition hover:text-foreground"
                  onClick={closeMenu}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Link>
              </div>

              <Link
                href="#contact"
                onClick={closeMenu}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:shadow-[0_14px_28px_var(--accent-glow)]"
              >
                <Sparkles size={16} />
                Start a conversation
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
