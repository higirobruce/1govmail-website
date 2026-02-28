import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ChangeGroup {
  type: "new" | "fix" | "improvement" | "platform";
  label: string;
  items: string[];
}

interface ReleaseEntry {
  version: string;
  date: string;
  badge?: string;
  badgeColor?: string;
  changes: ChangeGroup[];
}

// ── Static releases (shown below any GitHub API releases) ────────────────────

const STATIC_RELEASES: ReleaseEntry[] = [
  {
    version: "1.1.0",
    date: "February 2026",
    changes: [
      {
        type: "new",
        label: "New",
        items: [
          "Task management — create, prioritise, and track tasks directly in the app",
          "Link tasks to emails by subject for full context",
          "Assign tasks to colleagues with an automatic notification email sent via Zimbra",
          "Image support in email signatures — embed inline images that render in all clients",
          "File attachments can now include images with correct inline rendering",
        ],
      },
      {
        type: "improvement",
        label: "Improvements",
        items: [
          "Thread view redesigned with a vertical timeline spine — avatar nodes, collapsed single-line rows, and expanded cards",
          "Email quote stripping — removes embedded reply history from Outlook, Apple Mail, Gmail, and calendar invite formats so each message card shows only new content",
          "Sent messages now persist immediately in the Sent folder without requiring a manual sync",
          "Signature selection and cache invalidation improved — correct signature loads on compose open",
          "Calendar free/busy search tooltip styling and availability overlay refined",
          "Availability timeline tooltips now show busy/tentative block details on hover",
        ],
      },
      {
        type: "fix",
        label: "Bug Fixes",
        items: [
          "Locally deleted drafts no longer reappear after folder refresh",
        ],
      },
    ],
  },
  {
    version: "1.0.0",
    date: "February 2026",
    badge: "Initial Release",
    badgeColor: "bg-green-500/15 text-green-700 border-green-500/20",
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

// ── GitHub release parser ─────────────────────────────────────────────────────

/**
 * Maps conventional-changelog section headings to display types.
 * Angular preset uses these exact heading names.
 */
const SECTION_MAP: Record<string, { type: ChangeGroup["type"]; label: string }> = {
  "Features":               { type: "new",         label: "New" },
  "Bug Fixes":              { type: "fix",          label: "Bug Fixes" },
  "Performance Improvements": { type: "improvement", label: "Improvements" },
  "Reverts":                { type: "fix",          label: "Reverts" },
};

/**
 * Parse a conventional-changelog markdown body (from GitHub Releases) into
 * typed ChangeGroup arrays.
 *
 * Handles lines like:
 *   * **tasks:** add task management feature
 *   * fix download links
 *   * ([abc1234](url)) ...
 */
function parseReleaseBody(body: string): ChangeGroup[] {
  const groups: ChangeGroup[] = [];

  // Split into sections by "### Heading"
  const sections = body.split(/^### /m).filter(Boolean);

  for (const section of sections) {
    const lines = section.trim().split("\n");
    const heading = lines[0].trim();
    const meta = SECTION_MAP[heading];
    if (!meta) continue;

    const items: string[] = [];
    for (const line of lines.slice(1)) {
      // Match bullet lines: "* text" or "- text"
      const match = line.match(/^[*-]\s+(.+)/);
      if (!match) continue;

      let text = match[1];
      // Remove scope: "**tasks:** some text" → "some text"
      text = text.replace(/^\*\*[^*]+\*\*:\s*/, "");
      // Remove markdown links: "[text](url)" → "text"
      text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
      // Remove commit hash refs: "([abc1234]...)" at end
      text = text.replace(/\s*\(\[[a-f0-9]+\][^)]*\)\s*$/, "");
      text = text.trim();
      if (text) items.push(text);
    }

    if (items.length > 0) {
      groups.push({ type: meta.type, label: meta.label, items });
    }
  }

  return groups;
}

/**
 * Fetch GitHub Releases for the 1govmail-mono-repo and convert them to
 * ReleaseEntry objects. Revalidates every hour (ISR) so new releases appear
 * automatically without a full redeploy.
 */
async function getGitHubReleases(): Promise<ReleaseEntry[]> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/higirobruce/1govmail-mono-repo/releases",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return [];

    const data = await res.json() as Array<{
      tag_name: string;
      name: string;
      body: string;
      published_at: string;
      prerelease: boolean;
      draft: boolean;
    }>;

    return data
      .filter((r) => !r.draft && !r.prerelease)
      .map((r) => {
        const version = r.tag_name.replace(/^v/, "");
        const date = new Date(r.published_at).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
        const changes = parseReleaseBody(r.body ?? "");
        return { version, date, changes };
      })
      .filter((r) => r.changes.length > 0);
  } catch {
    return [];
  }
}

// ── Display ───────────────────────────────────────────────────────────────────

const typeColors: Record<string, string> = {
  new:         "bg-blue-500/10 text-blue-600 border-blue-500/20",
  fix:         "bg-orange-500/10 text-orange-600 border-orange-500/20",
  improvement: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  platform:    "bg-black/[0.06] text-black/50 border-black/[0.08]",
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ChangelogPage() {
  const githubReleases = await getGitHubReleases();

  // GitHub releases (newest first) + static initial release pinned at bottom
  const releases: ReleaseEntry[] = [...githubReleases, ...STATIC_RELEASES];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-14">
        <div className="max-w-2xl mx-auto px-6 py-24">

          {/* Header */}
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-black/30 mb-3">
              Changelog
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-[#0a0a0a] mb-3">
              Release notes
            </h1>
            <p className="text-black/50 text-base">
              All notable changes to 1Gov Mail are documented here.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-2 bottom-0 w-px bg-black/[0.06]" />

            <div className="flex flex-col gap-16">
              {releases.map((rel) => (
                <div key={rel.version} className="relative pl-10">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border border-black/[0.10] bg-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-black/30" />
                  </div>

                  {/* Version header */}
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-xl font-semibold text-[#0a0a0a]">
                      v{rel.version}
                    </h2>
                    {rel.badge && (
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full border ${rel.badgeColor}`}
                      >
                        {rel.badge}
                      </span>
                    )}
                    <span className="text-sm text-black/30 ml-auto">
                      {rel.date}
                    </span>
                  </div>

                  {/* Change groups */}
                  <div className="flex flex-col gap-6">
                    {rel.changes.map((group) => (
                      <div key={group.type + group.label}>
                        <span
                          className={`inline-block text-[11px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded border mb-3 ${typeColors[group.type] ?? typeColors.platform}`}
                        >
                          {group.label}
                        </span>
                        <ul className="flex flex-col gap-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-black/60"
                            >
                              <span className="w-1 h-1 rounded-full bg-black/25 flex-shrink-0 mt-[7px]" />
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
