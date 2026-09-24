import React, { useState } from 'react';
import { Search, Map, Wrench, CheckCircle, RefreshCw, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

const STEP_ICONS = [Search, Map, Wrench, CheckCircle, RefreshCw];

export const DevelopmentApproach: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-32 relative border-b border-cream-200/10 bg-[#070608]/65 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Coordinates */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-cream-200/10 text-xs font-mono tracking-widest text-cream-400">
          <div className="flex items-center gap-3">
            <span className="text-wine-400 font-bold">04 //</span>
            <span>SYSTEMATIC METHODOLOGY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-wine-400">+</span>
            <span>5-PHASE EXECUTION</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-20">
          <h2 className="font-editorial text-6xl sm:text-7xl md:text-8xl font-semibold text-cream-100 tracking-tight leading-[0.9]">
            MY
            <span className="block font-light italic text-wine-400/90 font-editorial ml-4 sm:ml-12">
              APPROACH.
            </span>
          </h2>
        </div>

        {/* Vertical / Stepped Editorial Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Interactive Stepper Selector */}
          <div className="lg:col-span-5 space-y-4">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  data-cursor="SELECT"
                  className={`p-6 rounded-sm border cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'border-wine-500 bg-[#160F17] shadow-xl shadow-wine-950/60 translate-x-2'
                      : 'border-cream-200/10 bg-[#0E0A0F] hover:border-wine-500/40 hover:bg-[#120D13]'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-editorial text-3xl font-bold transition-colors ${
                        isActive ? 'text-wine-400' : 'text-cream-500 group-hover:text-cream-300'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h4
                        className={`font-editorial text-2xl font-semibold transition-colors ${
                          isActive ? 'text-cream-100' : 'text-cream-300 group-hover:text-cream-100'
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-mono text-cream-400 uppercase tracking-wider block mt-0.5">
                        {step.focus}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-wine-400' : 'text-cream-500'
                      }`}
                    />
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-wine-400 translate-x-1' : 'text-cream-600'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Active Step Deep Dive Card with Animated Progress Visualizer */}
          <div className="lg:col-span-7">
            <div className="relative border border-cream-200/15 bg-gradient-to-br from-[#140E15] via-[#100C11] to-[#0A070B] p-8 sm:p-12 rounded-sm shadow-2xl overflow-hidden min-h-[420px] flex flex-col justify-between">
              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-cream-500 select-none">+</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-cream-500 select-none">+</div>

              {/* Step indicator header */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-8 border-b border-cream-200/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono tracking-widest text-wine-400 uppercase">
                      ACTIVE PHASE / {PROCESS_STEPS[activeStep].number}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {PROCESS_STEPS.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeStep
                            ? 'w-6 bg-wine-500'
                            : i < activeStep
                            ? 'w-2 bg-wine-800'
                            : 'w-2 bg-cream-200/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="font-editorial text-6xl sm:text-7xl font-bold text-wine-400 block">
                    {PROCESS_STEPS[activeStep].number}
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream-100">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                  <p className="text-base sm:text-lg text-cream-200/90 font-light leading-relaxed pt-2">
                    {PROCESS_STEPS[activeStep].description}
                  </p>
                </div>
              </div>

              {/* Bottom specification block */}
              <div className="pt-8 mt-8 border-t border-cream-200/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                <div>
                  <span className="text-cream-500 uppercase block mb-1">
                    PRIMARY DELIVERABLE
                  </span>
                  <span className="text-cream-200 font-medium">
                    {PROCESS_STEPS[activeStep].focus}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                    className="px-3 py-1.5 border border-cream-200/15 rounded-sm hover:border-wine-500 text-cream-300 hover:text-white transition-colors"
                  >
                    PREVIOUS
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                    className="px-3 py-1.5 bg-wine-900/60 border border-wine-600/50 rounded-sm hover:bg-wine-800 text-cream-100 transition-colors"
                  >
                    NEXT STAGE →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
