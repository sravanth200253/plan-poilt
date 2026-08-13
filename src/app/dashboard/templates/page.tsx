import Link from "next/link";
import {
  IconBooks,
  IconBed,
  IconBolt,
  IconCoffee,
  IconArrowRight,
} from "@tabler/icons-react";

const TEMPLATES = [
  {
    icon: IconBooks,
    title: "Study Day",
    description: "Deep focus blocks with short breaks, built for learning.",
  },
  {
    icon: IconBolt,
    title: "Deep Work",
    description: "Long uninterrupted blocks for your most demanding goal.",
  },
  {
    icon: IconBed,
    title: "Rest Day",
    description: "A light, low-pressure day to recover and recharge.",
  },
  {
    icon: IconCoffee,
    title: "Light Day",
    description: "A gentle mix of small tasks and open time.",
  },
];

export default function TemplatesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
        Templates
      </h1>
      <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
        Start from a preset instead of filling out Make Your Plan from scratch.
      </p>

      <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
        {TEMPLATES.map((template) => (
          <div
            key={template.title}
            className="rounded-2xl border border-[#4A3728]/6 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-white shadow-sm">
              <template.icon size={20} />
            </div>
            <h3 className="mt-4 text-base font-bold text-[#4A3728] dark:text-[#F0EBE3]">
              {template.title}
            </h3>
            <p className="mt-2 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
              {template.description}
            </p>
            <Link
              href="/dashboard/plan"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#8B6F47] hover:underline"
            >
              Use Template
              <IconArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
