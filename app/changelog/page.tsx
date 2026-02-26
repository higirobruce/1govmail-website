import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const releases = [
  {
    version: "1.0.0",
    date: "February 2026",
    badge: "Initial Release",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/20",
    changes: [
      {
        type: "new",
        label: "New",
        items: [
          "Full Zimbra SOAP integration — connect to any Zimbra server",
          "Three-panel inbox with pinned, unread, and starred filters",
          "Rich-text compose with bold, italic, lists, and hyperlinks",
          "Cc / Bcc support and multi-file attachments",
          "Integrated calendar with month, work-week, week, day, and year views",
          "Availability checker — see free/busy slots for any colleague",
          "Contacts synced from your Zimbra address book",
          "System tray support — stays running quietly in the background",
          "Native OS notifications with unread badge count (macOS Dock)",
          "Two-factor authentication (2FA) support",
          "Labels / folder management",
          "Archive and Trash with restore",
          "Keyboard shortcut ⌘↵ (Ctrl+Enter on Windows) to send",
        ],
      },
      {
        type: "platform",
        label: "Platforms",
        items: [
          "macOS — Apple Silicon (arm64) and Intel (x64) universal support",
          "Windows — x64 installer, installs per-user without admin rights",
          "Linux — AppImage (x64)",
        ],
      },
    ],
  },
];

const typeColors: Record<string, string> = {
  new: "bg-blue-500/10 text-blue-400 border-blue-500/15",
  fix: "bg-orange-500/10 text-orange-400 border-orange-500/15",
  improvement: "bg-purple-500/10 text-purple-400 border-purple-500/15",
  platform: "bg-white/[0.07] text-white/50 border-white/[0.08]",
};

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] pt-14">
        <div className="max-w-2xl mx-auto px-6 py-24">

          {/* Header */}
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
              Changelog
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white mb-3">
              Release notes
            </h1>
            <p className="text-white/50 text-base">
              All notable changes to 1Gov Mail are documented here.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-0 w-px bg-white/[0.06]" />

            <div className="flex flex-col gap-16">
              {releases.map((rel) => (
                <div key={rel.version} className="relative pl-10">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-white/[0.12] bg-[#0a0a0a] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                  </div>

                  {/* Version header */}
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-xl font-semibold text-white">
                      v{rel.version}
                    </h2>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full border ${rel.badgeColor}`}
                    >
                      {rel.badge}
                    </span>
                    <span className="text-sm text-white/30 ml-auto">
                      {rel.date}
                    </span>
                  </div>

                  {/* Change groups */}
                  <div className="flex flex-col gap-6">
                    {rel.changes.map((group) => (
                      <div key={group.type}>
                        <span
                          className={`inline-block text-[11px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded border mb-3 ${typeColors[group.type] ?? typeColors.platform}`}
                        >
                          {group.label}
                        </span>
                        <ul className="flex flex-col gap-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-white/60"
                            >
                              <span className="w-1 h-1 rounded-full bg-white/25 flex-shrink-0 mt-[7px]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
