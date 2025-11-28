"use client";

import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export const useElementInView = (elementId: string) => {
  const [isInView, setIsInView] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        // Check if element is at the top of the viewport
        const rect = element.getBoundingClientRect();
        setIsAtTop(rect.top <= 0 && rect.bottom > 0);
      },
      {
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '-1px 0px 0px 0px'
      }
    );

    observer.observe(element);

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      setIsAtTop(rect.top <= 0 && rect.bottom > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementId]);

  return { isInView, isAtTop };
};