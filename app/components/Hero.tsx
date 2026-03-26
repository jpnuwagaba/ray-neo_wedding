const palette = {
  blush: "#D4A48A",
  sand: "#C9B39E",
  clay: "#99643C",
  mist: "#B6C7C9",
  sage: "#5F7164",
};

export default function Hero() {
  return (
    <section
      id="welcome"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
      aria-label="Welcome"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 18% 16%, ${palette.blush} 0%, ${palette.sand} 34%, ${palette.mist} 70%, ${palette.sage} 100%)`,
        }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-top scale-x-[-1]"
        style={{
          backgroundImage: "url('/assets/2g5a3446.jpg.jpeg')",
          opacity: 0.45,
        }}
      />

      <div className="hero-motion absolute left-[-5rem] top-24 h-80 w-80 rounded-full bg-[#D4A48A]/45 blur-3xl" />
      <div className="hero-motion hero-motion-delay absolute bottom-10 right-[-5.5rem] h-96 w-96 rounded-full bg-[#B6C7C9]/45 blur-3xl" />

      <div className="absolute inset-0 lg:hidden bg-[linear-gradient(120deg,rgba(244,238,230,0.86)_0%,rgba(244,238,230,0.72)_42%,rgba(95,113,100,0.32)_100%)]" />
      <div className="absolute inset-0 hidden lg:block bg-[linear-gradient(120deg,rgba(244,238,230,0.86)_0%,rgba(244,238,230,0.72)_42%,rgba(95,113,100,0.2)_100%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 sm:px-10 lg:px-16">
        <p className="w-fit rounded-full border border-[#5F7164]/25 bg-[#F4EEE6]/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#5F7164]">
          A covenant celebration before God
        </p>

        <div className="max-w-3xl space-y-6">
          <h1 className="font-display text-5xl leading-[1.04] tracking-tight text-[#5F7164] sm:text-6xl lg:text-7xl">
            Raymond <span className="text-[#99643C]">&</span> Neo
          </h1>

          <p className="max-w-2xl text-base leading-8 text-[#5F7164]/90 sm:text-lg">
            We are gathering with joy to celebrate a love story written by
            grace and sealed in covenant. Join us for worship, prayer, and
            thanksgiving as we begin this new chapter in Christ.
          </p>

          <p className="font-display text-xl italic text-[#99643C] sm:text-2xl">
            &quot;What God has joined together, let no one separate.&quot;
            <span className="ml-2 text-[#5F7164]">Mark 10:9</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href="#wedding-details"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#99643C] px-7 text-sm font-bold uppercase tracking-[0.08em] text-[#F4EEE6] transition-colors hover:bg-[#7F5232]"
          >
            Wedding Details
          </a>
          <a
            href="#rsvp"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#5F7164]/70 bg-[#F4EEE6]/65 px-7 text-sm font-bold uppercase tracking-[0.08em] text-[#5F7164] transition-colors hover:bg-[#B6C7C9]/40"
          >
            RSVP
          </a>
        </div>
      </div>
    </section>
  );
}
