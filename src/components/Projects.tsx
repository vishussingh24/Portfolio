"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "RAKSHA",
    subtitle: "Tourist Safety System",
    description:
      "A real-time safety monitoring app featuring SOS alerts, panic buttons, and Maps API integration to ensure tourist safety across critical regions.",
    tags: ["Next.js", "Express", "MongoDB", "Maps API"],
    accentColor: "text-blue-600 dark:text-blue-400",
    imageBg: "bg-blue-50 dark:bg-blue-900/10",
    github: "https://github.com/vishussingh24",
    demo: "https://demo.com",
  },
  {
    title: "KISAN AI",
    subtitle: "Smart Farming Platform",
    description:
      "AI-powered assistant for comprehensive crop planning and rapid disease detection. Proudly achieved Top 50 in the Smart India Hackathon 2024.",
    tags: ["React", "Node.js", "MongoDB", "AI Integration"],
    accentColor: "text-orange-600 dark:text-orange-400",
    imageBg: "bg-orange-50 dark:bg-orange-900/10",
    image: "/assets/kisanai.png",
    github: "https://github.com/vishussingh24/kisan.ai",
    demo: "https://kisanai.vercel.app",
  },
  {
    title: "FINOQZ",
    subtitle: "Student-Friendly Quiz Platform",
    description:
      "An interactive quiz platform featuring a clean, student-friendly UI, timed challenges, and topic-wise practice to keep remote learning engaging.",
    tags: ["Quiz Engine", "Responsive UI", "Leaderboards", "Analytics"],
    accentColor: "text-emerald-600 dark:text-emerald-400",
    imageBg: "bg-emerald-50 dark:bg-emerald-900/10",
    github: "https://github.com/vishussingh24",
    demo: "https://fino-quiz.vercel.app",
  },
  {
    title: "COMFYCOZY",
    subtitle: "Airbnb-Style Rental Platform",
    description:
      "A full-stack rental marketplace where users can seamlessly list properties, browse apartments, and complete secure bookings.",
    tags: ["Listings", "Bookings", "Search & Filters", "Auth"],
    accentColor: "text-indigo-600 dark:text-indigo-400",
    imageBg: "bg-indigo-50 dark:bg-indigo-900/10",
    github: "https://github.com/vishussingh24",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Heading animation
      gsap.fromTo(
        ".projects-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stacking Cards Scale & Opacity Animation
      const cards = gsap.utils.toArray(".project-card") as HTMLElement[];
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.95,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 10%", 
            endTrigger: cards[index + 1],
            end: "top 10%", 
            scrub: true,
          },
        });
      });

  }, { scope: sectionRef });

  return (
    <section id="projects" ref={sectionRef} className="scroll-mt-24 py-28 lg:py-40 relative z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="projects-heading mb-24 text-center flex flex-col items-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Selected Work
          </p>
          <h2 className="font-display text-5xl text-foreground md:text-6xl lg:text-7xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-6 max-w-2xl text-foreground/60 text-lg leading-relaxed">
            A curated selection of applications I&apos;ve architected, designed, and built from the ground up.
          </p>
        </div>

        {/* Stackable Cards Container */}
        <div ref={containerRef} className="projects-container flex flex-col gap-16 lg:gap-24 relative pb-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.title}
                className="group project-card sticky w-full rounded-[2.5rem] md:rounded-[3rem] bg-white dark:bg-[#1A1A1A] border border-border-color/30 p-8 md:p-12 lg:p-20 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all overflow-hidden"
                style={{ top: `calc(10vh + ${index * 15}px)` }} // Stacking depth
              >
                <div className={`relative z-10 flex flex-col lg:items-center gap-12 lg:gap-20 h-full ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Text Content Area */}
                  <div className="flex flex-col justify-center lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${project.accentColor}`}>
                        {project.subtitle}
                      </span>
                    </div>

                    <h3 className="mb-6 font-display text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                      {project.title}
                    </h3>

                    <p className="mb-10 text-lg md:text-xl leading-relaxed max-w-xl text-foreground/70">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-foreground/5 dark:bg-white/5 px-5 py-2 text-sm font-semibold text-foreground/80 border border-border-color/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-4">
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="group/btn flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition-transform hover:scale-105 shadow-lg"
                        >
                          Live Demo
                          <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 rounded-full border border-border-color/60 bg-transparent px-8 py-4 text-sm font-bold text-foreground transition-all hover:bg-foreground/5"
                        >
                          <Github size={18} /> 
                          Source Code
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Visual/Image Area */}
                  <div className="lg:w-1/2 w-full mt-8 lg:mt-0 relative">
                    <div className={`relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ${project.imageBg} border border-border-color/20`}>
                      
                      {/* Decorative Product Placeholder */}
                      <div className="absolute -right-4 -bottom-8 lg:-right-8 lg:-bottom-12 w-[110%] h-[120%] rounded-tl-2xl bg-white dark:bg-[#222] border-t border-l border-border-color/30 shadow-2xl flex flex-col overflow-hidden opacity-100 transition-all duration-700 ease-out group-hover:-translate-y-4">
                        {/* Browser Bar */}
                        <div className="h-10 w-full bg-background/50 flex items-center px-6 gap-2 border-b border-border-color/20">
                          <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                          <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                          <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                        </div>
                        {/* Mockup Content */}
                        <div className="flex-1 w-full flex flex-col items-center justify-center relative bg-grid-pattern overflow-hidden">
                          {project.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                          ) : (
                            <>
                              <span className="font-display text-8xl font-black text-foreground/5 absolute scale-150 whitespace-nowrap pointer-events-none">
                                {project.title}
                              </span>
                              <div className="w-32 h-32 rounded-3xl bg-background border border-border-color/30 flex items-center justify-center shadow-xl z-10 transition-transform duration-700 ease-out group-hover:scale-110">
                                <span className={`font-display text-6xl font-bold ${project.accentColor}`}>
                                  {project.title.charAt(0)}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
