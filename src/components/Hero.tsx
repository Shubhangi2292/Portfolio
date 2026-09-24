import React, { useEffect, useState, useRef } from 'react';
import { ArrowDownRight, Download, Terminal, Database, Code2, Sparkles, Upload, Image as ImageIcon, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [photoFilter, setPhotoFilter] = useState<'editorial-wine' | 'grayscale' | 'contrast'>('editorial-wine');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomPhoto(reader.result as string);
        setIsPhotoModalOpen(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[96vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#070608]/65 backdrop-blur-[2px]"
    >
      {/* Huge Background Layer Word: PORTFOLIO */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none text-center z-0 opacity-[0.035] transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(-50% + ${mouseOffset.x * -35}px), calc(-50% + ${mouseOffset.y * -35}px), 0)`,
        }}
      >
        <span className="font-editorial text-[18vw] font-bold tracking-tight uppercase leading-none block whitespace-nowrap text-cream-100">
          PORTFOLIO
        </span>
      </div>

      {/* Atmospheric ambient wine glow with subtle parallax */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-wine-900/25 blur-[160px] pointer-events-none rounded-full transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(calc(-50% + ${mouseOffset.x * 20}px), calc(-50% + ${mouseOffset.y * 20}px), 0)`,
        }}
      />
      <div
        className="absolute top-12 right-12 w-[420px] h-[420px] bg-wine-800/18 blur-[130px] pointer-events-none rounded-full transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * -15}px, ${mouseOffset.y * -15}px, 0)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 my-auto">
        {/* Availability kicker tag */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-wine-700/40 bg-wine-950/40 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wine-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-wine-500"></span>
          </span>
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-cream-300">
            ● OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Column: Massive Editorial Typography with Parallax Layer */}
          <div
            className="lg:col-span-8 flex flex-col transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0)`,
            }}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-6 h-[1px] bg-wine-500" />
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-wine-400">
                  JAVA DEVELOPER • SOFTWARE DEVELOPER
                </span>
              </div>

              {/* Staggered & Overlapping Headline */}
              <h1 className="font-editorial text-4xl sm:text-7xl md:text-8xl xl:text-9xl font-semibold tracking-tight text-cream-100 leading-[0.9] select-none text-balance">
                <span className="block transform hover:text-white transition-colors duration-300">
                  SHUBHANGI
                </span>
                <span className="block italic font-light text-cream-300 font-editorial -mt-1 sm:-mt-4 ml-3 sm:ml-12 hover:text-wine-300 transition-colors duration-300">
                  BIRADAR
                </span>
              </h1>
            </div>

            {/* Introduction quote */}
            <div className="mt-8 max-w-2xl border-l-2 border-wine-700/60 pl-6 py-1">
              <p className="text-base sm:text-lg text-cream-300/90 font-light leading-relaxed">
                Computer Science graduate focused on Java, software development, SQL and problem solving.
              </p>
            </div>

            {/* Interactive Magnetic CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <MagneticButton
                asAnchor
                href="#projects"
                className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-white bg-wine-800 hover:bg-wine-700 border border-wine-600/80 transition-all duration-300 rounded-sm shadow-xl shadow-wine-950/70"
                data-cursor="EXPLORE"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDownRight className="w-4 h-4 text-cream-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </MagneticButton>

              <MagneticButton
                onClick={onOpenResume}
                className="group inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-cream-200 hover:text-white bg-[#120E12] hover:bg-[#181118] border border-cream-200/15 hover:border-wine-500/50 transition-all duration-300 rounded-sm"
                data-cursor="RESUME"
              >
                <Download className="w-4 h-4 text-wine-400 group-hover:-translate-y-0.5 transition-transform" />
                <span>DOWNLOAD RESUME</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: High-Fashion Editorial Photo / Visual Container with Floating Parallax */}
          <div
            className="lg:col-span-4 w-full transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translate3d(${mouseOffset.x * -16}px, ${mouseOffset.y * -16}px, 0)`,
            }}
          >
            <div className="relative border border-cream-200/15 bg-[#100C11]/90 backdrop-blur-md p-6 sm:p-7 rounded-sm shadow-2xl overflow-hidden group">
              {/* Corner decorative crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-cream-500 select-none">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-cream-500 select-none">+</div>
              <div className="absolute bottom-2 left-2 text-[10px] font-mono text-cream-500 select-none">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-cream-500 select-none">+</div>

              {/* Subtle top metadata */}
              <div className="flex items-center justify-between pb-3.5 border-b border-cream-200/10 text-[10px] font-mono tracking-widest text-cream-400 uppercase">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-wine-400" />
                  <span>EDITION: 2026 // SB</span>
                </span>
                <span className="text-wine-400">12.9716° N, 77.5946° E</span>
              </div>

              {/* Photo Area with Editorial Framing & Replaceability */}
              <div className="my-5 relative overflow-hidden rounded-sm border border-cream-200/10 aspect-[4/3] bg-gradient-to-b from-[#181118] to-[#0A070A] flex flex-col items-center justify-center text-center group/photo">
                {customPhoto ? (
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={customPhoto}
                      alt="Shubhangi Biradar"
                      className={`w-full h-full object-cover transition-all duration-500 group-hover/photo:scale-105 ${
                        photoFilter === 'grayscale'
                          ? 'grayscale contrast-125'
                          : photoFilter === 'contrast'
                          ? 'contrast-150 brightness-90'
                          : 'sepia-[0.25] hue-rotate-[320deg] contrast-110'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0A0F] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                ) : (
                  <div className="p-6 flex flex-col items-center justify-center space-y-3">
                    <div className="w-20 h-20 rounded-full border border-wine-600/40 bg-gradient-to-b from-wine-900/60 to-wine-950 flex items-center justify-center shadow-inner group-hover/photo:scale-105 transition-transform duration-500">
                      <span className="font-editorial text-3xl font-bold tracking-wider text-cream-100">
                        SB
                      </span>
                    </div>
                    <div>
                      <h4 className="font-editorial text-xl font-semibold text-cream-100 tracking-wide">
                        Shubhangi Biradar
                      </h4>
                      <p className="text-xs text-cream-400 mt-0.5">
                        Java Developer • Software Developer
                      </p>
                    </div>
                  </div>
                )}

                {/* Quick Photo Upload / Preview Trigger Bar */}
                <button
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="absolute bottom-2 right-2 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-cream-300 bg-black/80 hover:bg-wine-900 border border-cream-200/20 rounded-sm backdrop-blur-sm transition-colors flex items-center gap-1.5"
                  title="Upload or preview professional photograph"
                >
                  <Upload className="w-3 h-3 text-wine-400" />
                  <span>{customPhoto ? 'Customize Photo' : 'Add Portrait'}</span>
                </button>
              </div>

              {/* Technical specs highlight list */}
              <div className="space-y-2 text-xs text-cream-300">
                <div className="flex items-center justify-between py-1 border-b border-cream-200/5">
                  <span className="text-cream-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-wine-400" />
                    Specialization
                  </span>
                  <span className="font-medium text-cream-100">Java & Back-end Logic</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-cream-200/5">
                  <span className="text-cream-400 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-wine-400" />
                    Databases
                  </span>
                  <span className="font-medium text-cream-100">SQL & SQLite</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-cream-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-wine-400" />
                    Academic Standing
                  </span>
                  <span className="font-mono text-wine-300 font-semibold">88% (CGPA: 7.84)</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-cream-200/10 text-[10px] font-mono tracking-widest text-cream-500 text-right">
                PRESIDENCY UNIVERSITY • BANGALORE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Marquee / Metric Ribbon */}
      <div className="w-full mt-16 border-y border-cream-200/10 bg-[#0A070B]/75 backdrop-blur-[4px]/95 py-4 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-y-3 text-xs tracking-[0.2em] font-mono uppercase text-cream-400">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-wine-500" />
            <span>DEGREE: B.TECH CSE</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-wine-500" />
            <span>FOCUS: JAVA & SQL</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-wine-500" />
            <span>12TH SCORE: 93.4%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-wine-500" />
            <span>PROJECT: CAREERCOMPASS</span>
          </div>
        </div>
      </div>

      {/* Hidden file input for photo upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Modal for Portrait Customization */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-md bg-[#130E14] border border-cream-200/20 rounded-sm p-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-cream-200/10">
              <h3 className="font-editorial text-2xl font-semibold text-cream-100">
                Hero Portrait Settings
              </h3>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="text-xs font-mono text-cream-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-cream-300/90 leading-relaxed font-light">
              You can upload your own professional photograph anytime. It will be seamlessly styled with our dark editorial tone and wine rim lighting.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-3 text-xs font-mono tracking-wider uppercase text-white bg-wine-800 hover:bg-wine-700 border border-wine-600 rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Upload From Device</span>
              </button>

              {customPhoto && (
                <div className="space-y-3 pt-2 border-t border-cream-200/10">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-cream-400 block">
                    EDITORIAL COLOR FILTER:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setPhotoFilter('editorial-wine')}
                      className={`p-2 text-[10px] font-mono text-cream-200 border rounded-sm transition-colors ${
                        photoFilter === 'editorial-wine' ? 'border-wine-500 bg-wine-950' : 'border-cream-200/10'
                      }`}
                    >
                      Wine Rim Light
                    </button>
                    <button
                      onClick={() => setPhotoFilter('grayscale')}
                      className={`p-2 text-[10px] font-mono text-cream-200 border rounded-sm transition-colors ${
                        photoFilter === 'grayscale' ? 'border-wine-500 bg-wine-950' : 'border-cream-200/10'
                      }`}
                    >
                      Monochrome
                    </button>
                    <button
                      onClick={() => setPhotoFilter('contrast')}
                      className={`p-2 text-[10px] font-mono text-cream-200 border rounded-sm transition-colors ${
                        photoFilter === 'contrast' ? 'border-wine-500 bg-wine-950' : 'border-cream-200/10'
                      }`}
                    >
                      High Contrast
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setCustomPhoto(null);
                      setIsPhotoModalOpen(false);
                    }}
                    className="w-full py-2 text-[11px] font-mono text-wine-400 hover:text-wine-300"
                  >
                    Reset to Default Monogram
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="px-4 py-2 text-xs font-mono text-cream-400 hover:text-white"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
