import Image from "next/image";

export default function OurPrayer() {
  return (
    <section
      id="our-prayer"
      aria-labelledby="our-prayer-title"
      className="overflow-hidden bg-[#F5F2EE] pt-20 sm:pt-24 pb-0 lg:pb-20"
    >
      <div className="grid min-h-[72vh] grid-cols-1 lg:grid-cols-[1.55fr_1fr]">
        <div className="relative flex items-center px-6 py-20 sm:px-10 lg:px-16">
          <p className="pointer-events-none absolute left-8 top-12 font-display text-[8rem] leading-none text-[#EDE8E1] sm:left-14 sm:text-[11rem] lg:left-20 lg:text-[14rem]">
            &apos;&apos;
          </p>

          <div className="relative z-10 max-w-3xl space-y-6 sm:space-y-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7164]">
            sam alberry
          </p>

            <h2
              id="our-prayer-title"
              className="font-display text-4xl leading-[1.14] text-[#5F7164] sm:text-5xl lg:text-6xl"
            >
              And so, marriage shows us the shape of the gospel.
            </h2>

            <p className="max-w-2xl text-base leading-8 text-[#6B5547] sm:text-xl sm:leading-9">
              We pray and trust God ours too will.
            </p>
          </div>
        </div>

        <div className="relative aspect-square min-h-[22rem] lg:min-h-full lg:mr-20">
          <Image
            src="/assets/2g5a3382.jpg.jpeg"
            alt="Overhead wedding portrait of the couple in a serene outdoor setting."
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover lg:rounded-full lg:rounded-tr-none grayscale border-[#5F7164]/18 border-2"
          />
        </div>
      </div>
    </section>
  );
}
