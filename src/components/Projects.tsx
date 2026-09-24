import React, { useState } from 'react';
import { ArrowUpRight, Compass, BarChart3, ChevronRight, Layers, Sparkles, Database, Cpu } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { MagneticButton } from './MagneticButton';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 relative border-b border-cream-200/10 bg-[#070608]/65 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Coordinate & Header */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-cream-200/10 text-xs font-mono tracking-widest text-cream-400">
          <div className="flex items-center gap-3">
            <span className="text-wine-400 font-bold">02 //</span>
            <span>FEATURED CAPSTONE & RESEARCH</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-wine-400">+</span>
            <span>02 VERIFIED IMPLEMENTATIONS</span>
          </div>
        </div>

        {/* Section Title: SELECTED WORK */}
        <div className="mb-20">
          <h2 className="font-editorial text-5xl sm:text-7xl md:text-8xl font-semibold text-cream-100 tracking-tight leading-[0.9]">
            SELECTED
            <span className="block font-light italic text-wine-400/90 font-editorial ml-3 sm:ml-12">
              WORK.
            </span>
          </h2>
        </div>

        {/* Large Editorial Project Panels */}
        <div className="space-y-20 lg:space-y-28">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="VIEW"
              className="cursor-pointer relative border border-cream-200/15 bg-gradient-to-br from-[#120D13] via-[#0E0A0F] to-[#080508] rounded-sm p-8 sm:p-12 lg:p-14 shadow-2xl hover:border-wine-500/50 hover:bg-[#150F16] transition-all duration-500 group overflow-hidden"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-cream-500 select-none">+</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-cream-500 select-none">+</div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-cream-500 select-none">+</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-cream-500 select-none">+</div>

              {/* Background ambient wine glow on hover */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-wine-800/0 group-hover:bg-wine-800/15 blur-[120px] transition-colors duration-700 pointer-events-none rounded-full" />

              {/* Top metadata strip: number shifts on hover */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-cream-200/10 text-xs font-mono tracking-widest text-cream-400">
                <span className="text-wine-400 font-editorial text-3xl sm:text-4xl font-bold group-hover:translate-x-3 transition-transform duration-300">
                  {project.number}
                </span>
                <span className="uppercase tracking-[0.2em] px-3.5 py-1.5 bg-wine-950/70 border border-wine-800/50 text-cream-300 rounded-sm">
                  {project.category}
                </span>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left: Typography & Modules */}
                <div className="lg:col-span-7 flex flex-col justify-between group-hover:translate-y-[-2px] transition-transform duration-300">
                  <div>
                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream-100 leading-tight group-hover:text-cream-50 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-wine-300 uppercase tracking-widest mt-2 mb-6">
                      {project.subtitle}
                    </p>

                    <p className="text-base sm:text-lg text-cream-300/90 font-light leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Features list */}
                    {project.modules && (
                      <div className="mb-8 space-y-2.5">
                        <span className="text-[11px] font-mono tracking-widest uppercase text-cream-400 block mb-3">
                          CORE SYSTEM MODULES:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-cream-300">
                          {project.modules.slice(0, 5).map((mod, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-wine-500 shrink-0" />
                              <span className="truncate">{mod.title.replace(/^\d+\.\s*/, '')}</span>
                            </div>
                          ))}
                          <div className="flex items-center gap-2 text-wine-400 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-wine-400 shrink-0" />
                            <span>+ Dropout Risk Calculator & Guidance</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Technology Tags & Action */}
                  <div className="pt-6 border-t border-cream-200/10 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-cream-400 block mb-2.5">
                        TECHNOLOGIES & ARCHITECTURE
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono text-cream-200 bg-[#161017] border border-cream-200/10 rounded-sm group-hover:border-wine-500/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-white bg-wine-800 group-hover:bg-wine-700 px-6 py-3.5 rounded-sm border border-wine-600 transition-all duration-300 shadow-lg">
                      <span>VIEW PROJECT SPECIFICATION</span>
                      <ArrowUpRight className="w-4 h-4 text-cream-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Right: Abstract Data Visualization & Architecture Canvas (NO fake screenshots) */}
                <div className="lg:col-span-5 w-full">
                  <div className="relative border border-cream-200/10 bg-[#0B080C] p-6 rounded-sm overflow-hidden group-hover:border-wine-500/40 transition-all duration-500 group-hover:scale-[1.01]">
                    {/* Top schematic bar */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-cream-200/10 text-[10px] font-mono tracking-wider text-cream-400 uppercase">
                      <span className="flex items-center gap-1.5">
                        {index === 0 ? <Compass className="w-3.5 h-3.5 text-wine-400" /> : <BarChart3 className="w-3.5 h-3.5 text-wine-400" />}
                        <span>{index === 0 ? 'CAREERCOMPASS ARCHITECTURE' : 'STATISTICAL RETENTION MODEL'}</span>
                      </span>
                      <span className="text-wine-400">EXPAND ↗</span>
                    </div>

                    {/* Abstract Interactive SVG Data Flow Visualization */}
                    <div className="relative h-60 w-full rounded-sm bg-[#120D13] border border-cream-200/5 p-4 flex flex-col justify-between overflow-hidden">
                      {/* Grid background */}
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(111,23,40,0.15)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                      {index === 0 ? (
                        <>
                          {/* Animated node diagram for CareerCompass */}
                          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-cream-300">
                            <span className="px-2 py-0.5 bg-black/60 border border-cream-200/20 rounded-sm">USER ASSESSMENTS</span>
                            <span className="text-wine-400">━━▶</span>
                            <span className="px-2 py-0.5 bg-wine-950 border border-wine-600 rounded-sm text-wine-200">TF-IDF & ML</span>
                            <span className="text-wine-400">━━▶</span>
                            <span className="px-2 py-0.5 bg-black/60 border border-cream-200/20 rounded-sm">CAREER GPS</span>
                          </div>

                          <div className="my-auto py-2 z-10 flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 rounded-full border border-wine-500/40 bg-wine-900/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Compass className="w-6 h-6 text-wine-300 animate-spin-slow" />
                            </div>
                            <span className="font-editorial text-base text-cream-100 mt-2">
                              Career Guidance Engine
                            </span>
                            <span className="text-[10px] font-mono text-cream-400">
                              Streamlit • Flask • SQLAlchemy • SQLite
                            </span>
                          </div>

                          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-cream-400 border-t border-cream-200/10 pt-2">
                            <span>DROPOUT RISK PREDICTOR</span>
                            <span className="text-wine-400">7-DAY TRIAL</span>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Data chart schematic for Dropout Analysis */}
                          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-cream-300">
                            <span className="px-2 py-0.5 bg-black/60 border border-cream-200/20 rounded-sm">ACADEMIC DATA</span>
                            <span className="text-wine-400">━━▶</span>
                            <span className="px-2 py-0.5 bg-wine-950 border border-wine-600 rounded-sm text-wine-200">PYTHON / PANDAS</span>
                            <span className="text-wine-400">━━▶</span>
                            <span className="px-2 py-0.5 bg-black/60 border border-cream-200/20 rounded-sm">RISK PATTERNS</span>
                          </div>

                          <div className="my-auto py-4 z-10 flex items-end justify-between gap-2 px-4 h-24">
                            <div className="w-1/6 bg-wine-900/40 border-t border-wine-500 h-[40%] rounded-t-sm" />
                            <div className="w-1/6 bg-wine-900/60 border-t border-wine-500 h-[65%] rounded-t-sm" />
                            <div className="w-1/6 bg-wine-800/80 border-t border-wine-400 h-[85%] rounded-t-sm" />
                            <div className="w-1/6 bg-wine-900/60 border-t border-wine-500 h-[50%] rounded-t-sm" />
                            <div className="w-1/6 bg-wine-800/90 border-t border-wine-300 h-[92%] rounded-t-sm" />
                            <div className="w-1/6 bg-wine-950/40 border-t border-wine-600 h-[30%] rounded-t-sm" />
                          </div>

                          <div className="flex items-center justify-between z-10 text-[10px] font-mono text-cream-400 border-t border-cream-200/10 pt-2">
                            <span>SQLITE DATASET</span>
                            <span className="text-wine-400">CORRELATION ANALYSIS</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-cream-400">
                      <span>Inspect verified modules & findings</span>
                      <ChevronRight className="w-3.5 h-3.5 text-wine-400 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
