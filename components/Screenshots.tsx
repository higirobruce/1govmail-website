"use client";

import { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";

const tabs = [
  {
    id: "inbox",
    label: "Inbox",
    description: "Pinned messages, unread badges, and a clean three-panel layout for maximum focus.",
    src: "/screenshots/inbox.png",
    alt: "1Gov Mail inbox",
    available: true,
  },
  {
    id: "reading",
    label: "Reading",
    description: "Full message view with attachment previews, overview metadata, and one-click reply.",
    src: "/screenshots/reading.png",
    alt: "1Gov Mail email reading view",
    available: true,
  },
  {
    id: "compose",
    label: "Compose",
    description: "Rich text formatting, Cc/Bcc, file attachments, and ⌘↵ to send.",
    src: "/screenshots/compose.png",
    alt: "1Gov Mail compose window",
    available: true,
  },
  {
    id: "calendar",
    label: "Calendar",
    description: "Month, week, day, and agenda views. Overlay colleague schedules and accept or decline invites directly in the app.",
    src: "/screenshots/calendar.png",
    alt: "1Gov Mail calendar view",
    available: true,
  },
  {
    id: "freebusy",
    label: "Free-Busy",
    description: "Overlay up to 5 colleagues' schedules on a shared timeline. Shaded bands show working hours, and highlighted slots show when everyone is free.",
    src: "/screenshots/freebusy.png",
    alt: "1Gov Mail free-busy availability panel",
    available: true,
  },
  {
    id: "tasks",
    label: "Tasks",
    description: "Create tasks from emails, set due dates, reminders, and subtasks. Track work on a kanban board or switch to the My Day view for today's focus list.",
    src: "/screenshots/tasks.png",
    alt: "1Gov Mail task management",
    available: true,
  },
];

export function Screenshots() {
  const [active, setActive] = useState(0);

  const current = tabs[active];

  return (
    <section className="relative bg-white pb-28 px-6">
      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-black/[0.06] mb-20" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-3">
            See it in action
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0a0a0a]">
            Designed for the way
            <br />
            <span className="text-black/40">government works.</span>
          </h2>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap items-center justify-center gap-1 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              className={clsx(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                active === i
                  ? "bg-[#0a0a0a] text-white shadow-sm"
                  : "text-black/50 hover:text-black/80 hover:bg-black/[0.04]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="text-center text-sm text-black/50 mb-8 max-w-lg mx-auto">
          {current.description}
        </p>

        {/* Screenshot / placeholder */}
        <div className="relative rounded-2xl overflow-hidden border border-black/[0.08] shadow-2xl shadow-black/10">
          {current.available ? (
            tabs.map((tab, i) => (
              <div
                key={tab.id}
                className={clsx(
                  "transition-opacity duration-300",
                  active === i ? "opacity-100" : "opacity-0 absolute inset-0"
                )}
              >
                <Image
                  src={tab.src}
                  alt={tab.alt}
                  width={1440}
                  height={900}
                  className="w-full h-auto block"
                />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center bg-[#f9f9f9] aspect-[16/9] gap-4">
              <div className="w-12 h-12 rounded-2xl bg-black/[0.06] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-black/25">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <p className="text-sm text-black/30 font-medium">Screenshot coming soon</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
