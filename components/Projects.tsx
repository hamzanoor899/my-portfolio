import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container-max">
        <Reveal>
          <h2 className="text-3xl font-bold">Projects</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-gray-400 mt-3 max-w-2xl">
            A few things I’ve built recently—focused on clean UX, scalable
            architecture, and solid performance.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.05}>
              <div className="card p-6 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
