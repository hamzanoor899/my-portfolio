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
    <section id="tech" className="py-20 px-6 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-wrap justify-center gap-4">
          {tech.map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-white/10 rounded-xl text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
