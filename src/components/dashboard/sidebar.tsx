"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard,
  IconSparkles,
  IconCalendar,
  IconTarget,
  IconRepeat,
  IconTemplate,
  IconGauge,
  IconChartBar,
  IconBell,
  IconSettings,
  IconLogout,
  IconArrowLeft,
  IconLifebuoy,
} from "@tabler/icons-react";
import { LocalClock } from "@/components/dashboard/local-clock";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: IconLayoutDashboard },
  { label: "Make Your Plan", href: "/dashboard/plan", icon: IconSparkles },
  { label: "Schedule", href: "/dashboard/schedule", icon: IconCalendar },
  { label: "Plan Tracker", href: "/dashboard/tracker", icon: IconGauge },
  { label: "Goals", href: "/dashboard/goals", icon: IconTarget },
  { label: "Habits", href: "/dashboard/habits", icon: IconRepeat },
  { label: "Templates", href: "/dashboard/templates", icon: IconTemplate },
  { label: "Analytics", href: "/dashboard/analytics", icon: IconChartBar },
  { label: "Notifications", href: "/dashboard/notifications", icon: IconBell },
  { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative z-10 flex h-screen w-64 shrink-0 flex-col bg-gradient-to-b from-[#2B231A] to-[#1A140F] px-5 py-6 text-white">
      <Link href="/" className="flex items-center gap-2 px-2">
        <img src="/logo1.png" alt="PlanPilot logo" className="h-8 w-8 object-contain" />
        <span className="text-lg font-bold">Plan Pilot</span>
      </Link>

      <div className="mt-6">
        <LocalClock />
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={
                isActive
                  ? "flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C8876A] to-[#8B6F47] px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
                  : "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-[#D8CBBB] transition hover:bg-white/5 hover:text-white"
              }
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <Link
          href="/#faq"
          className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-[#D8CBBB] transition hover:bg-white/5 hover:text-white"
        >
          <IconLifebuoy size={16} />
          Help &amp; Support
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-[#D8CBBB] transition hover:bg-white/5 hover:text-white"
        >
          <IconArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-sm font-bold">
            A
          </span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold">Alex</div>
            <Link
              href="/login"
              className="flex items-center gap-1 text-xs text-[#D8CBBB] transition hover:text-white"
            >
              <IconLogout size={12} />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
