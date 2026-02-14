import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const email = "vk24122005@gmail.com";
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section className="relative min-h-[90vh] pt-28 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/60">
            Portfolio
          </p>
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            I build full-stack web apps that stay simple, fast, and easy to use.
          </h1>
          <p className="text-lg text-foreground/70">
            I am Vishal Singh, a CS student focused on the MERN stack and data
            structures. I like clear UI, reliable backends, and code that is easy
            to maintain.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:shadow-[0_12px_30px_var(--accent-glow)]"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground/30 hover:bg-surface/80"
            >
              Get in Touch <Mail size={16} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-foreground/60">
            <span className="rounded-full border border-border-color px-3 py-1">
              MERN
            </span>
            <span className="rounded-full border border-border-color px-3 py-1">
              Next.js
            </span>
            <span className="rounded-full border border-border-color px-3 py-1">
              DSA
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="surface-card rounded-3xl bg-surface/90 p-6 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-lg font-semibold text-white">
                VS
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                  Full Stack
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Student Developer
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-foreground/80">
              <div className="flex items-start justify-between gap-6">
                <span className="text-foreground/60">Focus</span>
                <span className="text-right">Next.js, Node.js, DSA</span>
              </div>
              <div className="flex items-start justify-between gap-6">
                <span className="text-foreground/60">Latest builds</span>
                <span className="text-right">
                  Tourist safety app, smart farming assistant
                </span>
              </div>
              <div className="flex items-start justify-between gap-6">
                <span className="text-foreground/60">Tools</span>
                <span className="text-right">MongoDB, MySQL, Tailwind</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="https://github.com/vishussingh24"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-singh-426739304/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={gmailHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-6 -bottom-6 hidden h-24 w-24 rounded-full border border-border-color bg-surface/80 md:block" />
        </div>
      </div>
    </section>
  );
}
