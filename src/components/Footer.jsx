export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-card mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-primary font-extrabold">✦</span>
          <span className="text-content-muted text-sm">
            © {new Date().getFullYear()} Fadeelay — Built with React + Vite + Tailwind
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Fadeelay"
            target="_blank"
            rel="noreferrer"
            className="text-content-secondary hover:text-primary text-sm font-semibold transition-colors"
          >
            GitHub
          </a>
          <span className="text-surface-border">·</span>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
            className="text-content-secondary hover:text-primary text-sm font-semibold transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
