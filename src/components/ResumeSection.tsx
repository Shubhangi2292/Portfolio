import React from 'react';
import { Download, FileText, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="py-24 relative border-b border-cream-200/10 bg-[#0C090E] overflow-hidden">
      {/* Ambient wine backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[300px] bg-wine-900/20 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 text-center relative z-10">
        <span className="text-xs font-mono tracking-[0.25em] text-wine-400 uppercase block mb-3">
          OPPORTUNITIES & COLLABORATION
        </span>

        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-semibold text-cream-100 tracking-tight max-w-3xl mx-auto leading-tight text-balance">
          LET'S BUILD SOMETHING MEANINGFUL
        </h2>

        <p className="mt-6 text-base sm:text-lg text-cream-300/90 font-light max-w-2xl mx-auto leading-relaxed">
          Interested in software development opportunities where I can apply my Java and problem-solving skills while continuing to learn and grow.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-white bg-wine-800 hover:bg-wine-700 border border-wine-600 rounded-sm transition-all duration-300 shadow-xl shadow-wine-950/80 group"
          >
            <Download className="w-4 h-4 text-cream-300 group-hover:-translate-y-0.5 transition-transform" />
            <span>DOWNLOAD RESUME</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-cream-200 hover:text-white bg-[#151016] hover:bg-[#1A141C] border border-cream-200/15 rounded-sm transition-all duration-300"
          >
            <span>DISCUSS ROLES</span>
            <ArrowUpRight className="w-4 h-4 text-wine-400" />
          </a>
        </div>

        {/* Status indicator */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-cream-400">
          <CheckCircle2 className="w-3.5 h-3.5 text-wine-400" />
          <span>Available for immediate software engineering onboarding (Fresher)</span>
        </div>
      </div>
    </section>
  );
};
