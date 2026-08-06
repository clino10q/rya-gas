import PageHero from "../components/PageHero.jsx";

const offerings = [
  {
    title: "Retail Fuel Stations",
    img: "/images/station.png",
    text: "Petrol, diesel and premium diesel across a growing network of RYA-branded stations, staffed and stocked for 24/7 service.",
    points: [
      "Petrol · Diesel · Super · Premium Diesel",
      "24/7 service at flagship locations",
      "Card and mobile payment on-site",
    ],
  },
  {
    title: "LPG & CNG",
    img: "/images/fuel.png",
    text: "Cylinder refills, bulk LPG supply and CNG conversion kits for households and fleets moving toward cleaner fuel.",
    points: [
      "Cylinder exchange & refill",
      "Bulk LPG for industrial clients",
      "CNG kits & installation support",
    ],
  },
  {
    title: "Lube Oils",
    img: "/images/mix.png",
    text: "Locally blended engine, gear and hydraulic oils formulated for Nigerian road and industrial conditions.",
    points: [
      "Synthetic & mineral engine oils",
      "Hydraulic & gear oils",
      "Industrial & marine grades",
    ],
  },
  {
    title: "Bulk Storage",
    img: "/images/rya-bulk.png",
    text: "Tank farm capacity that keeps product available even when demand or shipping schedules shift.",
    points: [
      "900,000L+ daily storage capacity",
      "Strategically located terminals",
      "Third-party storage leasing",
    ],
  },
  {
    title: "Shipping & Haulage",
    img: "/images/shipping.png",
    text: "Marine vessels and a road haulage fleet that move product from import terminals to depots and stations.",
    points: [
      "Coastal & offshore vessel access",
      "Dedicated haulage fleet",
      "Real-time delivery tracking",
    ],
  },
  {
    title: "RYA Mart",
    img: "/images/rya-mart.png",
    text: "Convenience retail at station forecourts — snacks, essentials and quick-service stops for people on the move.",
    points: [
      "On-forecourt convenience stores",
      "Quick-service food partners",
      "Loyalty rewards for regulars",
    ],
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services & Products"
        title="Everything it takes to move energy, in one company"
        blurb="From the tank farm to the forecourt, RYA runs the full chain so fuel keeps flowing."
        image="/images/facility.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="space-y-16">
          {offerings.map((o, i) => (
            <div
              key={o.title}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={o.img}
                  alt={o.title}
                  className="h-72 w-full object-cover"
                />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                  0{i + 1}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-navy md:text-3xl">
                  {o.title}
                </h2>
                <p className="mt-4 font-body text-ink/70">{o.text}</p>
                <ul className="mt-5 space-y-2">
                  {o.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2 font-body text-sm text-ink/65"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-flame" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
