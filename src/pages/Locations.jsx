import { useMemo, useState } from "react";
import PageHero from "../components/PageHero.jsx";

const stations = [
  {
    name: "RYA Lekki Phase 1",
    city: "Lagos",
    address: "Admiralty Way, Lekki",
    hours: "24 hours",
    services: ["Fuel", "Mart", "Air & Water"],
  },
  {
    name: "RYA Wuse II",
    city: "Abuja",
    address: "Aminu Kano Crescent, Wuse II",
    hours: "24 hours",
    services: ["Fuel", "LPG", "Mart"],
  },
  {
    name: "RYA Trans Amadi",
    city: "Port Harcourt",
    address: "Trans Amadi Industrial Layout",
    hours: "6am – 11pm",
    services: ["Fuel", "Diesel Bulk", "CNG"],
  },
  {
    name: "RYA Bodija",
    city: "Ibadan",
    address: "Awolowo Avenue, Bodija",
    hours: "24 hours",
    services: ["Fuel", "Mart"],
  },
  {
    name: "RYA Independence Layout",
    city: "Enugu",
    address: "Independence Layout",
    hours: "6am – 10pm",
    services: ["Fuel", "LPG"],
  },
  {
    name: "RYA Sango",
    city: "Ilorin",
    address: "Agric Estate, Sango Rd, Kwara",
    hours: "24 hours",
    services: ["Fuel", "Diesel Bulk"],
  },
];

const cities = [
  "All cities",
  ...Array.from(new Set(stations.map((s) => s.city))),
];

export default function Locations() {
  const [city, setCity] = useState("All cities");

  const filtered = useMemo(
    () =>
      city === "All cities"
        ? stations
        : stations.filter((s) => s.city === city),
    [city],
  );

  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Find your nearest RYA station"
        blurb="180+ stations and counting — search by city to find fuel, LPG and RYA Mart near you."
        image="/images/station.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="flex flex-wrap gap-2">
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setCity(c)}
              className={`rounded-full border px-4 py-2 font-body text-sm font-medium transition ${
                city === c
                  ? "border-navy bg-navy text-white"
                  : "border-navy/15 text-navy/70 hover:border-navy/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-navy/10 bg-white p-6"
            >
              <h3 className="font-display text-base font-semibold text-navy">
                {s.name}
              </h3>
              <p className="mt-1 font-body text-sm text-ink/60">
                {s.address}, {s.city}
              </p>
              <p className="mt-3 font-mono text-xs uppercase tracking-wide text-ember">
                {s.hours}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.services.map((sv) => (
                  <span
                    key={sv}
                    className="rounded-full bg-navy/5 px-3 py-1 font-body text-xs text-navy/70"
                  >
                    {sv}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="font-body text-ink/60">
              No stations found for that city yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
