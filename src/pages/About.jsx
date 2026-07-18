export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <p className="font-mono text-sky-400 text-xs uppercase tracking-widest mb-3">Background</p>
      <h1 className="section-heading">About Me</h1>

      <div className="prose prose-invert prose-sky max-w-none text-gray-400 space-y-5 text-base leading-relaxed">
        <p>
          I'm a recent computer programming diploma graduate based in{' '}
          <strong className="text-gray-200">Red Deer, Alberta</strong>, looking for junior
          full-stack developer and IT support roles. My studies covered the full web development
          stack — backend APIs, relational databases, frontend UIs, and software engineering
          practices like layered architecture and SOLID principles.
        </p>
        <p>
          My primary stack is{' '}
          <strong className="text-gray-200">ASP.NET Core (C#)</strong> and{' '}
          <strong className="text-gray-200">React + Node.js</strong>, with solid project
          experience in <strong className="text-gray-200">Java Spring Boot</strong> and{' '}
          <strong className="text-gray-200">Python</strong> as well. I care about writing code
          that's maintainable and well-structured — not just code that works.
        </p>
        <p>
          I'm open to{' '}
          <strong className="text-gray-200">junior full-time roles</strong> and{' '}
          <strong className="text-gray-200">2–6 month remote contracts</strong>. I'm equally
          comfortable building features as I am debugging environments, reading logs, and
          supporting systems — which makes IT support a natural fit alongside development work.
        </p>
      </div>

      {/* Work preferences */}
      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-white font-semibold mb-3">Looking For</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Junior Full-Stack Developer roles</li>
            <li>IT Support / Helpdesk positions</li>
            <li>2–6 month remote contracts</li>
            <li>Mentorship-friendly teams</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-white font-semibold mb-3">Soft Skills</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Clear written documentation</li>
            <li>Collaborative academic group projects</li>
            <li>Systematic debugging approach</li>
            <li>Self-directed learning</li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white mb-6">Get in Touch</h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:your@email.com"
            className="btn-primary"
          >
            Email Me
          </a>
          <a
            href="https://github.com/Fadeelay"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
