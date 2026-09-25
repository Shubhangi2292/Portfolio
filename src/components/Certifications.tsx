import React, { useState } from 'react';
import { Award, Edit3, Check, ExternalLink, HelpCircle } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationPlaceholder } from '../types';

export const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<CertificationPlaceholder[]>(CERTIFICATIONS);
  const [editingCert, setEditingCert] = useState<CertificationPlaceholder | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editIssuer, setEditIssuer] = useState('');
  const [editNote, setEditNote] = useState('');

  const handleStartEdit = (cert: CertificationPlaceholder) => {
    setEditingCert(cert);
    setEditTitle(cert.title);
    setEditIssuer(cert.issuer);
    setEditNote(cert.note);
  };

  const handleSaveEdit = () => {
    if (!editingCert) return;
    setCerts((prev) =>
      prev.map((c) =>
        c.id === editingCert.id
          ? {
              ...c,
              title: editTitle,
              issuer: editIssuer,
              note: editNote,
              status: 'Placeholder (Ready to customize)',
            }
          : c
      )
    );
    setEditingCert(null);
  };

  return (
    <section id="certifications" className="py-28 relative border-b border-cream-200/10 bg-[#09070B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-200/10 gap-4">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-wine-400 uppercase block mb-2">
              05 / CREDENTIALS & SPECIALIZATIONS
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl font-semibold text-cream-100 tracking-tight">
              CERTIFICATIONS
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-cream-400 uppercase max-w-xs text-left md:text-right">
            MODULAR SLOTS FOR VERIFIED CREDENTIALS
          </p>
        </div>

        {/* Guidance notice */}
        <div className="mb-10 p-4 border border-wine-800/30 bg-wine-950/20 rounded-sm flex items-start gap-3">
          <HelpCircle className="w-4 h-4 text-wine-400 shrink-0 mt-0.5" />
          <div className="text-xs text-cream-300 font-light">
            <span className="font-medium text-cream-100">Customizable Placeholder Slots:</span> In strict accordance with your guidelines, no unverified certifications have been invented. You can easily click <span className="text-wine-300 font-mono">"Quick Edit"</span> on any card below to test previewing your actual certificate names, issuers, or credential IDs.
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="border border-dashed border-cream-200/20 bg-[#120D13] p-7 rounded-sm flex flex-col justify-between hover:border-wine-500/50 hover:bg-[#161017] transition-all duration-300 relative group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-cream-200/10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-wine-400">
                    {cert.status}
                  </span>
                  <Award className="w-4 h-4 text-wine-400" />
                </div>

                <h3 className="font-editorial text-2xl font-semibold text-cream-100 mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-cream-400 mb-4">
                  {cert.issuer}
                </p>

                <p className="text-xs text-cream-300/80 leading-relaxed font-light mb-6">
                  {cert.note}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200/10 flex items-center justify-between">
                <button
                  onClick={() => handleStartEdit(cert)}
                  className="flex items-center gap-1.5 text-xs font-mono text-wine-300 hover:text-white transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Customize Slot</span>
                </button>
                <span className="text-[10px] font-mono text-cream-500">
                  READY
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for editing placeholder */}
        {editingCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="w-full max-w-lg bg-[#120D12] border border-cream-200/20 rounded-sm p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-cream-200/10">
                <h3 className="font-editorial text-2xl font-semibold text-cream-100">
                  Customize Certification Slot
                </h3>
                <button
                  onClick={() => setEditingCert(null)}
                  className="text-cream-400 hover:text-white text-xs font-mono"
                >
                  CANCEL
                </button>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-cream-400 uppercase tracking-wider mb-1.5">
                    Certificate Title
                  </label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full bg-[#181119] border border-cream-200/20 p-3 text-cream-100 rounded-sm focus:border-wine-500 outline-none"
                    placeholder="e.g. Oracle Certified Professional: Java SE"
                  />
                </div>

                <div>
                  <label className="block text-cream-400 uppercase tracking-wider mb-1.5">
                    Issuing Organization
                  </label>
                  <input
                    type="text"
                    value={editIssuer}
                    onChange={(e) => setEditIssuer(e.target.value)}
                    className="w-full bg-[#181119] border border-cream-200/20 p-3 text-cream-100 rounded-sm focus:border-wine-500 outline-none"
                    placeholder="e.g. Oracle / Coursera / HackerRank"
                  />
                </div>

                <div>
                  <label className="block text-cream-400 uppercase tracking-wider mb-1.5">
                    Description / Credential Note
                  </label>
                  <textarea
                    rows={3}
                    value={editNote}
                    onChange={(e) => setEditNote(e.target.value)}
                    className="w-full bg-[#181119] border border-cream-200/20 p-3 text-cream-100 rounded-sm focus:border-wine-500 outline-none"
                    placeholder="e.g. Credential ID: 123456 • Completed in 2026"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setEditingCert(null)}
                  className="px-4 py-2 text-xs font-mono text-cream-400 hover:text-cream-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-wine-800 hover:bg-wine-700 rounded-sm transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Update Card</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
