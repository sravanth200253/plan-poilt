import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AIRobot } from "@/components/ui/ai-robot";

const TRUST_ITEMS = ["AI Powered", "Free Forever", "No Credit Card"];

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="h-auto min-h-0 py-20 pt-36 md:pt-40">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start px-6 text-left">
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-3 lg:flex xl:right-16">
          <AIRobot size={64} className="shrink-0" />
          <div className="relative w-52 rounded-2xl border border-[#4A3728]/10 bg-white px-4 py-3 text-left font-sans text-xs font-semibold leading-relaxed tracking-tight text-[#4A3728] shadow-md dark:bg-[#221C15] dark:text-[#F0EBE3]">
            Hi there! Welcome to PlanPilot — let&apos;s plan your day
            together.
            <div className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-b border-l border-[#4A3728]/10 bg-white dark:bg-[#221C15]" />
          </div>
        </div>

        <div className="relative z-20 flex flex-col items-start">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C8876A]/30 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#8B6F47] dark:bg-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8876A]" />
              AI-GENERATED PLANNING, INSTANTLY
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#4A3728] dark:text-[#F0EBE3] md:text-5xl lg:text-6xl">
            Plan your day with
            <br />
            <span className="bg-gradient-to-r from-[#C8876A] via-[#B99A73] to-[#4A3728] bg-clip-text text-transparent">
              Mood, Interest &amp; Time.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base text-[#6B5A4A] dark:text-[#D8CBBB]">
            PlanPilot AI creates personalized Daily, Weekly, and Monthly plans
            based on your goals, mood, interests, available time, deadlines,
            and priorities.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#"
              className="rounded-full bg-gradient-to-b from-[#C8876A] to-[#8B6F47] px-6 py-3 text-sm font-semibold text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] transition hover:-translate-y-0.5"
            >
              Generate My AI Plan
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 rounded-full border border-[#4A3728]/15 bg-white/60 px-6 py-3 text-sm font-semibold text-[#4A3728] transition hover:-translate-y-0.5 dark:bg-white/10 dark:text-[#F0EBE3]"
            >
              <IconPlayerPlayFilled size={14} />
              Watch Demo
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-start gap-x-6 gap-y-2 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            {TRUST_ITEMS.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="text-[#8B6F47]">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
