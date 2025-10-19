"use client";
import { useState, useRef } from "react";
import { Briefcase, IdCard, FileText, Users, File, Presentation, Gavel, BarChart, MonitorSmartphone, MailCheck, LayoutDashboard, ShieldCheck, Cloud, Plug, House, KeyRound, AreaChart, Scale, MapPinned } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Gentle open/close with delay
  const handleMouseEnter = (menu: string) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex items-center justify-between rounded-3xl bg-white shadow-md ring-1 ring-neutral-200 px-8 py-4">
          {/* === Logo === */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/Goot Logo.svg" alt="Goot Group Logo" className="w-32 h-auto"/>
          </div>
          <style jsx>{`
            .brand-text-logo {
              font-family: 'Arial', sans-serif;
              font-size: 2em;
              font-weight: bold;
              color: currentColor;
              text-align: center;
            }
          `}</style>

          {/* === Nav Links - Center === */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {/* === Company Formation === */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`transition-all px-4 py-2 rounded-full text-sm font-medium cursor-pointer relative ${
                  openMenu === "company"
                    ? "bg-[#065389] text-white"
                    : "text-neutral-800 hover:text-blue-600"
                }`}
              >
                Company Formation
                <span className="absolute left-0 right-0 bottom-[-12px] h-3 bg-transparent"></span>
              </button>
              {openMenu === "company" && (
                <div
                  className="absolute left-1/2 top-[4rem] -translate-x-1/2 w-[1000px] rounded-2xl bg-white p-10 shadow-2xl ring-1 ring-neutral-200 transition-all duration-200"
                  onMouseEnter={() => handleMouseEnter("company")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-14">
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Core Services
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <Briefcase />,
                            title: "Company Setup & Licensing",
                            desc: "Mainland, Free Zone, or Offshore",
                            href: "/services/companyformation",
                          },
                          {
                            icon: <IdCard />,
                            title: "Banking, Visas & PRO Support",
                            desc: "End-to-end admin and approvals",
                            href: "/services/companyformation#paths",
                          },
                          {
                            icon: <FileText />,
                            title: "Tax, Compliance & Advisory",
                            desc: "Stay legal, efficient, and protected",
                            href: "/services/companyformation#included",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                          >
                            <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                              {item.icon}
                            </div>
                            <a href={item.href}>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Support & Advisory
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            title: "Mainland vs Free Zone Guide",
                            desc: "Choose the right licence type",
                            href: "/blog/mainland-vs-free-zone-guide-choose-the-right-licence-type",
                          },
                          {
                            title: "Legal Structures Explained",
                            desc: "We help you pick your path",
                            href: "/blog/legal-structures-explained-we-help-you-pick-your-path",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                          >
                            <Scale className="flex-shrink-0 text-neutral-700 group-hover:text-white" />
                            <a href={item.href}>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Other
                      </h3>
                      <a
                        href="/faq"
                        className="cursor-pointer rounded-xl p-3 hover:bg-[#065389] transition-all group block"
                      >
                        <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                          FAQ
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* === HR Services === */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("hr")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`transition-all px-4 py-2 rounded-full text-sm font-medium cursor-pointer relative ${
                  openMenu === "hr"
                    ? "bg-[#065389] text-white"
                    : "text-neutral-800 hover:text-blue-600"
                }`}
              >
                HR Services
                <span className="absolute left-0 right-0 bottom-[-12px] h-3 bg-transparent"></span>
              </button>
              {openMenu === "hr" && (
                <div
                  className="absolute left-1/2 top-[4rem] -translate-x-1/2 w-[1000px] rounded-2xl bg-white p-10 shadow-2xl ring-1 ring-neutral-200 transition-all duration-200"
                  onMouseEnter={() => handleMouseEnter("hr")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-14">
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Core Services
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <Users />,
                            title: "Talent Search & Placement",
                            desc: "C-Level to junior staffing needs",
                            href: "/services/hr",
                          },
                          {
                            icon: <File />,
                            title: "Payroll, Contracts & Visas",
                            desc: "Full HR ops, locally compliant",
                            href: "/services/hr#all-services",
                          },
                          {
                            icon: <Presentation />,
                            title: "HR Policies & Advisory",
                            desc: "Guides, templates, legal support",
                            href: "/services/hr#all-services",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                          >
                            <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                              {item.icon}
                            </div>
                            <a href={item.href}>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Support & Advisory
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <Gavel />,
                            title: "India Labour Law Guidance",
                            desc: "Compliant hiring and retention",
                            href: "/blog/navigating-INDIA-labour-law-your-complete-guide-to-compliant-hiring-and-retention",
                          },
                          {
                            icon: <BarChart />,
                            title: "Performance Tools & Reviews",
                            desc: "KPIs, goal-setting, appraisal tools",
                            href: "/blog/mastering-performance-management-essential-tools-and-strategies-for-modern-organizations",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                          >
                            <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                              {item.icon}
                            </div>
                            <a href={item.href}>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Other
                      </h3>
                      <a
                        href="/faq"
                        className="cursor-pointer rounded-xl p-3 hover:bg-[#065389] transition-all group block"
                      >
                        <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                          FAQ
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* === IT Services === */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("it")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`transition-all px-4 py-2 rounded-full text-sm font-medium cursor-pointer relative ${
                  openMenu === "it"
                    ? "bg-[#065389] text-white"
                    : "text-neutral-800 hover:text-blue-600"
                }`}
              >
                IT Services
                <span className="absolute left-0 right-0 bottom-[-12px] h-3 bg-transparent"></span>
              </button>
              {openMenu === "it" && (
                <div
                  className="absolute left-1/2 top-[4rem] -translate-x-1/2 w-[1000px] rounded-2xl bg-white p-10 shadow-2xl ring-1 ring-neutral-200 transition-all duration-200"
                  onMouseEnter={() => handleMouseEnter("it")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-14">
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Core Services
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <MonitorSmartphone />,
                            title: "Web Design & Development",
                            desc: "Custom business websites & landing pages",
                            href: "/services/it",
                          },
                          {
                            icon: <MailCheck />,
                            title: "Business Email Setup",
                            desc: "Domain-based, secure email accounts",
                            href: "/services/it#services",
                          },
                          {
                            icon: <LayoutDashboard />,
                            title: "CRM, POS & ERP Systems",
                            desc: "Streamline operations with tailored platforms",
                            href: "/services/it#services",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                          >
                            <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                              {item.icon}
                            </div>
                            <a href={item.href}>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Support & Advisory
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <ShieldCheck />,
                            title: "Cybersecurity & Backups",
                            desc: "Protect your data and uptime",
                            href: "#",
                          },
                          {
                            icon: <Cloud />,
                            title: "Cloud Hosting & Domains",
                            desc: "Fast, scalable India hosting solutions",
                            href: "#",
                          },
                          {
                            icon: <Plug />,
                            title: "Software Integrations",
                            desc: "Connect CRMs, booking tools, and more",
                            href: "#",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                          >
                            <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                              {item.icon}
                            </div>
                            <a href={item.href}>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Other
                      </h3>
                      <a
                        href="/faq"
                        className="cursor-pointer rounded-xl p-3 hover:bg-[#065389] transition-all group block"
                      >
                        <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                          FAQ
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* === Real Estate === */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("realestate")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`transition-all px-4 py-2 rounded-full text-sm font-medium cursor-pointer relative ${
                  openMenu === "realestate"
                    ? "bg-[#065389] text-white"
                    : "text-neutral-800 hover:text-blue-600"
                }`}
              >
                Real Estate
                <span className="absolute left-0 right-0 bottom-[-12px] h-3 bg-transparent"></span>
              </button>
              {openMenu === "realestate" && (
                <div
                  className="absolute left-1/2 top-[4rem] -translate-x-1/2 w-[1000px] rounded-2xl bg-white p-10 shadow-2xl ring-1 ring-neutral-200 transition-all duration-200"
                  onMouseEnter={() => handleMouseEnter("realestate")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-14">
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Core Services
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <House />,
                            title: "Property Acquisition (Buy)",
                            desc: "Off-plan or ready-to-move homes",
                            href: "/services/realestate",
                          },
                          {
                            icon: <KeyRound />,
                            title: "Leasing & Tenancy Services",
                            desc: "Residential and commercial leasing",
                            href: "/services/realestate",
                          },
                          {
                            icon: <AreaChart />,
                            title: "Investor Advisory & Reports",
                            desc: "Strategy, ROI, and market insight",
                            href: "/services/realestate",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                          >
                            <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                              {item.icon}
                            </div>
                            <a href={item.href}>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Support & Advisory
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            icon: <Scale />,
                            title: "RERA-Compliant Process",
                            desc: "Legal support from licensed agents",
                            href: "/blog/ensuring-rera-compliance-the-critical-role-of-licensed-real-estate-professionals-in-dubai",
                          },
                          {
                            icon: <MapPinned />,
                            title: "Dubai Area Guides",
                            desc: "Find the right location for you",
                            href: "/blog/dubai-area-guides-finding-your-perfect-neighborhood-in-the-city-of-dreams",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                          >
                            <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                              {item.icon}
                            </div>
                            <a href={item.href}>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Other
                      </h3>
                      <a
                        href="/faq"
                        className="cursor-pointer rounded-xl p-3 hover:bg-[#065389] transition-all group block"
                      >
                        <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                          FAQ
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* === Information === */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("information")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`transition-all px-4 py-2 rounded-full text-sm font-medium cursor-pointer relative ${
                  openMenu === "information"
                    ? "bg-[#065389] text-white"
                    : "text-neutral-800 hover:text-blue-600"
                }`}
              >
                Information
                <span className="absolute left-0 right-0 bottom-[-12px] h-3 bg-transparent"></span>
              </button>
              {openMenu === "information" && (
                <div
                  className="absolute left-1/2 top-[4rem] -translate-x-1/2 w-[300px] rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-neutral-200 transition-all duration-200"
                  onMouseEnter={() => handleMouseEnter("information")}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="space-y-3">
                    {[
                      { title: "Blog", href: "/blog" },
                      { title: "About", href: "/about" },
                      { title: "Careers", href: "/careers" },
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="cursor-pointer rounded-xl p-3 hover:bg-[#065389] transition-all group"
                      >
                        <a href={item.href}>
                          <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                            {item.title}
                          </p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* === Contact Button === */}
          <a
            href="/contact"
            className="rounded-full bg-[#23A3FF] hover:bg-[#065389] px-7 py-2.5 text-sm font-medium text-white transition cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}