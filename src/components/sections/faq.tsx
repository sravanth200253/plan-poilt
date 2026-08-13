"use client";
import { useState } from "react";

const FAQS = [
  {
    question: "How does PlanPilot generate my schedule?",
    answer:
      "You tell it your goals, mood, interests, and the hours you have free. PlanPilot combines all four to lay out a schedule for the day, week, or month — and updates it whenever something changes.",
  },
  {
    question: "Is PlanPilot really free forever?",
    answer:
      "Yes. The Free plan gives you daily AI scheduling and mood-based planning at no cost, for as long as you use it. Upgrade to Pro only when you want weekly and monthly plans, unlimited goals, and productivity analytics.",
  },
  {
    question: "Can it adjust my plan mid-day?",
    answer:
      "Yes — tell PlanPilot what changed and it reorganizes the rest of your day instantly, without losing track of your goals.",
  },
  {
    question: "Does PlanPilot work across devices?",
    answer:
      "PlanPilot works in any modern browser, so your plan stays in sync whether you're on your phone, tablet, or desktop.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your plans and preferences are private to your account. You can export or delete your data at any time.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-[#F0E6D3] py-24 dark:bg-[#1B1610]">
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C8876A]/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-[#8B6F47]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8876A]" />
          FAQ
        </span>

        <h2 className="mx-auto mt-6 text-4xl font-bold tracking-tight text-[#4A3728] dark:text-[#F0EBE3] md:text-5xl">
          Questions, answered
        </h2>

        <div className="mt-14 space-y-4 text-left">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl bg-white p-6 shadow-sm dark:bg-white/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
                    {item.question}
                  </span>
                  <span
                    className={
                      isOpen
                        ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-white transition-transform rotate-45"
                        : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F0E6D3] text-[#8B6F47] transition-transform dark:bg-white/10"
                    }
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-sm leading-relaxed text-[#6B5A4A] dark:text-[#D8CBBB]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
