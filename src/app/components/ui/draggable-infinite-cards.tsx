"use client";

import { cn } from "@/lib/utlis";
import React, { useEffect, useState, useRef } from "react";

export interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src?: string;
}

export const DraggableInfiniteCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    addAnimation();
    
    // Cleanup function to cancel animation frames
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clear existing duplicates first
      const originalLength = items.length;
      while (scrollerRef.current.children.length > originalLength) {
        scrollerRef.current.removeChild(scrollerRef.current.lastChild!);
      }

      // Add duplicates for infinite scroll
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Smooth drag handlers with momentum
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setVelocity(0);
    setLastMoveTime(Date.now());
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    if (scrollerRef.current) {
      scrollerRef.current.style.animationPlayState = 'paused';
      scrollerRef.current.style.transition = 'none';
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !scrollerRef.current) return;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastMoveTime;
    const deltaX = clientX - startX;
    
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime);
    }
    
    const walk = deltaX * 1.2; // Increased sensitivity for smoother feel
    const newOffset = dragOffset + walk;
    setDragOffset(newOffset);
    setStartX(clientX);
    setLastMoveTime(currentTime);
    
    scrollerRef.current.style.transform = `translateX(${newOffset}px)`;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    
    if (scrollerRef.current) {
      scrollerRef.current.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      
      // Apply momentum with friction
      const momentumDistance = velocity * 200; // Momentum factor
      const finalOffset = dragOffset + momentumDistance;
      setDragOffset(finalOffset);
      scrollerRef.current.style.transform = `translateX(${finalOffset}px)`;
      
      // Resume animation after momentum settles
      setTimeout(() => {
        if (scrollerRef.current) {
          scrollerRef.current.style.animationPlayState = 'running';
          scrollerRef.current.style.transition = '';
        }
      }, 600);
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleDragMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseEnter = () => {
    if (!isDragging && scrollerRef.current && pauseOnHover) {
      scrollerRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    } else if (scrollerRef.current && pauseOnHover) {
      scrollerRef.current.style.animationPlayState = 'running';
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleDragMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden cursor-grab active:cursor-grabbing",
        "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 select-none",
          start && "animate-scroll",
          isDragging && "[animation-play-state:paused]"
        )}
        style={{
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 px-8 py-6 md:w-[450px] shadow-[0_12px_30px_-6px_rgba(251,146,60,0.25),0_8px_20px_-6px_rgba(251,146,60,0.25)] hover:shadow-[0_12px_30px_-6px_rgba(251,146,60,0.4),0_8px_20px_-6px_rgba(251,146,60,0.4)] transition-all duration-300 hover:scale-[1.02] border border-gray-100 hover:border-orange-200"
            key={`${item.name}-${idx}`}
          >
            <blockquote className="relative">
              {/* Quote icon */}
              <div className="absolute -top-2 -left-2 text-orange-200 text-4xl font-serif">
                "
              </div>
              
              <div className="relative z-10 pt-4">
                <p className="text-gray-700 text-base leading-relaxed mb-6 font-medium italic">
                  "{item.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-semibold text-lg">
                      {item.name}
                    </span>
                    <span className="text-orange-500 text-sm font-medium">
                      {item.designation}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-2 right-2 text-orange-100 text-6xl font-serif opacity-30 rotate-180">
                "
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};