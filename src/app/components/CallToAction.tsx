"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="callToAction" className="relative pt-26 pb-10 overflow-hidden" style={{background: '#f1efe7'}}>
      {/* Background elements similar to hero */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Section Heading */}
      <motion.h2
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="relative z-10 flex items-center justify-center text-sm font-semibold text-[#866458] uppercase mb-12"
      >
        <span className="w-16 border-t border-[#866458]"></span>
        <span className="px-4 tracking-widest">C A L L &nbsp; T O &nbsp; A C T I O N</span>
        <span className="w-16 border-t border-[#866458]"></span>
      </motion.h2>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
        
        {/* Main Heading */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-snug mb-4" style={{fontFamily: 'Times New Roman, serif'}}>
            Let's Build Something
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium italic leading-none" style={{fontFamily: 'Times New Roman, serif', color: 'rgb(180, 83, 9)'}}>
            Amazing Together
          </h2>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="mb-8 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Get in touch with us today and let's discuss how we can bring your infrastructure vision to life. 
            Quality solutions are just a message away.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          className="flex flex-row gap-2 sm:gap-6 justify-center items-center mb-8"
        >
          {/* Email Button */}
          <a 
            href="mailto:infraclubofficial@gmail.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with you."
            className="group relative inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 bg-white/90 hover:bg-white border-2 border-orange-300 rounded-full text-gray-800 font-semibold text-sm sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex-1 sm:flex-none sm:min-w-[250px] max-w-[160px] sm:max-w-none"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Email Us</span>
            <span className="sm:hidden">Email</span>
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/918088722557?text=Hello! I'm interested in your infrastructure services and would like to discuss a project."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-4 sm:px-8 py-3 sm:py-4 text-white font-semibold text-sm sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex-1 sm:flex-none sm:min-w-[250px] max-w-[160px] sm:max-w-none"
            style={{backgroundColor: 'rgb(180, 83, 9)'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(154, 71, 8)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(180, 83, 9)'}
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.324"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp Us Now</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </motion.div>

        
      </div>
    </div>
  );
}

export default CallToAction;

