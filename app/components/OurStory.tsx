const storySlides = [
  {
    step: "01",
    title: "How They Met",
    summary:
      "Their first conversation began with a simple hello after church and grew into the kind of friendship that felt both easy and intentional.",
  },
  {
    step: "02",
    title: "Friendship & Courtship",
    summary:
      "What started as shared conversations became steady prayer, honest encouragement, and a courtship rooted in faith, patience, and joy.",
  },
  {
    step: "03",
    title: "The Proposal",
    summary:
      "With grateful hearts and loved ones close by, one sacred question was asked and answered with a joyful yes that changed everything.",
  },
  {
    step: "04",
    title: "What They Admire",
    summary:
      "They admire each other's kindness, conviction, and love for God, and how those same qualities make them better partners every day.",
  },
];

export default function OurStory() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f4eee6_0%,#efe5d9_44%,#eaded1_100%)] py-20 sm:py-24"
      aria-labelledby="our-story-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(95,113,100,0.18)_0%,rgba(95,113,100,0)_100%)]" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7164]">
            Their Love Story
          </p>

          <h2
            id="our-story-title"
            className="font-display max-w-3xl text-4xl leading-tight text-[#5F7164] sm:text-5xl"
          >
            Every chapter led to this covenant day.
          </h2>

          <p className="max-w-2xl text-base leading-8 text-[#6B5547] sm:text-lg">
            Scroll through the moments that shaped their journey from first
            meeting to forever.
          </p>
        </div>

        <div className="mt-10 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-color:#99643C_transparent]">
            {storySlides.map((slide) => (
              <article
                key={slide.step}
                className="group relative w-[85vw] shrink-0 snap-start rounded-3xl border border-[#5F7164]/18 bg-[#F8F2EA]/92 p-6 shadow-[0_16px_42px_rgba(95,113,100,0.14)] sm:w-[62vw] lg:w-[38vw] xl:w-[30vw]"
              >
                <p className="font-display text-5xl leading-none text-[#D4A48A] transition-colors group-hover:text-[#99643C]">
                  {slide.step}
                </p>

                <h3 className="mt-5 font-display text-3xl leading-tight text-[#5F7164]">
                  {slide.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-[#6B5547]">
                  {slide.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
