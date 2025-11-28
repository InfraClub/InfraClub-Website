// "use client";
// import React, { useEffect, useState, useRef } from "react";
// import {
//   Clock,
//   PencilRuler,
//   ShieldCheck,
//   Hammer,
//   Smartphone,
// } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";

// export default function WhyChooseUs() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const points = [
//     {
//       imgAddr: <Clock className="w-12 h-12" />,
//       title: "On-Time Delivery",
//       subtitle: "Promise Kept, Always",
//       description:
//         "Clear timelines and stage-wise updates ensure your project stays right on track. We believe in transparency and commitment.",
//       color: "from-blue-500 to-cyan-400",
//       bgColor: "bg-blue-50",
//     },
//     {
//       imgAddr: <PencilRuler className="w-12 h-12" />,
//       title: "Tailored Solutions",
//       subtitle: "Your Vision, Our Craft",
//       description:
//         "Every design and finish reflects your unique taste, style, and lifestyle. No two projects are the same.",
//       color: "from-purple-500 to-pink-400",
//       bgColor: "bg-purple-50",
//     },
//     {
//       imgAddr: <ShieldCheck className="w-8 h-8" />,
//       title: "Transparent Process",
//       subtitle: "Honest & Open",
//       description:
//         "No hidden costs — you know what you’re paying for, at every step of the journey.",
//     },
//     {
//       imgAddr: <Hammer className="w-12 h-12" />,
//       title: "Quality First",
//       subtitle: "Excellence in Every Detail",
//       description:
//         "Trusted materials and skilled craftsmanship go into every single detail. Quality is never compromised.",
//       color: "from-orange-500 to-amber-400",
//       bgColor: "bg-orange-50",
//     },
//     {
//       imgAddr: <Smartphone className="w-12 h-12" />,
//       title: "Remote Updates",
//       subtitle: "Stay Connected, Stay Informed",
//       description:
//         "Daily progress updates straight from the site to your phone, wherever you are. Technology meets construction.",
//       color: "from-red-500 to-rose-400",
//       bgColor: "bg-red-50",
//     },
//   ];

//   useEffect(() => {
//     const updateActiveIndex = () => {
//       if (!containerRef.current) return;
      
//       const sections = containerRef.current.querySelectorAll('[data-section]');
//       const scrollPosition = window.scrollY + window.innerHeight * 0.6;
      
//       let newActiveIndex = 0;
//       sections.forEach((section, index) => {
//         const rect = section.getBoundingClientRect();
//         const sectionTop = rect.top + window.scrollY;
//         const sectionCenter = sectionTop + rect.height / 2;
        
//         if (scrollPosition >= sectionCenter) {
//           newActiveIndex = index;
//         }
//       });
      
//       if (newActiveIndex !== activeIndex) {
//         setActiveIndex(newActiveIndex);
//       }
//     };

//     const throttledUpdate = () => {
//       requestAnimationFrame(updateActiveIndex);
//     };

//     window.addEventListener('scroll', throttledUpdate, { passive: true });
//     updateActiveIndex();
    
//     return () => window.removeEventListener('scroll', throttledUpdate);
//   }, [activeIndex]);

//   // Helper function to get local image paths
//   const getLocalImagePath = (index: number) => {
//     const imagePaths = [
//       '/delivery.png', // On-Time Delivery
//       '/solutions.png', // Tailored Solutions
//       '/process.png', // Transparent Process
//       '/quality.png', // Quality First
//       '/updates.png', // Remote Updates
//     ];
//     return imagePaths[index] || imagePaths[0];
//   };

//   return (
//     <div id="whyChooseUs" className="relative">
//       {/* Section Header */}
//       <div className="relative z-10 pt-26 pb-10 text-center">
//         <motion.h2
//           initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
//           whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//           viewport={{ once: false }}
//           className="flex items-center justify-center text-sm font-semibold text-[#866458] uppercase mb-8"
//         >
//           <span className="w-16 border-t border-[#866458]"></span>
//           <span className="px-4 tracking-widest">W H Y &nbsp; C H O O S E &nbsp; U S ?</span>
//           <span className="w-16 border-t border-[#866458]"></span>
//         </motion.h2>
//       </div>

