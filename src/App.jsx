import { useState, useEffect } from 'react';
import { useTweaks } from './hooks/useTweaks';

import Nav from './components/Nav';
import Hero from './sections/Hero';
import Marquee from './sections/Marquee';
import HowItWorks from './sections/HowItWorks';
import SimulatorSection from './sections/SimulatorSection';
import Features from './sections/Features';
import ReportSection from './sections/ReportSection';
import CompareSection from './sections/CompareSection';
import SecuritySection from './sections/SecuritySection';
import RoadmapSection from './sections/RoadmapSection';
import TestimonialSection from './sections/TestimonialSection';
import FaqSection from './sections/FaqSection';
import FinalCta from './sections/FinalCta';
import Footer from './sections/Footer';

const TWEAK_DEFAULTS = {
  heroVariant: 'split',
  accent: 'amber',
  headline: 'ledger',
  floatCards: true,
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      <Hero tweaks={tweaks} />
      <Marquee />
      <HowItWorks />
      <SimulatorSection />
      <Features />
      <ReportSection />
      <CompareSection />
      <SecuritySection />
      <RoadmapSection />
      <TestimonialSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </>
  );
}
