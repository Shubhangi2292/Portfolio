import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#050406] border-t border-cream-200/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-cream-200/10">
          <div>
            <h3 className="font-editorial text-3xl font-bold tracking-tight text-cream-100 uppercase">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs font-mono tracking-[0.25em] text-wine-400 mt-1 uppercase">
              JAVA DEVELOPER • SOFTWARE DEVELOPER
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-xs font-mono tracking-widest text-cream-400">
            <a href="#about" className="hover:text-cream-100 transition-colors">ABOUT</a>
            <a href="#projects" className="hover:text-cream-100 transition-colors">WORK</a>
            <a href="#skills" className="hover:text-cream-100 transition-colors">SKILLS</a>
            <a href="#education" className="hover:text-cream-100 transition-colors">EDUCATION</a>
            <a href="#contact" className="hover:text-cream-100 transition-colors">CONTACT</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono tracking-wider text-cream-300 hover:text-white bg-[#100C11] hover:bg-wine-950 border border-cream-200/15 rounded-sm transition-colors cursor-pointer group"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-wine-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cream-500">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="tracking-widest uppercase">
            B.TECH IN COMPUTER SCIENCE & TECHNOLOGY • PRESIDENCY UNIVERSITY
          </div>
        </div>
      </div>
    </footer>
  );
};
