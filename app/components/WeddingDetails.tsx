const detailCards = [
  {
    title: "Ceremony Date",
    value: "Saturday, 14 November 2026",
    helper: "Please arrive at least 30 minutes early.",
  },
  {
    title: "Time",
    value: "10:00 AM - 1:00 PM",
    helper: "Main service begins at 10:30 AM.",
  },
  {
    title: "Church / Venue",
    value: "St. Andrew's Cathedral, Kampala",
    helper: "Nakasero Hill Road, Kampala.",
  },
  {
    title: "Reception Venue",
    value: "Serena Hotel Gardens, Kampala",
    helper: "Reception begins right after photos.",
  },
  {
    title: "Dress Code",
    value: "Elegant Formal",
    helper: "Modest and celebratory attire encouraged.",
  },
  {
    title: "Theme Colors",
    value: "Sage, Blush, Sand, Clay",
    helper: "A warm earth-toned celebration palette.",
  },
];

const themeSwatches = [
  { label: "Sage", color: "#5F7164" },
  { label: "Blush", color: "#D4A48A" },
  { label: "Sand", color: "#C9B39E" },
  { label: "Clay", color: "#99643C" },
];

const contacts = [
  {
    role: "Event Coordinator",
    name: "Coordinator Name",
    phone: "+256 XXX XXX XXX",
  },
  {
    role: "Bride's Representative",
    name: "Representative Name",
    phone: "+256 XXX XXX XXX",
  },
  {
    role: "Groom's Representative",
    name: "Representative Name",
    phone: "+256 XXX XXX XXX",
  },
];

export default function WeddingDetails() {
  return (
    <section
      id="wedding-details"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#e7ded2_0%,#efe7dd_44%,#f6eee4_100%)] py-20 sm:py-24"
      aria-labelledby="wedding-details-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(153,100,60,0.14)_0%,rgba(153,100,60,0)_100%)]" />
      <div className="pointer-events-none absolute -left-12 bottom-10 h-48 w-48 rounded-full bg-[#B6C7C9]/22 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-14 h-52 w-52 rounded-full bg-[#D4A48A]/26 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7164]">
            Wedding Details
          </p>

          <h2
            id="wedding-details-title"
            className="font-display text-4xl leading-tight text-[#5F7164] sm:text-5xl"
          >
            Everything you need for the day, all in one place.
          </h2>

          <p className="text-base leading-8 text-[#6B5547] sm:text-lg">
            Here is the practical guide for ceremony and reception planning,
            travel, parking, and key contacts.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {detailCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-[#5F7164]/18 bg-[#F8F2EA]/92 p-6 shadow-[0_14px_30px_rgba(95,113,100,0.12)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#99643C]">
                {card.title}
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-[#5F7164]">
                {card.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-[#6B5547] sm:text-base">
                {card.helper}
              </p>

              {card.title === "Theme Colors" ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {themeSwatches.map((swatch) => (
                    <div key={swatch.label} className="flex items-center gap-2">
                      <span
                        className="h-4 w-4 rounded-full border border-black/10"
                        style={{ backgroundColor: swatch.color }}
                      />
                      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#5F7164]">
                        {swatch.label}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          <article className="rounded-3xl border border-[#5F7164]/18 bg-[#F8F2EA]/92 p-6 shadow-[0_14px_30px_rgba(95,113,100,0.12)] lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#99643C]">
              Map / Directions
            </p>
            <p className="mt-3 text-base leading-8 text-[#6B5547] sm:text-lg">
              Use the map link below to get turn-by-turn directions to the
              ceremony venue.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=St.+Andrew%27s+Cathedral+Kampala"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#99643C] px-6 text-sm font-bold uppercase tracking-[0.08em] text-[#F4EEE6] transition-colors hover:bg-[#7F5232]"
            >
              Open in Google Maps
            </a>
          </article>

          <article className="rounded-3xl border border-[#5F7164]/18 bg-[#F8F2EA]/92 p-6 shadow-[0_14px_30px_rgba(95,113,100,0.12)]">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#99643C]">
              Parking Guidance
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[#6B5547] sm:text-base">
              <li>On-site parking is available at both venues.</li>
              <li>Parking attendants will guide guest arrival lanes.</li>
              <li>Overflow parking signs will be posted nearby.</li>
            </ul>
          </article>
        </div>

        <article className="mt-6 rounded-3xl border border-[#5F7164]/18 bg-[#F8F2EA]/92 p-6 shadow-[0_14px_30px_rgba(95,113,100,0.12)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#99643C]">
            Contact Persons
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((contact) => (
              <div
                key={contact.role}
                className="rounded-2xl border border-[#99643C]/16 bg-[#F4EEE6] p-4"
              >
                <p className="text-xs font-bold uppercase tracking-[0.08em] text-[#5F7164]">
                  {contact.role}
                </p>
                <p className="mt-2 font-display text-xl text-[#5F7164]">
                  {contact.name}
                </p>
                <p className="mt-2 text-sm text-[#6B5547]">{contact.phone}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
