"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Instagram } from "lucide-react";

export default function AboutUs() {
  const owners = [
    {
      name: "Charan",
      role: "Operations Director",
      image: "/Charan.jpeg",
      instagram: "#",
    },
    {
      name: "Ramya",
      role: "Financial Director",
      image: "/Ramyashree.jpeg",
      instagram: "#",
    },
    {
      name: "Guruprasad",
      role: "Technical Director",
      image: "/Guruprasad.jpeg",
      instagram: "#",
    },
    {
      name: "Aekanth",
      role: "Board Director",
      image: "/Aekanth.jpeg",
      instagram: "#",
    },
  ];

  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % owners.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + owners.length) % owners.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 10000);
    return () => clearInterval(interval);
  }, []);

  const rotations = useMemo(
    () => owners.map(() => Math.floor(Math.random() * 19) - 10),
    [owners.length]
  );

  const aboutText =
    "We deliver residential buildings with a clear focus on quality, safety, and efficiency. Each project is carefully planned and executed using trusted materials and proven engineering methods. Our aim is to provide homes that meet modern lifestyle needs while ensuring durability, value, and timely delivery.";

  return (
    <section id="aboutUs" className="relative pt-26 pb-10 overflow-hidden" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 via-amber-200 to-orange-100 opacity-40 blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <motion.h2
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }} className="flex items-center justify-center text-sm font-semibold text-gray-700 uppercase mb-6 font-serif" style={{ fontFamily: 'Times New Roman, serif' }}>
          <span className="w-16 border-t border-gray-700"></span>
          <span className="px-4 tracking-widest">A b o u t &nbsp; U s</span>
          <span className="w-16 border-t border-gray-700"></span>
        </motion.h2>

        {/* Content: Left & Right */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
          {/* Left Side */}
          <div className="lg:w-1/2 space-y-8">
            <motion.h3
              initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-3xl font-bold font-serif"
              style={{ fontFamily: 'Times New Roman, serif', color: 'rgb(180, 83, 9)' }}
            >
              About Infraclub
            </motion.h3>

            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              {aboutText}
            </motion.p>

            <motion.div
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
              className="bg-white/70 backdrop-blur-xl rounded-2xl  p-8 border border-orange-100  shadow-[0_12px_30px_-6px_rgba(251,146,60,0.4),0_8px_20px_-6px_rgba(251,146,60,0.4)] hover:shadow-[0_12px_30px_-6px_rgba(251,146,60,0.6),0_8px_20px_-6px_rgba(251,146,60,0.6)] transition-transform duration-300 hover:scale-102"
            >
              <h3 className="text-2xl font-semibold mb-4 font-serif" style={{ fontFamily: 'Times New Roman, serif', color: 'rgb(180, 83, 9)' }}>
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To create modern homes where families grow in harmony together.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Founders Carousel */}
          <div className="lg:w-1/3 flex flex-col items-center space-y-3">
            {/* Heading (same style as About Infraclub) */}
            <motion.h3
              initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-3xl font-bold font-serif"
              style={{ fontFamily: 'Times New Roman, serif', color: 'rgb(180, 83, 9)' }}
            >
              Founders
            </motion.h3>

            {/* Carousel */}
            <motion.div
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
              className="w-full max-w-xs rounded-2xl bg-white p-4 flex flex-col items-center space-y-4 shadow-[0_12px_30px_-6px_rgba(251,146,60,0.4),0_8px_20px_-6px_rgba(251,146,60,0.4)] hover:shadow-[0_12px_30px_-6px_rgba(251,146,60,0.6),0_8px_20px_-6px_rgba(251,146,60,0.6)] transition-transform duration-300 hover:scale-102"
            >
              <div className="relative h-80 w-full hover:shadow-2xl cursor-pointer transition duration-300 max-w-sm">
                <AnimatePresence>
                  {owners.map((owner, index) => (
                    <motion.div
                      key={owner.image}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        rotate: rotations[index],
                      }}
                      animate={{
                        opacity: active === index ? 1 : 0,
                        scale: active === index ? 1 : 0.9,
                        rotate: active === index ? 0 : rotations[index],
                        zIndex: active === index ? 20 : 10,
                        y: active === index ? [0, -20, 0] : 0,
                      }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <img
                        src={owner.image}
                        alt={owner.name}
                        className="w-full h-full rounded-xl object-cover object-top shadow-md"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Owner Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active} // ensures re-render when profile changes
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-center flex items-center justify-center gap-2"
                >
                  <span className="text-lg font-semibold font-serif" style={{ fontFamily: 'Times New Roman, serif', color: 'rgb(180, 83, 9)' }}>
                    {owners[active].name}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-sm text-gray-500">
                    {owners[active].role}
                  </span>
                  <span className="text-gray-400">|</span>
                  {owners[active].instagram && (
                    <a
                      href={owners[active].instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
                    </a>
                  )}
                </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex gap-4">
                  <button
                    onClick={handlePrev}
                    className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100"
                  >
                    <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="group/button flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-orange-100"
                  >
                    <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12" />
                  </button>
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
