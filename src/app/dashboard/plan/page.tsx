"use client";
import { useState } from "react";
import { IconSparkles } from "@tabler/icons-react";

const MOODS = ["Focused", "Relaxed", "Energetic", "Tired"];

const SAMPLE_PLAN = [
  { time: "8:00 AM", task: "Morning Walk" },
  { time: "9:00 AM", task: "React Learning" },
  { time: "11:00 AM", task: "College Assignment" },
  { time: "1:00 PM", task: "Lunch" },
  { time: "3:00 PM", task: "Build Portfolio" },
  { time: "6:00 PM", task: "Gym" },
];

export default function MakePlanPage() {
  const [mood, setMood] = useState("Focused");
  const [goal, setGoal] = useState("");
  const [interest, setInterest] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerated(true);
  };

  return (
    <div>
      <span className="inline-flex items-center gap-1 rounded-full bg-[#C8876A]/12 px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#8B6F47]">
        <IconSparkles size={10} />
        AI PLANNING
      </span>
      <h1 className="mt-1 text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
        Make Your Plan
      </h1>
      <p className="mt-2 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
        Tell PlanPilot your mood, time, and goals — it builds the rest of your
        day around them.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-xl space-y-5 rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
      >
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
            Mood
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {MOODS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMood(option)}
                className={
                  mood === option
                    ? "rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-4 py-1.5 text-sm font-semibold text-white"
                    : "rounded-full border border-[#4A3728]/15 px-4 py-1.5 text-sm font-medium text-[#4A3728] transition hover:bg-[#F7F1E7] dark:border-white/15 dark:text-[#F0EBE3]"
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
              Available From
            </label>
            <input
              type="time"
              defaultValue="14:00"
              className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
              Available Until
            </label>
            <input
              type="time"
              defaultValue="20:00"
              className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
            Main Goal
          </label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="e.g. Learn React"
            className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] placeholder:text-[#8B6F47]/50 focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
            Interest
          </label>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="e.g. Coding"
            className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] placeholder:text-[#8B6F47]/50 focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
          />
        </div>

        <button
          type="submit"
          className="flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] text-sm font-bold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition hover:-translate-y-0.5"
        >
          Generate My AI Plan
        </button>
      </form>

      {generated && (
        <div className="mt-6 max-w-xl rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Your Generated Schedule
          </div>
          <div className="mt-4 space-y-2.5">
            {SAMPLE_PLAN.map((item) => (
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
      )}
    </div>
  );
}
