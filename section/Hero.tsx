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
      <div className="relative z-10 mx-auto flex h-full max-w-full items-end px-24 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-[70px] md:text-[70px] font-light leading-[1.1] text-white drop-shadow-md">
            Your Partner of <br /> Choice in India
          </h1>

          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full  px-7 py-3 text-sm text-[16px] text-white shadow-md bg-[#065389] hover:bg-[#23A3FF] transition"
          >
            Get Expert Advice Today
          </Link>
        </div>
      </div>
    </section>
  );
}
