"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AboutCard({ icon: Icon, title, description }: AboutCardProps) {
  return (
    <Card>
      <CardContent className="p-6 text-center space-y-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}