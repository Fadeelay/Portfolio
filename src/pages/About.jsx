const preferences = [
  {
    title: 'Looking For',
    icon: '🎯',
    items: [
      'Junior Full-Stack Developer roles',
      'IT Support / Helpdesk positions',
      '2–6 month remote contracts',
      'Mentorship-friendly teams',
    ],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    items: [
      'Clear written documentation',
      'Collaborative academic group projects',
      'Systematic debugging approach',
      'Self-directed learning',
    ],
  },
]

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <p className="section-label">Background</p>
      <h1 className="section-heading">About Me</h1>

      {/* Bio */}
      <div className="card mb-8 space-y-4 text-content-secondary text-[15px] leading-relaxed">
        <p>
          I'm a recent computer programming diploma graduate based in{' '}
          <strong className="text-content-primary font-bold">Red Deer, Alberta</strong>,
          looking for junior full-stack developer and IT support roles. My studies covered
          the full web development stack — backend APIs, relational databases, frontend UIs,
          and software engineering practices like layered architecture and SOLID principles.
        </p>
        <p>
          My primary stack is{' '}
          <strong className="text-content-primary font-bold">ASP.NET Core (C#)</strong> and{' '}
          <strong className="text-content-primary font-bold">React + Node.js</strong>, with
          solid project experience in{' '}
          <strong className="text-content-primary font-bold">Java Spring Boot</strong> as well. I care
          about writing code that's maintainable and well-structured — not just code that works.
        </p>
        <p>
          I'm open to{' '}
          <strong className="text-content-primary font-bold">junior full-time roles</strong>{' '}
          and{' '}
          <strong className="text-content-primary font-bold">2–6 month remote contracts</strong>.
          I'm equally comfortable building features as I am debugging environments, reading
          logs, and supporting systems.
        </p>
      </div>

      {/* Preference cards */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {preferences.map((pref) => (
          <div key={pref.title} className="card">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-surface-border">
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-base">
                {pref.icon}
              </div>
              <h3 className="text-sm font-bold text-content-primary">{pref.title}</h3>
            </div>
            <ul className="space-y-2.5">
              {pref.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-content-secondary">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div>
        <h2 className="text-xl font-bold text-content-primary mb-2">Get in Touch</h2>
        <p className="text-content-secondary text-sm mb-6">
          Open to opportunities — feel free to reach out via email or connect on GitHub / LinkedIn.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:fadlullahlawal2@gmail.com" className="btn-primary">
            Email Me
          </a>
          <a href="https://github.com/Fadeelay" target="_blank" rel="noreferrer" className="btn-secondary">
            GitHub
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="btn-secondary">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
