"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Gamepad2, GraduationCap } from "lucide-react";

const details = [
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Education",
    description: "Metallurgical and Materials Engineering - National Institute of Technology, Raipur",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Expertise",
    description: "Full-stack Development, Cloud Architecture , Data Structures & Algorithms , AI/ML",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Hobbies",
    description: "Photography, Travelling, Swimming, Trying out new things",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Engineering Student with interest in software development and a strong foundation in metallurgical and materials engineering. I am a quick learner and a team player with a strong work ethic. I am always eager to learn new technologies and improve my skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {details.map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}