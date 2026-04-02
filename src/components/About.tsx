import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative space-y-6">
          <div className="pointer-events-none absolute -left-8 top-6 hidden h-28 w-28 rounded-full bg-accent/10 blur-3xl lg:block" />

          

          <h2 className="relative font-display text-2xl text-foreground md:text-3xl">
            About Me
          </h2>

          <p className="relative max-w-2xl text-lg leading-8 text-foreground/70">
            I&apos;m a Computer Science student and full-stack developer focused
            on modern web apps with clean UI, predictable APIs, and maintainable
            code.
          </p>

          <p className="relative max-w-2xl text-lg leading-8 text-foreground/70">
            I mainly work with the MERN stack, and I also enjoy building 3D and
            interactive experiences with Blender and Three.js.
          </p>

          

          <div className="flex flex-wrap gap-3 text-sm text-foreground/65">
            <span className="rounded-full border border-border-color bg-surface/70 px-4 py-2 shadow-sm">
              Full Stack Development
            </span>
            <span className="rounded-full border border-border-color bg-surface/70 px-4 py-2 shadow-sm">
              System Thinking
            </span>
            <span className="rounded-full border border-border-color bg-surface/70 px-4 py-2 shadow-sm">
              Clean UI
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/40 bg-white/55 p-8 shadow-[0_24px_60px_var(--shadow-color)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/6">
          <div className="absolute -right-8 top-4 h-28 w-28 rounded-full bg-accent-2/10 blur-3xl" />
          <div className="absolute inset-[1px] rounded-[30px] bg-[linear-gradient(145deg,rgba(255,255,255,0.62),rgba(255,255,255,0.20),rgba(255,255,255,0.08))] dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04),rgba(255,255,255,0.02))]" />

          <div className="relative">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-foreground">
              <GraduationCap className="text-accent" size={20} />
              Education
            </h3>

            <div className="space-y-6 border-l border-border-color pl-6 text-sm">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-accent"></span>
                <p className="text-base font-semibold text-foreground">
                  B.Tech in Computer Science
                </p>
                <p className="text-foreground/60">
                  Galgotias University | 2023 - Present
                </p>
                <p className="text-foreground/70">
                  Focused on full-stack development and data structures.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-accent-2"></span>
                <p className="text-base font-semibold text-foreground">
                  High School
                </p>
                <p className="text-foreground/60">
                  Kendriya Vidyalaya Meerut Cantt.
                </p>
                <p className="text-foreground/70">
                  Science and Mathematics foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
