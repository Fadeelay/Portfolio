const skillGroups = [
  {
    category: 'Languages & Frameworks',
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
    skills: [
      { name: 'SQL Server', projects: ['Real Estate Listing Platform'] },
      { name: 'MySQL', projects: ['Job & Contract Marketplace'] },
      { name: 'MongoDB', projects: ['JS Marketplace'] },
      { name: 'Entity Framework Core', projects: ['Real Estate Listing Platform'] },
      { name: 'Spring Data JPA', projects: ['Job & Contract Marketplace'] },
      { name: 'ER Modeling', projects: ['Real Estate Listing Platform', 'Job & Contract Marketplace'] },
    ],
  },
  {
    category: 'Engineering Practices',
    skills: [
      { name: 'RESTful API Design', projects: ['Real Estate Listing Platform', 'Job & Contract Marketplace'] },
      { name: 'JWT / Session Auth', projects: ['Job & Contract Marketplace', 'JS Marketplace'] },
      { name: 'Role-Based Access Control', projects: ['Real Estate Listing Platform'] },
      { name: 'Layered Architecture (SOLID)', projects: ['Real Estate Listing Platform', 'Job & Contract Marketplace'] },
      { name: 'Input Validation & Error Handling', projects: ['Real Estate Listing Platform'] },
      { name: 'Unit & Integration Testing', projects: ['All projects'] },
    ],
  },
  {
    category: 'Tools & Environments',
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
      <p className="font-mono text-sky-400 text-xs uppercase tracking-widest mb-3">Expertise</p>
      <h1 className="section-heading">Skills</h1>
      <p className="section-subheading">
        Every skill is tied to at least one real project — no unverified checkbox claims.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <div key={group.category} className="card">
            <h2 className="text-white font-semibold mb-4 border-b border-gray-800 pb-3">
              {group.category}
            </h2>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.name} className="flex flex-col gap-0.5">
                  <span className="text-gray-200 text-sm font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-xs">
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
