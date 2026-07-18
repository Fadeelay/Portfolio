const skillGroups = [
  {
    category: 'Languages & Frameworks',
    icon: '⌨',
    skills: [
      { name: 'C# / ASP.NET Core', projects: ['Real Estate Listing Platform'] },
      { name: 'Java / Spring Boot', projects: ['Job & Contract Marketplace'] },
      { name: 'Python', projects: ['Data Analysis Script'] },
      { name: 'JavaScript / TypeScript', projects: ['JS Marketplace', 'Portfolio Site'] },
      { name: 'React', projects: ['Job & Contract Marketplace', 'JS Marketplace'] },
      { name: 'Node.js / Express', projects: ['JS Marketplace'] },
    ],
  },
  {
    category: 'Databases & Data Access',
    icon: '🗄',
    skills: [
      { name: 'SQL Server', projects: ['Real Estate Listing Platform'] },
      { name: 'MySQL', projects: ['Job & Contract Marketplace'] },
      { name: 'MongoDB', projects: ['JS Marketplace'] },
      { name: 'Entity Framework Core', projects: ['Real Estate Listing Platform'] },
      { name: 'Spring Data JPA', projects: ['Job & Contract Marketplace'] },
      { name: 'ER Modeling', projects: ['Real Estate Platform', 'Job Marketplace'] },
    ],
  },
  {
    category: 'Engineering Practices',
    icon: '⚙',
    skills: [
      { name: 'RESTful API Design', projects: ['Real Estate Platform', 'Job Marketplace'] },
      { name: 'JWT / Session Auth', projects: ['Job Marketplace', 'JS Marketplace'] },
      { name: 'Role-Based Access Control', projects: ['Real Estate Listing Platform'] },
      { name: 'Layered Architecture (SOLID)', projects: ['Real Estate Platform', 'Job Marketplace'] },
      { name: 'Input Validation & Error Handling', projects: ['Real Estate Listing Platform'] },
      { name: 'Unit & Integration Testing', projects: ['All projects'] },
    ],
  },
  {
    category: 'Tools & Environments',
    icon: '🛠',
    skills: [
      { name: 'Git / GitHub', projects: ['All projects'] },
      { name: 'Postman', projects: ['API development'] },
      { name: 'Visual Studio / VS Code', projects: ['All projects'] },
      { name: 'IntelliJ / Spring Tool Suite', projects: ['Job & Contract Marketplace'] },
      { name: 'MySQL Workbench', projects: ['Job & Contract Marketplace'] },
      { name: 'Docker (basics)', projects: ['Local dev environments'] },
    ],
  },
  {
    category: 'IT Support Competencies',
    icon: '🔧',
    skills: [
      { name: 'Log-Based Debugging', projects: ['All projects'] },
      { name: 'Local Environment Setup', projects: ['All projects'] },
      { name: 'Database Admin Basics', projects: ['Real Estate Listing Platform'] },
      { name: 'Basic Networking Concepts', projects: ['Coursework'] },
      { name: 'Technical Documentation', projects: ['All READMEs'] },
      { name: 'Cross-Stack Troubleshooting', projects: ['Real Estate Listing Platform'] },
    ],
  },
]

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <p className="section-label">Expertise</p>
      <h1 className="section-heading">Skills</h1>
      <p className="section-subheading">
        Every skill is tied to at least one real project — no unverified checkbox claims.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="card">
            {/* Group header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-surface-border">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-base">
                {group.icon}
              </div>
              <h2 className="text-sm font-bold text-content-primary">{group.category}</h2>
            </div>

            {/* Skill rows */}
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-xs font-bold shrink-0">✓</span>
                    <span className="text-content-primary text-sm font-medium">{skill.name}</span>
                  </div>
                  <span className="text-content-muted text-xs text-right leading-relaxed shrink-0 max-w-[45%]">
                    {skill.projects.join(' · ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
