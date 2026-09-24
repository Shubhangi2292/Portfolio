import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, ExternalLink, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, TECHNICAL_SKILLS, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#120E13] border border-cream-200/20 rounded-sm shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200/10 bg-[#161017]">
          <div className="flex items-center gap-3">
            <span className="font-editorial text-lg font-bold text-cream-100">
              CURRICULUM VITAE
            </span>
            <span className="text-[10px] font-mono tracking-widest text-wine-400 uppercase hidden sm:inline">
              • PRINT / PDF EXPORT READY
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cream-200 bg-wine-900/60 hover:bg-wine-800 border border-wine-600/50 rounded-sm transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-cream-400 hover:text-white rounded-sm hover:bg-white/5 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#FAF8F5] text-[#1E1920] selection:bg-[#721A2A] selection:text-white print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b-2 border-[#1E1920] pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#1E1920]">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="font-mono text-sm tracking-widest uppercase font-semibold text-[#6E1C2B] mt-1">
                  {PERSONAL_INFO.roleSubtitle}
                </p>
              </div>

              <div className="text-xs font-mono text-[#4A454D] space-y-1 text-left sm:text-right">
                <div className="flex items-center gap-2 justify-start sm:justify-end">
                  <span>{PERSONAL_INFO.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-0.5 text-[#6E1C2B] hover:text-black"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div>{PERSONAL_INFO.location}</div>
                <div>{PERSONAL_INFO.university}</div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono tracking-widest uppercase font-bold text-[#6E1C2B] border-b border-[#D8D2CA] pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#2F2933] leading-relaxed">
              {PERSONAL_INFO.aboutText}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-mono tracking-widest uppercase font-bold text-[#6E1C2B] border-b border-[#D8D2CA] pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs">
                  <div>
                    <h3 className="font-bold text-[#1E1920] text-sm">
                      {edu.degree}
                    </h3>
                    <p className="text-[#59525D]">{edu.institution}</p>
                    <p className="text-[#6E6773] text-[11px] mt-0.5">{edu.details}</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="font-mono font-bold text-[#6E1C2B] text-sm">
                      {edu.score}
                    </span>
                    <span className="text-[#736C78] block text-[10px] font-mono">
                      {edu.scoreType}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono tracking-widest uppercase font-bold text-[#6E1C2B] border-b border-[#D8D2CA] pb-1 mb-3">
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-[#1E1920]">Programming: </span>
                <span className="text-[#3E3842]">Java (Core Java, OOP, Collections)</span>
              </div>
              <div>
                <span className="font-bold text-[#1E1920]">Databases: </span>
                <span className="text-[#3E3842]">SQL, SQLite</span>
              </div>
              <div>
                <span className="font-bold text-[#1E1920]">Core Engineering: </span>
                <span className="text-[#3E3842]">Data Structures & Algorithms, JDBC, Hibernate</span>
              </div>
              <div>
                <span className="font-bold text-[#1E1920]">Frameworks & Tools: </span>
                <span className="text-[#3E3842]">Streamlit, Flask, SQLAlchemy, Basic Spring Boot</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-mono tracking-widest uppercase font-bold text-[#6E1C2B] border-b border-[#D8D2CA] pb-1 mb-3">
              SELECTED PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-bold text-sm text-[#1E1920]">
                      {proj.title}
                    </h3>
                    <span className="font-mono text-[11px] text-[#6E1C2B]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-[#413B45] my-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-[11px] text-[#554E5A]">
                    <span className="font-bold">Technologies: </span>
                    {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Approach */}
          <div>
            <h2 className="text-xs font-mono tracking-widest uppercase font-bold text-[#6E1C2B] border-b border-[#D8D2CA] pb-1 mb-2">
              ENGINEERING APPROACH
            </h2>
            <p className="text-xs text-[#413B45] leading-relaxed">
              Understand Requirements → Plan Modular Architecture → Build Clean Code with OOP/Java → Test Rigorously → Continual Refinement & Query Optimization.
            </p>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 border-t border-cream-200/10 bg-[#140E15] flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400 gap-2">
          <span className="font-mono text-[11px]">
            To link an external PDF, place your file in <code className="text-wine-300">/public/resume.pdf</code>
          </span>
          <button
            onClick={onClose}
            className="text-xs font-mono text-cream-300 hover:text-white"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
