const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="16" height="13" rx="2" />
        <path d="M2 8l8 5 8-5" />
      </svg>
    ),
    title: "Smart Inbox",
    description:
      "Pinned messages, unread filters, and starred conversations keep your most important emails always within reach.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="15" rx="2" />
        <path d="M7 2v2M13 2v2M2 8h16" />
        <path d="M6 12h2M10 12h2M6 15h2" />
      </svg>
    ),
    title: "Integrated Calendar",
    description:
      "Month, week, day, and agenda views. Overlay up to 5 colleagues' free/busy schedules, see working hours at a glance, and find an open slot for everyone with one click.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h14M3 10h8M3 14h5" />
        <path d="M14 12l2 2 4-4" />
      </svg>
    ),
    title: "Rich Compose",
    description:
      "Bold, italic, lists, links — a full formatting toolbar. Cc/Bcc, attachments, and keyboard shortcuts.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2a5 5 0 0 1 5 5c0 3.5-5 11-5 11S5 10.5 5 7a5 5 0 0 1 5-5z" />
        <circle cx="10" cy="7" r="2" />
      </svg>
    ),
    title: "Zimbra-Powered",
    description:
      "Connects directly to your institution's Zimbra server. No third-party cloud, no data leaves your infrastructure.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="7" r="3" />
        <circle cx="13" cy="13" r="3" />
        <path d="M10 7h7M3 13h7" />
      </svg>
    ),
    title: "Contacts & Labels",
    description:
      "Your full Zimbra address book, synced and searchable. Auto-suggest contacts when composing or assigning tasks. Organise emails with custom labels.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l3 3" />
      </svg>
    ),
    title: "Guided Onboarding",
    description:
      "A built-in interactive tour walks new users through every key feature — inbox, tasks, calendar, and contacts — in under a minute.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="7" height="7" rx="1.5" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" />
      </svg>
    ),
    title: "Task Management",
    description:
      "Create tasks from emails, set due dates, recurring schedules, and email reminders. Attach files, add subtasks, assign to colleagues, and track progress on a kanban board or the My Day view.",
  },
];

const newFeatures = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7" />
        <path d="M10 6v4l2.5 2.5" />
        <path d="M7 2.5L10 1l3 1.5" />
      </svg>
    ),
    title: "Snooze",
    description:
      "Hide any email and have it resurface at the perfect moment — later today, tonight, tomorrow morning, next week, or any custom date and time.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7V3h4" />
        <path d="M3 3l5 5" />
        <path d="M3 7a9 9 0 1 0 9-6" />
      </svg>
    ),
    title: "Undo Send",
    description:
      "A 5-second safety net after every send. Changed your mind? Hit Undo and the message is cancelled before it ever leaves your outbox.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="15" rx="2" />
        <path d="M7 2v2M13 2v2M2 8h16" />
        <circle cx="14" cy="14" r="3" />
        <path d="M14 12.5v1.5l1 1" />
      </svg>
    ),
    title: "Scheduled Send",
    description:
      "Compose now, deliver later. Queue a message to go out at any future date and time — even while you're offline.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="12" height="16" rx="2" />
        <path d="M7 7h6M7 10h6M7 13h4" />
      </svg>
    ),
    title: "Email Templates",
    description:
      "Save your most-used replies as reusable templates and insert them into any compose window from the toolbar in a single click.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5h14M5 10h10M7 15h6" />
      </svg>
    ),
    title: "Mail Rules",
    description:
      "Build powerful if/then filters that automatically move, label, or forward incoming messages — keeping your inbox organised without manual effort.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 3a5 5 0 0 1 5 5c0 2-.5 3.5-1.5 5H6.5C5.5 11.5 5 10 5 8a5 5 0 0 1 5-5z" />
        <path d="M7.5 13v1a2.5 2.5 0 0 0 5 0v-1" />
        <line x1="3" y1="3" x2="17" y2="17" />
      </svg>
    ),
    title: "Mute Conversations",
    description:
      "Silence busy threads you no longer need to follow. Muted conversations stay archived and out of your way — unmute any time.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="13" rx="1.5" />
        <path d="M6 18h8M10 16v2" />
      </svg>
    ),
    title: "Print View",
    description:
      "Generate a clean, formatted print-ready version of any email thread — no application chrome, just the content exactly as it should appear on paper.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="5" height="5" rx="1" />
        <rect x="2" y="11" width="5" height="5" rx="1" />
        <path d="M4.5 6.5l1 1 2-2" />
        <path d="M9.5 7h8.5M9.5 14h8.5" />
      </svg>
    ),
    title: "Bulk Actions",
    description:
      "Select multiple messages with a checkbox and mark them all read, move them, or delete them in a single action using the floating action bar.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h12M4 10h8" />
        <path d="M13 14l2 2 4-4" />
        <path d="M7 14H4" />
      </svg>
    ),
    title: "Spell Check",
    description:
      "Native browser spell check is active inside the compose editor, flagging typos as you type so every message goes out polished.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative bg-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-black/40 mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0a0a0a]">
            Everything your team needs,
            <br />
            <span className="text-black/40">nothing they don&apos;t.</span>
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.06] rounded-2xl overflow-hidden border border-black/[0.06]">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 hover:bg-[#fafafa] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-[#111] mb-5 group-hover:bg-[#ebebeb] transition-colors">
                {f.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── New in v1.4.0 ──────────────────────────────────────────── */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 border border-black/[0.10] rounded-full px-3.5 py-1 text-xs font-semibold text-black/50 bg-black/[0.03] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
              New in v1.4.0
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#0a0a0a]">
              Nine new ways to work smarter
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.06] rounded-2xl overflow-hidden border border-black/[0.06]">
            {newFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 hover:bg-[#fafafa] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f4f4f5] flex items-center justify-center text-[#111] mb-5 group-hover:bg-[#ebebeb] transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-black/50 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
