import React from 'react';
import { getAssetUrl } from '../utils/assets';

interface TechnoWingLogoProps {
  variant?: 'full' | 'compact' | 'symbol-only';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  darkBackground?: boolean;
}

export const TechnoWingLogo: React.FC<TechnoWingLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  darkBackground = true,
}) => {
  // Size mapping for logo components
  const sizeConfig = {
    sm: { symbol: 32, textMain: 'text-xl', textSub: 'text-[9px]', tracking: 'tracking-widest' },
    md: { symbol: 48, textMain: 'text-3xl', textSub: 'text-[11px]', tracking: 'tracking-[0.2em]' },
    lg: { symbol: 64, textMain: 'text-5xl', textSub: 'text-sm', tracking: 'tracking-[0.25em]' },
    xl: { symbol: 88, textMain: 'text-6xl', textSub: 'text-base', tracking: 'tracking-[0.3em]' },
    hero: { symbol: 120, textMain: 'text-7xl md:text-8xl', textSub: 'text-lg md:text-xl', tracking: 'tracking-[0.35em]' },
  }[size];

  return (
    <div className={`inline-flex items-center gap-4 md:gap-6 select-none ${className}`}>
      {/* Real logo image uploaded by the user */}
      <div className="relative flex-shrink-0">
        <img
          src={getAssetUrl('images/technowing_logo.png')}
          alt="TechnoWing Logo"
          referrerPolicy="no-referrer"
          style={{
            width: sizeConfig.symbol,
            height: sizeConfig.symbol,
          }}
          className="rounded-full object-cover filter drop-shadow-[0_4px_12px_rgba(34,211,238,0.25)] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Brand Name and Tagline */}
      {variant !== 'symbol-only' && (
        <div className="flex flex-col justify-center">
          <div
            className={`font-sans font-extrabold tracking-tight leading-none ${sizeConfig.textMain}`}
            style={{
              fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            }}
          >
            <span className={darkBackground ? 'text-slate-100' : 'text-slate-900'}>Techno</span>
            <span className="text-cyan-400">Wing</span>
          </div>

          {variant === 'full' && (
            <div
              className={`font-semibold uppercase tracking-widest ${sizeConfig.textSub} ${sizeConfig.tracking} mt-1.5 ${
                darkBackground ? 'text-slate-300/90' : 'text-slate-600'
              }`}
            >
              FORWARD-THINKING SOLUTIONS
            </div>
          )}
        </div>
      )}
    </div>
  );
};
