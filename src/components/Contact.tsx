import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const email = "vk24122005@gmail.com";
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <section id="contact" className="relative scroll-mt-24 pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden">
      
      {/* Subtle Aurora Background matching the Hero theme */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-20 mix-blend-screen">
        <div className="absolute top-[20%] left-[10%] h-[30rem] w-[30rem] animate-[spin_20s_linear_infinite] rounded-full bg-purple-500/20 blur-3xl filter" />
        <div className="absolute bottom-[10%] right-[10%] h-[25rem] w-[25rem] animate-[spin_25s_linear_infinite_reverse] rounded-full bg-blue-500/20 blur-3xl filter" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
        
        {/* Left Side: Call to Action */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-white dark:to-white/40">
              Let&apos;s build <br />
              something together.
            </h2>
            <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
              If you have a project in mind, a question, or just want to collaborate, I am always happy to chat. The fastest way to reach me is via email.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={gmailHref}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(128,90,213,0.3)]"
            >
              <Mail size={18} className="transition-transform group-hover:-rotate-12" />
              <span>Email Me</span>
            </a>
            <Link
              href="https://www.linkedin.com/in/vishussingh24/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-border-color/60 bg-surface/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-foreground/30 hover:bg-surface/80"
            >
              <Linkedin size={18} className="transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Frosted Glass Card */}
        <div className="relative rounded-[2rem] border border-border-color/30 bg-surface/40 p-10 shadow-2xl backdrop-blur-2xl dark:bg-black/20 dark:border-white/10 overflow-hidden">
          {/* Internal gradient shine */}
          <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50" />
          
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            Elsewhere
          </h3>
          
          <div className="mt-8 flex flex-col gap-6">
            <SocialLink 
              href={gmailHref} 
              icon={<Mail size={18} />} 
              label="Email" 
              value={email} 
            />
            <SocialLink 
              href="https://github.com/vishussingh24" 
              icon={<Github size={18} />} 
              label="GitHub" 
              value="github.com/vishussingh24" 
            />
            <SocialLink 
              href="https://www.linkedin.com/in/vishussingh24/" 
              icon={<Linkedin size={18} />} 
              label="LinkedIn" 
              value="linkedin.com/in/vishussingh24" 
            />
            <SocialLink 
              href="https://leetcode.com/u/vishussingh24" 
              icon={<LeetCodeIcon />} 
              label="LeetCode" 
              value="leetcode.com/u/vishussingh24" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label, value }: { href: string; icon: React.ReactNode; label: string; value: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between border-b border-border-color/30 pb-4 transition-colors hover:border-foreground/30"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-foreground/70 transition-colors group-hover:bg-foreground/10 group-hover:text-foreground">
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
            {label}
          </p>
          <p className="font-semibold text-foreground transition-colors group-hover:text-accent">
            {value}
          </p>
        </div>
      </div>
      <ArrowRight size={16} className="text-foreground/30 transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
    </a>
  );
}

function LeetCodeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.843 5.843 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}
