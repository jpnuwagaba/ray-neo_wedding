const scriptureCards = [
  {
    reference: "Genesis 2:24",
    scripture:
      "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh.",
    reflection:
      "Marriage is a covenant where two lives are joined into one shared devotion before God.",
    connection:
      "Raymond and Neoline begin this union by choosing daily unity, shared prayer, and one Christ-centered direction.",
  },
  {
    reference: "Ephesians 5:25",
    scripture:
      "Husbands, love your wives, as Christ loved the church and gave himself up for her.",
    reflection:
      "Biblical love is sacrificial, not self-protective. It gives, serves, and remains faithful.",
    connection:
      "Their marriage is anchored in this example, where love is measured by service, humility, and devotion.",
  },
  {
    reference: "1 Corinthians 13:4-7",
    scripture:
      "Love is patient and kind; love does not envy or boast... It bears all things, believes all things, hopes all things, endures all things.",
    reflection:
      "Christian love is steady and formed over time through patience, forgiveness, and truth.",
    connection:
      "As they build a home together, these qualities shape how they speak, forgive, and keep choosing each other.",
  },
  {
    reference: "Ecclesiastes 4:9-12",
    scripture:
      "Two are better than one... For if they fall, one will lift up his fellow... A threefold cord is not quickly broken.",
    reflection:
      "Marriage thrives in partnership, where mutual support is strengthened by God at the center.",
    connection:
      "Their covenant is not only two hearts together, but a threefold cord with Christ holding them firm.",
  },
];

export default function ScriptureReflections() {
  return (
    <section
      id="scripture-reflections"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f4eee6_0%,#ede5dc_42%,#e5ddd3_100%)] py-20 sm:py-24"
      aria-labelledby="scripture-reflections-title"
    >
      <div className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-[#B6C7C9]/22 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-0 h-56 w-56 rounded-full bg-[#D4A48A]/24 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7164]">
            Scripture & Reflections
          </p>

          <h2
            id="scripture-reflections-title"
            className="font-display max-w-3xl text-4xl leading-tight text-[#5F7164] sm:text-5xl"
          >
            Verses to pray through as this covenant begins.
          </h2>

          <p className="max-w-2xl text-base leading-8 text-[#6B5547] sm:text-lg">
            Swipe through each passage for a short reflection and how it speaks
            to Raymond and Neoline&apos;s union.
          </p>
        </div>

        <div className="mt-4">
          <p className="inline-flex items-center rounded-full border border-[#5F7164]/20 bg-[#F8F2EA]/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#99643C]">
            Swipe to reflect
          </p>
        </div>

        <div className="mt-10 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-color:#99643C_transparent]">
            {scriptureCards.map((card) => (
              <article
                key={card.reference}
                className="group relative w-[86vw] shrink-0 snap-start rounded-3xl border border-[#5F7164]/20 bg-[#F8F2EA]/92 p-6 shadow-[0_16px_38px_rgba(95,113,100,0.14)] transition-transform duration-300 hover:-translate-y-1 sm:w-[64vw] sm:p-7 lg:w-[40vw] xl:w-[32vw]"
              >
                <p className="font-display text-6xl leading-none text-[#D4A48A]/55 transition-colors group-hover:text-[#D4A48A]">
                  &ldquo;
                </p>

                <p className="mt-2 w-fit rounded-full border border-[#99643C]/25 bg-[#F4EEE6] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#99643C]">
                  {card.reference}
                </p>

                <p className="mt-5 text-base leading-8 text-[#5F7164] sm:text-lg">
                  {card.scripture}
                </p>

                <div className="mt-6 space-y-4 rounded-2xl border border-[#5F7164]/14 bg-[#F4EEE6]/80 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#5F7164]">
                    Reflection
                  </p>
                  <p className="text-sm leading-7 text-[#6B5547] sm:text-base">
                    {card.reflection}
                  </p>
                  <p className="text-sm leading-7 text-[#6B5547] sm:text-base">
                    {card.connection}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
