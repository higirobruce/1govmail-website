"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { releases, detectPlatform, CURRENT_VERSION, RELEASE_DATE, type Platform } from "@/lib/releases";

const platformIcons: Record<Platform, React.ReactNode> = {
  "mac-arm": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  "mac-intel": (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  windows: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.6L10.5 4.5V11.5H3V5.6ZM3 18.4L10.5 19.5V12.5H3V18.4ZM11.5 19.6L21 21V12.5H11.5V19.6ZM11.5 4.4V11.5H21V3L11.5 4.4Z" />
    </svg>
  ),
  linux: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.5 2c-2.76 0-5 2.24-5 5 0 1.34.53 2.55 1.38 3.44L7.5 14H10l.5-2h3l.5 2h2.5l-1.38-3.56C15.97 9.55 16.5 8.34 16.5 7c0-2.76-1.79-5-4-5zm0 2c1.1 0 2 1.34 2 3s-.9 3-2 3-2-1.34-2-3 .9-3 2-3zM8 16l-1.5 4h12L17 16H8z" />
    </svg>
  ),
};

export function DownloadSection() {
  const [detectedPlatform, setDetectedPlatform] = useState<Platform>("mac-arm");

  useEffect(() => {
    setDetectedPlatform(detectPlatform(navigator.userAgent));
  }, []);

  const primary = releases.find((r) => r.platform === detectedPlatform) ?? releases[0];
  const others = releases.filter((r) => r.platform !== detectedPlatform);

  return (
    <section
      id="download"
      className="relative bg-[#0a0a0a] py-28 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-3">
          Download
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
          Available for all platforms
        </h2>
        <p className="text-white/50 mb-10 text-base leading-relaxed">
          Free for all government institutions. Version {CURRENT_VERSION} · Released {RELEASE_DATE}.
        </p>

        {/* Primary CTA — auto-detected platform */}
        <a
          href={primary.url}
          className="inline-flex items-center gap-3 bg-white text-[#0a0a0a] font-semibold px-8 py-4 rounded-2xl hover:bg-white/90 transition-all text-base shadow-lg shadow-white/10 mb-3"
        >
          {platformIcons[primary.platform]}
          Download for {primary.label}
          <span className="text-[#0a0a0a]/40 text-sm font-normal">
            {primary.sublabel}
          </span>
          <DownloadArrow />
        </a>

        <p className="text-xs text-white/30 mb-10">{primary.ext} · {primary.size}</p>

        {/* Other platforms */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {others.map((r) => (
            <a
              key={r.platform}
              href={r.url}
              className="group flex flex-col items-center gap-2 border border-white/[0.08] rounded-xl p-5 hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              <span className="text-white/40 group-hover:text-white/70 transition-colors">
                {platformIcons[r.platform]}
              </span>
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                {r.label}
              </span>
              <span className="text-xs text-white/30">{r.sublabel}</span>
              <span className="text-[11px] text-white/20 mt-1">
                {r.ext} · {r.size}
              </span>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-white/25 leading-relaxed">
          Distributed internally by the Rwanda Information Society Authority (RISA).
          <br />
          By downloading, you agree to use this software in accordance with your
          institution&apos;s IT policies.
        </p>
      </div>
    </section>
  );
}

function DownloadArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-1"
    >
      <path d="M8 2v8M5 7l3 3 3-3" />
      <path d="M2.5 12.5h11" />
    </svg>
  );
}
