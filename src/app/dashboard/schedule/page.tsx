"use client";
import { useState } from "react";
import { IconCheck, IconTrash, IconRefresh } from "@tabler/icons-react";

const VIEWS = ["Daily", "Weekly", "Monthly"];

const INITIAL_TASKS = [
  { time: "8:00 AM", task: "Morning Walk", done: true },
  { time: "9:00 AM", task: "React Learning", done: true },
  { time: "11:00 AM", task: "College Assignment", done: false },
  { time: "1:00 PM", task: "Lunch", done: false },
  { time: "3:00 PM", task: "Build Portfolio", done: false },
  { time: "6:00 PM", task: "Gym", done: false },
];

export default function SchedulePage() {
  const [view, setView] = useState("Daily");
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const toggleDone = (time: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.time === time ? { ...t, done: !t.done } : t))
    );
  };

  const removeTask = (time: string) => {
    setTasks((prev) => prev.filter((t) => t.time !== time));
  };

  const regenerate = () => {
    setTasks(INITIAL_TASKS.map((t) => ({ ...t, done: false })));
  };

  const completedCount = tasks.filter((t) => t.done).length;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            Your Schedule
          </h1>
          <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            {completedCount} of {tasks.length} tasks done today.
          </p>
        </div>
        <button
          onClick={regenerate}
          className="flex items-center gap-2 rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-5 py-2.5 text-sm font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition hover:-translate-y-0.5"
        >
          <IconRefresh size={16} />
          Regenerate Plan
        </button>
      </div>

      <div className="mt-6 inline-flex rounded-full border border-[#4A3728]/15 bg-white p-1 dark:border-white/15 dark:bg-white/5">
        {VIEWS.map((option) => (
          <button
            key={option}
            onClick={() => setView(option)}
            className={
              view === option
                ? "rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-4 py-1.5 text-sm font-semibold text-white"
                : "rounded-full px-4 py-1.5 text-sm font-medium text-[#4A3728] dark:text-[#F0EBE3]"
            }
          >
            {option}
          </button>
        ))}
      </div>

      {view === "Daily" ? (
        <div className="mt-6 max-w-xl space-y-2.5">
          {tasks.map((item) => (
            <div
              key={item.time}
              className="flex items-center justify-between rounded-xl border border-[#4A3728]/6 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleDone(item.time)}
                  className={
                    item.done
                      ? "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-white"
                      : "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#4A3728]/20 dark:border-white/20"
                  }
                >
                  {item.done && <IconCheck size={14} />}
                </button>
                <div>
                  <div className="text-xs font-semibold text-[#8B6F47]">
                    {item.time}
                  </div>
                  <div
                    className={
                      item.done
                        ? "text-sm font-semibold text-[#4A3728]/50 line-through dark:text-[#F0EBE3]/40"
                        : "text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]"
                    }
                  >
                    {item.task}
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeTask(item.time)}
                className="text-[#8B6F47]/60 transition hover:text-[#8B6F47]"
              >
                <IconTrash size={16} />
              </button>
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="rounded-xl border-2 border-dashed border-[#C8876A]/30 bg-white/40 p-6 text-center text-sm text-[#8B6F47] dark:bg-white/5">
              Nothing left on today&apos;s schedule.
            </p>
          )}
        </div>
      ) : (
        <div className="mt-6 max-w-xl rounded-2xl border-2 border-dashed border-[#C8876A]/30 bg-white/40 p-10 text-center dark:bg-white/5">
          <p className="text-sm font-medium text-[#8B6F47]">
            {view} view is coming soon
          </p>
          <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            For now, plan day by day using the Daily view.
          </p>
        </div>
      )}
    </div>
  );
}
