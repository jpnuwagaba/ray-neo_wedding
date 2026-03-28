"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  heightClass: string;
};

const galleryImages: GalleryImage[] = [
  {
    src: "/assets/2g5a3370.jpg.jpeg",
    alt: "Raymond and Neo standing together in a pre-wedding portrait.",
    heightClass: "h-[18rem] sm:h-[21rem] lg:h-[24rem]",
  },
  {
    src: "/assets/2g5a3378.jpg.jpeg",
    alt: "Close portrait of the couple sharing a candid smile.",
    heightClass: "h-[16rem] sm:h-[19rem] lg:h-[22rem]",
  },
  {
    src: "/assets/2g5a3398.jpg.jpeg",
    alt: "The couple walking together during their engagement shoot.",
    heightClass: "h-[20rem] sm:h-[23rem] lg:h-[27rem]",
  },
  {
    src: "/assets/2g5a3441.jpg.jpeg",
    alt: "Raymond and Neo sharing a joyful laugh outdoors.",
    heightClass: "h-[17rem] sm:h-[20rem] lg:h-[23rem]",
  },
  {
    src: "/assets/2g5a3467.jpg.jpeg",
    alt: "Portrait of the couple during golden light.",
    heightClass: "h-[18rem] sm:h-[22rem] lg:h-[25rem]",
  },
  {
    src: "/assets/2g5a3480.jpg.jpeg",
    alt: "Engagement session portrait of the couple.",
    heightClass: "h-[16rem] sm:h-[19rem] lg:h-[22rem]",
  },
  {
    src: "/assets/2g5a3501.jpg.jpeg",
    alt: "Couple portrait with elegant styling and warm tones.",
    heightClass: "h-[19rem] sm:h-[23rem] lg:h-[26rem]",
  },
  {
    src: "/assets/2g5a3523.jpg.jpeg",
    alt: "Candid interaction between Raymond and Neo.",
    heightClass: "h-[15rem] sm:h-[18rem] lg:h-[20rem]",
  },
  {
    src: "/assets/2g5a3552.jpg.jpeg",
    alt: "Final engagement highlight portrait of the couple.",
    heightClass: "h-[18rem] sm:h-[21rem] lg:h-[24rem]",
  },
  {
    src: "/assets/2g5a3437.jpg.jpeg",
    alt: "Elegant portrait of the couple in an outdoor scene.",
    heightClass: "h-[16rem] sm:h-[20rem] lg:h-[23rem]",
  },
  {
    src: "/assets/2g5a3472.jpg.jpeg",
    alt: "Wedding portrait with soft natural light.",
    heightClass: "h-[19rem] sm:h-[22rem] lg:h-[25rem]",
  },
  {
    src: "/assets/2g5a3548.jpg.jpeg",
    alt: "Close-up portrait of the couple sharing a quiet moment.",
    heightClass: "h-[15rem] sm:h-[18rem] lg:h-[21rem]",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openViewer = (index: number) => {
    setActiveIndex(index);
  };

  const closeViewer = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) {
        return 0;
      }
      return (current + 1) % galleryImages.length;
    });
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) {
        return galleryImages.length - 1;
      }
      return current === 0 ? galleryImages.length - 1 : current - 1;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
        return;
      }

      if (event.key === "ArrowRight") {
        showNext();
        return;
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeViewer, showNext, showPrevious]);

  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#efe5da_0%,#f6eee5_48%,#fdf6ef_100%)] py-8 sm:py-12 lg:py-16"
        aria-label="Gallery images"
      >
        <div className="pointer-events-none absolute -left-14 top-8 h-48 w-48 rounded-full bg-[#D4A48A]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-14 bottom-10 h-56 w-56 rounded-full bg-[#B6C7C9]/18 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-10">
          <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 lg:columns-3 xl:columns-4">
            {galleryImages.map((image, index) => (
              <figure key={image.src} className="mb-3 break-inside-avoid sm:mb-4">
                <button
                  type="button"
                  onClick={() => openViewer(index)}
                  className={`group relative block w-full overflow-hidden rounded-2xl border border-[#5F7164]/16 bg-[#F8F2EA]/90 shadow-[0_14px_28px_rgba(95,113,100,0.12)] ${image.heightClass} cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99643C]/70`}
                  aria-label={`Open image ${index + 1} of ${galleryImages.length}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.16)_100%)]" />
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[120] bg-[rgba(16,13,10,0.86)] p-3 backdrop-blur-[2px] sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={closeViewer}
        >
          <div
            className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeViewer}
              className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F4EEE6]/45 bg-[#241C16]/50 text-2xl leading-none text-[#F8F2EA] transition-colors hover:bg-[#241C16]/80 sm:right-2 sm:top-2"
              aria-label="Close viewer"
            >
              X
            </button>

            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-0 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#F4EEE6]/45 bg-[#241C16]/50 text-2xl leading-none text-[#F8F2EA] transition-colors hover:bg-[#241C16]/80 sm:left-2 sm:h-11 sm:w-11"
              aria-label="Previous image"
            >
              {"<"}
            </button>

            <div className="relative h-[62vh] min-h-[18rem] w-full max-w-5xl sm:h-[74vh] lg:h-[82vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="(min-width: 1280px) 80vw, (min-width: 768px) 90vw, 100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#F4EEE6]/45 bg-[#241C16]/50 text-2xl leading-none text-[#F8F2EA] transition-colors hover:bg-[#241C16]/80 sm:right-2 sm:h-11 sm:w-11"
              aria-label="Next image"
            >
              {">"}
            </button>

            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-[#F4EEE6]/30 bg-[#241C16]/55 px-3 py-1 text-xs font-bold tracking-[0.12em] text-[#F8F2EA] sm:bottom-2">
              {(activeIndex ?? 0) + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

