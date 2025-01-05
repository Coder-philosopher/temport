import { SkillCard } from "./skill-card";

const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "TailwindCSS"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "AWS", "Firebase", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.category} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}