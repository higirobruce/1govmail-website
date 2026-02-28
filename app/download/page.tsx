"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  releases,
  detectPlatform,
  CURRENT_VERSION,
  RELEASE_DATE,
  type Platform,
  type Release,
} from "@/lib/releases";

const platformIcons: Record<Platform, React.ReactNode> = {
  "mac-arm": <AppleIcon />,
  "mac-intel": <AppleIcon />,
  windows: <WindowsIcon />,
  linux: <LinuxIcon />,
};

const requirements: Record<Platform, string[]> = {
  "mac-arm": ["macOS 12 Monterey or later", "Apple Silicon (M1 or newer)", "~250 MB disk space"],
  "mac-intel": ["macOS 12 Monterey or later", "Intel x64 processor", "~250 MB disk space"],
  windows: ["Windows 10 version 1903 or later", "x64 processor", "~300 MB disk space"],
  linux: ["glibc 2.28+ (Ubuntu 20.04 / Debian 10 or newer)", "x64 processor", "~280 MB disk space"],
};

export default function DownloadPage() {
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>("mac-arm");
  const [selected, setSelected] = useState<Platform>("mac-arm");
  const [autoDetected, setAutoDetected] = useState(false);

  useEffect(() => {
    const p = detectPlatform(navigator.userAgent);
    setDetectedPlatform(p);
    setSelected(p);
    setAutoDetected(true);
  }, []);

  const selectedRelease = releases.find((r) => r.platform === selected)!;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-14">
        <div className="max-w-4xl mx-auto px-6 py-24">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-black/30 mb-3">
              Download
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0a0a0a] mb-4">
              1Gov Mail
            </h1>
            <p className="text-black/50 text-base">
              Version {CURRENT_VERSION} · Released {RELEASE_DATE}
            </p>
          </div>

          {/* Auto-detected notice */}
          {autoDetected && (
            <div className="flex items-center gap-2 justify-center mb-10 text-sm text-black/40">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              We detected your platform:{" "}
              <span className="text-black/70 font-medium">
                {selectedRelease.label} — {selectedRelease.sublabel}
              </span>
            </div>
          )}

          {/* Platform selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {releases.map((r) => (
              <button
                key={r.platform}
                onClick={() => setSelected(r.platform)}
                className={clsx(
                  "group flex flex-col items-center gap-2 p-5 rounded-xl border transition-all text-left",
                  selected === r.platform
                    ? "border-black/30 bg-black/[0.06]"
                    : "border-black/[0.07] hover:border-black/20 hover:bg-black/[0.03]"
                )}
              >
                <span
                  className={clsx(
                    "transition-colors",
                    selected === r.platform ? "text-[#0a0a0a]" : "text-black/40 group-hover:text-black/60"
                  )}
                >
                  {platformIcons[r.platform]}
                </span>
                <span
                  className={clsx(
                    "text-sm font-medium transition-colors",
                    selected === r.platform ? "text-[#0a0a0a]" : "text-black/60"
                  )}
                >
                  {r.label}
                </span>
                <span className="text-[11px] text-black/40 text-center leading-tight">
                  {r.sublabel}
                </span>
                {r.platform === detectedPlatform && r.available && (
                  <span className="text-[10px] text-green-600 font-medium">
                    Recommended
                  </span>
                )}
                {!r.available && (
                  <span className="text-[10px] text-black/30 font-medium">
                    Coming soon
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Download card */}
          <div className="border border-black/[0.08] rounded-2xl p-8 bg-black/[0.02] mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="text-lg font-semibold text-[#0a0a0a] mb-1">
                  1Gov Mail {CURRENT_VERSION} for {selectedRelease.label}
                </h2>
                <p className="text-sm text-black/50">
                  {selectedRelease.sublabel} · {selectedRelease.ext} installer · {selectedRelease.size}
                </p>
              </div>
              {selectedRelease.available ? (
                <a
                  href={selectedRelease.url}
                  className="flex-shrink-0 flex items-center gap-2.5 bg-[#0a0a0a] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#222] transition-all text-sm shadow-lg shadow-black/10"
                >
                  <DownloadIcon />
                  Download {selectedRelease.ext}
                </a>
              ) : (
                <div className="flex-shrink-0 flex items-center gap-2.5 bg-black/[0.06] text-black/30 font-semibold px-6 py-3 rounded-xl text-sm cursor-not-allowed">
                  Coming soon
                </div>
              )}
            </div>

            {/* System requirements */}
            <div className="mt-8 pt-6 border-t border-black/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-3">
                System Requirements
              </p>
              <ul className="flex flex-col gap-2">
                {requirements[selected].map((req) => (
                  <li key={req} className="flex items-center gap-2 text-sm text-black/50">
                    <span className="w-1 h-1 rounded-full bg-black/30 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Installation notes */}
          <InstallNote platform={selected} />

          {/* Footer link */}
          <div className="mt-12 text-center">
            <Link href="/changelog" className="text-sm text-black/40 hover:text-black/70 transition-colors">
              View release notes for v{CURRENT_VERSION} →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function InstallNote({ platform }: { platform: Platform }) {
  const notes: Record<Platform, React.ReactNode> = {
    "mac-arm": (
      <p>
        Open the <code>.dmg</code>, drag <strong>1Gov Mail</strong> to your{" "}
        <strong>Applications</strong> folder, then double-click to launch. On
        first launch, right-click → Open if macOS shows a security prompt.
      </p>
    ),
    "mac-intel": (
      <p>
        Open the <code>.dmg</code>, drag <strong>1Gov Mail</strong> to your{" "}
        <strong>Applications</strong> folder, then double-click to launch. On
        first launch, right-click → Open if macOS shows a security prompt.
      </p>
    ),
    windows: (
      <p>
        Run the <code>.exe</code> installer. It installs silently for the current
        user (no admin rights required). A shortcut is added to your Start Menu
        and Desktop automatically.
      </p>
    ),
    linux: (
      <p>
        Make the AppImage executable:{" "}
        <code>chmod +x 1GovMail-{CURRENT_VERSION}.AppImage</code>, then run it
        directly. No installation needed. Optionally integrate with your desktop
        using <code>appimaged</code>.
      </p>
    ),
  };

  return (
    <div className="border border-black/[0.07] rounded-xl p-6 bg-black/[0.02]">
      <p className="text-xs font-semibold uppercase tracking-widest text-black/30 mb-3">
        Installation
      </p>
      <div className="text-sm text-black/50 leading-relaxed [&_code]:bg-black/[0.06] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-black/70 [&_code]:font-mono [&_code]:text-xs [&_strong]:text-black/70 [&_strong]:font-medium">
        {notes[platform]}
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v8M5 7l3 3 3-3" />
      <path d="M2.5 12.5h11" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.6L10.5 4.5V11.5H3V5.6ZM3 18.4L10.5 19.5V12.5H3V18.4ZM11.5 19.6L21 21V12.5H11.5V19.6ZM11.5 4.4V11.5H21V3L11.5 4.4Z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.5 2c-2.76 0-5 2.24-5 5 0 1.34.53 2.55 1.38 3.44L7.5 14H10l.5-2h3l.5 2h2.5l-1.38-3.56C15.97 9.55 16.5 8.34 16.5 7c0-2.76-1.79-5-4-5zm0 2c1.1 0 2 1.34 2 3s-.9 3-2 3-2-1.34-2-3 .9-3 2-3zM8 16l-1.5 4h12L17 16H8z" />
    </svg>
  );
}
