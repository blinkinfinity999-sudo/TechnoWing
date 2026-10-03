import React, { useRef } from 'react';
import { Rocket, Zap, Target, Lightbulb, Bot, ShieldCheck, Sparkles, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';

export const Highlights: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const highlightsList = [
    {
      icon: Rocket,
      emoji: '🚀',
      title: 'Cutting-Edge AI Integration',
      desc: 'We harness modern artificial intelligence to build intelligent, fast, and highly reliable tools tailored to your needs.',
      badge: 'AI Core',
    },
    {
      icon: Zap,
      emoji: '⚡',
      title: 'Ultra-Light & High Performance',
      desc: 'Our platforms are built for speed, security, and smooth performance across all devices without unnecessary bloat.',
      badge: 'Speed SLA',
    },
    {
      icon: Target,
      emoji: '🎯',
      title: 'User-Centric Design',
      desc: 'Clean interfaces, intuitive navigation, and sleek aesthetics—we make sophisticated technology effortlessly simple to use.',
      badge: 'UX First',
    },
    {
      icon: Lightbulb,
      emoji: '💡',
      title: 'Forward-Thinking Innovation',
      desc: "We don't just follow tech trends; we continuously evolve our tools to provide smart, future-proof solutions.",
      badge: 'Future Ready',
    },
  ];

  const helpInList = [
    {
      icon: Bot,
      title: 'Smart AI Solutions',
      desc: 'Simplifying complex workflows using modern AI platforms.',
    },
    {
      icon: Zap,
      title: 'Productivity Enhancement',
      desc: 'Tools built to save time, reduce repetitive effort, and boost efficiency.',
    },
    {
      icon: Sparkles,
      title: 'Next-Gen Web Experiences',
      desc: 'Fast, secure, and modern digital ecosystems.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support & Custom Requests',
      desc: 'Providing active support, user assistance, and custom promo opportunities for our community.',
    },
  ];

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="highlights" className="py-20 relative bg-[#050508] border-t border-white/10 text-gray-100 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* SECTION 3: OUR HIGHLIGHTS */}
        <div>
          
          {/* Header & Navigation Arrows layout */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-6">
            <div className="text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Advantages</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
                Our <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Highlights</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
                Explore the four key pillars that define TechnoWing technology and drive real-world impact.
              </p>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2 self-start md:self-end shrink-0">
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

          {/* Horizontal Scrolling Highlights Container */}
          <div 
            ref={scrollContainerRef}
            className="mt-12 flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {highlightsList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="snap-start shrink-0 w-[85vw] sm:w-[320px] group relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md hover:bg-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-2xl shadow-[0_0_12px_rgba(0,0,0,0.5)]">
                        {item.emoji}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed h-20 overflow-hidden">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span className="flex items-center gap-1.5">
                      <IconComp className="w-3.5 h-3.5" /> Verified Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: WHAT WE HELP IN */}
        <div id="services" className="pt-8 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Tailored Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              What We <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Help In</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Empowering individuals and enterprise teams with smart, purpose-built digital tools.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {helpInList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start gap-5 hover:bg-white/[0.08] hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
