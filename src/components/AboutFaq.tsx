import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Cpu, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Search,
  ExternalLink,
  ChevronsUpDown,
  CheckCircle2
} from 'lucide-react';

interface FaqItem {
  id: string;
  category: 'services' | 'ai' | 'security' | 'process';
  categoryLabel: string;
  icon: React.ElementType;
  question: string;
  answer: string[];
  keyHighlights?: string[];
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'services',
    categoryLabel: 'Services',
    icon: Layers,
    question: 'What core engineering services does TechnoWing deliver?',
    answer: [
      'TechnoWing provides end-to-end technology solutions tailored for forward-thinking enterprises:',
      '• AI & Machine Learning: Custom LLM fine-tuning, domain-specific autonomous agent architectures, computer vision, and real-time neural inference pipelines.',
      '• Cloud & DevOps: Multi-cloud architecture (AWS, GCP, Azure), Kubernetes orchestration, serverless microservices, and continuous automated CI/CD deployments.',
      '• Enterprise Cybersecurity: Zero-trust architecture implementation, cryptographic identity management, continuous compliance monitoring, and automated vulnerability scanning.',
      '• High-Scale Web & Mobile: Sub-second latency progressive web applications, distributed edge computing, and reactive systems built with React and TypeScript.'
    ],
    keyHighlights: ['AI & Agentic Systems', 'Multi-Cloud Kubernetes', 'Zero-Trust Architecture', 'High-Scale Web']
  },
  {
    id: 'faq-2',
    category: 'ai',
    categoryLabel: 'AI & Fervox',
    icon: Cpu,
    question: 'How does TechnoWing build and integrate proprietary AI systems like Fervox AI?',
    answer: [
      'Every AI solution we deploy is purpose-built to preserve enterprise data ownership and operate at mission-critical speeds:',
      '• Isolated Private Deployments: Your enterprise models and training corpora never train public LLMs or leak proprietary data outside your tenant.',
      '• Low-Latency Neural Inference: Optimized quantization, GPU streaming orchestration, and edge caching deliver sub-50ms conversational and analytical responses.',
      '• Context-Aware RAG Pipelines: Advanced Retrieval-Augmented Generation that interfaces directly with your internal documentation and vector databases.',
      '• Flagship Innovation: Our own production flagship, Fervox AI, exemplifies this speed and intuitive user experience.'
    ],
    keyHighlights: ['Strict Data Isolation', 'Sub-50ms Inference', 'Enterprise RAG Pipelines']
  },
  {
    id: 'faq-3',
    category: 'services',
    categoryLabel: 'Modernization',
    icon: Sparkles,
    question: 'Can TechnoWing modernize our legacy infrastructure without downtime?',
    answer: [
      'We specialize in phased legacy-to-modern transitions for organizations that cannot afford service interruptions:',
      '• Strangler Fig Architecture: Incrementally decoupling monolithic legacy systems into cloud-native microservices behind an intelligent API gateway.',
      '• Zero-Downtime Data Synchronizers: Real-time dual-write and change data capture (CDC) pipelines keeping databases synchronized until cutover.',
      '• 99.99% Availability Guarantee: Thorough automated regression guardrails verify functional parity across all transactional flows.'
    ],
    keyHighlights: ['99.99% Uptime SLA', 'Zero Downtime Cutover', 'CDC Data Sync']
  },
  {
    id: 'faq-4',
    category: 'security',
    categoryLabel: 'Security',
    icon: ShieldCheck,
    question: 'What security frameworks, encryption, and compliance standards do you adhere to?',
    answer: [
      'Security is treated as a structural architectural foundation rather than an afterthought:',
      '• Zero-Trust by Default: Explicit verification, least-privilege role-based access control (RBAC), and mutual TLS (mTLS) for all service communications.',
      '• Strong Cryptographic Standards: AES-256 encryption at rest and TLS 1.3 in transit with automated KMS key rotation and HSM support.',
      '• Regulatory Compliance: Architectures engineered to satisfy SOC 2 Type II, ISO 27001, HIPAA, and GDPR audit standards.'
    ],
    keyHighlights: ['ISO 27001 Certified', 'Zero-Trust RBAC', 'AES-256 & TLS 1.3']
  },
  {
    id: 'faq-5',
    category: 'process',
    categoryLabel: 'Process & Timelines',
    icon: Clock,
    question: 'What does a typical project engagement and delivery timeline look like?',
    answer: [
      'Our engagements are designed for rapid momentum, predictable milestones, and transparent velocity:',
      '• Phase 1: Architectural Discovery (Weeks 1–2): Deep technical audit, feasibility study, ROI roadmap, and interactive system prototype.',
      '• Phase 2: Core Engineering & Alpha Sprints (Weeks 3–6): Foundation infrastructure provisioning, API contracts, and MVP feature velocity.',
      '• Phase 3: Hardening & Scale (Weeks 7–10): Stress testing, security penetration audit, failover rehearsal, and enterprise integrations.',
      '• Phase 4: Production Deployment & 24/7 SLA: Production release with dedicated site reliability engineering support.'
    ],
    keyHighlights: ['2-Week Discovery', 'Agile Sprints', 'Dedicated Principal Architect']
  },
  {
    id: 'faq-6',
    category: 'process',
    categoryLabel: 'Consultation',
    icon: HelpCircle,
    question: 'How can our enterprise initiate an architectural consultation with TechnoWing?',
    answer: [
      'Getting started is straightforward and confidential:',
      '• Interactive Technology Blueprint: Use the Blueprint Planner on this site to calculate projected ROI, delivery timelines, and recommended stack architectures.',
      '• Direct Project Consultation: Fill out the Contact form below with your project goals, scope, and estimated budget.',
      '• NDA & Discovery Call: We execute standard mutual NDAs and arrange a 45-minute technical discovery session with a TechnoWing Principal Architect within 24 business hours.'
    ],
    keyHighlights: ['Direct Architect Access', '24hr Response', 'Mutual NDA Protected']
  }
];

