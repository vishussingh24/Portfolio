import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border-color bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-foreground transition-opacity hover:opacity-80"
        >
          Vishal Singh
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex">
          <Link href="#about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="#skills" className="transition-colors hover:text-foreground">
            Skills
          </Link>
          <Link href="#projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/vishussingh24"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vishal-singh-426739304/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
