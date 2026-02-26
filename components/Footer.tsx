import Link from "next/link";
import { Logo } from "./Logo";
import { CURRENT_VERSION } from "@/lib/releases";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-xs text-white/30 max-w-xs leading-relaxed">
              A native desktop email client for government institutions,
              powered by Zimbra.
            </p>
            <p className="text-xs text-white/20">
              Made with care by{" "}
              <span className="text-white/40 font-medium">RISA</span>
              {" "}— Rwanda Information Society Authority
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25">
                Product
              </p>
              <Link href="/#features" className="text-white/45 hover:text-white/80 transition-colors">
                Features
              </Link>
              <Link href="/download" className="text-white/45 hover:text-white/80 transition-colors">
                Download
              </Link>
              <Link href="/changelog" className="text-white/45 hover:text-white/80 transition-colors">
                Changelog
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25">
                Support
              </p>
              <a
                href="mailto:support@risa.gov.rw"
                className="text-white/45 hover:text-white/80 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Rwanda Information Society Authority. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            v{CURRENT_VERSION}
          </p>
        </div>
      </div>
    </footer>
  );
}
