import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            About
          </h2>
          <p className="text-lg text-foreground/70">
            I am a detail-oriented full stack developer and Computer Science
            student who enjoys building scalable web applications. A strong
            foundation in data structures and algorithms helps me design
            solutions that are clean and efficient.
          </p>
          <p className="text-lg text-foreground/70">
            I work mostly with the MERN stack and care about thoughtful UI,
            predictable APIs, and code that stays easy to change.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-foreground/60">
            <span className="rounded-full border border-border-color px-3 py-1">
              Full Stack Development
            </span>
            <span className="rounded-full border border-border-color px-3 py-1">
              System Thinking
            </span>
            <span className="rounded-full border border-border-color px-3 py-1">
              Clean UI
            </span>
          </div>
        </div>

        <div className="surface-card rounded-3xl bg-surface/90 p-8">
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
                Focus on full stack development and DSA.
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
              <p className="text-foreground/70">Science and Mathematics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
