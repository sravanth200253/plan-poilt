"use client";
import { useState } from "react";
import { IconFlame, IconPlus } from "@tabler/icons-react";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

const INITIAL_HABITS = [
  { id: 1, name: "Morning Walk", streak: 12, week: [true, true, true, true, true, false, false] },
  { id: 2, name: "Drink Water", streak: 30, week: [true, true, true, true, true, true, true] },
  { id: 3, name: "Read 20 mins", streak: 4, week: [true, false, true, true, false, false, false] },
];

export default function HabitsPage() {
  const [habits, setHabits] = useState(INITIAL_HABITS);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");

  const toggleToday = (id: number) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const week = [...h.week];
        const last = week.length - 1;
        week[last] = !week[last];
        return { ...h, week, streak: week[last] ? h.streak + 1 : Math.max(0, h.streak - 1) };
      })
    );
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setHabits((prev) => [
      ...prev,
      { id: Date.now(), name, streak: 0, week: Array(7).fill(false) },
    ]);
    setName("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            Habits
          </h1>
          <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            Small daily actions PlanPilot weaves into your schedule automatically.
          </p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-2 rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-5 py-2.5 text-sm font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition hover:-translate-y-0.5"
        >
          <IconPlus size={16} />
          Add Habit
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAdd}
          className="mt-6 flex max-w-xl gap-3 rounded-2xl border border-[#4A3728]/6 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stretch for 5 minutes"
            className="flex-1 rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] placeholder:text-[#8B6F47]/50 focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
          />
          <button
            type="submit"
            className="rounded-xl bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-5 text-sm font-bold text-white"
          >
            Save
          </button>
        </form>
      )}

      <div className="mt-6 max-w-xl space-y-3">
        {habits.map((habit) => (
          <div
            key={habit.id}
            className="rounded-2xl border border-[#4A3728]/6 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#4A3728] dark:text-[#F0EBE3]">
                {habit.name}
              </span>
              <span className="flex items-center gap-1 text-xs font-semibold text-[#8B6F47]">
                <IconFlame size={14} />
                {habit.streak} day streak
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              {habit.week.map((done, idx) => {
                const isToday = idx === habit.week.length - 1;
                return (
                  <button
                    key={idx}
                    onClick={() => isToday && toggleToday(habit.id)}
                    className={
                      done
                        ? "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-xs font-bold text-white"
                        : "flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#4A3728]/15 text-xs font-bold text-[#4A3728]/40 dark:border-white/15 dark:text-white/30"
                    }
                  >
                    {DAYS[idx]}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
