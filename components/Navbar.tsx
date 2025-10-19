"use client";
import { useState, useRef } from "react";
import { Briefcase, Landmark, Scale, FileText } from "lucide-react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // gentle open/close with delay
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(false), 150);
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <div className="mx-auto max-w-[1400px] px-4">
        <div className="flex items-center justify-between rounded-3xl bg-white shadow-md ring-1 ring-neutral-200 px-8 py-4">
          {/* === Logo === */}
          <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="/Boot Logo.svg"
                alt="Logo"
                className="w-35 object-contain"
              />
          </div>

          {/* === Nav Links - Center === */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`transition-all px-4 py-2 rounded-full text-sm font-medium cursor-pointer relative ${
                  openMenu
                    ? "bg-teal-900 text-white"
                    : "text-neutral-800 hover:text-blue-600"
                }`}
              >
                Company Formation
                {/* invisible hover bridge */}
                <span className="absolute left-0 right-0 bottom-[-12px] h-3 bg-transparent"></span>
              </button>

              {/* === Mega Menu === */}
              {openMenu && (
                <div
                  className="absolute left-4/2 top-[4rem] -translate-x-1/2 w-[1000px] rounded-2xl bg-white p-10 shadow-2xl ring-1 ring-neutral-200 transition-all duration-200"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-3 gap-14">
                    {/* === Core Services === */}
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
                          },
                          {
                            icon: <Landmark />,
                            title: "Banking, Visas & PRO Support",
                            desc: "End-to-end admin and approvals",
                          },
                          {
                            icon: <FileText />,
                            title: "Tax, Compliance & Advisory",
                            desc: "Stay legal, efficient, and protected",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#004d40]"
                          >
                            <div className="flex-shrink-0 text-neutral-700 group-hover:text-white">
                              {item.icon}
                            </div>
                            <div>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* === Support & Advisory === */}
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Support & Advisory
                      </h3>
                      <ul className="space-y-3">
                        {[
                          {
                            title: "Mainland vs Free Zone Guide",
                            desc: "Choose the right licence type",
                          },
                          {
                            title: "Legal Structures Explained",
                            desc: "We help you pick your path",
                          },
                        ].map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 cursor-pointer rounded-xl p-3 transition-all group hover:bg-[#004d40]"
                          >
                            <Scale className="flex-shrink-0 text-neutral-700 group-hover:text-white" />
                            <div>
                              <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                                {item.title}
                              </p>
                              <p className="text-xs text-neutral-500 group-hover:text-gray-200 mt-1">
                                {item.desc}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* === Other === */}
                    <div>
                      <h3 className="mb-5 font-semibold text-xs tracking-widest text-neutral-500 uppercase">
                        Other
                      </h3>
                      <div className="cursor-pointer rounded-xl p-3 hover:bg-[#004d40] transition-all group">
                        <p className="font-semibold text-sm text-neutral-800 group-hover:text-white">
                          FAQ
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* === Other Nav Links === */}
            <a className="px-4 py-2 text-sm text-neutral-800 hover:text-blue-600 transition-colors rounded-full cursor-pointer">
              HR Services
            </a>
            <a className="px-4 py-2 text-sm text-neutral-800 hover:text-blue-600 transition-colors rounded-full cursor-pointer">
              IT Services
            </a>
            <a className="px-4 py-2 text-sm text-neutral-800 hover:text-blue-600 transition-colors rounded-full cursor-pointer">
              Real Estate
            </a>
            <a className="px-4 py-2 text-sm text-neutral-800 hover:text-blue-600 transition-colors rounded-full cursor-pointer">
              Information
            </a>
          </nav>

          {/* === Contact Button === */}
          <button className="rounded-full bg-neutral-900 px-7 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
