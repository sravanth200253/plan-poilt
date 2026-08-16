"use client";

import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="relative flex h-screen overflow-hidden bg-gradient-to-br from-[#F3D8BE] via-[#E3A876] to-[#4A3728]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-[#2B231A]/40 blur-3xl" />

      <Sidebar mobileOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <div className="relative z-10 flex flex-1 flex-col overflow-hidden">
        <div className="flex items-center gap-3 border-b border-[#4A3728]/10 bg-white/40 px-4 py-3 backdrop-blur-sm lg:hidden">
          <button
            type="button"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open navigation"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#4A3728] transition hover:bg-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8876A]"
          >
            <IconMenu2 size={20} />
          </button>
          <span className="text-sm font-bold text-[#4A3728]">PlanPilot</span>
        </div>

        <main className="flex-1 overflow-y-auto p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
}
