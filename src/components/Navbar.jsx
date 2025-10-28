import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight">John Doe</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          <div className="h-5 w-px bg-black/10" />
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
