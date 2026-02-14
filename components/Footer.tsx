export default function Footer() {
  return (
    <footer className="py-12 px-6">
      <div className="container-max">
        <div className="glass rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Muhammad Hamza Noor
          </p>
          <p className="text-sm text-gray-300">Built with Next.js + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
