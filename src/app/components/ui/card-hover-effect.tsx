import { cn } from "@/lib/utlis";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    imgAddr: string | Blob | undefined;
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-2 sm:gap-5 md:gap-8 lg:gap-10 py-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2  w-[350px] sm:w-[350px] md:w-[370px] lg:w-[390px]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-[rgba(251,146,60,0.15)] via-[rgba(251,146,60,0.3)] to-[rgba(251,146,60,0.15)] rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3, delay: 0.3 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-30 h-30 sm:w-35 sm:h-35 rounded-xl bg-[#f1efe7] overflow-hidden">
                <img
                  src={item.imgAddr}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-[#b45309] font-serif">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed font-serif">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      ))}

      <style jsx>{`
        @keyframes borderMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-borderMove {
          background-size: 200% 200%;
          animation: borderMove 4s linear infinite;
        }
        @keyframes pulseSpark {
          0% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
        .animate-pulseSpark {
          animation: pulseSpark 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
      className={cn(
        "rounded-2xl h-full shadow-[0_12px_30px_-6px_rgba(251,146,60,0.3),0_8px_20px_-6px_rgba(251,146,60,0.3)] w-full p-4 overflow-hidden bg-white  relative z-20",
        className
      )}
    >
           {/* animated gradient border */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-yellow-400 via-orange-300 to-orange-400 opacity-0 group-hover:opacity-100 transition duration-500 animate-borderMove">
        <div className="w-full h-full bg-white rounded-2xl"></div>
      </div>
      <div className="relative z-50">
        <div className="p-1">{children}</div>
      </div>
    </motion.div>
  );
};
