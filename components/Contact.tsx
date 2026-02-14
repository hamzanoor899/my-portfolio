import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container-max">
        <Reveal>
          <h2 className="text-3xl font-bold">Contact</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Have an idea, a role, or a project you want to ship? Let’s build it.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 card p-8 max-w-3xl">
            <p className="text-sm text-gray-400">
              <span className="text-gray-300">Email:</span>{" "}
              hamzanoor899@gmail.com
              <span className="mx-2 text-foreground/20">·</span>
              <span className="text-gray-300">Location:</span> Lahore, Pakistan
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="mailto:hamzanoor899@gmail.com"
                className="px-6 py-3 bg-foreground text-background rounded-xl font-semibold"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/hamza-noor-290136142/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-black/10 bg-black/[0.03] hover:bg-black/[0.06] transition-colors text-foreground"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/hamzanoor899"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl border border-black/10 bg-black/[0.03] hover:bg-black/[0.06] transition-colors text-foreground"
              >
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
