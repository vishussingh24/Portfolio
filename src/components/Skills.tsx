"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";

gsap.registerPlugin(ScrollTrigger);

const ICON_BASE_URL = "https://cdn.simpleicons.org";
const SKILL_ICON_SLUGS: Record<string, string> = {
  JavaScript: "javascript",
  TypeScript: "typescript",
  Python: "python",
  "C++": "cplusplus",
  SQL: "postgresql",
  GraphQL: "graphql",
  HTML5: "html5",
  CSS3: "css3",
  React: "react",
  "React Native": "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  Express: "express",
  "Tailwind CSS": "tailwindcss",
  "Three.js": "threedotjs",
  "Framer Motion": "framer",
  Redux: "redux",
  MongoDB: "mongodb",
  PostgreSQL: "postgresql",
  Redis: "redis",
  Firebase: "firebase",
  AWS: "amazonaws",
  Vercel: "vercel",
  Docker: "docker",
  Linux: "linux",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
  Figma: "figma",
  Storybook: "storybook",
  "Adobe XD": "adobexd",
  Framer: "framer",
  Jest: "jest",
  Cypress: "cypress",
  Playwright: "playwright",
  Expo: "expo",
  Android: "android",
  iOS: "ios"
};

const skills = [
  {
    category: "Languages",
    description: "The core syntax I use to communicate with machines.",
    items: ["JavaScript", "TypeScript", "Python", "C++", "SQL", "GraphQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    description: "Tools that help me build faster, scalable, and beautiful interfaces.",
    items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Three.js", "Framer Motion", "Redux"],
  },
  {
    category: "Databases & Cloud",
    description: "The infrastructure and cloud architectures that power the backend.",
    items: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "AWS", "Vercel"],
  },
  {
    category: "Tools & DevOps",
    description: "The ecosystem that streamlines my development lifecycle and deployment.",
    items: ["Docker", "Linux", "Git", "GitHub", "Postman", "Figma"],
  }
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        ".skills-heading-container",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-heading-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Rows animation
      const rows = gsap.utils.toArray(".skill-row");
      rows.forEach((row: any) => {
        const line = row.querySelector(".row-line");
        const content = row.querySelector(".row-content");
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });

        tl.fromTo(
          line,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.inOut", transformOrigin: "left center" }
        ).fromTo(
          content,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme !== "light";
  const iconColor = isDark ? "ffffff" : "000000";

  return (
    <section id="skills" ref={sectionRef} className="scroll-mt-24 py-28 lg:py-40 relative">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Sticky Header Container for larger screens, normal for mobile */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Side: Sticky Heading */}
          <div className="lg:w-1/3">
            <div className="skills-heading-container lg:sticky lg:top-32">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Toolkit
              </p>
              <h2 className="font-display text-4xl text-foreground md:text-5xl lg:text-6xl leading-[1.1]">
                The <br className="hidden lg:block" /> tech <br className="hidden lg:block" /> I use.
              </h2>
              <p className="mt-6 text-foreground/50 text-lg leading-relaxed max-w-sm">
                A highly refined stack of technologies I use to architect, design, and build digital experiences from the ground up.
              </p>
            </div>
          </div>

          {/* Right Side: Skills List */}
          <div className="lg:w-2/3 flex flex-col pt-8 lg:pt-0">
            {skills.map((group, index) => (
              <div key={group.category} className="skill-row relative flex flex-col group pb-14 pt-4">
                {/* Animated Top Line */}
                <div className="row-line absolute top-0 left-0 w-full h-px bg-foreground/10 group-hover:bg-accent/50 transition-colors duration-500" />
                
                <div className="row-content flex flex-col md:flex-row gap-8 md:gap-12 pt-8">
                  {/* Category Info */}
                  <div className="md:w-1/3">
                    <h3 className="text-2xl font-display text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {group.category}
                    </h3>
                    <p className="text-sm text-foreground/40 leading-relaxed pr-4">
                      {group.description}
                    </p>
                  </div>
                  
                  {/* Skills Pills */}
                  <div className="md:w-2/3 flex flex-wrap gap-3 items-start">
                    {group.items.map((skill) => {
                      const slug = SKILL_ICON_SLUGS[skill];
                      return (
                        <div
                          key={skill}
                          className="flex items-center gap-2.5 rounded-full border border-foreground/10 bg-surface px-5 py-2.5 text-sm font-medium text-foreground/80 transition-all duration-300 hover:scale-105 hover:border-foreground/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] cursor-default"
                        >
                          {slug && mounted && (
                            <img
                              src={`${ICON_BASE_URL}/${slug}/${iconColor}?viewbox=auto`}
                              alt=""
                              aria-hidden="true"
                              loading="lazy"
                              decoding="async"
                              className="h-4 w-4 opacity-70"
                            />
                          )}
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Final Bottom Line */}
            <div className="w-full h-px bg-foreground/10" />
          </div>

        </div>
      </div>
    </section>
  );
}
