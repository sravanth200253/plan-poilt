"use client";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";

const TODAY_TASKS = [
  { time: "8:00 AM", task: "Morning Walk", done: true },
  { time: "9:00 AM", task: "React Learning", done: true },
  { time: "11:00 AM", task: "College Assignment", done: false },
  { time: "1:00 PM", task: "Lunch", done: true },
  { time: "3:00 PM", task: "Build Portfolio", done: false },
  { time: "6:00 PM", task: "Gym", done: false },
];

// "full" = all tasks done, "partial" = some done, "missed" = none done
const WEEK_ADHERENCE = [
  { day: "Mon", status: "full" },
  { day: "Tue", status: "full" },
  { day: "Wed", status: "partial" },
  { day: "Thu", status: "full" },
  { day: "Fri", status: "missed" },
  { day: "Sat", status: "partial" },
  { day: "Sun", status: "full" },
];

const STATUS_STYLES = {
  full: "bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-white",
  partial: "bg-[#C8876A]/30 text-[#8B6F47]",
  missed: "border-2 border-[#4A3728]/15 text-[#4A3728]/40 dark:border-white/15 dark:text-white/30",
};

const CHECK_INS = [
  { label: "Great", emoji: "😄" },
  { label: "Okay", emoji: "😐" },
  { label: "Rough", emoji: "😔" },
];

export default function TrackerPage() {
  const [checkIn, setCheckIn] = useState<string | null>(null);

  const completed = TODAY_TASKS.filter((t) => t.done).length;
  const total = TODAY_TASKS.length;
  const percent = Math.round((completed / total) * 100);
  const dashOffset = 100 - percent;

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
        Plan Tracker
      </h1>
      <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
        See how closely you&apos;re following the plan PlanPilot built for you.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="flex items-center gap-6 rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <svg width="96" height="96" viewBox="0 0 36 36" className="shrink-0 -rotate-90">
            <path
              d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
              fill="none"
              stroke="#F7F1E7"
              strokeWidth="3"
            />
            <path
              d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
              fill="none"
              stroke="#C8876A"
              strokeWidth="3"
              strokeDasharray="100"
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          </svg>
          <div>
            <div className="text-3xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
              {percent}%
            </div>
            <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
              {completed} of {total} planned tasks done today
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <h2 className="text-sm font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            How did today go?
          </h2>
          <div className="mt-4 flex gap-3">
            {CHECK_INS.map((option) => (
              <button
                key={option.label}
                onClick={() => setCheckIn(option.label)}
                className={
                  checkIn === option.label
                    ? "flex flex-1 flex-col items-center gap-1 rounded-xl bg-gradient-to-b from-[#C8876A] to-[#8B6F47] py-3 text-sm font-semibold text-white"
                    : "flex flex-1 flex-col items-center gap-1 rounded-xl border border-[#4A3728]/15 py-3 text-sm font-medium text-[#4A3728] transition hover:bg-[#F7F1E7] dark:border-white/15 dark:text-[#F0EBE3]"
                }
              >
                <span className="text-xl">{option.emoji}</span>
                {option.label}
              </button>
            ))}
          </div>
          {checkIn && (
            <p className="mt-3 text-xs text-[#8B6F47]">
              Thanks — logged as &quot;{checkIn}&quot;.
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 max-w-2xl rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
        <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
          This Week&apos;s Adherence
        </h2>
        <div className="mt-4 flex gap-3">
          {WEEK_ADHERENCE.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${STATUS_STYLES[d.status as keyof typeof STATUS_STYLES]}`}
              >
                {d.status === "full" && <IconCheck size={16} />}
              </div>
              <span className="text-xs font-medium text-[#8B6F47]">{d.day}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47]" />
            Fully followed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C8876A]/30" />
            Partially followed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full border-2 border-[#4A3728]/15" />
            Missed
          </span>
        </div>
      </div>

      <div className="mt-6 max-w-2xl space-y-2.5">
        {TODAY_TASKS.map((item) => (
          <div
            key={item.time}
            className="flex items-center justify-between rounded-xl border border-[#4A3728]/6 bg-white px-4 py-3 text-sm shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
          >
            <span className="flex items-center gap-2 font-medium text-[#8B6F47]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47]" />
              {item.time}
            </span>
            <span
              className={
                item.done
                  ? "font-semibold text-[#4A3728]/50 line-through dark:text-[#F0EBE3]/40"
                  : "font-semibold text-[#4A3728] dark:text-[#F0EBE3]"
              }
            >
              {item.task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
