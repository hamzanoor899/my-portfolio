import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <Reveal>
        <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-300">
            Want to work together or chat about a project? Reach out.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hamza@example.com"
              className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-white rounded-xl"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            (Update the email + links in `components/Contact.tsx`)
          </p>
        </div>
      </Reveal>
    </section>
  );
}
