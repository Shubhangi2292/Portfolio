import React, { useState } from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { Code2, Database, Cpu, Layers, Sparkles } from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'database' | 'framework' | 'fundamentals'>('all');

  const filteredSkills = TECHNICAL_SKILLS.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-32 relative border-b border-cream-200/10 bg-[#070608]/65 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Coordinates */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-cream-200/10 text-xs font-mono tracking-widest text-cream-400">
          <div className="flex items-center gap-3">
            <span className="text-wine-400 font-bold">03 //</span>
            <span>VERIFIED CAPABILITIES</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-wine-400">+</span>
            <span>STRICT PROFILE INTEGRITY</span>
          </div>
        </div>

        {/* Section Title: TOOLS & TECHNOLOGIES */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-editorial text-3xl sm:text-6xl md:text-8xl font-semibold text-cream-100 tracking-tight leading-[0.9]">
              TOOLS &
              <span className="block font-light italic text-wine-400/90 font-editorial ml-4 sm:ml-12">
                TECHNOLOGIES.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-cream-300 font-light leading-relaxed">
              Curated specifically to my verified technical foundation. Focuses exclusively on Java backend development, relational database engineering, and practical software frameworks.
            </p>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { id: 'all', label: 'ALL TOOLS' },
            { id: 'core', label: 'JAVA & BACKEND' },
            { id: 'database', label: 'DATABASE & SQL' },
            { id: 'fundamentals', label: 'CORE FUNDAMENTALS' },
            { id: 'framework', label: 'FRAMEWORKS & ML TOOLS' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-mono tracking-wider transition-all duration-200 rounded-sm cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-wine-800 text-white border border-wine-500 shadow-md shadow-wine-950'
                  : 'bg-[#120D12] text-cream-400 border border-cream-200/10 hover:border-cream-200/25 hover:text-cream-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Typography & Interactive Skills Grid with Focus Mode Dimming */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            const isDimmed = hoveredSkill !== null && !isHovered;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                data-cursor="SKILL"
                className={`relative border p-7 rounded-sm flex flex-col justify-between transition-all duration-300 cursor-default ${
                  isHovered
                    ? 'border-wine-500 bg-[#170F18] scale-[1.03] shadow-2xl z-20'
                    : isDimmed
                    ? 'border-cream-200/5 bg-[#0C090D] opacity-40'
                    : 'border-cream-200/10 bg-[#100C11] hover:border-wine-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-cream-200/5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-wine-400">
                      {skill.category === 'core'
                        ? 'CORE BACKEND'
                        : skill.category === 'database'
                        ? 'DATA PERSISTENCE'
                        : skill.category === 'fundamentals'
                        ? 'FUNDAMENTAL'
                        : 'PROJECT TOOL'}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isHovered ? 'bg-wine-400' : 'bg-cream-200/20'
                      }`}
                    />
                  </div>

                  {/* Text expands on hover */}
                  <h3
                    className={`font-editorial font-semibold transition-all duration-300 mb-2 ${
                      isHovered
                        ? 'text-3xl text-cream-50 tracking-normal'
                        : 'text-2xl text-cream-100 tracking-wide'
                    }`}
                  >
                    {skill.name}
                  </h3>

                  <p className="text-xs text-cream-300/80 leading-relaxed font-light mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Practical Context Drawer */}
                <div className="pt-3 border-t border-cream-200/5">
                  <span className="text-[10px] font-mono text-cream-500 uppercase block mb-1">
                    APPLICATION
                  </span>
                  <span className="text-[11px] font-mono text-cream-400 leading-tight block">
                    {skill.practicalContext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote on discipline */}
        <div className="mt-12 text-center text-xs font-mono text-cream-500 tracking-wider">
          ✦ ZERO UNVERIFIED CLAIMS — STRICT ADHERENCE TO SUBMITTED CREDENTIALS
        </div>
      </div>
    </section>
  );
};
