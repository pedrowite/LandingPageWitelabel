import { motion } from 'motion/react';

export default function LightweightBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base Ultra Dark Background */}
      <div className="absolute inset-0 bg-[#0B0B0E]" />

      {/* ===== OPTIMIZED LIGHTING SYSTEM - 10 Layers ===== */}
      
      {/* Purple Ambient Light - Top Left */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] rounded-full opacity-[0.12] md:opacity-[0.15] blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(152,16,250,0.4) 0%, transparent 65%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.12, 0.16, 0.12],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Orange Ambient Light - Top Right */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] rounded-full opacity-[0.12] md:opacity-[0.15] blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(215,75,24,0.4) 0%, transparent 65%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.12, 0.16, 0.12],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Central Glow - Top Section */}
      <motion.div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] md:w-[1200px] md:h-[700px] rounded-full opacity-[0.08] md:opacity-[0.10] blur-[180px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(215,75,24,0.35) 0%, rgba(152,16,250,0.35) 50%, transparent 70%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Orange Detail - Left Mid */}
      <motion.div
        className="absolute top-[40%] -left-1/3 w-[700px] h-[700px] md:w-[850px] md:h-[850px] rounded-full opacity-[0.10] md:opacity-[0.12] blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,133,52,0.4) 0%, transparent 60%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.10, 0.14, 0.10],
          x: [-25, 15, -25],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Purple Detail - Right Mid */}
      <motion.div
        className="absolute top-[45%] -right-1/3 w-[700px] h-[700px] md:w-[850px] md:h-[850px] rounded-full opacity-[0.10] md:opacity-[0.12] blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(109,3,245,0.4) 0%, transparent 60%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.10, 0.14, 0.10],
          x: [25, -15, 25],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Central Glow - Middle Section */}
      <motion.div
        className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] md:w-[1200px] md:h-[700px] rounded-full opacity-[0.08] md:opacity-[0.10] blur-[180px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(152,16,250,0.35) 0%, rgba(215,75,24,0.35) 50%, transparent 70%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.08, 0.12, 0.08],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Orange Detail - Left Bottom */}
      <motion.div
        className="absolute top-[75%] -left-1/4 w-[700px] h-[700px] md:w-[850px] md:h-[850px] rounded-full opacity-[0.10] md:opacity-[0.12] blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(215,75,24,0.4) 0%, transparent 60%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.10, 0.14, 0.10],
          x: [-20, 20, -20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Purple Detail - Right Bottom */}
      <motion.div
        className="absolute top-[80%] -right-1/4 w-[700px] h-[700px] md:w-[850px] md:h-[850px] rounded-full opacity-[0.10] md:opacity-[0.12] blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(152,16,250,0.4) 0%, transparent 60%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.10, 0.14, 0.10],
          x: [20, -20, 20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      {/* Purple Ambient Light - Bottom Left */}
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] rounded-full opacity-[0.12] md:opacity-[0.15] blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(109,3,245,0.4) 0%, transparent 65%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.12, 0.16, 0.12],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5
        }}
      />

      {/* Orange Ambient Light - Bottom Right */}
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] rounded-full opacity-[0.12] md:opacity-[0.15] blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,133,52,0.4) 0%, transparent 65%)',
          willChange: 'opacity, transform'
        }}
        animate={{
          opacity: [0.12, 0.16, 0.12],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* ===== SMOOTH VERTICAL FLOW ===== */}
      
      {/* Gradient Flow - Subtle Transition */}
      <motion.div
        className="absolute top-[35%] left-0 right-0 h-[800px] opacity-[0.06] md:opacity-[0.05]"
        style={{
          background: 'linear-gradient(180deg, rgba(215,75,24,0.15) 0%, rgba(152,16,250,0.15) 35%, rgba(109,3,245,0.15) 65%, transparent 100%)',
          willChange: 'opacity'
        }}
        animate={{
          opacity: [0.06, 0.09, 0.06],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Dark Vignette Effect - Strong */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(11,11,14,0.4) 50%, rgba(11,11,14,0.8) 100%)'
        }}
      />

      {/* Edge Darkening - Extra Layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(11,11,14,0.6) 0%, transparent 15%, transparent 85%, rgba(11,11,14,0.6) 100%)'
        }}
      />
    </div>
  );
}