const TRADITIONAL = [
  "You fill in every block yourself",
  "No sense of your mood or energy",
  "Static — doesn't adapt when plans change",
  "Goals stay disconnected from daily tasks",
  "No feedback on how your time is spent",
];

const PLANPILOT = [
  "Generates your full day in seconds",
  "Reads your mood, interests, and time",
  "Reorganizes itself the moment life changes",
  "Breaks goals into daily, doable steps",
  "Shows a productivity score you can track",
];

export function WhyPlanPilot() {
  return (
    <section className="bg-[#F7F1E7] py-24 dark:bg-[#171310]">
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C8876A]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#8B6F47]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8876A]" />
          WHY PLANPILOT
        </span>

        <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold tracking-tight text-[#4A3728] dark:text-[#F0EBE3] md:text-5xl">
          Planners make you plan.
          <br />
          PlanPilot plans for you.
        </h2>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#FBF6EC] p-8 text-left dark:bg-white/5">
            <h3 className="text-lg font-bold text-[#4A3728] dark:text-[#F0EBE3]">
              Traditional Planner
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              {TRADITIONAL.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#6B5A4A] dark:text-[#D8CBBB]">
                  <span className="mt-0.5 text-[#4A3728]/60">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute top-1/2 left-1/2 z-20 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-sm font-bold text-white shadow-[0_8px_20px_rgba(139,111,71,0.5)] md:flex"
          >
            VS
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#2B231A] to-[#1A140F] p-8 text-left text-white shadow-[0_20px_50px_-15px_rgba(74,55,40,0.5)]">
            <h3 className="text-lg font-bold">PlanPilot AI</h3>
            <ul className="mt-6 space-y-4 text-sm">
              {PLANPILOT.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#F0EBE3]">
                  <span className="mt-0.5 text-[#C8876A]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
