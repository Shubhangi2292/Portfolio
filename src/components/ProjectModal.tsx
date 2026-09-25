import React, { useEffect } from 'react';
import { X, CheckCircle2, Layers, Cpu, Compass, HelpCircle, Lightbulb, CheckSquare, Target } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click handler */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#100C11] border border-cream-200/20 rounded-sm shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-cream-200/10 bg-[#150F16]">
          <div className="flex items-center gap-3">
            <span className="font-editorial text-2xl font-bold text-wine-400">
              {project.number}
            </span>
            <div className="h-4 w-[1px] bg-cream-200/20" />
            <span className="text-xs font-mono tracking-widest uppercase text-cream-300">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-cream-400 hover:text-white hover:bg-wine-950/60 rounded-sm transition-colors border border-transparent hover:border-cream-200/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          <div>
            <h3 className="font-editorial text-2xl sm:text-4xl lg:text-5xl font-semibold text-cream-100 leading-tight">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-wine-400 mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Overview */}
          <div className="p-5 bg-wine-950/30 border border-wine-800/30 rounded-sm">
            <span className="text-[10px] font-mono tracking-widest uppercase text-wine-400 block mb-1">
              OVERVIEW
            </span>
            <p className="text-sm sm:text-base text-cream-200 leading-relaxed font-light">
              {project.longDescription}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#140E14] border border-cream-200/10 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-wine-400">
                <HelpCircle className="w-4 h-4" />
                <span>THE PROBLEM</span>
              </div>
              <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 bg-[#140E14] border border-cream-200/10 rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-wine-400">
                <Lightbulb className="w-4 h-4" />
                <span>THE SOLUTION</span>
              </div>
              <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Modules / Features */}
          {project.modules && project.modules.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-cream-400 uppercase">
                <Layers className="w-4 h-4 text-wine-400" />
                <span>CORE MODULES & FEATURES</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {project.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#161017] border border-cream-200/10 hover:border-wine-500/40 transition-colors"
                  >
                    <h5 className="font-semibold text-sm text-cream-100 mb-1 flex items-start gap-2">
                      <span className="text-wine-400 font-mono text-xs mt-0.5">✦</span>
                      <span>{mod.title}</span>
                    </h5>
                    <p className="text-xs text-cream-400 leading-relaxed pl-4">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Stack */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest text-cream-400 uppercase">
              <Cpu className="w-4 h-4 text-wine-400" />
              <span>TECHNOLOGIES</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono tracking-wide text-cream-200 bg-[#181119] border border-cream-200/15 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role & Outcome Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-cream-200/10">
            <div>
              <h5 className="text-xs font-mono tracking-widest uppercase text-wine-400 mb-2 flex items-center gap-2">
                <CheckSquare className="w-3.5 h-3.5" />
                <span>MY ROLE</span>
              </h5>
              <p className="text-xs sm:text-sm text-cream-300 leading-relaxed font-light">
                {project.roleSummary}
              </p>
            </div>
            <div>
              <h5 className="text-xs font-mono tracking-widest uppercase text-wine-400 mb-2 flex items-center gap-2">
                <Target className="w-3.5 h-3.5" />
                <span>OUTCOME</span>
              </h5>
              <p className="text-xs sm:text-sm text-cream-300 leading-relaxed font-light">
                {project.impactOrOutcome}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-cream-200/10 bg-[#120D13] flex items-center justify-between">
          <span className="text-[11px] font-mono tracking-widest text-cream-400 uppercase">
            SHUBHANGI BIRADAR • VERIFIED PROJECT REPORT
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-cream-200 bg-wine-900/60 hover:bg-wine-800 border border-wine-600/50 rounded-sm transition-colors cursor-pointer"
          >
            CLOSE DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};
