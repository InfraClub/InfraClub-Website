"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const testimonials = [
  { src: "house1.jpeg", name: "Project 1" },
  { src: "house.jpg", name: "Project 2" },
  { src: "house3.jpg", name: "Project 3" },
  { src: "house2.jpg", name: "Project 4" },
  { src: "house4.jpg", name: "Project 5" },
  { src: "house5.jpg", name: "Project 6" },
  { src: "house8.jpg", name: "Project 7" },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  const autoplay = true;

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const rotations = useMemo(
    () => testimonials.map(() => Math.floor(Math.random() * 19) - 10),
    [testimonials.length]
  );

  // swipe handler
  function onPanEnd(
    _event: any,
    info: { offset: { x: number }; velocity: { x: number } }
  ) {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;
    if (offsetX < -60 || velocityX < -500) {
      handleNext();
    } else if (offsetX > 60 || velocityX > 500) {
      handlePrev();
    }
  }

  return (
    <div
      id="whatWeDo"
      className="relative pt-26 pb-10 overflow-hidden bg-gradient-to-tr from-orange-50 via-amber-50 to-orange-100"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      {/* Heading */}
      <motion.h2
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false }}
        className="flex items-center justify-center text-sm font-semibold text-gray-700 uppercase mb-8 font-serif"
        style={{ fontFamily: "Times New Roman, serif" }}
      >
        <span className="w-16 border-t border-gray-700"></span>
        <span className="px-4 tracking-widest">
          W H A T &nbsp; W E &nbsp; D O
        </span>
        <span className="w-16 border-t border-gray-700"></span>
      </motion.h2>

      {/* Top section: Images + Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: false }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 max-w-6xl mx-auto px-6"
      >
        {/* Left - Image carousel */}
        <div className="relative h-90 w-full flex flex-col items-center md:items-start">
          <div className="relative w-72 h-72 md:w-full md:h-full">
            {/* make the carousel area pannable for swipe left/right */}
            <motion.div
              className="relative w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onPanEnd={onPanEnd}
              style={{ touchAction: "pan-y" }}
            >
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotations[index],
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : rotations[index],
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotations[index],
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="w-full h-full rounded-3xl object-cover object-center shadow-lg"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Buttons centered below the image */}
          <div className="flex gap-6 pt-6 justify-center w-full">
            <button
              onClick={handlePrev}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 " />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 shadow-md hover:bg-gray-200 transition"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 " />
            </button>
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col justify-center space-y-4">
          <h3
            className="text-2xl md:text-3xl font-extrabold font-serif"
            style={{
              fontFamily: "Times New Roman, serif",
              color: "rgb(180, 83, 9)",
            }}
          >
            Residential Excellence
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            Turning every dream home into a{" "}
            <span className="font-semibold text-gray-900">
              strong, lasting reality
            </span>
            . We prioritize{" "}
            <span className="font-semibold">
              quality, safety, and efficiency
            </span>
            , delivering homes that meet modern lifestyle needs while ensuring
            durability and value.
          </p>

          {/* Guarantees Section */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-orange-100 shadow-[0_12px_30px_-6px_rgba(251,146,60,0.4),0_8px_20px_-6px_rgba(251,146,60,0.4)] hover:shadow-[0_12px_30px_-6px_rgba(251,146,60,0.6),0_8px_20px_-6px_rgba(251,146,60,0.6)] transition-transform duration-300 hover:scale-102">
            <h4
              className="text-xl font-semibold mb-4 flex items-center gap-2 font-serif"
              style={{
                fontFamily: "Times New Roman, serif",
                color: "rgb(180, 83, 9)",
              }}
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span> What
              We Guarantee You
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✔</span> 100% Work
                Satisfaction
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✔</span> 100% Quality in every
                project
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✔</span> On-time Delivery
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✔</span> Quick Response
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Bottom Section: Packages */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: false }}
        className="mt-12 max-w-3xl mx-auto px-6"
      >
        <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-100 to-amber-200 text-center shadow-[0_12px_30px_-6px_rgba(251,146,60,0.4),0_8px_20px_-6px_rgba(251,146,60,0.4)] hover:shadow-[0_12px_30px_-6px_rgba(251,146,60,0.6),0_8px_20px_-6px_rgba(251,146,60,0.6)] transition-transform duration-300 hover:scale-102">
          <h4
            className="text-2xl font-semibold text-gray-900 mb-3 font-serif"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Plans & Packages
          </h4>
          <p className="text-gray-600 text-base leading-relaxed">
            Explore our{" "}
            <span className="font-bold text-orange-600">
              Value-packed, Innovative and Flexible Plans
            </span>{" "}
            — designed to fit your lifestyle and budget, while never
            compromising on quality.
          </p>
          <div className="mt-6">
            <a
              href="#callToAction"
              className="running-border-button relative inline-block p-1 rounded-full shadow-lg overflow-hidden group"
            >
              <span className="block bg-black text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-900">
                Explore Packages
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
