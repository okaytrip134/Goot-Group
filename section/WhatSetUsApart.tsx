/* eslint-disable @next/next/no-img-element */
"use client";
import { BadgeCheck, FastForward, Layers, Scan } from "lucide-react";
import Link from "next/link";

export default function WhatSetsUsApart() {
    const points = [
        { icon: <BadgeCheck className="w-5 h-5 text-neutral-800" />, text: "Government-Compliant" },
        { icon: <FastForward className="w-5 h-5 text-neutral-800" />, text: "Fast Turnaround, Real Results" },
        { icon: <Layers className="w-5 h-5 text-neutral-800" />, text: "One Partner. Full Coverage." },
        { icon: <Scan className="w-5 h-5 text-neutral-800" />, text: "Transparent Pricing & Process" },
    ];

    return (
        <section className="py-24 px-6 bg-white relative z-10">
            <h1 className="text-black mb-20 text-center text-5xl max-w-xl mx-auto"
            style={{
                lineHeight: '60px'
            }}
            >Why Work with <br />IBARA GROUP?
            </h1>
            <div className="max-w-[1400px] mx-auto rounded-3xl overflow-hidden grid lg:grid-cols-2">
                {/* === Left Side: Text Content === */}
                <div className="bg-neutral-100 px-10 md:px-14 py-14 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
                        What Sets Us Apart
                    </h2>

                    <p className="text-neutral-700 leading-relaxed mb-6">
                        Serving 120+ clients across Dubai and the wider UAE, GOOT GROUP delivers the speed,
                        transparency, and local expertise that today’s businesses expect.
                    </p>

                    <p className="text-neutral-700 leading-relaxed mb-8">
                        Whether you&apos;re forming a company, hiring a team, investing in property, or managing
                        operations—we do it all, in one place.
                    </p>

                    <Link
                        href="#"
                        className="inline-block bg-neutral-900 text-white rounded-full px-6 py-3 text-sm font-medium w-fit hover:bg-neutral-800 transition"
                    >
                        Learn More
                    </Link>

                    <ul className="mt-10 space-y-4">
                        {points.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-neutral-800">
                                {item.icon}
                                <span className="text-sm md:text-base">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* === Right Side: Image === */}
                <div className="h-[600px] lg:h-auto">
                    <img
                        src="/what.jpg"
                        alt="Dubai skyscraper with palm trees"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
