import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 0.05}>
            <div className="p-6 border border-white/10 rounded-2xl">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/10 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
