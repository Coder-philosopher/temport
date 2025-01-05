import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { UnderConstructionDialog } from "@/components/under-construction-dialog";

export default function Home() {
  return (
    <>
    <head>
      <title>Portfolio of Abdullah Shaikh</title>
    </head>
    <main className="min-h-screen bg-background">
      <UnderConstructionDialog />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
    </>
  );
}