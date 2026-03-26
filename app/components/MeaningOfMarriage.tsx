const gospelFlow = [
  "God created marriage as a covenant of love, faithfulness, and shared purpose.",
  "Sin distorts our hearts, and relationships can drift into self-centeredness and hurt.",
  "In Christ, we are forgiven and formed into a sacrificial, faithful, and God-centered love.",
  "Marriage points beyond itself to the greater love story of God redeeming His people.",
];

const marriagePanels = [
  {
    label: "Marriage as Covenant",
    scripture: "Malachi 2:14",
    reflection:
      "Marriage is not just a celebration moment, but a sacred promise before God to remain faithful in every season.",
  },
  {
    label: "Marriage as Partnership",
    scripture: "Genesis 2:18",
    reflection:
      "Husband and wife are called to walk side by side, helping one another grow in grace, wisdom, and purpose.",
  },
  {
    label: "Marriage as Ministry",
    scripture: "Galatians 5:13",
    reflection:
      "Love serves. In marriage, everyday acts of kindness and humility become a quiet witness of Christ at work.",
  },
  {
    label: "Marriage as Reflection of Christ",
    scripture: "Ephesians 5:25",
    reflection:
      "Christian marriage reflects Christ and the Church, revealing a love that is sacrificial, steadfast, and full of grace.",
  },
];

export default function MeaningOfMarriage() {
  return (
    <section
      id="meaning-of-marriage"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_20%,rgba(95,113,100,0.2)_0%,rgba(95,113,100,0)_38%),linear-gradient(180deg,#efe5d9_0%,#f7efe6_52%,#f4eee6_100%)] py-20 sm:py-24"
      aria-labelledby="meaning-of-marriage-title"
    >
      <div className="pointer-events-none absolute -left-12 top-8 h-44 w-44 rounded-full bg-[#D4A48A]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-10 h-52 w-52 rounded-full bg-[#5F7164]/20 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7164]">
            The Meaning of Marriage
          </p>

          <h2
            id="meaning-of-marriage-title"
            className="font-display text-4xl leading-tight text-[#5F7164] sm:text-5xl"
          >
            A covenant that gently tells the gospel story.
          </h2>

          <p className="text-base leading-8 text-[#6B5547] sm:text-lg">
            Marriage reflects Christ and the Church. It calls us to a love that
            is sacrificial, faithful, and centered on God.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-[#5F7164]/20 bg-[#F8F2EA]/85 p-6 shadow-[0_18px_44px_rgba(95,113,100,0.16)] sm:p-8">
          <h3 className="font-display text-2xl text-[#99643C] sm:text-3xl">
            The gospel in marriage
          </h3>

          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {gospelFlow.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-[#99643C]/18 bg-[#F4EEE6] p-4 text-sm leading-7 text-[#6B5547] shadow-[0_10px_24px_rgba(153,100,60,0.08)] sm:text-base"
              >
                {point}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 space-y-6">
          {marriagePanels.map((panel, index) => (
            <article
              key={panel.label}
              className={`group relative rounded-3xl border border-[#5F7164]/20 bg-[#F8F2EA]/92 p-6 shadow-[0_16px_34px_rgba(95,113,100,0.12)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 sm:p-8 ${
                index % 2 === 0 ? "-rotate-[0.65deg]" : "rotate-[0.65deg]"
              }`}
            >
              <div className="absolute right-5 top-5 rounded-full border border-[#99643C]/35 bg-[#F4EEE6] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#99643C]">
                {panel.scripture}
              </div>

              <div className="max-w-3xl">
                <h3 className="font-display pr-24 text-2xl leading-tight text-[#5F7164] sm:text-3xl">
                  {panel.label}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#6B5547] sm:text-lg">
                  {panel.reflection}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
