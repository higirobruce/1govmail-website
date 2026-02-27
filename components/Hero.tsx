import Image from "next/image";
import Link from "next/link";
import { CURRENT_VERSION } from "@/lib/releases";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
      {/* Radial gradient glow behind the screenshot */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,0,0,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Badge */}
      <div className="relative z-10 mb-6 flex items-center gap-2 border border-black/[0.10] rounded-full px-4 py-1.5 text-sm text-black/60 bg-black/[0.04]">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
        Version {CURRENT_VERSION} is now available
        <Link
          href="/changelog"
          className="ml-1 text-black/80 hover:text-black underline underline-offset-2 text-xs"
        >
          See what&apos;s new →
        </Link>
      </div>

      {/* Headline */}
      <h1 className="relative z-10 text-center text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] max-w-3xl px-6 text-[#0a0a0a]">
        Government email,{" "}
        <span className="text-black/35">reimagined.</span>
      </h1>

      {/* Subline */}
      <p className="relative z-10 mt-6 text-center text-lg text-black/50 max-w-xl px-6 leading-relaxed">
        A fast, native desktop client for Zimbra. Clean interface, integrated
        calendar, and everything your team needs — in one app.
      </p>

      {/* CTA */}
      <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/download"
          className="flex items-center gap-2 bg-[#0a0a0a] text-white font-medium px-6 py-3 rounded-full hover:bg-[#222] transition-all text-sm shadow-lg shadow-black/10"
        >
          <DownloadIcon />
          Download Free
        </Link>
        <a
          href="#features"
          className="text-sm text-black/50 hover:text-black/80 transition-colors px-4 py-3"
        >
          See features →
        </a>
      </div>

      {/* Platform pills */}
      <div className="relative z-10 mt-4 flex items-center gap-2 text-xs text-black/40">
        <AppleIcon />
        macOS
        <span className="mx-1">·</span>
        <WindowsIcon />
        Windows
        <span className="mx-1">·</span>
        <LinuxIcon />
        Linux
      </div>

      {/* App screenshot */}
      <div className="relative z-10 mt-16 w-full max-w-5xl px-6">
        <div className="screenshot-frame">
          <Image
            src="/screenshots/inbox.png"
            alt="1Gov Mail inbox view"
            width={1440}
            height={900}
            priority
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Fade out at bottom */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #ffffff)",
        }}
      />
    </section>
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
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.6L10.5 4.5V11.5H3V5.6ZM3 18.4L10.5 19.5V12.5H3V18.4ZM11.5 19.6L21 21V12.5H11.5V19.6ZM11.5 4.4V11.5H21V3L11.5 4.4Z" />
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
    </svg>
  );
}
