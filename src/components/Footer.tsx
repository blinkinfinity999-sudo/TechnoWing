import React, { useState } from 'react';
import { TechnoWingLogo } from './TechnoWingLogo';
import { ArrowRight, CheckCircle2, Shield, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#050508] text-gray-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <TechnoWingLogo variant="full" size="md" darkBackground={true} />
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed mt-3">
              TechnoWing engineers forward-thinking digital infrastructures, domain-specific AI models, and secure cloud systems for market leaders worldwide.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>ISO 27001 Certified • SOC 2 Type II Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Solutions & Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">AI & Cognitive Automation</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Cloud Native Microservices</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Zero-Trust Cybersecurity</a></li>
              <li><a href="#blueprint" className="hover:text-cyan-400 transition-colors">Solution Blueprint Engine</a></li>
              <li><a href="#innovations" className="hover:text-cyan-400 transition-colors">Enterprise Tech Stack</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Technology Brief</h4>
            <p className="text-xs text-gray-400">
              Receive quarterly insights on enterprise AI models, multi-cloud resilience, and cybersecurity.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="executive@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl font-mono text-xs uppercase font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center gap-1 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Subscribed to TechnoWing Executive Brief.</span>
              </div>
            )}
          </div>

        </div>

        {/* Featured Quote Section */}
        <div className="py-8 text-center border-b border-white/10 my-4">
          <blockquote className="text-lg sm:text-xl font-light italic text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            "Innovation isn't just about building for today—it's about foreseeing tomorrow. Welcome to TechnoWing."
          </blockquote>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4">
          <div>
            &copy; 2026 TechnoWing. All rights reserved. | Forward-Thinking Solutions
          </div>
          <div className="flex gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-white transition-colors">Security Disclosures</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
