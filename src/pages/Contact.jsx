import { useState } from "react";
import PageHero from "../components/PageHero.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General enquiry",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to RYA"
        blurb="Product enquiries, station feedback or partnership ideas — we read everything that comes in."
        image="/images/meeting.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">
              Send us a message
            </h2>
            {sent ? (
              <div className="mt-6 rounded-2xl border border-navy/10 bg-white p-6">
                <p className="font-display text-lg font-semibold text-navy">
                  Message received
                </p>
                <p className="mt-2 font-body text-sm text-ink/65">
                  Thanks, {form.name.split(" ")[0] || "there"} — someone from
                  the RYA team will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-4">
                <div>
                  <label className="font-body text-sm font-medium text-navy">
                    Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    className="mt-1 w-full rounded-xl border border-navy/15 px-4 py-3 font-body text-sm focus:border-navy focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-navy">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className="mt-1 w-full rounded-xl border border-navy/15 px-4 py-3 font-body text-sm focus:border-navy focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-navy">
                    Topic
                  </label>
                  <select
                    value={form.topic}
                    onChange={update("topic")}
                    className="mt-1 w-full rounded-xl border border-navy/15 px-4 py-3 font-body text-sm focus:border-navy focus:outline-none"
                  >
                    <option>General enquiry</option>
                    <option>Product enquiry</option>
                    <option>Partnership / distributorship</option>
                    <option>Station feedback</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    className="mt-1 w-full rounded-xl border border-navy/15 px-4 py-3 font-body text-sm focus:border-navy focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-navy px-7 py-3.5 font-body text-sm font-semibold text-white hover:bg-navy-700"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="font-display text-sm font-semibold text-navy">
                Head office
              </h3>
              <p className="mt-2 font-body text-sm text-ink/65">
                RYA Group, 15 Adeyemo Alakija Street, Victoria Island, Lagos
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-6">
              <h3 className="font-display text-sm font-semibold text-navy">
                Customer support
              </h3>
              <p className="mt-2 font-body text-sm text-ink/65">
                +234 911 351 9042 · support@rya-energy.com
              </p>
              <p className="mt-1 font-body text-sm text-ink/65">
                Monday – Saturday, 8am – 6pm
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/rya-building.jpg"
                alt="RYA head office building"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
