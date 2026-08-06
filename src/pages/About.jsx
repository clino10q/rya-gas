import PageHero from "../components/PageHero.jsx";

const values = [
  {
    t: "Quality, unwavering",
    d: "Petroleum products that meet international standards, every batch, every station.",
  },
  {
    t: "Invest in people",
    d: "Strong teams and a culture that rewards excellence, not just tenure.",
  },
  {
    t: "Show up for customers",
    d: "Going further than expected, because reliability is the actual product.",
  },
];

const team = [
  {
    name: "Ilelaboye Ayomide",
    role: "Chief Executive Officer",
    img: "/images/team-7.jpg",
  },
  {
    name: "Femi Okonkwo",
    role: "Chief Operating Officer",
    img: "/images/team-2.jpg",
  },
  {
    name: "Sanni Bello",
    role: "Head of Sustainability",
    img: "/images/team-6.avif",
  },
  {
    name: "Timothy Salako",
    role: "Corporate Accountant",
    img: "/images/team-5.jpg",
  },
  {
    name: "Vanessa Evans",
    role: "Head of Administration & HR",
    img: "/images/team-4.webp",
  },
  {
    name: "Kunle Adeyemi",
    role: "Head of Engineering",
    img: "/images/team-3.jpg",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About RYA"
        title="A remarkable energy company, built from the heart of Africa"
        blurb="RYA... powering every mile, fueling every future."
        image="/images/rya-rig.webp"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-5 font-body text-ink/75">
            <p>
              Founded in 1989, RYA has grown from a single depot into a
              full-stream energy company — moving fuel, gas and lubricants from
              storage terminals and marine vessels into the hands of everyday
              drivers and industries across Nigeria.
            </p>
            <p>
              We're more than a supplier. We're a partner invested in the
              communities we serve, from the technicians who keep our tank farms
              running to the families who fill up at our stations every morning.
            </p>
            <p>
              Our mission is simple: sustainable energy solutions that improve
              lives and move the country forward — delivered by people who take
              professionalism, innovation and integrity seriously.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-navy-900">
            <video
              className="h-full w-full"
              controls
              poster="/images/meeting.png"
            >
              <source src="/images/vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            What we stand for
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Three commitments that don't move
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-navy/10 p-6">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {v.t}
                </h3>
                <p className="mt-2 font-body text-sm text-ink/65">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid items-center gap-10 rounded-2xl bg-navy-900 p-10 md:grid-cols-3 md:p-14">
          <img
            src="/images/hundred.png"
            alt="Recognition badge"
            className="mx-auto h-28 w-28 object-contain md:mx-0"
          />
          <div className="md:col-span-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-flame">
              Recognitions
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-white">
              Consistently listed among Nigeria's most reliable downstream
              energy brands
            </h3>
            <p className="mt-3 font-body text-sm text-white/65">
              We've been recognized by industry stakeholders for transparent
              pricing and dependable supply — and we're proudest of the trust it
              reflects from the people who fuel up with us every day.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            Leadership
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
            Our people
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-2xl border border-navy/10"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4">
                  <div className="font-display text-sm font-semibold text-navy">
                    {p.name}
                  </div>
                  <div className="font-body text-xs text-ink/60">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/rally.png"
              alt="RYA community outreach"
              className="h-72 w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">
              Community
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-navy md:text-3xl">
              Investing beyond the pump
            </h2>
            <p className="mt-4 font-body text-ink/70">
              Through the RYA Foundation, we support road safety campaigns,
              local scholarships and small-business fuel grants in the
              communities around our stations and terminals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
