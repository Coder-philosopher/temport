import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application built with Next.js and TypeScript.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/yourusername/project-one",
    demoUrl: "https://project-one.demo",
  },
  {
    title: "Project Two",
    description: "A real-time chat application using WebSocket technology.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project-two",
  },
  {
    title: "Project Three",
    description: "An e-commerce platform with advanced filtering and search.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/yourusername/project-three",
    demoUrl: "https://project-three.demo",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}