"use client";
import { useState } from "react";
import Link from "next/link";
import { IconPlus, IconArrowRight, IconLock } from "@tabler/icons-react";

const PLAN_TIER = "free";
const FREE_GOAL_LIMIT = 1;

const INITIAL_GOALS = [
  { id: 1, title: "Learn React", targetDate: "Sep 30, 2026", progress: 65 },
  { id: 2, title: "Read 12 Books This Year", targetDate: "Dec 31, 2026", progress: 30 },
  { id: 3, title: "Get Fit", targetDate: "Nov 15, 2026", progress: 80 },
];

export default function GoalsPage() {
  const [goals, setGoals] = useState(INITIAL_GOALS);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const atLimit = PLAN_TIER === "free" && goals.length >= FREE_GOAL_LIMIT;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || atLimit) return;
    setGoals((prev) => [
      ...prev,
      { id: Date.now(), title, targetDate: targetDate || "No date set", progress: 0 },
    ]);
    setTitle("");
    setTargetDate("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            Your Goals
          </h1>
          <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            PlanPilot breaks each goal into daily tasks automatically.
          </p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="flex items-center gap-2 rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-5 py-2.5 text-sm font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition hover:-translate-y-0.5"
        >
          <IconPlus size={16} />
          Add Goal
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAdd}
          className="mt-6 max-w-xl space-y-4 rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
        >
          {atLimit ? (
            <div className="flex items-start gap-3 rounded-xl bg-[#C8876A]/10 p-4">
              <IconLock size={18} className="mt-0.5 shrink-0 text-[#8B6F47]" />
              <div>
                <p className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  Free plan is limited to {FREE_GOAL_LIMIT} goal at a time
                </p>
                <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
                  Upgrade to Pro for unlimited goals.
                </p>
                <Link
                  href="/#pricing"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#8B6F47] hover:underline"
                >
                  View Pro plan
                  <IconArrowRight size={14} />
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
                  Goal Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Read 12 books this year"
                  className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] placeholder:text-[#8B6F47]/50 focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
                  Target Date
                </label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
                />
              </div>
              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                Save Goal
              </button>
            </>
          )}
        </form>
      )}

      <div className="mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
          >
            <h3 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
              {goal.title}
            </h3>
            <p className="mt-1 text-xs text-[#8B6F47]">
              Target: {goal.targetDate}
            </p>

            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#F7F1E7] dark:bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#C8876A] to-[#8B6F47]"
                style={{ width: `${goal.progress}%` }}
              />
            </div>
            <div className="mt-2 text-xs font-semibold text-[#8B6F47]">
              {goal.progress}% complete
            </div>

            <Link
              href="/dashboard/schedule"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#4A3728] hover:underline dark:text-[#F0EBE3]"
            >
              View tasks
              <IconArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
