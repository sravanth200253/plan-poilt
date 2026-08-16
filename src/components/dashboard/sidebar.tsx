"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
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

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-5 py-6 text-white">
      <Link
        href="/"
        onClick={onNavigate}
        className="flex items-center gap-2 rounded-lg px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A]"
      >
        <img src="/logo1.png" alt="PlanPilot logo" className="h-8 w-8 object-contain" />
        <span className="text-lg font-bold tracking-tight">PlanPilot</span>
      </Link>

      <div className="mt-6">
        <LocalClock />
      </div>

      <div className="mt-6 h-px bg-white/10" />

      <nav className="mt-4 flex flex-1 flex-col gap-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C8876A] to-[#8B6F47] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_-2px_rgba(200,135,106,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  : "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-[#D8CBBB] transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A]"
              }
            >
              <item.icon size={18} className="shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 h-px bg-white/10" />

      <div className="mt-4 flex flex-col gap-1">
        <Link
          href="/#faq"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium text-[#D8CBBB] transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A]"
        >
          <IconLifebuoy size={16} className="shrink-0" />
          Help &amp; Support
        </Link>

        <Link
          href="/"
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium text-[#D8CBBB] transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A]"
        >
          <IconArrowLeft size={16} className="shrink-0" />
          Back to Home
        </Link>

        <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-sm font-bold">
            A
          </span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold">Alex</div>
            <Link
              href="/login"
              onClick={onNavigate}
              className="flex items-center gap-1 text-xs text-[#D8CBBB] transition hover:text-white"
            >
              <IconLogout size={12} />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sidebar({
  mobileOpen = false,
  onClose,
}: {
  mobileOpen?: boolean;
  onClose?: () => void;
}) {
  return (
    <>
      <aside className="relative z-10 hidden h-screen w-64 shrink-0 bg-gradient-to-b from-[#2B231A] to-[#1A140F] lg:block">
        <SidebarContent />
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              aria-hidden
            />
            <motion.aside
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation"
              className="fixed inset-y-0 left-0 z-50 w-72 max-w-[80vw] bg-gradient-to-b from-[#2B231A] to-[#1A140F] shadow-2xl lg:hidden"
            >
              <SidebarContent onNavigate={onClose} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
