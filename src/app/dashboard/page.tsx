import {
  IconMoodSmile,
  IconClock,
  IconTarget,
  IconBulb,
  IconSparkles,
  IconTrendingUp,
} from "@tabler/icons-react";

const STATS = [
  { icon: IconMoodSmile, label: "Mood", value: "Focused" },
  { icon: IconClock, label: "Time", value: "2PM–8PM" },
  { icon: IconTarget, label: "Goal", value: "Learn React" },
  { icon: IconBulb, label: "Interest", value: "Coding" },
];

const SCHEDULE = [
  { time: "8:00 AM", task: "Morning Walk" },
  { time: "9:00 AM", task: "React Learning" },
  { time: "11:00 AM", task: "College Assignment" },
  { time: "1:00 PM", task: "Lunch" },
  { time: "3:00 PM", task: "Build Portfolio" },
  { time: "6:00 PM", task: "Gym" },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#C8876A]/12 px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#8B6F47]">
            <IconSparkles size={10} />
            AI GENERATED
          </span>
          <h1 className="mt-1 text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            Good Morning, Alex 👋
          </h1>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-sm font-bold text-white shadow-[0_4px_14px_rgba(139,111,71,0.5)]">
          A
        </span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-[#4A3728]/6 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-white shadow-sm">
              <stat.icon size={18} />
            </div>
            <div className="mt-3 text-[10px] font-semibold uppercase tracking-wide text-[#8B6F47]">
              {stat.label}
            </div>
            <div className="truncate text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm lg:col-span-2 dark:border-white/5 dark:bg-white/[0.03]">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            AI Generated Schedule
          </div>

          <div className="mt-4 space-y-2.5">
            {SCHEDULE.map((item) => (
              <div
                key={item.time}
                className="flex items-center justify-between rounded-xl bg-[#F7F1E7] px-4 py-3 text-sm dark:bg-white/5"
              >
                <span className="flex items-center gap-2 font-medium text-[#8B6F47]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47]" />
                  {item.time}
                </span>
                <span className="font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#2B231A] to-[#1A140F] p-6 text-white shadow-[0_20px_45px_-12px_rgba(74,55,40,0.55)]">
          <div className="text-[10px] uppercase tracking-wide text-[#D8CBBB]">
            Productivity
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="text-3xl font-bold">92%</span>
            <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-400">
              <IconTrendingUp size={14} />
              12%
            </span>
          </div>
          <p className="mt-4 text-sm text-[#D8CBBB]">
            You&apos;re ahead of last week&apos;s pace. Keep the momentum
            going.
          </p>
        </div>
      </div>
    </div>
  );
}
