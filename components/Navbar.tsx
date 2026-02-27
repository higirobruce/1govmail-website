"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { CURRENT_VERSION } from "@/lib/releases";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-black/[0.06]" />

      <nav className="relative max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo dark={true} />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/changelog"
            className="text-sm text-black/50 hover:text-black/90 transition-colors"
          >
            Changelog
          </Link>
          <Link
            href="/download"
            className="flex items-center gap-2 bg-[#0a0a0a] text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-[#222] transition-colors"
          >
            Download
            <span className="text-[10px] font-medium text-white/50">
              v{CURRENT_VERSION}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
