"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative z-10 w-full py-32 rounded-[24px] overflow-hidden  bg-black text-center text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/Cta.jpeg"
          alt="Dubai Building"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
      </div>

      {/* Overlay for darker tone */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative dotted circles */}
      <div className="absolute w-[500px] h-[500px] border border-white/20 rounded-full top-[-200px] left-[-150px]" />
      <div className="absolute w-[600px] h-[600px] border border-white/20 rounded-full bottom-[-250px] right-[-200px]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <p className="uppercase tracking-[0.15em] text-[12px] font-semibold mb-4 text-neutral-300">
          Ready to take your next step?
        </p>
        <h2 className="text-[28px] md:text-[40px] font-medium leading-snug mb-10">
          Let’s launch, grow, or optimise <br className="hidden sm:block" />
          your business—together.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="bg-white text-neutral-900 font-medium rounded-full px-6 py-3 text-sm md:text-base flex items-center gap-2 hover:bg-neutral-200 transition">
            Start Your Company
            <ArrowRight className="w-4 h-4" />
          </button>
           <button className="bg-[#23A3FF] text-white font-medium rounded-full px-6 py-3 text-sm md:text-base flex items-center gap-2 hover:bg-[#065389] transition">
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
