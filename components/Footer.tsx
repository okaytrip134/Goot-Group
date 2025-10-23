"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Instagram, Facebook, Youtube, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* === Left: Logo & Contact === */}
        <div>
          <img
            src="/Goot Logo.svg"
            alt="Goot Group"
            width={150}
            height={40}
            className="mb-6"
          />

          <div className="text-sm text-neutral-800 leading-relaxed space-y-3">
            <p>
              <span className="font-semibold">Phone:</span> <br />
              +971 52 142 3181
            </p>
            <p>
              <span className="font-semibold">Email:</span> <br />
              info@Gootgroup.ae
            </p>
            <p>
              <span className="font-semibold">Location:</span> <br />
              Office 2021, Park Lane, Business Bay, Dubai, UAE <br />
              Monday – Friday 9am — 6pm
            </p>
          </div>

          {/* Newsletter */}
          <div className="mt-8">
            <p className="text-xs uppercase font-semibold mb-3 text-neutral-600">
              Subscribe for our newsletter
            </p>
            <form className="flex items-center bg-neutral-100 text-black rounded-full overflow-hidden w-full max-w-xs">
              <input
                type="email"
                placeholder="Enter your Email Address"
                className=" flex-1 px-4 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="p-2 bg-[#065389] hover:bg-[#23A3FF]   transition text-white rounded-full mr-1"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[11px] text-neutral-500 mt-2">
              Your information is never disclosed to third parties.
            </p>
          </div>
        </div>

        {/* === Column 2: Main Pages === */}
        <div>
          <h4 className="uppercase text-xs font-semibold text-neutral-500 mb-4">
            Main Pages
          </h4>
          <ul className="space-y-2 text-sm text-neutral-800">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/consultation">Book A Consultation</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* === Column 3: Company === */}
        <div>
          <h4 className="uppercase text-xs font-semibold text-neutral-500 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-neutral-800">
            <li><Link href="/process">Our Process</Link></li>
            <li><Link href="/why-Goot">Why Goot</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* === Column 4: Services === */}
        <div>
          <h4 className="uppercase text-xs font-semibold text-neutral-500 mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm text-neutral-800">
            <li><Link href="/services/company-formation">Company Formation</Link></li>
            <li><Link href="/services/hr">Recruitment & HR</Link></li>
            <li><Link href="/services/real-estate">Real Estate Solutions</Link></li>
            <li><Link href="/services/it">IT Services</Link></li>
          </ul>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="border-t border-neutral-200 mt-10">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: Music2, href: "#" }, // TikTok icon substitute
            ].map(({ icon: Icon, href }, idx) => (
              <Link
                key={idx}
                href={href}
                className="w-9 h-9 flex items-center justify-center bg-[#23A3FF] hover:bg-[#065389]  text-white rounded-full transition"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-neutral-700 text-center md:text-right">
            © Goot GROUP 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
