"use client";
import Slider from "react-slick"; 
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional: nice clean icons

export default function Testimonials() {
  const sliderRef = useRef<Slider>(null);

  const testimonials = [
    {
      text: "Super satisfied with the service! Ibara guided us clearly and ensured the setup was done properly. Highly recommend to fellow business owners.",
      author: "SATURN TRADING FZ-LLC",
      avatar: "/client1.jpg",
    },
    {
      text: "The team at Ibara was professional and friendly. They handled everything efficiently, and we were up and running in no time!",
      author: "NEXOVA FZ-LLC",
      avatar: "/client2.jpg",
    },
    {
      text: "Ibara Consultancy exceeded our expectations. Quick responses, accurate information, and a very supportive team. We’re happy we chose them!",
      author: "BUYNOVA FZ-LLC",
      avatar: "/client3.jpg",
    },
    {
      text: "From paperwork to approvals, Ibara took care of it all. We couldn’t have asked for a better consultancy to start our journey with.",
      author: "TRENDORA FZ-LLC",
      avatar: "/client4.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // we’ll control them manually
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-24 px-6 bg-white relative z-10">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* === Header === */}
        <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-neutral-600 mb-4">
          Testimonials
        </p>
        <h2 className="text-[28px] md:text-[40px] font-medium text-neutral-900 mb-16 leading-snug">
          Here’s how we help companies succeed across
          <br className="hidden sm:block" />
          formation, hiring, property, and operations.
        </h2>

        {/* === Carousel === */}
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-3">
              <div className="bg-[#E9F6EE] rounded-2xl p-8 h-full flex flex-col justify-between text-left shadow-sm">
                <p className="text-neutral-800 text-base leading-relaxed mb-6">
                  {item.text}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <p className="text-sm font-semibold text-neutral-800">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* === Navigation Buttons === */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="p-3 rounded-full bg-[#E9F6EE] hover:bg-[#d4ecdc] transition shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-neutral-700" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="p-3 rounded-full bg-[#E9F6EE] hover:bg-[#d4ecdc] transition shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-neutral-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
