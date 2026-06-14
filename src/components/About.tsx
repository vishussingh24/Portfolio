"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GraduationCap, Briefcase } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Word-by-word reveal for the main paragraph
      const words = paragraphRef.current?.querySelectorAll(".about-word");
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0.08 },
          {
            opacity: 1,
            duration: 0.5,
            stagger: { amount: 1 },
            ease: "none",
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: "top 80%",
              end: "bottom 50%",
              scrub: 1,
            },
          }
        );
      }

      // Heading slide in
      gsap.fromTo(
        ".about-heading",
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // Skill chips stagger
      gsap.fromTo(
        ".about-chip",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-chips",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Timeline Line Drawing
      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { height: 0 },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-container",
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            },
          }
        );
      }

      // Timeline Cards Reveal
      const timelineItems = gsap.utils.toArray(".timeline-item") as HTMLElement[];
      timelineItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
  }, { scope: sectionRef });

  const aboutText =
    "I'm a Computer Science student and full-stack developer focused on building modern web applications, clean interfaces, and intelligent systems. Beyond my core work with the MERN stack, I'm passionate about exploring AI technologies—from building autonomous agents and AI automation to implementing RAG pipelines for smarter applications. I also enjoy bringing ideas to life through interactive 3D experiences with Three.js.";

  const aboutWords = aboutText.split(" ");

  return (
    <section id="about" ref={sectionRef} className="relative scroll-mt-24 py-28 lg:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.05),transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <p className="about-heading mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          About
        </p>

        {/* Word-by-word paragraph */}
        <p
          ref={paragraphRef}
          className="max-w-4xl font-display text-2xl leading-relaxed text-foreground md:text-3xl lg:text-4xl"
        >
          {aboutWords.map((word, i) => (
            <span key={i} className="about-word inline-block mr-[0.28em]">
              {word}
            </span>
          ))}
        </p>

        {/* Chips */}
        <div className="about-chips mt-10 flex flex-wrap gap-3">
          {["Full Stack Development", "AI & Agents", "System Thinking", "Clean UI", "3D / Three.js"].map(
            (chip) => (
              <span
                key={chip}
                className="about-chip rounded-full border border-foreground/10 px-5 py-2.5 text-sm text-foreground/50 transition-colors hover:border-accent/50 hover:text-foreground"
              >
                {chip}
              </span>
            )
          )}
        </div>

        {/* Interactive Timeline */}
        <div className="timeline-container mt-24 relative max-w-4xl mx-auto">
          <h3 className="mb-12 flex items-center justify-center gap-3 text-2xl font-semibold text-foreground font-display">
            <Briefcase className="text-accent" size={28} />
            Experience & Education
          </h3>
          
          <div className="relative pl-8 md:pl-0">
            {/* The animated line */}
            <div className="absolute left-[15.5px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-foreground/10">
              <div ref={timelineLineRef} className="w-full bg-gradient-to-b from-accent to-accent-2 origin-top" />
            </div>

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="timeline-item relative flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                <div className="hidden md:block w-5/12 text-right pr-8">
                  <span className="text-sm font-medium text-accent">2023 - Present</span>
                </div>
                <div className="absolute left-[-24px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent z-10 shadow-[0_0_15px_rgba(0,229,255,0.5)]" />
                <div className="w-full md:w-5/12 md:pl-8">
                  <div className="surface-card p-6 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                    <h4 className="text-lg font-bold text-foreground">B.Tech in Computer Science</h4>
                    <span className="md:hidden block text-sm font-medium text-accent mt-1 mb-2">2023 - Present</span>
                    <p className="text-sm text-foreground/50 mt-1 flex items-center gap-2">
                      <GraduationCap size={16} /> Galgotias University
                    </p>
                    <p className="mt-3 text-sm text-foreground/70">
                      Focused on full-stack development, advanced data structures, and algorithm design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="timeline-item relative flex flex-col md:flex-row-reverse items-start md:items-center justify-between w-full">
                <div className="hidden md:block w-5/12 text-left pl-8">
                  <span className="text-sm font-medium text-accent-2">2021 - 2023</span>
                </div>
                <div className="absolute left-[-24px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent-2 z-10 shadow-[0_0_15px_rgba(184,41,255,0.5)]" />
                <div className="w-full md:w-5/12 md:pr-8">
                  <div className="surface-card p-6 rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-left md:text-right">
                    <h4 className="text-lg font-bold text-foreground">High School</h4>
                    <span className="md:hidden block text-sm font-medium text-accent-2 mt-1 mb-2">2021 - 2023</span>
                    <p className="text-sm text-foreground/50 mt-1 flex items-center gap-2 md:justify-end">
                      <GraduationCap size={16} /> Kendriya Vidyalaya Meerut Cantt.
                    </p>
                    <p className="mt-3 text-sm text-foreground/70">
                      Strong foundation in Science and Mathematics, sparking my interest in programming.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
