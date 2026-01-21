import { experience } from "@/data/experience";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      </Reveal>

      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((item, idx) => (
          <Reveal key={`${item.company}-${item.role}-${item.start}`} delay={idx * 0.05}>
            <article className="p-6 border border-white/10 rounded-2xl">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-gray-300">{item.company}</p>
                  {item.location ? (
                    <p className="text-sm text-gray-400 mt-1">
                      {item.location}
                    </p>
                  ) : null}
                </div>

                <p className="text-sm text-gray-400 md:text-right">
                  {item.start} — {item.end}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-gray-300 list-disc pl-5">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {item.tech?.length ? (
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-white/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
