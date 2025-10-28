import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.25)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text side */}
          <div className="relative z-10">
            <p className="text-blue-600 font-semibold tracking-wide">Web Developer</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Building playful, modern, interactive web experiences
            </h1>
            <p className="mt-4 text-black/70 max-w-xl">
              I craft fast, accessible, and delightful products with React, TypeScript,
              and modern CSS. I love shipping ideas that feel alive.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white shadow-sm hover:bg-blue-500 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-black/10 px-5 py-2.5 bg-white hover:bg-black/5 transition-colors"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-black/60">
              <span className="px-3 py-1 rounded-full bg-black/5">React</span>
              <span className="px-3 py-1 rounded-full bg-black/5">TypeScript</span>
              <span className="px-3 py-1 rounded-full bg-black/5">Tailwind</span>
              <span className="px-3 py-1 rounded-full bg-black/5">Node.js</span>
            </div>
          </div>

          {/* Spline scene side */}
          <div className="relative h-[50vh] md:h-[70vh] w-full">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
