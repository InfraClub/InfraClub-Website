"use client";

import React, { useState, useEffect } from 'react';

interface ScrollToTopButtonProps {
  show: boolean;
}

export default function ScrollToTopButton({ show }: ScrollToTopButtonProps) {
  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      // always render; toggle visibility with classes so animations/transitions work reliably
      className={`fixed bottom-22 right-7 z-50 w-12 h-12 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform ${
        show ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-6 opacity-0 pointer-events-none'
      }`}
      style={{
        backgroundColor: 'rgb(180, 83, 9)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgb(154, 71, 8)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgb(180, 83, 9)';
      }}
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
}