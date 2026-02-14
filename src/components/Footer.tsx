import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-color bg-background/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-foreground/60 md:flex-row">
        <p>(c) {new Date().getFullYear()} Vishal Singh. Built with Next.js.</p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/vishussingh24"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vishal-singh-426739304/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
