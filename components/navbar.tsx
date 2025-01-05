"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Github, Linkedin, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

const sections = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const currentTheme = storedTheme || "light";
    setTheme(currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold ml-2  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">Abdullah Shaikh</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
  <NavigationMenuList>
    {sections.map((section) => (
      <NavigationMenuItem key={section.name}>
        <Link href={section.href} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              "border border-transparent dark:border-gray-600 border-black hover:border-gray-700 dark:hover:border-white rounded-md transition-colors"
            )}
          >
            {section.name}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>

        <div className="flex-1" />
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Coder-philosopher" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/abdullah-shaikh-97309b297/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>
    </div>
  );
}
