import React, { useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  ShoppingCart, 
  Truck, 
  Zap, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw,
  Sliders,
  ShieldAlert,
  Download,
  Send
} from 'lucide-react';

const INDUSTRIES = [
  { id: 'finance', label: 'Financial Services', icon: Building2, desc: 'High-frequency trading, risk compliance, fraud detection' },
  { id: 'healthcare', label: 'Healthcare & Biotech', icon: Stethoscope, desc: 'HIPAA compliance, patient telemetry, AI diagnostics' },
  { id: 'retail', label: 'Retail & E-Commerce', icon: ShoppingCart, desc: 'Inventory prediction, omnichannel, personalized recommendation' },
  { id: 'logistics', label: 'Supply Chain & Logistics', icon: Truck, desc: 'Route optimization, fleet telemetry, automated warehouse' },
  { id: 'energy', label: 'Energy & Utilities', icon: Zap, desc: 'Grid management, predictive maintenance, sustainability telemetry' },
];

const SCALES = [
  { id: 'growth', label: 'Growth Scale', desc: '50 - 250 Employees' },
  { id: 'enterprise', label: 'Mid-Market Enterprise', desc: '250 - 1,500 Employees' },
  { id: 'global', label: 'Global Conglomerate', desc: '1,500+ Employees' },
];

const GOALS = [
  { id: 'ai', label: 'Custom AI & Workflow Automation', impact: 'High Velocity' },
  { id: 'cloud', label: 'Cloud Native & Microservices Redesign', impact: 'Zero Downtime' },
  { id: 'security', label: 'Zero-Trust Cyber Resilience', impact: 'Full Protection' },
  { id: 'data', label: 'Real-Time Data Mesh Analytics', impact: 'Predictive Insights' },
];

export const BlueprintPlanner: React.FC = () => {
  const [industry, setIndustry] = useState('finance');
  const [scale, setScale] = useState('enterprise');
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['ai', 'cloud']);
  const [timeline, setTimeline] = useState('q1');
  const [generated, setGenerated] = useState(false);
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      if (selectedGoals.length > 1) {
        setSelectedGoals(selectedGoals.filter((g) => g !== goalId));
      }
    } else {
      setSelectedGoals([...selectedGoals, goalId]);
    }
  };

  const handleGenerateBlueprint = () => {
    setGenerated(true);
    setSubmitted(false);
  };

  const handleRequestProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactEmail) {
      setSubmitted(true);
    }
  };

  return (
    <section id="blueprint" className="py-20 relative bg-[#050508] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Architecture Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Design Your <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">TechnoWing Solution Blueprint</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Configure your business parameters to build a tailored forward-thinking technology roadmap with projected timelines and architecture recommendations.
          </p>
        </div>

        {/* Interactive Configuration Panel */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          
          {!generated ? (
            <div className="space-y-10">
              
              {/* Step 1: Industry Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
                  1. Select Industry Domain
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {INDUSTRIES.map((ind) => {
                    const Icon = ind.icon;
                    const isSelected = industry === ind.id;
                    return (
                      <button
                        key={ind.id}
                        type="button"
                        onClick={() => setIndustry(ind.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                            : 'bg-black/40 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-white/5 text-gray-300'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-white">{ind.label}</div>
                            <div className="text-xs text-gray-400 line-clamp-1">{ind.desc}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Scale */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
                  2. Organization Scale
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {SCALES.map((s) => {
                    const isSelected = scale === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setScale(s.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-cyan-500/10 border-cyan-400 text-white shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                            : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <div className="font-bold text-sm text-white">{s.label}</div>
                        <div className="text-xs text-gray-400 mt-1">{s.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Technical Goals */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
                  3. Primary Technical Goals (Select 1 or more)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GOALS.map((g) => {
                    const isSelected = selectedGoals.includes(g.id);
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => toggleGoal(g.id)}
                        className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-cyan-500/10 border-cyan-400 text-white'
                            : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            isSelected ? 'bg-cyan-400 border-cyan-400 text-slate-950' : 'border-white/20'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                          <div>
                            <span className="font-bold text-sm text-white">{g.label}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-cyan-300 border border-white/10">
                          {g.impact}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Generate Button */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={handleGenerateBlueprint}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
                >
                  <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
                  <span>Generate Forward-Thinking Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            /* Generated Blueprint Results */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-6 border-b border-white/10 flex-wrap gap-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    TechnoWing Architecture Report
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Custom Transformation Blueprint
                  </h3>
                </div>
                <button
                  onClick={() => setGenerated(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-mono uppercase tracking-widest"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reconfigure Inputs
                </button>
              </div>

              {/* Recommended Roadmap Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Phase 1: Foundation (Weeks 1-4)</div>
                  <div className="text-base font-bold text-white">Zero-Trust Infrastructure Audit & Mesh Setup</div>
                  <p className="text-xs text-gray-400">Establish encrypted telemetry channels, container governance, and domain security.</p>
                </div>
                <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Phase 2: Core Engine (Weeks 5-10)</div>
                  <div className="text-base font-bold text-white">Custom Multi-Agent AI & Cloud Microservices</div>
                  <p className="text-xs text-gray-400">Deploy domain-trained ML models with auto-scaling Kubernetes cluster integration.</p>
                </div>
                <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Phase 3: Optimization (Weeks 11-14)</div>
                  <div className="text-base font-bold text-white">Real-Time Data Pipeline & Executive Dashboard</div>
                  <p className="text-xs text-gray-400">Enable unified streaming telemetry and automated compliance monitoring.</p>
                </div>
              </div>

              {/* Metrics Summary */}
              <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-widest">Projected ROI</div>
                  <div className="text-2xl font-mono font-bold text-white mt-1">340%</div>
                  <div className="text-[11px] text-gray-400">Within 12 months</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-teal-300 uppercase tracking-widest">Time to Value</div>
                  <div className="text-2xl font-mono font-bold text-white mt-1">60 Days</div>
                  <div className="text-[11px] text-gray-400">First production release</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-blue-300 uppercase tracking-widest">Security Score</div>
                  <div className="text-2xl font-mono font-bold text-white mt-1">A+ Certified</div>
                  <div className="text-[11px] text-gray-400">Zero-trust baseline</div>
                </div>
              </div>

              {/* Proposal Request Form */}
              {!submitted ? (
                <form onSubmit={handleRequestProposal} className="p-6 rounded-xl bg-black/40 border border-white/10 space-y-4">
                  <h4 className="text-base font-bold text-white">Receive Complete Blueprint & Executive PDF</h4>
                  <p className="text-xs text-gray-400">Enter your business email to receive the expanded technical specifications document and schedule a briefing with a TechnoWing Principal Architect.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="corporate.email@company.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-widest font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.4)] whitespace-nowrap"
                    >
                      Request Formal Proposal
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-white block">Blueprint Request Received!</span>
                    Our lead solution architect will review your parameters and contact you at <strong className="text-cyan-300 font-mono">{contactEmail}</strong> within 1 business day.
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
