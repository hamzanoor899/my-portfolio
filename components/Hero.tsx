import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center px-6">
      <div className="container-max">
        <div className="max-w-3xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-gray-300 border border-black/10 bg-black/[0.03] rounded-full px-4 py-2">
              Lahore, Pakistan · Open to remote
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Muhammad Hamza Noor
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">
                Frontend Developer
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base md:text-lg text-gray-300 max-w-2xl">
              Aspiring Frontend Developer crafting pixel-perfect, responsive,
              high-performance UIs with React, Next.js, Tailwind CSS, and
              Bootstrap—turning Figma into clean, maintainable code.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-foreground text-background rounded-xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="/Hamza_Resume.pdf"
                className="px-6 py-3 rounded-xl border border-black/10 bg-black/[0.03] hover:bg-black/[0.06] transition-colors text-foreground"
              >
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-gray-400">
              <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                React
              </span>
              <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                Next.js
              </span>
              <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                TypeScript
              </span>
              <span className="px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                Tailwind
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
