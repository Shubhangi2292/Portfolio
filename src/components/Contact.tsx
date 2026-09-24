import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-32 relative border-b border-cream-200/10 bg-[#070608]/65 backdrop-blur-[2px] overflow-hidden">
      {/* Ambient background wine radial */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-wine-900/20 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Coordinates */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-cream-200/10 text-xs font-mono tracking-widest text-cream-400">
          <div className="flex items-center gap-3">
            <span className="text-wine-400 font-bold">06 //</span>
            <span>COMMUNICATION CHANNEL</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-wine-400">+</span>
            <span>AVAILABLE WORLDWIDE / BANGALORE</span>
          </div>
        </div>

        {/* Dramatic Section Headline: LET'S CREATE SOMETHING MEANINGFUL. */}
        <div className="mb-20">
          <h2 className="font-editorial text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-semibold text-cream-100 tracking-tight leading-[0.88] select-none text-balance">
            <span>LET'S</span>
            <span className="block italic font-light text-cream-300 font-editorial ml-4 sm:ml-12 hover:text-wine-300 transition-colors">
              CREATE
            </span>
            <span className="block text-cream-100">
              SOMETHING
            </span>
            <span className="block italic font-light text-wine-400/90 font-editorial ml-6 sm:ml-16">
              MEANINGFUL.
            </span>
          </h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Access Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-base sm:text-lg text-cream-200/90 font-light leading-relaxed">
                Currently seeking full-time opportunities as a Java Developer or Software Developer. Let's discuss open positions, project architectures, or collaboration.
              </p>
            </div>

            {/* Direct Email Card with Magnetic Copy */}
            <div className="p-7 rounded-sm bg-[#120D12] border border-cream-200/15 hover:border-wine-500/50 transition-colors">
              <span className="text-[10px] font-mono tracking-widest uppercase text-wine-400 block mb-2">
                DIRECT EMAIL INQUIRY
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-sm sm:text-base text-cream-100 hover:text-wine-300 transition-colors break-all"
                  data-cursor="EMAIL"
                >
                  {PERSONAL_INFO.email}
                </a>

                <div className="flex items-center gap-2">
                  <MagneticButton
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-cream-300 bg-[#1B141C] hover:bg-wine-900 border border-cream-200/10 rounded-sm transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-cream-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </MagneticButton>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-1.5 text-cream-300 hover:text-white bg-[#1B141C] border border-cream-200/10 rounded-sm"
                    title="Send Email Directly"
                  >
                    <ArrowUpRight className="w-4 h-4 text-wine-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social & Professional Profile Placeholders */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-cream-400 block">
                PROFESSIONAL DIRECTORIES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#100C11] border border-cream-200/10 hover:border-wine-500/50 rounded-sm group transition-all"
                  data-cursor="OPEN"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-wine-400" />
                    <div>
                      <span className="font-semibold text-xs text-cream-100 block">
                        LinkedIn
                      </span>
                      <span className="text-[10px] font-mono text-cream-400">
                        Profile Slot
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cream-400 group-hover:text-wine-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-[#100C11] border border-cream-200/10 hover:border-wine-500/50 rounded-sm group transition-all"
                  data-cursor="OPEN"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-wine-400" />
                    <div>
                      <span className="font-semibold text-xs text-cream-100 block">
                        GitHub
                      </span>
                      <span className="text-[10px] font-mono text-cream-400">
                        Repository Slot
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cream-400 group-hover:text-wine-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-sm bg-[#100C11] border border-cream-200/10 text-xs font-mono text-cream-400 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-wine-400 shrink-0" />
              <span>Bangalore, Karnataka, India • Open to on-site and remote engineering opportunities</span>
            </div>
          </div>

          {/* Right Column: Interactive Editorial Transmission Form */}
          <div className="lg:col-span-7">
            <div className="border border-cream-200/15 bg-gradient-to-b from-[#140E15] to-[#0E0A0F] p-8 sm:p-12 rounded-sm shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-8 border-b border-cream-200/10">
                <span className="text-xs font-mono tracking-widest text-wine-400 uppercase">
                  TRANSMISSION TERMINAL
                </span>
                <span className="text-[11px] font-mono text-cream-400">
                  IMMEDIATE ROUTING
                </span>
              </div>

              {isSubmitted ? (
                <div className="p-10 text-center bg-wine-950/40 border border-wine-600/40 rounded-sm space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-wine-800/50 text-wine-300 flex items-center justify-center mx-auto border border-wine-500/40">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-editorial text-3xl font-semibold text-cream-100">
                    Message Dispatched
                  </h4>
                  <p className="text-xs sm:text-sm text-cream-300 max-w-sm mx-auto font-light leading-relaxed">
                    Thank you for your transmission. Shubhangi Biradar will review your note and respond promptly to the email provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 text-xs font-mono text-wine-300 bg-wine-950/70 border border-wine-700/50 rounded-sm">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono tracking-wider text-cream-400 uppercase mb-2">
                        NAME / RECRUITER *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Tech Recruiter"
                        className="w-full bg-[#181119] border border-cream-200/15 p-4 text-xs text-cream-100 placeholder-cream-600 rounded-sm focus:border-wine-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono tracking-wider text-cream-400 uppercase mb-2">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="recruiter@company.com"
                        className="w-full bg-[#181119] border border-cream-200/15 p-4 text-xs text-cream-100 placeholder-cream-600 rounded-sm focus:border-wine-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider text-cream-400 uppercase mb-2">
                      SUBJECT / OPPORTUNITY
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Developer Opening / Technical Discussion"
                      className="w-full bg-[#181119] border border-cream-200/15 p-4 text-xs text-cream-100 placeholder-cream-600 rounded-sm focus:border-wine-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider text-cream-400 uppercase mb-2">
                      MESSAGE BODY *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding role requirements, engineering stack, or next steps..."
                      className="w-full bg-[#181119] border border-cream-200/15 p-4 text-xs text-cream-100 placeholder-cream-600 rounded-sm focus:border-wine-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-white bg-wine-800 hover:bg-wine-700 disabled:opacity-50 border border-wine-600 rounded-sm transition-all duration-200 shadow-xl shadow-wine-950/80 cursor-pointer group"
                    data-cursor="TRANSMIT"
                  >
                    <span>{isSubmitting ? 'DISPATCHING...' : 'GET IN TOUCH →'}</span>
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
