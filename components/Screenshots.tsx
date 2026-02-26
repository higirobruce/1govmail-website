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
  },
  {
    id: "reading",
    label: "Reading",
    description: "Full message view with attachment previews, overview metadata, and one-click reply.",
    src: "/screenshots/reading.png",
    alt: "1Gov Mail email reading view",
  },
  {
    id: "compose",
    label: "Compose",
    description: "Rich text formatting, Cc/Bcc, file attachments, and ⌘↵ to send.",
    src: "/screenshots/compose.png",
    alt: "1Gov Mail compose window",
  },
  {
    id: "calendar",
    label: "Calendar",
    description: "Month, week, and day views with real-time availability checking for your colleagues.",
    src: "/screenshots/calendar.png",
    alt: "1Gov Mail calendar view",
  },
];

export function Screenshots() {
  const [active, setActive] = useState(0);

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
        <div className="flex items-center justify-center gap-1 mb-10">
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
          {tabs[active].description}
        </p>

        {/* Screenshot */}
        <div className="relative rounded-2xl overflow-hidden border border-black/[0.08] shadow-2xl shadow-black/10">
          {tabs.map((tab, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
