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
      'Renamed the route parameter to match the action parameter. Added a guard clause to return 400 Bad Request if the id is null or zero to surface future mismatches early.',
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
    title: 'CORS Blocking React → Spring Boot API',
    project: 'Job & Contract Marketplace',
    stack: ['Java', 'Spring Boot', 'React'],
    symptom:
      'React fetch calls to the Spring Boot API returned a CORS error in the browser console; the backend received the request and returned 200 but the browser blocked the response.',
    investigation:
      'Read the browser error: "No Access-Control-Allow-Origin header present". Checked the Spring Boot config — the @CrossOrigin annotation was on the controller but only permitted http://localhost:3000 while the Vite dev server ran on port 5173.',
    fix:
      'Updated @CrossOrigin to allow both ports during development and moved the CORS config to a global WebMvcConfigurer bean so it applies to all controllers.',
    lesson:
      'CORS errors are always a server-side configuration issue, not a React issue. The browser error message contains the exact missing header — read it first before changing any frontend code.',
    tags: ['CORS', 'Spring Boot', 'React', 'networking'],
  },
  {
    id: 4,
    title: 'JPA N+1 Query on Applications List',
    project: 'Job & Contract Marketplace',
    stack: ['Java', 'Spring Boot', 'JPA'],
    symptom:
      'The applications list page loaded slowly and Hibernate logs showed dozens of SELECT queries firing for what should have been one list fetch.',
    investigation:
      'Enabled Hibernate SQL logging (spring.jpa.show-sql=true) and counted the queries. Each Application entity triggered a separate SELECT for its related User — a classic N+1 caused by the default LAZY fetch type on the @ManyToOne User relationship.',
    fix:
      'Added @EntityGraph to the repository method to eagerly join User in one query. Kept the default LAZY elsewhere to avoid loading unnecessary data globally.',
    lesson:
      'Always check Hibernate SQL logs when a list page feels slow. @EntityGraph is the surgical fix — it eager-loads only for the specific query that needs it without changing the global fetch strategy.',
    tags: ['JPA', 'performance', 'Hibernate', 'N+1'],
  },
]

export default function Troubleshooting() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <p className="font-mono text-sky-400 text-xs uppercase tracking-widest mb-3">
        Debugging &amp; Lessons Learned
      </p>
      <h1 className="section-heading">Troubleshooting Stories</h1>
      <p className="section-subheading">
        Real bugs I investigated and fixed — each write-up covers the symptom, investigation process, fix, and key takeaway.
        Relevant for both dev and IT support roles.
      </p>

      <div className="flex flex-col gap-8">
        {incidents.map((inc) => (
          <article key={inc.id} className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-xl font-bold text-white">{inc.title}</h2>
                <p className="text-sm text-gray-500 mt-0.5">{inc.project}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {inc.tags.map((tag) => (
                  <span key={tag} className="inline-flex px-2 py-0.5 rounded text-xs bg-gray-800 text-gray-400 border border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {inc.stack.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>

            <div className="grid md:grid-cols-2 gap-5 text-sm text-gray-400">
              <div>
                <h3 className="text-white font-semibold mb-1">Symptom</h3>
                <p>{inc.symptom}</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Investigation</h3>
                <p>{inc.investigation}</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Fix</h3>
                <p>{inc.fix}</p>
              </div>
              <div className="bg-sky-500/5 border border-sky-500/20 rounded-lg p-4">
                <h3 className="text-sky-400 font-semibold mb-1">Key Lesson</h3>
                <p className="text-gray-300">{inc.lesson}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
