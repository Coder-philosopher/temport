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
          <h1 className="text-4xl text-gray-800 dark:text-white md:text-6xl font-bold mb-6 animate-glow">
            Abdullah Shaikh
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Welcome to{" "}
            <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              The Shaikh&#39;s World
            </span>
            . <br />
            Fusing Art and Technology for Unparalleled Designs.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="https://github.com/Coder-philosopher" target="_blank">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link
                href="https://www.linkedin.com/in/abdullah-shaikh-97309b297/"
                target="_blank"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    className="flex flex-col items-center"
  >
    {/* Text with adaptive theme colors */}
    <p className="text-sm mb-2 text-gray-800 dark:text-gray-200">
      Scroll Down
    </p>
    
    {/* Scroll Icon */}
    <div className="w-3 h-6 border-2 rounded-full flex items-start dark:border-gray-200 border-gray-800">
      <div className="w-2 h-2 rounded-full animate-bounce dark:bg-gray-200 bg-gray-800"></div>
    </div>
  </motion.div>
</div>

    </section>
  );
}
