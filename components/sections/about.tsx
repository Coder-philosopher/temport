"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, GraduationCap, Lightbulb } from "lucide-react";
import Image from "next/image";

// Define TypeScript Interfaces
interface EducationDetail {
  type: "education";
  logo: string;
  institution: string;
  course: string;
  timeline: string;
}

interface DescriptionDetail {
  type: "description";
  description: string[];
}

type SubDetail = EducationDetail | DescriptionDetail;

interface Detail {
  icon: JSX.Element;
  title: string;
  subDetails: SubDetail[];
}

// Data with explicit type
const details: Detail[] = [
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Education",
    subDetails: [
      {
        type: "education",
        logo: "/nit-logo.png", // Example logo path
        institution: "National Institute of Technology, Raipur",
        course: "Metallurgical and Materials Engineering",
        timeline: "2023 - 2027",
      },
      {
        type: "education",
        logo: "/som-logo.png", // Example logo path
        institution: "SK Somaiya VinayMandir",
        course: "Higher Secondary Education",
        timeline: "2020 - 2022",
      },
    ],
  },
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: "Expertise",
    subDetails: [
      {
        type: "description",
        description: [
          "💻 Full-stack Development: Skilled in the MERN stack, Next.js, and building scalable web applications.",
          "☁️ Cloud Architecture: Proficient in deploying apps on AWS, Vercel, and using Railway for efficiency.",
          "📊 Data Structures & Algorithms: Strong problem-solving skills with a focus on optimized solutions.",
          "🤖 AI/ML: Exploring TensorFlow, NLP, and computer vision for intelligent solutions.",
        ],
      },
    ],
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
    title: "Interests/Hobbies",
    subDetails: [
      {
        type: "description",
        description: [
          "📷 Photography",
          "✈️ Travelling",
          "🏊 Swimming",
          "🎯 Quizzing",
          "✨ Exploring New Things",
        ],
      },
    ],
  },
];

// About Component
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
          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Engineering Student with interest in software development and a strong foundation in metallurgical and
              materials engineering. I am a quick learner and a team player with a strong work ethic. I am always eager
              to learn new technologies and improve my skills.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {details.map((item) => (
              <Card key={item.title} className="space-y-4 p-4">
                <CardContent className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 aspect-square flex items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    {item.subDetails.map((sub, index) => (
                      <div key={index} className="space-y-2">
                        {/* Handle Education Details */}
                        {sub.type === "education" ? (
                          <div className="flex items-start gap-4">
                            <Image
                              src={sub.logo}
                              alt={`${sub.institution} logo`}
                              width={100}
                              height={100}
                              priority
                              quality={90}
                            />
                            <div>
                              <p className="font-medium">{sub.institution}</p>
                              <p className="text-sm text-muted-foreground">
                                {sub.course} <br />
                                <span className="font-semibold">{sub.timeline}</span>
                              </p>
                            </div>
                          </div>
                        ) : (
                          // Handle Description Details
                          <ul className="list-disc list-inside text-muted-foreground">
                            {sub.description.map((point, i) => (
                              <li key={i} className="text-sm">
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
