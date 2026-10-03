import React, { useEffect, useState } from 'react';

interface SplashLoaderProps {
  onComplete: () => void;
}

export const SplashLoader: React.FC<SplashLoaderProps> = ({ onComplete }) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show the gentle "Click anywhere to enter" prompt after 800ms
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    // Smooth long transition fade-out
    setTimeout(() => {
      onComplete();
    }, 900);
  };

  return (
    <div
      onClick={handleDismiss}
      className={`fixed inset-0 z-[9999] bg-[#030305] flex flex-col items-center justify-center cursor-pointer transition-all duration-[900ms] ease-out select-none ${
        isDismissed ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Self-contained Keyframe Animations for organic, butter-smooth flapping and breathing */}
      <style>{`
        @keyframes breatheWings {
          0%, 100% {
            opacity: 0.4;
            filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(34, 211, 238, 0.85));
          }
        }
        @keyframes flapLeft {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.72);
          }
        }
        @keyframes flapRight {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(0.72);
          }
        }
        @keyframes orbGlow {
          0%, 100% {
            transform: scale(0.92);
            filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.5));
          }
          50% {
            transform: scale(1.12);
            filter: drop-shadow(0 0 24px rgba(34, 211, 238, 0.95));
          }
        }
        @keyframes promptPulse {
          0%, 100% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-2px);
          }
        }
        @keyframes backgroundWave {
          0%, 100% {
            opacity: 0.12;
          }
          50% {
            opacity: 0.22;
          }
        }
      `}</style>

      {/* Cyber Space Background Grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#14243615_1px,transparent_1px),linear-gradient(to_bottom,#14243615_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none transition-opacity duration-1000"
        style={{ animation: 'backgroundWave 6s infinite ease-in-out' }}
      />
      
      {/* Premium organic blue atmospheric glow points */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-xl w-full px-6 text-center space-y-10 relative z-10">
        
        {/* Holographic Symmetrical Cyber Butterfly Wings */}
        <div 
          className="relative inline-flex items-center justify-center w-full max-w-[280px] mx-auto"
          style={{ animation: 'breatheWings 5s infinite ease-in-out' }}
        >
          <svg 
            viewBox="0 0 200 100" 
            className="w-full h-auto max-h-[140px] overflow-visible"
          >
            <defs>
              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Left Wing Side Group (Flaps from central axis 100px) */}
            <g style={{ transformOrigin: '100px 50px', animation: 'flapLeft 5s infinite ease-in-out' }}>
              {/* Left Wing Layer 1 (Upper Curve) */}
              <path
                d="M 100,50 Q 75,15 15,35 Q 55,55 100,50"
                fill="none"
                stroke="url(#cyanGrad)"
                strokeWidth="1.6"
              />
              {/* Left Wing Layer 2 (Middle Curve) */}
              <path
                d="M 100,50 Q 68,32 30,52 Q 68,68 100,50"
                fill="none"
                stroke="url(#cyanGrad)"
                strokeWidth="1.2"
              />
              {/* Left Wing Layer 3 (Lower Feather Curve) */}
              <path
                d="M 100,50 Q 62,48 45,68 Q 72,78 100,50"
                fill="none"
                stroke="url(#blueGrad)"
                strokeWidth="1"
              />
            </g>

            {/* Right Wing Side Group (Flaps from central axis 100px) */}
            <g style={{ transformOrigin: '100px 50px', animation: 'flapRight 5s infinite ease-in-out' }}>
              {/* Right Wing Layer 1 (Upper Curve) */}
              <path
                d="M 100,50 Q 125,15 185,35 Q 145,55 100,50"
                fill="none"
                stroke="url(#cyanGrad)"
                strokeWidth="1.6"
              />
              {/* Right Wing Layer 2 (Middle Curve) */}
              <path
                d="M 100,50 Q 132,32 170,52 Q 132,68 100,50"
                fill="none"
                stroke="url(#cyanGrad)"
                strokeWidth="1.2"
              />
              {/* Right Wing Layer 3 (Lower Feather Curve) */}
              <path
                d="M 100,50 Q 138,48 155,68 Q 128,78 100,50"
                fill="none"
                stroke="url(#blueGrad)"
                strokeWidth="1"
              />
            </g>

            {/* Symmetrical Tech Crosshair overlay (Very faint) */}
            <line x1="100" y1="20" x2="100" y2="80" stroke="rgba(34,211,238,0.1)" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="30" y1="50" x2="170" y2="50" stroke="rgba(34,211,238,0.1)" strokeWidth="0.8" strokeDasharray="3 3" />

            {/* Symmetrical Central Laser Orb */}
            <g style={{ transformOrigin: '100px 50px', animation: 'orbGlow 2s infinite ease-in-out' }}>
              <circle cx="100" cy="50" r="7.5" fill="rgba(6,182,212,0.15)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
              <circle cx="100" cy="50" r="4.5" fill="rgba(34,211,238,0.3)" />
              <circle cx="100" cy="50" r="2" fill="#ffffff" />
            </g>
          </svg>
        </div>

        {/* Minimalist Premium Brand Titles */}
        <div className="space-y-2 select-none">
          <h1 className="text-3xl font-light tracking-[0.25em] uppercase text-white font-sans">
            TECHNO<span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">WING</span>
          </h1>
          <p className="text-xs font-mono tracking-[0.4em] uppercase text-gray-500">
            Forward-Thinking Tech Ecosystem
          </p>
        </div>

        {/* Click anywhere prompt with seamless delay fade-in */}
        <div className="pt-6 h-10 select-none">
          {showPrompt && (
            <p 
              className="text-[10px] font-mono tracking-[0.3em] uppercase text-cyan-400"
              style={{ animation: 'promptPulse 2.2s infinite ease-in-out' }}
            >
              Click Anywhere To Enter
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
