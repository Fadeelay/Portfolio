import React, { useState } from 'react'

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
    status: 'in-progress',
  },
  {
    id: 5,
    title: 'Not Your Average NPC',
    role: '5-Person Capstone Team — Database Design & AI/ML Support',
    stack: ['Unity', 'C#', 'ASP.NET Core', 'PostgreSQL', 'Redis', 'Qdrant', 'ONNX', 'Docker'],
    problem:
      'Capstone team project: build a detective interrogation game where a suspect’s dialogue and behavior adapt to how the player actually investigates, instead of following a static, pre-scripted dialogue tree — backed by a persistent, backend-authoritative game state rather than client-side scripting.',
    architecture:
      'A Unity 3D client (raycast-based world interaction, chat-style dialogue UI, notebook and keypad systems) talks to an ASP.NET Core backend over HTTP/JSON. The backend is the sole source of truth for progression, clue discovery, and suspect state — Unity never decides outcomes locally. PostgreSQL persists that state, Redis caches intent-classification results, and Qdrant does vector-based intent retrieval that feeds an optional LLM-assisted dialogue layer, all orchestrated behind a progression engine that enforces the interrogation’s rules.',
    features: [
      'Designed and implemented the PostgreSQL schema — Players, Npcs, PlayerNpcStates, ProgressionSessions, Interactions, ActionCatalog, DialogueTemplates, and Lore tables — as the authoritative store for all runtime gameplay state',
      'Modeled the evolving player↔suspect relationship (trust, patience, curiosity, openness) as a composite-key PlayerNpcStates table so behavior stays consistent across a session instead of resetting each interaction',
      'Set up and seeded the Qdrant vector database used for intent-based dialogue classification, and helped train the embedding models that map free-text player questions onto supported interrogation actions',
      'Kept ProgressionSessions (clue history, proof tier, composure state) as the backend’s live session record, so multi-step interrogations survive across requests instead of relying on in-memory state',
    ],
    challenges: [
      'Confession progression based on clue possession alone let players reach a confession before actually raising the key evidence with the suspect — fixed by requiring both clue discovery and clue discussion before confession became eligible in the schema/logic.',
      'Early state tracking relied on in-memory values that didn’t survive backend restarts or reconnects — moved session, interaction, and player-NPC state fully into PostgreSQL so the backend could recover cleanly and stay authoritative over Unity.',
    ],
    github: 'https://github.com/YakshSharma2004/testapunity',
    demo: null,
    status: 'complete',
    images: [
      { src: '/projects/npc-detective-game/gameplay-confront.jpg', alt: 'Unity gameplay: confronting the suspect Dylan with gathered clues' },
      { src: '/projects/npc-detective-game/clue-inspection.jpg', alt: 'Player inspecting a clue on a desk in the 3D scene' },
      { src: '/projects/npc-detective-game/casebook-notebook.jpg', alt: 'In-game casebook notebook tracking discovered evidence' },
      { src: '/projects/npc-detective-game/er-diagram.png', alt: 'PostgreSQL entity-relationship diagram for the game backend' },
    ],
  },
  {
    id: 6,
    title: 'Clinic Waitlist System',
    role: '3-Person Team Project — Backend API & Real-Time Queue',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Server-Sent Events'],
    problem:
      'Clinic patients faced long, disorganized in-person queues with no visibility into their wait status, while front-desk staff needed a fast way to register walk-ins, avoid double check-ins, and track patient status — without adopting a full EHR system.',
    architecture:
      'A React/Tailwind frontend (public waitlist form, live queue board, staff dashboard) talks to an Express/MongoDB backend over a REST API. The backend mints sequential 6-digit patient tickets from an atomic Counter document, blocks duplicate check-ins at both the application and database level, and pushes live queue updates to staff dashboards and a public "TV queue" board over Server-Sent Events instead of polling.',
    features: [
      'Built the patient/ticket data model and duplicate-booking guard: normalizes name + phone (accent-stripping, digits-only) and blocks a second active check-in for the same person via an application-level query backed by a partial unique MongoDB index on (nameNorm, contactDigits) while status is "waiting"',
      'Implemented atomic 6-digit ticket numbering with a dedicated Counter collection (findOneAndUpdate + $inc) so simultaneous check-ins never collide on the same number',
      'Built the SSE hub that pushes live patient-list updates to each staff member\'s own dashboard and a separate public TV Queue board, replacing polling with real-time push updates',
      'JWT-protected staff routes (My Patients, status updates, deletes) scoped so each staff member only sees and edits the patients they registered',
    ],
    challenges: [
      'Two people submitting the same name/phone within milliseconds of each other could both pass the application-level duplicate check before either was saved — fixed by backing the check with a partial unique MongoDB index, so the database itself rejects the race condition, with the controller catching the resulting E11000 error and returning a friendly "already on the waitlist" response instead of a 500.',
      'SSE connections needed to be scoped per staff member rather than broadcast to everyone in the clinic — solved by keying the connection map by staffId and only pushing patient updates to the sockets belonging to the staff member who registered that patient.',
    ],
    github: null,
    demo: null,
    status: 'complete',
    images: [
      { src: '/projects/clinic-waitlist/home.png', alt: 'Clinic Waitlist landing page with Join Waitlist, Live Queue, and Staff Dashboard options' },
      { src: '/projects/clinic-waitlist/waitlist-success.png', alt: 'Waitlist form after registering, showing the assigned 6-digit ticket number' },
      { src: '/projects/clinic-waitlist/staff-dashboard.png', alt: 'Staff My Patients dashboard with a live-updating patient list' },
      { src: '/projects/clinic-waitlist/tv-queue.png', alt: 'Public TV queue board showing waiting patients by ticket number' },
    ],
  },
  {
    id: 2,
    title: 'Campus Job Board (StudentHustle)',
    role: 'Full-Stack Developer (Solo)',
    stack: ['Java 21', 'Spring Boot', 'Spring Security', 'Thymeleaf', 'PostgreSQL', 'Docker', 'Render'],
    problem:
      'University students need one place to find on-campus and local jobs; employers need to post and manage listings; and the platform needs moderation so unapproved or spam postings never reach students.',
    architecture:
      'Layered Spring Boot app (controller → service → repository) split into role-scoped routes (/student, /employer, /admin). A session-based Thymeleaf UI and a stateless JSON API (/api/**) share the same domain model but run through two separate Spring Security filter chains — form login for the web app, HTTP Basic for the API. Deployed as a Docker image on Render with a managed PostgreSQL database; a Spring profile (application-render.properties) swaps the local MySQL datasource for Postgres at deploy time via env vars, so the app code never changes between environments.',
    features: [
      'Three role-based dashboards (Student, Employer, Admin) gated entirely by Spring Security',
      'Employer job postings stay PENDING until an admin approves or rejects them from a moderation queue',
      'Students filter live listings by location, category, and salary range via dynamically composed JPA Specifications',
      'One application per student per job enforced with a DB unique constraint plus a friendly error page',
      'Employers move applicants through status stages (Applied → Reviewed → ...) per job posting',
      'Built-in admin log viewer — a custom Logback appender feeds a thread-safe ring buffer so admins can see recent server activity without shelling into the box',
    ],
    challenges: [
      'Serving both a stateful Thymeleaf UI and a stateless JSON API from one app meant one security config would compromise the other — split into two @Order-ed SecurityFilterChains scoped by securityMatcher("/api/**"), each with its own auth scheme and exception handling.',
      'Local development runs on MySQL but Render only offers managed Postgres — resolved with a SPRING_PROFILES_ACTIVE=render profile that swaps the JDBC URL/driver at deploy time instead of hardcoding a database.',
      'A student double-clicking "Apply" could beat the app-level check and insert two applications — added a DB-level unique constraint on (job_id, student_id) plus a DuplicateApplicationException caught by a global exception handler for a clean error page instead of a 500.',
    ],
    github: 'https://github.com/Fadeelay/campusjobboard1',
    demo: 'https://campusjobboard.onrender.com',
    status: 'complete',
    images: [
      { src: '/projects/campus-job-board/home.png', alt: 'StudentHustle landing page with job search' },
      { src: '/projects/campus-job-board/admin-jobs.png', alt: 'Admin job moderation queue with approve/reject actions' },
      { src: '/projects/campus-job-board/student-jobs.png', alt: 'Student job search with location, category, and salary filters' },
      { src: '/projects/campus-job-board/employer-post-job.png', alt: 'Employer post-a-job form' },
    ],
  },
]

