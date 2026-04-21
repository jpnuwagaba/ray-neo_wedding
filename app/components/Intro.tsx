"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STORY_DURATION_MS = 6500;

const introPhotos = [
  {
    src: "/assets/IMG_1.jpeg",
    alt: "Raymond and Neo sharing a tender moment on a stone walkway.",
  },
  {
    src: "/assets/IMG_2.jpeg",
    alt: "The couple walking together, hand in hand, before their wedding.",
  },
  {
    src: "/assets/IMG_3.jpeg",
    alt: "Close portrait of Raymond and Neo embracing with calm joy.",
  },
] as const;

const storySlides = [
  {
    id: "commitment-quote",
    type: "quote",
  },
  {
    id: "card-covenant",
    type: "card",
    content:
      "God created marriage as a covenant of love, faithfulness, and shared purpose.",
    scriptures: [
      "Genesis 2:18-24",
      "Malachi 2:14-15",
      "Ecclesiastes 4:9-12",
      "Proverbs 18:22",
      "Mark 10:6-9",
      "Hebrews 13:4",
    ],
  },
  {
    id: "card-sin",
    type: "card",
    content:
      "Sin distorts our hearts, and relationships can drift into self-centeredness and hurt.",
    scriptures: [
      "Genesis 3:16-19",
      "Romans 3:23",
      "Jeremiah 17:9",
      "James 4:1-2",
      "Galatians 5:19-21",
    ],
  },
  {
    id: "card-in-christ",
    type: "card",
    content:
      "In Christ, we are forgiven and formed into a sacrificial, faithful, and God-centered love.",
    scriptures: [
      "Ephesians 5:25-27",
      "1 John 4:7-12",
      "Colossians 3:12-14",
      "Romans 5:8",
      "John 13:34-35",
      "Philippians 2:3-5",
    ],
  },
  {
    id: "card-redemption",
    type: "card",
    content:
      "Marriage points beyond itself to the greater love story of God redeeming His people.",
    scriptures: [
      "Ephesians 5:31-32",
      "Revelation 19:6-9",
      "Isaiah 62:5",
      "Hosea 2:19-20",
      "John 3:29",
    ],
  },
] as const;

export default function Intro() {
  const storyRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const previousTimestampRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const resetProgress = () => {
    setProgress(0);
    previousTimestampRef.current = null;
  };

  const goToIndex = (index: number) => {
    const totalSlides = storySlides.length;
    const safeIndex = (index + totalSlides) % totalSlides;
    setActiveIndex(safeIndex);
    resetProgress();
  };

  useEffect(() => {
    const storyElement = storyRef.current;

    if (!storyElement || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry) {
          return;
        }

        if (entry.intersectionRatio >= 0.5) {
          setHasStarted(true);
          setIsPlaying(true);
          observer.disconnect();
        }
      },
      {
        threshold: [0.5],
      },
    );

    observer.observe(storyElement);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || !isPlaying) {
      return;
    }

    const step = (timestamp: number) => {
      if (previousTimestampRef.current === null) {
        previousTimestampRef.current = timestamp;
      }

      const elapsed = timestamp - previousTimestampRef.current;
      previousTimestampRef.current = timestamp;

      setProgress((current) => {
        const next = current + elapsed / STORY_DURATION_MS;

        if (next < 1) {
          return next;
        }

        setActiveIndex((index) => (index + 1) % storySlides.length);
        previousTimestampRef.current = null;
        return 0;
      });

      frameRef.current = window.requestAnimationFrame(step);
    };

    frameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      previousTimestampRef.current = null;
    };
  }, [hasStarted, isPlaying]);

  return (
    <section
      id="intro"
      aria-labelledby="intro-quote"
      className="relative isolate overflow-hidden p-1 sm:p-2"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: "url('/assets/2g5a3446.jpg.jpeg')",
          opacity: 0.38,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(182,199,201,0.86)_0%,rgba(201,179,158,0.86)_100%)]" />

      <div className="grid grid-cols-3 gap-1 sm:gap-2">
        {introPhotos.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/5] min-h-48">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 33vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div ref={storyRef} className="relative">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto w-full max-w-6xl px-6 pt-5 sm:px-10 sm:pt-7 lg:px-16">
          <div className="space-y-3">
            <div className="grid flex-1 grid-cols-5 gap-2">
              {storySlides.map((slide, index) => {
                const segmentProgress =
                  index < activeIndex ? 1 : index === activeIndex ? progress : 0;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToIndex(index)}
                    className={`relative h-1.5 overflow-hidden rounded-full bg-[#F4EEE6]/35 transition-opacity cursor-pointer ${
                      isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`Go to story ${index + 1} of ${storySlides.length}`}
                  >
                    <span
                      className="absolute inset-y-0 left-0 rounded-full bg-[#F8F2EA]"
                      style={{
                        width: `${Math.min(100, Math.max(0, segmentProgress * 100))}%`,
                      }}
                    />
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  if (!hasStarted) {
                    return;
                  }
                  setIsPlaying((current) => !current);
                }}
                disabled={!hasStarted}
                aria-pressed={isPlaying}
                aria-label={isPlaying ? "Pause stories" : "Play stories"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F4EEE6]/45 bg-[#F4EEE6]/20 text-[#F8F2EA] transition-colors enabled:hover:bg-[#F4EEE6]/35 disabled:cursor-not-allowed disabled:opacity-55"
              >
                {isPlaying ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M8 5.5v13l10-6.5z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-screen min-h-[100svh] w-full max-w-6xl px-6 pb-20 pt-20 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16 lg:pb-36 lg:pt-32">
          <div className="relative h-full w-full">
            {storySlides.map((slide, index) => {
              const isCurrentSlide = index === activeIndex;

              return (
                <article
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isCurrentSlide
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={!isCurrentSlide}
                >
                  {slide.type === "quote" ? (
                    <div className="flex h-full items-center">
                      <div className="max-w-4xl">
                        <p className="mb-6 w-fit rounded-full border border-[#5F7164]/25 bg-[#F4EEE6]/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#5F7164]">
                          The Gospel in Marriage
                        </p>

                        <h2
                          id="intro-quote"
                          className="font-display text-4xl leading-[1.2] text-[#F8F2EA] sm:text-5xl lg:text-7xl"
                        >
                          Commitment is a <span className="italic">sacred</span>{" "}
                          testament to God&apos;s enduring love.
                        </h2>
                      </div>
                    </div>
                  ) : (
                    <div className="flex h-full items-center">
                      <div className="max-w-4xl rounded-3xl border border-[#d9cdbf] bg-[#F8F2EA]/90 p-6 shadow-[0_14px_30px_rgba(95,113,100,0.12)] sm:p-10">
                        <p className="text-2xl leading-[1.5] text-[#6B5547] sm:text-4xl">
                          {slide.content}
                        </p>

                        <div className="mt-8 border-t border-[#d9cdbf] pt-5">
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5F7164]">
                            Key Scriptures
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2.5">
                            {slide.scriptures.map((scripture) => (
                              <span
                                key={scripture}
                                className="inline-flex w-fit rounded-full border border-[#5F7164]/25 bg-[#F4EEE6]/70 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#5F7164]"
                              >
                                {scripture}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


