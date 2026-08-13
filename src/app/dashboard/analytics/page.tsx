import { IconTrendingUp, IconFlame, IconCircleCheck } from "@tabler/icons-react";

const WEEK = [
  { day: "Mon", score: 72 },
  { day: "Tue", score: 85 },
  { day: "Wed", score: 60 },
  { day: "Thu", score: 92 },
  { day: "Fri", score: 78 },
  { day: "Sat", score: 95 },
  { day: "Sun", score: 88 },
];

const MOODS = [
  { mood: "Focused", percent: 40 },
  { mood: "Relaxed", percent: 25 },
  { mood: "Energetic", percent: 20 },
  { mood: "Tired", percent: 15 },
];

const STATS = [
  { icon: IconTrendingUp, label: "This Week's Score", value: "88%" },
  { icon: IconCircleCheck, label: "Tasks Completed", value: "24 / 30" },
  { icon: IconFlame, label: "Current Streak", value: "5 days" },
];

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
        Analytics
      </h1>
      <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
        Track your progress over time and see where your focus is going.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
            <div className="text-lg font-bold text-[#4A3728] dark:text-[#F0EBE3]">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-2xl rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
        <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
          Productivity This Week
        </h2>
        <div className="mt-6 flex h-40 items-end justify-between gap-3">
          {WEEK.map((day) => (
            <div key={day.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-32 w-full items-end rounded-lg bg-[#F7F1E7] dark:bg-white/5">
                <div
                  className="w-full rounded-lg bg-gradient-to-t from-[#8B6F47] to-[#C8876A]"
                  style={{ height: `${day.score}%` }}
                />
              </div>
              <span className="text-xs font-medium text-[#8B6F47]">{day.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 max-w-2xl rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
        <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
          Mood Breakdown
        </h2>
        <div className="mt-5 space-y-3">
          {MOODS.map((item) => (
            <div key={item.mood}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-[#4A3728] dark:text-[#F0EBE3]">
                  {item.mood}
                </span>
                <span className="text-[#8B6F47]">{item.percent}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#F7F1E7] dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#C8876A] to-[#8B6F47]"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
