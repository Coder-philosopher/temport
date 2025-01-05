"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Abdullah Shaikh
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Crafting experiences with code and creativity
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="https://github.com/Coder-philosopher" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="https://www.linkedin.com/in/abdullah-shaikh-97309b297/" target="_blank">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}