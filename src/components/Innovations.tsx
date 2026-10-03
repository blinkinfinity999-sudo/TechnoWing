import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  Award, 
  Globe2, 
  TrendingUp, 
  CheckCircle,
  Code2,
  Terminal,
  Activity
} from 'lucide-react';

export const Innovations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'security' | 'methodology'>('stack');

  return (
    <section id="innovations" className="py-20 relative bg-[#050508] text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Forward-Thinking Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Engineering Precision & <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Technical Mastery</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            At TechnoWing, innovation is not a buzzword—it is a rigorous discipline. Discover how our technological stack and engineering standards set us apart.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="mt-10 flex justify-center border-b border-white/10">
          <div className="flex gap-4 sm:gap-8">
            {[
              { id: 'stack', label: 'Tech Stack & AI Architecture', icon: Code2 },
              { id: 'security', label: 'Zero-Trust Cyber Governance', icon: ShieldCheck },
              { id: 'methodology', label: 'Agile Delivery Engine', icon: Workflow },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-4 text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-2 border-b-2 transition-all ${
                    isActive
                      ? 'border-cyan-400 text-cyan-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="mt-10">
          {activeTab === 'stack' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 w-fit text-cyan-400">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">GenAI & Vector Search</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Integration of Gemini Flash & Ultra models with Milvus/pgvector embeddings for semantic enterprise data synthesis.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 w-fit text-teal-300">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Kubernetes & Multi-Cloud</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automated cluster provisioning across GCP, AWS, and Azure with Istio service mesh and GitOps deployments.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 backdrop-blur-md hover:bg-white/10 transition-all">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 w-fit text-blue-400">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Real-Time Event Streams</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  High-throughput Apache Kafka and ClickHouse pipelines capable of ingesting millions of telemetry events per second.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 grid md:grid-cols-2 gap-8 items-center backdrop-blur-md animate-in fade-in duration-200">
              <div className="space-y-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Military-Grade Defense
                </span>
                <h3 className="text-2xl font-bold text-white">Built-In Cyber Resilience</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  TechnoWing enforces zero-trust architecture at every boundary. Data is encrypted in transit and at rest with hardware security module (HSM) key isolation.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Automated SOC2 Type II compliance logging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Post-quantum cryptographic readiness</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span>Continuous automated penetration testing</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-gray-400 border-b border-white/10 pb-3">
                  <span>SECURITY_AUDIT_LOG</span>
                  <span className="text-cyan-400 font-bold">PASS_ALL_CHECKS</span>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="text-cyan-400">&gt; verifying TLS 1.3 mutual auth... [OK]</p>
                  <p className="text-teal-300">&gt; checking HSM secret key vault... [ENCRYPTED]</p>
                  <p className="text-gray-400">&gt; scanning microservice dependencies... [0 VULNERABILITIES]</p>
                  <p className="text-emerald-400">&gt; zero-trust policy active across all endpoints.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'methodology' && (
            <div className="grid sm:grid-cols-4 gap-4 text-center animate-in fade-in duration-200">
              {[
                { num: '01', title: 'Architectural Audit', desc: 'In-depth assessment of current infrastructure and bottleneck identification.' },
                { num: '02', title: 'Agile Co-Design', desc: 'Sprint-based solution modeling with constant executive feedback.' },
                { num: '03', title: 'Parallel Deployment', desc: 'Zero-downtime shadow staging and automated canary releases.' },
                { num: '04', title: 'Continuous Evolution', desc: 'Real-time performance tuning and continuous AI model optimization.' },
              ].map((step, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-left backdrop-blur-md">
                  <div className="text-2xl font-mono font-bold text-cyan-400">{step.num}</div>
                  <h4 className="text-base font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
