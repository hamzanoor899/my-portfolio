const links = [
  { label: "Home", href: "#top" },
  { label: "Tech", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="container-max px-6 py-4">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-wide">
            Hamza
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative hover:text-white transition-colors"
              >
                <span>{l.label}</span>
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-white/60 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-colors"
          >
            Let’s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
