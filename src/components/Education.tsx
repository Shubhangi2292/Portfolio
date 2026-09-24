import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookCheck, Sparkles, Building2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 relative border-b border-cream-200/10 bg-[#070608]/65 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Coordinates */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-cream-200/10 text-xs font-mono tracking-widest text-cream-400">
          <div className="flex items-center gap-3">
            <span className="text-wine-400 font-bold">05 //</span>
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-wine-400">+</span>
            <span>PRESIDENCY UNIVERSITY</span>
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-20">
          <h2 className="font-editorial text-6xl sm:text-7xl md:text-8xl font-semibold text-cream-100 tracking-tight leading-[0.9]">
            ACADEMIC
            <span className="block font-light italic text-wine-400/90 font-editorial ml-4 sm:ml-12">
              EXCELLENCE.
            </span>
          </h2>
        </div>

        {/* Large Numbers & Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Degree Card (Spans 7) */}
          <div className="lg:col-span-7 border border-cream-200/15 bg-gradient-to-br from-[#140E15] via-[#100C11] to-[#0A070B] p-8 sm:p-12 rounded-sm flex flex-col justify-between hover:border-wine-500/50 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-3 left-3 text-[10px] font-mono text-cream-500 select-none">+</div>
            <div className="absolute top-3 right-3 text-[10px] font-mono text-cream-500 select-none">+</div>

            <div>
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-cream-200/10">
                <span className="text-xs font-mono tracking-widest uppercase text-wine-400">
                  UNDERGRADUATE DEGREE
                </span>
                <GraduationCap className="w-5 h-5 text-wine-400" />
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-editorial text-7xl sm:text-8xl font-bold text-cream-100 tabular-nums">
                    7.84
                  </span>
                  <span className="text-sm font-mono text-wine-400 tracking-widest uppercase">
                    CGPA / 10.0 SCALE
                  </span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-cream-100">
                  B.Tech in Computer Science and Technology
                </h3>

                <p className="font-mono text-sm text-wine-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  Presidency University, Bangalore
                </p>

                <p className="text-sm sm:text-base text-cream-300/80 font-light leading-relaxed pt-4 max-w-xl">
                  Curriculum centered on core computing fundamentals: Data Structures, Object-Oriented Programming, Database Management Systems, Software Engineering, and Operating Systems.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-cream-200/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cream-400">
              <span>LOCATION: BANGALORE, KARNATAKA</span>
              <span className="text-wine-300">GRADUATION PERCENTAGE: 88%</span>
            </div>
          </div>

          {/* Secondary Metric Cards (Spans 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* 12th Score Card */}
            <div className="border border-cream-200/15 bg-[#100C11] p-8 rounded-sm flex flex-col justify-between hover:border-wine-500/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-cream-200/10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-wine-400">
                    HIGHER SECONDARY (12TH)
                  </span>
                  <Award className="w-4 h-4 text-wine-400" />
                </div>

                <div className="flex items-baseline gap-3 my-2">
                  <span className="font-editorial text-6xl font-bold text-cream-100 tabular-nums">
                    93.4%
                  </span>
                  <span className="text-xs font-mono text-cream-400">
                    AGGREGATE
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed mt-2">
                  Demonstrated sustained academic discipline with distinction in core science and mathematics.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200/10 text-[11px] font-mono text-cream-400">
                FOUNDATIONAL MERIT
              </div>
            </div>

            {/* Graduation Aggregate Card */}
            <div className="border border-wine-800/40 bg-gradient-to-br from-[#160E16] to-[#0E0A0F] p-8 rounded-sm flex flex-col justify-between hover:border-wine-500 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-cream-200/10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-wine-300">
                    GRADUATION PERFORMANCE
                  </span>
                  <BookCheck className="w-4 h-4 text-wine-400" />
                </div>

                <div className="flex items-baseline gap-3 my-2">
                  <span className="font-editorial text-6xl font-bold text-cream-100 tabular-nums">
                    88%
                  </span>
                  <span className="text-xs font-mono text-cream-300">
                    OVERALL PERCENTILE
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed mt-2">
                  Consistent performance across engineering semesters at Presidency University.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200/10 text-[11px] font-mono text-wine-400">
                VERIFIED ACADEMIC TRANSCRIPT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
