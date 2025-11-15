import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">{children}</span>
      
      {/* Glitch layer 1 - slight red offset */}
      <motion.span
        className="absolute top-0 left-0 opacity-70 text-[#ff0030] mix-blend-screen pointer-events-none"
        style={{ zIndex: 9 }}
        animate={{
          x: [-2, 2, -2],
          y: [1, -1, 1],
          opacity: [0, 0.7, 0]
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 5,
          times: [0, 0.5, 1]
        }}
      >
        {children}
      </motion.span>
      
      {/* Glitch layer 2 - slight cyan offset */}
      <motion.span
        className="absolute top-0 left-0 opacity-70 text-[#00ffff] mix-blend-screen pointer-events-none"
        style={{ zIndex: 9 }}
        animate={{
          x: [2, -2, 2],
          y: [-1, 1, -1],
          opacity: [0, 0.7, 0]
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 5,
          times: [0, 0.5, 1],
          delay: 0.1
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}
