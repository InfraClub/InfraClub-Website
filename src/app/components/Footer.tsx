'use client';

import { useState } from 'react';

export default function Footer() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleMouseEnter = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1000);
  };

  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section - Separate on mobile */}
        <div className="mb-8 lg:mb-0">
          <div className="lg:hidden">
            <img
              src="/logo_text_white.png"
              alt="InfraClub"
              className="h-30 w-auto mb-0"
            />
            <p className="text-gray-400 text-sm mt-0 mb-4">
              <i>One Stop Infrastructure Solution</i>
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-6">

          {/* Logo and Company Info - Desktop only */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="mb-6">
              <img
                src="/logo_text_white.png"
                alt="InfraClub"
                className="h-44 w-auto mb-0"
              />
              <p className="text-gray-400 text-center text-sm mt-0 mb-4">
                <i>One Stop Infrastructure Solution</i>
              </p>
              {/* <p>Excellence in residential construction. Turning every dream home
               into a strong lasting reality. We focus on quality, safety, and
               timely delivery.</p> */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 lg:mb-6 uppercase text-xs sm:text-sm tracking-wider">
              SERVICES
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a href="#whatWeDo" className="footer-link text-gray-400 hover:text-white text-sm">
                  WHAT WE DO
                </a>
              </li>
              <li>
                <a href="#whyChooseUs" className="footer-link text-gray-400 hover:text-white text-sm">
                  WHY CHOOSE US
                </a>
              </li>
              <li>
                <a href="#certifications" className="footer-link text-gray-400 hover:text-white text-sm">
                  CERTIFICATIONS
                </a>
              </li>
              <li>
                <a href="#callToAction" className="footer-link text-gray-400 hover:text-white text-sm">
                  GET QUOTE
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-white font-semibold mb-3 lg:mb-6 uppercase text-xs sm:text-sm tracking-wider">
              PROJECTS
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a href="#portfolio" className="footer-link text-gray-400 hover:text-white text-sm">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link text-gray-400 hover:text-white text-sm">
                  CLIENT REVIEWS
                </a>
              </li>
              <li>
                <a href="#hero" className="footer-link text-gray-400 hover:text-white text-sm">
                  FEATURED WORK
                </a>
              </li>
              <li>
                <a href="#callToAction" className="footer-link text-gray-400 hover:text-white text-sm">
                  REQUEST PROJECT
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 lg:mb-6 uppercase text-xs sm:text-sm tracking-wider">
              COMPANY
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a href="#aboutUs" className="footer-link text-gray-400 hover:text-white text-sm">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link text-gray-400 hover:text-white text-sm">
                  CUSTOMERS
                </a>
              </li>
              <li>
                <a href="#callToAction" className="footer-link text-gray-400 hover:text-white text-sm">
                  CONTACT US
                </a>
              </li>
              <li>
                <a href="#hero" className="footer-link text-gray-400 hover:text-white text-sm">
                  CAREERS
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h3 className="text-white font-semibold mb-3 lg:mb-6 uppercase text-xs sm:text-sm tracking-wider">
              RESOURCES
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a href="#whatWeDo" className="footer-link text-gray-400 hover:text-white text-sm">
                  DOCUMENTATION
                </a>
              </li>
              <li>
                <a href="#certifications" className="footer-link text-gray-400 hover:text-white text-sm">
                  QUALITY STANDARDS
                </a>
              </li>
              <li>
                <a href="#callToAction" className="footer-link text-gray-400 hover:text-white text-sm">
                  SUPPORT
                </a>
              </li>
              <li>
                <a href="#hero" className="footer-link text-gray-400 hover:text-white text-sm">
                  BLOG
                </a>
              </li>
            </ul>
          </div>*/}

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 lg:mb-6 uppercase text-xs sm:text-sm tracking-wider">
              CONTACT US
            </h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
              <a
            href="https://www.google.com/maps/place/Infraclub+Private+Limited/@13.0618945,77.5041817,19.64z/data=!4m14!1m7!3m6!1s0x3bae230031b4acdb:0x8b66ceb7a0963bbc!2sInfraclub+Private+Limited!8m2!3d13.0619558!4d77.5041364!16s%2Fg%2F11xw4ml30f!3m5!1s0x3bae230031b4acdb:0x8b66ceb7a0963bbc!8m2!3d13.0619558!4d77.5041364!16s%2Fg%2F11xw4ml30f?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link text-gray-400 hover:text-white text-sm"
          >
           #260, 8th A Cross Road, MEI Layout, Bangalore - 560073
          </a>
            </li>
            <li>
          <a
            href="tel:+918088722557"
            className="footer-link text-gray-400 hover:text-white text-sm"
          >
            +91 80887 22557
          </a>
            </li>
            <li>
          <a
            href="mailto:infraclubofficial@gmail.com"
            className="footer-link text-gray-400 hover:text-white text-sm"
          >
            infraclubofficial@gmail.com
          </a>
          </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">

          {/* Social Media and Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">

            {/* Contact Icons */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {/* Instagram */}
              <a href="https://instagram.com/infraclubpvtltd" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Mail */}
              <a href="mailto:infraclubofficial@gmail.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>

              {/* Phone */}
              <a href="tel:+918088722557" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </a>

              {/* Address */}
              <a href="https://maps.app.goo.gl/uyw4SQ1XqytfqLqQA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
                <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Copyright and Credits */}
            <div className="text-center md:text-center">
              <p className="text-gray-400 text-sm mb-1">
                Copyright © {new Date().getFullYear()} Infraclub Private Limited | All rights reserved
              </p>
              <div className="text-gray-500 text-xs">
                Designed and developed by{' '}
                <span
                  className="text-gray-300 font-medium relative cursor-pointer select-none inline-block"
                  onMouseEnter={handleMouseEnter}
                  onClick={handleMouseEnter}
                >
                  1mb
                  {showConfetti && (
                    <span className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * 45); // 8 directions: 0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°
                        const distance = 25;
                        const x = Math.cos(angle * Math.PI / 180) * distance;
                        const y = Math.sin(angle * Math.PI / 180) * distance;
                        return (
                          <span
                            key={i}
                            className="absolute text-sm animate-confetti"
                            style={{
                              left: '50%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)',
                              '--burst-x': `${x}px`,
                              '--burst-y': `${y}px`,
                            } as React.CSSProperties}
                          >
                            ✨
                          </span>
                        );
                      })}
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: rgb(251, 146, 60);
          transition: width 0.3s ease;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .animate-confetti {
          animation: confetti 0.6s ease-out forwards;
        }

        @keyframes confetti {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          30% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--burst-x)), calc(-50% + var(--burst-y))) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </footer>
  );
}

