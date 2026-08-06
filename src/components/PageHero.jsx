export default function PageHero({ eyebrow, title, blurb, image }) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-navy-900/30" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {eyebrow && (
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-flame">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1>
        {blurb && <p className="mt-5 max-w-2xl font-body text-lg text-white/75">{blurb}</p>}
      </div>
    </section>
  )
}
