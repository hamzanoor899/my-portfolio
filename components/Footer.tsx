export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Muhammad Hamza Noor
        </p>
        <p className="text-sm text-gray-500">Built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
