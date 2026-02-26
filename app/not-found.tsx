import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-6 pt-14">
        <p className="text-8xl font-bold text-white/[0.06] mb-4 select-none">
          404
        </p>
        <h1 className="text-2xl font-semibold text-white mb-2">
          Page not found
        </h1>
        <p className="text-white/50 mb-8 text-sm">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-white text-[#0a0a0a] font-medium px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-colors"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
