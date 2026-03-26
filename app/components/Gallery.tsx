import Image from "next/image";

type MomentCard = {
  src: string;
  alt: string;
  tag: "Pre-Wedding Shoot" | "Candid Memory" | "Engagement Highlight";
  caption: string;
  heightClass: string;
};

const galleryMoments: MomentCard[] = [
  {
    src: "/assets/2g5a3370.jpg.jpeg",
    alt: "Raymond and Neo standing together in a pre-wedding portrait.",
    tag: "Pre-Wedding Shoot",
    caption: "A quiet frame of grace before the wedding day.",
    heightClass: "h-[24rem]",
  },
  {
    src: "/assets/2g5a3378.jpg.jpeg",
    alt: "Close portrait of the couple sharing a candid smile.",
    tag: "Candid Memory",
    caption: "Joy that feels effortless and genuine.",
    heightClass: "h-[19rem]",
  },
  {
    src: "/assets/2g5a3398.jpg.jpeg",
    alt: "The couple walking together during their engagement shoot.",
    tag: "Engagement Highlight",
    caption: "A promise carried forward step by step.",
    heightClass: "h-[27rem]",
  },
  {
    src: "/assets/2g5a3441.jpg.jpeg",
    alt: "Raymond and Neo sharing a joyful laugh outdoors.",
    tag: "Candid Memory",
    caption: "Moments of laughter that became memories.",
    heightClass: "h-[21rem]",
  },
  {
    src: "/assets/2g5a3467.jpg.jpeg",
    alt: "Portrait of the couple during golden light.",
    tag: "Pre-Wedding Shoot",
    caption: "Golden-hour stillness and thanksgiving.",
    heightClass: "h-[25rem]",
  },
  {
    src: "/assets/2g5a3480.jpg.jpeg",
    alt: "Engagement session portrait of the couple.",
    tag: "Engagement Highlight",
    caption: "A chapter of yes before covenant vows.",
    heightClass: "h-[20rem]",
  },
  {
    src: "/assets/2g5a3501.jpg.jpeg",
    alt: "Couple portrait with elegant styling and warm tones.",
    tag: "Pre-Wedding Shoot",
    caption: "Beauty, reverence, and anticipation.",
    heightClass: "h-[26rem]",
  },
  {
    src: "/assets/2g5a3523.jpg.jpeg",
    alt: "Candid interaction between Raymond and Neo.",
    tag: "Candid Memory",
    caption: "Simple moments that say so much.",
    heightClass: "h-[18rem]",
  },
  {
    src: "/assets/2g5a3552.jpg.jpeg",
    alt: "Final engagement highlight portrait of the couple.",
    tag: "Engagement Highlight",
    caption: "A love story captured in one frame.",
    heightClass: "h-[24rem]",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#efe5da_0%,#f6eee5_48%,#fdf6ef_100%)] py-20 sm:py-24"
      aria-labelledby="gallery-title"
    >
      <div className="pointer-events-none absolute -left-14 top-8 h-48 w-48 rounded-full bg-[#D4A48A]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-14 bottom-10 h-56 w-56 rounded-full bg-[#B6C7C9]/18 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7164]">
            Gallery / Couple Moments
          </p>

          <h2
            id="gallery-title"
            className="font-display text-4xl leading-tight text-[#5F7164] sm:text-5xl"
          >
            A visual story of joy, covenant, and celebration.
          </h2>

          <p className="text-base leading-8 text-[#6B5547] sm:text-lg">
            Pre-wedding portraits, candid memories, and engagement highlights
            gathered in one place.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryMoments.map((moment) => (
            <article
              key={moment.src}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-[#5F7164]/18 bg-[#F8F2EA]/95 shadow-[0_16px_34px_rgba(95,113,100,0.14)]"
            >
              <div className={`relative ${moment.heightClass}`}>
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_20%,rgba(33,28,23,0.68)_100%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="inline-flex rounded-full border border-[#F4EEE6]/35 bg-[#F4EEE6]/18 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F8F2EA]">
                    {moment.tag}
                  </p>
                  <p className="mt-3 font-display text-xl leading-tight text-[#F8F2EA]">
                    {moment.caption}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
