const incidents = [
  {
    id: 1,
    title: 'Delete Button Silently Failing',
    project: 'Real Estate Listing Platform',
    stack: ['ASP.NET Core', 'C#'],
    symptom:
      'Clicking the delete button on a listing appeared to do nothing — no error shown, no redirect, listing still present.',
    investigation:
      'Opened browser DevTools → Network tab and saw a 404 response. Compared the URL the button was generating against the registered routes in Program.cs — the route template used {listingId} but the controller action parameter was named id, causing the model binder to receive null.',
    fix:
      'Renamed the route parameter to match the action parameter. Added a guard clause to return 400 Bad Request if id is null or zero to surface future mismatches early.',
    lesson:
      'Always check the Network tab before assuming the issue is in JavaScript. A 404 from a controller route mismatch looks identical to a JS error at the surface level.',
    tags: ['routing', 'debugging', 'ASP.NET Core'],
  },
  {
    id: 2,
    title: 'ModelState Blocking Listing Creation',
    project: 'Real Estate Listing Platform',
    stack: ['ASP.NET Core', 'EF Core'],
    symptom:
      'Creating a new listing returned a blank page reload with no error message and nothing saved to the database.',
    investigation:
      'Added a check for ModelState.IsValid and logged ModelState.Values to the console. Discovered that the ImageUrl field was marked [Required] in the model but the create form had no image field yet, so the binder always set it to null.',
    fix:
      'Changed [Required] to [MaxLength] on ImageUrl and set a default empty string in the entity constructor. Added server-side error display in the Razor view so validation failures surface visibly.',
    lesson:
      'Always render ModelState errors in the view during development — a silent redirect back to the form is the most common symptom of a validation failure.',
    tags: ['validation', 'MVC', 'model binding'],
  },
  {
    id: 3,
    title: 'Interrogation State Lost on Backend Restart',
    project: 'Not Your Average NPC',
    stack: ['PostgreSQL', 'ASP.NET Core', 'C#'],
    symptom:
      'Discovered clues, dialogue history, and progression state occasionally reset mid-playtest even though the interrogation was still active from the player\'s point of view — most noticeable after a backend restart or a client reconnect.',
    investigation:
      'Traced session handling and found progression state was being kept in memory rather than written through to the database on every change, so it only survived for the lifetime of the running process.',
    fix:
      'Moved ProgressionSessions, Interactions, and PlayerNpcStates to be persisted to PostgreSQL on every state-changing request instead of cached in memory, so a restart or reconnect could rehydrate the exact session state from the database.',
    lesson:
      'For any multi-step workflow where correctness matters, treat the database as the source of truth from day one — an in-memory cache makes a demo look fine right up until the first restart or reconnect during a live playtest.',
    tags: ['PostgreSQL', 'persistence', 'backend', 'state management'],
  },
  {
    id: 4,
    title: 'Confession Reachable Before Key Evidence Was Discussed',
    project: 'Not Your Average NPC',
    stack: ['PostgreSQL', 'C#', 'ASP.NET Core'],
    symptom:
      'Players could trigger the suspect\'s confession after only discovering the key clues, without ever actually raising them in dialogue — the interrogation felt broken because confessions came out of nowhere.',
    investigation:
      'Found that confession-eligibility logic checked only clue possession (DiscoveredClueIdsJson) and never checked whether those clues had actually been brought up with the suspect.',
    fix:
      'Added a separate DiscussedClueIdsJson track and updated the progression rule so confession requires the key evidence to appear in both "discovered" and "discussed" before it becomes eligible.',
    lesson:
      '"The player knows X" and "the player has actually used X in conversation" needed to be modeled as two distinct, separately tracked states — collapsing them into one field masked a real gameplay logic bug.',
    tags: ['game logic', 'PostgreSQL', 'progression', 'debugging'],
  },
  {
    id: 5,
    title: 'Duplicate Waitlist Entries From a Race Condition',
    project: 'Clinic Waitlist System',
    stack: ['Node.js', 'Express', 'MongoDB'],
    symptom:
      'Two near-simultaneous submissions with the same name and phone number could occasionally both succeed, creating two active tickets for the same patient instead of the intended single entry.',
    investigation:
      'The duplicate check was a plain findOne query run before the insert. Under concurrent requests, both requests could pass that check before either document was actually saved — a classic check-then-act race condition.',
    fix:
      'Added a partial unique MongoDB index on (nameNorm, contactDigits) scoped to status: "waiting" so the database itself rejects the second insert; the controller catches the resulting E11000 duplicate-key error and returns a friendly "already on the waitlist" response instead of a 500.',
    lesson:
      'Application-level duplicate checks aren\'t safe under concurrency — only a database-level unique index can atomically guarantee "at most one" across simultaneous requests.',
    tags: ['MongoDB', 'race condition', 'concurrency', 'validation'],
  },
  {
    id: 6,
    title: 'Staff Seeing Other Staff\'s Patients on the Live Dashboard',
    project: 'Clinic Waitlist System',
    stack: ['Node.js', 'Express', 'Server-Sent Events'],
    symptom:
      'Early in development, a patient status update from one staff member\'s session occasionally appeared on another staff member\'s dashboard, even though each staff member should only see the patients they registered.',
    investigation:
      'The initial SSE hub kept one shared set of connected clients and broadcast every update to all of them, instead of routing each update to the specific staff member who owned that patient.',
    fix:
      'Reworked the SSE hub to key connections by staffId (a Map of staffId → Set of open connections) and push updates only to the connections belonging to the patient\'s addedBy/staffId — matching the scoping already enforced on the REST endpoints.',
    lesson:
      'Real-time channels need the same authorization scoping as the REST API behind them — it\'s easy to ship the "broadcast to everyone" version first and forget to narrow it before multiple staff are using it concurrently.',
    tags: ['SSE', 'real-time', 'authorization', 'Node.js'],
  },
]

export default function Troubleshooting() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <p className="section-label">Debugging &amp; Lessons Learned</p>
      <h1 className="section-heading">Troubleshooting Stories</h1>
      <p className="section-subheading">
        Real bugs I investigated and fixed — each covering the symptom, investigation process,
        fix, and key takeaway. Relevant for both dev and IT support roles.
      </p>

      <div className="flex flex-col gap-8">
        {incidents.map((inc) => (
          <article key={inc.id} className="card">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-lg font-bold text-content-primary">{inc.title}</h2>
                <p className="text-xs text-content-muted font-semibold mt-0.5">{inc.project}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {inc.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {inc.stack.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>

            {/* 2-col content grid */}
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-surface-raised rounded-xl p-4 border border-surface-border">
                <h3 className="text-content-primary font-bold text-xs uppercase tracking-widest mb-2">
                  Symptom
                </h3>
                <p className="text-content-secondary leading-relaxed">{inc.symptom}</p>
              </div>
              <div className="bg-surface-raised rounded-xl p-4 border border-surface-border">
                <h3 className="text-content-primary font-bold text-xs uppercase tracking-widest mb-2">
                  Investigation
                </h3>
                <p className="text-content-secondary leading-relaxed">{inc.investigation}</p>
              </div>
              <div className="bg-surface-raised rounded-xl p-4 border border-surface-border">
                <h3 className="text-content-primary font-bold text-xs uppercase tracking-widest mb-2">
                  Fix Applied
                </h3>
                <p className="text-content-secondary leading-relaxed">{inc.fix}</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                <h3 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">
                  Key Lesson
                </h3>
                <p className="text-content-primary leading-relaxed font-semibold text-sm">
                  {inc.lesson}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
