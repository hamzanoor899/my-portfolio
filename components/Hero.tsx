import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <Reveal>
        <h1 className="text-4xl md:text-6xl font-bold">Muhammad Hamza Noor</h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-4 text-xl text-gray-400">
          Frontend Developer | React & Next.js
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="max-w-2xl mt-6 text-gray-300">
          I build scalable, responsive, and high-performance web applications
          using React.js, Next.js, and Tailwind CSS.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
          >
            View Projects
          </a>

          <a
            href="/Hamza_Resume.pdf"
            className="px-6 py-3 border border-white rounded-xl"
          >
            Download CV
          </a>
        </div>
      </Reveal>
    </section>
  );
}
