const links = [
  { label: "Home", href: "#top" },
  { label: "Tech", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 py-4">
      <nav className="container-max">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
          <a href="#top" className="font-semibold tracking-wide text-foreground">
            Hamza
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative hover:text-foreground transition-colors"
              >
                <span>{l.label}</span>
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-foreground/40 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-xl border border-black/10 bg-black/[0.03] hover:bg-black/[0.06] hover:border-black/15 transition-colors text-foreground"
          >
            Let’s Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