export const AboutFaq: React.FC = () => {
  // Start with all closed so the boxes stay compact and don't take up excessive screen space
  const [openIds, setOpenIds] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleItem = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map(f => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'services', label: 'Services' },
    { id: 'ai', label: 'AI & Fervox' },
    { id: 'security', label: 'Security' },
    { id: 'process', label: 'Timelines' },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      return matchesCategory && (
        item.question.toLowerCase().includes(query) ||
        item.answer.some(line => line.toLowerCase().includes(query)) ||
        (item.keyHighlights && item.keyHighlights.some(h => h.toLowerCase().includes(query)))
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-10 mt-10 border-t border-white/10 max-w-3xl mx-auto space-y-5">
      {/* Compact Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[11px] uppercase tracking-wider mb-2">
            <HelpCircle className="w-3 h-3 text-cyan-400" />
            <span>FAQs</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Quick answers about our engineering capabilities, AI pipelines, security standards, and timelines.
          </p>
        </div>

        {/* Global Expand/Collapse toggles */}
        <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-end">
          <button
            type="button"
            onClick={expandAll}
            className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-mono text-[11px] transition-colors flex items-center gap-1"
          >
            <ChevronsUpDown className="w-3 h-3 text-cyan-400" />
            <span>Expand All</span>
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white font-mono text-[11px] transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Compact Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)] font-semibold'
                  : 'bg-white/5 text-gray-400 hover:text-gray-200 border border-white/10 hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-56">
          <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full pl-8 pr-2.5 py-1 rounded-md bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 font-mono transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Compact FAQ Accordion Boxes */}
      <div className="space-y-2">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-6 rounded-xl bg-white/5 border border-white/10 p-4 space-y-2">
            <p className="text-gray-400 font-mono text-xs">No matching questions found.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="text-xs text-cyan-400 hover:underline font-mono"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            const Icon = faq.icon;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 backdrop-blur-sm overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.06] border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                }`}
              >
                {/* Compact Accordion Header Trigger */}
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-3 sm:p-3.5 flex items-start justify-between gap-2.5 sm:gap-3 select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded-xl"
                >
                  <div className="flex items-start gap-2.5 flex-1 min-w-0">
                    <div className={`p-1.5 rounded-md border shrink-0 mt-0.5 transition-colors ${
                      isOpen
                        ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                        : 'bg-black/30 border-white/10 text-gray-400'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs sm:text-[13px] font-medium text-white tracking-tight break-words">
                          {faq.question}
                        </span>
                        <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider bg-white/5 text-cyan-400 border border-white/10 shrink-0">
                          {faq.categoryLabel}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`p-1 rounded border shrink-0 mt-0.5 transition-transform duration-200 ${
                    isOpen 
                      ? 'rotate-180 bg-cyan-500/20 border-cyan-500/30 text-cyan-300' 
                      : 'rotate-0 bg-white/5 border-white/10 text-gray-400'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {/* Animated Collapsible Answer Body */}
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-3.5 sm:px-4 pb-3.5 pt-1 text-gray-300 text-xs sm:text-[13px] leading-relaxed border-t border-white/10 space-y-2.5">
                      
                      <div className="space-y-1.5 pt-1 text-gray-300">
                        {faq.answer.map((line, idx) => (
                          <p 
                            key={idx} 
                            className={line.startsWith('•') ? 'pl-2 text-gray-300 font-normal leading-relaxed' : 'text-gray-200 font-medium'}
                          >
                            {line}
                          </p>
                        ))}
                      </div>

                      {/* Small inline highlight tags */}
                      {faq.keyHighlights && faq.keyHighlights.length > 0 && (
                        <div className="pt-2 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider mr-1">
                            Key Standard:
                          </span>
                          {faq.keyHighlights.map((hl, hIdx) => (
                            <span 
                              key={hIdx}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 font-mono text-[10px]"
                            >
                              <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                              <span>{hl}</span>
                            </span>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>
                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Compact Quick Inquiry Strip */}
      <div className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-white font-medium text-xs sm:text-sm">
            Have a specialized engineering question?
          </p>
          <p className="text-gray-400 text-[11px]">
            Our Principal Architects provide complimentary architectural scoping and technical roadmaps.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-cyan-300 font-mono text-[11px] font-medium uppercase tracking-wider transition-colors shrink-0"
        >
          <span>Ask an Architect</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
};
