import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 ml-2 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Abdullah with 💕
            <br />
            All rights reserved © 2025. Contact: abdullahsknitrr@gmail.com
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Coder-philosopher" target="_blank">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/abdullah-shaikh-97309b297/" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
