import React, { useState, useRef } from 'react';
import { Solution } from '../types';
import { 
  BrainCircuit, 
  Cloud, 
  ShieldCheck, 
  Compass, 
  Database, 
  Sparkles, 
  Check, 
  ArrowRight, 
  X,
  Cpu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SOLUTIONS_DATA: Solution[] = [
  {
    id: 'ai-cognitive',
    title: 'AI & Cognitive Automation',
    category: 'ai',
    shortDesc: 'Deploy domain-specific GenAI, predictive ML pipelines, and autonomous workflow agents to automate complex processes.',
    fullDesc: 'TechnoWing customizes multi-agent AI ecosystems that integrate seamlessly with your enterprise data layers. From natural language customer intelligence to automated decision support, our AI solutions drive unprecedented operational velocity.',
    iconName: 'BrainCircuit',
    benefits: [
      'Reduces manual operational processing times by up to 75%',
      'Custom fine-tuned models hosted in your private, zero-trust cloud',
      'Real-time streaming analytics and actionable foresight'
    ],
    features: [
      'Private Enterprise LLM Fine-Tuning',
      'Autonomous Workflow Multi-Agent Orchestration',
      'Document Intelligence & Semantic Extraction',
      'Predictive Anomaly Detection'
    ],
    caseStudyTitle: 'Global Financial Institution',
    caseStudyImpact: 'Automated 80% of compliance review tasks, saving $3.2M annually while improving audit accuracy to 99.8%.'
  },
  {
    id: 'cloud-native',
    title: 'Cloud Native Architecture & Scaling',
    category: 'cloud',
    shortDesc: 'Build resilient, auto-scaling multi-cloud infrastructures engineered for high throughput and continuous uptime.',
    fullDesc: 'Our cloud architects craft modern containerized microservices, serverless frameworks, and high-performance Kubernetes deployments designed to scale effortlessly under peak traffic demands.',
    iconName: 'Cloud',
    benefits: [
      'Guaranteed 99.99% high availability SLA',
      'Up to 40% reduction in monthly cloud infrastructure expenditure',
      'Sub-50ms latency across global edge locations'
    ],
    features: [
      'Multi-Cloud Kubernetes & Service Mesh',
      'Infrastructure-as-Code (Terraform / Pulumi)',
      'Automated CI/CD Pipeline Modernization',
      'FinOps Cloud Cost Optimization'
    ],
    caseStudyTitle: 'High-Growth Fintech Platform',
    caseStudyImpact: 'Scaled seamlessly from 100k to 5M daily transactions without a single second of downtime.'
  },
  {
    id: 'cyber-resilience',
    title: 'Zero-Trust Cybersecurity & Compliance',
    category: 'security',
    shortDesc: 'Fortify your corporate assets with proactive threat detection, automated key rotation, and end-to-end encryption.',
    fullDesc: 'In an era of sophisticated cyber threats, TechnoWing embeds security at every layer of your technology stack. Our zero-trust framework safeguards sensitive data while ensuring full regulatory compliance.',
    iconName: 'ShieldCheck',
    benefits: [
      'Comprehensive SOC2, ISO27001, and HIPAA compliance readiness',
      'Real-time threat monitoring and automated incident mitigation',
      'Complete visibility across all network endpoints and microservices'
    ],
    features: [
      'Zero-Trust Network Access (ZTNA)',
      'Quantum-Resistant Key Exchange & Encryption',
      'Automated Vulnerability Scanning & Patching',
      'Identity & Access Governance (IAM)'
    ],
    caseStudyTitle: 'Healthcare Enterprise',
    caseStudyImpact: 'Achieved 100% HIPAA and SOC2 compliance across 12 medical facilities in under 90 days.'
  },
  {
    id: 'strategic-advisory',
    title: 'Strategic Tech Advisory & Transformation',
    category: 'advisory',
    shortDesc: 'Align your executive technology strategy with high-impact innovation roadmaps and legacy system modernization.',
    fullDesc: 'TechnoWing senior technology advisors partner with C-suite executives to de-risk complex digital transitions, optimize engineering velocity, and evaluate emerging technologies before capital commitment.',
    iconName: 'Compass',
    benefits: [
      'Clear, ROI-driven technology investment roadmaps',
      'Accelerated engineering team velocity and modern DevOps practices',
      'Elimination of technical debt and legacy fragility'
    ],
    features: [
      'Fractional CTO & Executive Tech Alignment',
      'Legacy System Refactoring & Decoupling',
      'Technology Stack Architecture Audits',
      'Vendor & Platform Selection Frameworks'
    ],
    caseStudyTitle: 'Logistics Conglomerate',
    caseStudyImpact: 'Successfully transitioned 15-year-old legacy ERP to modern microservices, boosting dispatch speed by 250%.'
  },
  {
    id: 'data-intelligence',
    title: 'Data Mesh & Real-Time Analytics',
    category: 'data',
    shortDesc: 'Transform raw enterprise telemetry into unified, real-time intelligence with high-speed data pipelines.',
    fullDesc: 'Unlock the true value of your organizational data. We build scalable data lakes, real-time event streaming architectures, and intuitive executive dashboards that convert raw data into strategic advantage.',
    iconName: 'Database',
    benefits: [
      'Unified single source of truth across disparate business units',
      'Sub-second query response times on petabyte-scale datasets',
      'Democratized self-service business intelligence'
    ],
    features: [
      'Real-Time Kafka / Event-Driven Pipelines',
      'Snowflake & Databricks Architecture',
      'Automated Data Governance & Lineage',
      'Executive KPI & Predictive Dashboards'
    ],
    caseStudyTitle: 'Retail E-Commerce Network',
    caseStudyImpact: 'Implemented real-time inventory forecasting that decreased stockouts by 38% across 450 stores.'
  }
];

interface SolutionsProps {
  onSelectSolutionForBlueprint?: (solutionId: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolutionForBlueprint }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredSolutions = activeCategory === 'all'
    ? SOLUTIONS_DATA
    : SOLUTIONS_DATA.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-cyan-400" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-teal-300" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-indigo-400" />;
      case 'Database': return <Database className="w-6 h-6 text-emerald-400" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 relative bg-[#050508] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Forward-Thinking Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Comprehensive <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Digital & Optical Solutions</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            TechnoWing delivers end-to-end capabilities tailored to address your most complex technical challenges with precision and scale.
          </p>
        </div>

        {/* Category Filter Tabs & Navigation Scroll Controls */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-white/5 pb-6">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {[
              { id: 'all', label: 'All Solutions' },
              { id: 'ai', label: 'AI & Automation' },
              { id: 'cloud', label: 'Cloud Architecture' },
              { id: 'security', label: 'Cyber Security' },
              { id: 'advisory', label: 'Strategic Advisory' },
              { id: 'data', label: 'Data Mesh' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-xl transition-all ${
                  activeCategory === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                    : 'bg-white/5 text-gray-400 hover:text-cyan-400 border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cool Sliding Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleScrollLeft}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-cyan-300 transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleScrollRight}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-cyan-300 transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrolling Solutions Cards Container */}
        <div 
          ref={scrollContainerRef}
          className="mt-12 flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className="snap-start shrink-0 w-[85vw] sm:w-[360px] group relative rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 inline-flex">
                    {getIcon(sol.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400">
                    {sol.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {sol.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed h-14 overflow-hidden">
                  {sol.shortDesc}
                </p>

                {/* Quick Feature Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {sol.features.slice(0, 2).map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-gray-300 flex items-center gap-1 font-mono"
                    >
                      <Check className="w-3 h-3 text-cyan-400" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedSolution(sol)}
                  className="text-xs font-mono uppercase tracking-widest font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 group/btn"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Solution Details */}
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-[#050508]/95 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  {getIcon(selectedSolution.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    Solution Overview
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedSolution.title}</h3>
                </div>
              </div>

              <p className="mt-4 text-gray-300 text-base leading-relaxed">
                {selectedSolution.fullDesc}
              </p>

              {/* Benefits */}
              <div className="mt-6 space-y-2">
                <h4 className="text-xs font-mono text-white uppercase tracking-widest">Key Benefits</h4>
                <div className="space-y-2">
                  {selectedSolution.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-gray-300 text-sm">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="mt-6 space-y-2">
                <h4 className="text-xs font-mono text-white uppercase tracking-widest">Core Features</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedSolution.features.map((f, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-black/40 border border-white/10 text-gray-300 text-xs font-mono">
                      • {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study Highlight */}
              {selectedSolution.caseStudyTitle && (
                <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 space-y-1">
                  <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">Proven Impact: {selectedSolution.caseStudyTitle}</div>
                  <p className="text-xs sm:text-sm text-cyan-100 italic">
                    "{selectedSolution.caseStudyImpact}"
                  </p>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const solId = selectedSolution.id;
                    setSelectedSolution(null);
                    if (onSelectSolutionForBlueprint) {
                      onSelectSolutionForBlueprint(solId);
                    }
                  }}
                  className="flex-1 py-3 px-5 rounded-xl font-mono text-xs uppercase tracking-widest font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 text-center shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                >
                  Configure Solution Blueprint
                </button>
                <button
                  onClick={() => setSelectedSolution(null)}
                  className="py-3 px-5 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
