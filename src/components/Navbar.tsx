import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'WORK', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleMobileNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#070608]/65 backdrop-blur-[2px]/85 backdrop-blur-md border-b border-cream-200/10 py-4 shadow-xl shadow-black/40'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Logo SB */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            data-cursor="TOP"
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-wine-800 to-wine-950 border border-wine-600/50 flex items-center justify-center group-hover:border-wine-400 transition-colors shadow-md">
              <span className="font-editorial text-lg font-bold text-cream-100 group-hover:scale-105 transition-transform">
                SB
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-editorial text-sm font-semibold tracking-wider text-cream-100 block group-hover:text-white transition-colors">
                SHUBHANGI BIRADAR
              </span>
              <span className="text-[9px] font-mono tracking-widest text-wine-400 block uppercase">
                JAVA DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-[0.2em] text-cream-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cream-100 hover:text-wine-300 transition-colors relative py-1 group"
                data-cursor="NAV"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-wine-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={onOpenResume}
              className="hidden lg:flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider uppercase text-cream-200 hover:text-white bg-[#140E15] hover:bg-wine-900 border border-cream-200/15 hover:border-wine-500 rounded-sm transition-all"
              data-cursor="RESUME"
            >
              <Download className="w-3.5 h-3.5 text-wine-400" />
              <span>RESUME</span>
            </MagneticButton>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-cream-300 hover:text-white md:hidden rounded-sm hover:bg-wine-950 border border-cream-200/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Elegant Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#070608]/65 backdrop-blur-[2px]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto max-h-screen animate-in fade-in duration-300 md:hidden">
          {/* Top Bar inside mobile menu */}
          <div className="flex items-center justify-between border-b border-cream-200/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-wine-900 border border-wine-500/50 flex items-center justify-center">
                <span className="font-editorial text-base font-bold text-cream-100">SB</span>
              </div>
              <span className="font-editorial text-lg text-cream-100">Shubhangi Biradar</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-cream-300 hover:text-white rounded-sm border border-cream-200/10"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list in large editorial typography */}
          <div className="space-y-6 my-auto">
            {navLinks.map((link, idx) => (
              <button
                key={link.label}
                onClick={() => handleMobileNavClick(link.href)}
                className="w-full text-left font-editorial text-4xl sm:text-5xl font-semibold text-cream-200 hover:text-wine-400 transition-colors flex items-center justify-between group"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-wine-500 group-hover:translate-x-2 transition-transform">
                  0{idx + 1} ↗
                </span>
              </button>
            ))}
          </div>

          {/* Bottom Actions inside mobile menu */}
          <div className="pt-6 border-t border-cream-200/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-4 text-xs font-semibold tracking-[0.2em] uppercase text-white bg-wine-800 hover:bg-wine-700 border border-wine-600 rounded-sm flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME (CV)</span>
            </button>

            <div className="text-center text-[10px] font-mono tracking-widest text-cream-500 uppercase">
              BANGALORE, KARNATAKA • JAVA DEVELOPER
            </div>
          </div>
        </div>
      )}
    </>
  );
};
