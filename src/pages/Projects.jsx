const projects = [
  {
    id: 1,
    title: 'Real Estate Listing Platform',
    role: 'Full-Stack Developer (Solo)',
    stack: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Bootstrap', 'C#'],
    problem:
      'Needed a property listing system where admins manage the platform, agents post listings, and buyers browse and save favourites.',
    architecture:
      'Three-layer architecture: controllers handle HTTP, services contain business logic, repositories abstract EF Core data access.',
    features: [
      'Role-based auth: Admin / Agent / User with protected routes',
      'CRUD listings with image upload',
      'Search and filter by price, location, and type',
      'Admin dashboard for user and listing management',
    ],
    challenges: [
      'Fixed a route mismatch that caused the delete button to silently fail — traced through DevTools and ASP.NET routing logs.',
      'Resolved ModelState validation errors that blocked listing creation when optional image fields were omitted.',
    ],
    github: 'https://github.com/Fadeelay',
    demo: null,
    status: 'complete',
  },
  {
    id: 2,
    title: 'Job & Contract Marketplace',
    role: 'Full-Stack Developer (Solo)',
    stack: ['Java', 'Spring Boot', 'React', 'MySQL', 'JPA'],
    problem:
      'A platform where employers post short-term contracts and freelancers apply, track status, and communicate.',
    architecture:
      'Spring Boot REST API with JPA repositories, React SPA frontend using React Router and fetch for data loading.',
    features: [
      'JWT authentication with protected API endpoints',
      'Employer and freelancer role flows',
      'Contract posting, application, and status tracking',
      'Responsive React UI with form validation',
    ],
    challenges: [
      'Debugged CORS issues between the Spring Boot API and React dev server.',
      'Fixed lazy-loading N+1 query issue in JPA when fetching applications with related users.',
    ],
    github: 'https://github.com/Fadeelay',
    demo: null,
    status: 'in-progress',
  },
  {
    id: 3,
    title: 'Full-Stack JavaScript Marketplace',
    role: 'Full-Stack Developer (Solo)',
    stack: ['Node.js', 'Express', 'React', 'MongoDB', 'JWT'],
    problem: 'A buy/sell marketplace demonstrating a full JavaScript stack from database to UI.',
    architecture:
      'Express REST API with Mongoose models, React frontend with React Router, context for auth state.',
    features: [
      'User registration and JWT login',
      'Listing creation with image support',
      'Search, filter, and pagination',
      'Protected seller dashboard',
    ],
    challenges: [
      'Handled async race conditions in React state when multiple filters were applied simultaneously.',
    ],
    github: 'https://github.com/Fadeelay',
    demo: null,
    status: 'in-progress',
  },
  {
    id: 4,
    title: 'Python Data Analysis Script',
    role: 'Developer (Solo)',
    stack: ['Python', 'pandas', 'matplotlib'],
    problem: 'Automated processing and visualization of structured datasets for academic analysis.',
    architecture: 'Single-module Python script with pandas for data wrangling and matplotlib for charting.',
    features: [
      'CSV ingestion and cleaning',
      'Statistical summaries and trend analysis',
      'Chart export (bar, line, scatter)',
    ],
    challenges: [
      'Handled inconsistent date formats across input files using pandas date parsing with error coercion.',
    ],
    github: 'https://github.com/Fadeelay',
    demo: null,
    status: 'complete',
  },
]

function StatusBadge({ status }) {
  if (status === 'complete') return <span className="badge-success">Complete</span>
  return <span className="badge-warning">In Progress</span>
}

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <p className="section-label">Work</p>
      <h1 className="section-heading">Projects</h1>
      <p className="section-subheading">
        Case studies across multiple stacks — each documenting architecture, key features, and real debugging stories.
      </p>

      <div className="flex flex-col gap-8">
        {projects.map((p) => (
          <article key={p.id} className="card">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-content-primary">{p.title}</h2>
                <p className="text-xs text-content-muted mt-0.5 font-semibold">{p.role}</p>
              </div>
              <StatusBadge status={p.status} />
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.stack.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>

            {/* Body grid */}
            <div className="grid md:grid-cols-2 gap-4 text-sm text-content-secondary">
              <div className="bg-surface-raised rounded-xl p-4 border border-surface-border">
                <h3 className="text-content-primary font-bold text-xs uppercase tracking-widest mb-2">
                  Problem &amp; Context
                </h3>
                <p className="leading-relaxed">{p.problem}</p>
              </div>
              <div className="bg-surface-raised rounded-xl p-4 border border-surface-border">
                <h3 className="text-content-primary font-bold text-xs uppercase tracking-widest mb-2">
                  Architecture
                </h3>
                <p className="leading-relaxed">{p.architecture}</p>
              </div>
              <div className="bg-surface-raised rounded-xl p-4 border border-surface-border">
                <h3 className="text-content-primary font-bold text-xs uppercase tracking-widest mb-2">
                  Key Features
                </h3>
                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary mt-0.5 shrink-0 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                <h3 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">
                  Challenges &amp; Debugging
                </h3>
                <ul className="space-y-1.5">
                  {p.challenges.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="text-primary mt-0.5 shrink-0">→</span>
                      <span className="text-content-secondary leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer links */}
            <div className="flex gap-3 mt-6 pt-5 border-t border-surface-border">
              <a href={p.github} target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                GitHub →
              </a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                  Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
