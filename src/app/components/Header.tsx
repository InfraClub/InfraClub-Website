"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useElementInView } from "../hooks/useScroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isAtTop: isGlobeAtTop } = useElementInView('globe-section');

  const hoverColor = 'rgb(180, 83, 9)';

  useEffect(() => {
    const sectionIds = ['hero', 'whatWeDo', 'whyChooseUs', 'aboutUs', 'testimonials', 'portfolio', 'callToAction'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible (has the largest intersection ratio)
        let mostVisibleSection = null;
        let maxIntersectionRatio = 0;
        
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });
        
        // If no section is intersecting significantly, check which section is closest to the center
        if (!mostVisibleSection || maxIntersectionRatio < 0.1) {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const centerY = scrollY + windowHeight / 2;
          
          let closestSection = 'hero';
          let minDistance = Infinity;
          
          sectionIds.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = scrollY + rect.top;
              const elementCenter = elementTop + rect.height / 2;
              const distance = Math.abs(centerY - elementCenter);
              
              if (distance < minDistance) {
                minDistance = distance;
                closestSection = sectionId;
              }
            }
          });
          
          mostVisibleSection = closestSection;
        }
        
        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    // Wait for DOM to be ready, then observe sections
    const observeSections = () => {
      sectionIds.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });
    };

    // Use setTimeout to ensure all components are mounted
    const timer = setTimeout(observeSections, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Update colors when active section changes
  useEffect(() => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const sectionId = href?.replace('#', '') || '';
      const element = link as HTMLElement;
      
      if (activeSection === sectionId) {
        element.style.color = hoverColor;
      } else {
        element.style.color = 'black';
      }
    });
  }, [activeSection, hoverColor]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).style.color = hoverColor;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const href = target.getAttribute('href');
    const sectionId = href?.replace('#', '') || '';
    
    // Keep active section orange, others back to black
    if (activeSection === sectionId) {
      target.style.color = hoverColor;
    } else {
      target.style.color = 'black';
    }
  };

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${
      isGlobeAtTop ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 pointer-events-auto translate-y-0'
    }`}>
      {/* Dynamic Island Container */}
      <div className="bg-black/15 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-lg shadow-black/15 drop-shadow-md" style={{
        boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.1)'
      }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo Image */}
          <Link href="/" className="flex items-center">
            <img 
              src="/logo_word.png" 
              alt="InfraClub" 
              className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300 hover:opacity-80"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-black font-medium text-lg flex-1 justify-center" style={{ fontFamily: 'Times New Roman, serif' }}>
            <a href="#hero" className={`transition-all duration-300 ease-out cursor-pointer ${
              activeSection === 'hero' ? 'font-bold' : ''
            }`} 
            style={{ color: activeSection === 'hero' ? hoverColor : 'black' }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Home
            </a>
            <a href="#whatWeDo" className={`transition-all duration-300 ease-out cursor-pointer ${
              activeSection === 'whatWeDo' ? 'font-bold' : ''
            }`} 
            style={{ color: activeSection === 'whatWeDo' ? hoverColor : 'black' }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Services
            </a>
            <a href="#whyChooseUs" className={`transition-all duration-300 ease-out cursor-pointer ${
              activeSection === 'whyChooseUs' ? 'font-bold' : ''
            }`} 
            style={{ color: activeSection === 'whyChooseUs' ? hoverColor : 'black' }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Why Us
            </a>
            <a href="#aboutUs" className={`transition-all duration-300 ease-out cursor-pointer ${
              activeSection === 'aboutUs' ? 'font-bold' : ''
            }`} 
            style={{ color: activeSection === 'aboutUs' ? hoverColor : 'black' }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              About Us
            </a>
            <a href="#testimonials" className={`transition-all duration-300 ease-out cursor-pointer ${
              activeSection === 'testimonials' ? 'font-bold' : ''
            }`} 
            style={{ color: activeSection === 'testimonials' ? hoverColor : 'black' }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Customers
            </a>
            <a href="#portfolio" className={`transition-all duration-300 ease-out cursor-pointer ${
              activeSection === 'portfolio' ? 'font-bold' : ''
            }`} 
            style={{ color: activeSection === 'portfolio' ? hoverColor : 'black' }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Portfolio
            </a>
            <a href="#callToAction" className={`transition-all duration-300 ease-out cursor-pointer ${
              activeSection === 'callToAction' ? 'font-bold' : ''
            }`} 
            style={{ color: activeSection === 'callToAction' ? hoverColor : 'black' }}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Connect
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center text-black transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl shadow-black/20 mx-4 transform origin-top ${
        isOpen 
          ? 'opacity-100 scale-100 translate-y-0 transition-all duration-300 ease-out' 
          : 'opacity-0 scale-95 -translate-y-2 transition-all duration-200 ease-in pointer-events-none'
      }`} style={{
        transformOrigin: 'top center',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)'
      }}>
        <nav className="flex flex-col space-y-0 px-6 py-4 text-black font-medium text-base text-center overflow-hidden" style={{ fontFamily: 'Times New Roman, serif' }}>
          {[
            { href: "#hero", text: "Home", delay: "50ms", section: "hero" },
            { href: "#whatWeDo", text: "Services", delay: "100ms", section: "whatWeDo" },
            { href: "#whyChooseUs", text: "Why Us", delay: "150ms", section: "whyChooseUs" },
            { href: "#aboutUs", text: "About Us", delay: "200ms", section: "aboutUs" },
            { href: "#testimonials", text: "Customers", delay: "250ms", section: "testimonials" },
            { href: "#portfolio", text: "Portfolio", delay: "300ms", section: "portfolio" },
            { href: "#callToAction", text: "Connect", delay: "350ms", section: "callToAction" }
          ].map((item, index) => (
            <a 
              key={item.href}
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className={`transition-all duration-300 ease-out py-3 cursor-pointer rounded-lg hover:bg-white/10 hover:scale-105 transform ${
                isOpen 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-4'
              } ${
                activeSection === item.section ? 'font-bold bg-white/15' : ''
              }`}
              style={{
                transitionDelay: isOpen ? item.delay : '0ms',
                transitionProperty: 'all',
                color: activeSection === item.section ? hoverColor : 'black'
              }}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
