import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#050508]">
      {/* Background Atmosphere */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP BRAND DISPLAY - Displaying user-provided TechnoWing Hero Image */}
        <div className="relative mb-12 rounded-2xl bg-white/5 border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-md group">
          <img
            src={getAssetUrl('images/technowing_hero_banner.jpg')}
            alt="TechnoWing Forward-Thinking Solutions"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[480px] rounded-2xl transform transition-transform duration-700 group-hover:scale-[1.01]"
          />
          {/* Big flat gradient square covering the bottom-right corner watermark with zero borders/shadows */}
          <div 
            className="absolute bottom-0 right-0 w-36 h-20 bg-gradient-to-br from-[#182838] via-[#152331] to-[#0c1620]"
            style={{
              zIndex: 10
            }}
          />
        </div>

        {/* HERO CONTENT BELOW TOP BRAND DISPLAY with subtle parallax effect */}
        <div 
          className="max-w-4xl mx-auto text-center space-y-6 mt-6 transition-transform duration-75 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.12}px)`,
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Forward-Thinking Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white">
            Shaping the Future of <span className="font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">Digital Innovation</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            At TechnoWing, we believe technology should be smart, intuitive, and built for real-world impact. Founded on the principle of Forward-Thinking Solutions, we specialize in developing modern AI-driven applications and web tools designed to make everyday tasks effortless. Whether it's smart automation, sleek software design, or cutting-edge AI tools, TechnoWing is dedicated to delivering technology that keeps you ahead of the curve.
          </p>
        </div>

      </div>
    </section>
  );
};
