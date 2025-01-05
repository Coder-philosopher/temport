"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface SkillCardProps {
  category: string;
  skills: string[];
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}