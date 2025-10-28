import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Interactive Dashboard",
    description:
      "A real-time analytics dashboard with charts, filters, and responsive layouts.",
    stack: ["React", "Tailwind", "Recharts"],
    link: "#",
  },
  {
    title: "E-commerce Storefront",
    description:
      "A performant storefront with product search, cart, and checkout experiences.",
    stack: ["Next.js", "Stripe", "Prisma"],
    link: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "A template-driven portfolio builder with theming and drag-and-drop sections.",
    stack: ["Vite", "Framer Motion", "Tailwind"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-3 text-black/70">
            A selection of recent work. I focus on clean architecture, delightful UX,
            and maintainable code.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-black/10 bg-white p-5 transition-shadow hover:shadow-lg"
            >
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-blue-600">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-black/60">
                {p.stack.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-black/5">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
                >
                  View project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