//       {/* Sticky Scroll Container */}
//       <div ref={containerRef} className="relative">
//         {/* Left Side - Sticky Content */}
//         <div className="md:flex md:min-h-screen md:items-start">
//           <motion.div 
//             className="hidden md:block md:w-1/2 md:sticky md:top-1/2 md:-translate-y-1/2 p-6 md:p-12"
//           >
//             <div className="max-w-lg">
//               {/* Active Point Display */}
//               <motion.div
//                 key={activeIndex}
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, ease: "easeOut" }}
//                 className="space-y-6"
//               >
//                 <div>
//                   <p className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-4" style={{fontFamily: 'serif'}}>
//                     {points[activeIndex].subtitle}
//                   </p>
//                   <h4 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Times New Roman, serif'}}>
//                     {points[activeIndex].title}
//                   </h4>
//                   <p className="text-lg text-gray-600 leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
//                     {points[activeIndex].description}
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Side - Scrolling Cards */}
//           <div className="w-full md:w-1/2 space-y-6 md:space-y-12 p-6 md:p-12 md:pt-24">
//             {points.map((point, index) => (
//               <motion.div
//                 key={index}
//                 data-section
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ 
//                   duration: 0.8, 
//                   ease: [0.25, 0.46, 0.45, 0.94],
//                   delay: index * 0.1
//                 }}
//                 viewport={{ once: false, margin: "-50px" }}
//                 className={`group relative min-h-[400px] md:min-h-[450px] rounded-2xl overflow-hidden transition-all duration-500 ease-out transform ${
//                   activeIndex === index 
//                     ? 'shadow-[0_25px_50px_-12px_rgba(251,146,60,0.6),0_10px_25px_-8px_rgba(251,146,60,0.4)] scale-[1.02]' 
//                     : 'shadow-[0_15px_35px_-8px_rgba(251,146,60,0.3),0_5px_15px_-5px_rgba(251,146,60,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(251,146,60,0.4),0_8px_20px_-6px_rgba(251,146,60,0.3)] hover:scale-[1.01]'
//                 }`}
//               >
//                 {/* HD Background Image */}
//                 <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
//                      style={{
//                        backgroundImage: `url('${getLocalImagePath(index)}')`,
//                        backgroundSize: 'cover',
//                        backgroundPosition: 'center center'
//                      }}
//                 />
                
//                 {/* Minimal overlay for subtle effect */}
//                 <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/5" />

//                 {/* Active Indicator */}
//                 {activeIndex === index && (
//                   <motion.div
//                     initial={{ scale: 0, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0, opacity: 0 }}
//                     transition={{ duration: 0.4, ease: "backOut" }}
//                     className="absolute top-4 right-4 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_20px_rgba(251,146,60,0.8)] animate-pulse"
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 -z-10" />
//     </div>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

export default function WhyChooseUs() {
  const points = [
    {
      imgAddr: "/delivery.png",
      title: "On-Time Delivery",
      description:
        "Clear timelines and stage-wise updates ensure your project stays right on track.",
    },
    {
      imgAddr: "/solutions.png",
      title: "Tailored Solutions",
      description:
        "Every design and finish reflects your unique taste, style, and lifestyle.",
    },
    {
      imgAddr: "/process.png",
      title: "Transparent Process",
      description:
        "No hidden costs — you know what you’re paying for, at every step of the journey.",
    },
    {
      imgAddr: "/quality.png",
      title: "Quality First",
      description:
        "Trusted materials and skilled craftsmanship go into every single detail.",
    },
    {
      imgAddr: "/updates.png",
      title: "Remote Updates",
      description:
        "Daily progress updates straight from the site to your phone, wherever you are.",
    },
  ];

  return (
    <div id="whyChooseUs" className="relative pt-24 pb-10 overflow-hidden" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 via-amber-200 to-orange-100 opacity-20 blur-3xl"></div>

      <motion.h2
              initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{ duration: 0.6,delay:0.2, ease: "easeOut" }}
              viewport={{ once: false }} className="flex items-center justify-center text-sm font-semibold text-[#866458] uppercase mb-4 font-serif">
          <span className="w-16 border-t border-[#866458]"></span>
          <span className="px-4 tracking-widest font-serif">W H Y &nbsp; C H O O S E &nbsp; U S ? </span>
          <span className="w-16 border-t border-[#866458]"></span>
        </motion.h2>

      <HoverEffect items={points} />

    </div>
  );
}