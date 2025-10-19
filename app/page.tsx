import CoreServices from "@/section/CoreServices";
import CTASection from "@/section/Cta";
import Hero from "@/section/Hero";
import Mission from "@/section/Mission";
import ResultsSection from "@/section/ResultSection";
import SmartCombos from "@/section/Smart";
import Testimonials from "@/section/Testimonial";
import WhatSetsUsApart from "@/section/WhatSetUsApart";

export default function Home() {
  return (
      <main className="relative">
    <Hero/>  
    <div className="h-screen"></div>
    <Mission/>
    <CoreServices/>
    <WhatSetsUsApart/>
    <SmartCombos/>
    <ResultsSection/>
    <Testimonials/>
    <CTASection/>
      </main>
  );
}
