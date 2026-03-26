type ProgramIcon =
  | "arrival"
  | "church"
  | "photo"
  | "reception"
  | "dinner"
  | "cake"
  | "blessing";

type ProgramItem = {
  title: string;
  time: string;
  detail: string;
  icon: ProgramIcon;
};

const orderOfDay: ProgramItem[] = [
  {
    title: "Guest Arrival",
    time: "9:30 AM",
    detail:
      "Welcome hosts and ushers receive guests and guide seating before the service begins.",
    icon: "arrival",
  },
  {
    title: "Church Service",
    time: "10:00 AM",
    detail:
      "A worship-centered ceremony with vows, prayer, and blessing before family and friends.",
    icon: "church",
  },
  {
    title: "Photo Session",
    time: "12:15 PM",
    detail:
      "Couple portraits, family group photos, and selected guest photo moments.",
    icon: "photo",
  },
  {
    title: "Reception",
    time: "1:30 PM",
    detail:
      "Guests gather at the reception venue for welcome remarks and joyful celebration.",
    icon: "reception",
  },
  {
    title: "Dinner",
    time: "2:30 PM",
    detail:
      "A shared meal with fellowship, gratitude, and moments of thanksgiving.",
    icon: "dinner",
  },
  {
    title: "Cake Cutting",
    time: "4:00 PM",
    detail:
      "A celebratory cake-cutting moment and toasts from loved ones.",
    icon: "cake",
  },
  {
    title: "Blessing / Send-Off",
    time: "5:00 PM",
    detail:
      "Closing prayer, final blessing, and a warm send-off for the couple.",
    icon: "blessing",
  },
];

function TimelineIcon({ icon }: { icon: ProgramIcon }) {
  if (icon === "arrival") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="7" r="3.2" />
        <path d="M5.5 19.5c1.2-3 3.6-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
      </svg>
    );
  }

  if (icon === "church") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M4.5 20h15" />
        <path d="M7 20V9.8L12 6l5 3.8V20" />
        <path d="M12 3v4" />
        <path d="M10.5 4.5h3" />
      </svg>
    );
  }

  if (icon === "photo") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3.5" y="6.5" width="17" height="12" rx="2.5" />
        <circle cx="12" cy="12.5" r="2.6" />
        <path d="M8 6.5l1.2-2h5.6l1.2 2" />
      </svg>
    );
  }

  if (icon === "reception") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M5 20h14" />
        <path d="M7 20v-6.5L12 9l5 4.5V20" />
        <path d="M9.5 13.5h5" />
        <path d="M10 20v-3h4v3" />
      </svg>
    );
  }

  if (icon === "dinner") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M7 4v8" />
        <path d="M5 4v4a2 2 0 0 0 2 2 2 2 0 0 0 2-2V4" />
        <path d="M14.5 4v16" />
        <path d="M17.5 4c0 3-3 3-3 6h3" />
      </svg>
    );
  }

  if (icon === "cake") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M5 20h14" />
        <rect x="6.5" y="11" width="11" height="7" rx="1.6" />
        <path d="M12 8v3" />
        <path d="M10.8 7.1c0-1 2.4-1 2.4 0" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 4v14" />
      <path d="M6.5 12.5L12 18l5.5-5.5" />
      <path d="M6 4h12" />
    </svg>
  );
}

export default function Program() {
  return (
    <section
      id="program"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(182,199,201,0.25)_0%,rgba(182,199,201,0)_42%),linear-gradient(180deg,#f3eadf_0%,#ebe3d8_44%,#e3dbcf_100%)] py-20 sm:py-24"
      aria-labelledby="program-title"
    >
      <div className="pointer-events-none absolute -right-14 top-16 h-48 w-48 rounded-full bg-[#D4A48A]/22 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-8 h-52 w-52 rounded-full bg-[#5F7164]/18 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7164]">
            Program / Order of the Day
          </p>

          <h2
            id="program-title"
            className="font-display text-4xl leading-tight text-[#5F7164] sm:text-5xl"
          >
            A clear flow for the celebration day.
          </h2>

          <p className="text-base leading-8 text-[#6B5547] sm:text-lg">
            Follow the timeline so you can plan your arrival, movement, and
            celebration moments with ease.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-[#5F7164]/28 sm:left-6" />

          <ol className="space-y-6">
            {orderOfDay.map((item) => (
              <li key={item.title} className="relative pl-14 sm:pl-16">
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#99643C]/28 bg-[#F8F2EA] text-[#99643C] shadow-[0_8px_18px_rgba(153,100,60,0.14)] sm:h-12 sm:w-12">
                  <TimelineIcon icon={item.icon} />
                </div>

                <article className="rounded-3xl border border-[#5F7164]/18 bg-[#F8F2EA]/92 p-5 shadow-[0_14px_28px_rgba(95,113,100,0.12)] sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#99643C]">
                    {item.time}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-[#5F7164] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B5547] sm:text-base">
                    {item.detail}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
