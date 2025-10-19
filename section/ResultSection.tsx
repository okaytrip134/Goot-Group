"use client";
import Image from "next/image";
import Link from "next/link";

export default function ResultsSection() {
  return (
    <section className="py-24 px-6 bg-white text-neutral-900 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        {/* === Top Heading === */}
        <div className="max-w-3xl mb-14">
          <p className="text-[11px] tracking-[0.18em] font-semibold uppercase text-neutral-500 mb-3">
            Built on results. Backed by experience.
          </p>

          <h2 className="text-[30px] md:text-[42px] font-medium leading-tight mb-5">
            We don’t just talk about expertise —<br />
            we prove it through numbers,<br />
            outcomes, and client trust.
          </h2>

          <p className="text-neutral-700 text-base leading-relaxed mb-8">
            From company formations to facility operations, every service we offer is built
            to deliver measurable results and lasting value.
          </p>

          <Link
            href="#"
            className="inline-block bg-[#D50000] text-white rounded-full px-6 py-3 text-sm font-medium shadow-md hover:bg-[#B80000] transition"
          >
            Book an intro call
          </Link>
        </div>

        {/* === Grid Section === */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {/* Proven Impact */}
          <div className="bg-[#E9F6EE] p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-neutral-600 font-semibold mb-6">
                Proven Impact
              </p>
              <h3 className="text-4xl font-semibold mb-3">1,200+</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Businesses launched, scaled, or managed across the UAE.
              </p>
            </div>
          </div>

          {/* Image 1 */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/1.avif"
              alt="Businesswoman on phone"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Client Confidence */}
          <div className="bg-[#E9F6EE] p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-neutral-600 font-semibold mb-6">
                Client Confidence
              </p>
              <h3 className="text-4xl font-semibold mb-3">98.9%</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Retention rate across multi-service clients since 2010.
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/2.avif"
              alt="Modern business lounge"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/3.avif"
              alt="Professional man in Dubai"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="rounded-2xl overflow-hidden md:col-span-1">
            <Image
              src="/3.avif"
              alt="Businesswoman working"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Integrated Services */}
          <div className="bg-[#E9F6EE] p-8 rounded-2xl flex flex-col justify-between md:col-span-2">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-neutral-600 font-semibold mb-6">
                Integrated Services
              </p>
              <h3 className="text-4xl font-semibold mb-3">4-in-1</h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Company setup, HR, property, and FM—handled by one expert team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
