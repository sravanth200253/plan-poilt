const STEPS = [
  {
    number: "01",
    title: "Tell AI your goals",
    description:
      "Share what you're working toward — today, this week, or this month — in your own words.",
  },
  {
    number: "02",
    title: "AI reads your mood & time",
    description:
      "PlanPilot factors in your energy, interests, and the hours you actually have free.",
  },
  {
    number: "03",
    title: "Get your perfect schedule",
    description:
      "A personalized plan appears instantly — ready to follow, adjust, or regenerate anytime.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-[#F0E6D3] py-24 dark:bg-[#1B1610]"
    >
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C8876A]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#8B6F47]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8876A]" />
          HOW IT WORKS
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight text-[#4A3728] dark:text-[#F0EBE3] md:text-5xl">
          Three steps to a perfectly planned day
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base text-[#6B5A4A] dark:text-[#D8CBBB]">
          No setup, no spreadsheets. Tell PlanPilot how you feel and what you
          want to get done — it handles the rest.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative">
              {idx < STEPS.length - 1 && (
                <div className="absolute top-[38px] -right-3 hidden w-6 border-t-2 border-dashed border-[#C8876A]/40 md:block" />
              )}
              <div className="h-full rounded-2xl bg-white p-8 text-left shadow-sm dark:bg-[#221C15]">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7F1E7] text-sm font-bold text-[#C8876A] dark:bg-white/10">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
