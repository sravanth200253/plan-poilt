"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard,
  IconCalendar,
  IconTarget,
  IconSettings,
  IconLogout,
  IconArrowLeft,
} from "@tabler/icons-react";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: IconLayoutDashboard },
  { label: "Schedule", href: "#", icon: IconCalendar },
  { label: "Goals", href: "#", icon: IconTarget },
  { label: "Settings", href: "#", icon: IconSettings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-gradient-to-b from-[#2B231A] to-[#1A140F] px-5 py-6 text-white">
      <Link href="/" className="flex items-center gap-2 px-2">
        <img src="/logo1.png" alt="PlanPilot logo" className="h-8 w-8 object-contain" />
        <span className="text-lg font-bold">Plan Pilot</span>
      </Link>

      <nav className="mt-10 flex flex-1 flex-col gap-1">
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
