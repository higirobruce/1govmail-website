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
      "Full month, week, and day views. Overlay colleagues' free/busy schedules and find an open slot for everyone with one click.",
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
      "Your full Zimbra address book, synced and searchable. Organise emails with custom labels.",
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
      "Create tasks from emails, assign to colleagues, set reminders, attach files, and track progress on a kanban board — all without leaving the app.",
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
      </div>
    </section>
  );
}
