import React, { useState, useEffect } from 'react';
import { TechnoWingLogo } from './TechnoWingLogo';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Compass, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  onOpenConsultation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'fervox', label: 'Our Projects' },
    { id: 'solutions', label: 'Services' },
    { id: 'innovations', label: 'Tech Stack' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050508]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.8)] py-3'
          : 'bg-[#050508]/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Top Header Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1 transition-transform hover:scale-[1.02]"
        >
          <TechnoWingLogo variant="full" size="sm" darkBackground={true} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-widest rounded-full transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(34,211,238,0.5)]'
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-widest font-semibold rounded-xl text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
            <span>Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                activeSection === item.id
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold rounded-xl text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 shadow-lg shadow-cyan-500/30"
            >
              <Mail className="w-4 h-4" />
              <span>Schedule Strategic Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
