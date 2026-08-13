import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen overflow-hidden bg-gradient-to-br from-[#F3D8BE] via-[#E3A876] to-[#4A3728]">
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-[#2B231A]/40 blur-3xl" />

      <Sidebar />
      <main className="relative z-10 flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}
