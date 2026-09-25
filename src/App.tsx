import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { CinematicIntro } from './components/CinematicIntro';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { TechnicalSkills } from './components/TechnicalSkills';
import { DevelopmentApproach } from './components/DevelopmentApproach';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth >= 1024);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset || document.documentElement.scrollTop || 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Laptop Screen Portal Emergence Math
  const INTRO_STAGE_HEIGHT = isDesktop ? 2200 : 0;
  const PORTAL_START = isDesktop ? 1000 : 0;

  let portalScale = 1;
  let portalOpacity = 1;

  if (isDesktop && scrollTop < INTRO_STAGE_HEIGHT) {
    if (scrollTop < PORTAL_START) {
      portalOpacity = 0;
      portalScale = 0.35;
    } else {
      const p = (scrollTop - PORTAL_START) / (INTRO_STAGE_HEIGHT - PORTAL_START);
      // Smoothstep easing curve
      const smoothP = p * p * (3 - 2 * p);
      portalOpacity = smoothP;
      portalScale = 0.35 + smoothP * 0.65;
    }
  }

  return (
    <div className="min-h-screen bg-[#070608] text-[#EDE7DC] selection:bg-[#741B2C] selection:text-white relative">
      {/* Film grain noise overlay */}
      <div className="noise-overlay" />

      {/* Top 0% -> 100% Scroll Progress Bar */}
      <ScrollProgress />

      {/* Refined Custom Circular Cursor */}
      <CustomCursor />

      {/* Floating Sticky Minimal Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Cinematic Video Intro Canvas Engine (Fixed Background) */}
      {isDesktop && <CinematicIntro />}

      {/* Main Website Container with Laptop Screen Emergence Effect */}
      <div className="relative z-10">
        {/* Scroll spacer for initial laptop intro sequence */}
        {isDesktop && <div className="h-[2200px] pointer-events-none" />}

        {/* Live Interactive Portfolio Website (Emerging from Laptop Screen Portal) */}
        <div
          style={{
            transform: isDesktop && scrollTop < INTRO_STAGE_HEIGHT ? `scale(${portalScale})` : 'none',
            opacity: isDesktop && scrollTop < INTRO_STAGE_HEIGHT ? portalOpacity : 1,
            transformOrigin: 'center center',
            willChange: 'transform, opacity'
          }}
          className={`w-full transition-opacity duration-100 ${
            isDesktop && scrollTop < PORTAL_START ? 'pointer-events-none' : ''
          }`}
        >
          <main>
            <Hero onOpenResume={() => setResumeModalOpen(true)} />
            <About />
            <Projects />
            <TechnicalSkills />
            <DevelopmentApproach />
            <Education />
            <Certifications />
            <ResumeSection onOpenResume={() => setResumeModalOpen(true)} />
            <Contact />
          </main>

          {/* Minimal Editorial Footer */}
          <Footer />
        </div>
      </div>

      {/* Interactive Curriculum Vitae & Printable PDF Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
