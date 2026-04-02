import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const email = "vk24122005@gmail.com";
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section
      id="home"
      className="relative min-h-[90vh] scroll-mt-32 pt-36 pb-20 md:pt-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-7">
          

          <h1 className="max-w-4xl font-display text-5xl leading-[0.97] text-foreground md:text-7xl">
            I build full-stack products that feel
            <span className="text-accent"> fast, clean,</span> and easy to use.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-foreground/70">
            CS student focused on MERN and Next.js, building clear interfaces
            and reliable backend systems that stay easy to maintain.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-[#ff7a45] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_var(--accent-glow)] transition hover:-translate-y-0.5"
            >
              View Projects <ArrowRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-color bg-surface/80 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-surface"
            >
              Get in Touch <Mail size={16} />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
            <span>MERN Stack</span>
            <span className="h-1 w-1 rounded-full bg-accent/70" />
            <span>Next.js</span>
            <span className="h-1 w-1 rounded-full bg-accent/70" />
            <span>Clean UI</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-5 rounded-[36px] bg-gradient-to-br from-accent/14 to-accent-2/12 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/55 p-7 shadow-[0_24px_60px_var(--shadow-color)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6">
            <div className="absolute -left-8 top-6 h-28 w-28 bg-accent/18 blur-3xl animate-liquid-drift" />
            <div className="absolute right-0 bottom-8 h-28 w-28 bg-accent-2/14 blur-3xl animate-liquid-pulse" />
            <div className="absolute inset-[1px] rounded-[30px] bg-[linear-gradient(145deg,rgba(255,255,255,0.64),rgba(255,255,255,0.22),rgba(255,255,255,0.08))] dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04),rgba(255,255,255,0.02))]" />

            <div className="relative space-y-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-foreground/50">
                  Profile Snapshot
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-foreground">
                  Student Developer
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-foreground/70">
                  Building practical products with strong UI and dependable
                  backend logic.
                </p>
              </div>

              <div className="space-y-3 border-t border-border-color/60 pt-5 text-sm text-foreground/80">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-foreground/55">Stack</span>
                  <span className="max-w-[68%] text-right">
                    Next.js, Node.js, MongoDB
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-foreground/55">Recent</span>
                  <span className="max-w-[68%] text-right">
                    Raksha, Kisan AI
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-foreground/55">Focus</span>
                  <span className="max-w-[68%] text-right">
                    Clean UI, practical APIs
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm">
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
                  href="https://www.linkedin.com/in/vishussingh24/"
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
          </div>
        </div>
      </div>
    </section>
  );
}
