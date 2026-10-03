import React from 'react';
import { TechnoWingLogo } from './TechnoWingLogo';
import { Target, Compass, Award, Shield, Users, Globe } from 'lucide-react';
import { AboutFaq } from './AboutFaq';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#050508] border-t border-white/10 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/5 p-5 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden group backdrop-blur-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex flex-col items-center text-center space-y-6">
                <TechnoWingLogo variant="full" size="lg" darkBackground={true} />

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-gray-300 leading-relaxed text-left">
                  <span className="font-mono font-bold text-cyan-400 block mb-1 uppercase tracking-wider">Company Profile</span>
                  Founded on the conviction that future-focused organizations require adaptable, intelligent, and secure technological scaffolding, TechnoWing delivers engineering excellence for world-class enterprises.
                </div>

                <div className="grid grid-cols-2 gap-3 w-full text-center font-mono">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-xl font-bold text-cyan-400">Global</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Engineering Hubs</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-xl font-bold text-teal-300">ISO27001</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Certified Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
              <Compass className="w-3.5 h-3.5" />
              <span>About TechnoWing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              Pioneering Forward-Thinking Solutions for <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Global Industry Leaders</span>
            </h2>

            <p className="text-gray-400 text-base leading-relaxed">
              TechnoWing stands at the intersection of deep engineering rigor and strategic visionary design. We help organizations modernize legacy architectures, harness domain-specific artificial intelligence, and achieve persistent technical dominance.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-md">
                <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  To eliminate technological complexity and empower forward-thinking organizations with resilient, high-speed digital infrastructure.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2 backdrop-blur-md">
                <div className="flex items-center gap-2 text-teal-300 font-mono font-bold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  Engineering Standard
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Every solution crafted by TechnoWing is built on principles of zero-trust security, sub-second latency, and continuous automated governance.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 sm:gap-6 text-[11px] sm:text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" /> Enterprise-Grade Security
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Users className="w-3.5 h-3.5 text-teal-400" /> Principal Architect Lead
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-400" /> Worldwide Support SLA
              </span>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Component */}
        <AboutFaq />

      </div>
    </section>
  );
};
