import { Link } from 'react-router-dom'

const techBadges = [
  'C# / ASP.NET Core',
  'Java / Spring Boot',
  'Python',
  'React',
  'Node.js',
  'SQL / MySQL',
  'EF Core',
  'Git / GitHub',
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <p className="font-mono text-sky-400 text-sm mb-4 tracking-widest uppercase">
          Available for junior roles &amp; contracts
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Junior Full-Stack Developer
          <br />
          <span className="text-sky-400">&amp; IT Support Specialist</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed">
          Recent computer programming diploma graduate based in Red Deer, Alberta. I build and
          support real-world web applications using C#, Java, Python, React, and Node.js —
          focused on clean architecture, reliable APIs, and end-to-end delivery.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <Link to="/projects" className="btn-primary">
            View Projects
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary">
            Download Resume
          </a>
        </div>

        {/* Tech badge strip */}
        <div className="flex flex-wrap gap-2">
          {techBadges.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Quick highlights */}
      <section className="bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-3 gap-8">
          <div className="card">
            <div className="text-sky-400 text-3xl font-bold mb-1">6+</div>
            <div className="text-white font-semibold mb-1">Case Study Projects</div>
            <p className="text-gray-400 text-sm">
              Production-minded apps across multiple stacks with documented architecture and debugging stories.
            </p>
          </div>
          <div className="card">
            <div className="text-sky-400 text-3xl font-bold mb-1">4</div>
            <div className="text-white font-semibold mb-1">Languages &amp; Runtimes</div>
            <p className="text-gray-400 text-sm">
              C#, Java, Python, and JavaScript — depth in one stack, breadth across all four.
            </p>
          </div>
          <div className="card">
            <div className="text-sky-400 text-3xl font-bold mb-1">Full-Stack</div>
            <div className="text-white font-semibold mb-1">End-to-End Delivery</div>
            <p className="text-gray-400 text-sm">
              From ER diagrams and layered APIs to responsive React UIs and role-based auth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured project teaser */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <p className="font-mono text-sky-400 text-xs uppercase tracking-widest mb-3">Flagship project</p>
        <h2 className="text-2xl font-bold text-white mb-4">Real Estate Listing Platform</h2>
        <p className="text-gray-400 max-w-2xl mb-6">
          A full-stack ASP.NET Core + EF Core app with layered architecture, role-based access
          control (Admin / Agent / User), CRUD listings, image uploads, and search filtering.
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {['ASP.NET Core', 'EF Core', 'SQL Server', 'Bootstrap', 'C#'].map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
        <Link to="/projects" className="btn-secondary">
          See all projects →
        </Link>
      </section>
    </>
  )
}
