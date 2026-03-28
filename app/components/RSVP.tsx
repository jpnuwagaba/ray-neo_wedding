export default function RSVP() {
  return (
    <section
      id="rsvp"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_85%_10%,rgba(182,199,201,0.26)_0%,rgba(182,199,201,0)_36%),linear-gradient(180deg,#f7efe6_0%,#efe6db_46%,#e6ddcf_100%)] py-20 sm:py-24"
      aria-labelledby="rsvp-title"
    >
      <div className="pointer-events-none absolute -left-16 top-8 h-52 w-52 rounded-full bg-[#D4A48A]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-56 w-56 rounded-full bg-[#5F7164]/16 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5F7164]">
            RSVP
          </p>
          <h2
            id="rsvp-title"
            className="mt-3 font-display text-4xl leading-tight text-[#5F7164] sm:text-5xl"
          >
            Kindly confirm your attendance.
          </h2>
          <p className="mt-4 text-base leading-8 text-[#6B5547] sm:text-lg">
            We are grateful to celebrate with you. Please complete this form so
            we can plan seating, meals, and transport details.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-3xl rounded-3xl border border-[#5F7164]/20 bg-[#F8F2EA]/92 p-6 shadow-[0_20px_44px_rgba(95,113,100,0.15)] sm:p-8">
          <form className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="guest-name"
                className="text-xs font-bold uppercase tracking-[0.1em] text-[#5F7164]"
              >
                Full Name
              </label>
              <input
                id="guest-name"
                name="guestName"
                type="text"
                required
                className="mt-2 h-12 w-full rounded-2xl border border-[#5F7164]/24 bg-[#F4EEE6] px-4 text-sm text-[#5F7164] outline-none transition focus:border-[#99643C] focus:ring-2 focus:ring-[#99643C]/20"
                placeholder="Enter your full name"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="contact"
                className="text-xs font-bold uppercase tracking-[0.1em] text-[#5F7164]"
              >
                Phone or Email
              </label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                className="mt-2 h-12 w-full rounded-2xl border border-[#5F7164]/24 bg-[#F4EEE6] px-4 text-sm text-[#5F7164] outline-none transition focus:border-[#99643C] focus:ring-2 focus:ring-[#99643C]/20"
                placeholder="e.g. +256... or name@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="attending-count"
                className="text-xs font-bold uppercase tracking-[0.1em] text-[#5F7164]"
              >
                Number Attending
              </label>
              <input
                id="attending-count"
                name="attendingCount"
                type="number"
                min={1}
                defaultValue={1}
                required
                className="mt-2 h-12 w-full rounded-2xl border border-[#5F7164]/24 bg-[#F4EEE6] px-4 text-sm text-[#5F7164] outline-none transition focus:border-[#99643C] focus:ring-2 focus:ring-[#99643C]/20"
              />
            </div>

            <div>
              <label
                htmlFor="meal-preference"
                className="text-xs font-bold uppercase tracking-[0.1em] text-[#5F7164]"
              >
                Meal Preference
              </label>
              <select
                id="meal-preference"
                name="mealPreference"
                className="mt-2 h-12 w-full rounded-2xl border border-[#5F7164]/24 bg-[#F4EEE6] px-4 text-sm text-[#5F7164] outline-none transition focus:border-[#99643C] focus:ring-2 focus:ring-[#99643C]/20"
                defaultValue="none"
              >
                <option value="none">No special preference</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="halal">Halal</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="special-notes"
                className="text-xs font-bold uppercase tracking-[0.1em] text-[#5F7164]"
              >
                Transport / Special Notes
              </label>
              <textarea
                id="special-notes"
                name="specialNotes"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-[#5F7164]/24 bg-[#F4EEE6] px-4 py-3 text-sm leading-7 text-[#5F7164] outline-none transition focus:border-[#99643C] focus:ring-2 focus:ring-[#99643C]/20"
                placeholder="Share transport needs, accessibility requests, or other notes"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-[#6B5547]">
                We will contact you to confirm your RSVP details.
              </p>
              <button
                type="submit"
                disabled
                aria-disabled="true"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#B5AAA0] px-7 text-sm font-bold uppercase tracking-[0.08em] text-[#F4EEE6]/90 cursor-not-allowed"
              >
                Submit RSVP
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
