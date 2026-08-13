"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IconArrowRight, IconSparkles, IconWorld } from "@tabler/icons-react";

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={
        checked
          ? "relative h-6 w-11 shrink-0 rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] transition"
          : "relative h-6 w-11 shrink-0 rounded-full bg-[#4A3728]/15 transition dark:bg-white/15"
      }
    >
      <span
        className={
          checked
            ? "absolute top-0.5 left-[22px] h-5 w-5 rounded-full bg-white shadow transition"
            : "absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition"
        }
      />
    </button>
  );
}

const MOODS = ["Focused", "Relaxed", "Energetic", "Tired"];
const PLANNING_STYLES = ["Relaxed", "Balanced", "Aggressive"];

export default function SettingsPage() {
  const [name, setName] = useState("Alex");
  const [email, setEmail] = useState("alex@example.com");
  const [defaultMood, setDefaultMood] = useState("Focused");
  const [from, setFrom] = useState("09:00");
  const [until, setUntil] = useState("18:00");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const [planningStyle, setPlanningStyle] = useState("Balanced");
  const [autoAdjust, setAutoAdjust] = useState(true);
  const [smartSuggestions, setSmartSuggestions] = useState(true);

  const [emailReminders, setEmailReminders] = useState(true);
  const [aiPlanReady, setAiPlanReady] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(true);
  const [productUpdates, setProductUpdates] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
        Settings
      </h1>
      <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
        Manage your profile, AI planning behavior, and notifications.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        <section className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            Profile
          </h2>
          <div className="mt-4 flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-lg font-bold text-white">
              {name.charAt(0)}
            </span>
            <div className="grid flex-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#F7F1E7] px-4 py-3 dark:bg-white/5">
            <IconWorld size={16} className="shrink-0 text-[#8B6F47]" />
            <div>
              <div className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                {timezone || "Detecting…"}
              </div>
              <div className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
                Detected automatically — your schedule and reminders use this timezone.
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            Planning Defaults
          </h2>
          <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            Used to pre-fill Make Your Plan.
          </p>

          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
              Default Mood
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {MOODS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setDefaultMood(option)}
                  className={
                    defaultMood === option
                      ? "rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-4 py-1.5 text-sm font-semibold text-white"
                      : "rounded-full border border-[#4A3728]/15 px-4 py-1.5 text-sm font-medium text-[#4A3728] transition hover:bg-[#F7F1E7] dark:border-white/15 dark:text-[#F0EBE3]"
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
                Available From
              </label>
              <input
                type="time"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
                Available Until
              </label>
              <input
                type="time"
                value={until}
                onChange={(e) => setUntil(e.target.value)}
                className="mt-2 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
              />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <IconSparkles size={16} className="text-[#8B6F47]" />
            <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
              AI Preferences
            </h2>
          </div>
          <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            Control how PlanPilot&apos;s AI builds and manages your day.
          </p>

          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
              Planning Style
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {PLANNING_STYLES.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPlanningStyle(option)}
                  className={
                    planningStyle === option
                      ? "rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-4 py-1.5 text-sm font-semibold text-white"
                      : "rounded-full border border-[#4A3728]/15 px-4 py-1.5 text-sm font-medium text-[#4A3728] transition hover:bg-[#F7F1E7] dark:border-white/15 dark:text-[#F0EBE3]"
                  }
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
              How tightly packed your generated schedules should be.
            </p>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  Auto-adjust my day
                </div>
                <div className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
                  Let AI reorganize the rest of your day when plans change.
                </div>
              </div>
              <Toggle checked={autoAdjust} onChange={() => setAutoAdjust((v) => !v)} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  Smart suggestions
                </div>
                <div className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
                  Get proactive tips based on your mood and progress.
                </div>
              </div>
              <Toggle checked={smartSuggestions} onChange={() => setSmartSuggestions((v) => !v)} />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            Notifications
          </h2>

          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  Email reminders
                </div>
                <div className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
                  Get notified before each scheduled task.
                </div>
              </div>
              <Toggle checked={emailReminders} onChange={() => setEmailReminders((v) => !v)} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  AI plan ready alerts
                </div>
                <div className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
                  Notify me the moment a new AI-generated plan is ready.
                </div>
              </div>
              <Toggle checked={aiPlanReady} onChange={() => setAiPlanReady((v) => !v)} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  Weekly summary
                </div>
                <div className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
                  A recap of your productivity every Sunday.
                </div>
              </div>
              <Toggle checked={weeklySummary} onChange={() => setWeeklySummary((v) => !v)} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  Product updates
                </div>
                <div className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
                  Occasional emails about new features.
                </div>
              </div>
              <Toggle checked={productUpdates} onChange={() => setProductUpdates((v) => !v)} />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
                Plan &amp; Billing
              </h2>
              <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
                You&apos;re currently on the{" "}
                <span className="font-semibold text-[#8B6F47]">Free</span> plan.
              </p>
            </div>
            <Link
              href="/#pricing"
              className="flex items-center gap-1 rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Upgrade to Pro
              <IconArrowRight size={14} />
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/20">
          <h2 className="text-base font-bold text-red-700 dark:text-red-400">
            Danger Zone
          </h2>
          <p className="mt-1 text-sm text-red-600/80 dark:text-red-400/70">
            Deleting your account removes all your plans and goals. This
            can&apos;t be undone.
          </p>
          <button
            type="button"
            className="mt-4 rounded-full border border-red-300 px-5 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-950/30"
          >
            Delete Account
          </button>
        </section>

        <button
          type="button"
          className="flex h-11 w-full items-center justify-center rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] text-sm font-bold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition hover:-translate-y-0.5"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
