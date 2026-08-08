import { Link } from 'react-router-dom'

const techBadges = [
  'C# / ASP.NET Core',
  'Java / Spring Boot',
  'React',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'EF Core',
  'Git / GitHub',
]

const stats = [
  {
    value: '4',
    label: 'Case Study Projects',
    delta: 'Multiple stacks',
    desc: 'Production-minded apps with documented architecture and real debugging stories.',
  },
  {
    value: '3',
    label: 'Languages & Runtimes',
    delta: 'C# · Java · JS',
    desc: 'Depth in one primary stack, consistent engineering principles across all three.',
  },
  {
    value: 'Full-Stack',
    label: 'End-to-End Delivery',
    delta: 'DB → API → UI',
    desc: 'From ER diagrams and layered APIs to responsive React UIs and role-based auth.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="flex items-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
            Open to opportunities — Red Deer, AB
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-content-primary leading-tight mb-6">
          Full-Stack Developer
          <br />
          <span className="text-primary">&amp; IT Support Specialist</span>
        </h1>

        <p className="max-w-2xl text-lg text-content-secondary mb-10 leading-relaxed">
          I’m a full‑stack .NET/React developer based in Red Deer, Alberta, with a Computer Programming diploma and experience building secure APIs, trading automation systems, and web applications. I work with C#, ASP.NET Core, React, SQL, Docker, and Python for data and machine learning, with a strong focus on security and automation.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          <Link to="/projects" className="btn-primary">
            View Projects
          </Link>
          <a href={`${import.meta.env.BASE_URL}Fadlullah Lawal Tech.pdf`} target="_blank" rel="noreferrer" className="btn-secondary">
            Download Resume
          </a>
        </div>

        {/* Tech badge strip */}
        <div className="flex flex-wrap gap-2">
          {techBadges.map((tech) => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
      </section>

      {/* ── Stat cards ───────────────────────── */}
      <section className="border-y border-surface-border bg-surface-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="card-sm">
              <div className="flex items-end justify-between mb-3">
                <span className="text-3xl font-extrabold text-content-primary">{s.value}</span>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-pill border border-primary/20">
                  {s.delta}
                </span>
              </div>
              <div className="text-sm font-bold text-content-primary mb-1">{s.label}</div>
              <p className="text-xs text-content-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Flagship project teaser ──────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <p className="section-label">Flagship project</p>
        <div className="card max-w-3xl">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-xl font-bold text-content-primary">
                Real Estate Listing Platform
              </h2>
              <p className="text-sm text-content-muted mt-0.5 font-medium">
                Full-Stack Developer (Solo) · ASP.NET Core + EF Core
              </p>
            </div>
            <span className="badge-warning shrink-0">In Progress</span>
          </div>
          <p className="text-content-secondary text-sm leading-relaxed mb-5">
            A full-stack app with layered architecture, role-based access control
            (Admin / Agent / User), CRUD listings with image uploads, and search filtering.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {['ASP.NET Core', 'EF Core', 'SQL Server', 'Bootstrap', 'C#'].map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
          <Link to="/projects" className="btn-secondary text-sm">
            See all projects →
          </Link>
        </div>
      </section>
    </>
  )
}