function StatusBadge({ status }) {
  if (status === 'complete') return <span className="badge-success">Complete</span>
  return <span className="badge-warning">In Progress</span>
}

function Slideshow({ images }) {
  const [index, setIndex] = useState(0)
  const go = (i) => setIndex((i + images.length) % images.length)

  return (
    <div className="mt-6">
      <div className="relative rounded-xl overflow-hidden border border-surface-border bg-surface-raised">
        <a href={images[index].src} target="_blank" rel="noreferrer">
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full max-h-[420px] object-contain object-center bg-black/5"
          />
        </a>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-raised/90 border border-surface-border flex items-center justify-center text-content-primary hover:bg-primary hover:text-white transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-raised/90 border border-surface-border flex items-center justify-center text-content-primary hover:bg-primary hover:text-white transition-colors"
            >
              ›
            </button>
            <span className="absolute bottom-2 right-2 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-white">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 justify-center">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === index ? 'bg-primary' : 'bg-surface-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
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

            {/* Screenshots */}
            {p.images && <Slideshow images={p.images} />}

            {/* Footer links */}
            {(p.github || p.demo) && (
              <div className="flex gap-3 mt-6 pt-5 border-t border-surface-border">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                    GitHub →
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary text-xs">
                    Live Demo →
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
