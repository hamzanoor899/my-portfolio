import Reveal from "@/components/Reveal";

const tech = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "NextAuth.js",
  "Prisma",
  "PostgreSQL",
  "Git",
];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-6">
      <div className="container-max">
        <Reveal>
          <h2 className="text-3xl font-bold">Tech Stack</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Tools I use to ship clean UI, fast performance, and maintainable
            code.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            {tech.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-xl text-sm bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
