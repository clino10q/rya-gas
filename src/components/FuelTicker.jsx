const prices = [
  { label: "Petrol", value: "862.40", tone: "text-emerald-400" },
  { label: "Diesel", value: "1,145.90", tone: "text-sky-400" },
  { label: "Super", value: "901.20", tone: "text-rose-400" },
  { label: "Premium Diesel", value: "1,208.50", tone: "text-flame" },
  { label: "LPG (per kg)", value: "1,340.00", tone: "text-emerald-400" },
  { label: "CNG (per scm)", value: "450.00", tone: "text-sky-400" },
];

function PriceRow() {
  return (
    <div className="flex shrink-0 items-center gap-2 pr-8">
      <span className="mr-2 shrink-0 rounded-full bg-flame/15 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-flame">
        Prices In Lagos
      </span>
      {prices.map((p) => (
        <div
          key={p.label}
          className="flex shrink-0 items-baseline gap-2 border-l border-white/10 pl-4"
        >
          <span className="font-body text-xs text-white/60">{p.label}</span>
          <span className={`font-mono text-sm font-semibold ${p.tone}`}>
            ₦{p.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function FuelTicker() {
  return (
    <div className="group overflow-hidden border-y border-white/10 bg-navy-900 py-3">
      <div className="ticker-track flex w-max items-center group-hover:[animation-play-state:paused]">
        <PriceRow />
        <PriceRow />
      </div>
    </div>
  );
}
