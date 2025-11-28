"use client";

import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import WhatWeDo from "./components/WhatWeDo";
import WhyChooseUs from "./components/WhyChooseUs";
import Certifications from "./components/Certifications";
import CallToAction from "./components/CallToAction";
import Globe from "./components/Globe";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useElementInView } from "./hooks/useScroll";
import Chatbot from "./components/Chatbot";

export default function Home() {
  const { isAtTop: isGlobeAtTop } = useElementInView('globe-section');

  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <WhatWeDo/>
        <WhyChooseUs/>
        <AboutUs/>
        <Testimonials/>
        <Portfolio/>
        {/* <Certifications/> */}
        <CallToAction/>
        <Globe/>
        <Chatbot/>
      </main>
      <Footer/>
      <ScrollToTopButton show={isGlobeAtTop} />
    </>
  );
}

