"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconSparkles,
  IconCheck,
  IconSun,
  IconCalendarWeek,
  IconCalendarMonth,
  IconChevronDown,
  IconPlus,
  IconX,
  IconClockHour4,
} from "@tabler/icons-react";

type PeriodKey = "today" | "week" | "month";
type MoodKey = "focused" | "relaxed" | "energetic" | "low-energy";

const PERIODS: { key: PeriodKey; label: string; sub: string; Icon: typeof IconSun }[] = [
  { key: "today", label: "Today", sub: "1-day plan", Icon: IconSun },
  { key: "week", label: "This Week", sub: "7-day plan", Icon: IconCalendarWeek },
  { key: "month", label: "This Month", sub: "30-day plan", Icon: IconCalendarMonth },
];

const MOODS: {
  key: MoodKey;
  label: string;
  emoji: string;
  detail: string;
  preview: string;
}[] = [
  {
    key: "focused",
    label: "Focused",
    emoji: "😊",
    detail: "PlanPilot will prioritize deeper work with fewer distractions.",
    preview: "Expect longer focus blocks with minimal interruptions.",
  },
  {
    key: "relaxed",
    label: "Relaxed",
    emoji: "😌",
    detail: "PlanPilot will build a lighter plan with room to breathe.",
    preview: "Expect a lighter pace with breathing room between tasks.",
  },
  {
    key: "energetic",
    label: "Energetic",
    emoji: "⚡",
    detail: "PlanPilot will pack in more tasks and keep the momentum high.",
    preview: "Expect a fuller schedule that keeps your momentum going.",
  },
  {
    key: "low-energy",
    label: "Low Energy",
    emoji: "😴",
    detail: "PlanPilot will keep things simple with gentle, low-pressure tasks.",
    preview: "Expect short, gentle tasks with plenty of rest built in.",
  },
];

const DEFAULT_FOCUS_AREAS = [
  "Coding",
  "Study",
  "Career",
  "Fitness",
  "Reading",
  "Projects",
  "Personal",
];

const BREAK_STYLES = ["Short", "Balanced", "Long"];
const INTENSITIES = ["Relaxed", "Balanced", "Intensive"];

const FEATURES = [
  { emoji: "🎯", label: "Goal-focused tasks" },
  { emoji: "⏱", label: "Time-based schedule" },
  { emoji: "☕", label: "Smart breaks" },
  { emoji: "⚡", label: "Mood-aware workload" },
  { emoji: "📈", label: "Progress tracking" },
];

const SAMPLE_PLAN = [
  { time: "8:00 AM", task: "Morning Walk" },
  { time: "9:00 AM", task: "React Learning" },
  { time: "11:00 AM", task: "College Assignment" },
  { time: "1:00 PM", task: "Lunch" },
  { time: "3:00 PM", task: "Build Portfolio" },
  { time: "6:00 PM", task: "Gym" },
];

const cardBase =
  "rounded-2xl border border-[#4A3728]/8 bg-white shadow-sm dark:border-white/5 dark:bg-white/[0.03]";

function toMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function formatClock12(t: string) {
  const [h, m] = t.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

function selectable(selected: boolean, extra?: string) {
  return cn(
    "relative flex flex-col items-start gap-1.5 rounded-2xl border p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A]",
    selected
      ? "border-[#C8876A] bg-gradient-to-br from-[#C8876A]/15 to-[#8B6F47]/10 shadow-[0_8px_24px_-8px_rgba(200,135,106,0.5)]"
      : "border-[#4A3728]/10 bg-white hover:-translate-y-0.5 hover:border-[#C8876A]/40 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#C8876A]/40",
    extra
  );
}

function SelectedCheck() {
  return (
    <span className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-white shadow-sm">
      <IconCheck size={12} stroke={3} />
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
      {children}
    </h2>
  );
}

function PeriodPicker({
  value,
  onChange,
}: {
  value: PeriodKey;
  onChange: (v: PeriodKey) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {PERIODS.map((p) => {
        const isSelected = value === p.key;
        return (
          <motion.button
            key={p.key}
            type="button"
            whileTap={{ scale: 0.97 }}
            aria-pressed={isSelected}
            onClick={() => onChange(p.key)}
            className={selectable(isSelected)}
          >
            {isSelected && <SelectedCheck />}
            <p.Icon
              size={20}
              className={isSelected ? "text-[#8B6F47]" : "text-[#8B6F47]/70"}
            />
            <span className="text-sm font-bold text-[#4A3728] dark:text-[#F0EBE3]">
              {p.label}
            </span>
            <span className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
              {p.sub}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}

function MoodPicker({
  value,
  onChange,
}: {
  value: MoodKey | null;
  onChange: (v: MoodKey) => void;
}) {
  const selectedMood = MOODS.find((m) => m.key === value) ?? null;
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {MOODS.map((m) => {
          const isSelected = value === m.key;
          return (
            <motion.button
              key={m.key}
              type="button"
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              aria-pressed={isSelected}
              onClick={() => onChange(m.key)}
              className={selectable(isSelected, "items-center text-center")}
            >
              {isSelected && <SelectedCheck />}
              <span className="text-2xl">{m.emoji}</span>
              <span className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                {m.label}
              </span>
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {selectedMood && (
          <motion.div
            key={selectedMood.key}
            initial={{ opacity: 0, y: -6, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -6, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex items-start gap-2 rounded-xl bg-[#F7F1E7] px-4 py-3 text-sm dark:bg-white/5">
              <IconSparkles size={14} className="mt-0.5 shrink-0 text-[#C8876A]" />
              <p className="text-[#6B5A4A] dark:text-[#D8CBBB]">
                <span className="font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  {selectedMood.label}.{" "}
                </span>
                {selectedMood.detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FocusAreaPicker({
  options,
  selected,
  onToggle,
  onAddCustom,
}: {
  options: string[];
  selected: string[];
  onToggle: (opt: string) => void;
  onAddCustom: (value: string) => void;
}) {
  const [adding, setAdding] = useState(false);
  const [customValue, setCustomValue] = useState("");

  const chipClass = (isSelected: boolean) =>
    cn(
      "rounded-full border px-4 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A]",
      isSelected
        ? "border-transparent bg-gradient-to-b from-[#C8876A] to-[#8B6F47] text-white shadow-sm"
        : "border-[#4A3728]/15 text-[#4A3728] hover:bg-[#F7F1E7] dark:border-white/15 dark:text-[#F0EBE3] dark:hover:bg-white/5"
    );

  const confirmAdd = () => {
    const value = customValue.trim();
    if (value) onAddCustom(value);
    setCustomValue("");
    setAdding(false);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const isSelected = selected.includes(opt);
        return (
          <motion.button
            key={opt}
            type="button"
            whileTap={{ scale: 0.95 }}
            aria-pressed={isSelected}
            onClick={() => onToggle(opt)}
            className={chipClass(isSelected)}
          >
            {opt}
          </motion.button>
        );
      })}

      {adding ? (
        <span className="flex items-center gap-1 rounded-full border border-[#C8876A]/40 bg-white pl-3 pr-1 py-1 dark:bg-white/5">
          <input
            autoFocus
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                confirmAdd();
              }
              if (e.key === "Escape") {
                setAdding(false);
                setCustomValue("");
              }
            }}
            placeholder="Your focus area"
            className="w-28 bg-transparent text-sm text-[#4A3728] placeholder:text-[#8B6F47]/50 focus:outline-none dark:text-[#F0EBE3]"
          />
          <button
            type="button"
            onClick={confirmAdd}
            aria-label="Add focus area"
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8876A] text-white"
          >
            <IconCheck size={12} stroke={3} />
          </button>
          <button
            type="button"
            onClick={() => {
              setAdding(false);
              setCustomValue("");
            }}
            aria-label="Cancel"
            className="flex h-6 w-6 items-center justify-center rounded-full text-[#8B6F47] hover:bg-[#F7F1E7] dark:hover:bg-white/10"
          >
            <IconX size={12} stroke={3} />
          </button>
        </span>
      ) : (
        <button
          type="button"
          onClick={() => setAdding(true)}
          className="flex items-center gap-1 rounded-full border border-dashed border-[#8B6F47]/40 px-4 py-1.5 text-sm font-medium text-[#8B6F47] transition hover:bg-[#F7F1E7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A] dark:hover:bg-white/5"
        >
          <IconPlus size={14} />
          Add your own
        </button>
      )}
    </div>
  );
}

function PillGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          aria-pressed={value === opt}
          onClick={() => onChange(opt)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A]",
            value === opt
              ? "border-transparent bg-gradient-to-b from-[#C8876A] to-[#8B6F47] text-white shadow-sm"
              : "border-[#4A3728]/15 text-[#4A3728] hover:bg-[#F7F1E7] dark:border-white/15 dark:text-[#F0EBE3] dark:hover:bg-white/5"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function AIPreviewCard({
  goal,
  mood,
  durationLabel,
  focusAreas,
}: {
  goal: string;
  mood: MoodKey | null;
  durationLabel: string;
  focusAreas: string[];
}) {
  const selectedMood = MOODS.find((m) => m.key === mood) ?? null;

  const rows = [
    { emoji: "🎯", label: "Goal", value: goal.trim() || "Not set yet" },
    { emoji: "⚡", label: "Energy", value: selectedMood ? selectedMood.label : "Not set yet" },
    { emoji: "⏱", label: "Available", value: durationLabel },
    {
      emoji: "💻",
      label: "Focus",
      value: focusAreas.length ? focusAreas.join(", ") : "Open to anything",
    },
  ];

  return (
    <div className={cn(cardBase, "p-6")}>
      <div className="flex items-center gap-1.5 text-sm font-bold text-[#4A3728] dark:text-[#F0EBE3]">
        <IconSparkles size={16} className="text-[#C8876A]" />
        PlanPilot
      </div>
      <p className="mt-1 text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
        Here&apos;s what I&apos;ll use to build your plan
      </p>

      <div className="mt-4 space-y-2">
        {rows.map((row) => (
          <motion.div
            key={row.label}
            layout
            className="flex items-center justify-between gap-3 rounded-xl bg-[#F7F1E7] px-3.5 py-2.5 dark:bg-white/5"
          >
            <span className="flex items-center gap-2 text-xs font-semibold text-[#8B6F47]">
              <span aria-hidden>{row.emoji}</span>
              {row.label}
            </span>
            <span className="truncate text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
              {row.value}
            </span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={selectedMood?.key ?? "default"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-4 text-sm leading-relaxed text-[#6B5A4A] dark:text-[#D8CBBB]"
        >
          {selectedMood
            ? selectedMood.preview
            : "Your plan will balance focused work, breaks, and realistic goals based on your available time."}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function MakePlanPage() {
  const [period, setPeriod] = useState<PeriodKey>("today");
  const [goal, setGoal] = useState("");
  const [mood, setMood] = useState<MoodKey | null>(null);
  const [from, setFrom] = useState("14:00");
  const [until, setUntil] = useState("20:00");
  const [focusOptions, setFocusOptions] = useState(DEFAULT_FOCUS_AREAS);
  const [focusAreas, setFocusAreas] = useState<string[]>([]);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [breakStyle, setBreakStyle] = useState("Balanced");
  const [intensity, setIntensity] = useState("Balanced");
  const [deadline, setDeadline] = useState("");
  const [avoid, setAvoid] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const canGenerate = goal.trim().length > 0 && !!mood && !isGenerating;

  let diff = toMinutes(until) - toMinutes(from);
  if (diff <= 0) diff += 24 * 60;
  const hours = Math.floor(diff / 60);
  const minutes = diff % 60;
  const durationLabel =
    [hours ? `${hours} hour${hours !== 1 ? "s" : ""}` : null, minutes ? `${minutes} min` : null]
      .filter(Boolean)
      .join(" ") || "0 min";

  const toggleFocus = (area: string) => {
    setFocusAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const addCustomFocus = (value: string) => {
    setFocusOptions((prev) => (prev.includes(value) ? prev : [...prev, value]));
    setFocusAreas((prev) => (prev.includes(value) ? prev : [...prev, value]));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canGenerate) return;
    setIsGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 1400);
  };

  const periodLabel = PERIODS.find((p) => p.key === period)?.label ?? "Today";

  return (
    <div>
      <span className="inline-flex items-center gap-1 rounded-full bg-[#C8876A]/12 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#8B6F47]">
        <IconSparkles size={10} />
        AI-POWERED PLANNING
      </span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#4A3728] dark:text-[#F0EBE3]">
        Create a plan that fits your life
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6B5A4A] dark:text-[#D8CBBB]">
        Tell PlanPilot what you want to achieve, how you&apos;re feeling, and how
        much time you have. We&apos;ll build a realistic plan around you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-6 lg:grid-cols-3 lg:items-start">
        <div className="space-y-6 lg:col-span-2">
          <section className={cn(cardBase, "p-6")}>
            <SectionHeading>What would you like to plan?</SectionHeading>
            <div className="mt-4">
              <PeriodPicker value={period} onChange={setPeriod} />
            </div>
          </section>

          <section className={cn(cardBase, "p-6 ring-1 ring-[#C8876A]/15")}>
            <label htmlFor="goal" className="block">
              <SectionHeading>What do you want to accomplish?</SectionHeading>
            </label>
            <div className="relative mt-4">
              <IconSparkles
                size={18}
                className="pointer-events-none absolute top-4 left-4 text-[#C8876A]"
              />
              <textarea
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Learn React, prepare for exams, finish my project..."
                rows={2}
                className="w-full resize-none rounded-xl border border-[#4A3728]/15 bg-white py-3.5 pr-4 pl-11 text-base text-[#4A3728] placeholder:text-[#8B6F47]/50 focus:border-[#C8876A] focus:outline-none focus:ring-2 focus:ring-[#C8876A]/20 dark:bg-white/5 dark:text-[#F0EBE3]"
              />
            </div>
          </section>

          <section className={cn(cardBase, "p-6")}>
            <SectionHeading>How are you feeling today?</SectionHeading>
            <div className="mt-4">
              <MoodPicker value={mood} onChange={setMood} />
            </div>
          </section>

          <section className={cn(cardBase, "p-6")}>
            <SectionHeading>When are you available?</SectionHeading>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="from"
                  className="text-xs font-semibold text-[#8B6F47]"
                >
                  From
                </label>
                <input
                  id="from"
                  type="time"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
                />
                <p className="mt-1 text-xs text-[#8B6F47]">{formatClock12(from)}</p>
              </div>
              <div>
                <label
                  htmlFor="until"
                  className="text-xs font-semibold text-[#8B6F47]"
                >
                  Until
                </label>
                <input
                  id="until"
                  type="time"
                  value={until}
                  onChange={(e) => setUntil(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
                />
                <p className="mt-1 text-xs text-[#8B6F47]">{formatClock12(until)}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#F7F1E7] px-4 py-3 dark:bg-white/5">
              <IconClockHour4 size={16} className="shrink-0 text-[#C8876A]" />
              <div>
                <div className="text-sm font-bold text-[#4A3728] dark:text-[#F0EBE3]">
                  {durationLabel} available
                </div>
                <div className="text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
                  We&apos;ll build your plan within this time.
                </div>
              </div>
            </div>
          </section>

          <section className={cn(cardBase, "p-6")}>
            <SectionHeading>What should your plan focus on?</SectionHeading>
            <div className="mt-4">
              <FocusAreaPicker
                options={focusOptions}
                selected={focusAreas}
                onToggle={toggleFocus}
                onAddCustom={addCustomFocus}
              />
            </div>
          </section>

          <section className={cn(cardBase, "overflow-hidden")}>
            <button
              type="button"
              onClick={() => setPrefsOpen((v) => !v)}
              aria-expanded={prefsOpen}
              className="flex w-full items-center justify-between p-6 text-left focus-visible:outline-none"
            >
              <SectionHeading>+ Planning preferences</SectionHeading>
              <IconChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-[#8B6F47] transition-transform duration-200",
                  prefsOpen && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {prefsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 px-6 pb-6">
                    <div>
                      <span className="text-xs font-semibold text-[#8B6F47]">
                        Break style
                      </span>
                      <div className="mt-2">
                        <PillGroup
                          options={BREAK_STYLES}
                          value={breakStyle}
                          onChange={setBreakStyle}
                        />
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#8B6F47]">
                        Work intensity
                      </span>
                      <div className="mt-2">
                        <PillGroup
                          options={INTENSITIES}
                          value={intensity}
                          onChange={setIntensity}
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="deadline"
                          className="text-xs font-semibold text-[#8B6F47]"
                        >
                          Deadline (optional)
                        </label>
                        <input
                          id="deadline"
                          type="date"
                          value={deadline}
                          onChange={(e) => setDeadline(e.target.value)}
                          className="mt-1.5 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="avoid"
                          className="text-xs font-semibold text-[#8B6F47]"
                        >
                          Things to avoid (optional)
                        </label>
                        <input
                          id="avoid"
                          type="text"
                          value={avoid}
                          onChange={(e) => setAvoid(e.target.value)}
                          placeholder="e.g. late nights, back-to-back calls"
                          className="mt-1.5 w-full rounded-xl border border-[#4A3728]/15 bg-white px-4 py-2.5 text-sm text-[#4A3728] placeholder:text-[#8B6F47]/50 focus:border-[#C8876A] focus:outline-none dark:bg-white/5 dark:text-[#F0EBE3]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          <div>
            <motion.button
              type="submit"
              disabled={!canGenerate}
              whileHover={canGenerate ? { y: -2 } : undefined}
              whileTap={canGenerate ? { scale: 0.98 } : undefined}
              className={cn(
                "flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-bold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition",
                canGenerate
                  ? "bg-gradient-to-b from-[#C8876A] to-[#8B6F47] shadow-[0_8px_24px_-6px_rgba(200,135,106,0.6)] hover:shadow-[0_10px_28px_-4px_rgba(200,135,106,0.75)]"
                  : "cursor-not-allowed bg-[#4A3728]/20"
              )}
            >
              {isGenerating ? (
                <>
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-white"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </span>
                  Creating your plan...
                </>
              ) : (
                <>
                  <IconSparkles size={16} />
                  Generate My Plan
                </>
              )}
            </motion.button>
            <p className="mt-2 text-center text-xs text-[#6B5A4A] dark:text-[#D8CBBB]">
              PlanPilot will create a personalized plan in a few seconds.
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-8">
          <AIPreviewCard
            goal={goal}
            mood={mood}
            durationLabel={durationLabel}
            focusAreas={focusAreas}
          />
        </div>
      </form>

      <div className="mt-10">
        <h2 className="text-lg font-bold text-[#4A3728] dark:text-[#F0EBE3]">
          Your AI plan will include
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {FEATURES.map((f) => (
            <div
              key={f.label}
              className={cn(
                cardBase,
                "flex flex-col items-center gap-2 p-4 text-center"
              )}
            >
              <span className="text-xl">{f.emoji}</span>
              <span className="text-xs font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {generated && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(cardBase, "mt-6 max-w-2xl p-6")}
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[#8B6F47]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Your {periodLabel} Plan
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
