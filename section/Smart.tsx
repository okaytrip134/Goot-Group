"use client";
import { ArrowRight } from "lucide-react";

export default function SmartCombos() {
  const combos = [
    {
      title: "Start a Business + Open a Business Bank Account",
      desc:
        "Launch your UAE company with full licensing and fast-tracked bank account setup—handled start to finish by our experts.",
    },
    {
      title: "Set Up a Company + Hire & Onboard Talent",
      desc:
        "Form your business and immediately build your team. We manage recruitment, visas, and HR documentation in one smooth process.",
    },
    {
      title: "Expand to the UAE + Stay Compliant",
      desc:
        "Enter the UAE market with proper licensing, payroll, and visa structures handled for you.",
    },
    {
      title: "Launch Your Startup + Build Your Online Presence",
      desc:
        "Get licensed and get digital. We’ll register your company and deliver a website, email setup, and CRM to get you running fast.",
    },
    {
      title: "Start Your Company + Lease a Flexible Workspace",
      desc:
        "We’ll register your company and secure a physical or virtual office space that fits your business goals.",
    },
  ];

  return (
    <section className="bg-[#065389] text-white py-20 md:py-24 relative z-10">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-40 items-start">
          {/* LEFT: text + list */}
          <div>
            <p className="text-[11px] tracking-[0.18em] font-semibold uppercase text-white/70 mb-6">
              Smart Service Combinations That Work
            </p>

            <h2 className="text-[28px] leading-tight md:text-[36px] font-medium mb-10">
              Designed for What
              <br className="hidden sm:block" />
              You’re Really Trying to Do
            </h2>

            <ul className="space-y-6">
              {combos.map((c, i) => (
                <li key={i} className="pb-6 border-b border-dashed border-white/30 last:border-none">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[15px] md:text-[16px] font-semibold mb-1">
                        {c.title}
                      </p>
                      <p className="text-sm leading-relaxed text-white/85">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: rounded video */}
          <div className="rounded-3xl overflow-hidden bg-black/20 aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
              poster="/smart-combos-poster.jpg"
            >
              <source src="/smart-combos.mp4" type="video/mp4" />
              {/* add WebM if you have it */}
            </video>
          </div>
        </div>

        {/* bottom row: prompt + CTA pill */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
          <p className="text-white/90 text-lg text-center md:text-left">
            Not sure which combination fits your needs best?
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-white text-[#0B3A33] text-sm font-medium px-5 py-2 shadow-sm hover:bg-white/90 transition"
          >
            Let’s Plan It Together
          </a>
        </div>
      </div>
    </section>
  );
}
