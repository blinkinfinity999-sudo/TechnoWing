import React, { useState, useEffect } from 'react';
import { ContactFormData } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Check, Sparkles, Clock, MessageSquare, X } from 'lucide-react';

interface ContactProps {
  onCloseModal?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onCloseModal }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: 'AI & Machine Intelligence',
    budget: '$50k - $150k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formspree.io/f/mnpqkjjo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          formType: 'Strategic Consultation Request',
          name: formData.fullName,
          email: formData.email,
          company: formData.company,
          scope: formData.projectType,
          budget: formData.budget,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setShowToast(true);
      } else {
        const data = await response.json();
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Failed to send consultation request. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#050508] text-gray-100 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Strategic Dialogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Initiate Your <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Forward-Thinking Consultation</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Connect directly with TechnoWing principal solution architects to discuss your technical initiatives, timeline, and custom requirements.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 space-y-6 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white">Direct Executive Contacts</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Whether you require an immediate architecture audit or wish to explore a multi-year digital transformation partnership, our team responds within 24 hours.
              </p>

              <div className="space-y-4 text-sm font-mono">
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-cyan-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Inquiries & Support</span>
                    <a href="mailto:neovis.support@gmail.com" className="font-bold text-white hover:text-cyan-400">
                      neovis.support@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-blue-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Global SLA Response</span>
                    <span className="font-bold text-white">Under 24 Hours</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-xs space-y-1">
                <div className="font-mono font-bold text-cyan-300 uppercase tracking-wider">Confidentiality & Non-Disclosure</div>
                <p className="text-gray-300">All submissions are covered under TechnoWing's standard bilateral NDA framework.</p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-8 shadow-2xl backdrop-blur-md">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Apex Global Enterprises"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                        Primary Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                      >
                        <option className="bg-[#050508] text-white">AI & Machine Intelligence</option>
                        <option className="bg-[#050508] text-white">Cloud Infrastructure & Scaling</option>
                        <option className="bg-[#050508] text-white">Zero-Trust Security & Compliance</option>
                        <option className="bg-[#050508] text-white">Strategic Tech Transformation</option>
                        <option className="bg-[#050508] text-white">Real-Time Data Analytics</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
                      {['$25k - $50k', '$50k - $150k', '$150k - $500k', '$500k+'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all ${
                            formData.budget === b
                              ? 'bg-cyan-400 text-slate-950 border-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)]'
                              : 'bg-black/40 border-white/10 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-2">
                      Project Goals & Key Objectives
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your current tech stack, timelines, and primary goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-mono">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all ${
                      isSubmitting
                        ? 'bg-cyan-500/50 text-slate-900 cursor-not-allowed'
                        : 'text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                    }`}
                  >
                    <Send className="w-4 h-4 animate-pulse" />
                    <span>{isSubmitting ? 'Submitting Consultation...' : 'Submit Strategic Consultation Request'}</span>
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in-95 duration-400">
                  {/* Subtle animated checkmark circle */}
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-950/80 via-black to-cyan-500/20 border border-cyan-400/50 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(6,182,212,0.4)] animate-success-pop">
                      <svg
                        className="w-8 h-8 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path className="animate-checkmark-draw" d="M20 6L9 17L4 12" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[11px] uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Transmission Confirmed</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      Consultation Request Received
                    </h3>
                  </div>

                  <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-cyan-300">{formData.fullName}</strong>. Your consultation inquiry regarding <strong className="text-cyan-300">{formData.projectType}</strong> has been securely logged. A TechnoWing Principal Architect will review your scope and contact you at <strong className="text-white font-mono">{formData.email}</strong> within 24 business hours.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setShowToast(false);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-gray-300 hover:text-white text-xs font-mono uppercase tracking-widest transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Floating Success Toast Notification for Immediate Feedback */}
      {showToast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 sm:right-6 z-[100] max-w-sm sm:max-w-md w-[calc(100vw-2rem)] bg-[#090b14]/95 border border-cyan-400/50 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(6,182,212,0.35)] backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden"
        >
          <div className="flex items-start gap-3.5">
            {/* Subtle Animated Check Icon in Toast */}
            <div className="relative shrink-0 mt-0.5">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 animate-success-pop shadow-[0_0_12px_rgba(6,182,212,0.35)]">
                <svg
                  className="w-4 h-4 text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path className="animate-checkmark-draw" d="M20 6L9 17L4 12" />
                </svg>
              </div>
            </div>

            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white tracking-tight">Request Received!</h4>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Confirmed
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Thank you, <span className="text-cyan-300 font-medium">{formData.fullName || 'there'}</span>. Your consultation inquiry has been logged. We will contact you at <span className="text-white font-mono text-[11px]">{formData.email}</span> within 24 hours.
              </p>
            </div>

            {/* Manual Dismiss Button */}
            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar indicating 5-second lifetime */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 animate-toast-progress" />
        </aside>
      )}
    </section>
  );
};
