import PageHero from '../components/PageHero.jsx'

const roles = [
  { title: 'Station Manager', dept: 'Retail Operations', loc: 'Lagos', type: 'Full-time' },
  { title: 'Terminal Safety Officer', dept: 'Bulk Storage', loc: 'Port Harcourt', type: 'Full-time' },
  { title: 'Fleet Dispatch Coordinator', dept: 'Shipping & Haulage', loc: 'Lagos', type: 'Full-time' },
  { title: 'Lube Blending Technician', dept: 'Manufacturing', loc: 'Ibadan', type: 'Full-time' },
  { title: 'Graduate Trainee — Engineering', dept: 'Engineering', loc: 'Abuja', type: 'Graduate Programme' },
  { title: 'HR Business Partner', dept: 'People & Culture', loc: 'Lagos', type: 'Full-time' },
]

const perks = [
  { t: 'Health cover', d: 'Comprehensive medical for you and dependents.' },
  { t: 'Learning budget', d: 'Annual allowance for courses and certifications.' },
  { t: 'Fuel allowance', d: 'Because we know what fuel actually costs.' },
  { t: 'Growth path', d: 'Structured promotion tracks, not guesswork.' },
]

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join RYA — a world of great opportunities"
        blurb="We're building teams that exemplify professionalism, innovation and integrity. Come shape the future of energy in Nigeria."
        image="/images/lab-science.png"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">Why RYA</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">What you get, beyond a salary</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {perks.map((p) => (
              <div key={p.t} className="rounded-2xl border border-navy/10 p-5">
                <h3 className="font-display text-sm font-semibold text-navy">{p.t}</h3>
                <p className="mt-2 font-body text-sm text-ink/60">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">Open roles</p>
        <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Current openings</h2>

        <div className="mt-10 divide-y divide-navy/10 rounded-2xl border border-navy/10">
          {roles.map((r) => (
            <div key={r.title} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-base font-semibold text-navy">{r.title}</h3>
                <p className="mt-1 font-body text-sm text-ink/60">{r.dept} · {r.loc} · {r.type}</p>
              </div>
              <a
                href="mailto:careers@rya-energy.example"
                className="inline-block shrink-0 rounded-full border border-navy/20 px-5 py-2.5 text-center font-body text-sm font-semibold text-navy hover:border-navy hover:bg-navy hover:text-white"
              >
                Apply
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 font-body text-sm text-ink/50">Don't see a fit? Send a general application to careers@rya-energy.example.</p>
      </section>
    </>
  )
}
