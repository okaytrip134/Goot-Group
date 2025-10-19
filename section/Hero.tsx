"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="fixed inset-0 h-screen w-full overflow-hidden z-0">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.6]"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-dubai.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-end px-6 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-[28px] md:text-[52px] font-light leading-[1.2] text-white drop-shadow-md">
            Your Partner of <br /> Choice in India
          </h1>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-[#D50000] px-7 py-3 text-sm font-medium text-white shadow-md hover:bg-[#B80000] transition"
          >
            Get Expert Advice Today
          </Link>
        </div>
      </div>
    </section>
  );
}
