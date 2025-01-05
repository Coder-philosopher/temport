"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export function ProjectCard({ title, description, technologies, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          {demoUrl && (
            <Button size="sm" asChild>
              <Link href={demoUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}