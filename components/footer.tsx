import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-white ml-2 dark:bg-black py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section: About and Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Abdullah Shaikh</h2>
          <p className="text-sm leading-loose text-muted-foreground">
            Built with 💕, passion, and precision. 
            <br />
            © 2025 Abdullah Shaikh. All rights reserved.
          </p>
          <div className="mt-4 text-sm">
            <p className="font-semibold">Contacts</p>
            <a href="mailto:abdullahsknitrr@gmail.com" className="block text-blue-500 hover:underline">
              abdullahsknitrr@gmail.com
            </a>
            <a href="mailto:ashaikh002.btech2023@bt.nitrr.ac.in" className="block text-blue-500 hover:underline">
              ashaikh002.btech2023@bt.nitrr.ac.in
            </a>
            <a href="tel:+917678092318" className="block text-blue-500 hover:underline">
              +91 7678092318
            </a>
          </div>
        </div>

       

        {/* Right Section: Social Links */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-2">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Coder-philosopher" target="_blank">
                <Github className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/abdullah-shaikh-97309b297/" target="_blank">
                <Linkedin className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
    
    </footer>
  );
}
