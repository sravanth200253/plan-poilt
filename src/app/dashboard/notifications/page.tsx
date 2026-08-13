"use client";
import { useState } from "react";
import {
  IconSparkles,
  IconClock,
  IconChartBar,
  IconTarget,
  IconRocket,
} from "@tabler/icons-react";

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    icon: IconSparkles,
    title: "Your day is planned!",
    description: "Tap to view your AI-generated schedule for today.",
    time: "2h ago",
    read: false,
  },
  {
    id: 2,
    icon: IconClock,
    title: "React Learning starts soon",
    description: "Your next task begins in 15 minutes.",
    time: "3h ago",
    read: false,
  },
  {
    id: 3,
    icon: IconChartBar,
    title: "Weekly summary is ready",
    description: "Your productivity recap for last week is in.",
    time: "1d ago",
    read: true,
  },
  {
    id: 4,
    icon: IconTarget,
    title: "Goal progress update",
    description: "You're 65% through \"Learn React\" — keep going!",
    time: "2d ago",
    read: true,
  },
  {
    id: 5,
    icon: IconRocket,
    title: "New feature: Monthly view",
    description: "Monthly planning is now available in Schedule.",
    time: "4d ago",
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#4A3728] dark:text-[#F0EBE3]">
            Notifications
          </h1>
          <p className="mt-1 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
            {unreadCount > 0
              ? `${unreadCount} unread notification${unreadCount > 1 ? "s" : ""}.`
              : "You're all caught up."}
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="text-sm font-semibold text-[#8B6F47] hover:underline"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="mt-6 max-w-xl space-y-2.5">
        {notifications.map((n) => (
          <button
            key={n.id}
            onClick={() => markAsRead(n.id)}
            className={
              n.read
                ? "flex w-full items-start gap-3 rounded-xl border border-[#4A3728]/6 bg-white p-4 text-left shadow-sm dark:border-white/5 dark:bg-white/[0.03]"
                : "flex w-full items-start gap-3 rounded-xl border border-[#C8876A]/30 bg-[#C8876A]/[0.06] p-4 text-left shadow-sm"
            }
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#C8876A] to-[#8B6F47] text-white">
              <n.icon size={16} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[#4A3728] dark:text-[#F0EBE3]">
                  {n.title}
                </span>
                {!n.read && (
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8876A]" />
                )}
              </div>
              <p className="mt-0.5 text-sm text-[#6B5A4A] dark:text-[#D8CBBB]">
                {n.description}
              </p>
              <span className="mt-1 block text-xs text-[#8B6F47]/70">
                {n.time}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
