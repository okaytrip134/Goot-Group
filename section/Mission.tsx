"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const sentences = [
        "We empower businesses in the UAE with strategic support in setup, real estate, HR, and IT.",
        "From launch to growth, we simplify success through tailored, compliant, and efficient solutions.",
        "Our commitment drives sustainable partnerships built on trust and expertise.",
    ];

    return (
        <section
            ref={sectionRef}
            className="relative h-[300vh] bg-[url('/mission.avif')] bg-cover bg-center z-10"
        >

            <div className="absolute inset-0 bg-white/80" />
            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

                <h2 className="text-xs tracking-widest font-semibold text-black uppercase mb-10">
                    Our Mission
                </h2>

                {/* Animated sentences */}
                <div className="relative w-full max-w-4xl h-[120px] flex items-center justify-center text-center px-6">
                    {sentences.map((text, i) => {
                        // fade timing setup
                        const start = i / sentences.length;
                        const end = (i + 1) / sentences.length;

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(
                            scrollYProgress,
                            [start, start + 0.1, end - 0.1, end],
                            [0, 1, 1, 0]
                        );

                        return (
                            <motion.p
                                key={i}
                                style={{ opacity }}
                                className="absolute text-2xl md:text-4xl font-medium text-neutral-800 leading-snug"
                            >
                                {text}
                            </motion.p>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
