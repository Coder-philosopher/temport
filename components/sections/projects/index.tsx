import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Lexora",
    description: "A real-time chatting application featuring end-to-end encryption, seamless chat recovery across devices, and a unique Lexus-ID for secure and private communication, eliminating the need for backups.",
    technologies: ["React", "Node.js", "TypeScript", "Tailwind" , "MongoDB" , "Socket.io"],
    githubUrl: "https://github.com/Coder-philosopher/lexora-frontend",
    demoUrl: "https://lexora-taupe.vercel.app/",
  },
  {
    title: "AI Voice Assistant",
    description: "AI Voice Assistant is a web app for text-to-speech and speech-to-text conversion. It offers customizable voice settings, audio downloads, real-time STT, voice selection, dark mode, and a responsive UI for mobile and desktop",
    technologies: ["React", "Node.js", "Socket.io", "TypeScript"],
    githubUrl: "https://github.com/Coder-philosopher/textandvoice",
    demoUrl: "https://lexora-taupe.vercel.app/",
  },
  {
    title: "Project AI",
    description: "AI Image Generator is a web-based application that leverages powerful API to create images from text prompts. Users can input detailed text description. The generated images can be downloaded in PNG format. The app is designed to be user-friendly, providing a seamless experience across both mobile and desktop platforms.",
    technologies: ["Node.js", "Hugging Face", "React",],
    githubUrl: "https://github.com/Coder-philosopher/projectAI",
    demoUrl: "https://projectai-blue.vercel.app/",
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