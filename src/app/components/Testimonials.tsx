"use client";

import React from "react";
import { DraggableInfiniteCards, TestimonialItem } from "./ui/draggable-infinite-cards";

const testimonials: TestimonialItem[] = [
  {
    quote: "InfraClub built our dream home in JP Nagar with exceptional attention to detail. Their innovative approach and quality construction exceeded all our expectations. Highly recommended!",
    name: "Rajesh Kumar",
    designation: "JP Nagar, Bangalore"
  },
  {
    quote: "The quality of workmanship and timely delivery was outstanding. Our villa in Whitefield was completed on schedule with beautiful finishing. Very professional team!",
    name: "Priya Sharma",
    designation: "Whitefield, Bangalore"
  },
  {
    quote: "From design to completion, InfraClub demonstrated unmatched expertise. Our new home in Sarjapur is exactly what we dreamed of. Thank you for making it a reality!",
    name: "Arjun Reddy",
    designation: "Sarjapur, Bangalore"
  },
  {
    quote: "InfraClub's innovative construction techniques and eco-friendly materials were perfect for our home in Mysore. They stayed within budget and delivered exceptional quality.",
    name: "Sneha Patel",
    designation: "Mysore"
  },
  {
    quote: "Outstanding project management and attention to detail. Our duplex in Koramangala was delivered exactly as envisioned, on time and within budget. Wonderful experience!",
    name: "Vikram Singh",
    designation: "Koramangala, Bangalore"
  },
  {
    quote: "The team at InfraClub turned our vision into a beautiful reality. Our home in Indiranagar has the perfect blend of modern design and functionality. Great work!",
    name: "Ananya Iyer",
    designation: "Indiranagar, Bangalore"
  },
  {
    quote: "Professional service from start to finish. InfraClub built our home in HSR Layout with innovative design and superior quality construction. Worth every rupee!",
    name: "Karthik Menon",
    designation: "HSR Layout, Bangalore"
  },
  {
    quote: "Exceptional craftsmanship and attention to detail. Our villa in Mangalore reflects exactly what we envisioned. The InfraClub team made the entire process smooth and hassle-free.",
    name: "Deepika Rao",
    designation: "Mangalore"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative pt-26 pb-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 via-amber-200 to-orange-100 opacity-20 blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="flex items-center justify-center text-sm font-semibold text-[#866458] uppercase mb-3">
          <span className="w-16 border-t border-[#866458]"></span>
          <span className="px-4 tracking-widest">O U R &nbsp; C U S T O M E R S</span>
          <span className="w-16 border-t border-[#866458]"></span>
        </h2>

        {/* Testimonials Carousel */}
        <DraggableInfiniteCards
          items={testimonials}
          direction="left"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}
