const CAPABILITIES = [
  {
    emoji: "🤖",
    title: "AI Schedule Generator",
    description:
      "Creates personalized plans instantly, tuned to how your day is actually shaping up.",
  },
  {
    emoji: "😊",
    title: "Mood Based Planning",
    description:
      "Adjusts your schedule based on your energy — lighter days when you need them, focused sprints when you don't.",
  },
  {
    emoji: "🎯",
    title: "Goal Planning",
    description:
      "Breaks large goals into daily tasks you can actually finish before dinner.",
  },
  {
    emoji: "📅",
    title: "Daily • Weekly • Monthly",
    description:
      "Move fluidly between planning modes depending on how far ahead you want to see.",
  },
  {
    emoji: "🧠",
    title: "Smart Suggestions",
    description:
      "AI reorganizes your day automatically the moment something changes.",
  },
  {
    emoji: "📈",
    title: "Productivity Analytics",
    description:
      "Track your progress over time and see exactly where your focus is going.",
  },
];

export function Capabilities() {
  return (
    <section id="features" className="scroll-mt-24 bg-[#F7F1E7] py-24 dark:bg-[#171310]">
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C8876A]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#8B6F47]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8876A]" />
          CAPABILITIES
        </span>

        <h2 className="mx-auto mt-6 max-w-xl text-4xl font-bold tracking-tight text-[#4A3728] dark:text-[#F0EBE3] md:text-5xl">
          Everything your day needs, nothing it doesn&apos;t
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base text-[#6B5A4A] dark:text-[#D8CBBB]">
          Every feature exists to answer one question: what should you do next?
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 text-left shadow-sm dark:bg-[#221C15]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#E3A876] to-[#B57A4E] text-2xl shadow-sm">
                {item.emoji}
              </div>
              <h3 className="mt-4 text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
