import React, { useState } from 'react';
import { ExternalLink, FolderKanban, Bug, Lightbulb, Ticket, CheckCircle2, MessageSquareText } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const FervoxAndHelp: React.FC = () => {
  // Help & Support Form state
  const [activeCategory, setActiveCategory] = useState<'bug' | 'feature' | 'promo'>('bug');
  const [helpEmail, setHelpEmail] = useState('');
  const [helpDetails, setHelpDetails] = useState('');
  const [helpSubmitted, setHelpSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleHelpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!helpEmail.trim() || !helpDetails.trim()) return;

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
          formType: 'Help & Support Report',
          category: activeCategory,
          email: helpEmail,
          message: helpDetails
        })
      });

      if (response.ok) {
        setHelpSubmitted(true);
      } else {
        const data = await response.json();
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Failed to send report. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050508] border-t border-white/10 text-gray-100 overflow-hidden w-full max-w-full">
      
      {/* SECTION: OUR PROJECTS */}
      <section id="fervox" className="py-20 relative overflow-hidden w-full max-w-full">
        {/* Glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
              <FolderKanban className="w-4 h-4 text-cyan-400" />
              <span>Our Projects</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Fervox AI — <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Powered by TechnoWing</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Fervox AI is our flagship artificial intelligence experience, engineered to deliver fast, intelligent, and context-aware assistance. Designed with simplicity and power at its core, Fervox AI helps you solve problems, streamline ideas, and automate tasks seamlessly. It represents the high standard of innovation and performance that TechnoWing stands for.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://technowing-projects.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FolderKanban className="w-4 h-4 text-slate-950" />
                <span>Check our Projects</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
              </a>
            </div>
          </div>

          {/* Featured Project Showcase Card */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Project Image Display */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_25px_rgba(34,211,238,0.2)] bg-black/40">
                  <img
                    src={getAssetUrl('images/fervox_ai_logo_new.png')}
                    alt="Fervox AI Logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Info & Visit Website CTA */}
              <div className="md:col-span-7 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-widest">
                  <span>Flagship AI Application</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Fervox AI Platform
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Experience next-generation neural capabilities and intelligent contextual processing. Visit the official Fervox AI web application to test its features live.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://blinkinfinity999-sudo.github.io/Fervox-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Visit Fervox AI</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="https://technowing-projects.ai.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 text-white hover:text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <FolderKanban className="w-4 h-4 text-cyan-400" />
                    <span>Check our Projects</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Explore all projects CTA banner */}
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-black/60 to-blue-950/40 border border-cyan-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-white font-bold text-base sm:text-lg flex items-center justify-center sm:justify-start gap-2">
                <FolderKanban className="w-5 h-5 text-cyan-400" />
                <span>Explore the Complete TechnoWing Ecosystem</span>
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">
                Discover all live deployments, research experiments, and enterprise software built by our engineering team.
              </p>
            </div>
            <a
              href="https://technowing-projects.ai.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <span>Check our Projects</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5: HOW CAN WE HELP YOU */}
      <section id="help" className="py-20 relative border-t border-white/10 overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
              <MessageSquareText className="w-3.5 h-3.5" />
              <span>User Assistance & Support</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              How Can <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">We Help You</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg">
              Got a question, need support, or looking for promo codes? We’ve got you covered.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Bug Submissions */}
            <div
              onClick={() => setActiveCategory('bug')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 backdrop-blur-md ${
                activeCategory === 'bug'
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
              }`}
            >
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-cyan-400 w-fit">
                <Bug className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">App Support & Bug Submissions</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Encountered an issue? Submit your bug reports directly to our technical team for quick fixes.
              </p>
            </div>

            {/* Feature Requests */}
            <div
              onClick={() => setActiveCategory('feature')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 backdrop-blur-md ${
                activeCategory === 'feature'
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
              }`}
            >
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-teal-300 w-fit">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Feature Requests</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Have an idea to make our tools better? We listen to our users and build what you need.
              </p>
            </div>

            {/* Promo Codes */}
            <div
              onClick={() => setActiveCategory('promo')}
              className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 backdrop-blur-md ${
                activeCategory === 'promo'
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                  : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
              }`}
            >
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-blue-400 w-fit">
                <Ticket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Promo Codes & Exclusive Access</h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Contact us to request exclusive promo access and special feature unlocks for TechnoWing tools.
              </p>
            </div>

          </div>

          {/* Interactive Request Form */}
          <div className="max-w-2xl mx-auto rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-8 backdrop-blur-md">
            {!helpSubmitted ? (
              <form onSubmit={handleHelpSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                    Submit {activeCategory === 'bug' ? 'Bug Report' : activeCategory === 'feature' ? 'Feature Request' : 'Promo Code Request'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveCategory('bug')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                        activeCategory === 'bug' ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/5 text-gray-400'
                      }`}
                    >
                      Bug
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('feature')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                        activeCategory === 'feature' ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/5 text-gray-400'
                      }`}
                    >
                      Feature
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveCategory('promo')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                        activeCategory === 'promo' ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/5 text-gray-400'
                      }`}
                    >
                      Promo
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-1">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={helpEmail}
                    onChange={(e) => setHelpEmail(e.target.value)}
                    placeholder="user@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm font-mono focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-gray-300 mb-1">
                    {activeCategory === 'bug'
                      ? 'Describe the Bug / Issue encountered'
                      : activeCategory === 'feature'
                      ? 'Describe your Feature Idea'
                      : 'Request details for Promo Access'} *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={helpDetails}
                    onChange={(e) => setHelpDetails(e.target.value)}
                    placeholder={
                      activeCategory === 'bug'
                        ? 'Details regarding expected vs actual behavior...'
                        : activeCategory === 'feature'
                        ? 'Describe how this tool/feature would help you...'
                        : 'Tell us which TechnoWing tool you wish to unlock...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm font-mono focus:outline-none focus:border-cyan-400"
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
                  className={`w-full py-3 rounded-xl font-mono text-xs uppercase font-bold tracking-widest transition-all ${
                    isSubmitting
                      ? 'bg-cyan-500/50 text-slate-900 cursor-not-allowed'
                      : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                  }`}
                >
                  {isSubmitting ? 'Sending Report...' : 'Submit Request to TechnoWing Team'}
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 flex items-center justify-center mx-auto shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Request Sent Successfully</h4>
                <p className="text-xs text-gray-300 font-mono">
                  Thank you! Our technical team received your message and will reply to <span className="text-cyan-300">{helpEmail}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setHelpSubmitted(false);
                    setHelpDetails('');
                  }}
                  className="mt-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-white"
                >
                  Send Another Request
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
