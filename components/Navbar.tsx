"use client";
import { useState, useRef } from "react";
import {
  MonitorSmartphone, MailCheck, LayoutDashboard,
  ShieldCheck, Cloud, Plug,
} from "lucide-react";

const navLinks = [
  {
    label: "Company Formation",
    menu: "company",
    submenu: {
      core: [
        {
          icon: MonitorSmartphone,
          title: "Private Limited Company",
          desc: "Register your Pvt Ltd company easily",
          href: "/services/company/private-limited",
        },
        {
          icon: MailCheck,
          title: "LLP Registration",
          desc: "Form your LLP with expert support",
          href: "/services/company/llp",
        },
        {
          icon: LayoutDashboard,
          title: "One Person Company",
          desc: "Incorporate your OPC online",
          href: "/services/company/opc",
        },
      ],
      support: [
        {
          icon: ShieldCheck,
          title: "GST & Compliance",
          desc: "Complete tax and legal compliance",
          href: "/services/company/gst",
        },
        {
          icon: Cloud,
          title: "Business Advisory",
          desc: "Consult our startup experts",
          href: "/services/company/advisory",
        },
        {
          icon: Plug,
          title: "Trademark & IP",
          desc: "Protect your brand identity",
          href: "/services/company/trademark",
        },
      ],
      other: [
        { title: "FAQ", href: "/faq" },
      ],
    },
  },
  {
    label: "HR Services",
    menu: "hr",
    submenu: {
      core: [
        {
          icon: MonitorSmartphone,
          title: "Payroll Management",
          desc: "Automate salary & benefits",
          href: "/services/hr/payroll",
        },
        {
          icon: MailCheck,
          title: "Recruitment & Hiring",
          desc: "Find and onboard employees fast",
          href: "/services/hr/recruitment",
        },
        {
          icon: LayoutDashboard,
          title: "Performance Management",
          desc: "Track and improve team output",
          href: "/services/hr/performance",
        },
      ],
      support: [
        {
          icon: ShieldCheck,
          title: "Employee Benefits",
          desc: "Insurance, PF, and more",
          href: "/services/hr/benefits",
        },
        {
          icon: Cloud,
          title: "HR Consultancy",
          desc: "End-to-end HR process setup",
          href: "/services/hr/consultancy",
        },
        {
          icon: Plug,
          title: "Compliance & Labour Laws",
          desc: "Ensure your HR policies are legal",
          href: "/services/hr/compliance",
        },
      ],
      other: [
        { title: "FAQ", href: "/faq" },
      ],
    },
  },
  {
    label: "IT Services",
    menu: "it",
    submenu: {
      core: [
        {
          icon: MonitorSmartphone,
          title: "Web Design & Development",
          desc: "Custom business websites & landing pages",
          href: "/services/it",
        },
        {
          icon: MailCheck,
          title: "Business Email Setup",
          desc: "Domain-based, secure email accounts",
          href: "/services/it#services",
        },
        {
          icon: LayoutDashboard,
          title: "CRM, POS & ERP Systems",
          desc: "Streamline operations with tailored platforms",
          href: "/services/it#services",
        },
      ],
      support: [
        {
          icon: ShieldCheck,
          title: "Cybersecurity & Backups",
          desc: "Protect your data and uptime",
          href: "#",
        },
        {
          icon: Cloud,
          title: "Cloud Hosting & Domains",
          desc: "Fast, scalable India hosting solutions",
          href: "#",
        },
        {
          icon: Plug,
          title: "Software Integrations",
          desc: "Connect CRMs, booking tools, and more",
          href: "#",
        },
      ],
      other: [
        { title: "FAQ", href: "/faq" },
      ],
    },
  },
  {
    label: "Real Estate",
    menu: "realestate",
    submenu: {
      core: [
        {
          icon: MonitorSmartphone,
          title: "Property Management",
          desc: "End-to-end property solutions",
          href: "/services/realestate/property-management",
        },
        {
          icon: MailCheck,
          title: "Commercial Leasing",
          desc: "Find the right space for your business",
          href: "/services/realestate/commercial",
        },
        {
          icon: LayoutDashboard,
          title: "Investment Advisory",
          desc: "Get expert real estate guidance",
          href: "/services/realestate/advisory",
        },
      ],
      support: [
        {
          icon: ShieldCheck,
          title: "Legal Assistance",
          desc: "All property paperwork handled",
          href: "/services/realestate/legal",
        },
        {
          icon: Cloud,
          title: "Home Loans & Financing",
          desc: "Loan support & documentation",
          href: "/services/realestate/loan",
        },
        {
          icon: Plug,
          title: "Project Marketing",
          desc: "Promote your property efficiently",
          href: "/services/realestate/marketing",
        },
      ],
      other: [
        { title: "FAQ", href: "/faq" },
      ],
    },
  },
  {
    label: "Information",
    menu: "information",
    submenu: {
      simple: [
        { title: "Blog", href: "/blog" },
        { title: "About", href: "/about" },
        { title: "Careers", href: "/careers" },
      ],
    },
  },
];


