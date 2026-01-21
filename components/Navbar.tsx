const links = [
	{ label: "Home", href: "#top" },
	{ label: "Tech", href: "#tech" },
	{ label: "Experience", href: "#experience" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
			<nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
				<a href="#top" className="font-semibold tracking-wide">
					Hamza
				</a>

				<div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="hover:text-white transition-colors"
						>
							{l.label}
						</a>
					))}
				</div>

				<a
					href="#contact"
					className="text-sm px-4 py-2 rounded-xl border border-white/20 hover:border-white/40 transition-colors"
				>
					Let’s Talk
				</a>
			</nav>
		</header>
	);
}
