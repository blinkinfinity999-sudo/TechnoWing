import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Solutions } from './components/Solutions';
import { FervoxAndHelp } from './components/FervoxAndHelp';
import { BlueprintPlanner } from './components/BlueprintPlanner';
import { Innovations } from './components/Innovations';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AiWidget } from './components/AiWidget';
import { ScrollReveal } from './components/ScrollReveal';
import { SplashLoader } from './components/SplashLoader';
import { Command } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showSplash, setShowSplash] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy effect to update Navbar highlights as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      // Track all 7 main navigation IDs
      const sections = ['hero', 'highlights', 'fervox', 'solutions', 'innovations', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run immediately on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multi-platform robust keyboard navigation:
  // Supports: Ctrl + Shift + [1-7] (Windows/Linux)
  // Supports: Cmd + Shift + [1-7] (Mac)
  // Supports: Alt + Shift + [1-7] (Fallback for browser-hijacked hotkeys like Ctrl+Shift+N)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isModifierActive = e.ctrlKey || e.metaKey || e.altKey;
      const isShiftActive = e.shiftKey;

      if (isModifierActive && isShiftActive) {
        const sections = ['hero', 'highlights', 'fervox', 'solutions', 'innovations', 'about', 'contact'];
        const num = parseInt(e.key, 10);

        if (num >= 1 && num <= 7) {
          e.preventDefault(); // Stop native browser triggers (e.g. Chrome's Ctrl+Shift+N incognito)
          const targetId = sections[num - 1];
          scrollToSection(targetId);

          // Format friendly section display name for the visual HUD toast
          const sectionNames: Record<string, string> = {
            hero: 'Home Banner',
            highlights: 'Core Highlights',
            fervox: 'Our Projects',
            solutions: 'Services Catalog',
            innovations: 'Tech Stack',
            about: 'About Us',
            contact: 'Consultation Form',
          };

          setToastMessage(`Shortcut Triggered: Navigating to ${sectionNames[targetId]} [Section ${num}]`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, []);

  // Automatically clear HUD toast after 2.5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="min-h-screen bg-[#050508] text-gray-100 font-sans selection:bg-cyan-400 selection:text-slate-950 overflow-x-hidden w-full max-w-full">
      
      {/* Dynamic Cyber Splash Loader */}
      {showSplash && (
        <SplashLoader onComplete={() => setShowSplash(false)} />
      )}

      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={scrollToSection}
        onOpenConsultation={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main className="relative overflow-x-hidden w-full max-w-full">
        
        {/* Top Hero Showcase */}
        <div id="hero">
          <Hero />
        </div>

        {/* Our Highlights (4 Key Facts) & What We Help In */}
        <div id="highlights">
          <ScrollReveal>
            <Highlights />
          </ScrollReveal>
        </div>

        {/* Fervox AI & How Can We Help You Support Portal */}
        <div id="fervox">
          <ScrollReveal>
            <FervoxAndHelp />
          </ScrollReveal>
        </div>

        {/* Core Solutions Grid */}
        <div id="solutions">
          <ScrollReveal>
            <Solutions
              onSelectSolutionForBlueprint={(solutionId) => {
                scrollToSection('blueprint');
              }}
            />
          </ScrollReveal>
        </div>

        {/* Interactive Blueprint Solution Planner */}
        <div id="blueprint">
          <ScrollReveal>
            <BlueprintPlanner />
          </ScrollReveal>
        </div>

        {/* Tech Stack & Engineering Mastery */}
        <div id="innovations">
          <ScrollReveal>
            <Innovations />
          </ScrollReveal>
        </div>

        {/* About TechnoWing Company Profile */}
        <div id="about">
          <ScrollReveal>
            <About />
          </ScrollReveal>
        </div>

        {/* Contact & Strategic Consultation Form */}
        <div id="contact">
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        </div>

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating AI Assistant Widget (Bottom-Right Corner) */}
      <AiWidget />

      {/* Visual Keyboard Navigation HUD Toast */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[999] px-6 py-3.5 bg-black/90 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.3)] backdrop-blur-md flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <Command className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
