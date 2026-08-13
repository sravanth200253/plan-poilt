"use client";
import { useEffect, useState } from "react";
import { IconClock } from "@tabler/icons-react";

export function LocalClock() {
  const [time, setTime] = useState("");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);

    const update = () => {
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };

    update();
    const interval = setInterval(update, 30_000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5">
      <IconClock size={16} className="shrink-0 text-[#C8876A]" />
      <div className="min-w-0">
        <div className="text-sm font-semibold text-white">{time}</div>
        <div className="truncate text-[10px] text-[#D8CBBB]">{timezone}</div>
      </div>
    </div>
  );
}
