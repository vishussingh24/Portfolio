const ICON_BASE_URL = "https://cdn.simpleicons.org";
const SKILL_ICON_SLUGS: Partial<Record<string, string>> = {
  JavaScript: "javascript",
  "C++": "cplusplus",
  HTML5: "html5",
  CSS3: "css",
  "React.js": "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  "Tailwind CSS": "tailwindcss",
  MongoDB: "mongodb",
  MySQL: "mysql",
  "Git/GitHub": "github",
  Postman: "postman",
  "VS Code": "visualstudiocode",
};

export default function Skills() {

  const skills = {
    Languages: ["JavaScript", "C++", "SQL", "HTML5", "CSS3"],
    "Frameworks & Libraries": [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
    "Tools & Databases": ["MongoDB", "MySQL", "Git/GitHub", "Postman", "VS Code"],
    Concepts: ["Data Structures & Algorithms", "RESTful APIs", "OOP", "System Design"],
  };

  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            Toolkit
          </h2>
          <p className="max-w-md text-sm text-foreground/60">
            A short, practical list of the tech I use most often.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="surface-card rounded-2xl p-6"
            >
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-foreground/60">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => {
                  const slug = SKILL_ICON_SLUGS[skill];

                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-border-color bg-surface-2 px-3 py-1 text-sm text-foreground/70"
                    >
                      {slug ? (
                        <img
                          src={`${ICON_BASE_URL}/${slug}/000000?viewbox=auto`}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          decoding="async"
                          className="h-4 w-4 opacity-80 dark:invert"
                        />
                      ) : null}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
