import { NavLink } from 'react-router-dom'
import FuelTicker from '../components/FuelTicker.jsx'

const services = [
  { title: 'Retail Stations', img: '/images/station.png', text: 'A growing network of service stations delivering petrol, diesel and premium fuels across Nigeria.' },
  { title: 'Bulk Storage', img: '/images/rya-bulk.png', text: 'Tank farms that keep petroleum products available and moving, rain or shine.' },
  { title: 'Lube Production', img: '/images/mix.png', text: 'Locally blended lubricants for domestic, industrial and marine applications.' },
  { title: 'Shipping & Haulage', img: '/images/shipping.png', text: 'Marine vessels and road haulage that get product where it needs to be, on schedule.' },
]

const stats = [
  { n: '180+', l: 'Retail stations' },
  { n: '36', l: 'States served' },
  { n: '1989', l: 'Founded' },
  { n: '900k L', l: 'Daily storage capacity' },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <img src="/images/rya-rig.webp" alt="Offshore energy platform" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/80 to-navy-900" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-flame">Energy, Delivered Reliably</p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            Powering every mile,<br />fueling every future.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg text-white/75">
            RYA moves fuel, gas and lubricants from source to street — through our own stations, storage terminals and vessels across Nigeria.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <NavLink to="/services" className="rounded-full bg-flame px-7 py-3.5 font-body text-sm font-semibold text-navy-900 hover:bg-flame-600">
              Explore our services
            </NavLink>
            <NavLink to="/locations" className="rounded-full border border-white/25 px-7 py-3.5 font-body text-sm font-semibold text-white hover:border-flame hover:text-flame">
              Find a station
            </NavLink>
          </div>
        </div>
      </section>

      <FuelTicker />

      {/* Stats */}
      <section className="bg-navy-900 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {stats.map((s) => (
            <div key={s.l} className="border-l border-white/10 pl-5">
              <div className="font-display text-3xl font-bold text-flame md:text-4xl">{s.n}</div>
              <div className="mt-1 font-body text-sm text-white/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">One company, the full energy chain</h2>
          <p className="mt-4 font-body text-ink/70">From the well to the pump, RYA runs the storage, shipping and retail that keep Nigeria moving.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition hover:shadow-md">
              <div className="h-40 overflow-hidden">
                <img src={s.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 font-body text-sm text-ink/65">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facility spotlight */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">Infrastructure</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">Built on tank farms, not just tankers</h2>
            <p className="mt-4 font-body text-ink/70">
              Our storage terminals sit close to the routes that matter, so product keeps flowing even when demand spikes. It's the difference between a promise and a delivery.
            </p>
            <NavLink to="/services" className="mt-6 inline-block rounded-full bg-navy px-6 py-3 font-body text-sm font-semibold text-white hover:bg-navy-700">
              See our infrastructure
            </NavLink>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img src="/images/facility.png" alt="RYA storage facility" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Join RYA — a world of great opportunities</h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-white/70">We're building teams that exemplify professionalism, innovation and integrity. Come build the future of energy with us.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <NavLink to="/careers" className="rounded-full bg-flame px-7 py-3.5 font-body text-sm font-semibold text-navy-900 hover:bg-flame-600">
              View open roles
            </NavLink>
            <NavLink to="/contact" className="rounded-full border border-white/25 px-7 py-3.5 font-body text-sm font-semibold text-white hover:border-flame hover:text-flame">
              Become a partner
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
