import React from 'react';
import { GraduationCap, Award, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative border-b border-cream-200/10 bg-[#070608]/65 backdrop-blur-[2px] overflow-hidden">
      {/* Decorative ambient wine gradient in corner */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-wine-900/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Editorial Section Coordinate Header */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-cream-200/10 text-xs font-mono tracking-widest text-cream-400">
          <div className="flex items-center gap-3">
            <span className="text-wine-400 font-bold">01 //</span>
            <span>BIOGRAPHICAL PROFILE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-wine-400">+</span>
            <span>BANGALORE, KARNATAKA</span>
          </div>
        </div>

        {/* Magazine-Inspired Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Massive Editorial Typography "ABOUT ME" with overlapping intro */}
          <div className="lg:col-span-6 relative">
            <div className="select-none">
              <span className="font-editorial text-5xl sm:text-8xl md:text-9xl font-semibold tracking-tight text-cream-100/90 leading-[0.85] block">
                ABOUT
              </span>
              <span className="font-editorial text-5xl sm:text-8xl md:text-9xl font-light italic text-wine-400/90 leading-[0.85] block ml-4 sm:ml-16">
                ME.
              </span>
            </div>

            {/* Narrative text block wrapping around typography */}
            <div className="mt-12 space-y-6 max-w-xl">
              <p className="text-lg sm:text-xl text-cream-100 font-light leading-relaxed border-l-2 border-wine-500/80 pl-6">
                "I am a Computer Science and Technology graduate from Presidency University, Bangalore, focused on Java, SQL, object-oriented programming, data structures and software development."
              </p>

              <p className="text-sm sm:text-base text-cream-300/80 leading-relaxed font-light pl-6">
                As a fresher, I enjoy understanding how applications work behind the scenes and turning ideas into practical software solutions. My goal is to contribute effectively to software engineering teams while continuing to expand my backend development expertise.
              </p>

              {/* Technical pillars */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-sm bg-[#110D12] border border-cream-200/10 hover:border-wine-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="w-4 h-4 text-wine-400" />
                    <span className="font-semibold text-xs font-mono uppercase text-cream-100">
                      JAVA & OOP ARCHITECTURE
                    </span>
                  </div>
                  <p className="text-xs text-cream-400 leading-relaxed font-light">
                    Modular class hierarchies, collections, encapsulation, and clean data modeling.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#110D12] border border-cream-200/10 hover:border-wine-500/40 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-wine-400" />
                    <span className="font-semibold text-xs font-mono uppercase text-cream-100">
                      SQL & RELATIONAL DESIGN
                    </span>
                  </div>
                  <p className="text-xs text-cream-400 leading-relaxed font-light">
                    Structured query logic, joins, transactions, constraints, and normalization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Information Blocks Array */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Block 1: Education */}
            <div className="p-6 rounded-sm bg-[#100C11] border border-cream-200/15 hover:border-wine-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-wine-400 uppercase block mb-1">
                  EDUCATION
                </span>
                <h4 className="font-editorial text-2xl font-semibold text-cream-100 mt-1">
                  B.Tech — Computer Science & Technology
                </h4>
              </div>
              <div className="mt-8 pt-4 border-t border-cream-200/10 text-xs font-mono text-cream-400">
                PRESIDENCY UNIVERSITY
              </div>
            </div>

            {/* Block 2: University */}
            <div className="p-6 rounded-sm bg-[#100C11] border border-cream-200/15 hover:border-wine-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-wine-400 uppercase block mb-1">
                  UNIVERSITY
                </span>
                <h4 className="font-editorial text-2xl font-semibold text-cream-100 mt-1">
                  Presidency University, Bangalore
                </h4>
              </div>
              <div className="mt-8 pt-4 border-t border-cream-200/10 text-xs font-mono text-cream-400">
                KARNATAKA, INDIA
              </div>
            </div>

            {/* Block 3: CGPA Metric Card */}
            <div className="p-6 rounded-sm bg-[#140E15] border border-wine-700/40 hover:border-wine-500 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-wine-300 uppercase block mb-1">
                  CUMULATIVE CGPA
                </span>
                <div className="font-editorial text-5xl font-bold text-cream-100 tabular-nums mt-1">
                  7.84
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-cream-200/10 text-xs font-mono text-wine-300">
                10.0 SCALE • CSE
              </div>
            </div>

            {/* Block 4: Career Status */}
            <div className="p-6 rounded-sm bg-[#100C11] border border-cream-200/15 hover:border-wine-500/50 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-wine-400 uppercase block mb-1">
                  CAREER STATUS
                </span>
                <h4 className="font-editorial text-3xl font-semibold text-cream-100 mt-1">
                  Fresher
                </h4>
              </div>
              <div className="mt-8 pt-4 border-t border-cream-200/10 text-xs font-mono text-cream-400">
                READY FOR IMMEDIATE ROLES
              </div>
            </div>

            {/* Block 5: Academic Performance (12th & Graduation) Span 2 */}
            <div className="sm:col-span-2 p-6 rounded-sm bg-gradient-to-r from-[#120D13] to-[#181119] border border-cream-200/15 hover:border-wine-500/40 transition-all duration-300">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-cream-200/10 text-[10px] font-mono tracking-widest text-wine-400 uppercase">
                <span>ACADEMIC PERFORMANCE CONSISTENCY</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="text-xs font-mono text-cream-400 block mb-1">
                    12TH STANDARD AGGREGATE
                  </span>
                  <span className="font-editorial text-4xl font-bold text-cream-100 tabular-nums">
                    93.4%
                  </span>
                </div>
                <div>
                  <span className="text-xs font-mono text-cream-400 block mb-1">
                    GRADUATION PERCENTAGE
                  </span>
                  <span className="font-editorial text-4xl font-bold text-cream-100 tabular-nums">
                    88%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
