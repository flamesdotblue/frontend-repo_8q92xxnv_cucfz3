import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 p-8 md:p-12 bg-white relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_10%,rgba(99,102,241,0.12)_0%,transparent_60%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-black/70 max-w-2xl">
              I’m available for freelance, full-time roles, and interesting collaborations.
              Drop me a line and I’ll get back to you soon.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-500 transition-colors"
              >
                <Mail className="h-5 w-5" /> Email Me
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-5 py-2.5 hover:bg-black/5 transition-colors"
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-5 py-2.5 hover:bg-black/5 transition-colors"
              >
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-black/50">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </section>
  );
}
