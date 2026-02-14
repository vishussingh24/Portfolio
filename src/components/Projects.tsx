import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "RAKSHA",
      subtitle: "Tourist Safety System",
      description:
        "A real-time safety monitoring app featuring SOS alerts, panic buttons, and Maps API integration to ensure tourist safety.",
      tags: ["Next.js", "Express", "MongoDB", "Maps API"],
      color: "from-amber-400 to-orange-500",
      github: "https://github.com/vishussingh24",
      demo: "https://demo.com",
    },
    {
      title: "KISAN AI",
      subtitle: "Smart Farming Platform",
      description:
        "AI-powered assistant for crop planning and disease detection. Achievement: Top 50 in Smart India Hackathon 2024.",
      tags: ["React", "Node.js", "MongoDB", "AI Integration"],
      color: "from-sky-400 to-indigo-500",
      github: "https://github.com/vishussingh24",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-md text-sm text-foreground/60">
            A small selection of work that shows how I design, build, and ship
            products end to end.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="surface-card group flex h-full flex-col rounded-3xl bg-surface/90 p-6"
            >
              
              <div className="mt-6 flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                  {project.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-4 text-foreground/70">{project.description}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border-color bg-surface-2 px-3 py-1 text-xs text-foreground/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 text-sm font-semibold">
                <Link
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
                >
                  <Github size={16} /> Code
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-foreground/70 transition hover:text-foreground"
                >
                  <ExternalLink size={16} /> Live Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