export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

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
        <div className="flex items-center justify-between rounded-2xl bg-white shadow-md ring-1 ring-neutral-200 px-8 py-4">

          {/* === Logo === */}
          <img src="/Goot Logo.svg" alt="Goot Group Logo" className="w-32 h-auto" />

          {/* === Nav Links === */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navLinks.map((item) => (
              <div
                key={item.menu}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.menu)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`transition-all px-4 py-2 rounded-full text-[16px] font-medium cursor-pointer relative ${
                    openMenu === item.menu
                      ? "bg-[#065389] text-white"
                      : "text-neutral-800 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  <span className="absolute left-0 right-0 bottom-[-12px] h-3 bg-transparent"></span>
                </button>

                {/* === "Information" small dropdown === */}
                {openMenu === "information" &&
                  item.menu === "information" && (
                    <div
                      className="absolute left-1/2 top-[80px] -translate-x-1/2 w-[150px] rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-neutral-200 transition-all duration-200"
                      onMouseEnter={() => handleMouseEnter("information")}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul className="space-y-3">
                        {(item.submenu?.simple ?? []).map((link, idx) => (
                          <li
                            key={idx}
                            className="cursor-pointer rounded-xl p-3 hover:bg-[#065389] transition-all group"
                          >
                            <a href={link.href}>
                              <p className="font-semibold text-[16px] text-neutral-800 group-hover:text-white">
                                {link.title}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>
            ))}
          </nav>

          {/* === Contact Button === */}
          <button className="rounded-full bg-[#065389] hover:bg-[#23A3FF] transition cursor-pointer h-[3em] px-5 text-[16px] font-medium text-white">
            <a href="/contact">Contact</a>
          </button>
        </div>
      </div>

      {/* === Common fixed submenu (for all except Information) === */}
      {openMenu &&
        openMenu !== "information" &&
        navLinks.find((item) => item.menu === openMenu)?.submenu && (
          <div
            onMouseEnter={() => handleMouseEnter(openMenu)}
            onMouseLeave={handleMouseLeave}
            className="
              fixed left-1/2 top-[120px] -translate-x-1/2
              w-[1000px] rounded-2xl bg-white p-10 shadow-2xl
              ring-1 ring-neutral-200 transition-all duration-200 z-40
            "
          >
            {(() => {
              const submenu =
                navLinks.find((item) => item.menu === openMenu)?.submenu;

              return (
                <div className="grid grid-cols-3 gap-14">
                  {/* Core */}
                  <div>
                    <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                      Core Services
                    </h3>
                    <ul className="space-y-3">
                      {(submenu?.core ?? []).map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                        >
                          <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                            <item.icon />
                          </div>
                          <a href={item.href}>
                            <p className="font-semibold text-[16px] text-neutral-800 group-hover:text-white">
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

                  {/* Support */}
                  <div>
                    <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                      Support & Advisory
                    </h3>
                    <ul className="space-y-3">
                      {(submenu?.support ?? []).map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#065389]"
                        >
                          <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                            <item.icon />
                          </div>
                          <a href={item.href}>
                            <p className="font-semibold text-[16px] text-neutral-800 group-hover:text-white">
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

                  {/* Other */}
                  <div>
                    <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                      Other
                    </h3>
                    <ul className="space-y-3">
                      {(submenu?.other ?? []).map((item, idx) => (
                        <li
                          key={idx}
                          className="cursor-pointer rounded-xl p-3 hover:bg-[#065389] transition-all group"
                        >
                          <a href={item.href}>
                            <p className="font-semibold text-[16px] text-neutral-800 group-hover:text-white">
                              {item.title}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
    </header>
  );
}
