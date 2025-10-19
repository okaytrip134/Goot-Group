"use client";
import { Briefcase, Users, Home, Cpu } from "lucide-react";
import Link from "next/link";

export default function CoreServices() {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-neutral-800" />,
      title: "Company Formation",
      desc: "Set up your UAE business fast with full licensing, visa, and banking support—no guesswork required.",
      link: "Learn More",
    },
    {
      icon: <Users className="w-8 h-8 text-neutral-800" />,
      title: "HR Services",
      desc: "Find top talent and manage payroll, compliance, and HR with expert support from day one.",
      link: "Learn More",
    },
    {
      icon: <Home className="w-8 h-8 text-neutral-800" />,
      title: "Real Estate",
      desc: "Buy, lease or invest in high-yield Dubai properties—guided by licensed advisors who know the market.",
      link: "Coming Soon",
    },
    {
      icon: <Cpu className="w-8 h-8 text-neutral-800" />,
      title: "IT Services",
      desc: "Launch with the tech tools you need—websites, emails, CRM systems, and secure hosting.",
      link: "Learn More",
    },
  ];

  return (
    <section className="py-24 bg-white z-10 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-center text-sm font-semibold tracking-widest text-neutral-700 uppercase mb-12">
          Explore Our Core Business Services in the UAE
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-dashed border-neutral-300 rounded-3xl overflow-hidden">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between gap-6 p-8 border-neutral-300 ${
                idx < 3 ? "sm:border-r border-dashed" : ""
              } ${
                idx < 2 ? "lg:border-r border-dashed" : ""
              } ${
                idx < 4 ? "border-b sm:border-b-0 lg:border-b-0" : ""
              }`}
            >
              <div className="space-y-4">
                {service.icon}
                <h3 className="text-sm font-semibold tracking-widest uppercase text-neutral-800">
                  {service.title}
                </h3>
                <p className="text-neutral-700 text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <Link
                href="#"
                className="mt-4 text-sm font-medium underline underline-offset-4 text-neutral-800 hover:text-red-600"
              >
                {service.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
