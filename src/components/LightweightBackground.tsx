import { motion } from 'motion/react';

export default function LightweightBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base Ultra Dark Background */}
      <div className="absolute inset-0 bg-[#000000]" />

      {/* ENHANCED Purple Ambient Light - Top Left */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full opacity-25 md:opacity-50 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(152,16,250,0.6) 0%, rgba(152,16,250,0.3) 40%, transparent 70%)'
        }}
      />

      {/* ENHANCED Orange Ambient Light - Top Right */}
      <div
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full opacity-25 md:opacity-50 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,133,52,0.6) 0%, rgba(215,75,24,0.3) 40%, transparent 70%)'
        }}
      />

      {/* ENHANCED Central Glow - Middle Screen */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] md:w-[1400px] md:h-[800px] rounded-full opacity-15 md:opacity-25 blur-[140px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(215,75,24,0.4) 0%, rgba(152,16,250,0.4) 50%, transparent 75%)'
        }}
      />

      {/* ENHANCED Purple Ambient Light - Bottom Left */}
      <div
        className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full opacity-20 md:opacity-45 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(152,16,250,0.6) 0%, rgba(109,3,245,0.3) 40%, transparent 70%)'
        }}
      />

      {/* ENHANCED Orange Ambient Light - Bottom Right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] md:w-[1100px] md:h-[1100px] rounded-full opacity-20 md:opacity-45 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,133,52,0.6) 0%, rgba(215,75,24,0.3) 40%, transparent 70%)'
        }}
      />

      {/* Additional Mid-Section Glows */}
      <div
        className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-15 md:opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(215,75,24,0.5) 0%, transparent 65%)'
        }}
      />

      <div
        className="absolute top-2/3 -right-1/4 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-15 md:opacity-30 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(152,16,250,0.5) 0%, transparent 65%)'
        }}
      />

      {/* Lighter Vignette Effect for cleaner look */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%)'
        }}
      />
    </div>
  );
}