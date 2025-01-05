"use client";

import { motion } from "framer-motion";
import { AboutCard } from "./about-card";
import { aboutDetails } from "./about-data";

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
              A passionate software developer with expertise in building modern web applications.
              I love turning complex problems into simple, beautiful solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutDetails.map((item) => (
              <AboutCard key={item.title} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}